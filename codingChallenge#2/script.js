let matrix = [
	[-2, 0, 9, 5, 8],
	[1, 18, -59, 3, 3, 6, 4],
	[101, 24, -79],
	[7, 7],
]
const reduceChildMatrixArr= (item)=>{
   return item.reduce((prev,curr)=> prev+ curr,0)
}
matrix = matrix.map((item)=>reduceChildMatrixArr(item))
console.log(matrix)

const evenItem = matrix.some(item=>item % 2==0)
console.log(evenItem)

const itemgreaterThanZero= matrix.every(item=> item>0)
console.log(itemgreaterThanZero)
