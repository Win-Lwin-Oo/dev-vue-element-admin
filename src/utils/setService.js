const userService = require('./service/userService').default
const withdrawService = require('./service/withdrawService').default
const audioService = require('./service/audioService').default
export function setService(Vue) {
  Vue.prototype.userService = userService
  Vue.prototype.withdrawService = withdrawService
  Vue.prototype.audioService = audioService
}
