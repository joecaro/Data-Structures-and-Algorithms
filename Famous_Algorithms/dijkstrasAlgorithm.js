// function dijkstrasAlgorithm(start, edges) {
//   const numberOfNodes = edges.length;
//   let minDistances = edges.map(() => Infinity);
//   minDistances[start] = 0;
//   let visited = new Set();

//   while (visited.size != numberOfNodes) {
//     let [node, currentMinDistance] = getNodeWithMinDistance(
//       minDistances,
//       visited
//     );

//     if (currentMinDistance === Infinity) {
//       break;
//     }

//     visited.add(node);

//     for (const edge of edges[node]) {
//       const [destination, distanceToDestination] = edge;

//       if (visited.has(destination)) {
//         continue;
//       }

//       const newPathDistance = currentMinDistance + distanceToDestination;
//       const currentDestinationDistance = minDistances[destination];
//       if (newPathDistance < currentDestinationDistance) {
//         minDistances[destination] = newPathDistance;
//       }
//     }
//   }

//   return minDistances.map((x) => (x === Infinity ? -1 : x));
// }

function dijkstrasAlgorithm(start, edges) {
  const numberOfNodes = edges.length;
  let minDistances = edges.map(() => Infinity);
  minDistances[start] = 0;
  let visited = new Set();

  while (visited.size != numberOfNodes) {
    let [node, currentMinDistance] = getNodeWithMinDistance(
      minDistances,
      visited
    );

    if (currentMinDistance === Infinity) {
      break;
    }

    visited.add(node);

    for (const edge of edges[node]) {
      const [destination, distanceToDestination] = edge;

      if (visited.has(destination)) {
        continue;
      }

      const newPathDistance = currentMinDistance + distanceToDestination;
      const currentDestinationDistance = minDistances[destination];
      if (newPathDistance < currentDestinationDistance) {
        minDistances[destination] = newPathDistance;
      }
    }
  }

  return minDistances.map((x) => (x === Infinity ? -1 : x));
}
//Min Heap for Optimization
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    console.log(array);
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
}

function getNodeWithMinDistance(distances, visited) {
  let currentMinDistance = Infinity;
  let vertex = -1;

  for (const [vertexIdx, distance] of distances.entries()) {
    if (visited.has(vertexIdx)) {
      continue;
    }
    if (distance <= currentMinDistance) {
      vertex = vertexIdx;
      currentMinDistance = distance;
    }
  }
  return [vertex, currentMinDistance];
}

exports.dijkstrasAlgorithm = dijkstrasAlgorithm;
