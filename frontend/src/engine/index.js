// import PQueue from "./pq/index.js"

import { Symptom, Node, Disease, Rule } from "./Disease/index.js"

// let pq = new PQueue();
// console.log('2', pq.head(2));
// console.log('1', pq.head());
// console.log('5', pq.head(5));

// pq.print();


let vomit = new Symptom('vomit', 'Do you suffer from vomiting?')
let nausea = new Symptom('nausea', 'Do you suffer from nausea?')
let bloating = new Symptom('bloating', 'Do you suffer from bloating?')
let constipation = new Symptom('constipation', 'Do you suffer from constipation?')
let lackOfAppetite = new Symptom('lackOfAppetite', 'Do you suffer from lackOfAppetite?')
let stomacheBurn = new Symptom('StomacheBurn', 'Do you suffer from StomacheBurn?')
let bloodyStools = new Symptom('bloodyStools', 'Do you suffer from bloodyStools?')
let fatigue = new Symptom('fatigue', 'Do you suffer from fatigue?')
let diarrhea = new Symptom('diarrhea', 'Do you suffer from diarrhea?')
let hyperthermia = new Symptom('hyperthermia', 'Do you suffer from hyperthermia?')
let earPain = new Symptom('earPain', 'Do you suffer from earPain?')
let tinnitus = new Symptom('tinnitus', 'Do you suffer from tinnitus?')
let hearingImpairment = new Symptom('hearningImpairment', 'Do you suffer from hearingImpairment?')
let headache = new Symptom('headache', 'Do you suffer from headache?')
let sweating = new Symptom('sweating', 'Do you suffer from sweating?')
let cough = new Symptom('cough', 'Do you suffer from cough?')
let musclePain = new Symptom('musclePain', 'Do you suffer from musclePain?')
let stuffyNose = new Symptom('stuffyNose', 'Do you suffer from stuffyNose?')
let dysphagia = new Symptom('dysphagia', 'Do you suffer from dysphagia?')


// eslint-disable-next-line no-unused-vars
let symptoms = [vomit, nausea, bloating, constipation, lackOfAppetite, stomacheBurn, bloodyStools,
  fatigue, diarrhea, hyperthermia, earPain, tinnitus, hearingImpairment, headache,
  sweating, cough, musclePain, stuffyNose, dysphagia]

let node = new Node(new Disease('كريب', 'dsds', 'sdsds', 'wewewe', 2, [
  new Rule([vomit, nausea, bloating]),
  new Rule([diarrhea, hearingImpairment, bloating]),
  new Rule([diarrhea, nausea, stuffyNose]),
]))

console.log('node.topSymptom()[0] :>> ', node.topSymptom()[0]);
let symptom = node.topSymptom()[0];
node.updateRules({
  ...symptom,
  answer: 'yes',
})
console.log('node.topSymptom()[0] :>> ', node.topSymptom()[0]);
