import { ConditionValue } from 'src/shared/Utils/constants/types';
import { Condition } from './condition';
import { INF, Rule } from './rule';
export function compareFn(a, b, order = 'desc') {
  return order === 'desc' ? b - a : a - b;
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

  updateRules(visitedCondition: Condition) {
    this.rules.forEach((rule) => {
      rule.updateRule(visitedCondition);
    });
    this.rules = this.rules.filter((r) => r.ruleValidity);
  }

  topNConditions(n: number = 1): Condition[] {
    let prominantConditions: { condition: ConditionValue; value: number }[] =
      [];
    this.rules.forEach((rule) => {
      rule.conditions.forEach((cond) => {
        if (cond[0].answer == undefined) {
          let pc = prominantConditions.find(
            (c) => c.condition[0].name == cond[0].name,
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
      .map((c) => c.condition[0])
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
