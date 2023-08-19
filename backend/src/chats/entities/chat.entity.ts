import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger/dist';

export class ChatEntity {
  @ApiPropertyOptional({ type: String, description: 'Chat ID' })
  _id: string;

  @ApiPropertyOptional({ type: String, description: 'User ID' })
  user_id: string;

  @ApiPropertyOptional({
    type: Object,
    description: 'Context - PQueue of the current chat',
  })
  context: any;

  @ApiPropertyOptional({type: Date, description: ''})
  createdAt?: Date;
}
