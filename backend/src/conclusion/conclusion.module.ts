import { Module } from '@nestjs/common';
import { ConclusionService } from './conclusion.service';
import { ConclusionController } from './conclusion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Conclusion, ConclusionSchema, Diagnosis, DiagnosisSchema } from './conclusion.schema';
import { SharedModule } from 'src/shared/shared.module';
import { RulesModule } from 'src/rules/rules.module';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Conclusion.name,
      schema: ConclusionSchema,
      discriminators: [
        {name: Diagnosis.name, schema: DiagnosisSchema}
      ]
    }]),
    SharedModule,
    RulesModule,
  ],
  controllers: [ConclusionController],
  providers: [ConclusionService]
})
export class ConclusionModule {}
