import { NumberTools } from '@/utils/numberTools'
export class ApplyModel {
  basicInfo = {
    id: 0,
    billType: 0,
    phone: '',
    billId: '',
    account: '',
    name: '',
    bankAccount: '',
    bankName: '',
    checkUserAccount: '',
    checkUserName: '',
    checkStatus: -1,
    remarks: '',
    userRemarks: '',
    userName: '',
    moneyNum: 0,
    coinNum: 0,
    checkTime: '',
    completeTime: '',
    createdAt: '',
    leftCoin: '',
    checkStatusName: '',
    chineseMoneyNum: '',
    payMethod: '',
    payProvinces: '',
    payTime: '',
    operatorName: '',
    actualAmount: 0,
    channelId: 0
  };

  setData(data) {
    this.basicInfo.id = data.id
    this.basicInfo.billId = data.billId
    this.basicInfo.billType = data.billType
    this.basicInfo.phone = data.phone
    this.basicInfo.account = data.account
    this.basicInfo.name = data.name
    this.basicInfo.operatorName = data.operatorName
    this.basicInfo.bankAccount = data.bankAccount
    this.basicInfo.bankName = data.bankName
    this.basicInfo.checkUserAccount = data.checkUserAccount
    this.basicInfo.checkUserName = data.checkUserName
    this.basicInfo.checkStatus = data.checkStatus
    this.basicInfo.remarks = data.remarks
    this.basicInfo.userRemarks = data.userRemarks
    this.basicInfo.userName = data.userName
    this.basicInfo.moneyNum = data.moneyNum
    this.basicInfo.coinNum = data.coinNum
    this.basicInfo.checkTime = data.checkTime
    this.basicInfo.completeTime = data.completeTime
    this.basicInfo.createdAt = data.createdAt
    this.basicInfo.leftCoin = data.leftCoin
    let statusName = ['未处理', '待汇款', '已拒绝', '已汇款', '拒绝汇款']
    if (data.billType === 2) statusName = ['未处理', '已同意', '已拒绝', '已汇款', '拒绝汇款']
    this.basicInfo.checkStatusName = statusName[data.checkStatus]
    this.basicInfo.chineseMoneyNum = NumberTools.TransformToChinese(data.moneyNum)

    this.basicInfo.payMethod = data.payMethod
    this.basicInfo.payProvinces = data.payProvinces
    this.basicInfo.payTime = data.payTime
    this.basicInfo.actualAmount = data.actualAmount
    this.basicInfo.channelId = data.channelId
  }

  clearbasicInfo() {
    this.basicInfo.id = 0
    this.basicInfo.billId = ''
    this.basicInfo.account = ''
    this.basicInfo.name = ''
    this.basicInfo.bankAccount = ''
    this.basicInfo.bankName = ''
    this.basicInfo.checkUserAccount = ''
    this.basicInfo.checkUserName = ''
    this.basicInfo.checkStatus = -1
    this.basicInfo.remarks = ''
    this.basicInfo.userRemarks = ''
    this.basicInfo.userName = ''
    this.basicInfo.moneyNum = 0
    this.basicInfo.coinNum = 0
    this.basicInfo.checkTime = ''
    this.basicInfo.completeTime = ''
    this.basicInfo.createdAt = ''
    this.basicInfo.leftCoin = ''

    this.basicInfo.payMethod = ''
    this.basicInfo.payProvinces = ''
    this.basicInfo.payTime = ''
    this.basicInfo.channelId = 0
  }
}
