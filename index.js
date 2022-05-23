//Comments

// this is a single-line comment
/* This is a 
multi-line comment*/


//Literals

12 // number
1.2 // also number
'humoyun' // string
true // boolen
false // also boolen
null // Absence of an object

// Reserved Words
/* reserved words must not be used as the manes of const, var, 
function or class */

// Числовые литералы с плавающей точкой:

3.14e12 // equel to 3.14 * 10(23)
3.192e-32 // equel to 3.192 * 10(-32)

//Арифметические действия в JavaScript:

// Math.pow(2, 43) // 2 в степени 43
// Math.round(.6)  // 1.0 округляет до ближайшего целого
// Math.cail(.6)  // 1.0 округляет в большую сторону до целого
// Math.floor(.6) // 0.0 округляет в меньшую сторону до целого
// console.log(Math.max(4,5,3)) // 5
Math.min(4,3,2) // 2


// let x = .3 - .2 // equel 3/10 - 2/10
// let y = .2 - .1 // equel 2/10 - 1/10 
// console.log(x)
// x === y  // false

// x === .1 // false
// y === .1 // true


2 > 1n //true
1 < 2n //true
0 == 0n //true
0 === 0n //false



let now = new Date() // Текущее время
console.log(now)
let ms = now.getTime()
console.log(ms)

let human = 'Humoyun' //string
console.log(human.length) //7


// let x = '3'
// let y = '2'

// x + y // 32

let z = 'cs,cdcscdcscds\nceccsdcsdcsc\n' // new paragraph with (\n)
console.log(z)

let x = 'you can\'t do this' 
console.log(x)

