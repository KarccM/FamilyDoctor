export var INF = 999;

export function compareFn(a, b, order = 'desc') {
  return order === 'desc' ? b - a : a - b;
}

export abstract class Condition {
  name: string;
  question: string;
  values: any[];
  answer: any;

  constructor(name: string, question: string, values: any[]) {
    this.name = name;
    this.question = question;
    this.values = values;
  }

  toString() {
    return `[Condition]\n\tname: ${this.name}\n`;
  }
}

export class Symptom extends Condition {
  answer: any;
  constructor(name: string, question: string) {
    const values = ['yes', 'no', 'unk'];
    super(name, question, values);
    this.answer = undefined;
  }
}

export class MedicalCondition extends Condition {
  answer: any;
  constructor(name: string, question: string, values: []) {
    super(name, question, values);
    this.answer = undefined;
  }
}

export class Rule {
  conditions: Condition[];
  ruleLength: number;
  trueCondCount: number;
  ruleWeight: number;
  ruleValidity: boolean;

  constructor(conditions: Condition[]) {
    this.conditions = conditions;
    this.ruleLength = this.conditions.length;
    this.trueCondCount = 0;
    this.ruleWeight = -INF;
    this.ruleValidity = true;
  }

  updateRule(visitedCondition: Condition): void {
    this.conditions = this.conditions.map((condition) => {
      if (condition.name === visitedCondition.name) {
        condition.answer = visitedCondition.answer;
        if (condition.answer === 'yes') {
          //TODO: make this more general by considering which value is the true value.
          this.trueCondCount += 1;
        } else if (condition.answer === 'no') {
          this.trueCondCount = -INF;
          this.ruleValidity = false;
        }
        return condition;
      }
      return condition;
    });

    this.ruleWeight = this.trueCondCount - this.ruleLength;
  }

  toString() {
    return `[Rule]\n\t conditions: ${this.conditions} \n\t rule weight: ${this.ruleWeight}`;
  }
}

export abstract class Conclusion {
  name: string;
  priority: number;
  rules: Rule[];

  constructor(name: string, rules: Rule[], priority: number) {
    this.name = name;
    this.rules = rules;
    this.priority = priority;
  }

  abstract updateRules(visitedCondition: Condition);

  topNConditions(n: number = 1): Condition[] {
    let prominantConditions: { condition: Condition; value: number }[] = [];
    this.rules.forEach((rule) => {
      rule.conditions.forEach((cond) => {
        if (cond.answer == undefined) {
          let pc = prominantConditions.find(
            (c) => c.condition.name == cond.name,
            prominantConditions,
          );
          if (pc != undefined) {
            pc.value += 1;
          } else {
            prominantConditions.push({ condition: cond, value: 1 });
          }
        }
      });
    });
    return prominantConditions
      .sort((pc1, pc2) => compareFn(pc1.value, pc2.value, 'desc'))
      .map((c) => c.condition)
      .slice(0, n);
    // let sorted = prominantConditions.map(c=> c.condition );
  }

  topNRules(): Rule[] {
    return this.rules.sort((ruleA, ruleB) =>
      compareFn(ruleA.ruleWeight, ruleB.ruleWeight, 'asc'),
    );
  }

  getScore(): number {
    let topRuleWeight = this.topNRules()[0]?.ruleWeight ?? -INF;
    return this.priority + topRuleWeight;
  }

  toString() {
    return `[Conclusion] ${this.name}\t priority: ${this.priority}\n\t rules: ${this.rules}`;
  }
}

export class Diagnosis extends Conclusion {
  treatment: string[];
  specialist: string;
  notes: string[];

  constructor(
    name: string,
    rules: Rule[],
    priority: number,
    treatment: string[],
    specialist: string,
    notes: string[],
  ) {
    super(name, rules, priority);
    this.treatment = treatment;
    this.specialist = specialist;
    this.notes = notes;
  }

  updateRules(visitedCondition: Condition) {
    this.rules.forEach((rule) => {
      rule.updateRule(visitedCondition);
    });
    this.rules = this.rules.filter((r) => r.ruleValidity);
  }
}

export class Disease extends Diagnosis {
  constructor(
    name: string,
    rules: Rule[],
    priority: number,
    treatment: string[],
    specialist: string,
    notes: string[],
  ) {
    super(name, rules, priority, treatment, specialist, notes);
  }
}

export class Node {
  conclusion: Conclusion;
  score: number;
  previouslyTried: boolean;

  constructor(conclusion) {
    this.conclusion = conclusion;
    this.previouslyTried = false;
  }

  getScore(): number {
    return this.conclusion.getScore();
  }

