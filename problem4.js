// given a random non-negative you have to return the digits of htis number wthin an array in reverse order
function reverseOrderAray(number){
    
 return number.toString().split("").map((m)=>Number(m))

 
 }
console.log(reverseOrderAray(123345456))