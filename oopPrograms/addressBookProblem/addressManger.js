/********************************************************************************************************************
* @Execution : default node : cmd> addressManager.js
*
* @Purpose :Object oriented concepts
*
* @description : Address book manager who can manage functions in a address book like add contact,edit contact
and delete contact.
* 
* @overview :Object oriented analysis and design of simple address problem
* @author : Abhilash <aabhilash765@gmail.com>
* @version : 1.0
* @since : 29-July-2019
*
*******************************************************************************************************************/
try {
    let address = require('./utility');
    let contact = new address();
    let read = require('readline-sync');
    for (;;) {
        console.log("--------------------ADDRESS BOOK PROBLEM-----------------------");
        console.log();
        console.log("\n1.ADD CONTACT\n2.EDIT CONTACT\n3.DELETE CONTACT\n4.SEARCH CONTACT");
        // reading user's choice
        let choice = read.questionInt("Enter your choice :");
        switch (choice) {
            case 1:
                // Adding contact to the addsress
                contact.addContact();
                break;
            case 2:
                // Editing contact
                contact.editContact();
                break;
            case 3:
                // Deleting contact
                contact.deleteContact();
                break;
            case 4:
                // Searching contact
                contact.searchContact();
                break;
            default:
                process.exit(0);
        }
    }

} catch (e) {
    console.log(e);
}