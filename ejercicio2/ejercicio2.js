// Inicializamos la suma y el contador
let sum = 0;
let i = 1;

// Bucle while para sumar los números del 1 al 100
while (i <= 100) {
  sum += i;
  i++;
}

// Mostramos el resultado en un elemento de la página
document.getElementById("listaNumeros").textContent = "La suma de los números del 1 al 100 es: " + sum;
