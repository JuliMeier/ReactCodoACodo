

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  /* Metodos de MAth */
  return Math.max(x, y)
}
console.log(obtenerMayor(1, 9))
// Funcion flecha
const obtMay = (x, y) => Math.max(x, y)
console.log(obtMay(17, 7))

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  return edad >= 18 ? "Allowed" : "Not allowed"
}
console.log(mayoriaDeEdad(21))
// Funcion flecha
const MayDeEdad = edad => edad >= 18 ? "Allowed" : "Not allowed"
console.log(MayDeEdad(17))

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  switch (status) {
    case 1:
      return "Online";
      break;
    case 2:
      return "Away";
      break;
    default:
      return "Offline";
  }

}
console.log(conection(7))
//Funcion flecha
const conect = status => {
  switch (status) {
    case 1:
      return "Online";
      break;
    case 2:
      return "Away";
      break;
    default:
      return "Offline";
  }
}
console.log(conect(2))

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
      break;
    case "mandarin":
      return "Ni Hao!";
      break;
    case "ingles":
      return "Hello!";
      break;
    default:
      return "Hola!"
  }
}

console.log(saludo("castellano"))
//Funcion flecha 
const salud = (idioma) => {
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
      break;
    case "mandarin":
      return "Ni Hao!";
      break;
    case "ingles":
      return "Hello!";
      break;
    default:
      return "Hola!"
  }
}
console.log(salud("aleman"))

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
    case 'blue':
      return 'This is blue';
      break;
    case 'red':
      return 'This is red';
      break;
    case 'green':
      return 'This is green';
      break;
    case 'orange':
      return 'This is orange';
      break;
    default:
      return 'Color not found'
  }
}
console.log(colors('blue'))

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero === 10 || numero === 5
}
console.log(esDiezOCinco(10))

const DiezOCinco = numero => numero === 10 || numero === 5
console.log(DiezOCinco(5))

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero > 20 && numero < 50
}
console.log(estaEnRango(51))

const enRango = numero => numero > 20 && numero < 50
console.log(enRango(21))

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return Math.floor(numero) === numero
}
console.log(esEntero(0.8))

const entero = numero => Math.floor(numero) === numero
console.log(entero(-10))

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 5 === 0 && numero % 3 === 0) {
    return 'fizzbuzz';
  } else if (numero % 5 === 0) {
    return 'buzz'
  } else if (numero % 3 === 0) {
    return 'fizz'
  } else {
    return numero
  }
}
console.log(fizzBuzz(10))

const fizzflecha = numero =>
  numero % 3 === 0 && numero % 5 === 0 ? "fizzbuzz" :
    numero % 3 === 0 ? "fizz" :
      numero % 5 === 0 ? "buzz" :
        numero;

console.log(fizzflecha(10))


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  }
  if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Número 1 es mayor y positivo";
  }
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }
  if (num3 > num1 && num3 > num2) {
    num3++;
    return num3;
  }
  return false;
}
console.log(operadoresLogicos(17, 4, 27))

const operLogicos = (num1, num2, num3) => {
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  }
  if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Número 1 es mayor y positivo";
  }
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }
  if (num3 > num1 && num3 > num2) {
    num3++;
    return num3;
  }
  return false;
}
console.log(operLogicos(-1, 18, 2))

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(esPrimo(7))

const numPrimo = numero => {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;  
}
console.log(numPrimo(7))


function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  return valor? 'Soy verdadero': 'Soy falso'
}
console.log(esVerdadero(1))

const esVerda = valor => valor ? 'Soy verdadero':'Soy falso'
console.log(esVerda(1))

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  let arr = [];
  for (let i = 0; i <= 10; i++){
    arr.push(6 * i)
  }
  return arr
}
console.log(tablaDelSeis())

const tablaSeis = () => {
  let arr = [];
  for (let i = 0; i <= 10; i++){
    arr.push(6 * i)
  }
  return arr
}
console.log(tablaSeis())

function tieneTresDigitos(numero) {
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  return numero > 99 && numero <= 999
}
console.log(tieneTresDigitos(122))

const tieneTresDigit = numero => numero > 99 && numero <= 999
console.log(tieneTresDigit(990))

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let contador = 0;
  do {
    numero += 5;
    contador ++
  } while (contador < 8);
  return numero
}
console.log(doWhile(1))

const doMientras = (numero) => {
  let contador = 0;
  do {
    numero += 5;
    contador++;
  } while (contador < 8);
  return numero;
}
console.log(doMientras(0))

