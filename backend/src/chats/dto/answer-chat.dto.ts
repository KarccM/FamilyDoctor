import { AnswerConditionDto } from "src/conditions/dto/answer-condition.dto";

export class AnswerChatDto{
    user_id!: string;
    _id!: string;
    condition: AnswerConditionDto
}