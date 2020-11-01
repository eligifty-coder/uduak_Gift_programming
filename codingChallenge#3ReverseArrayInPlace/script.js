const arrayInput = [2, 4, -5, 8];
const reverseArrrayInPlaceFun = (arr) => {
	let temp;
	const arrLength = arr.length;
	for (let i = 0; i < arrLength / 2; i++) {
		temp = arr[i];
		arr[i] = arr[arrLength - 1 - i];
		arr[arrLength - 1 - i] = temp;
	}
	return arr;
};
console.log(reverseArrrayInPlaceFun(arrayInput));
