    //Task 1
    var a = 10;
    var b = 2;

    var sum = a + b;
    var quot = a / b;
    var prod = a * b;
    var diff = Math.abs(a - b);

    var outputElement = document.getElementById("math_output");
    
    outputElement.innerHTML = "a = " + a + "; b = " + b + ";<br><br>";
    outputElement.innerHTML += "Sum: " + sum + "<br>";
    outputElement.innerHTML += "Difference: " + diff + "<br>";
    outputElement.innerHTML += "Product: " + prod + "<br>";
    outputElement.innerHTML += "Quotient: " + quot;

    //Task 2
    var c = 10;
    var d = 5;
    c += d;
    var result = c;

    var outputElement = document.getElementById("result");

    outputElement.innerHTML = "c = " + c + "; d = " + d + ";<br><br>";
    outputElement.innerHTML += "Sum: " + result;

    //Task 3
    a = 1.5;
    b = 0.75;
    sum = a + b;

    var outputElement = document.getElementById("math_output1");

    outputElement.innerHTML = "a = " + a + "; b = " + b + ";<br><br>";
    outputElement.innerHTML += "Sum: " + sum;

    //Task 4
    a = -89;
    var reverse_a = a * -1;

    var outputElement = document.getElementById("math_output2");
    outputElement.innerHTML = "a = " + a + ";<br><br>";
    outputElement.innerHTML += "Reverse a: " + reverse_a;

    //Task 5
    var name = 'Alexander';
    var surname = "Bondar'";

    var outputElement = document.getElementById("string_output");
    outputElement.innerHTML = "Name: " + name + "<br>Surname: " + surname;
