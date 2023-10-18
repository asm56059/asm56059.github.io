// Cada script individualizado por cada libro contiene un objeto con un listado que 
// representa las páginas que contienen exculsivamente texto

let textos = {
  "successfulDrawing": {
    "texto": [
        4,
        5,
        6,
        7,
        10,
        13,
        15,
        18,
        20,
        22,
        72,
        73,
        76,
        82,
        91,
        99,
        105,
        115,
        127,
        150,
        151
    ]
},
  };
  
// En este bucle, establecemos una variable para que recorra el número de páginas de la carpeta 
// y cree un elemento 'img' por cada página teniendo en cuenta que
// si la variable coincide con algun número del objeto mencionado anteriormente, la clase de dicha imagen será 'texto'
// Para terminar busca al div identificado como 'headHands' e inserta ahí las imágenes

for (let i3 = 1; i3 < 151; i3++) {
    let img3 = document.createElement("img");
    img3.src = '../andrewLommis/successfulDrawing/(' + i3 + ').jpg';
    successfulDrawingtexto = textos['successfulDrawing']['texto'];
    if (successfulDrawingtexto.includes(i3)) {
      img3.className = 'texto';
    };
    document.getElementById("successfulDrawing").appendChild(img3);
  }