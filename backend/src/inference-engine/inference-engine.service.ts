import { Injectable } from '@nestjs/common';
import { Conclusion } from 'src/conclusion/conclusion.schema';
import { ConclusionService } from 'src/conclusion/conclusion.service';
import { Condition } from 'src/conditions/conditions.schema';
import { ConditionsService } from 'src/conditions/conditions.service';
import { Symptom } from './classes/symptom';
import { MedicalCondition } from './classes/medical-condition';
import { PatientInfo } from './classes/patient-info';

@Injectable()
export class InferenceEngineService {
    constructor(
        private readonly conditionsService: ConditionsService,
        private readonly conclusisonService: ConclusionService
    ) {}

    async init(){
        let conditionsKB: Condition[] = null;
        let symptomsKB: Condition[], medicalCondsKB: Condition[], patientInfosKB: Condition[];
        let conclusionsKB: Conclusion[] = null;
        let diagnoisKB: Conclusion[];
        let symptoms: Symptom[],
            medicalConds: MedicalCondition[],
            patientInfos: PatientInfo[]; 
        try {
            symptomsKB = await this.conditionsService.findAllSymptoms();
            medicalCondsKB = await this.conditionsService.findAllMedicalConditions();
            patientInfosKB = await this.conditionsService.findAllPatientInfo();
            
            diagnoisKB = await this.conclusisonService.findAllDiagnosis();

            

        } catch (error) {
            throw error
        }
    }
}