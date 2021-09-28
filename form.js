var nombre = document.getElementById("nombre");
var telefono = document.getElementById("telefono");
var correo = document.getElementById("correo");
var direccion = document.getElementById("direccion");

function checkNombre(nombre) {
    nombreRegex = /^[a-zA-Z]{4,30}$/;

    if(nombreRegex.test(nombre)) {
        return true;
    } else {
        return false;
    }
    };

    function checkTelefono(telefono) {
    telefonoRegex = /^([0-9]{7})*$/;

    if(telefonoRegex.test(telefono)) {
        return true;
    } else {
        return false;
    }
    }

    function checkCorreo(correo) {
    correoRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(correoRegex.test(correo)) {
        return true;
    } else {
        return false;
    }
    }

    function checkContrasena(valor) {
    contraseñaRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;

    if(contraseñaRegex.test(valor)) {
        return true;
    } else {
        return false;
    }
    }

    function checkDir(direccion) {
    dirRegex = /^(\w*\d)[#-](\w*\d)$/;

    if(direccion.includes('#') && direccion.includes('-')) {
        return true;
    } else {
        return false;
    }
    }
/*
    module.exports = {
        checkNombre,
        checkTelefono,
        checkDir,
        checkCorreo,
        checkContrasena,
    }*/