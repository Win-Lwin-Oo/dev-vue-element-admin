import { PassWordTool } from '@/utils/passWordTools'

// 添加修改 会员 代理 信息结构
export class UserModel {
  autoAccount = '';
  limitType = '1'; // 当前限红方案的类型
  basicInfo = {
    account: '',
    password: '123456',
    name: '',
    hePercent: '0',
    washPercent: '0',
    agentPercent: '0',
    coinNum: 0,
    createdAt: '',
    state: 0,
    remark: '',
    agentStatus: 'on',
    washType: 'double',
    washCoinNum: 0,
    chineseWashCoinNum: '零',
    addCoinNum: 0,
    chineseAddCoinNum: '零',
    userType: 2, // 2 代理 1 会员
    agentType: 2, // 1 个人 2 直属
    limitIdArr: [], // 代理使用
    limitIdNnArr: [], // 代理使用
    innerGameType: 3,
    washVisiable: 2,
    isWashForLongHu: false,
    inStake: 1,
    washButtonVisiable: 2,
    stateHadChange: false,
    parent: '',
    parentName: '',

    openShot: 1, // 1.不开启 2.开启
    phone: '' // 电话号
  };
  parentInfo = {
    account: '',
    password: '',
    name: '',
    hePercent: '0',
    washPercent: '0',
    agentPercent: '0',
    coinNum: 0,
    remark: '',
    agentStatus: 'on',
    washType: 'double',
    controlCoin: 0,
    innerGameType: 3,
    createdAt: ''
  };
  // limitInfo = {
  //     maxZhuang: 0,
  //     maxXian: 0,
  //     maxHe: 0,
  //     maxZhuangDui: 0,
  //     maxXianDui: 0,
  //     minZhuang: 0,
  //     minXian: 0,
  //     minHe: 0,
  //     minZhuangDui: 0,
  //     minXianDui: 0,
  //     total: 0,
  // };

  visibleInfo = {
    selfVisible: false,
    limitSetVisible: true,
    washVisible: true,
    // UpDownVisible: false,
    tableDistributionVisible: false,
    washInSearchVisible: false,
    washLogVisible: false,
    coinInfoInSearchVisible: false
  };

  setData(data, dataType) {
    this.limitType = '1'
    this.setBasicInfo(data, dataType)
  }

  setBasicInfo(data, dataType) {
    this.basicInfo.account = data.account
    this.basicInfo.password = data.password
    this.basicInfo.name = data.name
    this.basicInfo.hePercent = data.drawRate
    this.basicInfo.washPercent = data.washRate
    this.basicInfo.agentPercent = data.stake
    this.basicInfo.coinNum = data.coin
    this.basicInfo.remark = data.remarks
    this.basicInfo.limitIdArr = []
    this.basicInfo.limitIdNnArr = []
    for (let i in data.limitIdArr) {
      // if (data.limitIdArr[i].gameType === 1) {
      this.basicInfo.limitIdArr.push(data.limitIdArr[i].id)
      // }
      // if (data.limitIdArr[i].gameType === 3) {
      //     this.basicInfo.limitIdNnArr.push(data.limitIdArr[i].id);
      // }
    }
    this.basicInfo.washVisiable = data.washVisiable
    this.basicInfo.washButtonVisiable = data.washButtonVisiable
    this.basicInfo.createdAt = data.createdAt
    this.basicInfo.state = data.state
    this.basicInfo.parent = data.parent ? data.parent : data.parentAccount
    this.basicInfo.parentName = data.parentName
    this.basicInfo.openShot = data.openShot
    if (data.agentType || data.agentType === 0) {
      this.basicInfo.agentType = data.agentType
    }
    let onStateList = [1, 3]
    if (data.state === 4) {
      this.basicInfo.agentStatus = 'qing'
    } else {
      if (onStateList.indexOf(data.state) >= 0) {
        this.basicInfo.agentStatus = 'on'
      } else {
        this.basicInfo.agentStatus = 'off'
      }
    }
    this.basicInfo.stateHadChange = false
    // if (dataType === 'member') {
    //     this.basicInfo.agentStatus = data.state === 1 ? 'on' : data.state === 4 ? 'qing' : 'off';
    // } else if (dataType === 'agent') {
    //     this.basicInfo.agentStatus = data.state === 1 ? 'on' : 'off';
    // }

    this.basicInfo.washType = data.washType === 2 ? 'single' : 'double'
    this.basicInfo.userType = dataType === 'member' ? 1 : 2
    this.basicInfo.innerGameType = data.innerGameType
    this.basicInfo.isWashForLongHu = data.innerGameType === 1
    this.basicInfo.inStake = data.inStake
    this.basicInfo.phone = data.phone
  }

  setParentInfo(data) {
    this.parentInfo.account = data.account
    // this.parentInfo.password = data.password;
    this.parentInfo.name = data.name
    // this.parentInfo.hePercent = data.drawRate;
    // this.parentInfo.washPercent = data.washRate;
    // this.parentInfo.agentPercent = data.stake;
    this.parentInfo.coinNum = data.coin
    this.parentInfo.innerGameType = data.innerGameType
    // this.parentInfo.remark = data.remarks;
    // this.parentInfo.agentStatus = data.state === 0 ? 'on' : 'off';
    // this.parentInfo.washType = data.washType === 0 ? 'single' : 'double';
    // this.parentInfo.coin = data.coin;
  }

