/********************************************************************************************************************
* @Execution : default node : cmd> clinique.js
*
* @Purpose : 
*
* @description : This programme is used to manage a list of Doctors associated with the Clinique. 
This also manages the list of patients who use the clinique. 
It manages Doctors by Name, Id, Specialization and Availability (AM,  PM or both). 
It manages Patients by Name, ID, Mobile Number and Age. The Program allows users to search Doctor by name, id, Specialization or Availability.
 Also the programs allows users to search patient by name, mobile number or id. The programs allows patients to take appointment with the doctor. 
 A doctor at  any availability time can see only 5 patients. If exceeded the user can take appointment for patient at different date or availability time. 
 Print the Doctor Patient Report. Also show which Specialization is popular in the Clinique as well as which Doctor is popular.
* 
* @overview :Program using json to create clinique management
* @author : Abhilash <aabhilash765@gmail.com>
* @version : 1.0
* @since : 29-July-2019
*
*******************************************************************************************************************/
let read = require('readline-sync');
let fs = require('fs')
let cApp = require('./clinicUtility');
let cLink = new cApp();
// var doctor = fs.readFileSync("D://meanPrograms//oopPrograms//cliniqueManagement//doctor.json");
// let dJson=JSON.parse(doctor);
// var patient=fs.readFileSync("D://meanPrograms//oopPrograms//cliniqueManagement//patient.json")
// let pJson=JSON.parse(patient);
try {
    console.log("Enter your choice :")
    // Reading choice for the user
    let choice = read.questionInt("/n1.ADD DOCTOR/n2.ADD PATIENT/n3.SEARCH DOCTOR/n4.LIST DOCTORS AVAILABLE/n5.BOOK APPOINTMENT/n6.POPULAR DOCTORS");
    do {
        switch (choice) {
            case 1:
                // Add doctor
                cLink.addDoctor();
                break;
            case 2:
                // Add patient
                cLink.addPatient();
                break;
            case 3:
                // Search doctor
                cLink.searchDoctor();
                break;
            case 4:
                // Display list of doctors
                cLink.listDoctor();
            case 5:
                // Book appointment with doctor
                cLink.bookApp();
                break;
            case 6:
                // T0 find the most popular doctor
                cLink.popularDoctor();
                break;
            default:
                process.exit(0);

        }
    }
    while (choice >6)
    process.exit(0);


} catch (e) {
    console.log(e);
}