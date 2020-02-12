export class TableModel {
  basicInfo = {
    md5: '',
    tableId: 0,
    tableIp: '',
    tableType: 1,
    oldTableType: 1,
    tableName: '',
    nickName: '',
    leftCount: 10,
    gameType: 2,
    tableStatus: 'on',
    limitId: 0,
    tableIndex: 0,
    tableSyncId: '',
    featureId: '',
    hadSync: false,
    playTypeSwitch: 1
  };
  chips = [
    {
      num: 10,
      checked: true
    },
    {
      num: 20,
      checked: true
    },
    {
      num: 50,
      checked: true
    },
    {
      num: 100,
      checked: true
    },
    {
      num: 200,
      checked: true
    },
    {
      num: 500,
      checked: true
    },
    {
      num: 1000,
      checked: false
    },
    {
      num: 2000,
      checked: false
    },
    {
      num: 5000,
      checked: false
    },
    {
      num: 10000,
      checked: false
    },
    {
      num: 20000,
      checked: false
    },
    {
      num: 50000,
      checked: false
    },
    {
      num: 100000,
      checked: false
    },
    {
      num: 200000,
      checked: false
    }
  ];
  limitInfo = {
    maxZhuang: 0,
    maxXian: 0,
    maxHe: 0,
    maxZhuangDui: 0,
    maxXianDui: 0,
    minZhuang: 0,
    minXian: 0,
    minHe: 0,
    minZhuangDui: 0,
    minXianDui: 0,
    maxAll: 0,

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
  videoInfo = {
    info1: {
      name: '',
      'normal': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      },
      'high': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      }
    },
    info2: {
      name: '',
      'normal': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      },
      'high': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      }
    },
    info3: {
      name: '',
      'normal': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      },
      'high': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      }
    }
  };
  videoPhoneInfo = {
    info1: {
      name: '',
      'normal': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      },
      'high': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      }
    },
    info2: {
      name: '',
      'normal': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      },
      'high': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      }
    },
    info3: {
      name: '',
      'normal': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      },
      'high': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      }
    }
  };
  videoH5Info = {
    info1: {
      name: '',
      'normal': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      },
      'high': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      }
    },
    info2: {
      name: '',
      'normal': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      },
      'high': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      }
    },
    info3: {
      name: '',
      'normal': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      },
      'high': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      }
    }
  };

  videoControlInfo = {
    info1: {
      name: '',
      'normal': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      },
      'high': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      }
    },
    info2: {
      name: '',
      'normal': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      },
      'high': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      }
    },
    info3: {
      name: '',
      'normal': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      },
      'high': {
        address1: '',
        address2: '',
        address3: '',
        address4: ''
      }
    }
  };

  // 清除数据
  clearAllData() {
    this.clearbasicInfo()
    this.clearChips()
    this.clearLimitInfo()
    this.clearVideoInfo()
  }

  clearbasicInfo() {
    this.basicInfo.md5 = ''
    this.basicInfo.tableId = 0
    this.basicInfo.tableIp = ''
    this.basicInfo.tableType = 1
    this.basicInfo.oldTableType = 1
    this.basicInfo.tableName = ''
    this.basicInfo.leftCount = 10
    this.basicInfo.gameType = 2
    this.basicInfo.tableStatus = 'on'
    this.basicInfo.limitId = 0
    this.basicInfo.tableIndex = 0
    this.basicInfo.nickName = ''
    this.basicInfo.tableSyncId = ''
    this.basicInfo.featureId = ''
    this.basicInfo.hadSync = false
    this.basicInfo.playTypeSwitch = 1
  }

  clearChips() {
    for (let i in this.chips) {
      if (this.chips[i]) {
        if (parseInt(i, 0) >= 6) {
          this.chips[i].checked = false
        } else {
          this.chips[i].checked = true
        }
      }
    }
  }

  clearLimitInfo() {
    for (let i in this.limitInfo) {
      if (this.limitInfo[i]) {
        this.limitInfo[i] = 0
      }
    }
  }

  clearVideoInfo() {
    for (let i in this.videoInfo) {
      let info = this.videoInfo[i]
      for (let j in info) {
        if (j === 'name') {
          info[j] = ''
          continue
        }
        for (let k in info[j]) {
          info[j][k] = ''
        }
      }
    }
    for (let i in this.videoPhoneInfo) {
      let info = this.videoPhoneInfo[i]
      for (let j in info) {
        if (j === 'name') {
          info[j] = ''
          continue
        }
        for (let k in info[j]) {
          info[j][k] = ''
        }
      }
    }
    for (let i in this.videoH5Info) {
      let info = this.videoH5Info[i]
      for (let j in info) {
        if (j === 'name') {
          info[j] = ''
          continue
        }
        for (let k in info[j]) {
          info[j][k] = ''
        }
      }
    }
    for (let i in this.videoControlInfo) {
      let info = this.videoControlInfo[i]
      for (let j in info) {
        if (j === 'name') {
          info[j] = ''
          continue
        }
        for (let k in info[j]) {
          info[j][k] = ''
        }
      }
    }
  }

  // 设置数据
  setAllData(data) {
    this.limitInfo.maxAll = data.maxAll
    this.setbasicInfo(data)
    this.setChips(data.chips)
    // this.setLimitInfo(data.limit);
    this.setVideoInfo(data.videoInfo)
    this.setVideoPhoneInfo(data.videoPhoneInfo)
    this.setVideoH5Info(data.videoH5Info)
    this.setVideoControlInfo(data.videoControlInfo)
  }

  setbasicInfo(data, forClone) {
    if (!forClone) {
      this.basicInfo.tableId = data.tableId
      this.basicInfo.tableIp = data.innerIp
      this.basicInfo.limitId = data.limitId
      this.basicInfo.tableSyncId = data.tableSyncId
      this.basicInfo.tableIndex = data.tableIndex ? data.tableIndex : 0
      this.basicInfo.featureId = data.featureId
    }
    this.basicInfo.tableType = data.tableType
    this.basicInfo.oldTableType = data.tableType
    this.basicInfo.tableName = data.name
    this.basicInfo.leftCount = data.countDown
    this.basicInfo.tableStatus = data.actived === 1 ? 'on' : 'off'
    this.basicInfo.gameType = data.type
    this.basicInfo.md5 = data.encryptId
    this.basicInfo.nickName = data.nickName
    this.basicInfo.playTypeSwitch = data.playTypeSwitch
  }

  setChips(data) {
    for (let i in this.chips) {
      if (data.indexOf(this.chips[i].num) >= 0) {
        this.chips[i].checked = true
      } else {
        this.chips[i].checked = false
      }
    }
  }

  setLimitInfo(data) {
    this.limitInfo.maxX1 = data.maxX1
    this.limitInfo.maxX2 = data.maxX2
    this.limitInfo.maxX3 = data.maxX3
    this.limitInfo.minX1 = data.minX1
    this.limitInfo.minX2 = data.minX2
    this.limitInfo.minX3 = data.minX3
    this.limitInfo.maxX1Double = data.maxX1Double
    this.limitInfo.maxX2Double = data.maxX2Double
    this.limitInfo.maxX3Double = data.maxX3Double
    this.limitInfo.minX1Double = data.minX1Double
    this.limitInfo.minX2Double = data.minX2Double
    this.limitInfo.minX3Double = data.minX3Double

    this.limitInfo.min = data.min
    this.limitInfo.singleMax = data.singleMax
    this.limitInfo.doubleMax = data.doubleMax
    this.limitInfo.heMax = data.heMax
    this.limitInfo.bigSmallMax = data.bigSmallMax
    this.limitInfo.normalDoubleMax = data.normalDoubleMax
    this.limitInfo.perfectDoubleMax = data.perfectDoubleMax

    // 骰宝
    this.limitInfo.daXiaoMax = data.daXiaoMax
    this.limitInfo.danShuangMax = data.danShuangMax
    this.limitInfo.quanTouMax = data.quanTouMax
    this.limitInfo.weiTou1ToWeiTou6Max = data.weiTou1ToWeiTou6Max
    this.limitInfo.zuHeMax = data.zuHeMax
    this.limitInfo.duiZi1ToDuiZi6Max = data.duiZi1ToDuiZi6Max
    this.limitInfo.signal1ToSignal6Max = data.signal1ToSignal6Max
    this.limitInfo.he9ToHe12Max = data.he9ToHe12Max
    this.limitInfo.he8AndHe13Max = data.he8AndHe13Max
    this.limitInfo.he7AndHe14Max = data.he7AndHe14Max
    this.limitInfo.he6AndHe15Max = data.he6AndHe15Max
    this.limitInfo.he5AndHe16Max = data.he5AndHe16Max
    this.limitInfo.he4AndHe17Max = data.he4AndHe17Max

    // 轮盘
    this.limitInfo.directBetMax = data.directBetMax
    // 分注
    this.limitInfo.partBetMax = data.partBetMax
    // 衔注
    this.limitInfo.joinBetMax = data.joinBetMax
    // 三数
    this.limitInfo.threeBetMax = data.threeBetMax
    // 角注
    this.limitInfo.angleBetMax = data.angleBetMax
    // 四个号码
    this.limitInfo.fourBetMax = data.fourBetMax
    // 线注
    this.limitInfo.lineBetMax = data.lineBetMax
    // 列1/2/3
    this.limitInfo.row123BetMax = data.row123BetMax
    // 打1/2/3
    this.limitInfo.hit123BetMax = data.hit123BetMax

    let max = 0
    for (let key in this.limitInfo) {
      if (Number(max) < Number(this.limitInfo[key])) {
        max = Number(this.limitInfo[key])
      }
    }
    if (max > this.limitInfo.maxAll) {
      this.limitInfo.maxAll = max
    }
  }

  setVideoInfo(data) {
    for (let i in data) {
      let index = Number(i) + 1
      let key = 'info' + index
      if (this.videoInfo[key]) {
        let info = data[i]
        this.videoInfo[key].name = info.name
        for (let j in info.baseVideo) {
          let videoInfo = info.baseVideo[j]
          let op = null
          if (videoInfo.type === '标清') {
            op = this.videoInfo[key].normal
          } else if (videoInfo.type === '高清') {
            op = this.videoInfo[key].high
          }
          op.address1 = videoInfo.url[0] ? videoInfo.url[0] : ''
          op.address2 = videoInfo.url[1] ? videoInfo.url[1] : ''
          op.address3 = videoInfo.url[2] ? videoInfo.url[2] : ''
          op.address4 = videoInfo.url[3] ? videoInfo.url[3] : ''
        }
      }
    }
  }

  setVideoPhoneInfo(data) {
    for (let i in data) {
      let index = Number(i) + 1
      let key = 'info' + index
      if (this.videoPhoneInfo[key]) {
        let info = data[i]
        this.videoPhoneInfo[key].name = info.name
        for (let j in info.baseVideo) {
          let videoPhoneInfo = info.baseVideo[j]
          let op = null
          if (videoPhoneInfo.type === '标清') {
            op = this.videoPhoneInfo[key].normal
          } else if (videoPhoneInfo.type === '高清') {
            op = this.videoPhoneInfo[key].high
          }
          op.address1 = videoPhoneInfo.url[0] ? videoPhoneInfo.url[0] : ''
          op.address2 = videoPhoneInfo.url[1] ? videoPhoneInfo.url[1] : ''
          op.address3 = videoPhoneInfo.url[2] ? videoPhoneInfo.url[2] : ''
          op.address4 = videoPhoneInfo.url[3] ? videoPhoneInfo.url[3] : ''
        }
      }
    }
  }

  setVideoH5Info(data) {
    for (let i in data) {
      let index = Number(i) + 1
      let key = 'info' + index
      if (this.videoH5Info[key]) {
        let info = data[i]
        this.videoH5Info[key].name = info.name
        for (let j in info.baseVideo) {
          let videoH5Info = info.baseVideo[j]
          let op = null
          if (videoH5Info.type === '标清') {
            op = this.videoH5Info[key].normal
          } else if (videoH5Info.type === '高清') {
            op = this.videoH5Info[key].high
          }
          op.address1 = videoH5Info.url[0] ? videoH5Info.url[0] : ''
          op.address2 = videoH5Info.url[1] ? videoH5Info.url[1] : ''
          op.address3 = videoH5Info.url[2] ? videoH5Info.url[2] : ''
          op.address4 = videoH5Info.url[3] ? videoH5Info.url[3] : ''
        }
      }
    }
  }

  setVideoControlInfo(data) {
    for (let i in data) {
      let index = Number(i) + 1
      let key = 'info' + index
      if (this.videoControlInfo[key]) {
        let info = data[i]
        this.videoControlInfo[key].name = info.name
        for (let j in info.baseVideo) {
          let videoControlInfo = info.baseVideo[j]
          let op = null
          if (videoControlInfo.type === '标清') {
            op = this.videoControlInfo[key].normal
          } else if (videoControlInfo.type === '高清') {
            op = this.videoControlInfo[key].high
          }
          op.address1 = videoControlInfo.url[0] ? videoControlInfo.url[0] : ''
          op.address2 = videoControlInfo.url[1] ? videoControlInfo.url[1] : ''
          op.address3 = videoControlInfo.url[2] ? videoControlInfo.url[2] : ''
          op.address4 = videoControlInfo.url[3] ? videoControlInfo.url[3] : ''
        }
      }
    }
  }

  getChips() {
    let temp = []
    for (let i in this.chips) {
      if (this.chips[i].checked) {
        temp.push(this.chips[i].num)
      }
    }
    return temp
  }

  getLimit() {
    let limit = {
      maxZ: this.limitInfo.maxZ,
      minZ: this.limitInfo.minZ,
      maxX: this.limitInfo.maxX,
      minX: this.limitInfo.minX,
      maxH: this.limitInfo.maxH,
      minH: this.limitInfo.minH,
      maxZd: this.limitInfo.maxZd,
      minZd: this.limitInfo.minZd,
      maxXd: this.limitInfo.maxXd,
      minXd: this.limitInfo.minXd,
      maxAll: this.limitInfo.maxAll,
      // 新押注版本添加
      min: this.limitInfo.min,
      singleMax: this.limitInfo.singleMax,
      doubleMax: this.limitInfo.doubleMax,
      heMax: this.limitInfo.heMax,
      bigSmallMax: this.limitInfo.bigSmallMax,
      normalDoubleMax: this.limitInfo.normalDoubleMax,
      perfectDoubleMax: this.limitInfo.perfectDoubleMax
    }
    return limit
  }

  getVideoInfo() {
    let temp = [{}, {}, {}]
    for (let j = 0; j < 3; j++) {
      let index = j + 1
      temp[j]['name'] = this.videoInfo['info' + index].name
      temp[j]['baseVideo'] = [{}, {}]
      for (let i in this.videoInfo['info' + index]) {
        if (i === 'name') {
          continue
        }
        let info = this.videoInfo['info' + index]
        let key = i === 'high' ? '高清' : '标清'
        let op = key === '标清' ? temp[j]['baseVideo'][0] : temp[j]['baseVideo'][1]
        op.type = key
        op.url = [info[i].address1, info[i].address2, info[i].address3, info[i].address4]
      }
    }
    return temp
  }

  getVideoPhoneInfo() {
    let temp = [{}, {}, {}]
    for (let j = 0; j < 3; j++) {
      let index = j + 1
      temp[j]['name'] = this.videoPhoneInfo['info' + index].name
      temp[j]['baseVideo'] = [{}, {}]
      for (let i in this.videoPhoneInfo['info' + index]) {
        if (i === 'name') {
          continue
        }
        let info = this.videoPhoneInfo['info' + index]
        let key = i === 'high' ? '高清' : '标清'
        let op = key === '标清' ? temp[j]['baseVideo'][0] : temp[j]['baseVideo'][1]
        op.type = key
        op.url = [info[i].address1, info[i].address2, info[i].address3, info[i].address4]
      }
    }
    return temp
  }

  getVideoH5Info() {
    let temp = [{}, {}, {}]
    for (let j = 0; j < 3; j++) {
      let index = j + 1
      temp[j]['name'] = this.videoH5Info['info' + index].name
      temp[j]['baseVideo'] = [{}, {}]
      for (let i in this.videoH5Info['info' + index]) {
        if (i === 'name') {
          continue
        }
        let info = this.videoH5Info['info' + index]
        let key = i === 'high' ? '高清' : '标清'
        let op = key === '标清' ? temp[j]['baseVideo'][0] : temp[j]['baseVideo'][1]
        op.type = key
        op.url = [info[i].address1, info[i].address2, info[i].address3, info[i].address4]
      }
    }
    return temp
  }

  getVideoControlInfo() {
    let temp = [{}, {}, {}]
    for (let j = 0; j < 3; j++) {
      let index = j + 1
      temp[j]['name'] = this.videoControlInfo['info' + index].name
      temp[j]['baseVideo'] = [{}, {}]
      for (let i in this.videoControlInfo['info' + index]) {
        if (i === 'name') {
          continue
        }
        let info = this.videoControlInfo['info' + index]
        let key = i === 'high' ? '高清' : '标清'
        let op = key === '标清' ? temp[j]['baseVideo'][0] : temp[j]['baseVideo'][1]
        op.type = key
        op.url = [info[i].address1, info[i].address2, info[i].address3, info[i].address4]
      }
    }
    return temp
  }

  checkSelf() {
    let res = {
      result: 0,
      errStr: ''
    }
    let limitTotal = this.limitInfo.maxAll
    for (let i in this.limitInfo) {
      if (this.limitInfo[i] > limitTotal) {
        res.result = 1
        res.errStr = '限红数据设置错误'
      }
    }
    if (this.basicInfo.limitId === 0) {
      res.result = 1
      res.errStr = '限红数据设置错误'
    }
    let nameList = ['Z', 'X', 'H', 'Zd', 'Xd']
    for (let i in nameList) {
      if (this.limitInfo['max' + nameList[i]] < this.limitInfo['min' + nameList[i]]) {
        res.result = 1
        res.errStr = '限红数据设置错误'
      }
    }
    if (this.basicInfo.tableName.length === 0) {
      res.result = 1
      res.errStr = '桌台名称未设置'
    }
    if (this.basicInfo.nickName.length === 0) {
      res.result = 1
      res.errStr = '桌台简称未设置'
    }
    if (this.basicInfo.tableIp.length === 0 && !this.basicInfo.tableSyncId) {
      res.result = 1
      res.errStr = '桌台IP未设置'
    }
    if (this.basicInfo.gameType === -1) {
      res.result = 1
      res.errStr = '桌台游戏类型未设置'
    }
    if (isNaN(parseInt(this.basicInfo.tableIndex.toString(), 0)) || this.basicInfo.tableIndex <= 0) {
      res.result = 1
      res.errStr = '桌台排序下标设置错误'
    }
    return res
  }

  autoSet(num) {
    let from = Math.pow(10, num - 1)
    let to = 0
    let str = ''
    while (str.length < num) {
      str = str + '9'
    }
    to = parseInt(str, 0)
    this.basicInfo.tableSyncId = this.createRandom2(1, from, to).toString()
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

  clone(data) {
    this.limitInfo.maxAll = data.maxAll
    this.setbasicInfo(data, true)
    // this.setChips(data.chips);
    // this.setLimitInfo(data.limit);
    this.setVideoInfo(data.videoInfo)
    this.setVideoPhoneInfo(data.videoPhoneInfo)
    this.setVideoH5Info(data.videoH5Info)
    // this.setVideoControlInfo(data.videoControlInfo);
  }
}

