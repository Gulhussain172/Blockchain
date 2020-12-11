var read=require('readline');
var takein = read.createInterface(process.stdin,process.stdout);
var add=(a,b)=>{
var sum =a+b;
console.log("\nThe Addition of "+a+" and "+b+" is "+sum);
}
var sub=(a,b)=>{
var sum =a-b;
console.log("\nThe Subtractoin of "+a+" and "+b+" is "+sum);
}
var mul=(a,b)=>{
var sum =a*b;
console.log("\nThe Product of "+a+" and "+b+" is "+sum);
}
var divide=(a,b)=>{
var sum =a/b;
console.log("\nThe Division of "+a+" and "+b+" is "+sum);
}
var percentage=(a,b)=>{
var sum =a/b*100;
console.log("\nThe Percentage of Obtain Marks"+a+" and Total Marks "+b+" is "+sum);
}
var square=(a)=>{
var sum =a*a;
console.log("\nThe Square of "+a+" is "+sum);
}
function mainmenu(){
console.log(" Calculator");
console.log(" ==========");
console.log();
console.log(" 1. Addition \t");
console.log(" 2. Subtraction \t");
console.log(" 3. Multiply \t");
console.log(" 4. Division \t");
console.log(" 5. Square \t");
console.log(" 6. Percentage \t");
console.log(" 7. Exit \t");
console.log();
takein.question("Please Enter Operation you Want to Continue : ",(x)=>{
var test= parseInt(x);
switch (test) {
case 1:
takein.question("Please Enter Number : ",(y)=>{
takein.question("Please Enter Number : ",(x)=>{
add(parseInt(y),parseInt(x));
recall();
})})
break;
case 2:
takein.question("Please Enter Number : ",(y)=>{
takein.question("Please Enter Number : ",(x)=>{
sub(parseInt(y),parseInt(x));
recall();
})})
break;
case 3:
takein.question("Please Enter Number : ",(y)=>{
takein.question("Please Enter Number : ",(x)=>{
mul(parseInt(y),parseInt(x));
recall();
})})
break;
case 4:
takein.question("Please Enter Number : ",(y)=>{
takein.question("Please Enter Number : ",(x)=>{
divide(parseInt(y),parseInt(x));
recall();
})})
break;
case 5:
takein.question("Please Enter Number : ",(x)=>{
square(parseInt(x));
recall();
})
break;
case 6:
takein.question("Please Enter Obtain Marks : ",(y)=>{
takein.question("Please Enter Total Marks : ",(x)=>{
percentage(parseInt(y),parseInt(x));
recall();
})})
break;
case 7:
takein.close(); 
break;
default:
mainmenu();
break;
}
})
}
function recall(){
takein.question("Do you want to continue y/n : ",(z)=>{
switch (z) {
case "y":
mainmenu();
break;
case "n":
takein.close();
break;
default:
mainmenu();
break;
}
})
}
mainmenu();
   