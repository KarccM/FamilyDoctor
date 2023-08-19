import { DoNotKnowValue } from 'src/shared/Utils/constants/constants';
import { Condition } from './condition';
export var INF = 999;

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
    console.log('this is the conditions ' + this.conditions);
    this.conditions = this.conditions.map((condition) => {
      if (condition.name === visitedCondition.name) {
        this.updateCondition(condition, visitedCondition);
        return condition; // ??
      }
      return condition; // ??
    });

    this.ruleWeight = this.trueCondCount - this.ruleLength;
  }

  updateCondition(condition: Condition, visitedCondition: Condition) {
    condition.setAnswer(visitedCondition.user_answer);
    if (condition.user_answer == condition.value) {
      this.trueCondCount += 1;
    } else if (
      condition.user_answer != DoNotKnowValue ||
      condition.user_answer != condition.value
    ) {
      this.trueCondCount = -INF;
      this.ruleValidity = false;
    }
  }

  toString() {
    return `[Rule]\n\t conditions: ${this.conditions} \n\t rule weight: ${this.ruleWeight}`;
  }
}
