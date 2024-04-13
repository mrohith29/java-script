x = 12
// console.log(x+1-2)
var a = "hello"
{
    var a = "hii" // var has global scope
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
{
    const c = 12;
    console.log(c)
}
console.log(c)
