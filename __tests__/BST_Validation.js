const program = require("../Binary_Search_Tree/BstValidation");

class BST extends program.BST {
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  insertArray(array) {
    array.forEach((value) => {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    });
    return this;
  }
}

// let array = [];

// function getArray(tree) {
//   if (tree === null) return;
//   array.push(tree.value);
//   getArray(tree.left);
//   getArray(tree.right);
// }

let tests = [
  {
    test: new BST(5).insertArray([1, 2, 4, 2, 5, 23, 234, 6, 10]),
    expected: true,
  },
  {
    test: new BST(5).insertArray([1, 2, 4, 8, 5, 5, 10]),
    expected: true,
  },
  {
    test: new BST(5).insertArray([1, 3, 7, 4, 90]),
    expected: true,
  },
];

function testTrees(array) {
  array.forEach((test) => {
    console.log(
      program.validateBst(test.test) === test.expected ? "PASSED √" : "FAILED X"
    );
  });
}

testTrees(tests);
