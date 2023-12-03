# MÓDULO SOBRE LÓGICA, LÓGICA DE PROGRAMACIÓN Y PROGRAMACIÓN CON JAVASCRIPT


---

## Preguntas teóricas


#### 1. ¿Qué es la lógica en el contexto de la programación? Y explicar por qué es importante en el desarrollo web Frontend.



>  la lógica en el desarrollo web frontend, especialmente en el contexto de la programación con JavaScript, es crucial porque permite Interactividad del Usuario, manipulación del DOM, validación de datos, gestión de estado, 
es esencial para crear aplicaciones web interactivas, eficientes y atractivas para los usuarios.


#### 2.Definir el concepto de “algoritmo” y proporcionar un ejemplo sencillo de un algoritmo relacionado con la lógica de programación.
> 
Un algoritmo es un conjunto de pasos definidos para realizar una tarea o resolver un problema. Por ejemplo, un algoritmo simple podría ser encontrar el número mayor en una lista.

#### 3. ¿Qué son estructuras de control en la programación?, ¿Cuáles son los tipos de estructuras de control y las estructuras más comunes de cada tipo?, Describir al menos dos tipos de estructura de control, explicar por qué son importantes y proporcionar ejemplos de cada uno de cómo se utilizan en el desarrollo web Frontend

> Las estructuras de control en programación son mecanismos que gestionan el flujo de ejecución. Dos tipos comunes son:

> **Condicionales (If-Else, Switch-Case): ** Permite ejecutar código basado en condicionales.



```javascript
if (edad >= 18) {
  // código si es mayor de edad
} else {
  // código si es menor de edad
}
```


> **Iterativas (For, While):**Se utilizan para repetir acciones.


```javascript
for (let i = 0; i < 5; i++) {
  // código que se repite 5 veces
}

```

#### 4. Describir cómo se declaraban variables y constantes en JavaScript antes de la introducción de ECMAScript 6 (ES6). Explicar cómo ES6 mejoró la declaración de variables y constantes, y mencionar los problemas que esta mejora resuelve en el desarrollo web Frontend.

Antes de ES6, las variables se declaraban con `var`. ES6 introdujo `let` y `const`, mejorando la claridad del código y evitando problemas de alcance (scope).

#### 5. ¿Cómo se declaran las funciones en JavaScript y cuál es la diferencia entre una declaración de función, una expresión de función y una función de flecha (arrow function)? Proporcionar ejemplos de cada una.

las Funciones se declaran con  `function `. Diferencias clave incluyen la forma en que se declaran y el manejo de  `this `. Ejemplo de declaración, expresión y función de flecha.

> ** Declaración de función:** Se utiliza la palabra clave function.



```javascript
function suma(a, b) {
    return a + b;
}

```
> **Expresión de función:** La función se asigna a una variable.


```javascript
var multiplicar = function(a, b) {
    return a * b;
};

```
> **Función de flecha (Arrow Function):** Introducida en ECMAScript 6 (ES6).

```javascript
var resta = (a, b) => a - b;

```

#### 6. ¿Por qué es necesario el uso de funciones en el desarrollo web Frontend? Enumerar al menos tres razones fundamentales y proporcionar ejemplos de situaciones en las que las funciones son esenciales. Además, mencionar la ventaja de las funciones flecha en el contexto de estas razones.

#
> el uso de funciones en el desarrollo web Frontend es crucial para.

> **Reutilización de código:** Agrupar operaciones similares para utilizarlas en diferentes partes de la aplicación.

> **Organización del código:** Modularizar el código para una gestión más eficiente, como validar formularios, interactuar con la API y actualizar la interfaz de usuario.

> **Manejo de eventos:** Definir funciones para responder a acciones del usuario, como clics y cambios en formularios.
> 
Las funciones flecha ofrecen ventajas adicionales, como una sintaxis concisa y un manejo más predecible del contexto. `this`

#### 7. ¿Cuál es la diferencia entre parámetro y argumento?

> Un parámetro es una variable en la definición de una función, mientras que un argumento es el valor real pasado a la función cuando se llama.

#### 8. Definir el concepto de Callback y proporcionar un ejemplo práctico.

> Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que cierta operación ha sido completada.

```javascript
function fetchData(url, callback) {
    // Lógica para obtener datos
    const data = /* datos obtenidos */;
    callback(data);
}

```

#### 9. ¿Qué es el hoisting en JavaScript y cómo afecta a las variables y funciones? Proporcionar ejemplos de hoisting en declaraciones de variables y funciones.

