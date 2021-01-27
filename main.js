

// selecting plus minus button and quantity for iphone
const phonePlusBtn = document.getElementById('phonePlusAdd');
const phoneMinusBtn = document.getElementById('phoneMinusAdd');

let currentPhoneQuantity = document.getElementById('phoneQuantity').value;
let currentPhoneQuantityNumber = parseFloat(currentPhoneQuantity);

let currentPhonePrice = document.getElementById('phonePrice').innerText;
let currentPhonePriceNumber = parseFloat(currentPhonePrice);


// plus minus button event handler for iphone
phonePlusBtn.addEventListener('click', function () {
    


    currentPhoneQuantityNumber = currentPhoneQuantityNumber + 1;
    document.getElementById('phoneQuantity').value = currentPhoneQuantityNumber;


    currentPhonePriceNumber = currentPhonePriceNumber + 1219;
    document.getElementById('phonePrice').innerText = currentPhonePriceNumber;

    
});






phoneMinusBtn.addEventListener('click', function () {

    currentPhoneQuantityNumber = currentPhoneQuantityNumber - 1;
    document.getElementById('phoneQuantity').value = currentPhoneQuantityNumber;

    currentPhonePriceNumber = currentPhonePriceNumber - 1219;
    document.getElementById('phonePrice').innerText = currentPhonePriceNumber;

});


// selecting plus minus button and quantity for iphone case
const casePlusBtn = document.getElementById('casePlusAdd');
const caseMinusBtn = document.getElementById('caseMinusAdd');

let currentCaseQuantity = document.getElementById('caseQuantity').value;
let currentCaseQuantityNumber = parseFloat(currentCaseQuantity);

let currentCasePrice = document.getElementById('casePrice').innerText;
let currentCasePriceNumber = parseFloat(currentCasePrice);


// plus minus button event handler for case
casePlusBtn.addEventListener('click', function () {

    currentCaseQuantityNumber = currentCaseQuantityNumber + 1;
    document.getElementById('caseQuantity').value = currentCaseQuantityNumber;

    currentCasePriceNumber = currentCasePriceNumber + 59;
    document.getElementById('casePrice').innerText = currentCasePriceNumber;


});

caseMinusBtn.addEventListener('click', function () {

    currentCaseQuantityNumber = currentCaseQuantityNumber - 1;
    document.getElementById('caseQuantity').value = currentCaseQuantityNumber;

    currentCasePriceNumber = currentCasePriceNumber - 59;
    document.getElementById('casePrice').innerText = currentCasePriceNumber;

});



// checkOut button event handler

const check = document.getElementById('checkOut');
let subtotal = document.getElementById('subtotal').innerText;
let subtotalAmount = parseFloat(subtotal.replace(/,/g, ''));

let total = document.getElementById('total').innerText;
let totalAmount = parseFloat(total.replace(/,/g, ''));

let tax = document.getElementById('tax').innerText;
let taxNumber = parseFloat(tax);

let taxAmount;

check.addEventListener('click', function () {
    subtotalAmount = currentCasePriceNumber + currentPhonePriceNumber;
    document.getElementById('subtotal').innerText = subtotalAmount;

    taxAmount = (subtotalAmount * 5) / 100;
    taxAmount = taxAmount + taxNumber;
    document.getElementById('tax').innerText = taxAmount;

    totalAmount = subtotalAmount + taxAmount;
    document.getElementById('total').innerText = totalAmount;

})





// onchange event handler added

document.getElementById('phoneQuantity').addEventListener('change', function () {
    let changePhoneQuantity = document.getElementById('phoneQuantity').value;
    currentPhonePriceNumber = changePhoneQuantity * 1219;
    document.getElementById('phonePrice').innerText = currentPhonePriceNumber;
})

document.getElementById('caseQuantity').addEventListener('change', function () {
    let changeCaseQuantity = document.getElementById('caseQuantity').value;
    currentCasePriceNumber = changeCaseQuantity * 59;
    document.getElementById('casePrice').innerText = currentCasePriceNumber;
})