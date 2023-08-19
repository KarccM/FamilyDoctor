export class Condition {
  name: string;
  question: string;
  values: any[];
  value: any;
  user_answer: any;
  conditionValuesType: string;
  conditionType: string;

  constructor(
    name: string,
    question: string,
    values: any[],
    cvTypes: string,
    cType: string,
  ) {
    this.name = name;
    this.question = question;
    this.values = values;
    this.conditionValuesType = cvTypes;
    this.conditionType = cType;
  }

  // toString(){
  //     return `[Condition]\n\tname: ${this.name}\n`;
  // }

  setAnswer(answer: any) {
    this.user_answer = answer;
  }
}
