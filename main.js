let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let barraSeguridad = document.getElementById('barra-seguridad');
let mensajeSeguridad = document.getElementById('mensaje-seguridad');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){
   
   let numeroDigitado = parseInt (cantidad.value);

    if( numeroDigitado < 6){
        alert("Es necesario un mínimo de 6 caracteres"); cantidad.value = '';
        return;
    }
    if( numeroDigitado >= 20){
        alert("Se recomienda que su contraseña no exceda los 20 caracteres"); cantidad.value = '';
        return;
    }
     let password = '';
     for(let i = 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        
        password+=caracterAleatorio;
    
    }

    let fuerza = calcularFuerza(password);

    barraSeguridad.style.width = fuerza + '%';

     if (fuerza < 33) {
         mensajeSeguridad.textContent = "Su contraseña es muy debil, favor de generar otra contraseña que incluya mayúsculas, minúsculas, números y símbolos.";
     } else if (fuerza < 66) {
         mensajeSeguridad.textContent = "Su contraseña es regular, si desea más seguridad intente agregar más caracteres o volver a generar.";
     } else {
         mensajeSeguridad.textContent = "Su contraseña es fuerte";
     }

    contrasena.value = password;  
    
}

function limpiar(){

    cantidad.value = '';
    contrasena.value = '';

}

function calcularFuerza(password) {
    let fuerza = 0;
    if (password.length >= 8) fuerza += 25;
    if (/[A-Z]/.test(password)) fuerza += 25;
    if (/[a-z]/.test(password)) fuerza += 25;
    if (/[0-9]/.test(password)) fuerza += 25;
    if (/[!@#$%^&*()]/g.test(password)) fuerza += 25;
    return Math.min(fuerza, 100);
}