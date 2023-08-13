import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AnswerConditionDto {
  @ApiProperty({ type: String, nullable: false, description: 'Condition Name' })
  name!: string;

  @ApiPropertyOptional({ type: String })
  answer: string;
}