> El hoisting eleva las declaraciones de variables y funciones al inicio del contexto de ejecución, el hoisting en JavaScript permite usar variables y funciones antes de declararlas en el código, Antes de ES6, las variables declaradas con `var` se izaban, pero no sus asignaciones.

> **Ejemplo con variable var:**

```javascript
console.log(x); // Salida: undefined
var x = 5;
console.log(x); // Salida: 5

```
> 
**Ejemplo con función:**

```javascript
foo(); // Salida: "Hola, mundo!"

function foo() {
  console.log("Hola, mundo!");
}

```
> 
Es importante recordar que el hoisting no funciona igual con `let` y `const`, y acceder a ellas antes de la declaración resulta en un error.

```javascript
console.log(y); // Error: y no está definido
let y = 10;

```

#### 10. Definir brevemente el concepto de objeto en JavaScript y cuál es la visión general sobre este concepto. Indicar, también cómo se declaran estas estructuras de datos.

> En JavaScript, un objeto es una estructura de datos que agrupa datos y funciones relacionadas en un solo contenedor. Estos objetos siguen el paradigma de programación orientada a objetos, lo que significa que pueden tener propiedades y métodos.


>  la visión general de un objeto es la de un conjunto de pares clave-valor, donde las claves son cadenas (o símbolos) que actúan como nombres de propiedades, y los valores pueden ser cualquier tipo de datos.

> La declaración de un objeto se realiza mediante la siguiente sintaxis:

```javascript
let miObjeto = {}; // Objeto vacío

// Objeto con propiedades
let persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};

// Acceder a propiedades y métodos
console.log(persona.nombre); // Imprime "Juan"
persona.saludar(); // Imprime "Hola, soy Juan"

```

#### 11. .¿Qué son propiedades?, y ¿Cuál es la diferencia entre una propiedad y un método en un objeto?

> las propiedades son variables que almacenan datos en un objeto,  pueden contener cualquier tipo de dato, como números, cadenas, otros objetos, etc. 
mientras que los métodos son funciones asociadas al objeto que realizan acciones específicas en ese contexto.

#### 12. .Explicar las dos formas de acceder a una propiedad de objetos e indicar las situaciones en que conviene usar una manera sobre la otra.

> la notación de punto `(objeto.propiedad)` y la notación de corchetes `(objeto['propiedad'])`.

> es útil en situaciones donde el nombre de la propiedad es dinámico o se determina durante la ejecución del programa. La elección entre ambas depende de las necesidades específicas del código que estás escribiendo.

#### 13. .Explicar las dos formas de acceder a una propiedad de objetos e indicar las situaciones en que conviene usar una manera sobre la otra.

> Sí, es posible recorrer las propiedades de un objeto, Una forma común de hacerlo es mediante un bucle for...in. 

```javascript
let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Ejemploville"
};

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}

```
#### 14. ¿Por qué son útiles los objetos en la programación web y qué tipos de datos pueden almacenar?



> Los objetos son útiles para organizar datos y comportamientos relacionados, facilitando el mantenimiento del código. Pueden almacenar diversos tipos de datos como números, cadenas, funciones y otros objetos.

#### 15. ¿Qué es un array en JavaScript y por qué son esenciales?
> Un array es una estructura de datos que almacena elementos de manera secuencial. Es esencial para manejar conjuntos de datos.


#### 16. ¿Cómo acceder a un elemento dentro de un array? Explicar con un ejemplo.

> puedes acceder a un elemento dentro de un array utilizando su índice. El índice es la posición del elemento en el array, y generalmente comienza desde cero. ejemplo `miArray[0]`

```javascript
let miArray = [10, 20, 30, 40, 50];
let elemento = miArray[2]; // Acceder al tercer elemento (índice 2)
console.log(elemento); // Salida: 30

```

#### 17. Mencionar al menos tres funciones de arrays y describir su utilidad en la programación web.

> Ejemplos incluyen "map()" para transformar datos, "filter()" para filtrar elementos y "reduce()" para combinar valores.

#### 18. Proporcionar un ejemplo de cómo se utiliza una función de array para transformar y filtrar datos en un array

```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
const evenNumbers = numbers.filter(num => num % 2 === 0);

```






# MÓDULO SOBRE HTML, CSS Y RESPONSIVE DESIGN

---

## Preguntas teóricas

#### 1. ¿Qué significa HTML y cuál es su función en el desarrollo web?

