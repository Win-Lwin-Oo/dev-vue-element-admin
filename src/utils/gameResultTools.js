import { ResultNameMap } from '@/common/common'
/*
*  游戏结果工具
* */
export class GameResultTools {
  getBaijiaEach(arr) {
    let baijiaEach = {
      total: 0,
      zhuang: 0,
      xian: 0,
      he: 0,
      zDui: 0,
      xDui: 0,
      Da: 0,
      xiao: 0,
      willDuizi: 0,
      perfectDuizi: 0,
      Zstake: 0,
      Xstake: 0,
      superSix: 0
    }
    baijiaEach.total = arr.length
    for (let item of arr) {
      switch (Number(item.slice(1, 3))) {
        case 10:
          baijiaEach.zhuang++
          break
        case 11:
          baijiaEach.zhuang++
          baijiaEach.zDui++
          break
        case 12:
          baijiaEach.zhuang++
          baijiaEach.xDui++
          break
        case 13:
          baijiaEach.zhuang++
          baijiaEach.zDui++
          baijiaEach.xDui++
          break
        case 20:
          baijiaEach.xian++
          break
        case 21:
          baijiaEach.xian++
          baijiaEach.zDui++
          break
        case 22:
          baijiaEach.xian++
          baijiaEach.xDui++
          break
        case 23:
          baijiaEach.xian++
          baijiaEach.zDui++
          baijiaEach.xDui++
          break
        case 30:
          baijiaEach.he++
          break
        case 31:
          baijiaEach.he++
          baijiaEach.zDui++
          break
        case 32:
          baijiaEach.he++
          baijiaEach.xDui++
          break
        case 33:
          baijiaEach.he++
          baijiaEach.zDui++
          baijiaEach.xDui++
          break
      }
      switch (Number(item.slice(5, 6))) {
        case 1:
          baijiaEach.Da++
          break
        case 2:
          baijiaEach.xiao++
          break
      }
      if (Number(item.slice(6, 7)) === 1) {
        baijiaEach.willDuizi++
      }
      if (Number(item.slice(7, 8)) === 1) {
        baijiaEach.perfectDuizi++
      }
      if (Number(item.slice(8, 9)) === 1) {
        baijiaEach.Zstake++
      } else if (Number(item.slice(8, 9)) === 2) {
        baijiaEach.Xstake++
      }
      if (Number(item.slice(11, 12)) === 1) {
        baijiaEach.superSix++
      }
    }
    return baijiaEach
  }

  getLonghuEach(arr) {
    let longhuEach = {
      total: 0,
      long: 0,
      hu: 0,
      he: 0,
      longRed: 0,
      longBlack: 0,
      huRed: 0,
      huBlack: 0,
      longDan: 0,
      longShuang: 0,
      huDan: 0,
      huShuang: 0
    }
    longhuEach.total = arr.length
    for (let item of arr) {
      switch (Number(item.slice(1, 3))) {
        case 10:
          longhuEach.hu++
          break
        case 20:
          longhuEach.long++
          break
        case 30:
          longhuEach.he++
          break
      }
      if (Number(item.slice(5, 6)) === 2) {
        longhuEach.longShuang++
      } else if (Number(item.slice(5, 6)) === 1) {
        longhuEach.longDan++
      }
      if (Number(item.slice(6, 7)) === 2) {
        longhuEach.longBlack++
      } else if (Number(item.slice(6, 7)) === 1) {
        longhuEach.longRed++
      }
      if (Number(item.slice(7, 8)) === 2) {
        longhuEach.huShuang++
      } else if (Number(item.slice(7, 8)) === 1) {
        longhuEach.huDan++
      }
      if (Number(item.slice(8, 9)) === 2) {
        longhuEach.huBlack++
      } else if (Number(item.slice(8, 9)) === 1) {
        longhuEach.huRed++
      }
    }
    return longhuEach
  }

