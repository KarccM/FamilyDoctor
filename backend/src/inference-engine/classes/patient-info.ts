import { Condition } from './condition';

export class PatientInfo extends Condition {
  answer: any;
  constructor(name: string, question: string, values: string[]) {
    super(name, question, values);
    this.answer = undefined;
  }
}
