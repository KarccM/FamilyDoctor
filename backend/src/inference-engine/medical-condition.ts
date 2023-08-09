import { Condition } from "./condition";

export class MedicalCondition extends Condition{
    answer: any;
    constructor(name: string, question: string, values: []){
        super(name, question, values);
        this.answer = undefined;
    }
}