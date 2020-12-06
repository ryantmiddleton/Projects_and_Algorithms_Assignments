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
        if(this.head == null)
            return null;
        else{
            this.head = this.head.next;
            return this.head;
        }
    }
// Front
// Write a method to return the value (not the node) at the 
// head of the list. If the list is empty, return null.

    front() {
        if(this.head == null)
            return null;
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

    length() {
        var count = 0;
        for(i=this.head;i != null;i=i.next, count++);
        return count;
    }

    display(){
        var strList="";
        for(i=this.head;i !=null; i=i.next)
            strList = strList + i.value + "--> ";
        console.log(strList);
    }

    // Create method max() to return list’s largest val.

    max(){
        if (this.head == null)
            return null;

        var max = this.head.value;
        for(i=this.head;i !=null; i=i.next){
            if(i.value > max)
                max = i.value;
        }
        return max;
    }

    // Create min() to return list’s smallest val.

    min(){
        if (this.head == null)
            return null;

        var min = this.head.value;
        for(i=this.head;i !=null; i=i.next){
            if(i.value < min)
                min = i.value;
        }
        return min;
    }

    // Create average() to return average val.

    average(){
        if (this.head == null)
            return null;

        var sum = 0;
        for(i=this.head;i !=null; i=i.next)
            sum += i.value;
        return sum/this.length();
    }

 } //End of SLL class

//  Test/Debug
// var newSLL = new SLL();
// newSLL.addFront(1);

//  for(i=2;i<=10;i++){
//      newSLL.addFront(i);
//  }

// newSLL.display();
// console.log(newSLL.front());
// newSLL.removeFront();
// console.log(newSLL.front());
// console.log(newSLL.contains(5));
// console.log(newSLL.length());
// console.log(newSLL.min());
// console.log(newSLL.max());
// console.log(newSLL.average());

