// Создание массива строк
var fruits = ["яблоко", "груша"];

var outputDiv = document.getElementById("output");
fruits.forEach(function (fruit) {
   var length = fruit.length;
   alert("Длина строки \"" + fruit + "\" составляет " + length + " символов.");
});
