import { ConditionType } from '../Utils/constants/enums';
import { Condition as ConditionClass } from 'src/inference-engine/classes/condition';
import { Symptom } from 'src/inference-engine/classes/symptom';
import { MedicalCondition } from 'src/inference-engine/classes/medical-condition';
import { PatientInfo } from 'src/inference-engine/classes/patient-info';
import { Condition } from 'src/conditions/conditions.schema';
import { ConditionValue } from 'src/rules/rule.schema';
export function ConditionFactory(condition: ConditionValue): ConditionClass {
  let condInstance: ConditionClass = null;
  let condType = condition['c'].conditionType;
  switch (condType) {
    case ConditionType.Symptom:
      condInstance = new Symptom(condition['c'].name, condition['c'].question);
      break;
    case ConditionType.MedicalCondition:
      condInstance = new MedicalCondition(
        condition['v'].name,
        condition['c'].question,
        condition['c'].values,
      );
      break;
    case ConditionType.PatientInfo:
      condInstance = new PatientInfo(
        condition['c'].name,
        condition['c'].question,
        condition['c'].values,
      );
      break;
    default:
      condInstance = new ConditionClass(
        condition['c'].name,
        condition['c'].question,
        condition['c'].values,
      );
      break;
  }
  console.log('From CondFactory\n' + condInstance);
  return condInstance;
}
