

// const obj = {
// 	name: 'Alex',
// 	job: 'dev',
// 	age: '33'
// }

// const arr = ['str', 'str1', 'str2']

// for (let index in arr) {

// }


// const arr = [
// 	{
// 		isMaried: true,
// 		haveChildren: false,
// 		first: true,
// 		second: false
// 	},
// 	{
// 		isMaried: true,
// 		haveChildren: false,
// 		first: true,
// 		second: true
// 	}
// ]

// const showTrue = (list) => {
// 	return list.reduce((acc, curr) => {
// 		const accValues = Object.values(acc)
// 		const filltredAcc = accValues.filter(item => item)
// 		const currValues = Object.values(curr).filter(item => item)

// 		return filltredAcc.length > currValues.length ? acc : curr


// 	})

// }

const arr = [1,3,2,6,4,2,5,7]

const sortedAsc = arr.sort((a, b) => {
	return a-b
})
console.log(sortedAsc)



const sortedDsc = arr.sort((a, b) => {
	return b -a 
})
console.log(sortedDsc)



const sortAscEven = sortedAsc.filter(item => item % 2 === 0)
console.log(sortAscEven)



const sortDscEven = sortedAsc.filter(item => item % 2 !== 0)
console.log(sortDscEven)

const sortFun = (numList) => {
	const even = numList.filter(item => item % 2 === 0).sort((a, b) => a - b)
	const odd = numList.filter(item => item % 2 !== 0).sort((a, b) => b - a)

	return [...even, ...odd]
}

console.log(sortFun(arr))