console.log();
console.log("==========MapMarkSheet=========");
console.log();
console.log("Subject     :", "Marks  " );
console.log("===============================");

var mapMarks = new Map 

mapMarks.set("english","70")
mapMarks.set("math","80")
mapMarks.set("chmsty","75")
mapMarks.set("physics","73")
mapMarks.set("urdu","85")
mapMarks.set("grade","B")
mapMarks.set("totalMarks","500/383" )
mapMarks.set("grade","B")

console.log("Enlish      : ", mapMarks.get("english"));
console.log("Math        : ", mapMarks.get("math"));
console.log("Chmsty      : ", mapMarks.get("chmsty"));
console.log("Physics     : ", mapMarks.get("physics"));
console.log("Urdu        : ", mapMarks.get("urdu"));
console.log("===============================");
console.log("Grade       : ", mapMarks.get("grade"));
console.log("Total Marks : ", mapMarks.get("totalMarks"));