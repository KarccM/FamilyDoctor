import { ApiPropertyOptional, getSchemaPath, ApiExtraModels } from '@nestjs/swagger/dist';
import { Rule } from "src/rules/entities/rule.entity";
import { CreateDiagnosisDto } from "./create-diagnosis.dto";
import { ConclusionType } from 'src/shared/Utils/constants/enums';
import { CreateDiseaseDto } from './create-disease.dto';
import { CreateRuleDto } from 'src/rules/dto/create-rule.dto';


export type createConclusionType = CreateDiagnosisDto;

@ApiExtraModels(CreateDiagnosisDto, CreateDiseaseDto, CreateRuleDto)
export class CreateConclusionDto {
    @ApiPropertyOptional({type: String, required: true, description: 'Conclusion name'})
    name: string;

    @ApiPropertyOptional({type: Number, required: true, description: 'Conclusion priority'})
    priority: number;

    @ApiPropertyOptional({type: [CreateRuleDto], required: true})
    rules: CreateRuleDto[];

    @ApiPropertyOptional({required: true, enum: ConclusionType, example: Object.keys(ConclusionType)})
    conclusionType: string;

    @ApiPropertyOptional({
        oneOf: [
            {$ref: getSchemaPath(CreateDiagnosisDto)},
            {$ref: getSchemaPath(CreateDiseaseDto)}
        ],
        type: 'object'
    })
    conclusion: CreateDiagnosisDto | CreateDiseaseDto;
}
