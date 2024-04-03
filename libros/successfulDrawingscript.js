
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
  

for (let i3 = 1; i3 < 151; i3++) {
    let img3 = document.createElement("img");
    img3.src = '../andrewLommis/successfulDrawing/(' + i3 + ').jpg';
    successfulDrawingtexto = textos['successfulDrawing']['texto'];
    if (successfulDrawingtexto.includes(i3)) {
      img3.className = 'texto';
    };
    document.getElementById("successfulDrawing").appendChild(img3);
  }