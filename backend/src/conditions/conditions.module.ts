import { Module } from '@nestjs/common';
import { ConditionsService } from './conditions.service';
import { ConditionsController } from './conditions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Condition,
  ConditionSchema,
  ConditionTypesSchema,
} from './conditions.schema';
import { SharedModule } from 'src/shared/shared.module';
import { ConditionType } from 'src/shared/Utils/constants/enums';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Condition.name,
        schema: ConditionSchema,
        // discriminators: [
        //   {name: ConditionType.Symptom, schema: ConditionTypesSchema},
        //   {name: ConditionType.MedicalCondition, schema: ConditionTypesSchema},
        //   {name: ConditionType.PatientInfo, schema: ConditionTypesSchema}
        // ]
      },
    ]),
    SharedModule,
  ],
  controllers: [ConditionsController],
  providers: [ConditionsService],
  exports: [ConditionsService],
})
export class ConditionsModule {}
