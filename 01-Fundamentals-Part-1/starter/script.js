let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(js);

let firstName = "Jones";
console.log(firstName);


// Value & Variable - Practice Assignments

let country = "Indonesia"
let continent = "Asia"
let population = "250 million"

console.log(country)
console.log(continent)
console.log(population)


// Data Type

let javaScriptIsFun = true;
console.log(javaScriptIsFun)

console.log(typeof javaScriptIsFun)
console.log(typeof country)
console.log(typeof 5)

let tryDataType = true
console.log(typeof tryDataType)
tryDataType = "OKE"
console.log(typeof tryDataType)


// let, const, var

let age = 15; //let is mutable (bisa diubah seiring coding)
age = 20

const birthYear = 1997; //const is not mutable (tidak bisa diubah seiring coding)


// Basic Operator - Math Operator
const x = 5
const y = 10
console.log(x + y, x - y, x * y, x / y, x ** y)

const namaDepan = 'Tom'
const namaBelakang = "Holland"
console.log(namaDepan + ' ' + namaBelakang)

// Basic Operator - Assignment Operator
let a = 10 + 5 // = adalah assignment operator
a += 10
a -= 10
a ++
a --
console.log(a)

//Basic Operator - Comparison Operator
console.log(x > y)
console.log(x < y)

// Operator Precedence

const now = 2037
const ageTom = now - 1991;
const ageHolland = now -2018;

console.log(now - ageTom > now - ageHolland); //akan dieksekusi pengurangan dulu baru perbandingan

let m, n;
m = n = 25 - 10 - 5 //akan dieksekusi dari kanan ke kiri
console.log(m, n)

const averageAge = ageTom - ageHolland / 2 //akan dieksekusi dari pembagian dulu (hasilnya akan aneh)
console.log(ageTom, ageHolland, averageAge)

const averageAgeTrue = (ageTom - ageHolland) / 2 //akan dieksekusi dari kurung (yaitu pengurangan) baru pembagian
console.log(ageTom, ageHolland, averageAgeTrue)