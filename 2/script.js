//  Operadores Aritmeticos
//  +: CONCATENACION --> Es la uninon de dos cadenas (String)

// Una concatenacion ocurre si almenos uno de los 2 operando es string
// El dato no string se transforma implicitamente en string
// Siempre devuelve un String

console.log('hola' + '' + 'mundo') // hola mundo
console.log('hola ' + 1)
// 'hola ' + String(1)
// 'hola ' + '1'
// 'hola 1'

console.log('pepe ' + null)
// 'pepe ' + String(null)
// 'pepe ' + 'null'
// 'pepe null'

//  +: SUMA
// Una suma solo ocurre cuando no hay string en los operando
// Siempre devuelve un numero.
// Transformaran al dato/os no numerico en numero.
// Cualquier operacion con NaN (EXEPTO LA CONCATENACION) da NaN

// 50 + null
//  50 + Number(null)
//  50 + 0 -- (Esto ocurre porque transforma el dato no numerico a numero)
// 50

// undefined + true 
// Number(undefined) + Number(true)
// NaN + 1





//  -: RESTA
// Siempre devuelve un numero.
// Transformaran al dato/os no numerico en numero.
// Cualquier operacion con NaN (EXEPTO LA CONCATENACION) da NaN

// 1 -'1'
// 1 - Number('1') 1
// 0



//  /: DIVISION
// Siempre devuelve un numero.
// Transformaran al dato/os no numerico en numero.
// Cualquier operacion con NaN (EXEPTO LA CONCATENACION) da NaN



//  *: MULTIPLICACION
// Siempre devuelve un numero.
// Transformaran al dato/os no numerico en numero.
// Cualquier operacion con NaN (EXEPTO LA CONCATENACION) da NaN



/* Ejercicios de EJ */

6 + NaN * 0
6 + Number(NaN) * 0
NaN




11 / '1'
11 / Number('1')
11 / 1
11




String(Boolean(Number(NaN))) - 3
String(Boolean(NaN)) - 3
String(false) - 3
'false' - 3
Number('false') - 3
NaN - 3
NaN




40 + 'hola'
'40hola'

0 - null
0 - Number(null)
0 - 0
0





// Comparadores
// Sirven para comparar datos
// Siempre retornan un boolean

// == : es igual a (Compara el valor NUMERICO de cada dato)
8 == 8 // true
70 == '70' // true
1 == true // true
2 == true // false
NaN == NaN // false. EXCEPCION NAN ES EL UNICO DATO INCOMPARABLE, NO ES IGUAL A NADIE, ES UN DATO UNICO. Si queremos comparar a NaN debemos usar isNaN
0 == null // false. Exceptcion de null, null solo es comparable con null o undefined.




// != : no es igual a 
6 != true + 5 // false
6 != '6' //false



// === : es estrictamente igual a (Buena practica)(Compara tipo de dato y valor)
70 === '70' // false
1 === Number(String(1)) // true


// !== : es estrictamente distinto de


//Usar con numeros
// > : Mayor que
// < : Menor que
// >= : Mayor o igual que
// <= : Menor o igual que





// Operadores Logicos
// ! NOT : Devuelve el valor booleano opuesto
!true // false
!80 // false
!null // true

// || OR : Evalua el primer valor, si es verdadero devolvera el primero y si es falso devolvera el segundo.(Es un selector)
70 || null // 70
NaN || 0 || null
0 || null // null


// && AND : Evalua el primer valor, si es verdadero devolvera el segundo valor y sino devolvera el primer valor.
800 && null // null


//Tablas de la verdad OR
//Conclusion: si almenos uno de los datos es verdadero, devolvera un dato verdadero, sino devuelve un falso.

true || true // true
false || true // true
true || false // true
false || false // false

//Tablas de la verdad AND
//Conclusion: Ambos tienen que ser verdaderos para que AND devuelva un verdadero. sino sera falso
true && true // true 
false && true // false
true && false // false
false && false // false

// Un uso muy comun de los operadores logicos es en condiciones
// Si tu edad es entre 30 y 60 
// edad = 45
// edad >= 30 && edad <= 60


//Si sos pepe o tenes mas de 50, te dejo pasar
// edad = 60
//nombre = 'pedrito'
//nombre === 'pepe' || edad >= 50

//let nombre = 'peepe'
//let edad = 50

//nombre === 'pepe' || console.log('me ejecute')



// ?? Nullish coalescing : Evalua si el primer valor es null o undefined y devuelve el segundo, sino se queda con el segundo.
//es_dia = buscanEnMemoria() ?? mirarPorVentana()



// Variables
//Guardar un valor en memoria
//Ejemplo, le pido el nombre al usuario y le dejo guardado en memoria

// var JS moderno ==> No la usamos
// Declaro a valor especial
// Inicializo el valor en 90
//var valor_especial = 90



// let ES6 (EcmaScript 6)
// Se recomienda usar nombres referenciales
//La variable let se puede incializar en X valor y puede reasiganarce mas adelante
// Si una variable let no tiene un valor inicial el valor sera undefined
let edad = 80
// let nombre = 'santi'
// Reasignacion de let
edad = 90

// snake_case
let usuario_edad
// camelCase
let usuarioNombre



// const ES6
// Se usa cuando cierto dato se mantiene de inicio a fin del programa
// Deben tener un valor inicial
// No se pueden reasignar

const PI = 3.14
const IVA = 21
const CLAVE_SECRETA = 'clave_123'
const constante_minuscula = 555






// Bloques de codigo
// Condicionales

// Prompt nos permite solicitar un dato al usuario
// Alert nos permite mostrar X mensaje por ventanita (pop up)


let nombre = prompt('Dame tu nombre')

if(nombre === 'pepe'){
    alert('hola jefe')
}
else if (nombre === 'maria') {
    alert('hola jefa')
}
else{
    alert('ninja')
}