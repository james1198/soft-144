class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
}

class BinarySearchTree {
  constructor() {
    this.root = null;
}

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      console.log('NewNode:', newNode);
    } else {
      this.insertNode(this.root, newNode);
    }
}

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
}

  contains(value) {
    return this._contains(this.root, value);
}

  _contains(node, value) {
    if (node === null) return false;
    if (value === node.value) return true;
    if (value < node.value) return this._contains(node.left, value);
    return this._contains(node.right, value);
}
  remove(value) {
    this.root = this._removeNode(this.root, value);
}

_removeNode(node, value) {
if (node === null) return null;

if (value < node.value) {
    node.left = this._removeNode(node.left, value);
} else if (value > node.value) {
    node.right = this._removeNode(node.right, value);
} else {
    if (node.left === null && node.right === null) {
    return null;
} else if (node.left === null) {
    return node.right;
} else if (node.right === null) {
    return node.left;
} else {
    const minValue = this._findMinValue(node.right);
    node.value = minValue;
    node.right = this._removeNode(node.right, minValue);
    }
    }
return node;
}

  inOrderTraversal() {
    const result = [];
    this._inOrderTraversal(this.root, result);
    return result;
}

    _inOrderTraversal(node, result) {
    if (node !== null) {
        this._inOrderTraversal(node.left, result);
        result.push(node.value);
        this._inOrderTraversal(node.right, result);
    }
}

  preOrderTraversal() {
    const result = [];
    this._preOrderTraversal(this.root, result);
    return result;
}

    _preOrderTraversal(node, result) {
    if (node !== null) {
        result.push(node.value);
        this._preOrderTraversal(node.left, result);
        this._preOrderTraversal(node.right, result);
    }  
}

    postOrderTraversal() {
    const result = [];
    this._postOrderTraversal(this.root, result);
    return result;
}

    _postOrderTraversal(node, result) {
    if (node !== null) {
        this._postOrderTraversal(node.left, result);
        this._postOrderTraversal(node.right, result);
        result.push(node.value);
    }
}

    height() {
    return this._height(this.root);
}
     

  // Search method
  search(value) {
    return this._search(this.root, value);
  }

  _search(node, value) {
    if (node === null) return false;
    if (value === node.value) return true;
    if (value < node.value) return this._search(node.left, value);
    return this._search(node.right, value);
  }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(1);
bst.insert(6);
bst.insert(10);
bst.insert(5);
bst.insert(15);


console.log("Root:", bst.root.value); // 8
console.log("Search 6:", bst.search(6)); // true
