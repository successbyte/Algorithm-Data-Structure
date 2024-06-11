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

  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;

    // if (!this.head) {
    //     return undefined;
    //   }
    // else if (this.length === 1) {
    //   this.temp = this.head;
    //   this.head = null;
    //   this.tail = null;
    //   this.length = 0;
    //   return this.temp;
    // } else {
    //   this.temp = this.head;
    //   for (let node = 1; node < this.length; node++) {
    //     if (node !== this.length - 1) {
    //       this.temp = this.temp.next;
    //     } else if (node === this.length - 1) {
    //       this.tail = this.temp;
    //       this.temp.next = null;
    //       this.length--;
    //     }
    //   }
    // }
  }
}

const myLL = new LinkedList(1);
myLL.push(2);

console.log(myLL);
