// you get array of numbers returnthe sum of all positives ones
function sumOfpositive(array){
    let initvalue=0
for(let i = 0; i<array.length;i++){
    if(array[i] > 0 ){
        initvalue +=array[i]
    }
}
return initvalue

}
console.log(sumOfpositive([-1,-2,-22,11,233]))