const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')
const displayTotal = document.querySelector('#total')

console.log(display.innerHTML) // prints the text inside the tags
console.log(billInput.value) // prints the value entered into the input

// billInput.value = '0'
// tipInput.value = '0'
// peopleInput.value = '0'

function calculateTip() {
    const billValue = parseFloat(billInput.value)
    const tipValue = parseInt(tipInput.value)
    const peopleValue = parseInt(peopleInput.value)
    const tipAmount = billValue * tipValue / 100
    const totalValue = (billValue + parseInt(tipAmount)) / peopleValue

    display.innerHTML = tipAmount
    displayTotal.innerHTML = totalValue


}

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)
