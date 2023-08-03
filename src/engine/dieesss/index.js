class Symptom{
    constructor(name, question){
        this.name = name
        this.question = question
        this.answers = ['yes', 'no', 'unk']
        this.answer = undefined
    }
}


class Rule{
    constructor(symptoms){
        this.symptoms = symptoms
        this.maxLength = this.symptoms.length
        this.trueSymptoms = 0
        this.weight = -999999
        this.valid = true;
    }

    updateRule(visitedSymptom){
        let symptom = this.symptoms.find((e)=> visitedSymptom.name === e.name)
        if(symptom != undefined){
            symptom.answer = visitedSymptom.answer
            if(visitedSymptom.answer === 'yes'){
                this.trueSymptoms +=1
                this.weight = this.trueSymptoms - this.maxLength
            } else if(visitedSymptom.answer === 'no'){
                this.trueSymptoms = -999999
                this.weight = -99999//this.trueSymptoms - this.maxLength
                this.valid = false;
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
        this.rules = this.rules.filter(r => r.valid)
    }
    
    compareFunction(a,b){return b-a}

    topNSymptoms(n=1){
        let sortedRules = this.rules.sort((ruleA,ruleB) =>this.compareFunction(ruleA.weight,ruleB.weight))
        let prominantSymptoms = []
      
        sortedRules.slice(0,n).forEach((rule) => {
            rule.symptoms.forEach((symptom) => {
                if(symptom.answer == undefined){
                    prominantSymptoms.push(symptom)
                }
            })
        })
        return prominantSymptoms[0] ? prominantSymptoms.length>0 : []
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

    topSymptom(){
        return this.disease.topNSymptoms()
    }

    updateRules(visitedSymptom){
        this.disease.updateRules(visitedSymptom)
    }



}

