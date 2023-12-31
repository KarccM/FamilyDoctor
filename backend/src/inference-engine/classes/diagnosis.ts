import { ConclusionType } from 'src/shared/Utils/constants/enums';
import { Conclusion } from './conclusion';
import { Condition } from './condition';
import { Rule } from './rule';

export class Diagnosis extends Conclusion {
  treatment: string[];
  specialist: string;
  notes: string[];

  constructor(
    name: string,
    rules: Rule[],
    priority: number,
    treatment: string[],
    specialist: string,
    notes: string[],
  ) {
    super(name, rules, priority, ConclusionType.Diagnosis);
    this.treatment = treatment;
    this.specialist = specialist;
    this.notes = notes;
  }
}
