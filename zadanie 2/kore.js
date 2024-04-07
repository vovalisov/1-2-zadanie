function addNumbers() {
   let num1 = parseFloat(document.getElementById('num1').value);
   let num2 = parseFloat(document.getElementById('num2').value);

   let sum = num1 + num2;
   let difference = num1 - num2;
   let product = num1 * num2;
   let quotient = num1 / num2;
   let resultString = "Сумма: " + sum + "<br>Разность: " + difference + "<br>Умножение: " + product + "<br>Деление: " + quotient;

   document.getElementById('result').innerHTML = resultString;
}
