// Cada script individualizado por cada libro contiene un objeto con un listado que 
// representa las páginas que contienen exculsivamente texto

let textos = {
  "facesFeatures": {
    "texto": [
        2,
        3
    ]
},
  };
  
    // En este bucle, establecemos una variable para que recorra el número de páginas de la carpeta 
// y cree un elemento 'img' por cada página teniendo en cuenta que
// si la variable coincide con algun número del objeto mencionado anteriormente, la clase de dicha imagen será 'texto'
// Para terminar busca al div identificado como 'headHands' e inserta ahí las imágenes

  for (let i6 = 1; i6 < 34; i6++) {
    let img6 = document.createElement("img");
    img6.src = '../andrewLommis/facesFeatures/(' + i6 + ').jpg';
    facesFeaturestexto = textos['facesFeatures']['texto'];
    if (facesFeaturestexto.includes(i6)) {
      img6.className = 'texto';
    }
    document.getElementById("facesFeatures").appendChild(img6);
  }
