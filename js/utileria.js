function validarCorreo(correo) {
    if (correo.includes(" ") || !correo.includes("@") || !correo.includes(".")) {
        return false;
    }

    let arroba = correo.indexOf("@");
    let ultimoArroba = correo.lastIndexOf("@");
    let punto = correo.lastIndexOf(".");

    if (arroba <= 0 || arroba != ultimoArroba || punto < arroba + 2 || punto == correo.length - 1) {
        return false;
    }

    return true;
}

function soloLetras(texto) {
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÁÉÍÓÚáéíóúÑñÜü ";

    if (texto == "") {
        return false;
    }

    for (let i = 0; i < texto.length; i++) {
        if (!letras.includes(texto[i])) {
            return false;
        }
    }

    return true;
}

function validarLongitud(numero, maxLongitud) {
    let texto = String(numero);

    if (texto == "" || isNaN(texto)) {
        return false;
    }

    if (texto.length <= maxLongitud) {
        return true;
    }

    return false;
}

function calcularEdad(fechaNacimiento) {
    let nacimiento = new Date(fechaNacimiento + "T00:00:00");
    let hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let diferenciaMes = hoy.getMonth() - nacimiento.getMonth();

    if (diferenciaMes < 0 || (diferenciaMes == 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    if (calcularEdad(fechaNacimiento) >= 18) {
        return true;
    }

    return false;
}

function validarPassword(password) {
    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    let tieneEspecial = false;
    let especiales = "!@#$%^&*()_+-=[]{};:',.<>/?";

    if (password.length < 8) {
        return false;
    }

    for (let i = 0; i < password.length; i++) {
        let caracter = password[i];

        if (caracter >= "A" && caracter <= "Z") {
            tieneMayuscula = true;
        } else if (caracter >= "a" && caracter <= "z") {
            tieneMinuscula = true;
        } else if (caracter >= "0" && caracter <= "9") {
            tieneNumero = true;
        } else if (especiales.includes(caracter)) {
            tieneEspecial = true;
        }
    }

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        return true;
    }

    return false;
}

function validarTelefono(telefono) {
    if (telefono.length == 10 && !isNaN(telefono)) {
        return true;
    }

    return false;
}

function limpiarEspacios(texto) {
    return texto.trim();
}

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let numero = document.getElementById("numero").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let resultado = document.getElementById("resultado");

    nombre = limpiarEspacios(nombre);

    if (!soloLetras(nombre)) {
        resultado.textContent = "El nombre solo debe contener letras";
        return false;
    }

    if (!validarCorreo(correo)) {
        resultado.textContent = "El correo no es válido";
        return false;
    }

    if (!validarLongitud(numero, 10) || !validarTelefono(numero)) {
        resultado.textContent = "El teléfono debe tener 10 dígitos";
        return false;
    }

    if (fechaNacimiento == "") {
        resultado.textContent = "Ingresa la fecha de nacimiento";
        return false;
    }

    let edad = calcularEdad(fechaNacimiento);

    document.getElementById("edadCalculada").textContent = "Edad: " + edad + " años";

    if (esMayorDeEdad(fechaNacimiento)) {
        resultado.textContent = "Es mayor de edad";
    } else {
        resultado.textContent = "Es menor de edad";
       
    }

    document.getElementById("modal").style.display = "block";

    console.log("Nombre válido:", soloLetras(nombre));
    console.log("Correo válido:", validarCorreo(correo));
    console.log("Longitud válida:", validarLongitud(numero, 10));
    console.log("Edad:", edad);
    console.log("Mayor de edad:", esMayorDeEdad(fechaNacimiento));

    return false;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function validarLogin() {
    let correo = document.getElementById("correoLogin").value;
    let password = document.getElementById("password").value;
    let resultado = document.getElementById("resultadoLogin");

    if (!validarCorreo(correo)) {
        resultado.textContent = "Correo no válido";
        return false;
    }

    if (!validarPassword(password)) {
        resultado.textContent = "La contraseña no cumple los requisitos";
        return false;
    }

    resultado.textContent = "Datos válidos";

    console.log("Correo válido:", validarCorreo(correo));
    console.log("Contraseña válida:", validarPassword(password));

    return false;
}