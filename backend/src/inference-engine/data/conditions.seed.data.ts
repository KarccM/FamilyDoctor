import { MedicalCondition } from 'src/inference-engine/classes/medical-condition';
import { PatientInfo } from 'src/inference-engine/classes/patient-info';
import { Symptom } from 'src/inference-engine/classes/symptom';
import { YesNoValues } from 'src/shared/Utils/constants/constants';
import {
  ConclusionType,
  ConditionValuesType,
} from 'src/shared/Utils/constants/enums';
import { Conclusion } from '../classes/conclusion';
import { Rule } from '../classes/rule';
import { Condition } from '../classes/condition';

const Age = new PatientInfo(
  'العمر',
  'ما هو عمرك',
  [{ أطفال: [5, 14] }, { بالغين: [15, 40] }, { مسنين: [41, 150] }],
  ConditionValuesType.NumericIntervalValues,
);

const Sex = new PatientInfo(
  'الجنس',
  'أدخل الجنس',
  ['أنثى', 'ذكر'],
  ConditionValuesType.FixedSetValues,
);

const MartialStatus = new PatientInfo(
  'الحالة الاجتماعية',
  'ما هي حالتك الاجتماعية (عازب(ة)، متزوج(ة)))',
  ['عازب', 'متزوج'],
  ConditionValuesType.FixedSetValues,
);

