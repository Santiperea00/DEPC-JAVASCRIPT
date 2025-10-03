/* Bucles:
 */

/* let numero = prompt('Coloque el digito') */


/* Principio DRY = Dont repeat yourself */

/* WHILE = Mientras X condicion se cumple se repetira X veces el  bloque de codigo */

/* while(!numero || isNaN(numero)){
    alert('El numero ingresado no es correcto')
    numero = prompt('Ingresa el numero')
}

    alert('El numero es correcto') */

    /* Vamos a tener una variable interna llamada password_db con el valor que quieras.
        Vamos a solicitar al cliente una password y validaremos si es correcta, si es incorrecta, se lo diremos y le volvemos a solicitar */

/* if(!numero || isNaN(numero)){
    alert('No es un digito valido')
    numero = prompt('Coloque el digito')

    if(!numero || isNaN(numero)){
        alert('No es un digito valido')
        numero = prompt('Coloque el digito')

        if(!numero || isNaN(numero)){
            alert('No es un digito valido')
            numero = prompt('Coloque el digito')
        }
    }
} */




      /* Vamos a tener una variable interna llamada password_db con el valor que quieras.
        Vamos a solicitar al cliente una password y validaremos si es correcta, si es incorrecta, se lo diremos y le volvemos a solicitar
        Si el usuario da a cancelar cortar la operacion*/


       /*  let password = prompt('Coloque su contraseña')
        let password_db = '123123'

        while(password !== password_db){
            if(password === null){
                alert('programa cancelado')
                break

            }
            alert('Contraseña incorrecta')
            password = prompt('coloque su contraseña')
        } if(password === password_db){
            alert('Contraseña valida')
        } */


        /* 
        -Solicitar una operacion
        -Validar dicha operacion sea 'iva' o descuento
            -Si es no volver a solicitar, a excepcion de que el usuario de cancelar, en dicho caso cancelar el programa y
            avisar al usuario

        -Si la operacion es 'iva' solicitar un numero
            -validar el numero, en caso de no ser correcto volver a solicitar (el numero debe ser positivo)
            -Si es correcto: Mostrar por alerta el 21% del precio ingresado EJ: 'El iva de tu producto es ${resultado} 

        -Si la operacion es 'descuento' solicitar un numero
            -Validar el numero en caso de no ser correcto volver a solicitar (El numero debe ser positivo)

            -Solicitar un numero de descuento.
                -Validar el numero de descuento (El numero debe ser positivo y menor a 100)
                    -Volver a solicitar en caso de ser incorrecto
                    -Mostrar por alerta el porcentaje del numero ingresado EJ: 'El descuento aaplicado es de ${resultado}*/


let operacion
let producto_iva
let producto_descuento
let resultado_descuento
let descuento
let resultado_iva
const IVA = 21

operacion = prompt('Especifique que operacion desea realizar tipiando: iva o descuento.')

while(operacion !== 'iva' && operacion !== 'descuento'){
    if(operacion === null){
        alert('programa cancelado')
        break;

    }
    alert('operacion invalida')
    operacion = prompt('Especifique que operacion desea realizar tipiando: iva o descuento.')

}if(operacion === 'iva'){
    producto_iva = prompt('Coloque el valor del producto')

    while(producto_iva < -0 ){
        alert('Solo se aceptan valores positivos, por favor intente de nuevo')
        producto_iva = prompt('Coloque el valor del producto')

    }if(producto_iva > 0){
     resultado_iva = (producto_iva * IVA ) / 100
        alert('El iva de tu producto es $ ' + resultado_iva)
    }

}if(operacion === 'descuento'){
    producto_descuento = prompt('Coloque el valor del producto')

    while(producto_descuento < -0){
        alert('Operacion invalida, el numero debe ser positivo')
        producto_descuento = prompt('Coloque el valor del producto')

    }if(producto_descuento >= 0){
        descuento = prompt('Coloque el valor del descuento')

        while(descuento < 0 || descuento > 100){
            alert('El numero debe ser positivo y menor a 100')
            descuento = prompt('Coloque el valor del descuento')

        }if(descuento > 0 || descuento < 100){
            resultado_descuento = producto_descuento / descuento
            alert('El descuento aplicado es de $' + resultado_descuento)
        }

    }

}



   /*  let password = prompt('Coloque su contraseña')
        let password_db = '123123'

        while(password !== password_db){
            if(password === null){
                alert('programa cancelado')
                break

            }
            alert('Contraseña incorrecta')
            password = prompt('coloque su contraseña')
        } if(password === password_db){
            alert('Contraseña valida')
        } */
    
    
        