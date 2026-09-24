# Actividad 2 - Librería utileria.js

## Portada

**Nombre:** Sandoval Reyes Miguel  
**Materia:** Programación Web  
**Proyecto:** Librería utileria.js

La librería resuelve validaciones comunes para formularios y login. Permite validar correos, nombres, longitud de números, edad, mayoría de edad y contraseñas. También incluye dos funciones adicionales para validar teléfonos y limpiar espacios de un texto.

## Instalación

Para usar la librería se agrega el archivo con una etiqueta `script`.

```html
<script src="utileria.js"></script>
```

En este proyecto el archivo se encuentra dentro de la carpeta `js`, por lo que se utiliza:

```html
<script src="js/utileria.js"></script>
```

## Funciones obligatorias

### validarCorreo(correo)

Valida el formato de un correo electrónico y devuelve `true` o `false`.

```javascript
let resultado = validarCorreo("usuario@correo.com");
console.log(resultado);
```

### soloLetras(texto)

Valida que el texto contenga solamente letras y espacios. También acepta vocales acentuadas.

```javascript
let resultado = soloLetras("Miguel Sandoval");
console.log(resultado);
```

### validarLongitud(numero, maxLongitud)

Valida que el número no supere la longitud máxima indicada.

```javascript
let resultado = validarLongitud("9511234567", 10);
console.log(resultado);
```

### calcularEdad(fechaNacimiento)

Calcula la edad a partir de una fecha de nacimiento y devuelve un número entero.

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

Valida que un teléfono tenga exactamente 10 dígitos.

```javascript
let resultado = validarTelefono("9511234567");
console.log(resultado);
```

### limpiarEspacios(texto)

Quita espacios al inicio y al final y reduce espacios repetidos dentro del texto.

```javascript
let texto = limpiarEspacios("  Miguel   Sandoval  ");
console.log(texto);
```

## Integración

`index.html` contiene el formulario que utiliza las validaciones y una ventana modal que muestra la edad calculada.

`login.html` utiliza `validarCorreo()` y `validarPassword()`.

## Capturas de pantalla

Coloca las capturas dentro de la carpeta `img`.

```markdown
![Consola](img/consola.png)
![Formulario](img/formulario.png)
![Login](img/login.png)
```

## Video



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
