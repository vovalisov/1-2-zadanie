function getNumbers() {
   let input = prompt("Введите числа через запятую:");
   if (input !== null && input !== "") {
      let numbers = input.split(',').map(Number);
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
         sum += numbers[i];
      }
      var average = sum / numbers.length;
      alert("Среднее арифметическое: " + average);
   } else {
      alert("Вы не ввели числа.");
   }
}