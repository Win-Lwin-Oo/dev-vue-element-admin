export class ControlerModel {
  basicInfo = {
    account: '',
    passWord: '',
    name: '',
    state: 0
  };
  controlerStatus = {
    name: '停用'
  }; // 0 1 正常 停用

  setData(data) {
    this.setBasicInfo(data)
    this.setControlerStatus(data)
  }

  setBasicInfo(data) {
    this.basicInfo.account = data.account
    this.basicInfo.passWord = data.password
    this.basicInfo.name = data.name
    this.basicInfo.state = data.state
  }

  setControlerStatus(data) {
    this.controlerStatus.name = data.state === 1 ? '正常' : '停用'
  }

  clearData() {
    this.clearBasicInfo()
    this.clearControlerStatus()
  }

  clearBasicInfo() {
    for (let i in this.basicInfo) {
      if (typeof (this.basicInfo[i]) === 'number') {
        this.basicInfo[i] = 0
      } else {
        this.basicInfo[i] = ''
      }
    }
  }

  clearControlerStatus() {
    // this.controlerStatus.value = 'off';
    this.controlerStatus.name = '停用'
  }

  checkSelf() {
    let res = {
      result: 0,
      errStr: ''
    }
    if (!this.basicInfo.passWord) {
      res.result = 1
      res.errStr = '请输入密码'
    }
    if (!this.basicInfo.account) {
      res.result = 1
      res.errStr = '请输入账号'
    }
    if (!this.basicInfo.name) {
      res.result = 1
      res.errStr = '请输入名称'
    }

    return res
  }
}
