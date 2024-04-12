// // for loop, for of loop, for in loop

// for loop
for (let index = 0; index < 10; index++) {
    console.log(index)
}

let obj = {
    rohith: 10,
    rohan : 20,
    rahul: 30
}

for (const key in obj) {
        console.log(obj[key])
}

for (const key of Object.keys(obj)) {
    console.log(obj[key]);
}

const name = "rohith"
for (let key of name) {
console.log(key)
}

for (const key in name) {
console.log(key)
}