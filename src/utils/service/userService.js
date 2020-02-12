export class UserService {
  constructor() {
  }

  basicInfo = {
    account: '',
    name: '',
    id: 0,
    permission: [],
    watchUsers: []
  };
  gameList = [];
  // 百家乐赔率
  baijiaOdds = null;

  // 被盯者的桌台数据
  watchersInfo = {};

  setData(data) {
    let basicInfo = {
      account: '',
      name: '',
      id: 0,
      permission: [],
      watchUsers: []
    }
    let gameList = []
    let baiJiaOdds = []
    basicInfo.account = data.account
    basicInfo.name = data.name
    basicInfo.id = data.id
    basicInfo.permission = data.permission.slice(0)
    basicInfo.watchUsers = data.watchUsers.slice(0)
    gameList = data.gameList
    if (data.oddsInfo) {
      for (let info of data.oddsInfo) {
        if (info.type === 1) {
          baiJiaOdds = info
          break
        }
      }
    }
    store.dispatch('user/setCurUserInfo', basicInfo)
    store.dispatch('user/setGameList', gameList)
    store.dispatch('user/setOddsInfo', baiJiaOdds)
  }

  clear() {
    this.basicInfo.account = ''
    this.basicInfo.name = ''
    this.basicInfo.id = 0
    this.basicInfo.permission = []
    this.gameList = []
  }
}
