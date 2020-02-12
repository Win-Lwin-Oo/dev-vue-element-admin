import { Utils } from '@/utils/utils'
const proto = require('@/proto/proto.js').nested
const game = proto.game
export class TableGameModel {
  checked = false;
  timer = null;
  // 是否展示大路
  showBigWay = true;
  basicInfo = {
    tableId: '',
    tableType: '',
    tableIndex: 0,
    tableName: '',
    gameType: -1,
    status: 0,
    statusName: '',
    juNum: 0,
    changNum: 0,
    userNum: 0,
    results: [],
    // {"Xian1Ping":0,"Xian1Fan":0,"Xian2Ping":100,"Xian2Fan":0,"Xian3Ping":0,"Xian3Fan":0}
    zhuang: 0,
    xian: 0,
    he: 0,
    zhuangDui: 0,
    xianDui: 0,
    // 牛牛 押注
    Xian1Ping: 0,
    Xian1Fan: 0,
    Xian2Ping: 0,
    Xian2Fan: 0,
    Xian3Ping: 0,
    Xian3Fan: 0,
    // 倒计时
    leftCount: 0
  };
  wayData = [];
  macaoWay = [];
  BigEyesWay = [];
  SamSungWay = [];
  SmallWay = [];
  CockroachWay = [];
  niuniuWay = [];
  TouBaoWay = [[], [], [], [], [], []];
  LunPanWay = [[], [], [], [], [], []];
  gameInfo = {
    // 庄押注额
    coinZ: 0,
    // 闲押注额
    coinX: 0,
    // 和局押注额
    coinH: 0,
    // 庄对押注额
    coinZd: 0,
    // 闲对押注额
    coinXd: 0,
    // 大押注额
    coinBig: 0,
    // 小押注额
    coinSmall: 0,
    // 任意对子押注额
    coinAnyDouble: 0,
    // 完美对子押注额
    coinPerfectDouble: 0,
    // 庄龙宝押注额
    coinZLongBao: 0,
    // 闲龙宝押注额
    coinXLongBao: 0,
    // 超级6押注额
    coinSuperSix: 0,
    // 龙单押注额
    coinLongSingle: 0,
    // 龙双押注额
    coinLongDouble: 0,
    // 龙红押注额
    coinLongRed: 0,
    // 龙黑押注额
    coinLongBlack: 0,
    // 虎单押注额
    coinHuSingle: 0,
    // 虎双押注额
    coinHuDouble: 0,
    // 虎红押注额
    coinHuRed: 0,
    // 虎黑押注额
    coinHuBlack: 0,

    // 牛牛 闲1平
    coinXian1Ping: 0,
    // 牛牛 闲1翻
    coinXian1Fan: 0,
    // 牛牛 闲2平
    coinXian2Ping: 0,
    // 牛牛 闲2翻
    coinXian2Fan: 0,
    // 牛牛 闲3平
    coinXian3Ping: 0,
    // 牛牛 闲3翻
    coinXian3Fan: 0,

    // 单
    coinTouDan: 0,
    // 双
    coinTouShuang: 0,
    // 大
    coinTouDa: 0,
    // 小
    coinTouXiao: 0,
    // 单点
    coinDanDian: 0,
    // 对子
    coinDuiZi: 0,
    // 组合
    coinPaiJiu: 0,
    // 全围
    coinQuanWei: 0,
    // 围骰
    coinWeiTou: 0,
    // 和值
    coinZongHe: 0,
    coinZhiJie: 0,
    coinFenZhu: 0,
    coinJieZhu: 0,
    coinSanShu: 0,
    coinJiaoZhu: 0,
    coinSiShu: 0,
    coinLine: 0,
    coinLie123: 0,
    coinDa123: 0,
    coinHongHei: 0,
    coinDanShuang: 0,
    coinDaXiao: 0
  };

