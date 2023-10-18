// Cada script individualizado por cada libro contiene un objeto con un listado que 
// representa las páginas que contienen exculsivamente texto


let textos = {
  "worth": {
    "texto": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      15,
      16,
      17,
      18,
      19,
      37,
      51,
      52,
      62,
      63,
      76,
      85,
      86,
      95,
      97,
      107,
      109,
      110,
      111,
      121,
      123,
      131,
      137,
      139,
      151,
      153,
      163,
      165,
      181,
      183,
      191,
      193,
      194,
      195,
      196,
      197,
      198
    ]
  },
}

// En este bucle, establecemos una variable para que recorra el número de páginas de la carpeta 
// y cree un elemento 'img' por cada página teniendo en cuenta que
// si la variable coincide con algun número del objeto mencionado anteriormente, la clase de dicha imagen será 'texto'
// Para terminar busca al div identificado como 'headHands' e inserta ahí las imágenes

for (let i1 = 1; i1 < 198; i1++) {
  let img1 = document.createElement("img");
  img1.src = '../andrewLommis/worth/(' + i1 + ').jpg';
  worthtexto = textos['worth']['texto'];
  if (worthtexto.includes(i1)) {
    img1.className = 'texto';
  };
  document.getElementById("worth").appendChild(img1);
}