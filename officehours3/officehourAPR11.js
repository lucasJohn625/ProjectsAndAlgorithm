//for vs while

for (let i = 10; i <= 15; i++){
    //do something
}

let i = 10;
while(i <= 15){
    //do something
    i++

}

//go through all nodes in singly linked list from start to end 
//nodes
let runner = this.head;  //starting point name of varible to move around linked list
while(runner != null){
//while(runner.next != null)   same^
   runner = runner.next   // nexy node

}
--------------------------------------------------------------------------------------------------

class SLL {
    constructor(){
        this.head= null;
    }
    lenth(){
        let runner = this.head;
        let count = 0;
        while(runner != null){
            count++ //1 more node in list
            runner = runner.next   
        }
        return count //outside while loop so the loop gets to the end 

    }
}
