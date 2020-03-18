// Variable
let result = document.querySelector(".res"),
    btnClr = document.querySelector(".btnClr"),
    btnEql = document.querySelector(".btnEql"),
    btnNum = document.querySelectorAll('.btnNum'),
    btnOper = document.querySelectorAll('.btnOper'),
    value = '',
    pendingValue = "",
    outPut,
    firstValue,
    secondValue,
    operator = '';

// Clear result
btnClr.addEventListener('click', _ => {
    clear()
    updateDisplay()
})

// Add event for Number
for (let i = 0; i < btnNum.length; i++) {
    btnNum[i].addEventListener('click', _ => {
        if(!operator) value += btnNum[i].textContent
        else pendingValue += btnNum[i].textContent
        updateDisplay();
    })
}

// Add event for Operator
for (let i = 0; i < btnOper.length; i++) {
    btnOper[i].addEventListener('click', _ => {
        if (!operator) {
            operator += btnOper[i].textContent
            updateDisplay()
        }
    })
}

// Show in resultScreen
function updateDisplay() {
    outPut = value + operator + pendingValue
    result.innerHTML = outPut;
}

// Calc
btnEql.addEventListener('click', _ => {
    // Convert
    firstValue = parseInt(value, 2).toString();
    secondValue = parseInt(pendingValue, 2).toString();

    outPut = eval(firstValue + operator + secondValue)
    result.innerHTML = outPut.toString(2);;
    clear()
})


// Clear all process
function clear() {
    value = ''
    pendingValue = ''
    firstValue = '';
    secondValue = '';
    operator = '';
}