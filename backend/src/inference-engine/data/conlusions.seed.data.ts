import { Conclusion } from '../classes/conclusion';
import { Rule } from '../classes/rule';
import { Diagnosis } from '../classes/diagnosis';
import { CreateConclusionDto } from '../../conclusion/dto/create-conclusion.dto'
import { ConclusionType } from '../../shared/Utils/constants/enums'
import { YesNoValues } from 'src/shared/Utils/constants/constants';
// export const ConclusionsList: Conclusion[] = [
//     new Diagnosis()
// ]

// export const ConclusionsList: CreateConclusionDto = [
//     {
//         name: '',
//         rules: [
//             conditions: []
//         ], 
//         conclusionType: ConclusionType.Diagnosis,
//         priority: 0,
//         conclusion:
//     }
// ]

const Glucoma = {
    name: 'غلوكوما',
    priority: 4,
    conclusionType: ConclusionType.Diagnosis,
    conclusion: {
        
    },
    rules: [
        { conditions: [{condition: "ضغط الدم", value: YesNoValues[0]}, {condition: 'ضبابية الرؤية', value: YesNoValues[0]}] }
    ]
}

const InnerEarInfection = {
    name: 'التهاب الأذن الوسطى',
    priority: 5,
    conclusionType: ConclusionType.Diagnosis,
    conclusion: {},
    rules: [
        { conditions: [{condition: "دوار", value: YesNoValues[0]}, {condition: "ارتفاع الحرارة", value: YesNoValues[0]}, {condition: "السعال", value: YesNoValues[0]}, {condition: "آلم في الأذن" , value: YesNoValues[0]}]},
        { conditions: [{condition: "دوار", value: YesNoValues[0]}, {condition: "ارتفاع الحرارة", value: YesNoValues[0]}, {condition: "ضعف السمع", value: YesNoValues[0]}, {condition: "آلم في الأذن" , value: YesNoValues[0]}]},
        { conditions: [{condition: "دوار", value: YesNoValues[0]}, {condition: "ارتفاع الحرارة", value: YesNoValues[0]}, {condition: "السعال", value: YesNoValues[0]}, {"ضعف السمع": YesNoValues[0]}]}
    ]
}

export const ConclusionsList = [Glucoma, InnerEarInfection];