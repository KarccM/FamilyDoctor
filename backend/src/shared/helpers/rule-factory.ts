import { Rule } from "src/rules/rule.schema";
import { Rule as RuleClass } from "src/inference-engine/classes/rule";
import { Condition as ConditionClass } from "src/inference-engine/classes/condition";
import { ConditionFactory } from "./condition-factory";


export function RuleFactory(rule: Rule): RuleClass {
    let ruleInstance: RuleClass;
    let condInstances: ConditionClass[] = [];
    rule.conditions.forEach(c => {
        let condInstance = ConditionFactory(c);
        condInstances.push(condInstance);
    });
    ruleInstance = new RuleClass(condInstances);
    return ruleInstance;
}