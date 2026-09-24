# Actividad 2 - Librería utileria.js

## Portada

**Nombre:** Sandoval Reyes Miguel  
**Materia:** Programación Web  
**Proyecto:** Librería `utileria.js`

Esta librería reúne funciones de validación y apoyo para formularios. Permite validar correos, nombres, longitud de números, edad, mayoría de edad y contraseñas. También incluye funciones adicionales para validar teléfonos y limpiar espacios de un texto.

## Instalación

Para utilizar la librería se debe enlazar el archivo JavaScript en el HTML:

```html
<script src="utileria.js"></script>
```

En este proyecto el archivo se encuentra dentro de la carpeta `js`, por lo que se utiliza:

```html
<script src="js/utileria.js"></script>
```

## Funciones obligatorias

### validarCorreo(correo)

Valida que un correo tenga un formato básico correcto.

```javascript
let resultado = validarCorreo("usuario@correo.com");
console.log(resultado);
```

### soloLetras(texto)

Valida que un texto contenga solamente letras, espacios y vocales acentuadas.

```javascript
let resultado = soloLetras("Miguel Sandoval");
console.log(resultado);
```

### validarLongitud(numero, maxLongitud)

Valida que un número no supere la longitud máxima indicada.

```javascript
let resultado = validarLongitud("9511234567", 10);
console.log(resultado);
```

### calcularEdad(fechaNacimiento)

Calcula la edad de una persona a partir de su fecha de nacimiento.

```javascript
let edad = calcularEdad("2005-08-15");
console.log(edad);
```

### esMayorDeEdad(fechaNacimiento)

Valida si una persona tiene 18 años o más.

```javascript
let resultado = esMayorDeEdad("2005-08-15");
console.log(resultado);
```

### validarPassword(password)

Valida que una contraseña tenga mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.

```javascript
let resultado = validarPassword("Clave123!");
console.log(resultado);
```

## Funciones adicionales

### validarTelefono(telefono)

Valida que un número telefónico tenga exactamente 10 dígitos.

```javascript
let resultado = validarTelefono("9511234567");
console.log(resultado);
```

### limpiarEspacios(texto)

Quita los espacios que se encuentren al inicio y al final de un texto.

```javascript
let texto = limpiarEspacios("   Miguel Sandoval   ");
console.log(texto);
```

## Integración

El archivo `index.html` contiene un formulario que utiliza las funciones de validación de la librería.

También incluye una ventana modal que muestra la edad calculada de la persona.

El archivo `login.html` utiliza las funciones:

```javascript
validarCorreo();
validarPassword();
```

para validar el correo y la contraseña ingresados.

## Estructura del proyecto

```text
/utileria
├── README.md
├── index.html
├── login.html
├── css/
│   └── styles.css
├── js/
│   └── utileria.js
└── img/
```

## Capturas de pantalla

## Video


## GitHub Pages




## Repositorio




