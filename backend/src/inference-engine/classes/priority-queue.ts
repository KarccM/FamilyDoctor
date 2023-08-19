import { Conclusion, compareFn } from './conclusion';
import { Condition } from './condition';
import { Goal } from './goal';

export class PriorityQueue {
  goals: Goal[];
  lastQuestion: Condition;
  gotAConclusion: boolean;
  acheivedConcluion: Conclusion;

  constructor(goals: Goal[]) {
    this.goals = goals;
    this.sortNodes();
    this.lastQuestion = null;
    this.gotAConclusion = false;
  }

  getHead(n = 1) {
    return this.goals.slice(0, n);
  }

  sortNodes() {
    this.goals = this.goals.sort((goalA, goalB) => {
      return compareFn(goalA.getScore(), goalB.getScore());
    });
  }

  updateNodes(visitedCondition: Condition) {
    this.goals.forEach((goal) => {
      goal.conclusion.updateRules(visitedCondition);
      this.gotAConclusion = goal.conclusion.conclusionFired;
      if(this.gotAConclusion) this.acheivedConcluion = goal.conclusion;
    });
    this.sortNodes();
  }

  getAllNodes(): Goal[] {
    return this.goals;
  }

  askQuestion(): Condition {
    let condition: Condition;
    let goal: Goal;
    goal = this.getHead()[0];
    condition = goal.conclusion.topNConditions()[0];
    this.lastQuestion = condition;
    return condition;
  }

  getResponse(){
    if(this.gotAConclusion){
      return this.acheivedConcluion;
    }
    return this.askQuestion();
  }

  toString() {
    this.sortNodes();
    return `\n[PriorityQueue] with goals: ${this.goals} `;
  }
}
