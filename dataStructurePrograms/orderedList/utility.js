var read = require('readline-sync');
var fs = require('fs');
"use strict"
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
module.exports.link2 = class linkedlist {
    constructor() {
        this.head = null;
    }

    insertNum(key) {
        let numNode = new Node(key);
        if (this.head === null) {
            this.head = numNode;
        }
         else 
         {
            numNode.next= this.head;
            this.head = numNode;
        }
        //console.log("New Numbers inserted");
           //this.displayNum();
        //this.sort();

    }
    displayNum() {
        if (this.head == null) {
            console.log("Nothing to diplay.");
            return;
        }
        console.log("Numbers present")
            this.temp = this.head;
            while (this.temp !== null) {
            console.log(this.temp.data);
            this.temp = this.temp.next;
        }
        this.sort();
    }
    pop(key) {
        this.prev = this.head;
        this.temp = this.head;
        if (this.temp.data === key) {
            this.head = this.temp.next;
        } 
        else {
            while (this.temp !== null) {
                if (this.temp.data === key) {
                    this.prev.next = this.temp.next;
                }
                this.prev = this.temp;
                this.temp = this.temp.next;
            }
        }
        this.sort();
    }
    searchNum(key) {
        this.temp = this.head;
        while (this.temp!== null) {
            if (this.temp.data === key) {
                console.log(key, " is found!");
                this.pop(key);
                console.log(key, " is deleted from list");
             return;
            }
            this.temp = this.temp.next;
        }
        if (this.temp === null) {
           console.log("Element not Found!");
             this.insertNum(key);
        }
    }
    sort()
    {
      if(this.head===null) 
      {
        console.log("Nothing to sort");
        return;
      }
      else
      {
        this.temp=this.head;
        while(this.temp!==null)
        { 
            this.current=this.temp.next;
            while(this.current!==null)
            {
                if((this.temp.data)>=(this.current.data))
                {
                this.temp1=this.temp.data;
                this.temp.data=this.current.data;
                this.current.data=this.temp1;
                }
                this.current=this.current.next;
            }
          this.temp=this.temp.next;
        }
      }
    }
    store() 
    {
        var array = [];
        this.temp = null;
        this.temp = this.head;
        while (this.temp !== null) {
            array.push(this.temp.data);
            this.temp = this.temp.next;
        }
        fs.writeFile("D://meanPrograms//dataStructurePrograms//orderedList//numbers.txt", array, (err, data) => {
            if (err) 
            throw "The the number is not added to file";
            else console.log("------------------------------");
        });
        this.sort();
    }

}
module.exports.readfile = readfile = () => {
    var array;
    array = (fs.readFileSync("D://meanPrograms//dataStructurePrograms//orderedList//numbers.txt"));
    return array;
}