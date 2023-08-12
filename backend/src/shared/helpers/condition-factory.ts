import { ConditionType } from "../Utils/constants/enums";
import { Condition as ConditionClass } from "src/inference-engine/classes/condition";
import { Symptom } from "src/inference-engine/classes/symptom";
import { MedicalCondition } from "src/inference-engine/classes/medical-condition";
import { PatientInfo } from "src/inference-engine/classes/patient-info";
import { Condition } from "src/conditions/conditions.schema";
import { ConditionValue } from "src/rules/rule.schema";
export function ConditionFactory(condition: ConditionValue): ConditionClass {
    let condInstance: ConditionClass = null;
    let condType = condition[0].conditionType;
    switch(condType){
        case ConditionType.Symptom:
            condInstance = new Symptom(condition['c'].name, condition[0].question);
            break;
        case ConditionType.MedicalCondition:
            condInstance = new MedicalCondition(condition['v'].name, condition[0].question, condition[0].values);
            break;
        case ConditionType.PatientInfo:
            condInstance = new PatientInfo(condition['c'].name, condition[0].question, condition[0].values);
            break;
        default:
            condInstance = new ConditionClass(condition['v'].name, condition[0].question, condition[0].values);
            break;
    }
    console.log('From CondFactory\n'+condInstance)
    return condInstance;
}