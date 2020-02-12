// 设置proto
import * as protoData from '../proto/proto.js'
const proto = protoData.nested
import axios from 'axios'
import store from '@/store'
import Vue from 'vue'
import router from '@/router'

export async function send(url, params) {
  let isWaiting = sessionStorage.getItem('isWaiting')
  if (isWaiting) {
    return
  }
  try {
    setWaiting()
    const theUrl = process.env.VUE_APP_SERVER + url
    let response = await axios.post(theUrl, Array.from(generateMessage(params)))
    setTimeout(() => {
      clearWaiting()
    }, 500)
    const resData = handleMessage(response.data)
    return resData
  } catch (e) {
    clearWaiting()
  }
}

export async function sendForGet(url, params) {
  const theUrl = process.env.VUE_APP_SERVER + url
  let response = await axios.post(theUrl, Array.from(generateMessage(params)))
  const resData = handleMessage(response.data)
  return resData
}

function generateMessage(reqData) {
  const msg = {
    body: reqData
  }

  const session = store.getters.session
  // const session = sessionStorage.getItem('sessionOfNinthArt');
  if (session) {
    msg.head = {
      session: session
    }
  }
  const message = proto.message
  return message.RequestMessage.encode(msg).finish()
}

function handleMessage(data) {
  const message = proto.message
  const mesageData = message.ReplayMessage.decode(data)
  const head = mesageData.head
  const session = head.session
  if (session) {
    // sessionStorage.setItem('sessionOfNinthArt', session);
    store.dispatch('session/setSession', session)
  }

  const result = head.result
  switch (result) {
    case message.ReplayCode.InvalidSession:

      store.dispatch('user/logout')
      router.push(`/login`)
      Vue.$message('login else where')

      return null
    case message.ReplayCode.ExpiredSession:
      clearSession()
      Vue.$message('登录超时')
      setTimeout(() => {
        logout()
      }, 1000)
      return null
    case message.ReplayCode.ErrorRequest:
      setTimeout(() => {
        logout()
      }, 1000)
      return null
    case message.ReplayCode.Success:
    default:
      break
  }
  const bodyData = mesageData.body
  return bodyData
}

async function logout() {
  store.dispatch('user/logout')
  router.push(`/login`)
}

function clearSession() {
  // sessionStorage.removeItem('sessionOfNinthArt');
  store.dispatch('session/setSession', null)
  router.push('/login')
}

function setWaiting() {
  // sessionStorage.setItem('isWaiting', 'true');
  store.dispatch('session/setWaiting', true)
}

function clearWaiting() {
  // sessionStorage.removeItem('isWaiting');
  store.dispatch('session/setWaiting', false)
}
