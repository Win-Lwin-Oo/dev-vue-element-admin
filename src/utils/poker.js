export class Poker {
  /**
     * 获取点数
     * @param {string} pokerMap 牌
     */
  getAllPoint(pokerMap) {
    let num = 0
    for (let k in pokerMap) {
      num += this.getPoint(pokerMap[k])
    }
    return num % 10
  }

  /**
     * 获取牌点数
     * @param {string} poker 牌
     */
  getPoint(poker) {
    let num = 0
    let code = poker.charCodeAt()
    let value = 0
    if (code < 91) {
      value = ((code - 65) % 13) + 1
    } else {
      value = ((code - 97) % 13) + 1
    }
    num = value > 9 ? 0 : value
    return num
  }

  /**
     * 获取龙虎牌点数
     * @param {string} poker 牌
     */
  getLhPoint(poker) {
    let code = poker.charCodeAt()
    let value = 0
    if (code < 91) {
      value = ((code - 65) % 13) + 1
    } else {
      value = ((code - 97) % 13) + 1
    }
    return value
  }

  /**
     * 获取牛牛类型
     * @param {string} pokerArr 牌数组
     */
  // public static getPokerTypeNN(pokerArr) {
  //     if (pokerArr.length === 5) {
  //         let info = {
  //             type: '',
  //             value: 0,
  //             win: 0
  //         };
  //         let isWuGong = true;
  //         let arr = [];
  //         let maxIndex = 0;
  //         let maxP = -1;
  //         for (let i = 0; i < pokerArr.length; i++) {
  //             let p = this.getLhPoint(pokerArr[i]);
  //             if (p > maxP) {
  //                 maxIndex = i;
  //                 maxP = p;
  //             } else if (p === maxP) {
  //                 let codeM = pokerArr[maxIndex].charCodeAt();
  //                 let codeI = pokerArr[i].charCodeAt();
  //                 if (codeM > codeI) {
  //                     maxIndex = i;
  //                     maxP = p;
  //                 }
  //             }
  //             if (p < 11) {
  //                 isWuGong = false;
  //             }
  //             p = p > 10 ? 10 : p;
  //             arr.push(p);
  //         }
  //         let value_p = maxP * 10;
  //         let code = pokerArr[maxIndex].charCodeAt();
  //         if (code > 109) {
  //             value_p += 1;
  //         } else if (code > 96) {
  //             value_p += 2;
  //         } else if (code > 77) {
  //             value_p += 3;
  //         } else {
  //             value_p += 4;
  //         }
  //         if (isWuGong) {
  //             info.type = '5公';
  //             info.value = 50000 + value_p;
  //             return info;
  //         }
  //
  //         for (let i = 0; i < arr.length - 2; i++) {
  //             for (let j = i + 1; j < arr.length - 1; j++) {
  //                 for (let k = j + 1; k < arr.length; k++) {
  //                     if ((arr[i] + arr[j] + arr[k]) % 10 === 0) {
  //                         // arr.splice(k,1).splice(j-1,1).splice(i-2,1);
  //                         let v = 0;
  //                         for (let l = 0; l < arr.length; l++) {
  //                             if (l !== i && l !== j && l !== k) {
  //                                 v += arr[l];
  //                             }
  //                         }
  //                         v %= 10;
  //                         if (v === 0) {
  //                             info.type = '牛牛';
  //                             info.value = 40000 + value_p;
  //                         } else {
  //                             info.type = '牛' + v;
  //                             info.value = 30000 + (v * 1000) + value_p;
  //                         }
  //                         return info;
  //                     }
  //                 }
  //             }
  //         }
  //         info.type = '无牛';
  //         info.value = 20000 + value_p;
  //         return info;
  //     }
  //     return null;
  // }

  getPokerTypeNN(pokerArr) {
    if (pokerArr.length === 5) {
      let info = {
        type: '',
        value: 0,
        win: 0,
        pokerTypeCode: ''
      }
      let isWuGong = true
      let arr = []
      let maxIndex = 0
      let maxP = -1
      for (let i = 0; i < pokerArr.length; i++) {
        let p = this.getLhPoint(pokerArr[i])
        if (p > maxP) {
          maxIndex = i
          maxP = p
        } else if (p === maxP) {
          let codeM = pokerArr[maxIndex].charCodeAt()
          let codeI = pokerArr[i].charCodeAt()
          if (codeM > codeI) {
            maxIndex = i
            maxP = p
          }
        }
        if (p < 11) {
          isWuGong = false
        }
        p = p > 10 ? 10 : p
        arr.push(p)
      }
      let value_p = maxP * 10
      let code = pokerArr[maxIndex].charCodeAt()
      if (code > 109) {
        value_p += 1
      } else if (code > 96) {
        value_p += 2
      } else if (code > 77) {
        value_p += 3
      } else {
        value_p += 4
      }
      if (isWuGong) {
        info.type = '5公'
        info.pokerTypeCode = '12'
        info.value = 50000 + value_p
        return info
      }

      for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
          for (let k = j + 1; k < arr.length; k++) {
            if ((arr[i] + arr[j] + arr[k]) % 10 === 0) {
              // arr.splice(k,1).splice(j-1,1).splice(i-2,1);
              let v = 0
              for (let l = 0; l < arr.length; l++) {
                if (l !== i && l !== j && l !== k) {
                  v += arr[l]
                }
              }
              v %= 10
              if (v === 0) {
                info.type = '牛牛'
                info.pokerTypeCode = '11'
                info.value = 40000 + value_p
              } else {
                info.type = '牛' + v
                info.pokerTypeCode = '0' + (v + 1)
                info.value = 30000 + (v * 1000) + value_p
              }
              return info
            }
          }
        }
      }
      info.type = '无牛'
      info.pokerTypeCode = '01'
      info.value = 20000 + value_p
      return info
    }
    return null
  }
  /**
     * 获取是否对子
     * @param {string} poker 牌
     */
  getIsDuiZi(pokerZ, pokerX) {
    let codeZ = pokerZ.charCodeAt()
    let codeX = pokerX.charCodeAt()
    let valueZ = 0
    let valueX = 0
    if (codeZ < 91) {
      valueZ = ((codeZ - 65) % 13) + 1
    } else {
      valueZ = ((codeZ - 97) % 13) + 1
    }
    if (codeX < 91) {
      valueX = ((codeX - 65) % 13) + 1
    } else {
      valueX = ((codeX - 97) % 13) + 1
    }
    return valueZ === valueX
  }

  /**
     *  完美对子
     * @param {*} type
     * @param {*} pokerZ
     * @param {*} pokerX
     */
  getIsPerfect(pokerZ, pokerX) {
    let codeZ = pokerZ.charCodeAt()
    let codeX = pokerX.charCodeAt()
    if (codeX === codeZ) {
      return 1
    } else {
      if (this.getIsDuiZi(pokerZ, pokerX)) {
        return 2
      } else {
        return 3
      }
    }
  }
  /**
     * 获取结果
     * @param {string} type 游戏类型
     * @param {string} pokerZ 庄牌
     * @param {string} pokerX 闲牌
     */
  getResult(type, pokerZ, pokerX) {
    if (type === 1) {
      if (pokerZ[0] && pokerZ[1] && pokerX[0] && pokerX[1]) {
        let b2Z = (this.getPoint(pokerZ[0]) + this.getPoint(pokerZ[1])) % 10
        let b2X = (this.getPoint(pokerX[0]) + this.getPoint(pokerX[1])) % 10
        let duiZ = this.getIsDuiZi(pokerZ[0], pokerZ[1])
        let duiX = this.getIsDuiZi(pokerX[0], pokerX[1])
        let pointZ = this.getAllPoint(pokerZ)
        let pointX = this.getAllPoint(pokerX)
        let duiValue = 0
        if (duiZ && duiX) {
          duiValue = 3
        } else if (duiZ && !duiX) {
          duiValue = 1
        } else if (!duiZ && duiX) {
          duiValue = 2
        }
        if (!pokerZ[2] && !pokerX[2] && pointZ < 8 && pointX < 8) {
          if (pointX < 6) {
            return 0
          } else {
            if (pointZ < 3) {
              return 0
            }
          }
        } else if (!pokerZ[2] && pokerX[2]) {
          let b3X = this.getPoint(pokerX[2])
          if (b2Z === 3 && b3X !== 8) {
            return 0
          }
          if (b2Z === 4 && b3X !== 0 && b3X !== 1 && b3X !== 8 && b3X !== 9) {
            return 0
          }
          if (b2Z === 5 && b3X !== 0 && b3X !== 1 && b3X !== 2 && b3X !== 3 && b3X !== 8 && b3X !== 9) {
            return 0
          }
          if (b2Z === 6 && (b3X === 6 || b3X === 7)) {
            return 0
          }
          if (b2Z < 3) {
            return 0
          }
        } else if (pokerZ[2] && !pokerX[2] && pointZ < 8 && pointX < 8) {

        }
        if (pointZ > pointX) {
          return 10 + duiValue
        } else if (pointZ < pointX) {
          return 20 + duiValue
        } else if (pointZ === pointX) {
          return 30 + duiValue
        }
      }
    } else if (type === 2) {
      if (pokerZ[0] && pokerX[0]) {
        let pointZ = this.getLhPoint(pokerZ[0])
        let pointX = this.getLhPoint(pokerX[0])
        if (pointZ === pointX) {
          let codeZ = pokerZ[0].charCodeAt()
          let codeX = pokerX[0].charCodeAt()
          if (codeZ === codeX) {
            return 30
          } else if (codeZ > codeX) {
            return 20
          } else {
            return 10
          }
        } else {
          if (pointZ < pointX) {
            return 20
          } else if (pointZ === pointX) {
            return 30
          } else {
            return 10
          }
        }
      }
    }
    return 0
  }

  /**
     * 扩展结果
     */
  // public static getExtraResult(type, pokerZ, pokerX) {
  //     let extra = this.getResult(type, pokerZ, pokerX);
  //     if (type === 1) {
  //         let winCoin = 0; // 点数
  //         let winSize = 0; // 大小
  //         let perfectDuizi = 0; // 完美对子
  //         let willDuizi = 0; // 任意对子
  //         let stake = 0; // 龙宝
  //         let superSix = 0; // 超级6
  //         let duiZ = this.getIsPerfect(pokerZ[0], pokerZ[1]);
  //         let duiX = this.getIsPerfect(pokerX[0], pokerX[1]);
  //         let pointZ = this.getAllPoint(pokerZ);
  //         let pointX = this.getAllPoint(pokerX);
  //         let b2Z = (this.getPoint(pokerZ[0]) + this.getPoint(pokerZ[1])) % 10;
  //         let b2X = (this.getPoint(pokerX[0]) + this.getPoint(pokerX[1])) % 10;
  //         // 获胜点数判断
  //         if (extra >= 30) {
  //             winCoin = '0' + this.getAllPoint(pokerZ) + '';
  //         } else if (extra >= 20 && extra < 30) {
  //             winCoin = '0' + this.getAllPoint(pokerX);
  //         } else {
  //             winCoin = '0' + this.getAllPoint(pokerZ);
  //         }
  //         // 大小判断
  //         if (pokerX[2] || pokerZ[2]) {
  //             winSize = 0;
  //         } else {
  //             winSize = 1;
  //         }
  //         // 任意对子 完美对子
  //         if (duiX === 2 || duiZ === 2) {
  //             willDuizi = 1;
  //         } else if (duiX === 1 || duiZ === 1) {
  //             perfectDuizi = 1;
  //         }
  //         // xian龙宝判断
  //         if (extra < 30 && extra >= 20) {
  //             if (pokerX[2]) {
  //                 if (pointX - pointZ >= 4) {
  //                     stake = 1;
  //                 }
  //             } else {
  //                 if (b2X === 8 || b2X === 9) {
  //                     stake = 1;
  //                 }
  //             }
  //         }
  //         // zhuang龙宝判断
  //         if (extra < 20 && extra >= 10) {
  //             if (pointZ === 6) {
  //                 superSix = 1;
  //             }
  //             if (pokerZ[2]) {
  //                 if (pointZ - pointX >= 4) {
  //                     stake = 1;
  //                 }
  //             } else {
  //                 if (b2Z === 8 || b2Z === 9) {
  //                     stake = 1;
  //                 }
  //             }
  //         }
  //         return winCoin + '' + winSize + '' + willDuizi + '' + perfectDuizi + '' + stake + '' + superSix
  //     } else if (type === 2) {
  //         let winCoin = 0;
  //         let longSingle = 0;
  //         let huSingle = 0;
  //         let longColor = 0;
  //         let huColor = 0;
  //         if (pokerZ[0] && pokerX[0]) {
  //             let pointZ = this.getLhPoint(pokerZ[0]);
  //             let pointX = this.getLhPoint(pokerX[0]);
  //             let codeZ = pokerZ[0].charCodeAt();
  //             let codeX = pokerX[0].charCodeAt();
  //             if (pointZ === pointX) {
  //                 if (codeZ === codeX) {
  //                     winCoin = pointZ;
  //                 } else if (codeZ > codeX) {
  //                     winCoin = pointZ;
  //                 } else {
  //                     winCoin = pointX;
  //                 }
  //             } else {
  //                 if (pointZ < pointX) {
  //                     winCoin = pointX;
  //                 } else if (pointZ === pointX) {
  //                     winCoin = pointZ;
  //                 } else {
  //                     winCoin = pointZ;
  //                 }
  //             }
  //             if (pointZ % 2 === 0) {
  //                 huSingle = 1;
  //             } else {
  //                 huSingle = 0;
  //             }
  //             if (pointX % 2 === 0) {
  //                 longSingle = 1;
  //             } else {
  //                 longSingle = 0;
  //             }
  //             if (codeZ >= 65 && codeZ <= 77 || codeZ >= 97 && codeZ <= 109) {
  //                 huColor = 1;
  //             } else {
  //                 huColor = 0;
  //             }
  //             if (codeX >= 65 && codeX <= 77 || codeX >= 97 && codeX <= 109) {
  //                 longColor = 1;
  //             } else {
  //                 longColor = 0;
  //             }
  //         }
  //         if (winCoin < 10) {
  //             winCoin = '0' + winCoin;
  //         }
  //         return winCoin + '' + longSingle + '' + longColor + '' + huSingle + '' + huColor + '0';
  //     }
  //     return 0;
  // }

  /**
     * 检测庄闲是否需要博牌
     * */
  checkBoPai(pokerZ, pokerX) {
    let res = {
      zhuangBo: false,
      xianBo: false
    }
    let pokerZArr = []
    let pokerXArr = []
    for (let i in pokerZ) {
      let value = pokerZ[i]
      if (value) {
        pokerZArr.push(value)
      }
    }
    for (let i in pokerX) {
      let value = pokerX[i]
      if (value) {
        pokerXArr.push(value)
      }
    }
    // 双方最少各有两张手牌
    if (pokerZArr.length < 2 || pokerXArr.length < 2) {
      return res
    }
    // 大于等于8点即定胜负优先级最高
    let allPokerZPoint = 0
    let allPokerXPoint = 0
    for (let i in pokerZArr) {
      allPokerZPoint += this.getPoint(pokerZArr[i])
    }
    for (let i in pokerXArr) {
      allPokerXPoint += this.getPoint(pokerXArr[i])
    }
    allPokerZPoint = allPokerZPoint % 10
    allPokerXPoint = allPokerXPoint % 10
    if (allPokerZPoint >= 8 || allPokerXPoint >= 8) {
      // 即定胜负 已博牌继续博牌 未博牌不得博牌
      if (pokerZArr.length > 2) {
        res.zhuangBo = true
        let twoPokerPoint = (this.getPoint(pokerZArr[0]) + this.getPoint(pokerZArr[1])) % 10
        if (twoPokerPoint >= 8) {
          res.zhuangBo = false
        }
      }
      if (pokerXArr.length > 2) {
        res.xianBo = true
        let twoPokerPoint = (this.getPoint(pokerXArr[0]) + this.getPoint(pokerXArr[1])) % 10
        if (twoPokerPoint >= 8) {
          res.xianBo = false
        }
      }
      return res
    }
    let point2Z = (this.getPoint(pokerZArr[0]) + this.getPoint(pokerZArr[1])) % 10
    let point2X = (this.getPoint(pokerXArr[0]) + this.getPoint(pokerXArr[1])) % 10
    if (point2Z <= 2) {
      res.zhuangBo = true
    }
    if (point2X < 6) {
      res.xianBo = true
      if (pokerXArr[2]) {
        let xBoPoint = this.getPoint(pokerXArr[2])
        switch (point2Z) {
          case 3:
            if (xBoPoint === 8) {
              if (point2Z > 2) {
                res.zhuangBo = false
              }
            } else {
              res.zhuangBo = true
            }
            break
          case 4:
            let arr4 = [0, 1, 8, 9]
            if (arr4.indexOf(xBoPoint) >= 0) {
              if (point2Z > 2) {
                res.zhuangBo = false
              }
            } else {
              res.zhuangBo = true
            }
            break
          case 5:
            let arr5 = [0, 1, 2, 3, 8, 9]
            if (arr5.indexOf(xBoPoint) >= 0) {
              if (point2Z > 2) {
                res.zhuangBo = false
              }
            } else {
              res.zhuangBo = true
            }
            break
          case 6:
            let arr6 = [6, 7]
            if (arr6.indexOf(xBoPoint) >= 0) {
              res.zhuangBo = true
            } else {
              if (point2Z > 2) {
                res.zhuangBo = false
              }
            }
            break
        }
      } else {
        if (point2Z < 6) {
          res.zhuangBo = true
        }
      }
    } else if (point2X < 8) {
      if (point2Z < 6) {
        res.zhuangBo = true
      }
    }
    return res
  }
}
