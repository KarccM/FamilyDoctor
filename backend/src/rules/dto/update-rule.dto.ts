import { PartialType } from '@nestjs/swagger';
import { CreateRuleDto } from './create-rule.dto';
import { ApiPropertyOptional } from '@nestjs/swagger/dist';

export class UpdateRuleDto extends PartialType(CreateRuleDto) {
    @ApiPropertyOptional({ type: String, required: true, nullable: false})
    id!: string;
}
