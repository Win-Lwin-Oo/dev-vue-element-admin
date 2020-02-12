import { GameResultTools } from '@/utils/gameResultTools'
import { BetTypeNameTouBao, BetTypeNameLunPan } from '@/common/common'

// 被盯玩家的单条下注资料
export class BetInfoModel {
  basicInfo = {
    account: '',
    // name: '',
    billId: 0,
    operateTime: '',
    updateAt: '',
    resultName: '',
    numZ: 0,
    numX: 0,
    numH: 0,
    numZd: 0,
    numXd: 0,
    winNum: 0,
    leftCoin: 0,
    result: '',
    state: 0,
    billNum: 0,
    betType: 0,
    betNum: 0,
    // 押注统计字符串
    staticStr: '',
    // 订单描述
    typeStr: '',

    // 新押注项
    // 大/龙单/闲1平 骰宝(单骰1)
    num1: 0,
    // 小/龙双/闲1翻 骰宝(单骰2)
    num2: 0,
    // 任意对子/龙红/闲2平 骰宝(单骰3)
    num3: 0,
    // 完美对子/龙黑/闲2翻 骰宝(单骰4)
    num4: 0,
    // 庄龙宝/虎单/闲3平 骰宝(单骰5)
    num5: 0,
    // 闲龙宝/虎双/闲3翻 骰宝(单骰6)
    num6: 0,
    // 超级六/虎红 骰宝(组合5、6)
    num7: 0,
    // 虎黑 骰宝(组合4、6)
    num8: 0
  };

  tableInfo = {
    typeName: '',
    type: 0,
    tableName: '',
    tableId: '',
    changNum: 0,
    juNum: 0
  };

  yaZhuInfo = []; //  {yazhu: 30, num: 30}
  yaZhuStr = ''; // 弃用 无最新押注

  setData(data) {
    this.setBasicInfo(data)
    this.setTableInfo(data)
    this.setPlayType()
  }

  setBasicInfo(data) {
    this.basicInfo.billId = data.billId
    this.basicInfo.account = data.account
    this.basicInfo.operateTime = data.betTime
    this.basicInfo.updateAt = data.updateAt

    this.basicInfo.typeStr = data.typeStr
    if (!data.result) {
      this.basicInfo.result = ''
    } else {
      this.basicInfo.result = data.result
    }
    this.basicInfo.numZ = data.numZ
    this.basicInfo.numX = data.numX
    this.basicInfo.numH = data.numH
    this.basicInfo.numZd = data.numZd
    this.basicInfo.numXd = data.numXd

    for (let num = 1; num <= 8; num++) {
      let key = 'num' + num
      this.basicInfo[key] = data[key] ? data[key] : 0
    }

    this.basicInfo.winNum = data.winNum
    this.basicInfo.leftCoin = data.leftCoin
    this.basicInfo.state = data.state
    this.basicInfo.billNum = data.billNum
    this.basicInfo.betType = data.betType
    this.basicInfo.betNum = data.betNum
  }

  setTableInfo(data) {
    this.tableInfo.type = data.gameType
    this.tableInfo.tableName = data.tableName
    this.tableInfo.changNum = data.screenId
    this.tableInfo.juNum = data.inningId
    this.tableInfo.tableId = data.tableId
    switch (data.gameType) {
      case 1:
        this.tableInfo.typeName = '百家乐'
        break
      case 2:
        this.tableInfo.typeName = '龙虎斗'
        break
      case 3:
        this.tableInfo.typeName = '牛牛'
        break
      case 4:
        this.tableInfo.typeName = '骰宝'
        break
      case 5:
        this.tableInfo.typeName = '轮盘'
        break
      default:
        this.tableInfo.typeName = ''
    }
  }
  clearData() {
    this.clearBasicInfo()
    this.clearTableInfo()
    this.clearYaZhuInfo()
  }

  clearBasicInfo() {
    for (let i in this.basicInfo) {
      this.basicInfo[i] = ''
    }
  }

  clearTableInfo() {
    for (let i in this.tableInfo) {
      if (typeof (this.tableInfo[i]) === 'number') {
        this.tableInfo[i] = 0
      } else {
        this.tableInfo[i] = ''
      }
    }
  }

  clearYaZhuInfo() {
    this.yaZhuInfo = []
    this.yaZhuStr = ''
  }

