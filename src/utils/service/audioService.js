export class AudioPlayService {
  constructor() { }

  autoPlay(id) {
    const audioPlay = document.getElementById(id)
    audioPlay.play()
  }

  autoPlayAll(rest) {
    for (let i = 0; i < rest.length; i++) {
      const audioPlayAll = document.getElementById(rest[i])
      audioPlayAll.play()
    }
  }

  closePlay(id) {
    const myAuto = document.getElementById(id)
    myAuto.pause()
    myAuto.load()
  }
}
