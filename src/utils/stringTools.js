// 字符串检测工具
export class StringTools {
  // 检测是否包含特殊字符
  checkSymbol(str) {
    let patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im
    if (!patrn.test(str)) {
      return true
    } else {
      // 如果包含特殊字符返回false
      return false
    }
  }

  // 检测长度是否合法
  checkLength(str, minLength, maxLength) {
    if (str.length < minLength || str.length > maxLength) {
      return false
    } else {
      return true
    }
  }

  // 是否由数字和字母组成
  checkStrAndNum(str) {
    let result = str.match(/^[a-zA-Z0-9]+$/)
    if (result === null) return false
    return true
  }

  // 检测ip是否合法
  checkIp(str) {
    let patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im
    if (!patrn.test(str)) { // 如果包含特殊字符 不合法
      return false
    }
    let patrnChinese = /^[\u2E80-\u9FFF]+$/
    if (!patrnChinese.test(str)) { // 如果包含汉字 不合法
      return false
    }
    let patrnEnglish = /^[a-zA-Z]$/i
    if (!patrnChinese.test(str)) { // 如果包含字母 不合法
      return false
    }
    return true
  }
}
