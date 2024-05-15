import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  console.log('toggle running')
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countDown()

  sounds.buttonPressAudio.play()
}

export function set() {
  console.log('set')
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()

}

export function reset() {
  console.log('reset')
  document.documentElement.classList.remove('running')
  /* Volta para o estado inicial */
  timer.updateDisplay()
  sounds.buttonPressAudio.play()

}

export function toggleMusic() {
  console.log('start')
  state.isMute = document.documentElement.classList.toggle('music-on')

  if (state.isMute) {
    sounds.bgAudio.play()
    return
  }

  sounds.bgAudio.pause()
}