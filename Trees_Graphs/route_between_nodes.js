// Given a directed graph, design an algorithm to find out whether there is a
// route between two nodes

// Clarifications:
// 1. Is this a directed or undirected graph?
// 2. Can I assume the connecting nodes are stored as an array in each graph
// 3. return true / false?

// Ideas:
// Use bfs to find other node
// Use bidirectional search to find a node which matches path of both nodes

const { directedNonCircular, directedCircular, undirectedNonCircular, undirectedCircular } = require('./graph');

const findRoute = (graph, startNode, endNode) => {
  const seenNodes = new Set()
  let queue = [startNode]

  while (queue.length > 0) {
    const currentNode = queue.shift()

    if (currentNode.value === endNode.value) { return true }

    if (!seenNodes.has(currentNode.value)) {
     seenNodes.add(currentNode.value)
     queue = [...queue, ...currentNode.connections]
    }

  }

  return false
}

const dncStart =  directedNonCircular.nodes[0]
const dncEnd =  directedNonCircular.nodes[directedNonCircular.nodes.length - 1]

const dcStart = directedCircular.nodes[0]
const dcEnd = directedCircular.nodes[directedCircular.nodes.length - 1]

const uncStart = undirectedNonCircular.nodes[0]
const uncEnd = undirectedNonCircular.nodes[undirectedNonCircular.nodes.length - 1]

const udcStart = undirectedCircular.nodes[0]
const udcEnd = undirectedCircular.nodes[undirectedCircular.nodes.length - 1]

console.log(findRoute(directedNonCircular, dncStart, dncEnd))
console.log(findRoute(directedCircular, dcStart, dcEnd))
console.log(findRoute(undirectedNonCircular, uncStart, uncEnd))
console.log(findRoute(undirectedCircular, udcStart, udcEnd))
