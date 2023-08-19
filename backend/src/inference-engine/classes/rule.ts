import { DoNotKnowValue } from 'src/shared/Utils/constants/constants';
import { Condition } from './condition';
export var INF = 999;

export class Rule {
  conditions: Condition[];
  ruleLength: number;
  trueCondCount: number;
  ruleWeight: number;
  ruleValidity: boolean;
  ruleFired: boolean;

  constructor(
    conditions: Condition[],
    ruleWeight = -INF,
    ruleFired = false,
    trueCondCount = 0,
    ruleValidity = true,
  ) {
    this.conditions = conditions;
    this.ruleLength = this.conditions.length;
    this.trueCondCount = trueCondCount;
    this.ruleWeight = ruleWeight;
    this.ruleValidity = ruleValidity;
    this.ruleFired = ruleFired;
  }

  updateRule(visitedCondition: Condition): void {
    console.log('this is the conditions ' + this.conditions);
    this.conditions = this.conditions.map((condition) => {
      if (condition.name === visitedCondition.name) {
        this.updateCondition(condition, visitedCondition);
        return condition;
      }
      return condition;
    });
    this.ruleWeight = this.trueCondCount - this.ruleLength;
    this.ruleFired = this.ruleWeight == 0;
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
