import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCondValuePair {
  @ApiProperty({ required: true, type: String, description: 'c: Condition ID' })
  c: string;

  @ApiPropertyOptional({
    nullable: true,
    default: 'y',
    description: 'v: Condition Value (Default -> "yes"',
  })
  v: any;
}
