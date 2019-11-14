function mirrorArray(array){
var mirrorArray = array;

for(var i = array.length -1; i >= 0; i--){
    mirrorArray.push(array[i]);
}
console.log(mirrorArray);
}

mirrorArray([1,2,3,4]);