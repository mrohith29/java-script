let arr = [1, 2, 10, 3, 4, 5]
console.log(typeof arr)
let b = arr.toString()
console.log(b, typeof b)
let c = arr.join(' ')
console.log(c, typeof c)

// push
// pop
// shift
// unshift
// delete
// concat can merge more than one array in one array

let new_arr1 = [6, 7, 8 ,9 ,10]
let new_arr2 = [6, 7, 8 ,9 ,10]

let final_array = arr.concat(new_arr1, new_arr2)
console.log(final_array)

// sort
arr.sort() // it will sort the arr elements in the alphabetical order and not in the ascending order format 
console.log(arr)

// to perform acscending order sort we pass an argument to the sort a function to compare like below

let compare = (a, b) => {
    // return b-a // descending order
    return a- b // ascending order
}

arr.sort(compare)
console.log(arr)

// reverse

// splice and slice *****

// splice will update the array
// slice willnot update the array