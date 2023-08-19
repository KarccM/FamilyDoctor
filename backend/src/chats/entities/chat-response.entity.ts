import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Conclusion } from 'src/conclusion/entities/conclusion.entity';
import { Condition } from 'src/conditions/entities/condition.entity';

export class ChatResponse {
  @ApiProperty({ type: String, description: 'Chat ID' })
  _id: string;

  @ApiPropertyOptional({ type: String, description: 'User ID' })
  user_id?: string;

  @ApiProperty({ description: 'Context - PQueue of the current chat' })
  context: any;

  @ApiPropertyOptional({
    type: Condition,
    description: 'Next Condition to Ask (Currently)',
  })
  condition?: Condition;

  @ApiPropertyOptional({
    type: Conclusion,
    description: 'The current Conclusion',
  })
  conclusion?: Conclusion;
}
