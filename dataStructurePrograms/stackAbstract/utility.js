module.exports.mylink1 = class Stack {

    constructor() {
        this.items = [];
        this.top = -1;

    }
    push(element) {
        this.top = this.top + 1;
        this.items[this.top] = element;
        this.items.push(element);
    }
    pop() {

        if (this.top === -1) {
            return "stack is empty";
        } else {
            var item = this.items[this.top];
            this.top = this.top - 1;
            return item;
        }
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    printStack() {
        var str = " ";
        for (var i = this.top; i >= 0; i--)
            str += this.items[i] + " ";
        return str;
    }
}