/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */
let clasificaciones = ['Marcos', 'Franco', 'Agostina', 'Leon', 'Juan Cruz', 'Eduardo']

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */
function mostrarClasificacion() {
    for ( let i = 0; i < clasificaciones.length ; i++){
        console.log(`Posicion ${i + 1}: ${clasificaciones[i]}`);
    }
}
mostrarClasificacion()

//modo Correcto ForEach (pueod usar tambien document.write)
let mostrarCadaClasificacion = () => {
    clasificaciones.forEach((participante, i) => {
      console.log(`Posición ${i + 1}: ${participante}`);
    });
  }
  
  mostrarCadaClasificacion()

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */
let cambio = clasificaciones[3]
clasificaciones[3] = clasificaciones[2]
clasificaciones[2] = cambio

console.log(clasificaciones)

/* b)Eduardo es descalificado y se elimina del concurso */
descalificado = clasificaciones.pop()
console.log(descalificado)


/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */
clasificaciones.splice(1,0, 'Julieta', 'Martina')
console.log(clasificaciones)
/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */
clasificaciones.unshift('Alicia')
console.log(clasificaciones)
/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */
mostrarClasificacion()


