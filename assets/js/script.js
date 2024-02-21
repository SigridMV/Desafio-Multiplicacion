// i = iterador
// j = iterador_2

// Funcion para solicitar y validar el numero
const solicitarYValidarNumero = () => {
  // Obtener las tablas de multiplicar desde el 1 hasta el número ingresado entre entre 1 y 20
  let numero = parseInt(prompt("Ingresa un número entre 1 y 20:"));

  // Validar que el numero este entre 1 y 20
  if (numero >= 1 && numero <= 20) {
    console.log(`Número ingresado correcto ${numero}`);
    // Retornar el valor del numero para usarlo despues
    return numero;
  } else {
    console.log(`Número ingresado incorrecto ${numero}`);
    // Retornar un valor nulo
    return null;
  }
};

//Función para calcular la multiplicacion y mostrarla
const multiplicacion = (numero) => {
  if (numero !== null) {
    for (let i = 1; i <= numero; i++) {
      console.log(`${i} X ${numero} = ${i * numero}`);
    }
  }
};

// Función para calcular el factorial y mostrarlo
const calcularYMostrarFactorial = (numero) => {
  // verificación de la variable numero
  if (numero !== null) {
    // Ciclo que recorre desde el 1 hasta el "numero" ingresado por usuario
    for (let iteracion = 1; iteracion <= numero; iteracion++) {
      // Factorial que va desde el 1
      let factorial = 1;

      // Ciclo que calcula el factorial
      for (let iteracion_2 = 1; iteracion_2 <= iteracion; iteracion_2++) {
        // Calcular el factorial multiplicandolo por el numero anterior
        factorial *= iteracion_2;
      }

      // Ver en consola
      console.log(`El factorial de ${iteracion} es: ${factorial}`);
    }
  }
};

// Ingresar desde el navegador
let numeroIngresado = solicitarYValidarNumero();

//calcular la multiplicacion
multiplicacion(numeroIngresado);

// Calcular el factorial
calcularYMostrarFactorial(numeroIngresado);
