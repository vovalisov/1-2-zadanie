

let num1 = prompt("первое число");
let num2 = prompt("второе число");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (isNaN(num1) || isNaN(num2)) {
   alert("Введите корректные числа.");
}
else {
   function sum(num1, num2) {
      return num1 + num2;
   }


   let result = sum(num1, num2);


   alert("Результат сложения: " + result);
}