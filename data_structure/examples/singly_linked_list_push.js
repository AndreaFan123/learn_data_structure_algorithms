/*
- This function should accept a value.
- Create a new node using the value passed to the function.
- If there is no head property on the list, set the head and tail to be the newly created node.
- Otherwise, set the next property on the tail to be that node and set the tail property on the list to be the newly created node.
- Increment the length by one.
- Return linked list.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add insertion method
  push(val) {
    //  Create a new node using the value passed to the function.
    const newNode = new Node(val);

    // If there is no head property on the list, set the head and tail to be the newly created node.
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Otherwise, set the next property on the tail to be that node and set the tail property on the list to be the newly created node.
      this.tail.next = newNode;
      this.tail = newNode;
    }
    //  Increment the length by one.
    this.length++;

    // Return linked list.
    return this;
  }
}

let list_1 = new SinglyLinkedList();

list_1.push("Hello");
list_1.push("there :)");

console.log(list_1);
