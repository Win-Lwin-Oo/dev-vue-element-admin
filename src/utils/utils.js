import { ResultNameMap } from '@/common/common'
export class Utils {
  getWayData(resoult) {
    let wayData = []
    let heNum = 0
    let lastIndex = 0
    for (let i = 0; i < resoult.length; i++) {
      if (resoult[i] === 0) {
        continue
      }
      if ((resoult[i] >= 30 && resoult[i] < 100) || resoult[i] >= 130) {
        // 如果第一个是和 先补充数据  不需要统计和数量
        if (wayData.length === 0) {
          continue
        }
        heNum++
        if (wayData[wayData.length - 1].length > 0) {
          wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].heNum = wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].void ? 0 : heNum
          // wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].icon =
          //     heNum > 0 ? resoult[lastIndex] + 100 : resoult[lastIndex];
          if (resoult[i] % 10 !== 0 && !wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].void) {
            if (wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].icon % 10 === 0) {
              wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].icon += resoult[i] % 10
            } else if (wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].icon % 10 !== resoult[i] % 10) {
              wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].icon =
                Math.floor(wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].icon / 10) * 10 + 3
            }
          }
          if (!wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].void) {
            wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].icon =
              wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].icon >= 100
                ? wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].icon
                : wayData[wayData.length - 1][wayData[wayData.length - 1].length - 1].icon + 100
          }
        }
        continue
      }
      if (wayData.length !== 0) {
        heNum = 0
      }
      if (i === 0) {
        wayData.push([])
        wayData[wayData.length - 1].push({
          'icon': resoult[i] >= 100 ? resoult[i] - 100 : resoult[i],
          'type': resoult[i] >= 100 ? Math.floor((resoult[i] - 100) / 10) : Math.floor(resoult[i] / 10),
          'heNum': heNum,
          'isAsk': i >= resoult.length,
          'index': i >= resoult.length ? -1 : i,
          'checked': false,
          'void': resoult[i] >= 100
        })
      } else {
        let curResult = resoult[i] >= 100 ? resoult[i] - 100 : resoult[i]
        let lastResult = resoult[lastIndex] >= 100 ? resoult[lastIndex] - 100 : resoult[lastIndex]
        if (Math.floor(curResult / 10) === Math.floor(lastResult / 10)) {
          if (!wayData[wayData.length - 1]) {
            wayData.push([])
          }
          wayData[wayData.length - 1].push({
            'icon': resoult[i] >= 100 ? resoult[i] - 100 : resoult[i],
            'type': resoult[i] >= 100 ? Math.floor((resoult[i] - 100) / 10) : Math.floor(resoult[i] / 10),
            'heNum': heNum,
            'isAsk': i >= resoult.length,
            'index': i >= resoult.length ? -1 : i,
            'checked': false,
            'void': resoult[i] >= 100
          })
        } else {
          wayData.push([])
          wayData[wayData.length - 1].push({
            'icon': resoult[i] >= 100 ? resoult[i] - 100 : resoult[i],
            'type': resoult[i] >= 100 ? Math.floor((resoult[i] - 100) / 10) : Math.floor(resoult[i] / 10),
            'heNum': heNum,
            'isAsk': i >= resoult.length,
            'index': i >= resoult.length ? -1 : i,
            'checked': false,
            'void': resoult[i] >= 100
          })
        }
        lastIndex = i
      }
      heNum = 0
    }
    return wayData
  }

  getNumResultWay(resoult, minNum) {
    let numWay = [[], [], [], [], [], []]
    for (let i = 0; i < resoult.length; i++) {
      const x = i % 6
      const y = Math.floor(i / 6)
      if (y >= numWay[0].length) {
        for (let j = 0; j < 6; j++) {
          numWay[j].push({
            'icon': -1,
            'index': -1,
            'checked': false
          })
        }
      }
      numWay[x][y] = {
        'icon': Number(resoult[i].slice(1, 2)),
        'index': resoult.length <= i ? -1 : i,
        'void': Number(resoult[i].slice(0, 1)) === 1,
        'coin': Number(resoult[i].slice(3, 5)),
        'checked': false
      }
    }
    for (let i = 0; i < numWay.length; i++) {
      if (numWay[i].length < minNum) {
        for (let j = numWay[i].length; j < minNum; j++) {
          numWay[i].push({
            'icon': -1,
            'index': -1,
            'checked': false
          })
        }
      }
      if (i > 0 && numWay[i].length < numWay[0].length) {
        numWay[i].push({
          'icon': -1,
          'index': -1,
          'checked': false
        })
      }
    }
    return numWay
  }

  getPigsWay(resoult, minNum) {
    let pigsWay = [[], [], [], [], [], []]
    for (let i = 0; i < resoult.length; i++) {
      const r = i % 6
      const c = Math.floor(i / 6)
      // 猪仔路
      if (c >= pigsWay[0].length) {
        for (let j = 0; j < 6; j++) {
          pigsWay[j].push({
            'icon': -1,
            'isAsk': false,
            'index': -1,
            'checked': false
          })
        }
      }
      pigsWay[r][c] = {
        'icon': resoult[i] >= 100 ? resoult[i] - 100 : resoult[i],
        'isAsk': i >= resoult.length,
        'index': i >= resoult.length ? -1 : i,
        'checked': false,
        'void': resoult[i] >= 100
      }
    }
    for (let i = 0; i < pigsWay.length; i++) {
      if (pigsWay[i].length < minNum) {
        for (let j = pigsWay[i].length; j < minNum; j++) {
          pigsWay[i].push({
            'icon': -1,
            'isAsk': false,
            'index': -1,
            'checked': false,
            'void': false
          })
        }
      }
      if (i > 0 && pigsWay[i].length < pigsWay[0].length) {
        pigsWay[i].push({
          'icon': -1,
          'isAsk': false,
          'index': -1,
          'checked': false,
          'void': false
        })
      }
    }
    return pigsWay
  }

  getMacaoWay(wayData, minNum) {
    const posInfo = {
      x: 0,
      di: 0,
      lx: 0,
      ly: 0
    }
    let macaoWay = [[], [], [], [], [], []]
    for (let i = 0; i < wayData.length; i++) {
      for (let j = 0; j < wayData[i].length; j++) {
        if (posInfo.x + 1 > macaoWay[0].length || posInfo.lx + 1 > macaoWay[0].length) {
          for (let k = 0; k < macaoWay.length; k++) {
            macaoWay[k].push({
              'icon': -1,
              'isAsk': false,
              'index': -1,
              'checked': false,
              'void': false
            })
          }
        }
        if (j === 0) {
          macaoWay[0][posInfo.x] = wayData[i][j]
          posInfo.lx = posInfo.x
          posInfo.ly = 0
          posInfo.di = 0
          posInfo.x++
        } else {
          if (posInfo.ly === 5 || macaoWay[posInfo.ly + 1][posInfo.lx].icon > 0) {
            posInfo.di = 1
          }
          if (posInfo.di > 0) {
            macaoWay[posInfo.ly][posInfo.lx + 1] = wayData[i][j]
            posInfo.lx += 1
          } else {
            macaoWay[posInfo.ly + 1][posInfo.lx] = wayData[i][j]
            posInfo.ly += 1
          }
          if (posInfo.ly === 0) {
            posInfo.x += 1
          }
        }
      }
    }

    // for (let i = macaoWay[0].length; i < minNum; i++) {
    //   for (let j = 0; j < macaoWay.length; j++) {
    //     macaoWay[j].push({
    //       'icon': -1,
    //       'isAsk': false
    //     });
    //   }
    // }
    for (let i = 0; i < macaoWay.length; i++) {
      if (macaoWay[i].length < minNum) {
        for (let j = macaoWay[i].length; j < minNum; j++) {
          macaoWay[i].push({
            'icon': -1,
            'isAsk': false,
            'index': -1,
            'checked': false,
            'void': false
          })
        }
      }
      if (i > 0 && macaoWay[i].length < macaoWay[0].length) {
        macaoWay[i].push({
          'icon': -1,
          'isAsk': false,
          'index': -1,
          'checked': false,
          'void': false
        })
      }
    }
    // for (let i = 0; i < macaoWay.length; i++) {
    //     console.log(macaoWay[i].length);
    // }
    return macaoWay
  }

  getSamSungWay(wayData, minNum) {
    let way = [[], [], []]
    let index = 0
    for (let i = 0; i < wayData.length; i++) {
      for (let j = 0; j < wayData[i].length; j++) {
        way[index % 3].push(wayData[i][j])
        index++
      }
    }
    for (let i = 0; i < way.length; i++) {
      if (way[i].length <= minNum) {
        for (let j = way[i].length; j < minNum; j++) {
          way[i].push({
            'icon': -1,
            'isAsk': false
          })
        }
      }
      if (i > 0 && way[i].length < way[0].length) {
        way[i].push({
          'icon': -1,
          'isAsk': false
        })
      }
    }
    return way
  }

  // 大眼仔路
  getWay(wayData, index, minNum) {
    const data = []
    let way = [[], [], [], [], [], []]
    if (wayData.length >= index) {
      for (let i = index - 1; i < wayData.length; i++) {
        for (let j = 0; j < wayData[i].length; j++) {
          if (i === index - 1 && j === 0) {
            continue
          }
          if (j === 0) {
            if (wayData[i - 1].length === wayData[i - index].length) {
              data.push({
                'icon': 10,
                'isAsk': wayData[i][j].isAsk
              })
            } else {
              data.push({
                'icon': 20,
                'isAsk': wayData[i][j].isAsk
              })
            }
          } else {
            if (j === wayData[i - index + 1].length) {
              data.push({
                'icon': 20,
                'isAsk': wayData[i][j].isAsk
              })
            } else {
              data.push({
                'icon': 10,
                'isAsk': wayData[i][j].isAsk
              })
            }
          }
        }
      }
    } else {
      for (let i = 0; i < way.length; i++) {
        if (way[i].length < minNum) {
          for (let j = way[i].length; j < minNum; j++) {
            way[i].push({
              'icon': -1,
              'isAsk': false
            })
          }
        }
        if (i > 0 && way[i].length < way[0].length) {
          way[i].push({
            'icon': -1,
            'isAsk': false
          })
        }
      }
      return way
    }
    const posInfo = {
      x: 0,
      di: 0,
      lx: 0,
      ly: 0
    }
    for (let i = 0; i < data.length; i++) {
      const r = i % 6
      const c = Math.floor(i / 6)
      // 大路
      if (posInfo.x + 1 >= way[r].length || posInfo.lx + 1 >= way[r].length) {
        for (let j = 0; j < way.length; j++) {
          way[j].push({
            'icon': -1,
            'isAsk': false
          })
        }
      }
      if (i === 0) {
        way[r][c] = data[i]
      } else {
        if (data[i].icon === data[i - 1].icon) {
          if (posInfo.ly === 5 || way[posInfo.ly + 1][posInfo.lx].icon > 0) {
            posInfo.di = 1
          }
          if (posInfo.di > 0) {
            way[posInfo.ly][posInfo.lx + 1] = data[i]
            posInfo.lx += 1
          } else {
            way[posInfo.ly + 1][posInfo.lx] = data[i]
            posInfo.ly += 1
          }
          if (posInfo.ly === 0) {
            posInfo.x += 1
          }
        } else {
          posInfo.di = 0
          posInfo.x += 1
          way[0][posInfo.x] = data[i]
          posInfo.lx = posInfo.x
          posInfo.ly = 0
        }
      }
    }

    for (let i = 0; i < way.length; i++) {
      if (way[i].length < minNum) {
        for (let j = way[i].length; j < minNum; j++) {
          way[i].push({
            'icon': -1,
            'isAsk': false
          })
        }
      }
      if (i > 0 && way[i].length < way[0].length) {
        way[i].push({
          'icon': -1,
          'isAsk': false
        })
      }
    }
    return way
  }

  interceptArr(arr, maxLength) {
    let standardIndex = 0
    let juNum = -1
    for (let i in arr) {
      let list = arr[i]
      for (let j in list) {
        if (Number(list[j].index) > juNum) {
          standardIndex = Number(i)
          juNum = Number(list[j].index)
        }
      }
    }
    if (arr[standardIndex].length > maxLength) {
      let index = arr[standardIndex].length - maxLength
      for (let i in arr) {
        arr[i] = arr[i].slice(index)
        while (arr[i].length < maxLength) {
          arr[i].push({
            icon: 0,
            isAsk: false,
            index: -1,
            'checked': false,
            'void': false
          })
        }
        while (arr[i].length > maxLength) {
          arr[i].pop()
        }
      }
    }
  }

  // 清除各个路上的多余数据
  checkOutLineWay(wayData, maxNum) {
    if (wayData[0].length > maxNum) {
      let index = wayData[0].length - maxNum
      for (let i in wayData) {
        if (wayData[i]) {
          wayData[i].splice(0, index)
        }
      }
    }
  }

  sortNumber(a, b) {
    return a - b
  }

  getNiuNiuWay(resoult, minNum) {
    let niuWay = []
    for (let i = 0; i < resoult.length; i++) {
      let op = {
        'void': Number(resoult[i].slice(0, 1)),
        'zWin': Number(resoult[i].slice(1, 2)),
        'zRes': Number(resoult[i].slice(2, 4)),
        'x1Win': Number(resoult[i].slice(4, 5)),
        'x1Res': Number(resoult[i].slice(5, 7)),
        'x2Win': Number(resoult[i].slice(7, 8)),
        'x2Res': Number(resoult[i].slice(8, 10)),
        'x3Win': Number(resoult[i].slice(11, 12)),
        'x3Res': Number(resoult[i].slice(12, 14))
      }
      niuWay.push(op)
    }
    if (niuWay.length > minNum) {
      const index = niuWay.length - minNum
      return niuWay.slice(index)
    } else {
      for (let i = niuWay.length; i < minNum; i++) {
        let op = {
          'void': '',
          'zWin': '',
          'zRes': '',
          'x1Win': '',
          'x1Res': '',
          'x2Win': '',
          'x2Res': '',
          'x3Win': '',
          'x3Res': ''
        }
        niuWay.push(op)
      }
    }
    return niuWay
  }

  getNiuWay(arr, minNum, res) {
    const NiuArr = []
    let sourceData = res
    if (res[0] && res[0].length !== 13) {
      sourceData = []
    }
    for (let index in sourceData) {
      let result = sourceData[index]
      if (Number(result) !== -1) {
        let list = {}
        // 2-4 4-7 7-10 10-13
        for (let i = 0; i < 4; i++) {
          let resStr = ''
          if (i === 0) {
            resStr = result.slice(2, 4)
          } else {
            resStr = result.slice(1 + i * 3)
          }
          let gameResult = Number(resStr.slice(1, 3))
          if (i === 0) {
            gameResult = Number(resStr)
          }
          let playerResult = Number(resStr.slice(0, 1))
          let op = {
            type: ResultNameMap[3][gameResult],
            value: gameResult,
            win: i ? playerResult : 0
          }
          list[i] = op
        }
        if (GameResultTools.checkVoid(result) === 2) {
          list[4] = 100
        }
        NiuArr.push(list)
      } else {
        let op = {}
        for (let l = 0; l < 4; l++) {
          op[l] = {
            type: '',
            value: 0,
            win: 0
          }
        }
        NiuArr.push(op)
      }
    }

    if (NiuArr.length > minNum) {
      const index = NiuArr.length - minNum
      return NiuArr.slice(index)
    } else {
      for (let j = NiuArr.length; j < minNum; j++) {
        let op = {}
        for (let k = 0; k < 4; k++) {
          op[k] = {
            type: '',
            value: 0,
            win: 0
          }
        }
        NiuArr.push(op)
      }
    }
    return NiuArr
  }

  checkNullObj(obj) {
    let isNull = true
    for (const i in obj) {
      isNull = false
      break
    }
    return isNull
  }

  /* 骰宝合计或者珠仔
  * @param resoult
  * @param minNum
  * @param type  // 1为合计  2为猪仔
  */
  getTotleWayData(resoult, minNum, type) {
    let totleWay = [[], [], [], [], [], []]
    for (let i = 0; i < resoult.length; i++) {
      const r = i % 6
      const c = Math.floor(i / 6)
      // 猪仔路
      if (c >= totleWay[0].length) {
        for (let j = 0; j < 6; j++) {
          totleWay[j].push({
            'icon': -1,
            'isAsk': false,
            'void': false,
            'index': -1,
            'checked': false
          })
        }
      }
      let res = 0
      if (type === 1) {
        res = Number(resoult[i].slice(4, 6))
      } else {
        res = Number(resoult[i].slice(1, 4))
      }
      totleWay[r][c] = {
        'icon': res,
        'isAsk': i >= resoult.length,
        'void': Number(resoult[i].slice(0, 1)) === 1,
        'index': i,
        'checked': false
      }
    }
    for (let i = 0; i < totleWay.length; i++) {
      if (totleWay[i].length < minNum) {
        for (let j = totleWay[i].length; j < minNum; j++) {
          totleWay[i].push({
            'icon': -1,
            'isAsk': false,
            'void': false,
            'index': -1,
            'checked': false
          })
        }
      }
      if (i > 0 && totleWay[i].length < totleWay[0].length) {
        totleWay[i].push({
          'icon': -1,
          'isAsk': false,
          'void': false,
          'index': -1,
          'checked': false
        })
      }
    }
    return totleWay
  }

  /* 骰宝单双，大小换算wayData
      * resoult  结果数组
      * type  7为单双， 6为大小
  */
  getTouBaoWayData(resoult, type) {
    let newWayData = []
    let resData = []
    let isRes = ''
    let lastIndex = 0
    for (let i = 0; i < resoult.length; i++) {
      isRes = resoult[i].slice(0, 1) + '' + resoult[i].slice(type, type + 1)
      resData.push(Number(isRes))
    }
    for (let j = 0; j < resData.length; j++) {
      if (j === 0) {
        newWayData.push([])
        newWayData[newWayData.length - 1].push({
          'void': resData[j] >= 10,
          'icon': resData[j] % 10,
          'index': j,
          'checked': false
        })
      } else {
        if (resData[j] % 10 === resData[lastIndex] % 10) {
          newWayData[newWayData.length - 1].push({
            'void': resData[j] >= 10,
            'icon': resData[j] % 10,
            'index': j,
            'checked': false
          })
        } else {
          newWayData.push([])
          newWayData[newWayData.length - 1].push({
            'void': resData[j] >= 10,
            'icon': resData[j] % 10,
            'index': j,
            'checked': false
          })
        }
        lastIndex = j
      }
    }
    return newWayData
  }

  // 获取轮盘露珠
  getLunPanWayData(resoult, minNum) {
    let LunPanWay = [[], [], [], [], [], []]
    let colorList = ['', 'red', 'black']

    for (let i = 0; i < resoult.length; i++) {
      const r = i % 6
      const c = Math.floor(i / 6)
      let resNum = Number(resoult[i].slice(1, 3))
      let hongHei = Number(resoult[i].slice(5, 6))
      let isVoid = Number(resoult[i].slice(0, 1)) === 1
      let daXiao = Number(resoult[i].slice(3, 4))
      let color = 'white'
      if (resNum >= 0) {
        color = resNum === 0 ? 'green' : colorList[hongHei]
      }
      if (c >= LunPanWay[0].length) {
        for (let j = 0; j < 6; j++) {
          LunPanWay[j].push({
            'icon': -1,
            'isAsk': false,
            'isVoid': false,
            'index': -1,
            'color': 'white',
            'daXiao': 0
          })
        }
      }
      LunPanWay[r][c] = {
        'icon': resNum,
        'isAsk': i >= resoult.length,
        'isVoid': isVoid,
        'index': i,
        'color': color,
        'daXiao': daXiao
      }
    }
    for (let i = 0; i < LunPanWay.length; i++) {
      if (LunPanWay[i].length < minNum) {
        for (let j = LunPanWay[i].length; j < minNum; j++) {
          LunPanWay[i].push({
            'icon': -1,
            'isAsk': false,
            'isVoid': false,
            'index': -1,
            'color': 'white',
            'daXiao': 0
          })
        }
      }
      if (i > 0 && LunPanWay[i].length < LunPanWay[0].length) {
        LunPanWay[i].push({
          'icon': -1,
          'isAsk': false,
          'isVoid': false,
          'index': -1,
          'color': 'white',
          'daXiao': 0
        })
      }
    }
    return LunPanWay
  }
}