  getNiuniuEach(arr) {
    let niuEach = {
      xian1: 0,
      xian2: 0,
      xian3: 0,
      total: 0
    }
    niuEach.total = arr.length
    for (let item of arr) {
      if (Number(item.slice(4, 5)) === 2) {
        niuEach.xian1++
      }
      if (Number(item.slice(7, 8)) === 2) {
        niuEach.xian2++
      }
      if (Number(item.slice(10, 11)) === 2) {
        niuEach.xian3++
      }
    }
    return niuEach
  }

  getTouBaoEach(arr) {
    let touBaoEach = {
      total: 0,
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
      coinZongHe: 0
    }
    let zongHe = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    touBaoEach.total = arr.length
    for (let item of arr) {
      if (Number(item) === -1) {
        continue
      }
      let result = item
      let touNum = result.slice(1, 4)
      let totalNum = Number(result.slice(4, 6))
      let daXiao = Number(result.slice(6, 7))
      let danShuang = Number(result.slice(7, 8))
      let quanWei = Number(result.slice(8, 9))
      let duizi = Number(result.slice(15))
      if (daXiao && daXiao !== 3) {
        if (daXiao === 1) touBaoEach.coinTouDa += 1
        if (daXiao === 2) touBaoEach.coinTouXiao += 1
      }
      if (danShuang && danShuang !== 3) {
        if (danShuang === 1) touBaoEach.coinTouDan += 1
        if (danShuang === 2) touBaoEach.coinTouShuang += 1
      }
      if (quanWei) {
        touBaoEach.coinQuanWei += 1
      }
      if (duizi) {
        touBaoEach.coinDuiZi += 1
      }
      if (daXiao !== 3) {
        if (zongHe.indexOf(totalNum) >= 0) {
          touBaoEach.coinZongHe += 1
        }
        touBaoEach.coinPaiJiu += 1
        touBaoEach.coinDanDian += 1
      }
    }
    touBaoEach.coinWeiTou = touBaoEach.coinQuanWei
    return touBaoEach
  }

  getLunPanEach(arr) {
    let lunPanEach = {
      total: 0,
      // 单
      coinDan: 0,
      // 双
      coinShuang: 0,
      // 大
      coinDa: 0,
      // 小
      coinXiao: 0,
      // 红
      coinHong: 0,
      // 黑
      coinHei: 0,
      // 0
      coinZero: 0
    }
    lunPanEach.total = arr.length
    for (let item of arr) {
      if (Number(item) === -1) {
        continue
      }
      let result = item
      let pointNum = Number(result.slice(1, 3))
      let daXiao = Number(result.slice(3, 4))
      let hongHei = Number(result.slice(5, 6))
      let danShuang = Number(result.slice(4, 5))
      if (Number(pointNum) === 0) {
        lunPanEach.coinZero += 1
        continue
      }
      if (daXiao) {
        if (daXiao === 1) {
          lunPanEach.coinDa += 1
        } else {
          lunPanEach.coinXiao += 1
        }
      }
      if (danShuang) {
        if (danShuang === 1) {
          lunPanEach.coinDan += 1
        } else {
          lunPanEach.coinShuang += 1
        }
      }
      if (hongHei) {
        if (hongHei === 1) {
          lunPanEach.coinHong += 1
        } else {
          lunPanEach.coinHei += 1
        }
      }
    }
    return lunPanEach
  }

  /*
  *通用
  * **/

  // 检测是否作废 0 未开结果 1 正常 2 作废
  checkVoid(result) {
    if (!result || Number(result) === -1) {
      return 0
    }
    let code = Number(result.slice(0, 1))
    if (code === 0) {
      return 1
    }
    if (code === 1) {
      return 2
    }
  }

  /*
   *百家
   * **/

