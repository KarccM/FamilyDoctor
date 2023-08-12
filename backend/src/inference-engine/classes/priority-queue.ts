import { compareFn } from "./conclusion";
import { Condition } from "./condition";
import { Goal } from "./goal";

export class PriorityQueue {
    goals: Goal[]

    constructor(goals: Goal[]) {
        this.goals = goals;
        this.sortNodes();
    }

    getHead(n = 1){
        return this.goals.slice(0,n);
    }

    sortNodes(){
        this.goals = this.goals.sort((goalA, goalB)=> {
            return compareFn(goalA.getScore(), goalB.getScore())})
    }

    updateNodes(visitedCondition: Condition){
        this.goals.forEach(goal => {
            goal.conclusion.updateRules(visitedCondition);
        });
        this.sortNodes();
    }

    getAllNodes(): Goal[]{
        return this.goals;
    }

    toString() {
        this.sortNodes();
        return `\n[PriorityQueue] with goals: ${this.goals} `
    }
}