export class Condition {
  name: string;
  question: string;
  values: any[];
  value: any;
  user_answer: any = null;
  conditionValuesType: string;
  conditionType: string;

  constructor(
    name: string,
    question: string,
    values: any[],
    cvTypes: string,
    cType: string,
    user_answer = null,
  ) {
    this.name = name;
    this.question = question;
    this.values = values;
    this.conditionValuesType = cvTypes;
    this.conditionType = cType;
    this.user_answer = user_answer;
  }

  // toString(){
  //     return `[Condition]\n\tname: ${this.name}\n`;
  // }

  setAnswer(answer: any) {
    this.user_answer = answer;
  }
}
