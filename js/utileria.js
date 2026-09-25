function validarCorreo(correo) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}

function soloLetras(texto) {
    const expresion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    return expresion.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    return String(numero).length <= maxLongitud;
}

function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento + "T00:00:00");
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const diferenciaMes = hoy.getMonth() - nacimiento.getMonth();

    if (diferenciaMes < 0 || (diferenciaMes == 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[^a-zA-Z0-9]/.test(password);

    return password.length >= 8 && tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial;
}

function validarTelefono(telefono) {
    const expresion = /^\d{10}$/;
    return expresion.test(telefono);
}

function medirFortalezaPassword(password) {
    let puntos = 0;

    if (password.length >= 8) puntos++;
    if (/[a-z]/.test(password)) puntos++;
    if (/[A-Z]/.test(password)) puntos++;
    if (/[0-9]/.test(password)) puntos++;
    if (/[^a-zA-Z0-9]/.test(password)) puntos++;

    if (puntos <= 2) return "débil";
    if (puntos <= 4) return "media";
    return "fuerte";
}
