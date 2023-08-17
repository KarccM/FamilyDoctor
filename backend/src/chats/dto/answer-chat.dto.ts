import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { AnswerConditionDto } from "src/conditions/dto/answer-condition.dto";

export class AnswerChatDto{
    @ApiProperty({type: String, nullable: false, description: 'User ID'})
    user_id!: string;


    @ApiPropertyOptional({type: AnswerConditionDto})
    condition: AnswerConditionDto
}