import { Condition } from "./condition";

export class PatientInfo extends Condition{
    constructor(name: string, question: string, values: any[], cvTypes: string){
        super(name, question, values, cvTypes);
        this.user_answer = undefined;
    }
}