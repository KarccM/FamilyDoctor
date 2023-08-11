import { ApiPropertyOptional } from '@nestjs/swagger/dist'
import { Condition } from 'src/conditions/entities/condition.entity'

export class Rule {
    @ApiPropertyOptional({type: [Condition]})
    conditions: Condition[];
}
