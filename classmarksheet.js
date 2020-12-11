console.log("====================================================================");
console.log("       BOARD OF INTERMEDIATE & SECONDARY EDUCATION, LARKANA         ");
console.log("                      MARKS CERTIFICATE                             ");
console.log("====================================================================");
console.log("                HSC-II ANNUAL EXAMINATION 2017 HELD IN MAY              ");
console.log( );


class Marksheet {
constructor(name ,fname ,rollno ,group , english , physics , chemistry , mathematic , urdu , islamiat , 
sindhi , pakistanstudies , totalmarks ){
this._name = name;
this._fname = fname;
this._rollno = rollno;
this._group = group;
this._english = english;
this._physics = physics;
this._chemistry = chemistry;
this._mathematic = mathematic;
this._urdu = urdu;
this._islamiat = islamiat;
this._sindhi = sindhi;
this._pakistanstudies = pakistanstudies;
this._totalmarks = totalmarks;
}
    
    
set name (value){
this._name = value;
}
get name(){
return this._name;
}
    
set fname (value){
this._fname = value;
}
get fname (){
return this._fname
}
    
set rollno (value){
this._rollno = value;
}
get rollno(){
return this._rollno
}
    
set group(value){
this._group = value;
}
get group(){
return this._group
}
    
set english(value){
this._english = value;
}
get english(){
return this._english
}
    
set physics(value){
this._physics = value;
}
get physics(){
return this._physics
}
    
set chemistry(value){
this._chemistry = value;
}
get chemistry(){
return this._chemistry
}
    
set mathematic(value){
this._mathematic = value;
}
get mathematic(){
return this._mathematic
}
    
set urdu(value){
this._urdu = value;
}
get urdu(){
return this._urdu
}

set islamiat(value){
this._islamiat = value;
}
get islamiat(){
return this._islamiat
}

set sindhi(value){
this._sindhi = value;
}
get sindhi(){
return this._sindhi
}

set pakistanstudies(value){
this._pakistanstudies = value;
}
get pakistanstudies(){
return this._pakistanstudies
}

set totalmarks(value){
this._totalmarks = value;
}
get totalmarks(){
return this._totalmarks
}

// get fullName(){
// console.log('Full Detail')
// return this._name + " " + this._fname
// }
    
}
    
    
let marksheet = new Marksheet ("Name       : Gul Hussin", "FatherName : Abdul Rasool", "RollNo     : 110849", "Group      : Pre Engeneering", "Enlish     :  84", "Physics    :  75", "Chemistry  :  78", "Mathematic :  80", 
"Urdu       :  81", "Islamiat   :  77", "Sindhi     :  72", "PakStudies :  80", "TOTALMARKS :  627");
console.log(marksheet._name); 
console.log(marksheet._fname);
console.log(marksheet._rollno);
console.log(marksheet._group);
console.log("====================================================================");
console.log("Subject    :" ,   "Marks");
console.log();
console.log(marksheet._english);
console.log(marksheet._physics);
console.log(marksheet._chemistry);
console.log(marksheet._mathematic);
console.log(marksheet._urdu);
console.log(marksheet._islamiat);
console.log(marksheet._sindhi);
console.log(marksheet._pakistanstudies);
console.log("====================================================================");
console.log(marksheet._totalmarks);
//  console.log(marksheet.fullName);
console.log("====================================================================");
console.log("OBTAINED MARKS (IN WORDS): SIX HUNDRED AND TWINTY SEVEN");
console.log("====================================================================");
console.log("Result: PASS");
console.log("Percentage: 61.82%");
console.log("Grade: B");
