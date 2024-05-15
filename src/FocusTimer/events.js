import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
  controls.addEventListener('click', event => {
    console.log(event.target.dataset.action);
    const action = event.target.dataset.action
    /* Só permite as acoes dos cliques nos botoes  */
    if (typeof actions[action] != 'function') {
      return
    }

    actions[action]()
    console.log(actions[action])
  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })

  /* expressao regular: permite observar determinado conjunto de caracteres */
  /* aceita apenas numeros */
  el.minutes.onkeypress = event => /\d/.test(event.key)

  /* quando estiver fora do foco \ "blur" */
  el.minutes.addEventListener('blur', () => {
    /* pegando o texto dos minutos */
    let time = event.currentTarget.textContent

    /* verificando se o valor é maior que 60 */
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')

  })
}