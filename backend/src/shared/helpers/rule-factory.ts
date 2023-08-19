import { Rule } from 'src/rules/rule.schema';
import { Rule as RuleClass } from 'src/inference-engine/classes/rule';
import { Condition as ConditionClass } from 'src/inference-engine/classes/condition';
import { ConditionFactory } from './condition-factory';

export function RuleFactory(rule: Rule): RuleClass {
  let ruleInstance: RuleClass;
  let condInstances: ConditionClass[] = [];
  rule.conditions.forEach((c) => {
    let condInstance = ConditionFactory(c);
    condInstances.push(condInstance);
  });
  if (
    rule.ruleWeight != null &&
    rule.ruleValidity != null &&
    rule.trueCondCount != null &&
    rule.ruleFired != null
  ) {
    ruleInstance = new RuleClass(
      condInstances,
      rule.ruleWeight,
      rule.ruleFired,
      rule.trueCondCount,
      rule.ruleValidity,
    );
  } else ruleInstance = new RuleClass(condInstances);
  return ruleInstance;
}
