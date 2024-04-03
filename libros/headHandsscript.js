
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


for (let i4 = 1; i4 < 141; i4++) {
    let img4 = document.createElement("img");
  
    img4.src = '../andrewLommis/headHands/(' + i4 + ').jpg';
    headHandstexto = textos['headHands']['texto'];
    if (headHandstexto.includes(i4)) {
      img4.className = 'texto';
    }
    document.getElementById("headHands").appendChild(img4);
  }