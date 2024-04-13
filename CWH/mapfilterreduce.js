let num = [8, 7, 9, 5]

// map method will create a new array after performing the operaions

// let num1 = num.map((number, index, array) => {
//     console.log(number, index, array)
//     return number**2
// })

// console.log(num1)

// filter will create a new array based on the condition provided
// let num2 = num.filter((number) => {
//     return number>7
// })
// console.log(num2)

// Array reduce method
let num3 = num.reduce((h1, h2) => {
    return h1+h2
})
console.log(num3)