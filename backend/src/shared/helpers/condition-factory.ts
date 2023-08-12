import { ConditionType } from "../Utils/constants/enums";
import { Condition } from "src/inference-engine/classes/condition";
import { Symptom } from "src/inference-engine/classes/symptom";
import { MedicalCondition } from "src/inference-engine/classes/medical-condition";
import { PatientInfo } from "src/inference-engine/classes/patient-info";
export function ConditionFactory(condition: {conditionType, name, question, values}): Condition {
    let condInstance: Condition = null;
    let condType = condition.conditionType;
    switch(condType){
        case ConditionType.Symptom:
            condInstance = new Symptom(condition.name, condition.question);
            break;
        case ConditionType.MedicalCondition:
            condInstance = new MedicalCondition(condition.name, condition.question, condition.values);
            break;
        case ConditionType.PatientInfo:
            condInstance = new PatientInfo(condition.name, condition.question, condition.values);
            break;
        default:
            condInstance = new Condition(condition.name, condition.question, condition.values);
            break;
    }
    return condInstance;
}