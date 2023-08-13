import { ApiProperty } from '@nestjs/swagger';
import { Condition } from 'src/conditions/entities/condition.entity';

export class ChatResponse {
  @ApiProperty({ type: String, description: 'Chat ID' })
  _id: string;

  @ApiProperty({ type: String, description: 'User ID' })
  user_id: string;

  @ApiProperty({ description: 'Context - PQueue of the current chat' })
  context: any;

  @ApiProperty({
    type: Condition,
    description: 'Next Condition to Ask (Currently)',
  })
  condition: Condition;
}
