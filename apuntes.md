# JavaScript

- JavaScript es un lenguaje de programación multiparadigma
    - multiparadigma: "múltiples paradigmas"
    - paradigma: diversas de formar de aproximarse a un problema

- Vamos a trabajar con archivos .js
- Para cargar un archivo JS:

```html
<script src="hola.js"></script>
```

Siempre al final de `<body>`.

-------------------------------------

# Haciendo interacciones

Botón con evento "onclick" usando JavaScript de forma directa:

```html
<button onclick="alert('Me hiciste click');">Haceme click</button>
```

Botón con evento "onclick" con invocación de función JavaScript

```html
<button onclick="informarClick()">Haceme click</button>
```

-----
Ejemplo de función:

```js
function informarClick() {
    alert('Me hiciste click');    
}

// Con parametros
function informarClick(mensaje) {
    alert(mensaje);    
}
```

------------


# Variable

A un nombre cuyo valor puede ser re-definido.

# Constante

A un nombre cuyo valor *no* puede ser re-definido.


```js
// Variable.
let colorFavorito = "rojo";
colorFavorito = "verde";

// Constante
const colorFavorito = "rojo";
colorFavorito = "verde"; // Error!
```

------------

# Tipos de datos

- Texto (string)
- Numéricas (number)
- Booleanas (boolean) (verdadero/falso, true/false)
- Listas (arrays) (vectores)
- Objetos (objects) (colección de claves y valores)
- Fechas (dates)

```
     null => vacío
undefined => no definido
      NaN => not a number, no es un número
```

# Operadores aritméticos

```
+       adición     concatenación
-       sustracción
*       multiplicación
/       división
```

# Operadores lógicos

```
!       negación (NO)
&&      conjunción (Y)
||      disyunción (O)
```