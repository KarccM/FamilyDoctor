import { ApiPropertyOptional, ApiResponse } from '@nestjs/swagger/dist';
import { ConditionType } from 'src/shared/Utils/constants/enums';

export class Condition {
    @ApiPropertyOptional({ type: String})
    name: string;

    @ApiPropertyOptional({ type: String})
    question: string;

    @ApiPropertyOptional({ type: String, enum: ConditionType})
    conditionType: string;

    @ApiPropertyOptional({ type: [], isArray: true })
    values: any[];
}