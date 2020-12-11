var add = (x,y) => x+y
var n1 = 12
var n2 = 8
console.log("Addition = ",n1,"+",n2,"=",add(n1,n2));

var subt = (x,y) => x-y
n1 = 20
n2 = 4
console.log("Subtraction = ",n1,"-",n2,"=",subt(n1,n2));

var mult = (x,y) => x*y
n1 = 9
n2 = 6
console.log("Multiplication = ",n1,"x",n2,"=",mult(n1,n2));

var div = (x,y) => x/y
n1 = 6
n2 = 8
console.log("Division = ",n1,"/",n2,"=",div(n1,n2));

var sqr = (x) => x*x
n1 = 7
console.log("Square = ",n1,"=",sqr(n1));

var sqrrt = (x) => Math.sqrt(x)
var n1 = 26
console.log("Square Root = ",n1,"=",sqrrt(n1))

var perc = (x,y)=> (x/y)*100
n1 = 20
n2 = 90
console.log("Percentage : ",n1,"%",n2,"=",perc(n1,n2)+"%");