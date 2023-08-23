
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "julian";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 37;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;



function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
    return str;
}
stringDevuelto = devolverString("Cadena de texto")
console.log(stringDevuelto)


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}
sumaResultado = suma(8,9)
console.log(sumaResultado)

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return x - y;
}
restaResultado = resta(10,1)
console.log(restaResultado)

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;

}
multiplicaResultado = multiplica(10,5)
console.log(multiplicaResultado)

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y;

}
divideResultado = divide(100,10)
console.log(divideResultado)

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  if ( x === y){
    return true;
  } else {
    return false;
  }


}
igualdad = sonIguales(100,100)
console.log(igualdad)

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }

}
longitud = tienenMismaLongitud('caca','coca')
console.log(longitud)

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( num < 90) {
    return true;
  } else {
    return false;
  }

}
menorNoventa = menosQueNoventa(89)
console.log(menorNoventa)

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    return true;
  } else {
    return false;
  }

}
mayorCincuenta = mayorQueCincuenta(49)
console.log(mayorCincuenta)

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;

}
resto = obtenerResto(22,3)
console.log(resto)

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( num % 2 === 0){
    return true;
  } else {
    return false;
  }

  
}
paridad = esPar(13)
console.log(paridad)

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( num % 2 !== 0) {
    return true;
  } else {
    return false;
  }

}
impar = esImpar(13)
console.log(impar)

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return num * num;

}
alCuadrado = elevarAlCuadrado(4)
console.log(alCuadrado)

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return num * num * num;

}
alCubo = elevarAlCubo(3)
console.log(alCubo)

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num, exponent);

}
elevado = elevar(2,10)
console.log(elevado)


function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num);

}
//redondeo = redondearNumero(9.78)
console.log(redondearNumero(9.48))

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);

}
console.log(redondearHaciaArriba(9.26))


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();

}
console.log(numeroRandom())

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    return "Es positivo";
  } else if (numero < 0) {
    return "Es negativo";
  } else {
    return false;
  }
  
}
console.log(esPositivo(-1))

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return (str + "!");

}
console.log(agregarSimboloExclamacion("Hola Mundo"))

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  return nombre + " " + apellido;

}
console.log(combinarNombres("Julian","Meier"))

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + nombre + "!"; 

}
console.log(obtenerSaludo("Julian"))

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return alto * ancho;  

}
console.log(obtenerAreaRectangulo(2,4))

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return 4 * lado;  

}
console.log(retornarPerimetro(5))

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura) / 2; 

}
console.log(areaDelTriangulo(3,5))

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.2

}
console.log(deEuroAdolar(100))

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  if (letra.length !== 1 || typeof letra !== "string") {
    return "Dato incorrecto";
  }
  
  const vocal = letra.toLowerCase();
  
  if ( vocal === "a" || vocal === "e" || vocal === "e" || vocal === "o" || vocal === "u" ) {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
} 






console.log(esVocal("n"))