const Pregnancy = new PatientInfo(
  'الحمل والإرضاع',
  'هل يوجد حمل أو إرضاع',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const InPeriod = new PatientInfo(
  'الدورة الشهرية',
  ' هل تمّرين بالدروة الشهرية',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

// const Weight = new PatientInfo('', '', )

const Diabeties = new MedicalCondition(
  'السكري',
  'هل تعاني من داء السكري',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const BloodPressure = new MedicalCondition(
  'ضغط الدم',
  'هل تعاني من ارتفاع ضغط الدم',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Asthma = new MedicalCondition(
  'الربو',
  'هل تعاني من الربو',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Ulcer = new MedicalCondition(
  'القرحة',
  'هل تعاني من القرحة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Migraine = new MedicalCondition(
  'الشقيقة',
  'هل تعاني من الشقيقة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

// const

const Fever = new Symptom(
  'الحمى',
  'هل تشعر بارتفاع حرارة عالي (حمى)',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Headache = new Symptom(
  'صداع',
  'هل تشعر بالصداع',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Nuasea = new Symptom(
  'غثيان',
  'هل تشعر بالغثيان',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Vomit = new Symptom(
  'إقياء',
  'هل تعاني من الإقياء',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Fatigue = new Symptom(
  'تعب عام',
  'هل تشعر بالتعب والوهن',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Coughing = new Symptom(
  'السعال',
  'هل تعاني من السعال',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Diarrhea = new Symptom(
  'الإسهال',
  'هل تعاني من الإسهال',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Constipation = new Symptom(
  'الإمساك',
  'هل  تعاني من الإمساك',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Bloating = new Symptom(
  'النفخة',
  'هل تعاني من النفخة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const lackOfAppetite = new Symptom(
  'نقص الشهية',
  'هل تشعر بنقص في الشهية',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const stomachBurn = new Symptom(
  'حرقة المعدة',
  'هل تشعر بحرقة في المعدة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const EarPain = new Symptom(
  'ألم في الأذن',
  'هل تشعر بألم في الأذن',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Tinnitus = new Symptom(
  'طنين',
  'هل تشعر بوجود طنين مستمر في أذنيك',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const HearingImpairment = new Symptom(
  'ضعف السمع',
  'هل تعاني من ضعف في السمع',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Sweating = new Symptom(
  'التعرق',
  'هل تعاني من  التعرق الزائد',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const MusclePain = new Symptom(
  'ألم العضلات',
  'هل تشعر بآلام في العضلات',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const StuffyNose = new Symptom(
  'احتقان',
  'هل تعاني من وجود احتقان',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Dysphagia = new Symptom(
  'صعوبة البلع',
  'هل تشعر بوجود صعوبة في البلع',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const BlurryVision = new Symptom(
  'ضبابية الرؤية',
  'هل تشعر بوجود ضبابية في الرؤية',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const LightSensitivity = new Symptom(
  'حساسية ضوئية',
  'هل تعاني من حساسية للضوء',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const AjfanWazma = new Symptom(
  'وذمة الأجفان',
  'هل تعاني من وذمة في  الأجفان',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const NoOpenEyes = new Symptom(
  'صعوبة فتح العينين',
  'هل تجد صعوبة في فتح العينين',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Numbnes = new Symptom(
  'خدر',
  'هل تعاني من خدر في الأطراف',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const HeatFeet = new Symptom(
  'ارتفاع حرارة الأطراف',
  'هل تعاني من حرارة الأطراف',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const BackPain = new Symptom(
  'آلام الظهر',
  'هل تشعر بوجود ألم في الظهر',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const NeckPain = new Symptom(
  'آلام الرقبة',
  'هل تشعر بوجود ألم في الرقبة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const HasharaLasaa = new Symptom(
  'لسعة حشرة',
  'هل تعرضت للسعة حشرة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const EyeBurning = new Symptom(
  'حرق في العين',
  'هل تشعر بوجود حرق (لسع) في العين',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const SpringSeason = new Symptom(
  'موسم الربيع والصيف',
  'هل أنت في موسم الربيع أو الصيف',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const SoreThroat = new Symptom(
  'التهاب الحلق',
  'هل تشعر بألم في الحلق',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const StomachCramps = new Symptom(
  'انزعاج في المعدة',
  'هل تشعر بوجود انزعاج في المعدة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const IntenstinesCramps = new Symptom(
  'انزعاج في الأمعاء',
  'هل تشعر بوجود انزعاج في الأمعاء',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const StomachPain = new Symptom(
  'ألم في المعدة',
  'هل تشعر بوجود انزعاج في المعدة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Sneezing = new Symptom(
  'العطاس',
  'هل تعاني من العطاس الزائد',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const BloodyVomit = new Symptom(
  'إقياء مدمى',
  'هل تعاني من إقياء مدمى (إقياء مترافق مع دم)',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const BloodyStool = new Symptom(
  'براز مدمى',
  'هل تعاني من براز مدمى (براز مترافق مع دم)',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const StomachEsophagousComeback = new Symptom(
  'ارتجاع معدي مريئي',
  'هل تعاني من ارتجاع معدي مريئي / هل تشعر بحموضة ',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const FacePain = new Symptom(
  'ألم في الوجه',
  'هل تشعر بألم في الوجه',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const MofrazatQaihiaMokhatia = new Symptom(
  'مفرزات قيحية مخاطية',
  'هل تلاحظ تشكل مفرزات قيحية مخاطية',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const RainyNose = new Symptom(
  'سيلان أنفي',
  'هل تعاني من سيلان أنفي',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const TahiojEyes = new Symptom(
  'تهيج العين',
  'هل تشعر بوجود تهيج في العين',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const EfrazatDam3ia = new Symptom(
  'إفرازات دمعية',
  'هل تلاحظ تشكل إفرازات دمعية',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Itching = new Symptom(
  'الحكة',
  'هل  تشعر بالحكة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const HboubonSkin = new Symptom(
  'حبوب جلدية',
  'هل لديك حبوب على البشرة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const TafahJildiJaf = new Symptom(
  'طفح جلدي',
  'هل تعاني من طفح جلدي',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const RedSkin = new Symptom(
  'احمرار البشرة',
  'هل تعاني من احمرار في البشرة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const InfectionSpreading = new Symptom(
  'التهاب منتشر',
  'هل  تشعر بالتهاب منتشر في تلك المنطقة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const WhiteRush = new Symptom(
  'بقع بيضاء',
  'هل تلاحظ تواجد بقع بيضاء اللون على بشرتك',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Acne = new Symptom(
  'حب الشباب',
  'هل تعاني من حب الشباب',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const RedAcne = new Symptom(
  'احمرار حب الشباب',
  'هل تعاني من حب شباب مع التهاب / احمرار',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const NailWhiteRush = new Symptom(
  'بقع بيضاء على الأظافر',
  'هل تلاحظ وجود بقع بيضاء على الأظافر',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const WeakNails = new Symptom(
  'ضعف الأظافر',
  'هل تعاني من ضعف أو تكسر في الأظافر',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const BlueBruises = new Symptom(
  'كدمات زرقاء',
  'هل تلاحظ وجود كدمات زرقاء على جسمك',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Dizziness = new Symptom(
  'دوار',
  'هل تشعر بالدوار',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const PaleSkin = new Symptom(
  'شحوب البشرة',
  'هل تلاحظ شحوب في بشرتك',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const HairLoss = new Symptom(
  'تساقط الشعر',
  'هل تعاني من تساقط الشعر',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const BreathShortness = new Symptom(
  'ضيق نفس',
  'هل تعاني من ضيق تنفس',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const pulstingPain = new Symptom(
  'صداع نصفي',
  'هل تعاني من صداع جزء واحد من الرأس',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const HearingSensitivity = new Symptom(
  'حساسية سمعية',
  'هل تعاني من حساسية للأصوات',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const OdorSensitivty = new Symptom(
  'حساسية شمية',
  'هل تعاني من حساسية للروائح',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const ChestPain = new Symptom(
  'ألم في الصدر',
  'هل تشعر بوجود ألم في الصدر',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const VoiceLoss = new Symptom(
  'بحة الصوت',
  'هل تعاني من بحة الصوت',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const NasalLoss = new Symptom(
  'فقدان حاسة الشم',
  'هل تعاني من فقدان حاسة الشم',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const TasteLoss = new Symptom(
  'فقدان حاسة التذوق',
  'هل تعاني من فقدان حاسة التذوق',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const YellowEyeWhite = new Symptom(
  'إصفرار بياض العين',
  'هل تلاحظ إصفرار في بياض العين',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const FoodIntolerance = new Symptom(
  'عدم تحمل غذائي',
  'هل تعاني من عدم تحمل غذائي',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const DarkUrine = new Symptom(
  'بول داكن',
  'هل تلاحظ تحول لون البول إلى درجة أغمق',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const JointPain = new Symptom(
  'آلام المفاصل',
  'هل تشعر بآلام في المفاصل',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const DrySkin = new Symptom(
  'جفاف البشرة',
  'هل تعاني من جفاف البشرة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const RiceDairihea = new Symptom(
  'إسهال رزي',
  'هل تعاني من إسهال يشبه ماء الأرز وبكميات كبيرة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const StinkyBreath = new Symptom(
  'رائحة فم كريهة',
  'هل تعاني من رائحة فم كريهة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const ShoulderPain = new Symptom(
  'آلام في الأكتاف',
  'هل تشعر بألم في الأكتاف',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Moodiness = new Symptom(
  'تقلبات مزاجية',
  'هل تعاني من تقلبات مزاجية',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Anxiety = new Symptom(
  'قلق',
  'هل تشعر بالقلق المستمر',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Depression = new Symptom(
  'اكتئاب',
  'هل تعاني من الاكتئاب',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Sluggishness = new Symptom(
  'خمول',
  'هل تشعر بالخمول',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const TeethDecay = new Symptom(
  'ضعف بنية الأسنان',
  'هل تشعر بوجود ضعف في بنية الأسنان',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Impotence = new Symptom(
  'ضعف جنسي',
  'هل تعاني من ضعف جنسي/فقدان الرغبة الجنسية',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const WeigthGain = new Symptom(
  'زيادة في الوزن',
  'هل تعاني من زيادة غير  مبررة في الوزن',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const BleedingGums = new Symptom(
  'نزيف اللثة',
  'هل تعاني من نزيف في اللثة',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const RepeatedUriniation = new Symptom(
  'تبول متكرر',
  'هل تعاني من التبول المتكرر وخاصةً ليلاً',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const ConstantThirst = new Symptom(
  'عطش دائم',
  'هل تشعر بالعطش الدائم',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Starvation = new Symptom(
  'جوع دائم',
  'هل تشعر بالجوع الدائم',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const WeightLoss = new Symptom(
  'نقص الوزن',
  'هل تعاني من خسارة غير مبررة للوزن',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const SlowWoundHealing = new Symptom(
  'بطء التئام الجروح',
  'هل تعاني من بطء التئام الجروح',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const DryHair = new Symptom(
  'جفاف الشعر',
  'هل تعاني من جفاف الشعر',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const ColdIntolerance = new Symptom(
  'عدم تحمل البرد',
  'هل تعاني من عدم تحمل للبرد',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Tachycardia = new Symptom(
  'تسرع ضربات القلب',
  'هل تشعر بوجود تسرع في ضربات القلب',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Tremor = new Symptom(
  'الرعاش',
  'هل تعاني من الرعاش',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Nervousness = new Symptom(
  'العصبية',
  'هل تعاني من العصبية',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Irritation = new Symptom(
  'الاستثارة',
  'هل تشعر بالاستثارة بشكل مستمر',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Arrhythmia = new Symptom(
  'عدم انتظام ضربات القلب',
  'هل تلاحظ عدم انتظام في ضربات القلب',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const TirenessWhileActive = new Symptom(
  'تعب عند الجهد',
  'هل تشعر بتعب كبير بعد أي جهد',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const DryEye = new Symptom(
  'جفاف العين',
  'هل تشعر بوجود جفاف في العين',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const RedEye = new Symptom(
  'احمرار العين',
  'هل تلاحظ احمرار في العين',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);
const ItchyEyes = new Symptom(
  'حكة العين',
  'هل تعاني من حكة في العين',
  YesNoValues,
  ConditionValuesType.YesNoValues,
);

const Temp = new Symptom(
  'الحرارة',
  'كيف تصف حرارتك (درجة الحرارة أو وصف)',
  [{ مرتفعة: [37.5, 38] }, { عادية: [35, 37.5] }],
  ConditionValuesType.NumericIntervalValues,
);
export const ConditionsList: Condition[] = [
  Acne,
  Age,
  AjfanWazma,
  Anxiety,
  Arrhythmia,
  Asthma,
  BackPain,
  BleedingGums,
  Bloating,
  BloodPressure,
  BloodyStool,
  BloodyVomit,
  BlueBruises,
  BlurryVision,
  BreathShortness,
  Constipation,
  Coughing,
  ColdIntolerance,
  ConstantThirst,
  ChestPain,
  DarkUrine,
  Depression,
  Diabeties,
  Diarrhea,
  Dizziness,
  DryEye,
  DryHair,
  DrySkin,
  Dysphagia,
  EarPain,
  EfrazatDam3ia,
  EyeBurning,
  FacePain,
  Fatigue,
  Fever,
  FoodIntolerance,
  HairLoss,
  HasharaLasaa,
  HboubonSkin,
  Headache,
  HearingImpairment,
  HearingSensitivity,
  HeatFeet,
  Impotence,
  InPeriod,
  InfectionSpreading,
  Irritation,
  Itching,
  ItchyEyes,
  IntenstinesCramps,
  JointPain,
  LightSensitivity,
  lackOfAppetite,
  MartialStatus,
  Migraine,
  MofrazatQaihiaMokhatia,
  Moodiness,
  MusclePain,
  NailWhiteRush,
  NasalLoss,
  NeckPain,
  Nervousness,
  NoOpenEyes,
  Nuasea,
  Numbnes,
  OdorSensitivty,
  pulstingPain,
  PaleSkin,
  Pregnancy,
  RainyNose,
  RedAcne,
  RedEye,
  RedSkin,
  RepeatedUriniation,
  RiceDairihea,
  stomachBurn,
  Sex,
  ShoulderPain,
  SlowWoundHealing,
  Sluggishness,
  Sneezing,
  SoreThroat,
  SpringSeason,
  Starvation,
  StinkyBreath,
  StomachCramps,
  StomachEsophagousComeback,
  StuffyNose,
  StomachPain,
  Sweating,
  Tachycardia,
  TafahJildiJaf,
  TahiojEyes,
  TasteLoss,
  TeethDecay,
  Temp,
  Tinnitus,
  TirenessWhileActive,
  Tremor,
  Ulcer,
  VoiceLoss,
  Vomit,
  WeakNails,
  WeightLoss,
  WeigthGain,
  WhiteRush,
  YellowEyeWhite,
];

// const spring = new Conclusion('', [
//   new Rule([RainyNose, Headache, MofrazatQaihiaMokhatia, DryEye, INSpring, Coughing, Sneezing]),
//     new Rule([RainyNose, INSpring, Coughing, Headache]),
//     new Rule([INSpring, Sneezing, StuffyNose]))
// ], 10, ConclusionType.Disease);

// const EltheabMolthama = new Conclusion('', [
//   new Rule([RedEye, MofrazatQaihiaMokhatia, ItchyEyes, InflatedJifin]),
//   new Rule([InsectBite, RedEye, InflatedJifin])
// ])

// const Glaucoma = new Conclusion('', [
//   new Rule([])
// ])
