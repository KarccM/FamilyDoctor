class PQueue {
  constructor() {
    this.init();
    console.log('PQueue Init');
  }
  init() {
    //we should get answer for reading last session or create new init value
    this.nodes = [{ ...node }, { ...node }, { ...node, score: 29 }];
    console.log('init called inside pq');

  }
  head(n = 1) {
    console.log('head called inside pq');
    return this.nodes.slice(0, n);
  }
  update() {
    console.log('update called inside pq');
    //sort depend on value 
    this.nodes.map(node => node.calculate());
    this.nodes = this.nodes.sort((nodeA, nodeB) => compareNumbers(nodeA.score, nodeB.score));
  }
  all() {
    console.log('all called inside pq');
    return this.nodes;
  }
  print() {
    console.log(this.nodes);
  }
}

export default PQueue;


let node = {
  score: 2,
  calculate() {
    this.score += 1;
    console.log(this.score);
  }
}

function compareNumbers(a, b) {
  return a - b;
}