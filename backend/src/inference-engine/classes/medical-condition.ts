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
    user_answer = null,
  ) {
    if (cvTypes == ConditionValuesType.YesNoValues) values = YesNoValues;
    super(
      name,
      question,
      values,
      cvTypes,
      ConditionType.MedicalCondition,
      user_answer,
    );
  }
}
