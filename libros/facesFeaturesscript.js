
let textos = {
  "facesFeatures": {
    "texto": [
        2,
        3
    ]
},
  };
  

  for (let i6 = 1; i6 < 34; i6++) {
    let img6 = document.createElement("img");
    img6.src = '../andrewLommis/facesFeatures/(' + i6 + ').jpg';
    facesFeaturestexto = textos['facesFeatures']['texto'];
    if (facesFeaturestexto.includes(i6)) {
      img6.className = 'texto';
    }
    document.getElementById("facesFeatures").appendChild(img6);
  }
