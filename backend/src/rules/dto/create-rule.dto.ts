import { ApiPropertyOptional } from '@nestjs/swagger/dist';

export class CreateRuleDto {
    @ApiPropertyOptional({ type: [String], required: true, description: 'Conditions IDs', nullable: false })
    conditions: string[];
}