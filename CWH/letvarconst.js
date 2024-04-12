x = 12
// console.log(x+1-2)
var a = "hello"
{
    var a = "hii" // the value of the global variable has changed that is var scope is not about the block it has global scope 
    console.log(a)
}

console.log(a)

let b = "hello" // let can be redeclared and changed
{
    let b = 'hi' // the scope of let is block
    x++
    console.log(x)
}
console.log(b)

const c = "hello" // const cannot be rechanged nor redeclared
console.log(c)
