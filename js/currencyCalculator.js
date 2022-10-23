var rates = [ 0.36, 2.76, 0.37, 2.72, 1.01, 0.99 ];
var GELUSD = rates[0];
var USDGEL = rates[1];
var GELEUR = rates[2];
var EURGEL = rates[3];
var USDEUR = rates[4];
var EURUSD = rates[5];
var btn = document.querySelector('.calculate-btn');
var baseCurrencyInput = document.getElementById('currency-1');
var secondCurrencyInput = document.getElementById('currency-2');
var amountInput = document.getElementById('amount');
var toShowAmount = document.querySelector('.given-amount');
var toShowBase = document.querySelector('.base-currency');
var toShowSecond = document.querySelector('.second-currency');
var toShowResult = document.querySelector('.final-result');

function convertCurrency(event) {
  event.preventDefault();
  var amount = amountInput.value;
  var from = baseCurrencyInput.value;
  var to = secondCurrencyInput.value;
  var result = 0;
  
  if(from === 'GEL' && to === 'USD') {
    result = amount * GELUSD;
  } else if (from === 'USD' && to === 'GEL') {
    result = amount * USDGEL;
  } else if (from === 'GEL' && to === 'EUR') {
    result = amount * GELEUR;
  } else if (from === 'EUR' && to === 'GEL') {
    result = amount * EURGEL;
  } else if (from === 'USD' && to === 'EUR') {
    result = amount * USDEUR;
  } else if (from === 'EUR' && to === 'USD') {
    result = amount * EURUSD;
  }
  
  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + ' = ';
  toShowSecond.textContent = to;
  toShowResult.textContent = result; 
}

btn.addEventListener('click', convertCurrency);

