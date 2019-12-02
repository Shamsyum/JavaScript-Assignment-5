var amount = prompt("Enter the amount to withdraw");
var hundredNotes = 0;
var fiftyNotes = 0;
var tenNotes = 0;

if(Number(amount) > 0 && Number(amount) < 1000){
    hundredNotes = Number(amount[0]);

    if(Number(amount[1]) >= 5){
        fiftyNotes = 1;
        var afterfifty = (amount[1] + amount[2]) - 50;  
        tenNotes = toString(afterfifty[0]);
    }else{
        tenNotes = amount[1];
    }
}
console.log("You will have " + hundredNotes + " Hundred Notes " + fiftyNotes + " Fifty Notes " + tenNotes + " ten Notes.");
console.log(afterfifty);