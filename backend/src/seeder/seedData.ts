import { MedicalCondition } from "src/inference-engine/classes/medical-condition";
import { PatientInfo } from "src/inference-engine/classes/patient-info";
import { Symptom } from "src/inference-engine/classes/symptom";
import { YesNoValues } from "src/shared/Utils/constants/constants";
import { ConditionValuesType } from "src/shared/Utils/constants/enums";

const Age = new PatientInfo('العمر', 'أدخل العمر', [{"أطفال": [5, 14]}, {'بالغين': [15,40]}, {'مسنين': [41, 150]}], ConditionValuesType.NumericIntervalValues);

const Sex = new PatientInfo('الجنس', 'أدخل الجنس', ['أنثى', 'ذكر'], ConditionValuesType.FixedSetValues);

const MartialStatus = new PatientInfo('الحالة الاجتماعية', 'ما هي حالتك الاجتماعية (عازب(ة)، متزوج(ة)))', ['عازب', "متزوج"], ConditionValuesType.FixedSetValues);

const Pregnancy = new PatientInfo('', '', YesNoValues, ConditionValuesType.YesNoValues);

const InPeriod = new PatientInfo('', '', YesNoValues, ConditionValuesType.YesNoValues)

// const Weight = new PatientInfo('', '', )

const Diabeties = new MedicalCondition('', '', YesNoValues, ConditionValuesType.YesNoValues);

const BloodPressure = new MedicalCondition('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Asthma = new MedicalCondition('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Ulcer = new MedicalCondition('قرحة', '', YesNoValues, ConditionValuesType.YesNoValues);

const Migraine = new MedicalCondition('', '', YesNoValues, ConditionValuesType.YesNoValues);

// const 

const Fever = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Headache = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Nuasea = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Vomit = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Fatigue = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Coughing = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Diarrhea = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Constipation = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Bloating = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const lackOfAppetite = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const stomachBurn = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const EarPain = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Tinnitus = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const HearingImpairment = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Sweating = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const MusclePain = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const StuffyNose = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);


const Dysphagia = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const BlurryVision = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const LightSensitivity = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);


const AjfanWazma = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const NoOpenEyes = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Numbnes = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const HeatFeet = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const BackPain = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const NeckPain = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const HasharaLasaa = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const EyeBurning = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const SpringSeason = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const SoreThroat = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const StomachCramps = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Sneezing = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const BloodyVomit = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const BloodyStool = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const StomachEsophagousComeback = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const FacePain = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const MofrazatQaihiaMokhatia = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const RainyNose = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const TahiojEyes = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const EfrazatDam3ia = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Itching = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const HboubonSkin = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const TafahJildiJaf = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const RedSkin = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const InfectionSpreading = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const WhiteRush = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Acne = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const RedAcne = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const NailWhiteRush = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const WeakNails = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const BlueBruises = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Dizziness = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const PaleSkin = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const HairLoss = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const BreathShortness = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const pulstingPain = new Symptom('صداع نصفي', 'هل تعاني من صداع جزء واحد من الرأس', YesNoValues, ConditionValuesType.YesNoValues);

const  HearingSensitivity = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const OdorSensitivty = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const ChestPain = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const VoiceLoss = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const NasalLoss = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const TasteLoss = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const YellowEyeWhite = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const FoodIntolerance = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const DarkUrine = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const JointPain = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const DrySkin = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const RiceDairihea = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const StinkyBreath = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const ShoulderPain = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Moodiness = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Anxiety = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Depression = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Sluggishness = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const TeethDecay = new Symptom('ضعف بنية الأسنان', '', YesNoValues, ConditionValuesType.YesNoValues);

const Impotence = new Symptom('ضعف جنسي', '', YesNoValues, ConditionValuesType.YesNoValues);

const WeigthGain = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const BleedingGums = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const RepeatedUriniation = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const ConstantThirst = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Starvation = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const WeightLoss = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const SlowWoundHealing = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const DryHair = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const SkinRoughness = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const ColdIntolerance = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Tachycardia = new Symptom('تسرع ضربات القلب', '', YesNoValues, ConditionValuesType.YesNoValues);

const Tremor = new Symptom('الرعاش', '', YesNoValues, ConditionValuesType.YesNoValues);

const Nervousness = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Irritation = new Symptom('', '', YesNoValues, ConditionValuesType.YesNoValues);

const Arrhythmia = new Symptom('عدم انتظام ضربات القلب', '', YesNoValues, ConditionValuesType.YesNoValues);

const TirenessWhileActive = new Symptom('تعب عند الجهد', '', YesNoValues, ConditionValuesType.YesNoValues);

