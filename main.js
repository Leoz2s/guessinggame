// Variáveis
let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)
let xAttempts = 1

const screen1 = document.querySelector(".first-screen")
const screen2 = document.querySelector(".second-screen")

const inputNumber = document.querySelector("#inputNumber")
const inputPlaceHolder = inputNumber.getAttribute("placeholder")

// Testing variables / DOM dinamic
// inputNumber.value = 99 // The following variables keep the first value only
let inputNumberValue = inputNumber.value // Value always ""
let inputNumberValueNumerical = Number(inputNumber.value) // Value always 0
let inputNumberValueBypass = Number((document.querySelector("#inputNumber")).value) // Value always 0

function NumberValue(inputValue) {
  inputNumberValue = inputNumber.value
  inputNumberValueNumerical = Number(inputNumber.value)
  inputNumberValueBypass = Number((document.querySelector("#inputNumber")).value)
  return Number(inputValue.value)
}

let a = 1
const b = a + 1
a = 10
console.log(b) // b = 2
// Inside event function callback scope it works, on macro scope doesn't, why?

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

// Eventos

// variável.adicionarEventoOuvidor("Evento", Ouvidor) *Ouvidor = O que reage ao evento.
btnTry.addEventListener("click", handleTryClick)
// Em determinado momento, na execução da função acima, vai ocorrer o recebimento do argumento objeto event na função callback -> handleTryClick(event)
// Esse event é um objeto, com todos os dados do evento, neste caso de click. Um desses dados é o .preventDefault()

btnReset.addEventListener('click', handleResetClick)
btnReset.addEventListener('keydown', EnterReset)
/* document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})
*/

// Fazendo por meio de função anônima não é o ideal, mas em uma situação correta é usado callback.

// Funções callback -> Uma função callback é uma função usada de argumento para outra função.
// O parâmetro dessa função pode ter qualquer nome, diferente do que se fosse feita direto no HTML.

function handleTryClick(event) {
  event.preventDefault()
  // O padrão do <button> que está dentro do <form> é de fazer submit(enviar) do formulário. O que ocasiona o recarregamento da página.
  // event.preventDefault() previne que o elemento faça o padrão.

  if (Number(inputNumber.value) < 11 && Number(inputNumber.value) > -1 && inputNumber.value != inputPlaceHolder) {
    
    if(Number(inputNumber.value) == randomNumber) {
      // document.querySelector(".first-scrren").classList.add("hide")
      // document.querySelector(".second-scrren").classList.remove("hide")
    
      // screen1.classList.add("hide")
      // screen2.classList.remove("hide")

      toggleScreen()
      /* document
      .querySelector(".second-screen h2")
      .innerText = `Acertou em ${xAttempts} tentativas!` */
    
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
    
    }

    // Testing variables / DOM dinamic
    // const inputNumberValue = Number(inputNumber.value)
    // const inputNumberValueBypass = Number((document.querySelector("#inputNumber")).value)
    // const inputNumberValue = inputNumber.value
    // console.log(NumberValue(inputNumber)) // Resolve o problema de atualizar os values
    console.log(Number(inputNumber.value)) // The input value is shown
    console.log(inputNumberValue) // The input value is always ""
    console.log(inputNumberValueNumerical) // The input value is always 0
    console.log(inputNumberValueBypass) // The input is always 0
    //
    /* Veridito : A pergunta a ser feita é: Por que a variável que recebe uma estrutura específica ligada a DOM se atualiza enquanto as outras não?
    é uma exclusividade dessa estrutura?  */

    xAttempts++
    
    // console.log(`Tentativas: ${xAttempts}`)

  } 
  else {
      alert("O número deve ser de 0 a 10 !")
    }
  
   inputNumber.value = ""
}

function handleResetClick() {
  // screen1.classList.remove('hide')
  // screen2.classList.add('hide')
  toggleScreen()

  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)

  window.location.reload(true)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function EnterReset(e) {
  console.log(e.key)
  if (e.key === "Enter") {
    handleResetClick
  }
}
// Testar tecla Space, aparentemente aciona o evento "Keydown" mas retorna valor "", e ao mesmo tempo aciona o evento "Click".

// Em tecnologias mais avançadas como React e Vue, eles criam uma DOM virtual e não devemos usar a DOM como fizemos neste exemplo.
// Na verdade nos operamos na DOM virtual e a tecnologia que intereja com a DOM do navegador.

// Quando organizamos e mudamos o código sem alterar as suas funcionalidades, é feita uma refatoração. Melhorando a qualidade do código.