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

// Output to DOM:

var answer2 = document.querySelector('#answer2');
answer2.innerText = "";

question2.forEach(function(listings) {
  answer2.appendChild(document.createTextNode(listings + '\n\n'));
});


// question 3:

var question3 = [];

var pounds = items.filter (function(item){
  if(item.currency_code === "GBP") {
    question3.push(item.title + " costs £" + item.price);
  }
});

// console.log(question3);

// Output to DOM:

document.querySelector('#answer3').textContent = question3 ;


// question 4:

var ofWood = [];

items.filter(function(item) {
  item.materials.forEach (function(item2) {
    if (item2 === "wood") {
    ofWood.push(item.title)
    }
  });
});

// console.log(ofWood);

// Output to DOM:

var answer4 = document.querySelector('#answer4');
answer4.innerText = "";

ofWood.forEach(function(listings) {
  answer4.appendChild(document.createTextNode(listings + '\n\n'))
});

// question 5:
// items.filter(function(items){
var moreMaterial = [];

items.filter(function(items){
  if(items.materials.length >= 8) {
    moreMaterial.push(items);
  }
});

console.log(moreMaterial);

// Output to DOM:

var answer5 = document.querySelector('#answer5');
answer5.innerText = "";

moreMaterial.forEach(function(items){
  answer5.appendChild(document.createTextNode(items.title + " has " + items.materials.length + " materials:" + '\n\n' + items.materials.join('\n') + '\n\n'))
});


// question 6:

var iMade = [];

var bySeller = items.filter (function(item){
  if(item.who_made === "i_did"){
    iMade.push(item.title)
  }
});

// Output to DOM:
document.querySelector('#answer6').textContent = iMade.length + " were made by their sellers";










