// 数字工具
export class NumberTools {
  chnNumChar = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  chnUnitSection = ['', '万', '亿', '万亿', '亿亿'];
  chnUnitChar = ['', '拾', '佰', '仟'];

  numToChn(num) {
    let index = num.toString().indexOf('.')
    if (index !== -1) {
      let str = num.toString().slice(index)
      let a = '点'
      for (let i = 1; i < str.length; i++) {
        a += this.chnNumChar[parseInt(str[i], 0)]
      }
      return a
    } else {
      return ''
    }
  }

  // 定义在每个小节的内部进行转化的方法，其他部分则与小节内部转化方法相同
  sectionToChinese(section) {
    let str = ''; let chnstr = ''; let zero = false; let count = 0 // zero为是否进行补零， 第一次进行取余由于为个位数，默认不补零
    while (section > 0) {
      let v = section % 10 // 对数字取余10，得到的数即为个位数
      if (v === 0) { // 如果数字为零，则对字符串进行补零
        if (zero) {
          zero = false // 如果遇到连续多次取余都是0，那么只需补一个零即可
          chnstr = this.chnNumChar[v] + chnstr
        }
      } else {
        zero = true // 第一次取余之后，如果再次取余为零，则需要补零
        str = this.chnNumChar[v]
        str += this.chnUnitChar[count]
        chnstr = str + chnstr
      }
      count++
      section = Math.floor(section / 10)
    }
    return chnstr
  }

  // 定义整个数字全部转换的方法，需要依次对数字进行10000为单位的取余，然后分成小节，按小节计算，当每个小节的数不足1000时，则需要进行补零
  TransformToChinese(num) {
    let a = this.numToChn(num)
    num = Math.floor(num)
    let unitPos = 0
    let strIns = ''; let chnStr = ''
    let needZero = false

    if (num === 0) {
      return this.chnNumChar[0]
    }
    while (num > 0) {
      let section = num % 10000
      if (needZero) {
        chnStr = this.chnNumChar[0] + chnStr
      }
      strIns = this.sectionToChinese(section)
      strIns += (section !== 0) ? this.chnUnitSection[unitPos] : this.chnUnitSection[0]
      chnStr = strIns + chnStr
      needZero = (section < 1000) && (section > 0)
      num = Math.floor(num / 10000)
      unitPos++
    }

    return chnStr + a
  }

  floorDecimal(num) {
    if (num < 0) {
      return Math.ceil(num * 1000) / 1000
    } else {
      return Math.floor(num * 1000) / 1000
    }
  }

  floorInt(num) {
    return parseInt(num, 0)
  }
}
