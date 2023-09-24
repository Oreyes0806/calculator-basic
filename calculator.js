 // Obtener elementos HTML
 const toggleButton = document.getElementById('toggleButton');
 const calculator = document.getElementById('calculator');
 const num1 = document.getElementById('num1');
 const num2 = document.getElementById('num2');
 const add = document.getElementById('add');
 const subtract = document.getElementById('subtract');
 const multiply = document.getElementById('multiply');
 const divide = document.getElementById('divide');
 const result = document.getElementById('result');

 // Funciones para realizar operaciones
 const sumar = () => {
     const resultado = parseFloat(num1.value) + parseFloat(num2.value);
     result.textContent = resultado;
 };

 const restar = () => {
     const resultado = parseFloat(num1.value) - parseFloat(num2.value);
     result.textContent = resultado;
 };

 const multiplicar = () => {
     const resultado = parseFloat(num1.value) * parseFloat(num2.value);
     result.textContent = resultado;
 };

 const dividir = () => {
     const divisor = parseFloat(num2.value);
     if (divisor === 0) {
         result.textContent = "No se puede dividir por cero.";
     } else {
         const resultado = parseFloat(num1.value) / divisor;
         result.textContent = resultado;
     }
 };

 // Eventos de los botones de operaciones
 add.addEventListener('click', sumar);
 subtract.addEventListener('click', restar);
 multiply.addEventListener('click', multiplicar);
 divide.addEventListener('click', dividir);

 // Evento para mostrar/ocultar la calculadora
 toggleButton.addEventListener('click', () => {
     if (calculator.style.display === 'none' || calculator.style.display === '') {
         calculator.style.display = 'block';
         toggleButton.textContent = 'Ocultar Calculadora';
     } else {
         calculator.style.display = 'none';
         toggleButton.textContent = 'Mostrar Calculadora';
     }
 });