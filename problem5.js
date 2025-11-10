// consider an arraylist of sheep  whehre sume sheep may missing from their place we meed function thac counts  the number of sheep present in the array (true means present)
let arreey =[true,false,true,false]

// function  CountstheMumberOfsheepPresent(arreey){
// let caunt =0
//     for(let i =0 ; i < arreey.length;i++ ){
//         if(arreey[i] === true){
//       caunt +="true"+" "
//         }
//     }
// return caunt
// }
// console.log(CountstheMumberOfsheepPresent(arreey))




let array = [true, false, true, false];

let count = array.filter(sheep => sheep === true).length;

console.log(count); // 2
