import { ConditionType } from '../Utils/constants/enums';
import { Condition } from 'src/conditions/conditions.schema';
import { Condition as ConditionClass } from 'src/inference-engine/classes/condition';
import { Symptom } from 'src/inference-engine/classes/symptom';
import { MedicalCondition } from 'src/inference-engine/classes/medical-condition';
import { PatientInfo } from 'src/inference-engine/classes/patient-info';
export function ConditionFactory(condition: Condition): ConditionClass {
  let condInstance: ConditionClass = null;
  let condType = condition.conditionType;
  switch (condType) {
    case ConditionType.Symptom:
      condInstance = new Symptom(
        condition.name,
        condition.question,
        condition.values,
        condition.conditionValuesType,
      );
      condInstance.value = condition.value != null ? condition.value : null;
      break;
    case ConditionType.MedicalCondition:
      condInstance = new MedicalCondition(
        condition.name,
        condition.question,
        condition.values,
        condition.conditionValuesType,
      );
      condInstance.value = condition.value != null ? condition.value : null;
      break;
    case ConditionType.PatientInfo:
      condInstance = new PatientInfo(
        condition.name,
        condition.question,
        condition.values,
        condition.conditionValuesType,
      );
      condInstance.value = condition.value != null ? condition.value : null;
      break;
    default:
      // condInstance = new Condition(condition.name, condition.question, condition.values, condition.conditionValuesType);
      break;
  }
  return condInstance;
}
