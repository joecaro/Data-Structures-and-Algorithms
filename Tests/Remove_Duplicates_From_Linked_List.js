const program = require("../LinkedList/Remove_Duplicates");

class LinkedList extends program.LinkedList {
  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }

  compareTo(linkedList) {
    let thisList = this.getNodesInArray();
    let testList = linkedList.getNodesInArray();
    thisList.forEach((node, index) => {
      if (node !== testList[index]) return false;
    });
    return true;
  }
}

const tests = [
  {
    input: new LinkedList(1).addMany([1, 2, 3]),
    expected: new LinkedList(1).addMany([2, 3]),
  },
  {
    input: new LinkedList(1).addMany([1, 2, 2, 3]),
    expected: new LinkedList(1).addMany([2, 3]),
  },
  {
    input: new LinkedList(1).addMany([1, 2, 3, 5, 5, 6]),
    expected: new LinkedList(1).addMany([2, 3, 5, 6]),
  },
];

tests.forEach((test) => {
  console.log(test.input.compareTo(test.expected) ? "Passed √" : "Failed X");
});