  // 获取游戏结果名称
  getBaijiaResultName(result, odds) {
    let resultName = ''
    if (!result || Number(result) === -1) {
      return resultName
    }
    resultName = ''
    let normalResult = Number(result.slice(1, 3))
    let daXiaoResult = Number(result.slice(5, 6))
    let renyiDuiziResult = Number(result.slice(6, 7))
    let wanMeiDuiziResult = Number(result.slice(7, 8))
    let longBaoResult = Number(result.slice(8, 9))
    let superSixResult = Number(result.slice(11, 12))
    resultName += ResultNameMap[1][normalResult]
    // 判断未开局作废
    if (normalResult === 0) {
      resultName = '未开局'
      if (this.checkVoid(result) === 2) {
        resultName = '已作废'
      }
      return resultName
    }
    if (daXiaoResult === 2) {
      resultName += ', 小'
    } else if (daXiaoResult === 1) {
      resultName += ', 大'
    }
    if (renyiDuiziResult) resultName += ', 任意对子'
    if (wanMeiDuiziResult) resultName += ', 完美对子'
    if (longBaoResult === 1) {
      // if (Math.floor(normalResult / 10) === 1) {
      resultName += ', 庄龙宝'
    } else if (longBaoResult === 2) {
      resultName += ', 闲龙宝'
      // }
    }
    if (odds && longBaoResult) {
      let isLi = Number(result.slice(9, 10))
      let longBao = Number(result.slice(10, 11))
      if (isLi) {
        resultName += `x${odds.longBaoLi}`
      } else {
        resultName += `x${odds['longBao' + longBao]}`
      }
    }
    if (superSixResult) resultName += ', 超级六'
    if (this.checkVoid(result) === 2) {
      resultName += '(废)'
    }
    return resultName
  }

  /*
 *龙虎
 * **/
  // 1：是否作废
  // 2-3：旧结果
  // 4-5:  点数
  // 6: 大/小 龙单/龙双
  // 7:任意对子 龙红/龙黑
  // 8:完美对子 虎单/虎双
  // 9:龙宝 虎红/虎黑
  // 10:超级六
  // 获取游戏结果名称
  getLonghuResultName(result) {
    let resultName = ''
    if (!result || Number(result) === -1) {
      return resultName
    }
    resultName = ''
    let normalResult = Number(result.slice(1, 3))
    let longShuangResult = Number(result.slice(5, 6))
    let longHeiResult = Number(result.slice(6, 7))
    let huShuangResult = Number(result.slice(7, 8))
    let huHeiResult = Number(result.slice(8, 9))
    resultName += ResultNameMap[2][normalResult]
    // 判断未开局作废
    if (normalResult === 0) {
      resultName = '未开局'
      if (this.checkVoid(result) === 2) {
        resultName = '已作废'
      }
      return resultName
    }
    if (longShuangResult === 2) {
      resultName += ', 龙双'
    } else if (longShuangResult === 1) {
      resultName += ', 龙单'
    }
    if (longHeiResult === 2) {
      resultName += ', 龙黑'
    } else if (longHeiResult === 1) {
      resultName += ', 龙红'
    }
    if (huShuangResult === 2) {
      resultName += ', 虎双'
    } else if (huShuangResult === 1) {
      resultName += ', 虎单'
    }
    if (huHeiResult === 2) {
      resultName += ', 虎黑'
    } else if (huHeiResult === 1) {
      resultName += ', 虎红'
    }
    if (this.checkVoid(result) === 2) {
      resultName += '(废)'
    }
    return resultName
  }

  /*
*牛牛
 * **/
  // 1:是否作废
  // 2:庄输赢
  // 3-4:庄牌型
  // 5:闲1输赢
  // 6-7:闲1牌型
  // 8:闲2输赢
  // 9-10:闲2牌型
  // 11:闲3输赢
  // 12-13:闲3牌型
  // 获取游戏结果名称
  getNiuniuResultName(result) {
    let niuniuType = ['未开结果', '无牛', '牛1', '牛2', '牛3', '牛4', '牛5', '牛6', '牛7', '牛8', '牛9', '牛牛', '五公牛']
    let resultName = '未开结果'
    if (!result || Number(result) === -1) {
      return resultName
    }
    resultName = ''
    let zhuangResult = Number(result.slice(2, 4))
    let xian1Result = Number(result.slice(5, 7))
    let xian2Result = Number(result.slice(8, 10))
    let xian3Result = Number(result.slice(11, 13))
    resultName = `庄(${niuniuType[zhuangResult]}), 闲1(${niuniuType[xian1Result]}), 闲2(${niuniuType[xian2Result]}), 闲3(${niuniuType[xian3Result]})`
    if (this.checkVoid(result) === 2) {
      resultName += '(废)'
    }
    return resultName
  }

