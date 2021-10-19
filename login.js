let registros = [];

function login(){

    //agregarRegistro();
    let tel = document.getElementById("telefono").value;
    let email = document.getElementById("correo").value;
    let pass = document.getElementById("contrasena").value;
    let captcha = document.getElementById("captcha").value;
    console.log("Estoy en login");
    console.log("y los registros son: " + registros.length);
    console.log(tel)
    console.log(email)
    console.log(pass)
    console.log(captcha)
    
    agregarRegistro();
    if (registros.length != 0){
        
        for(let i=0; i<registros.length; i++){
            
            console.log("comienzo a validar resgisrtos");
            if (registros[i].telefono == tel){
                console.log("validacion tel" + tel);
                if (registros[i].correo == email){
                    console.log("validacion email " + email);
                    if (registros[i].contrasena == pass ){
                        console.log("validacion contraseña " + contrasena);
                        capt = validarCAPTCHA(captcha);
                        if (capt){
                            console.log("validacion completa");
                            return true;
                        }else{
                            console.log("Captcha incorrecto")
                            //return false;
                        }
                    }else{
                        console.log("Contraseña incorrecta");
                        //return false;
                    }
                }else{
                    console.log("Correo invalido");
                    //return false;
                }
            }else{
                console.log("Telefono invalido");
                //return false;
            }
            return false;
        }
    }/*else{
        agregarRegistro();
        return false
    }*/
}

function agregarRegistro(){

    console.log("estoy ejecutando registros")

    //let _nombre = document.getElementById("nombre");
    //let _masculino = document.getElementById("masculino");
    //let _femenino = document.getElementById("femenino");
    let _telefono = document.getElementById("telefono").value;
    //let _direccion = document.getElementById("direccion").value;
    let _correo = document.getElementById("correo");
    let _contrasena = document.getElementById("contrasena").value;

    /*if (_masculino.checked){
        _genero = 'masculino';
    }else if (_femenino.checked){
        _genero = 'femenino';
    }*/

    let registro = {        
        //nombre: _nombre.value,
        //genero: _genero,
        telefono: _telefono,
        //direccion: _direccion,
        correo: _correo.value,
        contrasena: _contrasena
    };

    registros.push(registro);
}

function validarCAPTCHA(valor){
    //console.log(valor)
    validacion = valor.toLowerCase();

    if (validacion == "ocaso" || validacion == "ocaso!"){
        //console.log("captcha true");
        return true;
    }else{
        //console.log("captcha false");
        return false;
    }
}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;