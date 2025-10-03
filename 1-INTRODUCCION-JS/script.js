// TIPOS DE DATOS 

//PRIMITIVOS:
/* String ==> se usa para representar textos alfanumericos
Se escriben entre comillas ' ', "" */
"Santiago"
"Pepe"
"123"
''

//number ==> se usa para representar valores numericos
5
3.1
-4
NaN

//boolean ==> se usa para representar booleanos
true
false

//null ==> se usa para representar nulidad (Ausencia de dato)
null

//undefined ==> se usa cuando un dato no esta definido
undefined
/* Ej: Dejando indefinida la variable nombre */
nombre = undefined



//Transformadores / Conversores

String(5) // '5' ==> Simplemente se le agregan comillas.
String(true) // 'true'

Number('hola') // NaN (Not a Number) y se usa para representar que ese dato no es transformable a numero.
Number(true) // 1 y si fuera false seria 0.
Number(null) // 0
Number(undefined) // NaN


Boolean()

//Valores verdaderos y falso
//Valores truthy ==> Valores que al transformarlos en boolean dan true
//Todos los no no-falsy son truthy

//Valores falsy ==> Valores que al transformarlos en boolean dan false

''
0
NaN
null
undefined
false

//typeof
//Es una funcion que nos permite saber que tipo de dato es X valor, retorna un string con el nombre del tipo de dato.
typeof(4) // 'number'
