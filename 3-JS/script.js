/* 1) Ingresar una operacion ('+', '-','*', '/') 
    Verificar si la operacion ingresada es valida
    Si es valida vamos a mostrar por alerta  'Operacion valida'
    Si no mostrar 'Operacion invalida'*/
/*     let numero_uno
    let numero_dos
    let resultado


    let operando = prompt('ingresa una operacion')
    if(operando == '+' || operando == '*' || operando == '/' || operando == '-'){
         numero_uno = prompt('ingresa el primer numero a restar')
      if(numero_uno > 0){
        numero_dos = prompt('Ingresa el segundo numero a restar')
       
      } 
      else {
        resultado = Number(numero_uno) - Number(numero_dos) 
      }
       console.log(resultado); 
    } */

/* 2) Solicitar un numero
Verificar si el numero es un numero
en caso de serlo decir 'Es un numero'
en caso de no serlo decir 'No es un numero'
TIP: isNaN es una funcion a la que si le pasas un dato te dice si es NaN
TIP: promp retorna un string o null (en caso de que el usuario de al boton de cancelar) */

/*   let numero = prompt('cualquier numero')
  if(isNaN(numero)){
    alert('no es un numero')
  }else{
    alert('es un numero')
  } */

/* let numero = prompt('cualquier numero') */
/*  
Se puede hacer asi: 
if( numero === null || numero ===  '' || isNaN(numero))
Pero seria mas facil: !numero || isNaN(numero)
 
*/
/*  if( numero === null || numero ===  '' || isNaN(numero)){
   alert('no es un numero')
 }else ( numero >= 0);{
   alert('es un numero')
 }
*/
/* 
3) Solicitar 2 numeros y validaros usando la condicion del enunciado 2 ///
Solicitar una operacion y validarlo usando la condicion del enunciado 1
En base a el valor de la operacion debera pasar lo siguiente:
  '+': se sumaran los numeros y se mostrara por alerta
  '-': se restaran los numeros y se mostraran por alerta
  '*': se muliplicaran los numeros y se mostrara por alerta
  '/': se dividiran los numero y se mostraran por alerta

  Aclaraciones:
    -No se puede ejecutar la operacion si no se eligio una operacion valida
    -Si se ingreso un numero incorrectaente tampoco podra continuarse con la operacion
  TIPS:
    .Podes transformar datos con Number(), Boolean() y String()
 
*/

let num
let num2
let operacion
let resultado

num = prompt('Ingrese el primer digito a operar')
if (num === null || num == '' || isNaN(num)) {
  alert('no es un numero')

} else {
  num2 = prompt('Ingrese el segundo dijito a operar')

  if (num2 === null || num2 == '' || isNaN(num2)) {
    alert('no es un numero')

  } else {
    operacion = prompt('Ingrese una operacion a realizar')
  } if (operacion === '/' || operacion === 'dividir' ) {
     resultado = (num) / (num2);
    alert('El resultado es ' + resultado)

  } else if (operacion === '-' || operacion === 'restar') {
    resultado = num - num2;
    alert('El resultado es ' + resultado)

  } else if (operacion === '*' || operacion === 'multiplicar' || operacion === '.') {
    resultado = num * num2;
    alert('El resultado es ' + resultado)

  } else if (operacion === '+' || operacion === 'sumar') {
    resultado = num + num2;
    alert('El resultado es ' + resultado)

  }

  else {
    alert('Ese caracter no corresponde a una operacion valida, por favor utilice alguno de los siguientes operando: -, +, *, /')
  }

}

/* 4)Agregar soporte para las palabras:
  'sumar', 😄
  'restar',😄
  'multiplicar', '.',😄
  'dividir'. 😄*/

  /* 5) Refactorizar

      Nuestra calculadora pedira primero la operacion:
      En base a la operacion deberiamos operar de la soiguiente manera:

    '+':
        -Pedir numero 1 y validar
        -Pedir numero 2 y validar
        -Hacer suma

    '-', 'restar':
        -Pedir numero 1 y validar
        -Pedir numero 2 y validar
        -Hacer resta

    '*', 'multiplicar' , '.':
        -Pedir numero 1 y validar
        -Pedir numero 2 y validar
        -Hacer multiplicacion

    '/', 'dividir':
        -Pedir numero 1 y validar
        -Pedir numero 2 y validar
        -Hacer division

      'iva':
          -Pedir precio 1
          -Pedir tipo factura (puede ser 'A' o 'B') y validar
            -Calcular 21% sobre el precio 1
            -Si tipo_factura es 'A'
                -mostrar el valor del iva
                    EJ: 'El valor del producto es $21 y el precio del producto $100'
            
            -Si tipo_factura es 'B'
                -mostrar el valor del iva + precio
                    EJ: 'El valor del producto con iva incluido es $121
  
  
  */


