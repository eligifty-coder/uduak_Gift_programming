// reverse
const reverseFun = (data) => {
	return data.map((item,index,array)=>array[array.length-1-index])
};
// multiply by 5
const multiplyByFiveFunc = (data) => data.map((item) => item * 5);
// replace negative item with zero
const replaceFun = (data) => data.map((item) => (item > 0 ? item : 0));
const arrayOperationFun = (input) => {
	const reversedInput = reverseFun(input);
	const multipliedItem = multiplyByFiveFunc(reversedInput);
	const replaceditem = replaceFun(multipliedItem);
	return replaceditem;
};
const arrayInput = [2, 4, -5, 8];
console.log(arrayOperationFun([...arrayInput]));
