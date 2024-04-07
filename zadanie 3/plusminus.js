function checkNumber(number) {
   if (isNaN(number)) {
      return "Вы ввели не число";
   } else if (number > 0) {
      return "Число положительное";
   } else if (number < 0) {
      return "Число отрицательное";
   } else {
      return "Число равно нулю";
   }
}

var userInput = prompt("Введите число:");


var number = parseFloat(userInput);

var result = checkNumber(number);
alert(result);