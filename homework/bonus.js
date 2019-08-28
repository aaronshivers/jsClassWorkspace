const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = [2, 3, 4, 8, 10]

// Create New Array With Common Numbers From Two Existing Arrays
const newArr = (arr1, arr2) => arr1.filter(el => arr2.includes(el))

console.log(newArr(arr1, arr2))
