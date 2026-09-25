const formulario = document.getElementById("formRegistro");
const password = document.getElementById("password");
const barraPassword = document.getElementById("barraPassword");
const textoFortaleza = document.getElementById("fortalezaPassword");
const modalEdad = document.getElementById("modalEdad");

password.addEventListener("input", function () {
    const valor = password.value;

    barraPassword.className = "barra-nivel";
    textoFortaleza.className = "fortaleza";

    if (valor == "") {
        textoFortaleza.textContent = "";
        return;
    }

    const nivel = medirFortalezaPassword(valor);
    const clase = nivel == "débil" ? "debil" : nivel;

    barraPassword.classList.add(clase);
    textoFortaleza.classList.add(clase);
    textoFortaleza.textContent = "Fortaleza: " + nivel;
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fecha = document.getElementById("fechaNacimiento").value;
    const clave = password.value;
    const mensaje = document.getElementById("mensajeRegistro");

    const nombreOk = nombre != "" && soloLetras(nombre);
    const correoOk = validarCorreo(correo);
    const telefonoOk = validarLongitud(telefono, 10) && validarTelefono(telefono);
    const fechaOk = fecha != "" && calcularEdad(fecha) >= 0;
    const passwordOk = validarPassword(clave);

    document.getElementById("errorNombre").textContent = nombreOk ? "" : "Escribe un nombre usando solo letras";
    document.getElementById("errorCorreo").textContent = correoOk ? "" : "Escribe un correo válido";
    document.getElementById("errorTelefono").textContent = telefonoOk ? "" : "El teléfono debe tener 10 dígitos";
    document.getElementById("errorFecha").textContent = fechaOk ? "" : "Selecciona una fecha válida";
    document.getElementById("errorPassword").textContent = passwordOk ? "" : "Debe tener 8 caracteres, mayúscula, minúscula, número y símbolo";

    mensaje.textContent = "";
    mensaje.className = "mensaje";

    if (!(nombreOk && correoOk && telefonoOk && fechaOk && passwordOk)) {
        return;
    }

    const edad = calcularEdad(fecha);
    const mayorEdad = esMayorDeEdad(fecha);

    document.getElementById("edadResultado").textContent = edad + " años";

    if (mayorEdad) {
        document.getElementById("tituloModal").textContent = "Registro validado";
        document.getElementById("estadoEdad").textContent = "Cumples con la edad requerida para continuar.";
        mensaje.textContent = "Datos correctos";
        mensaje.classList.add("exito");
    } else {
        document.getElementById("tituloModal").textContent = "Acceso restringido";
        document.getElementById("estadoEdad").textContent = "Debes tener 18 años o más para completar el registro.";
        mensaje.textContent = "No se puede completar el registro porque eres menor de edad";
        mensaje.classList.add("error-general");
    }

    console.log("Nombre válido:", nombreOk);
    console.log("Correo válido:", correoOk);
    console.log("Longitud válida:", validarLongitud(telefono, 10));
    console.log("Teléfono válido:", validarTelefono(telefono));
    console.log("Edad calculada:", edad);
    console.log("Mayor de edad:", mayorEdad);
    console.log("Contraseña válida:", passwordOk);
    console.log("Fortaleza:", medirFortalezaPassword(clave));

    modalEdad.showModal();
});

document.getElementById("cerrarModal").addEventListener("click", function () {
    modalEdad.close();
});
