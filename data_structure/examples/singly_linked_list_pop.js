/*
- If there're no nodes in the list, return undefined.
- Loop through the list until you reach the tail.
- Set the next property of the 2nd to last node to be null.
- Set the tail to be the 2nd to last node.
- Decrement the length of the list by 1.
- Return the value of the node removed.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // If there're no nodes in the list, return undefined.
    if (!this.head) {
      return undefined;
    }
    // Loop through the list until you reach the tail.
    // (1) Declare a variable called current as the head
    // (2) Declare a variable called newTail and point to the head
    let current = this.head;
    let newTail = current;
    // Loop through the list until you reach the tail.
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    //  Set the next property of the 2nd to last node to be null.
    this.tail.next = null;
    this.length--;
    // Here to check if there's head or tail
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}
