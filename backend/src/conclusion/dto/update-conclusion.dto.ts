import { PartialType } from '@nestjs/swagger';
import { CreateConclusionDto } from './create-conclusion.dto';

export class UpdateConclusionDto extends PartialType(CreateConclusionDto) {}