  /*
*  骰宝
* */
  // 1：是否作废 0：正常 1：作废
  // 2：色子1 数字1-6
  // 3：色子2 数字1-6
  // 4：色子3 数字1-6
  // 5-6：合计点数 （04-17）如果为围骰没有合计点数，显示暂定00
  // 7：大小 0：无 1：大 2：小
  // 8：单双 0：无 1：单 2：双
  // 9: 全围  0：无围 1-6：1围-6围
  // 10-15：组合  0：无组合 剩余有组合（例：131535）
  // 16：对子 0：无对子 1-6：对子1-6
  getTouBaoResultName(result) {
    let resultName = '未开结果'
    if (!result || Number(result) === -1) {
      return resultName
    }
    resultName = ''
    let touNum = result.slice(1, 4)
    let totalNum = Number(result.slice(4, 6))
    let daXiao = Number(result.slice(6, 7))
    let danShuang = Number(result.slice(7, 8))
    let quanWei = Number(result.slice(8, 9))
    let paiJiu1 = Number(result.slice(9, 11))
    let paiJiu2 = Number(result.slice(11, 13))
    let paiJiu3 = Number(result.slice(13, 15))
    let duizi = Number(result.slice(15))
    resultName += `点数: ${touNum}`
    resultName += ` 合计点数: ${totalNum}`
    if (daXiao && daXiao !== 3) {
      resultName += daXiao === 1 ? ' 大' : ' 小'
    }
    if (danShuang && danShuang !== 3) {
      resultName += danShuang === 1 ? ' 单' : ' 双'
    }
    if (quanWei) {
      resultName += ` 全围${quanWei}`
    }
    if (paiJiu1) {
      resultName += ` 组合${paiJiu1}`
    }
    if (paiJiu2) {
      resultName += ` 组合${paiJiu2}`
    }
    if (paiJiu3) {
      resultName += ` 组合${paiJiu3}`
    }
    if (duizi) {
      resultName += ` 对子${duizi}`
    }
    if (this.checkVoid(result) === 2) {
      resultName += '(废)'
    }
    return resultName
  }

  // 轮盘
  // 1 是否作废 0：正常 1：作废
  // 2-3 点数
  // 4 大小 0：无大小 1：大 2：小
  // 5 单双 0：无单双 1：单 2：双
  // 6 红黑 0：无红黑 1：红 2：黑
  // 7 打 0：无打 1：一打 2：二打 3：三打
  // 8 列 0：无列 1：一列 2：二列 3：三列
  getLunPanResultName(result) {
    let resultName = '未开结果'
    if (!result || Number(result) === -1) {
      return resultName
    }
    resultName = ''
    let pointNum = Number(result.slice(1, 3))
    let daXiao = Number(result.slice(3, 4))
    let danShuang = Number(result.slice(4, 5))
    let hongHei = Number(result.slice(5, 6))
    let da = Number(result.slice(6, 7))
    let lie = Number(result.slice(7))

    resultName += `结果 ${pointNum}`
    if (daXiao) {
      resultName += daXiao === 1 ? ' 大' : ' 小'
    }
    if (danShuang) {
      resultName += danShuang === 1 ? ' 单' : ' 双'
    }
    if (hongHei) {
      resultName += hongHei === 1 ? ' 红' : ' 黑'
    }
    if (da) {
      resultName += ` 第${da}打`
    }
    if (lie) {
      resultName += ` 第${lie}列`
    }
    if (this.checkVoid(result) === 2) {
      resultName += ' (废)'
    }
    return resultName
  }
}
