import { ConditionType } from 'src/shared/Utils/constants/enums';
import { Condition } from './condition';

export class PatientInfo extends Condition {
  constructor(name: string, question: string, values: any[], cvTypes: string) {
    super(name, question, values, cvTypes, ConditionType.PatientInfo);
    this.user_answer = undefined;
  }
}