  setData(data) {
    this.wayData = []
    this.setBasicInfo(data)
    this.basicInfo.results = []
    for (let item of data.results) {
      this.basicInfo.results.push(Number(item.slice(0, 3)))
    }

    this.wayData = Utils.getWayData(this.basicInfo.results)
    this.macaoWay = Utils.getMacaoWay(this.wayData, 14)
    this.BigEyesWay = Utils.getWay(this.wayData, 2, 12)
    this.SamSungWay = Utils.getSamSungWay(this.wayData, 6)
    this.SmallWay = Utils.getWay(this.wayData, 3, 12)
    this.CockroachWay = Utils.getWay(this.wayData, 4, 12)
    Utils.checkOutLineWay(this.macaoWay, 14)
    Utils.checkOutLineWay(this.BigEyesWay, 12)
    Utils.checkOutLineWay(this.SamSungWay, 6)
    Utils.checkOutLineWay(this.SmallWay, 12)
    Utils.checkOutLineWay(this.CockroachWay, 12)

    // 获取牛牛露珠
    if (this.basicInfo.gameType === 3) {
      this.niuniuWay = Utils.getNiuWay([], 7, data.results)
      this.dealNiuniuWay(7)
    }
    if (this.basicInfo.gameType === 4) {
      let wayData = Utils.getTouBaoWayData(data.results, 7)
      this.TouBaoWay = Utils.getMacaoWay(wayData, 14)
    }
    // 获取轮盘露珠
    if (this.basicInfo.gameType === 5) {
      this.LunPanWay = Utils.getLunPanWayData(data.results, 14)
    }
  }

  setBasicInfo(data) {
    this.setGameInfo(data)
    this.basicInfo.tableId = data.tableId
    this.basicInfo.tableName = data.name
    this.basicInfo.gameType = data.type
    this.basicInfo.status = data.state
    this.basicInfo.juNum = data.inningId
    this.basicInfo.changNum = data.screenId
    this.basicInfo.userNum = data.userNums
    this.basicInfo.results = data.results
    switch (this.basicInfo.status) {
      case game.GameState.None:
        this.basicInfo.statusName = '（洗牌中）'
        break
      case game.GameState.CountDown:
        this.basicInfo.statusName = '（倒计时中）'
        break
      case game.GameState.NoMoreBet:
        this.basicInfo.statusName = '（停止下注）'
        break
      case game.GameState.CancelGame:
        this.basicInfo.statusName = '（停止下注）'
        break
    }
  }

  setGameInfo(data) {
    if (data.gameInfo) {
      for (let key in this.gameInfo) {
        if (data.gameInfo[key]) {
          this.gameInfo[key] = data.gameInfo[key]
        }
      }

      let poolKey = 'baijialePoolInfo'
      switch (data.type) {
        case 1:
          poolKey = 'baijialePoolInfo'
          break
        case 2:
          poolKey = 'longhudouPoolInfo'
          break
        case 3:
          poolKey = 'niuniuPoolInfo'
          break
        case 4:
          poolKey = 'toubaoPoolInfo'
          break
        case 5:
          poolKey = 'lunpanPoolInfo'
          break
      }
      for (let key in data.gameInfo[poolKey]) {
        this.gameInfo[key] = data.gameInfo[poolKey][key]
      }
    } else {
      for (let key in this.gameInfo) {
        this.gameInfo[key] = 0
      }
    }
  }

  clearData() {
    this.wayData = []
    this.macaoWay = []
    this.TouBaoWay = [[], [], [], [], [], []]
    this.LunPanWay = [[], [], [], [], [], []]
    this.checked = false
    this.clearBasicInfo()
    this.clearGameInfo()
  }

  clearBasicInfo() {
    for (let i in this.basicInfo) {
      switch (typeof (this.basicInfo[i])) {
        case 'string':
          this.basicInfo[i] = ''
          break
        case 'number':
          this.basicInfo[i] = 0
          break
        case 'object':
          this.basicInfo[i] = []
          break
      }
    }
  }

