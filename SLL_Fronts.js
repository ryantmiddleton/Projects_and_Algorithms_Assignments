// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// Add Front
// Write a method that accepts a value and create a new node, 
// assign it to the list head, and return a pointer to the 
// new head node.

 class SLL {
     // constructor, other methods, removed for brevity
     addFront(value) {
        myNode = new Node(value);
        myNode.next = this.head;
        this.head = myNode;
        return this.head;
    }
 }
// Remove Front
// Write a method to remove the head node and return the new 
// list head node. If the list is empty, return null.

 class SLL {
    // constructor, other methods, removed for brevity
     removeFront() {
         if(this.next == NULL)
            return NULL;
        else{
            this.head = this.head.next;
            return this.head;
        }
    }
 }
// Front
// Write a method to return the value (not the node) at the 
// head of the list. If the list is empty, return null.

 class SLL {
    // constructor, other methods, removed for brevity
     front() {
        if(this.head == NULL)
            return NULL;
        else
            return this.head.value;
    }
 }