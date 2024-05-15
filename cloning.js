'use strict'

// let f = 5

// let k = 5

// k = +5

// console.log(k);
// console.log(f);

// const sonlar = {
//     x: 5,
//     y: 5
// }

// const yangiSonlar = sonlar

// yangiSonlar.x = 10

// console.log(sonlar);
// console.log(yangiSonlar);

// function bunyod(obj){
//     let newObj = {}

//     for (let key in obj){
//         newObj[key] = obj[key]
//     }
//     return newObj
// }
// const raqam = {
//     x: 5,
//     y:10
// }

// const yangiRaqam = bunyod(raqam)

// yangiRaqam.x = 15

// console.log(yangiRaqam);
// console.log(raqam);


//     for (let key in obj){
//         newObj[key] = obj[key]
//     }
// //     return newObj

// const son ={
//     x: 5,
//     y: 10,
//     z:{
//         a: 5,
//         b: 10
//     }
// }

// const yangiSon = cloning(son)

// yangiSon.x = 15
// yangiSon.z.b = 15

// console.log(son);
// console.log(yangiSon)

const son = {
    e: 5,
    t10,
    v:{
        p:5,
        l:1
    }
}

const  yangiSon = Object.assign({}, son)

yangiSon.e = 15

console.log(son);
console.log(yangiSon);