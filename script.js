// Otendo os elementos do formulário.
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');

// anipulando o input amount para receber apenas números.
amount.addEventListener("input", () => {

  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Capturando o evento de submit do formulário.
form.onsubmit = (e) => {
  e.preventDefault();
}
