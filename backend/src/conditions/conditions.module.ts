import { Module } from '@nestjs/common';
import { ConditionsService } from './conditions.service';
import { ConditionsController } from './conditions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Condition, ConditionSchema, MedicalCondition, MedicalConditionSchema, PatientInfo, PatientInfoSchema, Symptom, SymptomSchema } from './conditions.schema';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Condition.name,
      schema: ConditionSchema,
      discriminators: [
        {name: Symptom.name, schema: SymptomSchema},
        {name: MedicalCondition.name, schema: MedicalConditionSchema},
        {name: PatientInfo.name, schema: PatientInfoSchema}
      ]
    }]),
    SharedModule,
  ],
  controllers: [ConditionsController],
  providers: [ConditionsService],
  exports: [ConditionsService]
})
export class ConditionsModule {}
