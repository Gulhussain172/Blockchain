console.log();
console.log("HSC-ll ANNUAL EXAMINATION 2017 MARKSHEET");
console.log();

var information = [
{all: "Name        : " , n: "Gul Hussain"},
{all: "Father Name : " , n: "Abdul Rasool"},
{all: "Rollno      : " , n: "110849"},
{all: "Group       : " , n: "Pre Engineering"},
{all: "Institude   : " , n: "102.Govt.(B) Higher Secondry School City"},
{all: "District    : " , n: "Shikarpur"},
];

var Information = information.map(function(information){
return console.log(information.all,information.n);    
});
console.log("=======================");
console.log("Subjest   : " , "Marks");
console.log();

var marksheet = [
{Subject: "English   : " , Marks: "80" },
{Subject: "Physics   : " , Marks: "85" },
{Subject: "Urdu      : " , Marks: "82" },
{Subject: "Che       : " , Marks: "79" },
{Subject: "Math      : " , Marks: "74" },
{Subject: "Total     : " , Marks: "500/400"}
];

var Marksheet = marksheet.map(function(marksheet){
return console.log(marksheet.Subject,marksheet.Marks);
});