> HTML (Lenguaje de Marcado de Hipertexto): HTML es un lenguaje de marcado que se utiliza para estructurar el contenido en la web. Su función principal es definir la estructura y el significado de los elementos en una página, como encabezados, párrafos, enlaces, imágenes, entre otros.

#### 2. ¿Cuál es la estructura básica de un documento HTML? Describir las etiquetas esenciales.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Título de la Página</title>
  </head>
  <body>
    <h1>Encabezado Principal</h1>
    <p>Párrafo de texto.</p>
  </body>
</html>
```

#### 3. Significado y Propósito de CSS en Desarrollo Web:

> CSS, o Hojas de Estilo en Cascada, tiene el propósito de dar estilo y presentación al contenido HTML, permitiendo el diseño y la apariencia atractiva de una página web.

#### 4. Selectores CSS y Especificidad:

> Selectores CSS son patrones que permiten seleccionar y aplicar estilos a elementos HTML. Los principales tipos incluyen selectores de tipo, de clase y de ID.

> Especificidad en CSS es un concepto que determina qué estilo prevalece en caso de conflictos. Se mide en términos de cuán específico es un selector, y su importancia se refleja en el peso de la regla de estilo.

###### Ejemplos de especificidad:

> **Selectores de tipo vs. Clases:** Las clases son más específicas que los selectores de tipo.
> **Selectores de ID:** Tienen más peso que clases o tipos.
> **Importancia del orden:** En igualdad de especificidad, el orden de las reglas en el código determina cuál se aplica.

#### 5. Estilos en Línea, Internos y Externos en CSS.

> Estilos en línea se aplican directamente a un elemento, estilos internos se definen en el encabezado del documento, y estilos externos se almacenan en archivos separados. Se recomienda el uso de estilos externos para facilitar el mantenimiento y la consistencia.

> **En línea:** Dentro del atributo style.
> **Internos:** Dentro de la etiqueta style en el head.
> **Externos:** En un archivo separado vinculado con link.
> ** Recomendado:** Estilos externos para mantener la separación de preocupaciones.

#### 6. ¿Qué es flexbox y cómo se utiliza para el diseño de páginas web?

> Flexbox es un modelo de diseño que permite crear diseños flexibles y eficientes en una sola dimensión, ya sea horizontal o vertical.

#### 7. Explicar cómo se emplean las propiedades flexbox y explicar la función de las principales propiedades en la creación de diseños flexibles

> Principales propiedades como `display`, `flex-direction`, y `justify-content` controlan la disposición y alineación de elementos en un contenedor flex.

#### 8. . ¿Qué es CSS Grid Layout y en qué se diferencia de flexbox?

> A diferencia de Flexbox, CSS Grid Layout se centra en el diseño de cuadrículas bidimensionales, proporcionando mayor control en el diseño de filas y columnas.

#### 9. Proporcionar un ejemplo de cómo crear una cuadrícula sencilla con CSS Grid.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

#### 10. ¿Qué significa el diseño responsivo en el contexto del desarrollo web?

> El diseño responsivo se adapta a diferentes dispositivos y tamaños de pantalla, asegurando una experiencia consistente para los usuarios.

#### 11. Enumerar al menos tres técnicas o estrategias utilizadas para lograr el diseño responsivo en una página web.

> **Uso de Media Queries.
> Unidades de medida flexibles (porcentajes, vw, vh).
> Imágenes fluidas con max-width: 100%;.**

# MÓDULO SOBRE DOM E INTERACCIÓN CON EL DOM

---

## Preguntas teóricas

#### 1. ¿Qué es el DOM en el contexto de la programación web?

> El DOM es una representación en memoria de la estructura de un documento HTML. Proporciona una interfaz para que los programas scripts manipulen dinámicamente el contenido, estructura y estilo de un documento.

#### 2. ¿Cuál es la diferencia entre el DOM y el HTML en una página web?

> El HTML es el lenguaje de marcado que define la estructura y contenido de una página web. El DOM, en cambio, es una interfaz de programación que representa esa estructura como un árbol de objetos, permitiendo a los scripts modificar dinámicamente la página.

#### 3. ¿Por qué es importante entender y manipular el DOM en el desarrollo web Frontend?

> Es esencial para realizar cambios dinámicos en una página web sin recargarla. tambien Permite actualizaciones en tiempo real, mejorando la usabilidad.

#### 4. ¿Qué son los eventos del DOM y cuál es su función en una página web?

> Los eventos del DOM son interacciones del usuario o cambios en el estado de la página. Su función es permitir la ejecución de scripts en respuesta a estas interacciones, como clics, teclas presionadas o cargas de página.

#### 5. Proporcionar ejemplos de eventos prácticos y comunes, como “click”, “submit” y “load o DOMContentLoad”

###### a. Click (clic):

```javascript
document.getElementById("miBoton").addEventListener("click", function () {
  alert("¡Haz hecho clic!");
});
```

###### b. Submit (envío de formulario):

```javascript
document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    alert("Formulario enviado");
  });
