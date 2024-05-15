import state from "./state.js";
import * as events from "./events.js";
import * as timer from "./timer.js";


export function start(minutes, seconds){

  state.minutes = minutes;
  state.seconds = seconds;

  /* Nao foi passado nenhum argumento na function updateDisplay, pq já está sendo atualizada diretamente do main */
  timer.updateDisplay();

  events.registerControls()
  events.setMinutes()

}