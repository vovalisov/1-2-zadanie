window.onload = function () {

   function calculateSum() {
      let sum = 0;
      for (let i = 1; i <= 100; i++) {
         sum += i;
      }
      return sum;
   }

   let resultElement = document.getElementById("result");
   resultElement.textContent = "Сумма чисел от 1 до 100: " + calculateSum();
};