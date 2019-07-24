module.exports.qlink=function Queue(){
 let items = [];
 let front = 0;
 let rear = -1;
 let count = 0;
  
 //Add a new element in queue
 this.enqueue = (elm) => {
   items[++rear] = elm;
   count++;
 }
  
 //Remove element from the queue
 this.dequeue = () => {
   let current = front++;
   let temp = items[current]; 
   items[current] = null;
   count--;
   return temp;
 }
  
 //Return the first element from the queue
 this.front = () => {
   return items[front];
 }

 //Return the last element from the queue
 this.rear = () => {
   return items[rear];
 }
  
 //Check if queue is empty
 this.isEmpty = () => {
   return count === 0;
 }
  
 //Return the size of the queue
 this.size = () => {
   return count;
 }
  
 //Print the queue
 this.print = () => {
  let temp = items.filter((e) => e !== null);
  console.log(temp.toString());
 };
  
}

