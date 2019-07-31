let fs = require('fs');
let listLink = require('../../dataStructurePrograms/unOrderedList/utility');
let array = [];
let memflager = fs.readFileSync("D://meanPrograms//oopPrograms//commercialDprocess//memflagers.json");
let mJson = JSON.parse(memflager)
let company = fs.readFileSync("D://meanPrograms//oopPrograms//commercialDprocess//companyShares.json");
let sJson = JSON.parse(company);
class Account {}
// Acccount class prototype for adding the account
Account.prototype.addAccount = (name) => {
    try {
        mJson.forEach(element => {
            element[name] = [];
        });

        fs.writeFileSync("D:\meanPrograms\oopPrograms\commercialDprocess\members.json", mJson);
        JSON.stringify(mJson)
    } catch (e) {
        console.log(e);
    }
}
//Function prototype for buying shares
Account.prototype.shareBuy = (amount, username, company_name) => {
        try {
            let shares = 0;
            let date;
            sJson.forEach(element => {
                element[company_name].forEach(ele => {

                    shares = parseInt(amount / parseInt(ele["Price"]));
                    if (ele["Shares"] >= shares) {
                        ele["Shares"] -= shares;
                        date = new Date();
                        ele["Time"] = date;
                        fs.readFileSync("D:\meanPrograms\oopPrograms\commercialDprocess\companyShares.json", sJson);
                        JSON.stringify(sJson)
                    } else {
                        throw "Currently there are no shares available...Try again after some time!";
                    }
                });
            });
            let insertJson = {
                CompanyName: company_name,
                Shares: shares,
                Amount: amount,
                Time: date
            };
            mJson.forEach(element => {
                flag = false;
                element[username].forEach(keyElement => {
                    if (keyElement["companyName"] === company_name) {
                        flag = true;
                        keyElement["Shares"] += shares;
                        keyElement["Amount"] += amount;
                        keyElement["Time"] = date;
                    }

                });
                if (flag == false)
                    element[username].push(insertJson);
            })
            fs.writeFileSync("D:\meanPrograms\oopPrograms\commercialDprocess\members.json", mJson);
            JSON.stringify(mjson)
        } catch (e) {
            console.log(e)
        }
    }

        Account.prototype.valueOf = () => {

            try {
                let company = fs.readFileSync("D://meanPrograms//oopPrograms//commercialDprocess//members.json");
                let mJson = JSON.parse(company);

                JSON.inventoryCost = 0;
                mJson.forEach((ele) => {
                    let key = Object.keys(ele);
                    key.forEach(keyele => {
                        ele[keyele].forEach(value => {
                            let cost = value.Amount;
                            JSON.inventoryCost += cost;
                            console.log("Shares", keyele, " ==>", cost);
                        });
                    });
                });
                console.log("Total inventoryCost is ", JSON.inventoryCost);
            } catch (e) {
                console.log(e);
            }
        }
        /*Takes two argument amount and username,Sells the shares and updates memflagerShares json*/
        Account.prototype.shareSell = (amount, username, company_name) => {
            try {

                let shares;
                sJson.forEach(element => {
                    element["XYZ"].forEach(ele => {
                        shares = parseInt(amount / parseInt(ele["Price"]));
                    });
                });
                let member = rw.readJson(path);
                member.forEach(element => {
                    element[username].forEach(ele => {
                        if (ele["CompanyName"] == company_name) {
                            ele["Shares"] -= shares;
                            ele["Amount"] -= amount;
                        }

                    })
                })

                fs.writeFileSync("D:\meanPrograms\oopPrograms\commercialDprocess\companyShares.json", sJson);
                JSON.stringify(sJson);
                console.log(username, "Process Sucessful,You have sold", shares, "Shares of", company_name);

            } catch (e) {
                console.log(e);
            }
        }
        /*This method takes no argument,reads json company file and pushes to linked list and display*/
        Account.prototype.insertJsonToLink = () => {

            let i = 0;
            sJson.forEach(element => {
                let keys = Object.keys(element);
                keys.forEach((keyele) => {
                    array[i] = new link();
                    array[i].insertJsonfront(keys[i])
                    array[i].insertJsonfront(element[keyele])
                    i += 1;
                })

            });

        }
        /*This method takes no argument,reads json company file and display the data*/
        Account.prototype.display = () => {
            try {

                let i = 0;
                sJson.forEach(element => {
                    let keys = Object.keys(element);
                    keys.forEach((keyele) => {

                        console.log(array[i].displayLink())
                        i += 1;
                    })

                });

            } catch (e) {
                console.log(e);
            }
        }