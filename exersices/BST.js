class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = null;
  }
}

const newBST = new BST(2);
console.log(newBST);
