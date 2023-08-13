import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AnswerConditionDto } from 'src/conditions/dto/answer-condition.dto';

export class AnswerChatDto {
  @ApiProperty({ type: String, nullable: false, description: 'User ID' })
  user_id!: string;

  @ApiProperty({
    type: String,
    nullable: false,
    description:
      'Chat ID - Generated from backend\n Returned _id from POST(chats)',
  })
  _id!: string;

  @ApiPropertyOptional({ type: AnswerConditionDto })
  condition: AnswerConditionDto;
}
