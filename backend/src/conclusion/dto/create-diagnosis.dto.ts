import { ApiPropertyOptional, ApiExtraModels } from '@nestjs/swagger/dist';
import { CreateConclusionDto } from './create-conclusion.dto';

// @ApiExtraModels()
// @ApiExtraModels(CreateConclusionDto)
export class CreateDiagnosisDto{
    @ApiPropertyOptional({type: [String]})
    treatment: string[];

    @ApiPropertyOptional({type: String})
    specialist: string;

    @ApiPropertyOptional({type: [String]})
    notes: string[]
}