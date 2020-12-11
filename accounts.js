class Account{
    constructor(EmployeName,EmployeFullName,FatherName,NicNo,Attendence,EmployeFixSalary,
        EmployeBonusAllowance,EmployeTaxPerMonth){
            this._EmployeName = EmployeName
            this._EmployeFullName = EmployeFullName
            this._FatherName = FatherName
            this._NicNo = NicNo
            this._Attendence = Attendence
            this._EmployeFixSalary = EmployeFixSalary
            this._EmployeBonusAllowance = EmployeBonusAllowance
            this._EmployeTaxPerMonth = EmployeTaxPerMonth 
        }
        get EmployeName(){
            return this._EmployeName
        }
        get EmployeFullName(){
            return this.EmployeFullName
        }
        get FatherName(){
            return this._FatherName
        }
        get NicNo(){
            return this._NicNo
        }
        get Attendence(){
            return this._Attendence
        }
        get EmployeFixSalary(){
            return this._EmployeFixSalary
        }
        get EmployeBonusAllowance(){
            return this._EmployeBonusAllowance
        }
        get EmployeTaxPerMonth(){
            return this._EmployeTaxPerMonth
        }

}
var account = new Account("Gul","Gul Hussain","Abdul Rasool","42201-455500-44","100 %","30000/=","2","10 %")

console.log();
console.log("------------------------------------");
console.log("----------Accounting System---------");
console.log("------------------------------------");
console.log();

console.log("Employe Name            :" , account._EmployeName);
console.log("Employe Full Name       :" , account._EmployeFullName);
console.log("Fathe Name              :" , account._FatherName);
console.log("NIC NO                  :" , account._NicNo);
console.log("Attendence              :" , account._Attendence)
console.log("Employe Fix Salary      :" , account._EmployeFixSalary);
console.log("Employe bonus Allowance :" , account._EmployeBonusAllowance);
console.log("Employe Tax Per Month   :" , account._EmployeTaxPerMonth);