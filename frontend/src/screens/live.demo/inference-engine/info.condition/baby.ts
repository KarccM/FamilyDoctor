import { PatientInfo } from "../patient-info";

export class Baby extends PatientInfo {
  answer: any;
  constructor(){
    super("adult", "is Patient Baby?",["yes", "no", "unk"]);
    this.answer = undefined;
  }
  
  setAnswer(answer: any): void {
    if( answer <= 4 && answer > 0 )
      this.answer = "yes";
    else if( answer > 4 )
      this.answer = "no";
    else 
      this.answer = "unk";
  }
}