class Symptom{
    constructor(name, question){
        this.name = name
        this.question = question
        this.answers = ['yes', 'no', 'unk']
    }
}


class Rule{
    constructor(symptoms){
        this.symptoms = symptoms
        this.remainder = this.symptoms.length
    }

    updateRule(visitedSymptom){
        let symptom = this.symptoms.find((e)=> visitedSymptom.name === e.name)
        if(symptom != undefined){
            if(symptom.answer === 'yes'){
                this.remainder -=1
            } else if(symptom.answer === 'no'){
                this.remainder = 99999
            }
        }
    }
}


class Disease{
    name
    specialist
    treatment
    notes
    priority
    rules

    constructor(name, specialist, treatment, notes, priority, rules){
        this.name = name
        this.specialist = specialist
        this.treatment = treatment
        this.notes = notes
        this.priority = priority
        this.rules = rules
    }

    updateRules(visitedSymptom){
        this.rules.forEach(rule => {
            rule.updateRule(visitedSymptom)
        });
    }

    topNSymptoms(visitedSymptoms){
        for(rule in this.rules){

        } 
    }
}



class Node{
    disease
    score
    tried
    constructor(disease){
        this.disease = disease
        this.score = this.disease.priority
        this.tried = false
    }

}

