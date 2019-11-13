function isPalindrome(str){str
    var oppStr = "";
    for(var i=str.length-1; i>=0; i--){
        var oppStr = oppStr + str[i];
    }
    if(str == oppStr){
        console.log("it is Palindrome ");
    }else{
        console.log("It is Not a Palindrome");
    }
}
  
isPalindrome("wao");