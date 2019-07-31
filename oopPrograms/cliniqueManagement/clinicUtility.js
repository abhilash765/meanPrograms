let read = require('readline-sync');
// Accessing files in Node is done with the native module fs
const fs = require('fs');
// Reading the file synchronously
var data = fs.readFileSync("D://meanPrograms//oopPrograms//cliniqueManagement//doctor.json");
// Parsing the  DoctorJSON string into a JavaScript object
let dJson = JSON.parse(data);
var data1 = fs.readFileSync("D://meanPrograms//oopPrograms//cliniqueManagement//patient.json");
// Parsing the  Patient JSON string into a JavaScript object
let pJson = JSON.parse(data1);
class Clinic {
    //constructor
    constructor() {

    }

}
// Use of prototype to search Doctors
Clinic.prototype.searchDoctor = () => {
    try {
        let key;
        let flag = false;
        let dSearch = read.question("Enter the Doctor to search?:")
        dJson.forEach(element => {
            key = Object.keys(element);
            key.forEach(ele => {
                if (element[ele] === dSearch) {
                    flag = true;
                    console.log(element);
                }
            });
        });
        if (flag === false) throw "No data found"
    } catch (e) {
        console.log(e)
    }
}
/*function to list all the doctors using prototype which prints the list of doctors */
Clinic.prototype.listDoctor = () => {

    console.log("------------------------LIST OF DOCTORS--------------------------")
    var docs = [];
    dJson.forEach(element => {
        let key = Object.keys(element);
        key.forEach(keyele => {
            element[keyele].forEach(ele => {
                docs.push(ele);
            })
        });
    })

    console.log(docs);
}
// Function to add doctors to the json file
Clinic.prototype.addDoctor = () => {
    let id = 101
    let name = read.question("Enter your name:");
    let spec = read.questionInt("Enter your specialization");
    // Creating dictionary for Doctor.json
    let insertDjson = {
        "dName": name,
        "DID": id++,
        "Specialization": spec,
        "PatientsAttended": 5,
        "Availability": {
            "am": 10,
            "pm": 10
        }
    }
    // Pushing into json
    dJson.push(insertDjson);
    fs.writeFileSync("D://meanPrograms//oopPrograms//cliniqueManagement//doctor.json", dJson)
    JSON.stringify(pJson)
}
// class prototype which search the doctor from the json file
Clinic.prototype.searchPatient = () => {
    try {
        let key;
        let flag = false;
        // Variable  for searching the patient
        let pSearch = read.question("Enter the patient to search?:")
        pJson.forEach(element => {
            key = Object.keys(element);
            key.forEach(ele => {
                // Condition for searching the patient
                if (element[ele] === pSearch) {
                    flag = true;
                    console.log(element);
                }
            });
        });
        if (flag === false) throw "No data found"
    } catch (e) {
        console.log(e)
    }
}
// Function to add patients to be consulted
Patient.prototype.addPatient = () => {
    let pid = 100;
    let name = read.question("Enter your name:");
    let age = read.questionInt("Enter your age");
    let number = read.questionInt("Enter your mobile number:");
    let insertPjson = {
        "pName": name,
        "PID": pid++,
        "age": age,
        "number": number,
    }
    pJson.push(insertPjson);
    fs.writeFileSync("D:\meanPrograms\oopPrograms\cliniqueManagement\patient.json", pJson)
    JSON.stringify(pJson)
}
// function to book appointment for consulting doctor
Clinic.prototype.bookApp = () => {
    try {
        let key;
        let flag = false;
        let pName = read.question("Enter your Name")
        let dSearch = read.question("Enter the Doctor to search?:")
        if (isNaN(dSearch)) {
            dSearch = parseInt(dSearch)
        }
        dJson.forEach(element => {
            key = Object.keys(element);
            key.forEach(ele => {
                if (element[ele] === dSearch && flag === false) {
                    flag = true;
                    if (element["PatientsAttended"] < 5) {
                        element["Patients_list"].push({
                            "pName": pName
                        })
                        console.log(element["Patients_list"], "Your appointment is booked");
                        element["PatientsAttended"] += 1;
                    } else throw "Doctor is busy!"
                }
            });
        });
        fs.writeFileSync("D://meanPrograms//oopPrograms//cliniqueManagement//doctor.json", dJson)
        JSON.stringify(dJson)
        if (flag === false)
            throw "No doctor available";
    } catch (e) {
        console.log(e);
    }
}

Clinic.prototype.popularDoctor = () => {

let js=JSON.parse(dJson);
let count=js[0].PatientsAttended;
let name=js[0].Name;
dJson.forEach(element => {
    key=Object.keys(element);
    key.forEach(ele => {
        if(element["PatientsAttended"]>5)
        {
            name=element["Name"],
            count=element["PatientsAttended"],
            specs=element["Specialization"]
            
        }
    });
});
console.log("the most popular doctor is",name);
console.log("Specialized in",specs)
}