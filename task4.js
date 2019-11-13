function calcCircumference(radius){
    pi = 3.14;
    var circumference = 2*pi*radius;
    console.log("Circumference of radius " + radius + " is: " + circumference.toFixed(2));
}

function calcArea(radius){
    var area = pi*(radius*radius);
    console.log("Area of radius "+radius+ " is: " + area.toFixed(2));
}

calcCircumference(5);
calcArea(5);