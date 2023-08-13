import { Conclusion } from 'src/conclusion/conclusion.schema';
import { Conclusion as ConclusionClass } from 'src/inference-engine/classes/conclusion';
import { Rule as RuleClass } from 'src/inference-engine/classes/rule';
import { RuleFactory } from './rule-factory';
import { ConclusionType } from '../Utils/constants/enums';
import { Diagnosis } from 'src/inference-engine/classes/diagnosis';

export function ConclusionFactory(conclusion: Conclusion): ConclusionClass {
  let concInstance: ConclusionClass = null;
  let rules: RuleClass[] = [];
  conclusion.rules.forEach((r) => {
    let ruleInstance = RuleFactory(r);
    rules.push(ruleInstance);
  });
  // console.log('From ConcFactory\n'+rules)
  switch (conclusion.conclusionType) {
    case ConclusionType.Diagnosis:
      concInstance = new Diagnosis(
        conclusion.name,
        rules,
        conclusion.priority,
        conclusion['treatment'],
        conclusion['specialist'],
        conclusion['notes'],
      );
      break;
    default:
      break;
  }
  return concInstance;
}
