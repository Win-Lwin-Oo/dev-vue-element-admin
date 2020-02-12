import { BetTypeNameTouBao, BetTypeNameLunPan } from '@/common/common'
import { GameResultTools } from '@/utils/gameResultTools'

export class BillModel {
  // 旧数据
  tableName = '';
  screenId = 0;
  inningId = 0;
  betTime = '';
  resultTime = '';
  leftCoin = '';
  winNum = '';
  washFee = '';
  gameType = 0;
  result = '';
  numZ = 0;
  numX = 0;
  numH = 0;
  numZd = 0;
  numXd = 0;
  typeStr = '';
  coinB = '';
  billNum = 0;
  washRate = '';
  washRateStr = '';
  washNum = 0;
  washType = 0;
  dividend = 0;
  drawRate = '';
  drawRateStr = '';
  drawNum = 0;
  drawFee = '';
  ip = '';
  address = '';
  state = 0;

  // 新数据
  // 押注金额
  staticStr = '';
  // 结果数据
  resultName = '';
  gameTypeName = '';
  gameId = '';

  statics = {
    pointNum: 0,
    winNum: 0,
    zhuangNum: 0,
    xianNum: 0,
    heNum: 0,
    zhuangDuiNum: 0,
    xianDuiNum: 0,
    Xian1Ping: 0,
    Xian1Fan: 0,
    Xian2Ping: 0,
    Xian2Fan: 0,
    Xian3Ping: 0,
    Xian3Fan: 0,
    // 新押注项
    // 龙单
    longDan: 0,
    // 龙双
    longShuang: 0,
    // 龙红
    longHong: 0,
    // 龙黑
    longHei: 0,
    // 虎单
    huDan: 0,
    // 虎双
    huShuang: 0,
    // 虎红
    huHong: 0,
    // 虎黑
    huHei: 0,

    // 任意对子
    renYiDui: 0,
    // 完美对子
    wanMeiDui: 0,
    // 大
    da: 0,
    // 小
    xiao: 0,
    // 庄龙宝
    zhuangLongBao: 0,
    // 闲龙宝
    xianLongBao: 0,

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
  // 新押注项
  // 大/龙单/闲1平
  num1 = 0;
  // 小/龙双/闲1翻
  num2 = 0;
  // 任意对子/龙红/闲2平
  num3 = 0;
  // 完美对子/龙黑/闲2翻
  num4 = 0;
  // 庄龙宝/虎单/闲3平
  num5 = 0;
  // 闲龙宝/虎双/闲3翻
  num6 = 0;
  // 超级六/虎红
  num7 = 0;
  // 虎黑
  num8 = 0;
  // 押注类型
  betType = 0;
  // 押注数额
  betNum = 0;
  setData(data, baiJiaOddsInfo) {
    // 旧数据自动赋值
    for (let i in data) {
      this[i] = data[i]
    }
    if (!this.drawRate) this.drawRate = '0'
    if (!this.washRate) this.washRate = '0'
    this.drawRateStr = this.drawRate + '%'
    this.washRateStr = this.washRate + '%'
    if (Number(this.winNum) > 0) {
      this.winNum = '+' + this.winNum
    }
    // 新数据转换
    switch (data.gameType) {
      case 1:
        this.gameTypeName = '百家乐'
        break
      case 2:
        this.gameTypeName = '龙虎斗'
        break
      case 3:
        this.gameTypeName = '牛牛'
        break
      case 4:
        this.gameTypeName = '骰宝'
        break
      case 5:
        this.gameTypeName = '轮盘'
        break
    }
    this.setStatics(data)
    this.setPlayType(baiJiaOddsInfo)
  }

  setStatics(data) {
    this.statics.pointNum = data.coin
    this.statics.winNum = data.winNum
    for (let num = 1; num <= 8; num++) {
      let key = 'num' + num
      this.statics[key] = data[key] ? data[key] : 0
    }
    switch (data.gameType) {
      case 1:
        this.statics.da = data.num1 ? data.num1 : 0
        this.statics.xiao = data.num2 ? data.num2 : 0
        this.statics.renYiDui = data.num3 ? data.num3 : 0
        this.statics.wanMeiDui = data.num4 ? data.num4 : 0
        this.statics.zhuangLongBao = data.num5 ? data.num5 : 0
        this.statics.xianLongBao = data.num6 ? data.num6 : 0
        break
      case 2:
        this.statics.longDan = data.num1 ? data.num1 : 0
        this.statics.longShuang = data.num2 ? data.num2 : 0
        this.statics.longHong = data.num3 ? data.num3 : 0
        this.statics.longHei = data.num4 ? data.num4 : 0
        this.statics.huDan = data.num5 ? data.num5 : 0
        this.statics.huShuang = data.num6 ? data.num6 : 0
        this.statics.huHong = data.num7 ? data.num7 : 0
        this.statics.huHei = data.num8 ? data.num8 : 0
        break
      case 3:
        this.statics.Xian1Ping = data.num1 ? data.num1 : 0
        this.statics.Xian1Fan = data.num2 ? data.num2 : 0
        this.statics.Xian2Ping = data.num3 ? data.num3 : 0
        this.statics.Xian2Fan = data.num4 ? data.num4 : 0
        this.statics.Xian3Ping = data.num5 ? data.num5 : 0
        this.statics.Xian3Fan = data.num6 ? data.num6 : 0
        break
      case 4:
        //
        break
      case 5:
        //
        break
    }

    this.statics.zhuangNum = data.numZ
    this.statics.xianNum = data.numX
    this.statics.heNum = data.numH
    this.statics.zhuangDuiNum = data.numZd
    this.statics.xianDuiNum = data.numXd
  }

  setPlayType(baiJiaOddsInfo) {
    let type = this.gameType
    if (!type) {
      this.staticStr = ''
      return
    }
    let str = ''
    switch (type) {
      case 1:
        if (this.numZ) str += ' 庄：' + this.numZ
        if (this.numX) str += ' 闲：' + this.numX
        if (this.numH) str += ' 和：' + this.numH
        if (this.numZd) str += ' 庄对：' + this.numZd
        if (this.numXd) str += ' 闲对：' + this.numXd

        if (this.statics.da) str += ' 大：' + this.statics.da
        if (this.statics.xiao) str += ' 小：' + this.statics.xiao
        if (this.statics.renYiDui) str += ' 任意对子：' + this.statics.renYiDui
        if (this.statics.wanMeiDui) str += ' 完美对子：' + this.statics.wanMeiDui
        if (this.statics.zhuangLongBao) str += ' 庄龙宝：' + this.statics.zhuangLongBao
        if (this.statics.xianLongBao) str += ' 闲龙宝：' + this.statics.xianLongBao
        this.resultName = GameResultTools.getBaijiaResultName(this.result, baiJiaOddsInfo)
        break
      case 2:
        if (this.numZ) str += ' 虎：' + this.numZ
        if (this.numX) str += ' 龙：' + this.numX
        if (this.numH) str += ' 和：' + this.numH

        if (this.statics.longDan) str += ' 龙单：' + this.statics.longDan
        if (this.statics.longShuang) str += ' 龙双：' + this.statics.longShuang
        if (this.statics.longHong) str += ' 龙红：' + this.statics.longHong
        if (this.statics.longHei) str += ' 龙黑：' + this.statics.longHei
        if (this.statics.huDan) str += ' 虎单：' + this.statics.huDan
        if (this.statics.huShuang) str += ' 虎双：' + this.statics.huShuang
        if (this.statics.huHong) str += ' 虎红：' + this.statics.huHong
        if (this.statics.huHei) str += ' 虎黑：' + this.statics.huHei
        this.resultName = GameResultTools.getLonghuResultName(this.result)
        break
      case 3:
        if (this.statics.Xian1Ping) str += ' 闲1(平倍)' + this.statics.Xian1Ping
        if (this.statics.Xian1Fan) str += ' 闲1(翻倍)' + this.statics.Xian1Fan
        if (this.statics.Xian2Ping) str += ' 闲2(平倍)' + this.statics.Xian2Ping
        if (this.statics.Xian2Fan) str += ' 闲2(翻倍)' + this.statics.Xian2Fan
        if (this.statics.Xian3Ping) str += ' 闲3(平倍)' + this.statics.Xian3Ping
        if (this.statics.Xian3Fan) str += ' 闲3(翻倍)' + this.statics.Xian3Fan
        this.resultName = GameResultTools.getNiuniuResultName(this.result)
        break
      case 4:
        if (this.betNum) str += ` ${BetTypeNameTouBao[this.betType]} (${this.betNum})`
        this.resultName = GameResultTools.getTouBaoResultName(this.result)
        break
      case 5:
        if (this.betNum) str += ` ${BetTypeNameLunPan[this.betType]} (${this.betNum})`
        this.resultName = GameResultTools.getLunPanResultName(this.result)
        break
      default:
        str = ''
    }
    this.staticStr = str
    if (GameResultTools.checkVoid(this.result) === 2) {
      this.staticStr += '(已作废)'
    }
    if (this.state === 4) {
      this.resultName = '已退押'
    }
  }

  // 检测点数明细过滤
  checkCoinInfo(selectType) {
    let result = false
    switch (selectType) {
      case 'all':
        result = true
        break
      case 'add':
        if (this.typeStr === '上分' || this.typeStr === '转入' || this.typeStr === '充值上分') {
          result = true
        }
        break
      case 'sub':
        if (this.typeStr === '下分' || this.typeStr === '转出' || this.typeStr === '提现下分') {
          result = true
        }
        break
      case 'void':
        if (this.state === 3) {
          result = true
        }
        break
      case 'return':
        if (this.state === 4) {
          result = true
        }
        break
      case 'right':
        if ((this.state === 1 || this.state === 2) && this.tableName) {
          result = true
        }
        break
      case 'wash':
        if (this.typeStr === '自助结算' || this.typeStr === '自助结洗码' || this.typeStr === '一键结洗码' || this.typeStr === '批量结洗码') {
          result = true
        }
        break
    }
    return result
  }
}
