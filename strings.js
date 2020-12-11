function employe(id , name , fname , phone , salary ,  ){
this.id = id
this.name = name
this.fname = fname
this.phone = phone
this.salary = salary


}
var emp = new employe(110846,"Gul Hussain","Abdul Rasool","03357223494","45000")
employe.prototype.email = "GulHussain172@gmail.com"
console.log("Employe ID          : " +emp.id);
console.log("Employe Name        : " +emp.name);
console.log("Employe Father Name : " +emp.fname);
console.log("Employe Phone No    : " +emp.phone);
console.log("Employe Email ID    : " +emp.email);
console.log("Employe Salary      : " +emp.salary);