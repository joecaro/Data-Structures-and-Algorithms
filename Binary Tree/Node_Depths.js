function nodeDepths(root) {
  const depths = [];
  findNodeDepths(root, 0, depths);
  const sum = depths.reduce((tally, depth) => tally + depth);
  return sum;
}

function findNodeDepths(node, depth, depths) {
  if (!node) return;

  depths.push(depth);
  const currentDepth = depth + 1;
  findNodeDepths(node.left, currentDepth, depths);
  findNodeDepths(node.right, currentDepth, depths);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
