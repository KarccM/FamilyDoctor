import { Module } from '@nestjs/common';
import { ConclusionService } from './conclusion.service';
import { ConclusionController } from './conclusion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Conclusion,
  ConclusionSchema,
  Diagnosis,
  DiagnosisSchema,
} from './conclusion.schema';
import { SharedModule } from 'src/shared/shared.module';
import { RulesModule } from 'src/rules/rules.module';
import { ConditionsModule } from 'src/conditions/conditions.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Conclusion.name,
        schema: ConclusionSchema,
        discriminators: [{ name: Diagnosis.name, schema: DiagnosisSchema }],
      },
    ]),
    SharedModule,
    RulesModule,
    ConditionsModule,
  ],
  controllers: [ConclusionController],
  providers: [ConclusionService],
  exports: [ConclusionService],
})
export class ConclusionModule {}
