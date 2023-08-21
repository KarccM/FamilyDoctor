import { Conclusion } from '../classes/conclusion';
import { Rule } from '../classes/rule';
import { Diagnosis } from '../classes/diagnosis';
import { CreateConclusionDto } from '../../conclusion/dto/create-conclusion.dto';
import { ConclusionType } from '../../shared/Utils/constants/enums';
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
  conclusion: {},
  rules: [
    {
      conditions: [
        { condition: 'ضغط الدم', value: YesNoValues[0] },
        { condition: 'ضبابية الرؤية', value: YesNoValues[0] },
      ],
    },
  ],
};

const InnerEarInfection = {
  name: 'التهاب الأذن الوسطى',
  priority: 5,
  conclusionType: ConclusionType.Diagnosis,
  conclusion: {},
  rules: [
    {
      conditions: [
        { condition: 'دوار', value: YesNoValues[0] },
        { condition: 'الحرارة', value: 'مرتفعة' },
        { condition: 'السعال', value: YesNoValues[0] },
        { condition: 'ألم في الأذن', value: YesNoValues[0] },
      ],
    },
    {
      conditions: [
        { condition: 'دوار', value: YesNoValues[0] },
        { condition: 'الحرارة', value: 'مرتفعة' },
        { condition: 'ضعف السمع', value: YesNoValues[0] },
        { condition: 'ألم في الأذن', value: YesNoValues[0] },
      ],
    },
    {
      conditions: [
        { condition: 'دوار', value: YesNoValues[0] },
        { condition: 'الحرارة', value: 'مرتفعة' },
        { condition: 'السعال', value: YesNoValues[0] },
        { condition: 'ضعف السمع', value: YesNoValues[0] },
      ],
    },
  ],
};

const Ulcer = {
  name: 'قرحة معدية',
  priority: 6,
  conclusionType: ConclusionType.Diagnosis,
  conclusion: {},
  rules: [
    {
      conditions: [
        { condition: 'ارتجاع معدي مريئي', value: YesNoValues[0] },
        { condition: 'ألم في المعدة', value: YesNoValues[0] },
      ],
    },
  ],
};

const IntestineInflammation = {
  name: 'التهاب أمعاء',
  priority: 8,
  conclusionType: ConclusionType.Diagnosis,
  conclusion: {},
  rules: [
    {
      conditions: [
        { condition: 'الإسهال', value: YesNoValues[0] },
        { condition: 'إقياء', value: YesNoValues[0] },
        { condition: 'تعب عام', value: YesNoValues[0] },
        { condition: 'الحرارة', value: 'مرتفعة' },
      ],
    },
  ],
};

const BadDigestion = {
  name: 'عسر الهضم',
  priority: 9,
  conclusionType: ConclusionType.Diagnosis,
  conclusion: {},
  rules: [
    {
      conditions: [
        { condition: 'عدم تحمل غذائي', value: YesNoValues[0] },
        { condition: 'انزعاج في المعدة', value: YesNoValues[0] },
        { condition: 'انزعاج في الأمعاء', value: YesNoValues[0] },
        { condition: 'النفخة', value: YesNoValues[0] },
        { condition: 'غثيان', value: YesNoValues[0] },
        { condition: 'الإسهال', value: YesNoValues[0] },
      ],
    },
    {
      conditions: [
        { condition: 'عدم تحمل غذائي', value: YesNoValues[0] },
        { condition: 'انزعاج في المعدة', value: YesNoValues[0] },
        { condition: 'انزعاج في الأمعاء', value: YesNoValues[0] },
        { condition: 'النفخة', value: YesNoValues[0] },
        { condition: 'غثيان', value: YesNoValues[0] },
        { condition: 'الإمساك', value: YesNoValues[0] },
      ],
    },
  ],
};

const Flu = {
  name: 'الانفلونزا',
  priority: 10,
  conclusionType: ConclusionType.Diagnosis,
  conclusion: {},
  rules: [
    {
      conditions: [
        { condition: 'الحرارة', value: 'مرتفعة' },
        { condition: 'تعب عام', value: YesNoValues[0] },
        { condition: 'احتقان', value: YesNoValues[0] },
        { condition: 'صداع', value: YesNoValues[0] },
        { condition: 'العطاس', value: YesNoValues[0] },
      ],
    },
    {
      conditions: [
        { condition: 'الحرارة', value: 'مرتفعة' },
        { condition: 'تعب عام', value: YesNoValues[0] },
        { condition: 'احتقان', value: YesNoValues[0] },
        { condition: 'صداع', value: YesNoValues[0] },
        { condition: 'السعال', value: YesNoValues[0] },
      ],
    },
  ],
};

const Aczema = {
  name: 'أكزيما',
  priority: 4,
  conclusionType: ConclusionType.Diagnosis,
  conclusion: {},
  rules: [
    {
      conditions: [
        { condition: 'طفح جلدي', value: YesNoValues[0] },
        { condition: 'جفاف البشرة', value: YesNoValues[0] },
        { condition: 'الحكة', value: YesNoValues[0] },
        { condition: 'احمرار البشرة', value: YesNoValues[0] },
      ],
    },
  ],
};

const VitCDeficiency = {
  name: 'نقص فيتامين سي',
  priority: 5,
  conclusionType: ConclusionType.Diagnosis,
  conclusion: {},
  rules: [
    {
      conditions: [
        { condition: 'كدمات زرقاء', value: YesNoValues[0] },
        { condition: 'خمول', value: YesNoValues[0] },
        { condition: 'نزيف اللثة', value: YesNoValues[0] },
      ],
    },
    {
      conditions: [
        { condition: 'كدمات زرقاء', value: YesNoValues[0] },
        { condition: 'خمول', value: YesNoValues[0] },
      ],
    },
    {
      conditions: [
        { condition: 'خمول', value: YesNoValues[0] },
        { condition: 'نزيف اللثة', value: YesNoValues[0] },
      ],
    },
  ],
};

const IronDefAnemia = {
  name: 'فقر الدم بنقص الحديد',
  priority: 7,
  conclusionType: ConclusionType.Diagnosis,
  conclusion: {},
  rules: [
    {
      conditions: [
        { condition: 'دوار', value: YesNoValues[0] },
        { condition: 'ضيق نفس', value: YesNoValues[0] },
        { condition: 'شحوب البشرة', value: YesNoValues[0] },
        { condition: 'تعب عام', value: YesNoValues[0] },
      ],
    },
    {
      conditions: [
        { condition: 'دوار', value: YesNoValues[0] },
        { condition: 'ضيق نفس', value: YesNoValues[0] },
        { condition: 'شحوب البشرة', value: YesNoValues[0] },
        { condition: 'تعب عام', value: YesNoValues[0] },
        { condition: 'تساقط الشعر', value: YesNoValues[0] },
        { condition: 'ضعف الأظافر', value: YesNoValues[0] },
      ],
    },
  ],
};

export const ConclusionsList = [
  Glucoma,
  InnerEarInfection,
  Ulcer,
  IntestineInflammation,
  BadDigestion,
  Flu,
  Aczema,
  VitCDeficiency,
  IronDefAnemia,
];
