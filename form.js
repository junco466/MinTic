let nombre = document.getElementById('nombre');
let masculino = document.getElementById('masculino');
let femenino = document.getElementById('femenino');


function checkNombre(valor){
    if (valor.length == 0  || valor.length < 4 || valor.length > 30){
        return false;
    }else{
        return true;
    }  
}

function checkTelefono(valor){
    numeros = "1234567890"
    console.log(valor.length)
    if (valor.length != 7){
        /*conslo.log("ebtre al primer condicional")*/
        return false;
    }else{
        cont = 0;
        for (var i=0; i<7; i++){
            for (var j = 0; j<10; j++){
                if (valor[i] == numeros[j]){
                    cont = cont + 1;
                    /*console.log("conteo")
                    console.log(cont)*/
                    break;
                }
            }
        }

        if (cont == 7){
            return true
        }else{
            return false
        }
    }
}

prueba1 = "2305450";
prueba2 = "254hola mundo"
prueba3 = "12"
prueba4 = "12345678"
prueba5 = ""

prueba11 = checkTelefono(prueba1)
prueba22 = checkTelefono(prueba2)
prueba33 = checkTelefono(prueba3)
prueba44 = checkTelefono(prueba4)
prueba55 = checkTelefono(prueba5)














/*let flag;*/
/*nombre.addEventListener("input", (e) => {
    console.log('hundi una tecla')
    flag = checkNombre(nombre.value);
});*/