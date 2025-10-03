/* 

5) Refactorizar

      Nuestra calculadora pedira primero la operacion: 😆
      En base a la operacion deberiamos operar de la soiguiente manera:

    '+':😆
        -Pedir numero 1 y validar
        -Pedir numero 2 y validar
        -Hacer suma

    '-', 'restar':😆
        -Pedir numero 1 y validar
        -Pedir numero 2 y validar
        -Hacer resta

    '*', 'multiplicar' , '.':😆
        -Pedir numero 1 y validar
        -Pedir numero 2 y validar
        -Hacer multiplicacion

    '/', 'dividir':😆
        -Pedir numero 1 y validar
        -Pedir numero 2 y validar
        -Hacer division

      'iva':
          -Pedir precio 1😆 let precio 
          -Pedir tipo factura (puede ser 'A' o 'B') y validar let facta let factb😆
          -Calcular 21% sobre el precio 1 
            -Si tipo_factura es 'A'
                -mostrar el valor del iva
                    EJ: 'El valor del iva es $21 y el precio del producto $100'
            
            -Si tipo_factura es 'B'
                -mostrar el valor del iva + precio
                    EJ: 'El valor del producto con iva incluido es $121
  


        'Promediar trimestre':
            -Pedir nota 1 y validar
            -Pedir nota 2 y validar
            -Pedir nota 3 y validar
            -Sumar todas las notas
            -Dividir la suma por 3
            -Mostrar resultado
            
        'es mayor', '>':
            -Pedir numero 1 y validar
            -Pedir numero 2 y validar
            -Mostrar si el numero 1 es mayor al numero 2
        
        'es menor', '<':
            -Pedir numero 1 y validar 
            -Pedir numero 2 y validar
            -Mostrar si el numero 1 es menor al numero 2

        'porcentaje' '%':
            -Pedir numero 1 y validar
            -Pedir numero 2 y validar
            -Mostrar el porcentaje del numero 1 respecto al numero 2
  */


let operacion
let number
let number2
let resultado

let precio
let tipo_factura
const IVA = 1.21

let nota_1
let nota_2
let nota_3
let suma_notas
let promedio

let es_mayor
let es_menor

let porcentaje_uno
let porcentaje_dos
let porcentaje_total

operacion = prompt('Escriba la operacion que quiere realizar: \n  (+, -, *, /) \n Si lo que quiere calcular es el IVA, Escriba IVA. \n Si lo que quiere es promediar trimestre escriba, Promedio \n Si quiere saber es mayor o es menor, utilize <,>')

if(operacion === '+' 
    || operacion === '-' 
    || operacion === '*' 
    || operacion === '/' 
    || operacion === 'suma' 
    || operacion === 'resta' 
    || operacion === 'multiplicacion' 
    || operacion === 'division' 
    || operacion === '.'){

    number = Number(prompt('Coloque el primer digito'))

    if(number === null || number == '' || isNaN(number))
        alert('no es un numero')

    else{
        number2 = Number(prompt('Coloque el segundo digito'))
        if(number2 === null || number2 == '' || isNaN(number2)){
            alert('no es un numero')
            
        }else if(operacion === '+' || operacion === 'suma' ){
            resultado = number + number2;
            alert('El resultado es ' + resultado)

        }else if(operacion ==='-' || operacion === 'resta'){
            resultado = number - number2;
            alert('El resultado es ' + resultado)

        } else if(operacion === '*' || operacion === 'multiplicacion' || operacion === '.'){
            resultado = number * number2;
            alert('El resultado es ' + resultado)

        }else if(operacion === '/' || operacion === 'division'){
            resultado = number / number2;
            alert('El resultado es ' + resultado)

        }
    }
    
}else if (operacion === 'IVA'){
    precio = prompt('Coloque el precio que quiere calcular con IVA')
    
    if(precio === null || precio == '' || isNaN(precio)){
        alert('Debe colocar solo datos numericos')

    }else{
        tipo_factura = prompt('Coloque el tipo de factura que quiere recibir: A o B')
        
        if(tipo_factura === 'A'){
            alert('El valor del iva es ' + IVA + ' y el precio del producto ' + ' $' + precio)


        }else if(tipo_factura === 'B'){
             precio = precio * IVA
            alert('El valor del producto con IVA incluido es ' + precio)

        }
    }

    
}else if(operacion === 'promedio'){
    nota_1 = Number(prompt('Colocar la primer nota numerica'))

if(nota_1 === null || nota_1 == '' || isNaN(nota_1)){
    alert('Solo se aceptan notas numericas!')

} else {
    nota_2 = Number(prompt('colocar segunda nota'))

    if(nota_2 === null || nota_2 == '' || isNaN(nota_2)){
        alert('Solo re aceptan notas numericas!')

    }else{
        nota_3 = Number(prompt('colocar tercer nota'))

    } if(nota_3 === null || nota_3 == '' || isNaN(nota_3)){
        alert('Solo notas numericas!')
        
    }else{
        suma_notas = nota_1 + nota_2 + nota_3
        promedio = suma_notas / 3;
        alert('Su promedio trimestral es de ' + promedio)
        
    }

}

} else if(operacion === '>' || operacion === 'es mayor' || operacion === '<' || operacion === 'es menor'){
    es_mayor = Number(prompt('Colocar primer digito'));

    if(es_mayor === null || es_mayor == '' || isNaN(es_mayor)){
        alert('El valor que esta colocando no es valido');

    } else {
        es_menor = Number(prompt('Colocar segundo digito'));

        if(es_menor === null || es_menor == '' || isNaN(es_menor)){
            alert('El valor que esta colocando no es corecto');

        } else if(es_mayor > es_menor){
            alert(es_mayor + ' es mayor a ' + es_menor);

        } else if(es_mayor < es_menor){
            alert(es_mayor + ' es menor a ' + es_menor);

        } else {
            alert(es_mayor + ' es igual a ' + es_menor);
        }
    }
} else if(operacion === '%' || operacion === 'porcentaje'){
    porcentaje_uno = Number(prompt('Colocar primer valor'))

    if(porcentaje_uno === null || porcentaje_uno == '' || isNaN(porcentaje_uno)){
        alert('El valor colocado es incorrecto')
        
    }else{
        porcentaje_dos = Number(prompt('Coloque segundo valor'))

        if(porcentaje_dos === null || porcentaje_dos == '' || isNaN(porcentaje_dos)){
            alert('El valor colocado es incorrecto')


        }else{
            porcentaje_total = (porcentaje_uno * porcentaje_dos) / 100
            alert('El porcentaje de ' + porcentaje_uno + ' con respecto a ' + porcentaje_dos + ' es de ' + porcentaje_total + '%')
        }
            
    }
}else{
    alert('Ingrese alguno de los datos correspondientes')
}


/* 
           'porcentaje' '%':
            -Pedir numero 1 y validar
            -Pedir numero 2 y validar
            -Mostrar el porcentaje del numero 1 respecto al numero 2
  */
 








