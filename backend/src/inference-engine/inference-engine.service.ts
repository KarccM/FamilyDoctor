import { Injectable } from '@nestjs/common';
import { Conclusion } from 'src/conclusion/conclusion.schema';
import { ConclusionService } from 'src/conclusion/conclusion.service';
import { Condition } from 'src/conditions/conditions.schema';
import { ConditionsService } from 'src/conditions/conditions.service';
import { Symptom as SymptomClass } from './classes/symptom';
import { MedicalCondition as MedicalConditionClass } from './classes/medical-condition';
import { PatientInfo as PatientInfoClass } from './classes/patient-info';
import { Rule as RuleClass } from './classes/rule';
import { Conclusion as ConclusionClass } from './classes/conclusion';
import { Condition as ConditionClass } from './classes/condition';
import { Diagnosis as DiagnosisClass } from './classes/diagnosis';
import { ConclusionType, ConditionType } from 'src/shared/Utils/constants/enums';
import { PriorityQueue } from './classes/priority-queue';
import { Goal } from './classes/goal';

@Injectable()
export class InferenceEngineService {
    constructor(
        private readonly conditionsService: ConditionsService,
        private readonly conclusisonService: ConclusionService
    ) {}

    async init() : Promise<PriorityQueue>{
        let pqueue: PriorityQueue = null;
        let goals: Goal[] = [];
        let conclusionsKB: Conclusion[] = [];
        let conclusions: ConclusionClass[] = [];
        try {
            conclusionsKB = await this.conclusisonService.findAll();
            conclusionsKB.forEach(d => {
                let conclusionInstance: ConclusionClass = null;
                let ruleInstances: RuleClass[] = [];
                d.rules.forEach(r => {
                    let ruleInstance: RuleClass = null;
                    let condInstances: ConditionClass[] = [];
                    r.conditions.forEach(c => {
                        let condInstance: ConditionClass = null
                        let condType = c.conditionType;
                        if(condType == ConditionType.Symptom) condInstance = new SymptomClass(c.name, c.question);
                        if(condType == ConditionType.MedicalCondition) condInstance = new MedicalConditionClass(c.name, c.question, c.values);
                        if(condType == ConditionType.PatientInfo) condInstance = new PatientInfoClass(c.name, c.question, c.values);
                        condInstances.push(condInstance)
                    });
                    ruleInstance = new RuleClass(condInstances);
                    ruleInstances.push(ruleInstance);
                })
                let concType = d.conclusionType;
                if(concType == ConclusionType.Diagnosis) conclusionInstance = new DiagnosisClass(d.name, ruleInstances, d.priority, d['treatment'], d['specialist'], d['notes']);
                conclusions.push(conclusionInstance);
            });
            conclusions.forEach(c => {
                let goalInstance: Goal;
                goalInstance = new Goal(c);
                goals.push(goalInstance);
            });
            pqueue = new PriorityQueue(goals);
            return pqueue;
        } catch (error) {
            throw error
        }
    }

    async start(id: string, user_id: string){
        let pqueue: PriorityQueue = await this.init();
        let res = { condition: pqueue.askQuestion(), context: pqueue, _id: id, user_id: user_id}
        return res;
    }

    async initFromKB(context: any){

    }
}