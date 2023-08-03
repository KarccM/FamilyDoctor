import PQueue from "./pq/index.js"
import { Symptom, Node, Disease, Rule } from "./Disease/index.js"

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

let node2 = new Node(new Disease('2كريب', 'dsds', 'sdsds', 'wewewe', 99, [
  new Rule([earPain, nausea, hearingImpairment]),
  new Rule([earPain, hearingImpairment, stuffyNose]),
  new Rule([dysphagia, hearingImpairment, stuffyNose]),
]))

let node3 = new Node(new Disease('3كريب', 'dsds', 'sdsds', 'wewewe', -33, [
  new Rule([vomit, nausea, bloating]),
  new Rule([stuffyNose, hearingImpairment, bloating]),
  new Rule([diarrhea, nausea, hearingImpairment]),
]))

let pq = new PQueue([
  node, node2, node3
]);


pq.update();
let symptom = pq.head()[0].disease.mostCommonSymptoms();
console.log('symptom[0] :>> ', symptom[0]);
pq.all().forEach(rule => {
  rule.updateRules({
    ...symptom[0],
    answer: 'no',
  })
});
pq.update();
symptom = pq.head()[0].disease.mostCommonSymptoms();
console.log('symptom[0] :>> ', symptom[0]);
pq.all().forEach(rule => {
  rule.updateRules({
    ...symptom[0],
    answer: 'no',
  })
});
pq.update();

console.log('score', pq.head()[0].score());
console.log('pq.all() :>> ', pq.all().map(dis => dis.score()));