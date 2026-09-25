const formularioLogin = document.getElementById("formLogin");

formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const correo = document.getElementById("correoLogin").value.trim();
    const password = document.getElementById("passwordLogin").value;
    const mensaje = document.getElementById("mensajeLogin");

    const correoOk = validarCorreo(correo);
    const passwordOk = validarPassword(password);

    document.getElementById("errorCorreoLogin").textContent = correoOk ? "" : "Correo no válido";
    document.getElementById("errorPasswordLogin").textContent = passwordOk ? "" : "La contraseña no cumple los requisitos";

    mensaje.textContent = "";
    mensaje.className = "mensaje";

    if (!(correoOk && passwordOk)) {
        mensaje.textContent = "Revisa los datos del formulario";
        mensaje.classList.add("error-general");
        return;
    }

    mensaje.textContent = "Correo y contraseña con formato válido";
    mensaje.classList.add("exito");

    console.log("Correo válido:", correoOk);
    console.log("Contraseña válida:", passwordOk);
});
