// Chiedere età e distanza in km da percorrere
var age = prompt('Quanti anni hai?');
console.log('Hai ' + age + ' anni');

var km = prompt('Quanti chilometri hai bisogno di percorrere?')
console.log('Vuoi percorrere ' +  km + ' km');

// Stabilisci il prezzo base
var price = (0.21 * km);
console.log('Il prezzo base del biglietto è ' + price + '€');

// Stabilisci il prezzo tenendo in considerazione lo sconto
var definitivePrice;

if (age >= 65) {
  definitivePrice = (price - (price * 0.40));
  document.getElementById('discount-applied').innerHTML = '(sconto anziani -40%)';
} else if (age <= 17) {
  definitivePrice = (price - (price * 0.20));
  document.getElementById('discount-applied').innerHTML = '(sconto minorenni -20%)';
} else {
  definitivePrice = price;
}

document.getElementById('ticket-cost').innerHTML = definitivePrice.toFixed(2) + '€ ';
console.log('Il prezzo che dovrai pagare è ' + definitivePrice.toFixed(2) + '€ ');
