var datos = [];

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
    //console.log(datos);
    ordenarArreglo(datos);
}

function ordenarArreglo(datos){
    //console.log(datos);
    //document.getElementById("mostrarDatos").innerHTML = datos;

    let datos_ordenados = sort_by_key(datos, 'nombre');
    console.log(datos_ordenados);
    

}

function sort_by_key(array, key){

    return array.sort(function(a, b){
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

