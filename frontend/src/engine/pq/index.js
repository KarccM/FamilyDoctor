class PQueue {
  constructor(nodes) {
    this.init(nodes);
    console.log('PQueue Init');
  }
  init(nodes) {
    //we should get answer for reading last session or create new init value
    this.nodes = nodes;
    console.log('init called inside pq');

  }
  head(n = 1) {
    return this.nodes.slice(0, n);
  }
  update() {
    this.nodes = this.nodes.sort((nodeA, nodeB) => {
      return compareNumbers(nodeA.score(), nodeB.score())
    });
  }
  all() {
    return this.nodes;
  }
  print() {
    console.log(this.nodes);
  }
}

export default PQueue;

function compareNumbers(a, b) {
  return b - a;
}