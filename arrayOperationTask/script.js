// reverse
const reverseFun = (data)=>{
   let reverserArr = []
   let datalength= data.length
   for(let i=0;i<datalength;i++){
      let poppedItem = data.pop()
      reverserArr.push(poppedItem)
   }
   return reverserArr
}
// multiply by 5
const multiplyFun = (data)=>{
   data = data.map((item)=>{
      return item*5
   })
   return data
}
// replace negative item with zero
const replaceFun = (data)=>{
   data = data.map((item)=>{
      item = (item>0) ? item : 0
      return item
   })
   return data
}
const arrayOperationFun =(input)=>{
   const reversedInput = reverseFun(input)
   const multipliedItem = multiplyFun(reversedInput)
   const replaceditem = replaceFun(multipliedItem)
   return replaceditem
}
const arrayInput = [2,4,-5,8]
console.log(arrayOperationFun([...arrayInput]));