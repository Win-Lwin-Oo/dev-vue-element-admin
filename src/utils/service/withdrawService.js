import DateTools from '@/utils/DateTools'

const proto = require('../../proto/proto.js').nested
import store from '@/store'
import * as http from '@/utils/http'

export class WithdrawalsRequestService {
  // constructor() {
  // }

  canTimer = true;
  // 当前未处理申请数量
  requestNum = null;
  // 当前未处理充值申请数量
  rechargeNum = null;
  // 当前未处理提现申请数量
  withDrawNum = null;
  timer = null;

  // oldrecharge = null;
  // oldwithDraw = null;
  // 最新请求时间
  lastRechargeTime = '';
  lastWithDrawalTime = '';
  lastReadTime = '';
  // 获取数据
  // pageIndex, pageSize, startDate, endDate, theKey, checkStatus
  async getRequest(args) {
    let info = {}
    if (!args && !this.canTimer) {
      return
    }
    if (!args) {
      let date = DateTools.getDateStr(new Date())
      info = {
        account: store.getters.curUserInfo.account,
        name: store.getters.curUserInfo.name,
        pageIndex: 1,
        pageSize: 10,
        startDate: date,
        endDate: date,
        checkStatus: 0,
        channelId: -1
      }
    } else {
      info = {
        account: store.getters.curUserInfo.account,
        name: store.getters.curUserInfo.name,
        pageIndex: args.pageIndex,
        pageSize: args.pageSize,
        startDate: args.startDate,
        endDate: args.endDate,
        theKey: args.theKey,
        checkStatus: args.checkStatus,
        billType: args.billType,
        channelId: args.channelId
      }
    }
    let self = this
    let reqMessage = proto.pay.QueryWithDrawalsRequest.create(info)
    let reqMsg = proto.pay.QueryWithDrawalsRequest.encode(reqMessage).finish()
    if (!args) this.canTimer = false
    let res = await http.sendForGet('/pay/queryWithdrawals', reqMsg)
    if (!args) this.canTimer = true
    let resData = proto.pay.QueryWithDrawalsReplay.decode(res)
    if (!args) {
      this.requestNum = resData.count
      this.rechargeNum = resData.rechargeCount
      this.withDrawNum = resData.count - resData.rechargeCount
      if (!this.requestNum) self.requestNum = null
      if (!this.rechargeNum) self.rechargeNum = null
      if (!this.withDrawNum) self.withDrawNum = null
      if (this.rechargeNum && self.lastRechargeTime !== resData.lastRechargeTime) {
        this.lastRechargeTime = resData.lastRechargeTime
        // this.notification.blank('提示', '有新充值审核，请及时处理');
        // this.aud.autoPlay('baojing');
      }
      if (this.withDrawNum && this.lastWithDrawalTime !== resData.lastWithDrawalTime) {
        this.lastWithDrawalTime = resData.lastWithDrawalTime
        // this.notification.blank('提示', '有新提现审核，请及时处理');
        // this.aud.autoPlay('withDraw');
      }
      if (resData.lastReadTime && this.lastReadTime !== resData.lastReadTime) {
        this.lastReadTime = resData.lastReadTime
        // this.notification.blank('提示', '有提现订单已完成，请及时查看');
        // this.aud.autoPlay('readSound');
      }
      // this.menu.visit(function (item, parentMenum, depth) {
      //   if (item.text === '提现审核') {
      //     item.badge = this.withDrawNum;
      //     this.menu.resume();
      //   }
      //   if (item.text === '充值审核') {
      //     item.badge = this.rechargeNum;
      //     this.menu.resume();
      //   }
      // });
    }
    // else {
    //   if (callBack) {
    //     callBack(resData);
    //   }
    // }
    return resData
  }

  // 更新数字
  startCheck() {
    this.canTimer = true
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
    this.getRequest()
    this.timer = setInterval(() => {
      this.getRequest()
    }, 3000)
  }

  clearCheck() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
}
