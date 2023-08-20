import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger/dist';
import { YesNoValues } from 'src/shared/Utils/constants/constants';

export class CreateRuleConditionDto {
  @ApiProperty({ type: String, required: true, description: 'Condition ID' })
  condition: string;

  @ApiPropertyOptional({
    type: String,
    required: true,
    description: 'Condition Value',
    default: YesNoValues[0],
  })
  value: string;
}
//this
export class CreateRuleDto {
  @ApiProperty({
    type: [CreateRuleConditionDto],
    required: true,
    description: 'Conditions (IDs, Values)',
  })
  conditions: CreateRuleConditionDto[];
}
