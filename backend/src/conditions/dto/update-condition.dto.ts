import { PartialType } from '@nestjs/mapped-types';
import { CreateConditionDto } from './create-condition.dto';
import { ApiProperty } from '@nestjs/swagger/dist';

export class UpdateConditionDto extends PartialType(CreateConditionDto) {
    @ApiProperty({type: String, required: true })
    id: string;
}
