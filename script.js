
//  function arranque() {
//   let textos = {
//     "worth": {
//         "texto": [
//             2,
//             3,
//             4,
//             5,
//             6,
//             7,
//             8,
//             9,
//             10,
//             11,
//             12,
//             13,
//             15,
//             16,
//             17,
//             18,
//             19,
//             37,
//             51,
//             52,
//             62,
//             63,
//             76,
//             85,
//             86,
//             95,
//             97,
//             107,
//             109,
//             110,
//             111,
//             121,
//             123,
//             131,
//             137,
//             139,
//             151,
//             153,
//             163,
//             165,
//             181,
//             183,
//             191,
//             193,
//             194,
//             195,
//             196,
//             197,
//             198
//         ]
//       },
//       "tridimensional": {
//         "texto": [
//             2,
//             4,
//             5,
//             7,
//             8,
//             9,
//             10,
//             12,
//             13,
//             14,
//             15,
//             18,
//             21,
//             23,
//             26,
//             28,
//             30,
//             80,
//             81,
//             84,
//             90,
//             100,
//             108,
//             114,
//             124,
//             136,
//             163
//         ]
//       },
//       "successfulDrawing": {
//         "texto": [
//            4,
//            5,
//            6,
//            7,
//            10,
//            13,
//            15,
//            18,
//            20,
//            22,
//            72,
//            73,
//            76,
//            82,
//            91,
//            99,
//            105,
//            115,
//            127,
//            150,
//            151
//         ]
//       },
//       "headHands": {
//         "texto": [
//            5,
//            6,
//            7,
//            9,
//            12,
//            14,
//            15,
//            18,
//            19,
//            26,
//            27,
//            36,
//            40,
//            44,
//            46,
//            47,
//            68,
//            69,
//            82,
//            93,
//            104,
//            113,
//            120,
//            121,
//            139,
//            140
//         ]
//       },
//       "funPencil": {
//         "texto": [
//            2,
//            3,
//            4,
//            5,
//            7,
//            10,
//            11,
//            115,
//            119,
//            121
//         ]
//       },
//       "facesFeatures": {
//         "texto": [
//            2,
//            3
//         ]
//       },
//       "eyePainter": {
//         "texto": [
//            1,
//            2,
//            3,
//            4,
//            5,
//            9,
//            10,
//            11,
//            12,
//            14,
//            15,
//            18,
//            21,
//            22,
//            25,
//            26,
//            27,
//            31,
//            38,
//            43,
//            44,
//            46,
//            49,
//            51,
//            52,
//            53,
//            54,
//            56,
//            60,
//            61,
//            62,
//            65,
//            71,
//            14,
//            15,
//            18,
//            82,
//            85,
//            89,
//            91,
//            92,
//            93,
//            94,
//            95,
//            99,
//            100,
//            101,
//            103,
//            106,
//            107,
//            108,
//            109,
//            111,
//            115,
//            116,
//            120,
//            121,
//            126,
//            128,
//            131,
//            132,
//            134,
//            135,
//            136,
//            137,
//            139,
//            141
//         ]
//       },
//       "creativeIlustration": {
//         "texto": [
//            3,
//            4,
//            5,
//            6,
//            7,
//            8,
//            9,
//            10,
//            11,
//            12,
//            13,
//            14,
//            15,
//            16,
//            17,
//            35,
//            77,
//            80,
//            82,
//            84,
//            85,
//            90,
//            92,
//            93,
//            94,
//            95,
//            96,
//            97,
//            106,
//            108,
//            110,
//            112,
//            116,
//            128,
//            129,
//            130,
//            131,
//            132,
//            134,
//            135,
//            136,
//            137,
//            141,
//            145,
//            147,
//            154,
//            155,
//            156,
//            158,
//            159,
//            160,
//            161,
//            162,
//            163,
//            166,
//            167,
//            170,
//            171,
//            172,
//            178,
//            180,
//            181,
//            182,
//            184,
//            185,
//            191,
//            193,
//            195,
//            196,
//            200,
//            201,
//            202,
//            210,
//            211,
//            212,
//            213,
//            216,
//            217,
//            218,
//            219,
//            226,
//            227,
//            228,
//            233,
//            234,
//            235,
//            236,
//            239,
//            243,
//            244,
//            245,
//            248,
//            249,
//            250,
//            252,
//            253,
//            254,
//            255,
//            258,
//            259,
//            260,
//            261,
//            262,
//            263,
//            264,
//            265,
//            267,
//            270,
//            272,
//            273,
//            276,
//            277,
//            282,
//            283,
//            286,
//            287,
//            288,
//            289,
//            290
//         ]
//       },
//     };
// // const clases = JSON.parse(clasess);
// //   const worth = document.createElement("object");
  