  // setLimitInfo(data) {
  //
  // }

  clearData() {
    this.clearBasicInfo()
    this.autoAccount = ''
    this.limitType = '1'
  }

  clearBasicInfo() {
    this.basicInfo.account = ''
    this.basicInfo.password = '123456'
    this.basicInfo.name = ''
    this.basicInfo.hePercent = '0'
    this.basicInfo.washPercent = '0'
    this.basicInfo.agentPercent = '0'
    this.basicInfo.coinNum = 0
    this.basicInfo.remark = ''
    this.basicInfo.agentStatus = 'on'
    this.basicInfo.washType = 'double'
    this.basicInfo.washCoinNum = 0
    this.basicInfo.addCoinNum = 0
    this.basicInfo.userType = 2
    this.basicInfo.limitIdArr = []
    this.basicInfo.limitIdNnArr = []
    this.basicInfo.innerGameType = 3
    this.basicInfo.chineseWashCoinNum = '零'
    this.basicInfo.chineseAddCoinNum = '零'
    this.basicInfo.createdAt = ''
    this.basicInfo.isWashForLongHu = false
    this.basicInfo.inStake = 1
    this.basicInfo.agentType = 2
    this.basicInfo.washButtonVisiable = 2
    this.basicInfo.washVisiable = 2
    this.basicInfo.stateHadChange = false
    this.basicInfo.openShot = 1
  }

  clearParentInfo() {
    this.parentInfo.account = ''
    // this.parentInfo.password = '';
    this.parentInfo.name = ''
    // this.parentInfo.hePercent = 0.0;
    // this.parentInfo.washPercent = 0.0;
    // this.parentInfo.agentPercent = 0.0;
    this.parentInfo.coinNum = 0
    this.parentInfo.innerGameType = 3
    // this.parentInfo.remark = '';
    // this.parentInfo.agentStatus = 'off';
    // this.parentInfo.washType = 'single';
  }

  setDataForCreate(data) {
    this.basicInfo.password = PassWordTool.getPassWord()
    this.basicInfo.innerGameType = data.innerGameType
    this.basicInfo.isWashForLongHu = data.innerGameType === 1
    this.basicInfo.washType = data.washType === 1 ? 'double' : 'single'
    if (this.basicInfo.agentType === 2) {
      if (data.account === '') {
        this.basicInfo.washPercent = '100'
        this.basicInfo.hePercent = '100'
      } else {
        this.basicInfo.washPercent = data.washRate
        this.basicInfo.hePercent = data.drawRate
      }
      if (this.basicInfo.innerGameType === 1) {
        this.basicInfo.hePercent = '0'
        this.basicInfo.isWashForLongHu = true
      } else {
        this.basicInfo.isWashForLongHu = false
      }
    }
  }

  // clearLimitInfo() {
  //
  // }

  clearVisible() {
    for (let i in this.visibleInfo) {
      this.visibleInfo[i] = false
    }
    this.visibleInfo.limitSetVisible = true
    this.visibleInfo.washVisible = true
  }

  clearCoinInfo() {
    this.basicInfo.addCoinNum = 0
    this.basicInfo.washCoinNum = 0
    this.basicInfo.chineseAddCoinNum = '零'
    this.basicInfo.chineseWashCoinNum = '零'
  }

  autoSetAccount(num) {
    let from = Math.pow(10, num - 1)
    let to = 0
    let str = ''
    while (str.length < num) {
      str = str + '9'
    }
    to = parseInt(str, 0)
    this.basicInfo.account = this.createRandom2(1, from, to).toString()
    this.autoAccount = this.basicInfo.account
  }

  checkSelf() {
    let res = {
      result: 0,
      errStr: ''
    }
    if ((this.basicInfo.userType === 1 && this.basicInfo.account.length !== 8) || (this.basicInfo.userType === 2 && this.basicInfo.account.length !== 6)) {
      res.result = 1
      res.errStr = '帐号长度错误'
    }
    if (this.basicInfo.name.length === 0) {
      res.result = 1
      res.errStr = '缺少名称'
    }
    if (this.basicInfo.password.length === 0) {
      res.result = 1
      res.errStr = '缺少密码'
    }
    if (this.basicInfo.limitIdArr.length === 0) {
      if (this.basicInfo.userType === 2) {
        res.result = 1
        res.errStr = '限红数据配置不正确'
      }
    }
    if (this.basicInfo.phone.length !== 0 && this.basicInfo.phone.length !== 11 && this.basicInfo.phone.length !== 8) {
      res.result = 1
      res.errStr = '手机号码不正确'
    }
    return res
  }

  getUserState() {
    if (!this.basicInfo.stateHadChange) {
      return this.basicInfo.state
    } else {
      if (this.basicInfo.agentStatus === 'on') {
        return 1
      }
      if (this.basicInfo.agentStatus === 'off') {
        return 2
      }
      if (this.basicInfo.agentStatus === 'qing') {
        return 4
      }
    }
  }
  createRandom2(num, from, to) {
    let arr = []
    let json = {}
    while (arr.length < num) {
      //  产生单个随机数
      let ranNum = Math.ceil(Math.random() * (to - from)) + from
      //  通过判断json对象的索引值是否存在 来标记 是否重复
      if (!json[ranNum]) {
        json[ranNum] = 1
        arr.push(ranNum)
      }
    }
    return arr
  }
}
