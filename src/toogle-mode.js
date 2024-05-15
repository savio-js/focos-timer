/* Adicionando acessibilidade aos botões */


let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light')

  const mode = darkMode ? 'dark' : 'light' 

  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

  /* Forma de como trocar o valor de uma variavel boleana */
  darkMode =!darkMode
})