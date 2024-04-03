

function menu() {
    document.getElementById("enlaces").classList.toggle("cambio");
    document.getElementById("header").classList.toggle("menuabierto");
    document.getElementById("titulo").classList.toggle("titulocambio");
  };

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
    

  function arriba() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

   