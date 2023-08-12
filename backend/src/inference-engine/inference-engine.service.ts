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
import { ConclusionFactory } from 'src/shared/helpers/conclusion-factory';

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
                conclusionInstance = ConclusionFactory(d);
                console.log('From HERE\n'+ conclusionInstance)
                conclusions.push(conclusionInstance);
            });
            conclusions.forEach(c => {
                let goalInstance: Goal;
                goalInstance = new Goal(c);
                goals.push(goalInstance);
            });
            pqueue = new PriorityQueue(goals);
            // console.log('Priority queue here \n' + pqueue)
            return pqueue;
        } catch (error) {
            throw error
        }
    }

    async initFromKB(context: any){

    }
}