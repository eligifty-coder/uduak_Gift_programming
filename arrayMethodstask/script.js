let matrix = [
[-2, 0, 9, 5, 8],
[1, 18, -59, 3, 3, 6, 4],
[101, 24, -79],
[7, 7]
]
const reduceSingleItemFun=(arr)=>arr.reduce((prev,curr)=> prev+ curr ,0)
const reduceToOneDFun = (arr)=>arr.map(item=>reduceSingleItemFun(item))
const checkForEvenFun = (arr)=> arr.some(item=>item%2==0)
const greaterThanZeroFun = (arr)=>arr.every(item=>item>0)
console.log(reduceToOneDFun(matrix))
console.log(checkForEvenFun(reduceToOneDFun(matrix)))
console.log(greaterThanZeroFun(reduceToOneDFun(matrix)))

