import { Condition } from "./condition";

export class Symptom extends Condition{
    answer: any;
    constructor(name: string, question: string){
        const values = ['yes', 'no', 'unk']
        super(name, question, values);
        this.answer = undefined;
    }
}