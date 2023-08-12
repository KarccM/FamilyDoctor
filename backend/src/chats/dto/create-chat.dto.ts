import { ApiProperty } from "@nestjs/swagger/dist";

export class CreateChatDto{
    @ApiProperty({type: String, nullable: false, description: 'User ID'})
    user_id: string;
}