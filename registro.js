var datos = [];
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
function filtrarCorreo(arreglo){
    let filtro = arreglo.filter(dato=>{
        let correoR = dato.correo;
        let indice = correoR.lastIndexOf("@");
        let dominio = correoR.slice(indice + 1, correo.lenght);
        if (dominio=="gmail.com"){
            return true;
        }
        else{
            return false;
        }
    })
    console.log(filtro);
    return filtro;
}

function agregarRegistro(){
    
    let _nombre = document.getElementById("nombre").value;
    let _masculino = document.getElementById("masculino").checked;
    let _femenino = document.getElementById("femenino").checked;
    let _telefono = document.getElementById("telefono").value;
    let _direccion = document.getElementById("direccion").value;
    let _correo = document.getElementById("correo").value;
    let _contrasena = document.getElementById("contrasena").value;

    if (_masculino){
        _genero = 'masculino';
    }else if (_femenino){
        _genero = 'femenino';
    }

    let registro = {        
        nombre: _nombre,
        genero: _genero,
        telefono: _telefono,
        direccion: _direccion,
        correo: _correo,
        contrasena: _contrasena
    };

    datos.push(registro);

    console.log(datos);
    //ordenarArreglo(datos);
    // prueba de la funcion filtroCorreo a traves de la consola
    // let resultadoss = filtrarCorreo(datos);
}

function ordenarArreglo(datos){
    //console.log(datos);
    //document.getElementById("mostrarDatos").innerHTML = datos;

    let datos_ordenados = datos.sort(function(a, b){
        var x = a['nombre']; var y = b['nombre'];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
          
    console.log(datos_ordenados);
    return datos_ordenados;
}

module.exports={
    filtrarCorreo,
    agregarRegistro,
    ordenarArreglo
}
