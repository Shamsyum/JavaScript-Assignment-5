function calculateFactorial(){
    var num = prompt("Enter a number to Calculate factorial");
num = Number(num);
var factorial = num;
for(var i=num-1; i>0; i--){

    factorial = factorial * i;
}
alert(factorial);
}

calculateFactorial();