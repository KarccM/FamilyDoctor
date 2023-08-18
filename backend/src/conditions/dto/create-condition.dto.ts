import { ApiProperty } from '@nestjs/swagger/dist'
import { ConditionType, ConditionValuesType } from 'src/shared/Utils/constants/enums';


export class CreateConditionDto {
    @ApiProperty({type: String, required: true})
    name: string;

    @ApiProperty({type: String, required: true})
    question: string;

    @ApiProperty({required: true, enum: ConditionType, example: Object.keys(ConditionType)})
    conditionType: string;

    @ApiProperty({
        required: true,
        enum: ConditionValuesType, 
        example: Object.keys(ConditionValuesType), 
        description: 'Values\'s Type for the Condition', 
        default: ConditionValuesType.YesNoValues})
    conditionValuesType: string;


    @ApiProperty({type: [], isArray: true, required: true})
    values: [];
}