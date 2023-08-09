import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConditionsService } from './conditions.service';
import { CreateConditionDto } from './dto/create-condition.dto';
import { UpdateConditionDto } from './dto/update-condition.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { InferenceEngine } from 'src/inference-engine/inference-engine';
import { Condition } from './entities/condition.entity';


@ApiBearerAuth()
@ApiTags('conditions')
@Controller('conditions')
export class ConditionsController {
  constructor(private readonly conditionsService: ConditionsService) {}

  @Post()
  @ApiBearerAuth('Authentication')
  @ApiOperation({summary: 'Create Condition'})
  @ApiResponse({status: 403, description: 'Forbidden.'})
  create(@Body() createConditionDto: CreateConditionDto) {
    return this.conditionsService.create(createConditionDto);
  }

  @Get()
  findAll() {
    return this.conditionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Get condition by id'})
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Condition
  })
  findOne(@Param('id') id: string) {
    return this.conditionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConditionDto: UpdateConditionDto) {
    let ie = new InferenceEngine();
    return this.conditionsService.update(+id, updateConditionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conditionsService.remove(+id);
  }
}
