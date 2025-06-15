// Obtendo a cotação da moeda (neste dia) 
const USD = 5.54
const EUR = 6.40
const GBP = 7.52

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

// Função para converter a moeda.
const convertCurrency = () => {
  switch (currency.value) {
    case 'USD':
      convertCurrency(amount.value, USD, 'US$')
      break;
    case 'EUR':
      convertCurrency(amount.value, EUR, '€')
      break;
    case 'GBP':
      convertCurrency(amount.value, GBP, '£')
      break;
  }
}