// //   worth.data = './libros/worth.html';

// //   const gana = document.createElement("div");
// // gana.innerHTML = worth.ownerDocument.querySelector('worth');
// // let caca = worth.ownerDocument.querySelector('worth');

// //   document.getElementById("libros2").appendChild(gana);
  
// //  <img src="/carpeta/contador.jpg">
// for (let i1 = 1; i1 < 198; i1++) {
//   let img1 = document.createElement("img");
//   img1.src = './andrewLommis/worth/(' + i1 + ').jpg';
//   worthtexto = textos['worth']['texto'];
//   if (worthtexto.includes(i1)) {
//     img1.className = 'texto';
//   };
//   document.getElementById("worth").appendChild(img1);
// }
// for (let i2 = 1; i2 < 163; i2++) {
//   let img2 = document.createElement("img");
//   img2.src = './andrewLommis/tridimensional/(' + i2 + ').jpg';
//   tridimensionaltexto = textos['tridimensional']['texto'];
//   if (tridimensionaltexto.includes(i2)) {
//     img2.className = 'texto';
//   };
//   document.getElementById("tridimensional").appendChild(img2);
// }
// for (let i3 = 1; i3 < 151; i3++) {
//   let img3 = document.createElement("img");
//   img3.src = './andrewLommis/successfulDrawing/(' + i3 + ').jpg';
//   successfulDrawingtexto = textos['successfulDrawing']['texto'];
//   if (successfulDrawingtexto.includes(i3)) {
//     img3.className = 'texto';
//   };
//   document.getElementById("successfulDrawing").appendChild(img3);
// }
// for (let i4 = 1; i4 < 141; i4++) {
//   let img4 = document.createElement("img");

//   img4.src = './andrewLommis/headHands/(' + i4 + ').jpg';
//   headHandstexto = textos['headHands']['texto'];
//   if (headHandstexto.includes(i4)) {
//     img4.className = 'texto';
//   }
//   document.getElementById("headHands").appendChild(img4);
// }
// for (let i5 = 1; i5 < 122; i5++) {
//   let img5 = document.createElement("img");
//   img5.src = './andrewLommis/funPencil/(' + i5 + ').jpg';
//   funPenciltexto = textos['funPencil']['texto'];
//   if (funPenciltexto.includes(i5)) {
//     img5.className = 'texto';
//   }
//   document.getElementById("funPencil").appendChild(img5);
// }
// for (let i6 = 1; i6 < 234; i6++) {
//   let img6 = document.createElement("img");
//   img6.src = './andrewLommis/facesFeatures/(' + i6 + ').jpg';
//   facesFeaturestexto = textos['facesFeatures']['texto'];
//   if (facesFeaturestexto.includes(i6)) {
//     img6.className = 'texto';
//   }
//   document.getElementById("facesFeatures").appendChild(img6);
// }
// for (let i7 = 1; i7 < 141; i7++) {
//   let img7 = document.createElement("img");
//   img7.src = './andrewLommis/eyePainter/(' + i7 + ').jpg';
//   eyePaintertexto = textos['eyePainter']['texto'];
//   if (eyePaintertexto.includes(i7)) {
//     img7.className = 'texto';
//   }
//   document.getElementById("eyePainter").appendChild(img7);
// }
// for (let i8 = 1; i8 < 290; i8++) {
//   let img8 = document.createElement("img");
//   img8.src = './andrewLommis/creativeIlustration/(' + i8 + ').jpg';
//   creativeIlustrationtexto = textos['creativeIlustration']['texto'];
//   if (creativeIlustrationtexto.includes(i8)) {
//     img8.className = 'texto';
//   }
//   document.getElementById("creativeIlustration").appendChild(img8);
// };
// };
// //  function leerworth(){
// //    let worth = document.getElementById('worth');
// //    if ( worth.classList = 'libroOculto'){
// //      worth.classList.remove('libroOculto');
// //    } else {
// //      worth.setAttribute('class','libroOculto');
// //    }
// //    // 
// //  };
// // //  function leerheadHands(){
// //    let manospies = document.getElementById('headHands');
// //    if ( manospies.classList = 'libroOculto'){
// //      manospies.classList.remove('libroOculto');
// //    } else {
// //      manospies.classList.add("libroOculto");
// //    }
// //   // 

// // }
// // function leerheadHands(){
// //  function jaja(event) {
// //   jaja.preventDefault();
// //   const target = document.getElementById('headHands');
// //   if (target.classList.contains('libroOculto')) {
// //     target.classList.remove('libroOculto');
// //   } else {
// //     target.classList.add('libroOculto');
// //   }
// // };
// // }