function calculateAge(month,date,year){
    
    var db = new Date();
    switch(month){
        case "jan":
            db.setMonth(0);
            break;
        case "feb":
            db.setMonth(1);
            break; 
        case "mar":
            db.setMonth(2);
           break; 
        case "apr":
            db.setMonth(3);
            break;
        case "may":
            db.setMonth(4);
            break;
        case "jun":
            db.setMonth(5);
            break;
        case "jul": 
            db.setMonth(6);
            break;
        case "aug":
            db.setMonth(7);
            break;
        case "sep":
            db.setMonth(8);
            break;
        case "oct":
            db.setMonth(9);
            break;
        case "nov":
            db.setMonth(10);
            break;
        case "dec":
            db.setMonth(11);
            break;
    }
    db.setDate(date);
    db.setFullYear(year);
    var d = new Date();
    ageDate = new Date();
    ageDate.setFullYear(d.getFullYear() - db.getFullYear());
    ageDate.setMonth(d.getMonth() - db.getMonth());
    geDate.setDate(d.getDate() - db.getDate());

    var yearsAge = ageDate.getFullYear();
    var monthsAge = ageDate.getMonth();
    var daysAge = ageDate.getDate();

    console.log("You are " + yearsAge + "years, " + monthsAge + " Months " + " and " + daysAge + " days Old");

}

calculateAge("feb",16,1999);