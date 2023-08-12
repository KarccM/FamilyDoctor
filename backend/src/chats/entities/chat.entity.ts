import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger/dist";

export class ChatEntity{
    @ApiPropertyOptional({type: String})
    _id: string;

    @ApiPropertyOptional({type: String})
    user_id: string;

    @ApiPropertyOptional()
    context: any;
}