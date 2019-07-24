module.exports.qlink = class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.queue;
    this.sQueue()
  }
  sQueue() {
    this.queu = [];
  }

  //Add a new element in queue
  enqueue(item) {
    this.queue[parseInt(this.rear)] = item;
    this.rear += 1;
  }

  //Remove element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return ' ';
    }
    var rem = this.queue[this.front];
    this.front += 1;
    return rem;
  }

  print() {
    if (this.isEmpty()) {
      console.log("EMPTY");
    }
    this.queue.slice(this.front, this.rear).forEach(element => {
      console.log(element);
    });
  }
}