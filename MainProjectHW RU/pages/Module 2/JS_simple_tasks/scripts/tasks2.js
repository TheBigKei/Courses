//Task 1
var myName = 'Alexander'

var outputElement = document.getElementById("myName");

outputElement.innerHTML = "Name: " + myName;

//Task 2
var x = 20;
var y = 80;
var sum = x + y;

var outputElement = document.getElementById("math_output");

outputElement.innerHTML = "x = " + x + "; y = " + y + ";<br><br>";
outputElement.innerHTML += "Sum: " + sum;

//Task 3
var isAdult = true;

var outputElement = document.getElementById("isAdult");

outputElement.innerHTML = "Is adult: " + isAdult;

//Task 4
var text = 'Czech'
var textLength = text.length;

var outputElement = document.getElementById("textLength");

outputElement.innerHTML = "Text: " + text + "<br><br>";
outputElement.innerHTML += "Length: " + textLength;

//Task  5
var pi = 3.14;

var outputElement = document.getElementById("pi");

outputElement.innerHTML = "π = " + pi;

//Task 6
var isAdmin = true

var outputElement = document.getElementById("isAdmin");

outputElement.innerHTML = "User is admin: " + isAdmin;

//Task 7
var width = 4;
var height = 10;
var area = width * height;

var outputElement = document.getElementById("rectangle");

outputElement.innerHTML = "width = " + width + "; height = " + height + ";<br><br>";
outputElement.innerHTML += "Area: " + area;

//Task 8
var currentDate = new Date();
var today = currentDate.toLocaleDateString();

var outputElement = document.getElementById("currentDate");

outputElement.innerHTML = "Today is: " + today;

//Task 9
var isPositive = false;

var outputElement = document.getElementById("isPositive");

outputElement.innerHTML = "Tempeture is positive: " + isPositive;

//Task 10

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // предотвращаем отправку формы

    // Получаем значения из полей ввода
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);

    var sum1 = a + b;
    var quot = a / b;
    var prod = a * b;
    var diff = Math.abs(a - b);

    var outputElement = document.getElementById("form_output");

    outputElement.innerHTML = "<br>Sum: " + sum1 + "<br>";
    outputElement.innerHTML += "Difference: " + diff + "<br>";
    outputElement.innerHTML += "Product: " + prod + "<br>";
    outputElement.innerHTML += "Quotient: " + quot;
});

