export class LimitProjectModel {
  checked = false; // 是否被选中
  basicInfo = {
    id: 0,
    name: '',
    maxZ: 0,
    maxX: 0,
    maxH: 0,
    maxZd: 0,
    maxXd: 0,
    minZ: 0,
    minX: 0,
    minH: 0,
    minZd: 0,
    minXd: 0,

    // 牛牛版本添加
    gameType: '1',
    maxX1: 0,
    maxX2: 0,
    maxX3: 0,
    minX1: 0,
    minX2: 0,
    minX3: 0,
    maxX1Double: 0,
    maxX2Double: 0,
    maxX3Double: 0,
    minX1Double: 0,
    minX2Double: 0,
    minX3Double: 0,

    // 新押注版本添加
    min: 0,
    singleMax: 0,
    doubleMax: 0,
    heMax: 0,
    bigSmallMax: 0,
    normalDoubleMax: 0,
    perfectDoubleMax: 0,
    dragonJewel: 0,
    superSix: 0,

    // 骰宝
    // 大/小 限红
    daXiaoMax: 0,
    // 单/双限红
    danShuangMax: 0,
    // 全骰限红
    quanTouMax: 0,
    // 围骰1～围骰6 限红
    weiTou1ToWeiTou6Max: 0,
    // 组合 限红
    zuHeMax: 0,
    // 对子1～对子6 限红
    duiZi1ToDuiZi6Max: 0,

    // 单点1～单点6 限红
    signal1ToSignal6Max: 0,
    // 和值9/10/11/12 限红
    he9ToHe12Max: 0,
    // 和值 8/13 限红
    he8AndHe13Max: 0,
    // 和值 7/14 限红
    he7AndHe14Max: 0,
    // 和值 6/15 限红
    he6AndHe15Max: 0,
    // 和值 5/16 限红
    he5AndHe16Max: 0,
    // 和值 4/17 限红
    he4AndHe17Max: 0,

    // 轮盘
    directBetMax: 0,
    // 分注
    partBetMax: 0,
    // 衔注
    joinBetMax: 0,
    // 三数
    threeBetMax: 0,
    // 角注
    angleBetMax: 0,
    // 四个号码
    fourBetMax: 0,
    // 线注
    lineBetMax: 0,
    // 列1/2/3
    row123BetMax: 0,
    // 打1/2/3
    hit123BetMax: 0
  };
  clearData() {
    let oldGameType = this.basicInfo.gameType
    this.checked = false
    for (let i in this.basicInfo) {
      if (typeof (this.basicInfo[i]) === 'number') {
        this.basicInfo[i] = 0
      } else {
        this.basicInfo[i] = ''
      }
    }
    this.basicInfo.gameType = oldGameType
  }

