export class OddsInfoModel {
  niuniuInfo = {
    // 平倍展示
    showWin: '1',
    // 翻倍展示
    showWinDouble: '1'
  };
  basicInfo = {
    id: 0,
    type: 1,
    name: '',
    oddsZ: '',
    oddsZd: '',
    oddsX: '',
    oddsXd: '',
    oddsH: '',

    // 牛牛
    // 闲赢无牛赔率
    oddsXWinN0: '',
    // 闲赢牛1赔率
    oddsXWinN1: '',
    // 闲赢牛2赔率
    oddsXWinN2: '',
    // 闲赢牛3赔率
    oddsXWinN3: '',
    // 闲赢牛4赔率
    oddsXWinN4: '',
    // 闲赢牛5赔率
    oddsXWinN5: '',
    // 闲赢牛6赔率
    oddsXWinN6: '',
    // 闲赢牛7赔率
    oddsXWinN7: '',
    // 闲赢牛8赔率
    oddsXWinN8: '',
    // 闲赢牛9赔率
    oddsXWinN9: '',
    // 闲赢牛牛赔率
    oddsXWinNn: '',
    // 闲赢五公牛赔率
    oddsXWinNFive: '',
    // 闲赢无牛赔率 翻倍
    oddsXWinN0Double: '',
    // 闲赢牛1赔率 翻倍
    oddsXWinN1Double: '',
    // 闲赢牛2赔率 翻倍
    oddsXWinN2Double: '',
    // 闲赢牛3赔率 翻倍
    oddsXWinN3Double: '',
    // 闲赢牛4赔率 翻倍
    oddsXWinN4Double: '',
    // 闲赢牛5赔率 翻倍
    oddsXWinN5Double: '',
    // 闲赢牛6赔率 翻倍
    oddsXWinN6Double: '',
    // 闲赢牛7赔率 翻倍
    oddsXWinN7Double: '',
    // 闲赢牛8赔率 翻倍
    oddsXWinN8Double: '',
    // 闲赢牛9赔率 翻倍
    oddsXWinN9Double: '',
    // 闲赢牛牛赔率 翻倍
    oddsXWinNnDouble: '',
    // 闲赢五公牛赔率 翻倍
    oddsXWinNFiveDouble: '',
    // 闲输无牛赔率
    oddsXLoseN0: '',
    // 闲输牛1赔率
    oddsXLoseN1: '',
    // 闲输牛2赔率
    oddsXLoseN2: '',
    // 闲输牛3赔率
    oddsXLoseN3: '',
    // 闲输牛4赔率
    oddsXLoseN4: '',
    // 闲输牛5赔率
    oddsXLoseN5: '',
    // 闲输牛6赔率
    oddsXLoseN6: '',
    // 闲输牛7赔率
    oddsXLoseN7: '',
    // 闲输牛8赔率
    oddsXLoseN8: '',
    // 闲输牛9赔率
    oddsXLoseN9: '',
    // 闲输牛牛赔率
    oddsXLoseNn: '',
    // 闲输五公牛赔率
    oddsXLoseNFive: '',
    // 闲输无牛赔率 翻倍
    oddsXLoseN0Double: '',
    // 闲输牛1赔率 翻倍
    oddsXLoseN1Double: '',
    // 闲输牛2赔率 翻倍
    oddsXLoseN2Double: '',
    // 闲输牛3赔率 翻倍
    oddsXLoseN3Double: '',
    // 闲输牛4赔率 翻倍
    oddsXLoseN4Double: '',
    // 闲输牛5赔率 翻倍
    oddsXLoseN5Double: '',
    // 闲输牛6赔率 翻倍
    oddsXLoseN6Double: '',
    // 闲输牛7赔率 翻倍
    oddsXLoseN7Double: '',
    // 闲输牛8赔率 翻倍
    oddsXLoseN8Double: '',
    // 闲输牛9赔率 翻倍
    oddsXLoseN9Double: '',
    // 闲输牛牛赔率 翻倍
    oddsXLoseNnDouble: '',
    // 闲输五公牛赔率 翻倍
    oddsXLoseNFiveDouble: '',

    // 新押注项
    // 龙单
    longDan: '',
    // 龙双
    longShuang: '',
    // 龙红
    longHong: '',
    // 龙黑
    longHei: '',
    // 虎单
    huDan: '',
    // 虎双
    huShuang: '',
    // 虎红
    huHong: '',
    // 虎黑
    huHei: '',

    // 任意对子
    renYiDui: '',
    // 完美对子
    wanMeiDui: '',
    // 大
    da: '',
    // 小
    xiao: '',
    // 龙宝-例牌
    longBaoLi: '',
    // 龙宝-4
    longBao4: '',
    // 龙宝-5
    longBao5: '',
    // 龙宝-6
    longBao6: '',
    // 龙宝-7
    longBao7: '',
    // 龙宝-8
    longBao8: '',
    // 龙宝-9
    longBao9: '',

    longBaoStr: '',

    // 骰宝
    // 大小
    daXiao: '',
    // 单双
    danShuang: '',
    // 围骰
    weiTou: '',
    // 全围
    quanWei: '',
    // 出现单骰
    danTou: '',

    // 出现双骰
    shuangTou: '',
    // 出现全骰
    quanTou: '',
    // 对子
    duiZi: '',
    // 组合式
    paiJiu: '',
    // 4点或17点
    fourOrSevenTeen: '',

    // 5点或16点
    fiveOrSixteen: '',
    // 6点或15点
    sixOrFiveTeen: '',
    // 7点或14点
    sevenOrFourTeen: '',
    // 8点或13点
    eightOrThirteen: '',
    // 9，10，11，12点
    nineToTwelve: '',

    // 轮盘
    // 直接注
    directBet: '',
    // 分注
    partBet: '',
    // 衔注
    joinBet: '',
    // 三数
    threeBet: '',
    // 角注
    angleBet: '',
    // 四个号码
    fourBet: '',
    // 线注
    lineBet: '',
    // 列1/2/3
    row123Bet: '',
    // 打1/2/3
    hit123Bet: '',
    // 红/黑
    redBlackBet: ''
    // 单/双
    //  danShuang: '',
    // 大/小
    //  daXiao: '',
  };

