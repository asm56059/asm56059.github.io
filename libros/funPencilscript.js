

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
  

for (let i5 = 1; i5 < 122; i5++) {
    let img5 = document.createElement("img");
    img5.src = '../andrewLommis/funPencil/(' + i5 + ').jpg';
    funPenciltexto = textos['funPencil']['texto'];
    if (funPenciltexto.includes(i5)) {
      img5.className = 'texto';
    }
    document.getElementById("funPencil").appendChild(img5);
  }