  clearGameInfo() {
    for (let i in this.gameInfo) {
      this.gameInfo[i] = 0
    }
  }

  // 用于防止实时监控的闪动
  clone(data, isWatch) {
    if (data.basicInfo.tableId === this.basicInfo.tableId && data.basicInfo.changNum === this.basicInfo.changNum) {
      // 同步选中
      this.checked = data.checked
      // this.showBigWay = data.showBigWay;
      // 倒计时 过程中 优先同步倒计时
      if (this.basicInfo.status !== data.basicInfo.status) {
        this.basicInfo.leftCount = data.basicInfo.leftCount
      } else {
        if (data.basicInfo.status === 1) {
          if (this.basicInfo.leftCount > data.basicInfo.leftCount) {
            this.basicInfo.leftCount = data.basicInfo.leftCount
          }
        } else {
          this.basicInfo.leftCount = data.basicInfo.leftCount
        }
      }
      for (let i in data.basicInfo) {
        if (i !== 'results') {
          if (this.basicInfo[i] !== data.basicInfo[i]) {
            if (i !== 'leftCount') {
              this.basicInfo[i] = data.basicInfo[i]
            }
          }
        } else {
          if (!this.checkArr(this.basicInfo[i], data.basicInfo[i])) {
            this.basicInfo[i] = data.basicInfo[i].slice(0)
            this.wayData = data.wayData.slice(0)
            this.macaoWay = data.macaoWay.slice(0)
            this.BigEyesWay = data.BigEyesWay.slice(0)
            this.SamSungWay = data.SamSungWay.slice(0)
            this.SmallWay = data.SmallWay.slice(0)
            this.CockroachWay = data.CockroachWay.slice(0)
            this.TouBaoWay = data.TouBaoWay.slice(0)
          }
        }
      }
      Object.assign(this.gameInfo, data.gameInfo)
      this.niuniuWay = data.niuniuWay.slice(0)
      this.TouBaoWay = data.TouBaoWay.slice(0)
      this.LunPanWay = data.LunPanWay.slice(0)
    } else {
      this.clearData()
      this.checked = data.checked
      // this.showBigWay = data.showBigWay;
      for (let i in data.basicInfo) {
        if (typeof (data.basicInfo[i]) !== 'object') {
          this.basicInfo[i] = data.basicInfo[i]
        } else {
          this.basicInfo[i] = data.basicInfo[i].slice(0)
        }
      }
      this.wayData = data.wayData.slice(0)
      this.macaoWay = data.macaoWay.slice(0)
      this.BigEyesWay = data.BigEyesWay.slice(0)
      this.SamSungWay = data.SamSungWay.slice(0)
      this.SmallWay = data.SmallWay.slice(0)
      this.CockroachWay = data.CockroachWay.slice(0)
      this.niuniuWay = data.niuniuWay.slice(0)
      this.TouBaoWay = data.TouBaoWay.slice(0)
      this.LunPanWay = data.LunPanWay.slice(0)
    }
    // 盯人的牛牛露珠长度只有5 需要重新截取
    if (this.basicInfo.gameType === 3 && isWatch) {
      this.niuniuWay = Utils.getNiuWay([], 5, this.basicInfo.results)
      this.dealNiuniuWay(5)
    }
  }

  checkArr(arr1, arr2) {
    if (!arr1 || !arr2) {
      return false
    }
    if (arr1.length !== arr2.length) {
      return false
    }
    for (let i in arr1) {
      if (arr1[i] !== arr2[i]) {
        return false
      }
    }
    return true
  }

  // 牛牛露珠单独处理
  dealNiuniuWay(length) {
    if (this.niuniuWay.length > length) {
      let index = this.niuniuWay.length - length
      this.niuniuWay.splice(0, index)
      this.niuniuWay = this.niuniuWay
    }
  }
}
