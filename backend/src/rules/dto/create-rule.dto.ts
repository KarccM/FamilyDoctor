import { ApiPropertyOptional } from '@nestjs/swagger/dist';
import { ConditionValue } from 'src/shared/Utils/constants/types';
import { CreateCondValuePair } from './condition-value-pair.dto';

export class CreateRuleDto {
    @ApiPropertyOptional({ type: CreateCondValuePair, required: true, description: 'Pairs of <c:Condition ID, v: Condition Value>', nullable: false, isArray: true })
    conditions: CreateCondValuePair[];
}