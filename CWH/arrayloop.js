// let nums = [1, 2, 5, 4, 3]

// for-each
// nums.forEach((number) =>
//     console.log(number)
// )

// // Array.from

// let a = Array.from(nums)
// console.log(a)

// // same as for-from
// let b = nums
// console.log(b)


// // for-of
// for (let i of nums) {
//     console.log(i)
// }

// for-in

let nums = [-1, 10, 201, -112]
for (let i in nums) { // loops on indices where i is the index, it is similar to the for i in range() loop in python
    console.log(i)
    console.log(nums[i])
}