class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (e) => e !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (e) => e !== vertex1
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex].length) {
      this.removeEdge(vertex, this.adjacencyList[vertex][0]);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}

let myGraph = new Graph();
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 4);
myGraph.addEdge(2, 4);
myGraph.addEdge(3, 4);
console.log(myGraph);
