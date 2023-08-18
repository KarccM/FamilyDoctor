import { Goal } from "src/inference-engine/classes/goal";
import { ConclusionFactory } from "./conclusion-factory";
import { PriorityQueue } from "src/inference-engine/classes/priority-queue";

export function PQueueFactory(items, lastQ, from='KB'){
    let goals: Goal[] = [];
    items.forEach(i => {
        if(from=='KB')
            goals.push(new Goal(ConclusionFactory(i)));
        if(from=='DB')
            goals.push(new Goal(ConclusionFactory(i.conclusion)));
    });
    let pqueue = new PriorityQueue(goals);
    pqueue.lastQuestion = lastQ;
    return pqueue
}