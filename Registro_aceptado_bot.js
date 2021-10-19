var registros = [];

function agregarRegistro(){


    let _nombre = document.getElementById("nombre");
    //let _masculino = document.getElementById("masculino");
    //let _femenino = document.getElementById("femenino");
    //let _telefono = document.getElementById("telefono").value;
    //let _direccion = document.getElementById("direccion").value;
    let _correo = document.getElementById("correo");
    //let _contrasena = document.getElementById("contrasena").value;

    /*if (_masculino.checked){
        _genero = 'masculino';
    }else if (_femenino.checked){
        _genero = 'femenino';
    }*/

    let registro = {        
        nombre: _nombre.value,
        //genero: _genero,
        //telefono: _telefono,
        //direccion: _direccion,
        correo: _correo.value,
        //contrasena: _contrasena
    };

    //console.log('inicial');
    registros.push(registro);
    console.log(registros);
    //console.log('entre a la funcion agragarRegistro()')
    //let ordenado = ordenarArreglo(arreglo);
    //let resultadoss = filtrarCorreo(arreglo);
    // prueba de la funcion filtroCorreo a traves de la consola
    
}

function ordenarArreglo(){
    //document.getElementById("mostrarDatos").innerHTML = datos;
    let copia = registros.slice()
    let datos_ordenados = copia.sort(function(a, b){
        let x = a['nombre']; let y = b['nombre'];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });

    console.log(datos_ordenados);
    //console.log('entre a la funcion ordenarArreglo()')
    return datos_ordenados;
}

function filtrarCorreo(){
    let filtro = registros.filter((dato) => {
        let correo = dato.correo;
        let indice = correo.lastIndexOf("@");
        let dominio = correo.slice(indice + 1, correo.lenght);
        if (dominio=="gmail.com"){
            return true;
        }
        else{
            return false;
        }
    })

    console.log(filtro);
    console.log('entre a la funcion filtrarCorreo()')
    return filtro;
}

module.exports={
    registros,
    agregarRegistro,
    ordenarArreglo,
    filtrarCorreo,
}


// var datosPrueba=[
//     {
//         nombre: "andres", 
//         genero: "masculino",
//         telefono: "3313132",
//         correo:"juancalam@gmail.com",
//         contrasena:"1234"
//     },
//     {
//         nombre: "camilo", 
//         genero: "masculino",
//         telefono: "3313135",
//         correo:"camilo@hotmail.com",
//         contrasena:"123461"
//     },
//     {
//         nombre: "andrea", 
//         genero: "femenino",
//         telefono: "3313130",
//         correo:"andrea@gmail.com",
//         contrasena:"lsajfg"
//     },
//     {
//         nombre: "perriot", 
//         genero: "masculino",
//         telefono: "3353130",
//         correo:"mipert@hotmail.com",
//         contrasena:"lsajfg12"
//     },{
//         nombre: "andrex", 
//         genero: "femenino",
//         telefono: "3313132",
//         correo:"andreda@gmail.com",
//         contrasena:"lsajfg"
//     }
// ];