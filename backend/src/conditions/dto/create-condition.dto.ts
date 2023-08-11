import { ApiPropertyOptional } from '@nestjs/swagger/dist'
import { ConditionType } from 'src/shared/Utils/constants/enums';


export class CreateConditionDto {
    @ApiPropertyOptional({type: String, required: true})
    name: string;

    @ApiPropertyOptional({type: String, required: true})
    question: string;

    @ApiPropertyOptional({required: true, enum: ConditionType, example: Object.keys(ConditionType)})
    conditionType: string;

    @ApiPropertyOptional({type: [], isArray: true, required: true})
    values: [];
}
