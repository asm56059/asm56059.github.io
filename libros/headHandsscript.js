
// Cada script individualizado por cada libro contiene un objeto con un listado que 
// representa las páginas que contienen exculsivamente texto

let textos = {
  "headHands": {
    "texto": [
        5,
        6,
        7,
        9,
        12,
        14,
        15,
        18,
        19,
        26,
        27,
        36,
        40,
        44,
        46,
        47,
        68,
        69,
        82,
        93,
        104,
        113,
        120,
        121,
        139,
        140
    ]
},
  }

// En este bucle, establecemos una variable para que recorra el número de páginas de la carpeta 
// y cree un elemento 'img' por cada página teniendo en cuenta que
// si la variable coincide con algun número del objeto mencionado anteriormente, la clase de dicha imagen será 'texto'
// Para terminar busca al div identificado como 'headHands' e inserta ahí las imágenes

for (let i4 = 1; i4 < 141; i4++) {
    let img4 = document.createElement("img");
  
    img4.src = '../andrewLommis/headHands/(' + i4 + ').jpg';
    headHandstexto = textos['headHands']['texto'];
    if (headHandstexto.includes(i4)) {
      img4.className = 'texto';
    }
    document.getElementById("headHands").appendChild(img4);
  }