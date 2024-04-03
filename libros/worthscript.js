

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

for (let i1 = 1; i1 < 198; i1++) {
  let img1 = document.createElement("img");
  img1.src = '../andrewLommis/worth/(' + i1 + ').jpg';
  worthtexto = textos['worth']['texto'];
  if (worthtexto.includes(i1)) {
    img1.className = 'texto';
  };
  document.getElementById("worth").appendChild(img1);
}