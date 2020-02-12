export class AdminModel {
  checkAll = false; // 全选数据
  basicInfo = {
    account: '',
    passWord: '',
    name: '',
    state: 0
  };
  controlerStatus = {
    name: '停用'
  };
  powerMap = {
    onLineMember: {
      name: '在线会员（查看在线会员列表及会员当前游戏信息）',
      checked: false,
      powerId: 1
    },
    agentMember: {
      name: '代理会员（维护管理代理及会员相关信息，查看会员当天押码明细）',
      checked: false,
      powerId: 2
    },
    daysQuery: {
      name: '数据查询(按时间段查询代理及会员相关数据统计)',
      checked: false,
      powerId: 3
    },
    resultQuery: {
      name: '结果查询(按日查询各桌台开牌结果)',
      checked: false,
      powerId: 4
    },
    tableStatics: {
      name: '桌台统计(统计各桌台押码输赢数据)',
      checked: false,
      powerId: 5
    },
    JournalQuery: {
      name: '日志查询(查询洗补点情况、各功能模块操作情况及用户登录情况)',
      checked: false,
      powerId: 6
    },
    saveData: {
      name: '数据归档(备份当前服务器文件)',
      checked: false,
      powerId: 7
    },
    messageControl: {
      name: '公告管理(维护管理全体公告及单体公告信息)',
      checked: false,
      powerId: 8
    },
    // agentMessage: {
    //     name: '代理公告(维护管理代理公共公告及各代理和会员资讯信息)',
    //     checked: false,
    //     powerId: 9,
    // },
    changeResult: {
      name: '修改结果(修改或作废已录入的游戏结果)',
      checked: false,
      powerId: 9
    },
    tableSet: {
      name: '桌台设置(维护管理桌台相关信息)',
      checked: false,
      powerId: 10
    },
    oddsSet: {
      name: '赔率设置(设置游戏相关赔率)',
      checked: false,
      powerId: 11
    },
    systemAdminControl: {
      name: '系统管理员管理(维护管理系统管理员信息)',
      checked: false,
      powerId: 12
    },
    monitorAdminControl: {
      name: '监台管理员管理(维护管理监台（游戏结果录入）人员信息)',
      checked: false,
      powerId: 13
    },
    ipBlackListSet: {
      name: 'IP黑名单设置(设置IP黑名单列表)',
      checked: false,
      powerId: 14
    },
    limitSet: {
      name: '限红设置(设置桌台限红方案)',
      checked: false,
      powerId: 15
    },
    Monitor: {
      name: '监控台(监控桌台数据)',
      checked: false,
      powerId: 16
    },
    phoneUserControl: {
      name: '电投会员管理(增删电投会员)',
      checked: false,
      powerId: 17
    },
    phoneUserList: {
      name: '电投在线会员(管理电投会员)',
      checked: false,
      powerId: 18
    },
    deleteLog: {
      name: '删除日志(删除指定日志)',
      checked: false,
      powerId: 19
    },
    calculateAllCoin: {
      name: '批量结洗码(对所有用户结洗码)',
      checked: false,
      powerId: 20
    },
    queryWithdrawals: {
      name: '充值查询(查询第三方交互订单)',
      checked: false,
      powerId: 21
    },
    withdrawalsCheck: {
      name: '提现审核(审核提现申请)',
      checked: false,
      powerId: 22
    },
    rechargeConfig: {
      name: '支付管理(支付渠道配置)',
      checked: false,
      powerId: 23
    },
    forbiddenConfig: {
      name: '支付管理(支付渠道配置)',
      checked: false,
      powerId: 24
    },
    authorizeConfig: {
      name: '授权管理(桌台授权管理)',
      checked: false,
      powerId: 25
    },

    sysTemConfig: {
      name: '系统管理(系统管理)',
      checked: false,
      powerId: 26
    },
    rechargeCheck: {
      name: '充值审核(审核充值申请)',
      checked: false,
      powerId: 27
    },
    agentDete: {
      name: '代理检测(代理检测工具)',
      checked: false,
      powerId: 28
    },
    transferControl: {
      name: '汇款员管理(维护管理汇款人员信息)',
      checked: false,
      powerId: 29
    },
    agentMemberSuper: {
      name: '代理会员管理(高级)',
      checked: false,
      powerId: 30
    },
    daysQuerySuper: {
      name: '数据查询(高级)',
      checked: false,
      powerId: 31
    },
    phoneQuery: {
      name: '电话号码(是否展示电话号码)',
      checked: false,
      powerId: 32
    },
    exportExcel: {
      name: '导出(是否可导出数据)',
      checked: false,
      powerId: 33
    }
  };

  setData(data) {
    this.setBasicInfo(data)
    this.setControlerStatus(data)
    this.setPowerInfo(data.permission)
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

  setPowerInfo(data) {
    for (let i in data) {
      for (let j in this.powerMap) {
        if (this.powerMap[j].powerId === data[i]) {
          this.powerMap[j].checked = true
          break
        }
      }
    }
  }

  clearData() {
    this.clearBasicInfo()
    this.clearControlerStatus()
    this.clearPowerInfo()
    this.checkAll = false
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
    this.controlerStatus.name = '停用'
  }

  clearPowerInfo() {
    for (let i in this.powerMap) {
      this.powerMap[i].checked = false
    }
  }
  getPermission() {
    let permission = []
    for (let j in this.powerMap) {
      if (this.powerMap[j].checked) {
        permission.push(this.powerMap[j].powerId)
      }
    }
    return permission
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
