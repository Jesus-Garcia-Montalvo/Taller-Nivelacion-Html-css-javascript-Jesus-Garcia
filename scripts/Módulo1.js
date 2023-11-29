console.log("------------------------Módulo 1--------------------");

console.log("--------------Practica 1----------");

function encontrarNumeroMasGrande(lista) {
  // Verificar si la lista está vacía
  if (lista.length === 0) {
    console.log("La lista está vacía.");
    return;
  }

  let numeroMasGrande = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > numeroMasGrande) {
      numeroMasGrande = lista[i];
    }
  }

  console.log("El número más grande en la lista es: " + numeroMasGrande);
}

const numeros = [5, 12, 8, 3, 20, 6];
encontrarNumeroMasGrande(numeros);

console.log("");
console.log("--------------Practica 2----------");

// Función tradicional para sumar dos números
function sumarNumerosTradicional(num1, num2) {
  return num1 + num2;
}

// Función flecha para sumar dos números
const sumarNumerosFlecha = (num1, num2) => num1 + num2;

const resultadoTrad = sumarNumerosTradicional(5, 10);
const resultadoFlecha = sumarNumerosFlecha(5, 10);

console.log("Resultado usando función tradicional: " + resultadoTrad);
console.log("Resultado usando función flecha: " + resultadoFlecha);

console.log("");
console.log("--------------Practica 3----------");
function sumaNumerosPares(array) {
  // Utilizar la función filter para obtener solo los números pares
  const numerosPares = array.filter((numero) => numero % 2 === 0);

  // Utilizar la función reduce para sumar los números pares
  const suma = numerosPares.reduce(
    (acumulador, numero) => acumulador + numero,
    0
  );

  return suma;
}

const numerosEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultadoSumaPares = sumaNumerosPares(numerosEjemplo);

console.log("La suma de los números pares es: " + resultadoSumaPares);
