
let textos = {
  "eyePainter": {
    "texto": [
        1,
        2,
        3,
        4,
        5,
        9,
        10,
        11,
        12,
        14,
        15,
        18,
        21,
        22,
        25,
        26,
        27,
        31,
        38,
        43,
        44,
        46,
        49,
        51,
        52,
        53,
        54,
        56,
        60,
        61,
        62,
        65,
        71,
        14,
        15,
        18,
        82,
        85,
        89,
        91,
        92,
        93,
        94,
        95,
        99,
        100,
        101,
        103,
        106,
        107,
        108,
        109,
        111,
        115,
        116,
        120,
        121,
        126,
        128,
        131,
        132,
        134,
        135,
        136,
        137,
        139,
        141
    ]
},
  };

for (let i7 = 1; i7 < 141; i7++) {
    let img7 = document.createElement("img");
    img7.src = '../andrewLommis/eyePainter/(' + i7 + ').jpg';
    eyePaintertexto = textos['eyePainter']['texto'];
    if (eyePaintertexto.includes(i7)) {
      img7.className = 'texto';
    }
    document.getElementById("eyePainter").appendChild(img7);
  }