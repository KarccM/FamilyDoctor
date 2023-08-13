import { ApiPropertyOptional, ApiExtraModels } from '@nestjs/swagger/dist';
import { Conclusion } from '../entities/conclusion.entity';
import { CreateConclusionDto } from './create-conclusion.dto';
// import { ExtraModel } from '@nestjs/swagger'

// @ApiExtraModels(CreateConclusionDto)
export class CreateDiseaseDto {
  @ApiPropertyOptional({ type: [String] })
  treatment: string[];

  @ApiPropertyOptional({ type: String })
  specialist: string;

  @ApiPropertyOptional({ type: [String] })
  notes: string[];
}