  topNConditions(n = 1) {
    return this.conclusion.topNConditions(n);
  }

  updateRules(visitedCondition) {
    this.conclusion.updateRules(visitedCondition);
  }

  toString() {
    return `\n[Node] with conclusion ${
      this.conclusion
    }\n \t with score ${this.getScore()} \t and previouslyTried = ${
      this.previouslyTried
    }\n`;
  }
}

export class PriorityQueue {
  nodes: Node[];

  constructor(nodes: Node[]) {
    this.nodes = nodes;
    this.sortNodes();
  }

  getHead(n = 1) {
    return this.nodes.slice(0, n);
  }

  sortNodes() {
    this.nodes = this.nodes.sort((nodeA, nodeB) => {
      return compareFn(nodeA.getScore(), nodeB.getScore());
    });
  }

  updateNodes(visitedCondition: Condition) {
    this.nodes.forEach((node) => {
      node.conclusion.updateRules(visitedCondition);
    });
    this.sortNodes();
  }

  getAllNodes(): Node[] {
    return this.nodes;
  }

  toString() {
    this.sortNodes();
    return `\n[PriorityQueue] with nodes: ${this.nodes} `;
  }
}

let vomit = new Symptom('vomit', 'Do you suffer from vomiting?');
let nausea = new Symptom('nausea', 'Do you suffer from nausea?');
let bloating = new Symptom('bloating', 'Do you suffer from bloating?');
let constipation = new Symptom(
  'constipation',
  'Do you suffer from constipation?',
);
let lackOfAppetite = new Symptom(
  'lackOfAppetite',
  'Do you suffer from lackOfAppetite?',
);
let stomacheBurn = new Symptom(
  'StomacheBurn',
  'Do you suffer from StomacheBurn?',
);
let bloodyStools = new Symptom(
  'bloodyStools',
  'Do you suffer from bloodyStools?',
);
let fatigue = new Symptom('fatigue', 'Do you suffer from fatigue?');
let diarrhea = new Symptom('diarrhea', 'Do you suffer from diarrhea?');
let hyperthermia = new Symptom(
  'hyperthermia',
  'Do you suffer from hyperthermia?',
);
let earPain = new Symptom('earPain', 'Do you suffer from earPain?');
let tinnitus = new Symptom('tinnitus', 'Do you suffer from tinnitus?');
let hearingImpairment = new Symptom(
  'hearningImpairment',
  'Do you suffer from hearingImpairment?',
);
let headache = new Symptom('headache', 'Do you suffer from headache?');
let sweating = new Symptom('sweating', 'Do you suffer from sweating?');
let cough = new Symptom('cough', 'Do you suffer from cough?');
let musclePain = new Symptom('musclePain', 'Do you suffer from musclePain?');
let stuffyNose = new Symptom('stuffyNose', 'Do you suffer from stuffyNose?');
let dysphagia = new Symptom('dysphagia', 'Do you suffer from dysphagia?');

let node = new Node(
  new Disease(
    'كريب',
    [
      new Rule([vomit, nausea, bloating]),
      new Rule([diarrhea, hearingImpairment, bloating]),
      new Rule([diarrhea, nausea, stuffyNose]),
    ],
    2,
    ['treatment'],
    'specialist',
    ['notes'],
  ),
);

let node2 = new Node(
  new Disease(
    '2كريب',
    [
      new Rule([earPain, nausea, hearingImpairment]),
      new Rule([earPain, hearingImpairment, stuffyNose]),
      new Rule([dysphagia, hearingImpairment, stuffyNose]),
    ],
    99,
    ['treatment'],
    'specialist',
    ['notes'],
  ),
);

let node3 = new Node(
  new Disease(
    '3كريب',
    [
      new Rule([vomit, nausea, bloating]),
      new Rule([stuffyNose, hearingImpairment, bloating]),
      new Rule([diarrhea, nausea, hearingImpairment]),
    ],
    -33,
    ['treatment'],
    'specialist',
    ['notes'],
  ),
);

let pq = new PriorityQueue([node, node2, node3]);

let s1 = pq.getHead()[0].conclusion.topNConditions()[0];
console.log('\nThis is the first symptom to ask about: \n', s1);
s1.answer = 'no';
pq.updateNodes(s1);
console.log('\nThis is the priority queue \n', pq);
console.log('\nThis is the priority queye head\n', pq.getHead()[0]);

let s2 = pq.getHead()[0].conclusion.topNConditions()[0];
s2.answer = 'yes';
pq.updateNodes(s2);
console.log('\nThis is the priority queue \n', pq);
console.log('\nThis is the priority queye head\n', pq.getHead()[0]);
