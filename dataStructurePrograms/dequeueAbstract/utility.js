module.exports.qlink=class Queue{
		constructor() {
		  this.tail = 1
		  this.head = 1
		  this.storage = {}
		}
	   removeFront() {
		 delete this.storage[this.head];
	   }
	   removeRear() {
		  delete this.storage[this.tail];
	   }		
	   enQueue(data) {
		  this.storage[this.head] = data
		  this.head++
		}
		deQueue() {
		   let oldestIndex = this.tail
		  let newestIndex = this.head
		  let deletedData
		  if (oldestIndex !== newestIndex) {
			  deletedData = this.storage[oldestIndex]
			  delete this.storage[oldestIndex]
			  this.tail++
			  return deletedData
		  }
		}
		// check(){
		// 	var res=false;
		// 	while(this.storage[this.head]>this.storage[this.tail]){
		// 	if(this.head===this.tail)
		// 	{
		// 		this.tail++;
		// 		this.head--;
		// 		res=true;
		// 	}
		// }
		// 	return res;
		// }
		print(){
			var result = [];
			for (var key in this.storage){
			  result.push(this.storage[key]);
			}
			return result;
		  }
	  }
