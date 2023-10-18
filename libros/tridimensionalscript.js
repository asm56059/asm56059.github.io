// Cada script individualizado por cada libro contiene un objeto con un listado que 
// representa las páginas que contienen exculsivamente texto

let textos = {
  "tridimensional": {
    "texto": [
        2,
        4,
        5,
        7,
        8,
        9,
        10,
        12,
        13,
        14,
        15,
        18,
        21,
        23,
        26,
        28,
        30,
        80,
        81,
        84,
        90,
        100,
        108,
        114,
        124,
        136,
        163
    ]
},
  };
  
// En este bucle, establecemos una variable para que recorra el número de páginas de la carpeta 
// y cree un elemento 'img' por cada página teniendo en cuenta que
// si la variable coincide con algun número del objeto mencionado anteriormente, la clase de dicha imagen será 'texto'
// Para terminar busca al div identificado como 'headHands' e inserta ahí las imágenes

for (let i2 = 1; i2 < 163; i2++) {
    let img2 = document.createElement("img");
    img2.src = '../andrewLommis/tridimensional/(' + i2 + ').jpg';
    tridimensionaltexto = textos['tridimensional']['texto'];
    if (tridimensionaltexto.includes(i2)) {
      img2.className = 'texto';
    };
    document.getElementById("tridimensional").appendChild(img2);
  }