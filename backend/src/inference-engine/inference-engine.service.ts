import { Injectable } from '@nestjs/common';
import { Conclusion } from 'src/conclusion/conclusion.schema';
import { ConclusionService } from 'src/conclusion/conclusion.service';
import { ConditionsService } from 'src/conditions/conditions.service';
import { Conclusion as ConclusionClass } from './classes/conclusion';
import { PriorityQueue } from './classes/priority-queue';
import { Goal } from './classes/goal';
import { ConclusionFactory } from 'src/shared/helpers/conclusion-factory';
import { NlpService } from 'src/nlp/nlp.service';
import { PQueueFactory } from 'src/shared/helpers/pqueue-factory';

@Injectable()
export class InferenceEngineService {
    constructor(
        private readonly conditionsService: ConditionsService,
        private readonly conclusisonService: ConclusionService,
        private readonly nlpService: NlpService
    ) {}
    
    async init() : Promise<PriorityQueue>{
        let pqueue: PriorityQueue = null;
        let goals: Goal[] = [];
        let conclusionsKB: Conclusion[] = [];
        let conclusions: ConclusionClass[] = [];
        try {
            conclusionsKB = await this.conclusisonService.findAll();
            let pqueue = PQueueFactory(conclusionsKB, null, 'KB')
            return pqueue;
        } catch (error) {
            throw error
        }
    }

    async start(id: string){
        let pqueue: PriorityQueue = await this.init();
        let res = { condition: pqueue.askQuestion(), context: pqueue, _id: id}
        return res;
    }

    async processAnswer(condition){}

    async initFromHistory(context: PriorityQueue){
        let pqueue: PriorityQueue = PQueueFactory(context.goals, context.lastQuestion, 'DB')
        return pqueue;
    }
}