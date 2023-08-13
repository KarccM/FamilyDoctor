import { Condition } from './condition';
import { ConditionValue } from 'src/shared/Utils/constants/types';
export var INF = 999;

// export type CondAnswer = Record<Condition, any>

export class Rule {
  // conditions: Condition[];
  conditions: ConditionValue[];
  ruleLength: number;
  trueCondCount: number;
  ruleWeight: number;
  ruleValidity: boolean;

  constructor(conditions: ConditionValue[]) {
    this.conditions = conditions;
    this.ruleLength = this.conditions.length;
    this.trueCondCount = 0;
    this.ruleWeight = -INF;
    this.ruleValidity = true;
  }

  updateRule(visitedCondition: Condition): void {
    this.conditions = this.conditions.map((condition) => {
      if (condition[0].name === visitedCondition.name) {
        condition[0].answer = visitedCondition.answer;
        if (condition[0].answer === condition[1]) {
          //TODO: make this more general by considering which value is the true value.
          this.trueCondCount += 1;
        } else if (condition[0].answer === 'no') {
          this.trueCondCount = -INF;
          this.ruleValidity = false;
        }
      }
      return condition;
    });

    this.ruleWeight = this.trueCondCount - this.ruleLength;
  }

  toString() {
    return `[Rule]\n\t conditions: ${this.conditions} \n\t rule weight: ${this.ruleWeight}`;
  }
}