```

###### c. Load (carga de página):

```javascript
window.addEventListener("load", function () {
  alert("La página ha terminado de cargar");
});
```

###### d. DOMContentLoaded (contenido del DOM cargado):

```javascript
document.addEventListener("DOMContentLoaded", function () {
  alert("El contenido del DOM ha sido cargado");
});
```

#### 6. ¿Por qué es importante manejar eventos en la interacción usuario-web y cómo se añaden controladores de eventos al DOM?

> Manejar eventos en la interacción usuario-web es esencial para la interactividad y la respuesta inmediata, mejorando la experiencia del usuario al permitir acciones dinámicas y en tiempo real.

> Utiliza métodos como getElementById o querySelector.
> Emplea addEventListener para vincular funciones a eventos específicos, como clic o cambio.
> Ejemplo Básico en JavaScript:

    document.getElementById('miBoton').addEventListener('click', () => alert('¡Hola, mundo!'));

#### 7. Describir al menos tres métodos para seleccionar elementos del DOM en JavaScript.

> Tres métodos comunes son:

> getElementById: Selecciona por ID.
> getElementsByClassName: Selecciona por clase.
> querySelector: Utiliza selectores CSS para selección precisa
> Crear y Agregar Elemento al DOM:
> Se usa document.createElement para crear un nuevo elemento y appendChild para agregarlo al DOM.

#### 9. Importancia de la Manipulación del DOM:

###### La respuesta en la pregunta 6 de este módulo.> La respuesta en la pregunta 6 de este módulo.

####10. Explicar brevemente los conceptos “event bubbling” y “event delegation” en el contexto de eventos del DOM.:

> "Event bubbling" es la propagación de eventos desde el elemento objetivo hasta el ancestro. "Event delegation" es asignar un único controlador de eventos al ancestro, aprovechando la propagación para manejar eventos en varios elementos hijos eficientemente. Estos conceptos optimizan el rendimiento en la gestión de eventos del DOM.

#### 11. .¿Por qué son relevantes los conceptos “event bubbling” y “event delegation” en la gestión de eventos en páginas web con múltiples elementos interactivos?

> Estos conceptos son esenciales en la gestión de eventos en páginas con múltiples elementos interactivos debido a su eficiencia. "Event bubbling" permite la propagación de eventos desde el elemento objetivo hasta el ancestro, simplificando la implementación de controladores. "Event delegation" optimiza aún más al asignar un solo controlador al ancestro, lo que resulta crucial en páginas con muchos elementos, reduciendo la complejidad y mejorando el rendimiento al manejar eventos de manera más eficiente. Estos enfoques son fundamentales para construir aplicaciones web interactivas y escalables.

# MÓDULO SOBRE (STORAGE, PROMESAS, ASINCRONÍAS Y PETICIONES HTTPS) 

---

## Preguntas teóricas

#### 1. Definir brevemente el concepto de localStorage y sessionStorage.

> son dos objetos de almacenamiento en el navegador que permiten a las aplicaciones web almacenar datos de manera persistente o de sesión, respectivamente.

#### 2. Describir las diferencias claves entre localStorage y sessionStorage.

> La diferencia principal radica en la duración del almacenamiento. localStorage persiste incluso después de cerrar el navegador, mientras que sessionStorage se borra al cerrar la sesión del navegador.

#### 3. ¿Por qué son útiles para almacenar datos en el navegador y cuál es su límite de capacidad?

> Son útiles para almacenar datos localmente en el navegador, evitando la necesidad de hacer solicitudes al servidor para cada interacción. El límite de capacidad varía entre navegadores pero suele ser al menos 5 MB.

#### 4. ¿Qué son las promesas en JavaScript y para qué se utilizan en el desarrollo web?

> Las promesas en javascripts nos sirve para hacer una operación o petición asincrónica, utilizan métodos como .then() y .cath() o escaso de utilizar async y await que nos facilitando el manejo de operaciones que toman tiempo.

#### 5. Explica el concepto de asincronía en programación y cómo las promesas ayudan a manejar operaciones asincrónicas.

> La asincronía en programación significa que las operaciones no bloquean la ejecución del programa. Las promesas gestionan esto permitiendo un código más limpio y comprensible.

#### 6. Proporciona un ejemplo de cómo se utiliza una promesa para realizar una operación asincrónica, como una solicitud de red.

```javascript
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
```

#### 7. ¿Qué es JSON Server y cómo se utiliza en el desarrollo web?

> JSON servir es como simular una API REST falsa en el archivo db.json nos proporciona un backend y es útil en el desarrollo
> cuando no tiene un servidor real o necesitas un complejo para tus necesidades de prueba

#### 8. ¿Por qué es útil simular una API REST falsa con JSON Server en el desarrollo frontend?

> Facilita el desarrollo frontend sin depender de una API real, Permite probar interacciones antes de implementar la lógica del servidor.

#### 9. ¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().catch() y las palabras claves async/await?

> .then().catch(): es considerado mas legible y facil de entender se utiliza en caso donde hay varias operaciones asincronicas .

> async/await: mejora la legibilidad, estructura el código como síncrono.

#### 10. Proporciona un ejemplo de cómo configurar una API falsa con JSON Server y realizar solicitudes (GET, POST, PUT, PATCH y DELETE) a través de ella.

> 1. Configuración Rápida con JSON Server.
> 2. Instalación de JSON Server: `npm install -g json-server`.
> 3. Crea db.json:

```javascript
> {
  "posts": [
    { "id": 1, "title": "Post 1" },
    { "id": 2, "title": "Post 2" }
  ]
}
```

> 4. Ejemplo de Solicitudes (JavaScript y Fetch).

    // Ejemplo GET
        fetch("http://localhost:3000/posts")
          .then((response) => response.json())
          .then((data) => console.log("GET:", data))
          .catch((error) => console.error("Error:", error));




    // Ejemplo POST
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "New Post" }),
    })
      .then((response) => response.json())
      .then((data) => console.log("POST:", data))
      .catch((error) => console.error("Error:", error));

    // Ejemplo PUT
    fetch("http://localhost:3000/posts/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Updated Post" }),
    })
      .then((response) => response.json())
      .then((data) => console.log("PUT:", data))
      .catch((error) => console.error("Error:", error));

    // Ejemplo PATCH
    fetch("http://localhost:3000/posts/2", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Partial Update" }),
    })
      .then((response) => response.json())
      .then((data) => console.log("PATCH:", data))
      .catch((error) => console.error("Error:", error));

    // Ejemplo DELETE
    fetch("http://localhost:3000/posts/1", { method: "DELETE" })
      .then((response) =>
        console.log("DELETE:", response.status === 200 ? "Success" : "Failed")
      )
      .catch((error) => console.error("Error:", error));

#### 11. Describe las diferencias entre Fetch y Axios como métodos para realizar solicitudes HTTP en JavaScript.

> fetch y axios son dos formas comunes de realizar solicitud HTTP
> la diferencia está en que, Fetch es nativo de JavaScript, Axios simplifica las solicitudes y manejo de errores, cabe aclarar que la implementación depende 
> de la preferencia del desarrollador

#### 12. ¿Por qué es importante considerar las peticiones HTTP en aplicaciones web modernas?

> facilitan la comunicación eficiente entre el cliente y el servidor, permiten la actualización dinámica de datos, posibilitan la integración con servicios externos mediante APIs, y son fundamentales para operaciones asincrónicas, seguridad, rendimiento y escalabilidad.

#### 13. Proporciona ejemplos de cómo se utilizan Fetch y Axios para realizar solicitudes GET y POST

> repuesta modulo 4 pregunta 10.

#### 14. Explica la importancia del manejo de errores al trabajar con promesas en el desarrollo web.

> el manejo de errores es crucial para prevenir fallos inesperados, mejorar la experiencia del usuario, facilitar la identificación y corrección de problemas, y evitar la propagación de errores no controlados.

#### 15. Describe cómo se manejan los errores en las promesas, incluyendo el uso de catch.

    miPromesa.then(resultado => {
      // Manejo de la resolución exitosa
    }).catch(error => {
      // Manejo de errores
    });

#### 17. Proporciona un ejemplo de cómo se puede manejar un error en una promesa al realizar una solicitud de red.

    const url = 'https://api.example.com/data';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud de red');
        }
        return response.json();
      })
      .then(data => {
        // Manejar la respuesta exitosa
        console.log('Datos obtenidos:', data);
      })
      .catch(error => {
        // Manejar el error de la solicitud de red
        console.error('Error de red:', error.message);
      });