  setData(data) {
    this.basicInfo.id = data.id
    this.basicInfo.type = data.type
    this.basicInfo.name = data.name
    this.basicInfo.oddsZ = data.oddsZ ? data.oddsZ : ''
    this.basicInfo.oddsX = data.oddsX ? data.oddsX : ''
    this.basicInfo.oddsH = data.oddsH ? data.oddsH : ''
    this.basicInfo.oddsZd = data.oddsZd ? data.oddsZd : ''
    this.basicInfo.oddsXd = data.oddsXd ? data.oddsXd : ''

    // 牛牛
    this.basicInfo.oddsXWinN0 = data.oddsXWinN0 ? data.oddsXWinN0 : ''
    this.basicInfo.oddsXWinN1 = data.oddsXWinN1 ? data.oddsXWinN1 : ''
    this.basicInfo.oddsXWinN2 = data.oddsXWinN2 ? data.oddsXWinN2 : ''
    this.basicInfo.oddsXWinN3 = data.oddsXWinN3 ? data.oddsXWinN3 : ''
    this.basicInfo.oddsXWinN4 = data.oddsXWinN4 ? data.oddsXWinN4 : ''
    this.basicInfo.oddsXWinN5 = data.oddsXWinN5 ? data.oddsXWinN5 : ''
    this.basicInfo.oddsXWinN6 = data.oddsXWinN6 ? data.oddsXWinN6 : ''
    this.basicInfo.oddsXWinN7 = data.oddsXWinN7 ? data.oddsXWinN7 : ''
    this.basicInfo.oddsXWinN8 = data.oddsXWinN8 ? data.oddsXWinN8 : ''
    this.basicInfo.oddsXWinN9 = data.oddsXWinN9 ? data.oddsXWinN9 : ''
    this.basicInfo.oddsXWinNn = data.oddsXWinNn ? data.oddsXWinNn : ''
    this.basicInfo.oddsXWinNFive = data.oddsXWinNFive ? data.oddsXWinNFive : ''
    this.basicInfo.oddsXWinN0Double = data.oddsXWinN0Double ? data.oddsXWinN0Double : ''
    this.basicInfo.oddsXWinN1Double = data.oddsXWinN1Double ? data.oddsXWinN1Double : ''
    this.basicInfo.oddsXWinN2Double = data.oddsXWinN2Double ? data.oddsXWinN2Double : ''
    this.basicInfo.oddsXWinN3Double = data.oddsXWinN3Double ? data.oddsXWinN3Double : ''
    this.basicInfo.oddsXWinN4Double = data.oddsXWinN4Double ? data.oddsXWinN4Double : ''
    this.basicInfo.oddsXWinN5Double = data.oddsXWinN5Double ? data.oddsXWinN5Double : ''
    this.basicInfo.oddsXWinN6Double = data.oddsXWinN6Double ? data.oddsXWinN6Double : ''
    this.basicInfo.oddsXWinN7Double = data.oddsXWinN7Double ? data.oddsXWinN7Double : ''
    this.basicInfo.oddsXWinN8Double = data.oddsXWinN8Double ? data.oddsXWinN8Double : ''
    this.basicInfo.oddsXWinN9Double = data.oddsXWinN9Double ? data.oddsXWinN9Double : ''
    this.basicInfo.oddsXWinNnDouble = data.oddsXWinNnDouble ? data.oddsXWinNnDouble : ''
    this.basicInfo.oddsXWinNFiveDouble = data.oddsXWinNFiveDouble ? data.oddsXWinNFiveDouble : ''
    this.basicInfo.oddsXLoseN0 = data.oddsXLoseN0 ? data.oddsXLoseN0 : ''
    this.basicInfo.oddsXLoseN1 = data.oddsXLoseN1 ? data.oddsXLoseN1 : ''
    this.basicInfo.oddsXLoseN2 = data.oddsXLoseN2 ? data.oddsXLoseN2 : ''
    this.basicInfo.oddsXLoseN3 = data.oddsXLoseN3 ? data.oddsXLoseN3 : ''
    this.basicInfo.oddsXLoseN4 = data.oddsXLoseN4 ? data.oddsXLoseN4 : ''
    this.basicInfo.oddsXLoseN5 = data.oddsXLoseN5 ? data.oddsXLoseN5 : ''
    this.basicInfo.oddsXLoseN6 = data.oddsXLoseN6 ? data.oddsXLoseN6 : ''
    this.basicInfo.oddsXLoseN7 = data.oddsXLoseN7 ? data.oddsXLoseN7 : ''
    this.basicInfo.oddsXLoseN8 = data.oddsXLoseN8 ? data.oddsXLoseN8 : ''
    this.basicInfo.oddsXLoseN9 = data.oddsXLoseN9 ? data.oddsXLoseN9 : ''
    this.basicInfo.oddsXLoseNn = data.oddsXLoseNn ? data.oddsXLoseNn : ''
    this.basicInfo.oddsXLoseNFive = data.oddsXLoseNFive ? data.oddsXLoseNFive : ''
    this.basicInfo.oddsXLoseN0Double = data.oddsXLoseN0Double ? data.oddsXLoseN0Double : ''
    this.basicInfo.oddsXLoseN1Double = data.oddsXLoseN1Double ? data.oddsXLoseN1Double : ''
    this.basicInfo.oddsXLoseN2Double = data.oddsXLoseN2Double ? data.oddsXLoseN2Double : ''
    this.basicInfo.oddsXLoseN3Double = data.oddsXLoseN3Double ? data.oddsXLoseN3Double : ''
    this.basicInfo.oddsXLoseN4Double = data.oddsXLoseN4Double ? data.oddsXLoseN4Double : ''
    this.basicInfo.oddsXLoseN5Double = data.oddsXLoseN5Double ? data.oddsXLoseN5Double : ''
    this.basicInfo.oddsXLoseN6Double = data.oddsXLoseN6Double ? data.oddsXLoseN6Double : ''
    this.basicInfo.oddsXLoseN7Double = data.oddsXLoseN7Double ? data.oddsXLoseN7Double : ''
    this.basicInfo.oddsXLoseN8Double = data.oddsXLoseN8Double ? data.oddsXLoseN8Double : ''
    this.basicInfo.oddsXLoseN9Double = data.oddsXLoseN9Double ? data.oddsXLoseN9Double : ''
    this.basicInfo.oddsXLoseNnDouble = data.oddsXLoseNnDouble ? data.oddsXLoseNnDouble : ''
    this.basicInfo.oddsXLoseNFiveDouble = data.oddsXLoseNFiveDouble ? data.oddsXLoseNFiveDouble : ''

    // 新投注项
    this.basicInfo.longDan = data.longDan ? data.longDan : ''
    this.basicInfo.longShuang = data.longShuang ? data.longShuang : ''
    this.basicInfo.longHong = data.longHong ? data.longHong : ''
    this.basicInfo.longHei = data.longHei ? data.longHei : ''
    this.basicInfo.huDan = data.huDan ? data.huDan : ''
    this.basicInfo.huShuang = data.huShuang ? data.huShuang : ''
    this.basicInfo.huHong = data.huHong ? data.huHong : ''
    this.basicInfo.huHei = data.huHei ? data.huHei : ''
    this.basicInfo.renYiDui = data.renYiDui ? data.renYiDui : ''
    this.basicInfo.wanMeiDui = data.wanMeiDui ? data.wanMeiDui : ''
    this.basicInfo.da = data.da ? data.da : ''
    this.basicInfo.xiao = data.xiao ? data.xiao : ''
    this.basicInfo.longBaoLi = data.longBaoLi ? data.longBaoLi : ''
    this.basicInfo.longBao4 = data.longBao4 ? data.longBao4 : ''
    this.basicInfo.longBao5 = data.longBao5 ? data.longBao5 : ''
    this.basicInfo.longBao6 = data.longBao6 ? data.longBao6 : ''
    this.basicInfo.longBao7 = data.longBao7 ? data.longBao7 : ''
    this.basicInfo.longBao8 = data.longBao8 ? data.longBao8 : ''
    this.basicInfo.longBao9 = data.longBao9 ? data.longBao9 : ''

    this.onLongBaoChange()

    // 骰宝
    // 大小
    this.basicInfo.daXiao = data.daXiao ? data.daXiao : ''
    // 单双
    this.basicInfo.danShuang = data.danShuang ? data.danShuang : ''
    // 围骰
    this.basicInfo.weiTou = data.weiTou ? data.weiTou : ''
    // 全围
    this.basicInfo.quanWei = data.quanWei ? data.quanWei : ''
    // 出现单骰
    this.basicInfo.danTou = data.danTou ? data.danTou : ''

    // 出现双骰
    this.basicInfo.shuangTou = data.shuangTou ? data.shuangTou : ''
    // 出现全骰
    this.basicInfo.quanTou = data.quanTou ? data.quanTou : ''
    // 对子
    this.basicInfo.duiZi = data.duiZi ? data.duiZi : ''
    // 组合式
    this.basicInfo.paiJiu = data.paiJiu ? data.paiJiu : ''
    // 4点或17点
    this.basicInfo.fourOrSevenTeen = data.fourOrSevenTeen ? data.fourOrSevenTeen : ''

    // 5点或16点
    this.basicInfo.fiveOrSixteen = data.fiveOrSixteen ? data.fiveOrSixteen : ''
    // 6点或15点
    this.basicInfo.sixOrFiveTeen = data.sixOrFiveTeen ? data.sixOrFiveTeen : ''
    // 7点或14点
    this.basicInfo.sevenOrFourTeen = data.sevenOrFourTeen ? data.sevenOrFourTeen : ''
    // 8点或13点
    this.basicInfo.eightOrThirteen = data.eightOrThirteen ? data.eightOrThirteen : ''
    // 9，10，11，12点
    this.basicInfo.nineToTwelve = data.nineToTwelve ? data.nineToTwelve : ''

    // 轮盘
    // 直接注
    this.basicInfo.directBet = data.directBet ? data.directBet : ''
    // 分注
    this.basicInfo.partBet = data.partBet ? data.partBet : ''
    // 衔注
    this.basicInfo.joinBet = data.joinBet ? data.joinBet : ''
    // 三数
    this.basicInfo.threeBet = data.threeBet ? data.threeBet : ''
    // 角注
    this.basicInfo.angleBet = data.angleBet ? data.angleBet : ''
    // 四个号码
    this.basicInfo.fourBet = data.fourBet ? data.fourBet : ''
    // 线注
    this.basicInfo.lineBet = data.lineBet ? data.lineBet : ''
    // 列1/2/3
    this.basicInfo.row123Bet = data.row123Bet ? data.row123Bet : ''
    // 打1/2/3
    this.basicInfo.hit123Bet = data.hit123Bet ? data.hit123Bet : ''
    // 红/黑
    this.basicInfo.redBlackBet = data.redBlackBet ? data.redBlackBet : ''
  }

  onLongBaoChange() {
    this.basicInfo.longBaoStr = ''
    let nameList = ['longBao9', 'longBao8', 'longBao7', 'longBao6', 'longBao5', 'longBao4', 'longBaoLi']
    for (let i in nameList) {
      this.basicInfo.longBaoStr += `1:${this.basicInfo[nameList[i]]} `
    }
  }
}
