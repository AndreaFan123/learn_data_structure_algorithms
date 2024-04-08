class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let linkedList = new Node(1);
linkedList.next = new Node(2);
linkedList.next.next = new Node(3);
linkedList.next.next.next = new Node(4);
linkedList.next.next.next.next = new Node(5);

console.log(linkedList);
