import { PartialType } from '@nestjs/mapped-types';
import { CreateConditionDto } from './create-condition.dto';
import { ApiPropertyOptional } from '@nestjs/swagger/dist';

export class UpdateConditionDto extends PartialType(CreateConditionDto) {
    @ApiPropertyOptional({type: String, required: true })
    id: string;
}
