/*
*  有规律 密码随机方式
* */
export class PassWordTool {
  getPassWord(length) {
    if (!length) {
      length = 6
    }
    let pwd = ''
    let num1 = this.getRandomNumber()
    let num2 = this.getRandomNumber()
    let tryNum = 1
    while (num1 === num2) {
      tryNum++
      num2 = this.getRandomNumber()
      if (tryNum >= 50) {
        break
      }
    }
    let rate = Math.random() * 10
    if (rate < 7) {
      // 两位 密码
      let index = Math.round(Math.random() * 100) % 4 + 1
      for (let i = 0; i < length; i++) {
        if (i < index) {
          pwd += num1
        } else {
          pwd += num2
        }
      }
    } else {
      // 三位 密码
      let num3 = this.getRandomNumber()
      for (let i = 0; i < length; i++) {
        if (i < 2) {
          pwd += num1
        } else if (i < 4) {
          pwd += num2
        } else {
          pwd += num3
        }
      }
    }
    return pwd
  }

  // 获取随机数
  getRandomNumber() {
    return Math.round(Math.random() * 100) % 10
  }
}
