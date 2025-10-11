// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// #CHALLANGE1

// 1. Array tidak pasti memiliki panjang yang sama
// 2. Harus menggunakan loop untuk mengambil data array satu per satu
// 3. Buat variabel kosong yang kemudian di looping, baru di print 

// const printForecast = (arr) =>{
//     console.log(arr)
//     console.log(arr.length)
//     // debugger
//     let print = ""
//     for (let i = 0; i < arr.length; i++) {
//         print += `... ${arr[i]} in ${i+1} days `
//     }
//     console.log(print)
// }

// printForecast([12,5,-5,0,4])

// #CHALLANGE2

const freelanceTracker = (arr) => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    console.log (`1. Total hours : ${total} hours`)

    const arrayLength = arr.length
    const average = total/arrayLength

    console.log(`2. Average hours: ${average} hours`)

    const max = Math.max(...arr)
    const maxDay = arr.indexOf(max)+1

    console.log(`3. The day with most hours worked is ${maxDay} with total hour is ${max}`)

    const dayWorked = arr.filter(number => number !== 0).length;
    console.log(`4. Number of days worked is ${dayWorked} days`)

    if (total >= 35) {
        console.log(`5. This week was full week with total ${total} hours`)
    } else {
        console.log(`5. This week was not full week with total ${total} hours`)
    }

}

freelanceTracker([7.5,8,6.5,0,8.5,4,0])