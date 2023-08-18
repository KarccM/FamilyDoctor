export class Condition{
    name: string;
    question: string;
    values: any[];
    value: any;
    user_answer: any;
    conditionValuesType: string;

    constructor(name: string, question: string, values: any[], cvTypes: string){
        this.name = name;
        this.question = question;
        this.values = values;
        this.conditionValuesType = cvTypes;
    }

    // toString(){
    //     return `[Condition]\n\tname: ${this.name}\n`;
    // }

    setAnswer(answer:any){
        this.user_answer = answer;
    }
}