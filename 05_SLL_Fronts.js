class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
// Add Front
// Write a method that accepts a value and create a new node, 
// assign it to the list head, and return a pointer to the 
// new head node.

 class SLL {

    constructor(){
        this.head = null;
    }

    addFront(value) {
        var myNode = new Node(value);
        myNode.next = this.head;
        this.head = myNode;
        return this.head;
    }
// Remove Front
// Write a method to remove the head node and return the new 
// list head node. If the list is empty, return null.

    removeFront() {
        if(this.next == NULL)
            return NULL;
        else{
            this.head = this.head.next;
            return this.head;
        }
    }
// Front
// Write a method to return the value (not the node) at the 
// head of the list. If the list is empty, return null.

    front() {
        if(this.head == NULL)
            return NULL;
        else
            return this.head.value;
    }

// Contains
// Add a method contains(value) to your SLL class, which is given 
// a value as a parameter.  Return a boolean (true/false); true, 
// if the list possesses a node that contains the provided value.

    contains(value) {
        for(i=this.head;i != null;i=i.next){
            if (i.value == value)
                return true;
        }
        return false;
    }

    printList(){
        for(i=this.head;i !=null; i=i.next)
            console.log(i.value);
    }
 } //End of SLL class

//  Test/Debug
// var newSLL = new SLL();
// newSLL.addFront(1);

//  for(i=2;i<=10;i++){
//      newSLL.addFront(i);
//  }

// console.log(newSLL.contains(5));

