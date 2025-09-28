// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(js);

// let firstName = "Jones";
// console.log(firstName);


// // Value & Variable - Practice Assignments

// let country = "Indonesia"
// let continent = "Asia"
// let population = "250 million"

// console.log(country)
// console.log(continent)
// console.log(population)


// // Data Type

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun)

// console.log(typeof javaScriptIsFun)
// console.log(typeof country)
// console.log(typeof 5)

// let tryDataType = true
// console.log(typeof tryDataType)
// tryDataType = "OKE"
// console.log(typeof tryDataType)


// // let, const, var

// let age = 15; //let is mutable (bisa diubah seiring coding)
// age = 20

// const birthYear = 1997; //const is not mutable (tidak bisa diubah seiring coding)


// // Basic Operator - Math Operator
// const x = 5
// const y = 10
// console.log(x + y, x - y, x * y, x / y, x ** y)

// const namaDepan = 'Tom'
// const namaBelakang = "Holland"
// console.log(namaDepan + ' ' + namaBelakang)

// // Basic Operator - Assignment Operator
// let a = 10 + 5 // = adalah assignment operator
// a += 10
// a -= 10
// a ++
// a --
// console.log(a)

// //Basic Operator - Comparison Operator
// console.log(x > y)
// console.log(x < y)

// // Operator Precedence

// const now = 2037
// const ageTom = now - 1991;
// const ageHolland = now -2018;

// console.log(now - ageTom > now - ageHolland); //akan dieksekusi pengurangan dulu baru perbandingan

// let m, n;
// m = n = 25 - 10 - 5 //akan dieksekusi dari kanan ke kiri
// console.log(m, n)

// const averageAge = ageTom - ageHolland / 2 //akan dieksekusi dari pembagian dulu (hasilnya akan aneh)
// console.log(ageTom, ageHolland, averageAge)

// const averageAgeTrue = (ageTom - ageHolland) / 2 //akan dieksekusi dari kurung (yaitu pengurangan) baru pembagian
// console.log(ageTom, ageHolland, averageAgeTrue)

// String & Template Literal

// const firstName = "Tom";
// const job = "actor";
// const birthYear = 1996;
// const now = 2037;

// const tom = "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + "."
// console.log(tom)

// const tom2 = `I'm ${firstName}, a ${(now-birthYear)} years old ${job}.`
// console.log(tom2)

// Taking Decission: if/else statements

// const age = 15;

// if (age >= 18) {
//     console.log(`Zendaya can start driving license.`)
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Zendaya is too young. Wait another ${yearsLeft} years.`)
// }

// const birthYear = 1991;
// let century;
// if (birthYear <=2000) {
//     let century = 20;
// } else {
//     let century = 21;
// }
// console.log(century)

// // Conversion and Coersion
// //type conversion
// const inputYear = '1991'
// console.log(Number(inputYear), inputYear) // ada 2 macam data, number dan string
// console.log(inputYear + 18) // output = 199118
// console.log(Number(inputYear) + 18) //output 2009

// console.log(Number('Jonas')) // output NaN (invalid number)
// console.log(typeof NaN) // tetap akan menghasilkan number

// console.log(String(23), 23);

// //type conversion
// console.log('I am' + 23 + ' years old') // 23 akan diubah ke string secara type coersion
// console.log('I am' + '23' + ' years old') // 23 akan diubah ke string secara type coersion

// console.log('23' - '10' - 3); // kalo minus maka string akan menjadi number
// console.log('23' + '10' + 3); // kalo plus perkalian dan pembagian akan menjadi string
// console.log('23' * '2');

// let n = '1' + 1; // '11'
// n = n - 1; // 10
// console.log(n)

//Truthy and Falsy
console.log(Boolean(0)); //falsey
console.log(Boolean(undefined)); //falsey
console.log(Boolean('Jonas')); //truthy
console.log(Boolean({})); //truthy
console.log(Boolean('')) //falsy

const money = 0;
if(money) { // money akan dikonversi jadi boolean
    console.log(`Don't spend it all`)
} else {
    console.log(`You should get a job!`)
}

let height;
if(height) {
    console.log(`YAY! Height is defined`)
} else {
    console.log(`Height is UNDEFINED`)
}

// Equality Operators == vs ===

// === strict equality opeator (including data type)

if (18 === 18) {
    console.log('kedua data sama')
 } else {
    console.log('kedua data berbeda')
 }

// == loose equality operator (text and number is the same)

if (18 == '18') {
    console.log('kedua data sama')
 } else {
    console.log('kedua data berbeda')
 }

 const favorite = prompt("what is your favorite number?")
 console.log(favorite);
 console.log(typeof favorite);

 if (favorite == 23) { //'23' == 23
    console.log ('Cool! 23 is amazing number')
 }

  const favorite2 = Number(prompt("what is your favorite number?"))
 console.log(favorite2);
 console.log(typeof favorite2);

 if (favorite === 23) { //23 === 23
    console.log ('Cool! 23 is amazing number')
 }