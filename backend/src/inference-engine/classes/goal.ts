import { Conclusion } from './conclusion';
import { Condition } from './condition';

export class Goal {
  conclusion: Conclusion;
  score: number;
  previouslyTried: boolean;

  constructor(conclusion: Conclusion) {
    this.conclusion = conclusion;
    this.previouslyTried = false;
  }

  getScore(): number {
    return this.conclusion.getScore();
  }

  topNConditions(n = 1) {
    return this.conclusion.topNConditions(n);
  }

  updateRules(visitedCondition: Condition) {
    this.conclusion.updateRules(visitedCondition);
  }

  toString() {
    return `\n[Goal] with conclusion ${
      this.conclusion
    }\n \t with score ${this.getScore()} \t and previouslyTried = ${
      this.previouslyTried
    }\n`;
  }
}
