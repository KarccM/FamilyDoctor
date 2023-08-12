import { Rule } from "src/rules/rule.schema";
import { Rule as RuleClass } from "src/inference-engine/classes/rule";
import { Condition as ConditionClass } from "src/inference-engine/classes/condition";
import { ConditionFactory } from "./condition-factory";
import { ConditionValue as ConditionValueType } from "../Utils/constants/types";


export function RuleFactory(rule: Rule): RuleClass {
    let ruleInstance: RuleClass;
    let condInstances: ConditionValueType[] = [];
    rule.conditions.forEach(c => {
        console.log(+c[0].name + '....' +c[1])
        let condInstance = ConditionFactory(c);
        condInstances.push([condInstance, c[1]]);
    });
    console.log('From RuleFactory\n'+rule.conditions)
    ruleInstance = new RuleClass(condInstances);
    return ruleInstance;
}