const amount = document.getElementById('amount');

// anipulando o input amount para receber apenas números.
amount.addEventListener("input", () => {

  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")
})