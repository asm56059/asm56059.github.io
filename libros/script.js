
// Este script previamente duplicado en cada script de cada página
// es un conjunto de funciones que comparten todas las páginas de libros
// por lo que para un mejor control saqué de cada archivo y los unifiqué aquí



// Está compuesto por los botones de la página y sus funcionalidades:



// la funcion 'menu()' (solo válida para movil) encontramos un boton con el listado de libros 
// del conjunto y se basa en la propiedad 'toggle', buscando a un elemento 
// por su Id aplica o retira la clase especificada y lo uso tres veces:

//  1- 'enlaces' tiene de base aplicada la clase 'nav' con un display:none; que cambia cuando le añadimos la clase 'cambio' a display:block,
//  manteniendo los enlaces ocultos hasta que se pulse el boton.
//  2-bajo el mismo concepto, le añado una clase al header que contiene un border bottom del tamaño de los enlaces, 
//  para empujar hacia abajo toda la página y que el menu desplegado no la tape.
//  3- cogemos el titulo y le añadimos la clase que le indica su cambio de posicionamiento en el grid para que no se quede
//  en la mitad de la página cuando desplegamos el menu.

function menu() {
    document.getElementById("enlaces").classList.toggle("cambio");
    document.getElementById("header").classList.toggle("menuabierto");
    document.getElementById("titulo").classList.toggle("titulocambio");
  };

  // El siguiente bloque es usado para los botones de una columna y las columnas que de la pantalla,
  // para ello usamos el mismo concepto usado anteriormente y modificamos las clases segun se clicke el boton, 
  // se explicaran las clases en el documento CSS.
  // para un correcto funcionamiento interactuamos en la misma funcion con los dos botones a la vez para lograr
  // que cuando uno se active, el otro aparezca como desactivado.

  let main = document.getElementById("main");
  function uno() {
    if (main.className = 'tres') {
      main.classList.remove("tres");
      main.classList.toggle("uno");
      document.getElementById('tresc').classList.remove('botonactivo');
      document.getElementById('unoc').classList.add('botonactivo');
    } else {
      main.classList.toggle("uno");
    }
  };
  function tres() {
    if (main.className = 'uno') {
      main.classList.remove("uno");
      main.classList.toggle("tres");
      document.getElementById('unoc').classList.remove('botonactivo');
      document.getElementById('tresc').classList.add('botonactivo');
    } else {
      main.classList.toggle("tres");
    }
  };
  
// En la siguiente funcion le damos forma al boton 'texto', en el que aprovechamos la clase previamente aplicada
// a la hora de generar las imagenes (ver script propio de cada libro) para, usando la misma tecnica de display:None;
// y, en este caso, display:inline; para visualizar o no dichas paginas a gusto del usuario
// para ello tenemos que solucionar algo, esto:
//    let imagenhidden = document.getElementsByTagName("img");
//      nos devuelve un array con las imagenes, por lo que tenemos que crear una variable (im)
//      para recorrer dicho array y asi poder aplicar o no las clases correspondientes.

// Una vez hecho esto añadimos condiciones para saber que clase tiene aplicada en ese momento tanto la imagen 
//    (para visualizarla o no)
// Como el botón
//    (para cambiarle el estado visual y saber si esta activo o no)
// Para este último, estableciendo que la clase texto sera la que contengan las imagenes al cargar por primera vez
// la página y por lo tanto seran visibles (display: inline;), la propiedad 'innerHTML' (que reemplaza la sintaxis
// del elemento HTML por una nueva) nos ayuda a decir claramente en qué momento se visualiza con o sin texto.


  function texto() {
    let imagenhidden = document.getElementsByTagName("img");
    for (let im = 1; im < imagenhidden.length; im++) {
      let imij = imagenhidden[im];
      if (imij.className == 'texto') {
        imij.classList.remove('texto');
        imij.classList.toggle("textohidden");
        document.getElementById('botontexto').classList.add('botonactivo');
        document.getElementById("botontexto").innerHTML = "Sin Texto";
      } else if (imij.className == 'textohidden') {
        imij.classList.remove("textohidden");
        imij.classList.toggle("texto");
        document.getElementById('botontexto').classList.remove('botonactivo');
        document.getElementById("botontexto").innerHTML = "Con Texto";
      }
    }
  };
    
  // Para el boton que hace volver al inicio de la página, usamos la propiedad 'scrollTop'
  // despues de una pequeña busqueda y para que funcione en diferentes navegadores lo escribimos de dos formas:

  function arriba() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    // Todas las funciones anteriores son llamadas desde el archivo .html con el evento 'onClick()'
    // en el elemento correspondiente.