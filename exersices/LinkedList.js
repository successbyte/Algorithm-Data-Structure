// LL is equal to LinkedList
// node class that creates new nodes
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class that created a new LinkedList
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  //   add new node to the end to LL
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const myLL = new LinkedList(7);
myLL.push(4);
console.log(myLL);
