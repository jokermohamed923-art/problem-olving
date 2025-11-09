// sum the numbers of a given array except the highest and lowest element

function sumNumbersOfarreyexceptHighestAndlowest(){
const array=[1,1,2,3,4,5,6,7,8,9,9,10]
const excepthighest=Math.max(...array)
const exceptlowest=Math.min(...array)
const sumarray=array.filter(num=>num !== excepthighest && num !== exceptlowest).reduce((acc,num)=> acc+num, 0)
return sumarray
}
console.log(sumNumbersOfarreyexceptHighestAndlowest())