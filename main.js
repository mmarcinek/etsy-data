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

//question 2:

var question2 = [];

var sort = items.filter (function(item){
  if(item.price > 14 && item.price < 18){
    question2.push(item.title);
  }
});

// console.log(question2);

document.querySelector('#answer2').textContent = question2;

// question 3:

var question3 = [];

var pounds = items.filter (function(item){
  if(item.currency_code === "GBP") {
    question3.push(item.title, item.price);
  }
});

// console.log(question3);

// document.querySelector('#answer3').textContent = question3;

// var answer3 = document.querySelector('#answer3');
// answer3.innerText = '';
// items.forEach( function (item) {
//   answer3.appendChild(document.createTextNode(item.title + " costs £" + item.price));
// });
