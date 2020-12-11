function employe(Name,FatherName,Class,LastClass,LastPassingMarks,RollNo,AddsFees,MonFees,ExFees,GameFees,
English,Physics){
this._Name = Name
this._FatherName = FatherName
this._Class = Class
this._LastClass = LastClass
this._LastPassingMarks = LastPassingMarks
this._RollNo = RollNo
this._AddsFees = AddsFees
this._MonFees = MonFees
this._ExFees = ExFees
this._GameFees = GameFees
this._English = English
this._Physics = Physics
}
var emp = new employe("Gul Hussain" , "Abdul Rasool" , "Block Chain" , "Inter" , "680" , 
"110849" , "100000" , "75000" , "33000"  , "20000" , "72  Pass" , "80  Pass")

console.log();
console.log("------------------------------------");
console.log("------------Student Data------------");
console.log("------------------------------------");
console.log();

console.log("Student Name               :" , emp._Name);
console.log("Student Father Name        :" , emp._FatherName);
console.log("Student Class              :" , emp._Class);
console.log("Student Last Class         :" , emp._LastClass);
console.log("Student Last Passing Marks :" , emp._LastPassingMarks);
console.log("Student Roll No            :" , emp._RollNo);

console.log();
console.log("-------------------------------------");
console.log("-----------Fees Stracture------------");
console.log("-------------------------------------");
console.log();

console.log("Addmission Fees            :" , emp._AddsFees);
console.log("Monthly Fees               :" , emp._MonFees);
console.log("Extracriculums Fees        :" , emp._ExFees);
console.log("Game Fees                  :" , emp._GameFees);

console.log();
console.log("-------------------------------------");
console.log("------------Obtain Marks-------------");
console.log("-------------------------------------");
console.log();

console.log("English                    :" , emp._English);
console.log("Physics                    :" , emp._Physics);
