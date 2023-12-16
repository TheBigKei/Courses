    var a = 10;
    var b = 2;

    var sum = a + b;
    var quot = a / b;
    var prod = a * b;
    var diff = Math.abs(a - b);

    var outputElement = document.getElementById("math_output");
    
    outputElement.innerHTML = "a= " + a + "; b=" + b + ";<br><br>";
    outputElement.innerHTML += "Sum: " + sum + "<br>";
    outputElement.innerHTML += "Difference: " + diff + "<br>";
    outputElement.innerHTML += "Product: " + prod + "<br>";
    outputElement.innerHTML += "Quotient: " + quot;
