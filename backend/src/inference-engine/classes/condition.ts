export class Condition {
  name: string;
  question: string;
  values: any[];
  answer: any;

  constructor(name: string, question: string, values: any[]) {
    this.name = name;
    this.question = question;
    this.values = values;
  }

  toString() {
    return `[Condition]\n\tname: ${this.name}\n`;
  }
}
