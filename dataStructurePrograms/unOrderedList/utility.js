var read = require('readline-sync');
var fs = require('fs');
"use strict"
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

module.exports.mylink = class linkedlist {
    constructor() {
        this.head = null;
    }

    insertElement(elem) {
        let newnode = new Node(elem);
        if (this.head === null) {
            this.head = newnode;
            } else {
            newnode.next = this.head;
            this.head = newnode;
            console.log("New element inserted");
            this.display();
        }

    }

    display() {
        if (this.head == null) {
            console.log("Nothing to diplay.");
            return;
        }
        console.log("Elements present")
        this.t = this.head;
        while (this.t !== null) {
            console.log(this.t.data);
            this.t = this.t.next;
        }
    }

    delete(key) {
        this.prev = this.head;
        this.t = this.head;
        if (this.t.data === key) {
            this.head = this.t.next;
        } 
        else { 
            while (this.t !== null) {
                if (this.t.data === key) {
                    this.prev.next = this.t.next;
                }
                this.prev = this.t;
                this.t = this.t.next;
            }
        }
    }
    search(key) {
        let count = 0;
        this.t = this.head;
        while (this.t != null) {
            count += 1;
            if (this.t.data === key) {

                console.log(key, " is at position ", count);
                this.delete(key);
                console.log(key, "The key is deleted from list");
                return;
            }
            this.t = this.t.next;
        }
        if (this.t == null) {
            console.log("the element not found");
            this.insertElement(key);
        }
    }


    store() {
        var array = [];
        this.t = null;
        this.t = this.head;
        while (this.t !== null) {
            array.push(this.t.data);
            this.t = this.t.next;
        }
        fs.writeFile("D://meanFellowship//dataStructurePrograms//text.txt", array, (err, data) => {
            if (err) 
            throw "The element is not added to file";
            else console.log("------------------------------");
        });
    }
    

}
module.exports.readfile = readfile = () => {
    var array;
    array = (fs.readFileSync("D://meanFellowship//dataStructurePrograms//text.txt"));
    return array;
}