// let arr = [1, 2, 10, 3, 4, 5]
// console.log(typeof arr)
// let b = arr.toString()
// console.log(b, typeof b)
// let c = arr.join(' ')
// console.log(c, typeof c)

// // push
// // pop
// // shift
// // unshift
// // delete
// // concat can merge more than one array in one array

// let new_arr1 = [6, 7, 8 ,9 ,10]
// let new_arr2 = [6, 7, 8 ,9 ,10]

// let final_array = arr.concat(new_arr1, new_arr2)
// console.log(final_array)

// // sort
// arr.sort() // it will sort the arr elements in the alphabetical order and not in the ascending order format 
// console.log(arr)

// // to perform acscending order sort we pass an argument to the sort a function to compare like below

// let compare = (a, b) => {
//     // return b-a // descending order
//     return a- b // ascending order
// }

// arr.sort(compare)
// console.log(arr)

// reverse

// splice and slice *****

// // splice will update the array
// let arr = [1, 2, 3, 4, 5, 6] 
// // arr.splice(1,4) // this will remove the elements of index 1, 2, 3, 4
// // let deleted = arr.splice(1, 4) // the splice method will return the deleted numbers from the array
// // console.log(deleted)

// arr.splice(2, 0, 'a', 'b') // this function is also used to insert the elements into the array at desired index position/
// // when the second argument is 0 then the function will insert the elements into the array
// console.log(arr)

// arr.splice(3, 1, 'a')
// // when the second argument is not 0 then the function will replace that many elements with the desired number of elements
// console.log(arr)

// slice willnot update the array
// slice method will return new array that is the subset of the original array without updating the original array

let arr = [1, 2, 3, 'a', 'hello', '@#']
console.log(arr.slice(1, 3)) // 2, 3 i.e., from 1 to 3 exclusively
console.log(arr.slice(3)) // i.e., from index 3 to end
console.log(arr.slice(-3)) // i.e., 3 elements from the last