let nums = [1, 2, 5, 4, 3]

// for-each
nums.forEach((number) =>
    console.log(number)
)

// Array.from

let a = Array.from(nums)
console.log(a)

// same as for-from
let b = nums
console.log(b)


// for-of
for (let i of nums) {
    console.log(i)
}

// for-in

for (let i in nums) { // loops on indices
    console.log(nums[i])
}