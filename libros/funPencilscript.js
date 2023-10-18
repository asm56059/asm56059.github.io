// Cada script individualizado por cada libro contiene un objeto con un listado que 
// representa las páginas que contienen exculsivamente texto


let textos = {
  "funPencil": {
    "texto": [
        2,
        3,
        4,
        5,
        7,
        10,
        11,
        115,
        119,
        121
    ]
},
  };
  
  // En este bucle, establecemos una variable para que recorra el número de páginas de la carpeta 
// y cree un elemento 'img' por cada página teniendo en cuenta que
// si la variable coincide con algun número del objeto mencionado anteriormente, la clase de dicha imagen será 'texto'
// Para terminar busca al d

for (let i5 = 1; i5 < 122; i5++) {
    let img5 = document.createElement("img");
    img5.src = '../andrewLommis/funPencil/(' + i5 + ').jpg';
    funPenciltexto = textos['funPencil']['texto'];
    if (funPenciltexto.includes(i5)) {
      img5.className = 'texto';
    }
    document.getElementById("funPencil").appendChild(img5);
  }