  setData(data) {
    this.basicInfo.id = data.id
    this.basicInfo.name = data.name
    this.basicInfo.maxZ = data.maxZ
    this.basicInfo.maxX = data.maxX
    this.basicInfo.maxH = data.maxH
    this.basicInfo.maxZd = data.maxZd
    this.basicInfo.maxXd = data.maxXd
    this.basicInfo.minZ = data.minZ
    this.basicInfo.minX = data.minX
    this.basicInfo.minH = data.minH
    this.basicInfo.minZd = data.minZd
    this.basicInfo.minXd = data.minXd
    // 牛牛版本添加
    this.basicInfo.gameType = data.gameType.toString()
    this.basicInfo.maxX1 = data.maxX1
    this.basicInfo.maxX2 = data.maxX2
    this.basicInfo.maxX3 = data.maxX3
    this.basicInfo.minX1 = data.minX1
    this.basicInfo.minX2 = data.minX2
    this.basicInfo.minX3 = data.minX3
    this.basicInfo.maxX1Double = data.maxX1Double
    this.basicInfo.maxX2Double = data.maxX2Double
    this.basicInfo.maxX3Double = data.maxX3Double
    this.basicInfo.minX1Double = data.minX1Double
    this.basicInfo.minX2Double = data.minX2Double
    this.basicInfo.minX3Double = data.minX3Double

    // 新押注版本添加
    this.basicInfo.min = data.min
    this.basicInfo.singleMax = data.singleMax
    this.basicInfo.doubleMax = data.doubleMax
    this.basicInfo.heMax = data.heMax
    this.basicInfo.bigSmallMax = data.bigSmallMax
    this.basicInfo.normalDoubleMax = data.normalDoubleMax
    this.basicInfo.perfectDoubleMax = data.perfectDoubleMax
    this.basicInfo.dragonJewel = data.dragonJewel
    this.basicInfo.superSix = data.superSix

    // 骰宝
    this.basicInfo.daXiaoMax = data.daXiaoMax
    this.basicInfo.danShuangMax = data.danShuangMax
    this.basicInfo.quanTouMax = data.quanTouMax
    this.basicInfo.weiTou1ToWeiTou6Max = data.weiTou1ToWeiTou6Max
    this.basicInfo.zuHeMax = data.zuHeMax
    this.basicInfo.duiZi1ToDuiZi6Max = data.duiZi1ToDuiZi6Max
    this.basicInfo.signal1ToSignal6Max = data.signal1ToSignal6Max
    this.basicInfo.he9ToHe12Max = data.he9ToHe12Max
    this.basicInfo.he8AndHe13Max = data.he8AndHe13Max
    this.basicInfo.he7AndHe14Max = data.he7AndHe14Max
    this.basicInfo.he6AndHe15Max = data.he6AndHe15Max
    this.basicInfo.he5AndHe16Max = data.he5AndHe16Max
    this.basicInfo.he4AndHe17Max = data.he4AndHe17Max

    // 轮盘
    // 直注
    this.basicInfo.directBetMax = data.directBetMax
    // 分注
    this.basicInfo.partBetMax = data.partBetMax
    // 衔注
    this.basicInfo.joinBetMax = data.joinBetMax
    // 三数
    this.basicInfo.threeBetMax = data.threeBetMax
    // 角注
    this.basicInfo.angleBetMax = data.angleBetMax
    // 四个号码
    this.basicInfo.fourBetMax = data.fourBetMax
    // 线注
    this.basicInfo.lineBetMax = data.lineBetMax
    // 列1/2/3
    this.basicInfo.row123BetMax = data.row123BetMax
    // 打1/2/3
    this.basicInfo.hit123BetMax = data.hit123BetMax
  }

  checkSelf() {
    let res = {
      result: 0,
      errStr: ''
    }
    let nameList = ['Z', 'X', 'H', 'Zd', 'Xd', 'X1', 'X2', 'X3', 'X1Double', 'X2Double', 'X3Double']
    for (let i in nameList) {
      if (this.basicInfo['max' + nameList[i]] < this.basicInfo['min' + nameList[i]]) {
        res.result = 1
        res.errStr = '限红数据设置错误'
      }
    }
    let newStakeNameList = ['singleMax', 'doubleMax', 'heMax', 'bigSmallMax', 'normalDoubleMax', 'perfectDoubleMax', 'dragonJewel', 'superSix',
      'daXiaoMax', 'danShuangMax', 'quanTouMax', 'weiTou1ToWeiTou6Max', 'zuHeMax', 'duiZi1ToDuiZi6Max', 'signal1ToSignal6Max',
      'he9ToHe12Max', 'he8AndHe13Max', 'he7AndHe14Max', 'he6AndHe15Max', 'he5AndHe16Max', 'he4AndHe17Max',
      'directBetMax', 'partBetMax', 'joinBetMax', 'threeBetMax', 'angleBetMax', 'fourBetMax', 'lineBetMax', 'row123BetMax', 'hit123BetMax']
    for (let i in newStakeNameList) {
      if (this.basicInfo[newStakeNameList[i]] < this.basicInfo.min) {
        res.result = 1
        res.errStr = '限红数据设置错误'
      }
    }

    return res
  }

  // 克隆限红方案数据
  clone(data) {
    for (let i in this.basicInfo) {
      this.basicInfo[i] = data.basicInfo[i]
    }
  }
}
