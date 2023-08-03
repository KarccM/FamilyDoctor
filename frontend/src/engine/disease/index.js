const inf = -999
class Symptom {
    constructor(name, question) {
        this.name = name;
        this.question = question;
        this.answers = ['yes', 'no', 'unk'];
        this.answer = undefined;
    }
}


class Rule {
    constructor(symptoms) {
        this.symptoms = symptoms;
        this.maxLength = this.symptoms.length;
        this.trueSymptoms = 0;
        this.weight = inf;
        this.valid = true;
    }

    updateRule(visitedSymptom) {
        let symptom = this.symptoms.find((e) => visitedSymptom.name === e.name);

        if (symptom == undefined) return;

        symptom.answer = visitedSymptom.answer;

        if (visitedSymptom.answer === 'yes')
            this.trueSymptoms += 1;

        else if (visitedSymptom.answer === 'no') {
            this.trueSymptoms = inf;
            this.valid = false;
        }

        this.weight = this.trueSymptoms - this.maxLength
    }
}


class Disease {
    // name
    // specialist
    // treatment
    // notes
    // priority
    // rules

    constructor(name, specialist, treatment, notes, priority, rules) {
        this.name = name
        this.specialist = specialist
        this.treatment = treatment
        this.notes = notes
        this.priority = priority
        this.rules = rules
    }

    updateRules(visitedSymptom) {
        this.rules.forEach(rule => {
            rule.updateRule(visitedSymptom)
        });
        this.rules = this.rules.filter(r => r.valid)
    }

    compareFunction(a, b, order) { return order === 'des' ? b - a : a - b }

    mostCommonSymptoms(n = 1) {
        let prominantSymptoms = {}
        this.rules.forEach((rule) => {
            rule.symptoms.forEach((symptom) => {
                if (symptom.answer == undefined) {
                    prominantSymptoms[symptom.name] = {
                        ...symptom,
                        value: (prominantSymptoms[symptom.name]?.value ?? 0) + 1,
                    }
                }
            })
        })
        // eslint-disable-next-line no-unused-vars
        let sortedSymptoms = Object.entries(prominantSymptoms).map(([_, value]) => ({ ...value }));
        sortedSymptoms.sort((symptomA, symptomB) => this.compareFunction(symptomA.value, symptomB.value, 'des'))
        return sortedSymptoms.slice(0, n);
    }

    generateScore() { return this.max() + this.priority; }
    max() { return this.rules.sort((a, b) => this.compareFunction(a.weight, b.weight, 'ase'))?.[0]?.weight ?? inf; }

}



class Node {
    // disease
    // score
    // tried
    constructor(disease) {
        this.disease = disease;
        this.tried = false;
    }

    print() {
        console.log('this.disease :>> ', this.disease);
        console.log('this.score :>> ', this.score);
        console.log('this.tried :>> ', this.tried);
    }

    score() {
        return this.disease.generateScore();
    }

    topSymptom() {
        return this.disease.mostCommonSymptoms();
    }

    updateRules(visitedSymptom) {
        this.disease.updateRules(visitedSymptom);
    }
}

export {
    Symptom,
    Node,
    Rule,
    Disease,
}