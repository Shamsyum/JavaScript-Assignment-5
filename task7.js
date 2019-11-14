function isWeekend(month, date, year){
    var d = new Date();
    d.setDate(date);
    d.setFullYear(year);

    switch(month){
        case "jan":
            d.setMonth(0);
            break;
        case "feb":
            d.setMonth(1);
            break; 
        case "mar":
            d.setMonth(2);
           break; 
        case "apr":
            d.setMonth(3);
            break;
        case "may":
            d.setMonth(4);
            break;
        case "jun":
            d.setMonth(5);
            break;
        case "jul": 
            d.setMonth(6);
            break;
        case "aug":
            d.setMonth(7);
            break;
        case "sep":
            d.setMonth(8);
            break;
        case "oct":
            d.setMonth(9);
            break;
        case "nov":
            d.setMonth(10);
            break;
        case "dec":
            d.setMonth(11);
            break;
    }

    var day = d.getDay();
    switch(day){
        case 0 :
            console.log("it is WeekEnd");
            break;
        case 1 :
            console.log("Sorry ! wait for 6 more days");
            break;
        case 2 :
            console.log("Sorry ! wait for 5 more days");
            break;
        case 3 :
             console.log("Sorry ! wait for 4 more days");
             break;
        case 4 :
            console.log("Sorry ! wait for 3 more days");  
            break;
        case 5 :
            console.log("Sorry ! wait for 2 more days");  
            break;
        case 6 :
            console.log("Sorry ! wait for 1 more days");     
    }

}
isWeekend("nov",17,2019);