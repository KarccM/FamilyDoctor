import { Condition } from "./condition";
export var INF = 999;

export class Rule{
    conditions: Condition[];
    ruleLength: number;
    trueCondCount: number;
    ruleWeight: number;
    ruleValidity: boolean;

    constructor(conditions: Condition[]){
        this.conditions = conditions;
        this.ruleLength = this.conditions.length;
        this.trueCondCount = 0;
        this.ruleWeight = -INF;
        this.ruleValidity = true;
    }

    updateRule(visitedCondition: Condition): void{
        this.conditions = this.conditions.map((condition) => {
            if(condition.name === visitedCondition.name) {
                condition.answer = visitedCondition.answer;
                if(condition.answer === 'yes') //TODO: make this more general by considering which value is the true value.
                {
                    this.trueCondCount += 1;
                } else if (condition.answer === 'no') {
                    this.trueCondCount = -INF;
                    this.ruleValidity = false;
                }
            }
            return condition;
        });

        this.ruleWeight = this.trueCondCount - this.ruleLength;
    }


    toString(){
        return `[Rule]\n\t conditions: ${this.conditions} \n\t rule weight: ${this.ruleWeight}`;
    }
}