import { ApiPropertyOptional, ApiResponse } from '@nestjs/swagger/dist';
import {
  ConditionType,
  ConditionValuesType,
} from 'src/shared/Utils/constants/enums';

export class Condition {
  @ApiPropertyOptional({ type: String })
  name: string;

  @ApiPropertyOptional({ type: String })
  question: string;

  @ApiPropertyOptional({ type: String, enum: ConditionType })
  conditionType?: string;

  @ApiPropertyOptional({ type: [], isArray: true })
  values: any[];

  @ApiPropertyOptional({ type: String, enum: ConditionValuesType })
  conditionValuesType?: string;

  @ApiPropertyOptional({ type: String || Number })
  value?: string | number;
}