  setPlayType() {
    let type = this.tableInfo.type
    if (!type) {
      this.basicInfo.staticStr = this.basicInfo.typeStr
      return
    }
    let str = ''
    switch (type) {
      case 1:
        if (this.basicInfo.numZ) str += ' 庄：' + this.basicInfo.numZ
        if (this.basicInfo.numX) str += ' 闲：' + this.basicInfo.numX
        if (this.basicInfo.numH) str += ' 和：' + this.basicInfo.numH
        if (this.basicInfo.numZd) str += ' 庄对：' + this.basicInfo.numZd
        if (this.basicInfo.numXd) str += ' 闲对：' + this.basicInfo.numXd
        if (this.basicInfo.num1) str += ' 大：' + this.basicInfo.num1
        if (this.basicInfo.num2) str += ' 小：' + this.basicInfo.num2
        if (this.basicInfo.num3) str += ' 任意对子：' + this.basicInfo.num3
        if (this.basicInfo.num4) str += ' 完美对子：' + this.basicInfo.num4
        if (this.basicInfo.num5) str += ' 庄龙宝：' + this.basicInfo.num5
        if (this.basicInfo.num6) str += ' 闲龙宝：' + this.basicInfo.num6
        this.basicInfo.resultName = GameResultTools.getBaijiaResultName(this.basicInfo.result)
        break
      case 2:
        if (this.basicInfo.numZ) str += ' 虎：' + this.basicInfo.numZ
        if (this.basicInfo.numX) str += ' 龙：' + this.basicInfo.numX
        if (this.basicInfo.numH) str += ' 和：' + this.basicInfo.numH
        if (this.basicInfo.num1) str += ' 龙单：' + this.basicInfo.num1
        if (this.basicInfo.num2) str += ' 龙双：' + this.basicInfo.num2
        if (this.basicInfo.num3) str += ' 龙红：' + this.basicInfo.num3
        if (this.basicInfo.num4) str += ' 龙黑：' + this.basicInfo.num4
        if (this.basicInfo.num5) str += ' 虎单：' + this.basicInfo.num5
        if (this.basicInfo.num6) str += ' 虎双：' + this.basicInfo.num6
        if (this.basicInfo.num7) str += ' 虎红：' + this.basicInfo.num7
        if (this.basicInfo.num8) str += ' 虎黑：' + this.basicInfo.num8
        this.basicInfo.resultName = GameResultTools.getLonghuResultName(this.basicInfo.result)
        break
      case 3:
        if (this.basicInfo.num1) str += ' 闲1(平倍)' + this.basicInfo.num1
        if (this.basicInfo.num2) str += ' 闲1(翻倍)' + this.basicInfo.num2
        if (this.basicInfo.num3) str += ' 闲2(平倍)' + this.basicInfo.num3
        if (this.basicInfo.num4) str += ' 闲2(翻倍)' + this.basicInfo.num4
        if (this.basicInfo.num5) str += ' 闲3(平倍)' + this.basicInfo.num5
        if (this.basicInfo.num6) str += ' 闲3(翻倍)' + this.basicInfo.num6
        this.basicInfo.resultName = GameResultTools.getNiuniuResultName(this.basicInfo.result)
        break
      case 4:
        if (this.basicInfo.betNum) str += ` ${BetTypeNameTouBao[this.basicInfo.betType]} (${this.basicInfo.betNum})`
        this.basicInfo.resultName = GameResultTools.getTouBaoResultName(this.basicInfo.result)
        break
      case 5:
        if (this.basicInfo.betNum) str += ` ${BetTypeNameLunPan[this.basicInfo.betType]} (${this.basicInfo.betNum})`
        this.basicInfo.resultName = GameResultTools.getLunPanResultName(this.basicInfo.result)
        break
      default:
        str = ''
    }
    this.basicInfo.staticStr = str
    if (GameResultTools.checkVoid(this.basicInfo.result) === 2) {
      this.basicInfo.staticStr += '(已作废)'
    }
    if (Number(this.basicInfo.state) === 4) {
      this.basicInfo.resultName = '退押'
    }
    if (!this.basicInfo.resultName) {
      this.basicInfo.resultName = '已确认押注，未产生结果'
    }
  }
}

