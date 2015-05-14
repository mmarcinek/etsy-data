//question 1:

//creates a new array of only the prices:
var allPrices = items.map(function(item) {
  return item.price;
});

//passes the array through a function to get the summ of all prices:
var sum = allPrices.reduce(function(a,b){
  return a + b;
});

//takes sum and divides by the lenght of the array for averag
var avg = sum/allPrices.length;

//takes average and rounds to the nearest decimal of parameter:
var answer = avg.toFixed(2)

//Drop answer in DOM node:
document.querySelector('#answer1').textContent = "The average price is $" + answer;
