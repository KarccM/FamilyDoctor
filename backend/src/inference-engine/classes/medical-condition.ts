import {
  ConditionType,
  ConditionValuesType,
} from 'src/shared/Utils/constants/enums';
import { Condition } from './condition';
import { YesNoValues } from 'src/shared/Utils/constants/constants';

export class MedicalCondition extends Condition {
  constructor(
    name: string,
    question: string,
    values: any[],
    cvTypes: string = ConditionValuesType.YesNoValues,
  ) {
    if (cvTypes == ConditionValuesType.YesNoValues) values = YesNoValues;
    super(name, question, values, cvTypes, ConditionType.MedicalCondition);
    this.user_answer = undefined;
  }
}
