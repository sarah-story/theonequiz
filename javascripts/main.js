var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

//Vanilla JavaScript Output
document.getElementById("vanilla_output").innerHTML = "This content generated with Vanilla JavaScript";

//jQuery Output
$("#jquery_output").html("This content generated with jQuery");

//Functions and operators
function modulus(a,b) {
  return a%b;
}

function doMath(a,b,f) {
  return f(a,b);
}

function add(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

doMath(1,2,add);
doMath(2,1,subtract);

//Arrays

function sortedPlanets(array) {
  return array.sort();
}

function reversedPlanets(array) {
  var reverseArray = [];
  for (var i=0; i<array.length; i++) {
    reverseArray.push(array[i].split("").reverse().join(""));
  }
  return reverseArray;
}

function longPlanets(array) {
  var longArray = [];
  for (var i=0; i<array.length; i++) {
    if (array[i].length >=7) {
      longArray.push(array[i]);
    }
  }
  return longArray;
}


//XHR

function getAnimals() {
  $.ajax({
    method: 'GET',
    url: 'data/animals.json'
  }).done(function(data) {
    console.log("animals", data.animals);
  });
}