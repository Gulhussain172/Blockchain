class Module_1 {
    constructor(Patient_Name, Father_Name, Date, Time, Nic_No, Patient_Ward,
        Patient_Ills_Array, Dr_Name_Fields, Generate_Bar_Code) {
        this._PatientName = Patient_Name;
        this._FatherName = Father_Name;
        this._Dte = Date;
        this._tme = Time;
        this._NicNo = Nic_No;
        this._PatientWard = Patient_Ward;
        this._PatientIllsArray = Patient_Ills_Array
        this._DrNameFields = Dr_Name_Fields
        this._GenerateBarCode = Generate_Bar_Code;
    }
    get Patient_Name() {
        return this._PatientName;
    }
    get Father_Name() {
        return this._FatherName;
    }
    get Date() {
        return this._Dte;
    }
    get Time() {
        return this._tme;
    }
    get Nic_No() {
        return this._NicNo;
    }
    get Patient_Ward() {
        this._PatientWard;
    }
    get Patient_Ills_Array() {
        this._PatientIllsArray;
    }
    get Dr_Name_Fields() {
        this._DrNameField;
    }
    get Generate_Bar_Code() {
        this._GenerateBarCode;
    }
}

class Module_2 extends Module_1 {

    set DrAppointmentTime (value) {
        this._Dr_Appointment_Time = value;
    }
    set DrTimeMatch(value) {
        this._Dr_Time_Match = value;
    }
    set AppointmentFees(value) {
        this._Appointment_Fees = value;
    }
    set FeesOption(value) {
        this._Fees_Option = value;
    }

    Hospital_Managment() {

        console.log();
        console.log("----------------------------------------");
        console.log("-------Hospiatl Managment System--------");
        console.log("----------------------------------------");
        console.log();

        console.log("----------------------------------------");
        console.log("--------------Patient Record------------");
        console.log("----------------------------------------");
        console.log();

        console.log(`Patient Name        : ${this._PatientName}`);
        console.log(`Father Name         : ${this._FatherName}`);
        console.log(`Date                : ${this._Dte}`);
        console.log(`Time                : ${this._tme}`);
        console.log(`Nic No              : ${this._NicNo}`);
        console.log(`Patient Ward        : ${this._PatientWard}`);
        console.log(`Patient Ills Array  : ${this._PatientIllsArray}`);
        console.log(`Doctor Name Fields  : ${this._DrNameFields}`);
        console.log(`Generate Bar Code   : ${this._GenerateBarCode}`);

        console.log();
        console.log("---------------------------------------");
        console.log("--------------Doctor Record------------");
        console.log("---------------------------------------");
        console.log();

        console.log(`Dr.Appointment Time : ${this._Dr_Appointment_Time}`);
        console.log(`Dr.Time Match       : ${this._Dr_Time_Match}`);
        console.log(`Appointment Fees    : ${this._Appointment_Fees}`);
        console.log(`Fees Option         : ${this._Fees_Option}`);
    }
}
var Patient_Ills_Array = ["Fever", "Flu", "BP"]
var Dr_Name_Fields = [1, 2, 3, 4, 5, 6, 7]
var Fees_Option = ["Online", "Card Option", "Cash Option", "Get Received"]
var obj = new Module_2("Gul Hussain", "Abdul Rasool", "28-11-2020", "11:00 AM", "42201-455500-44", "2",
 Patient_Ills_Array[0], Dr_Name_Fields[6], "X210230")

obj._Dr_Appointment_Time = "Shah Nawaz";
obj._Dr_Time_Match = "01:00 PM";
obj._Appointment_Fees = "500";
obj._Fees_Option = Fees_Option[2];

obj.Hospital_Managment()



