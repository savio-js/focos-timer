import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"
import { kitchenTimer } from "./sounds.js"


export function countDown() {

  /* Esta limpando o count para resetar o time e nao acumular  quando der play */
  clearTimeout(state.countDownID)

  console.log("Iniciou countDown")

  if (!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if (seconds < 0) {
    minutes--
    seconds = 59
  }

  if (minutes < 0) {
    reset()
    kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)

  /* utilizaremos a função setTimeout(executa uma function depois de determinado tempo) para chamar recursivamente a função countdown após 1 segundo (1000 milissegundos). Dessa forma, a contagem regressiva será executada a cada segundo. */

  /* é feito uma recursao, quando uma funcao chama ela mesma depois de 1s */
  /* callback function */
  state.countDownID = setTimeout(() => countDown(), 1000)

}


export function updateDisplay(minutes, seconds) {
  /* Verifica se passou o valor ou nao do minutos e segundos, caso nao passou pega do estado  */
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  /* Atualiza os valores no display */
  /* Os valores de minutos e segundos são padronizados para dois dígitos, preenchendo com zero à esquerda, usando o método padStart. */
  el.minutes.textContent = String(minutes).padStart(2, '0')
  el.seconds.textContent = String(seconds).padStart(2, '0')
}