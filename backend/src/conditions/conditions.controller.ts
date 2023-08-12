import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConditionsService } from './conditions.service';
import { CreateConditionDto } from './dto/create-condition.dto';
import { UpdateConditionDto } from './dto/update-condition.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { Condition } from './entities/condition.entity';


@ApiBearerAuth()
@ApiTags('conditions')
@Controller('conditions')
export class ConditionsController {
  constructor(private readonly conditionsService: ConditionsService) {}

  @Post()
  @ApiBearerAuth('Authentication')
  @ApiOperation({summary: 'Create condition'})
  @ApiResponse({status: 403, description: 'Forbidden.'})
  create(@Body() createConditionDto: CreateConditionDto) {
    return this.conditionsService.create(createConditionDto);
  }
  
  @Get()
  @ApiOperation({summary: 'Get [ALL] conditions'})
  @ApiResponse({
    status: 200,
    description: 'All Conditions in DB',
    type: [Condition]
  })
  findAll() {
    return this.conditionsService.findAll();
  }

  @Get('/symptoms')
  @ApiOperation({summary: 'Get [Symptom] type conditions'})
  @ApiResponse({
    status: 200,
    description: 'Symptom Conditions in DB',
    type: [Condition]
  })
  async findAllSymptoms(): Promise<Condition[]>{
    return await this.conditionsService.findAllSymptoms();
  }

  @Get('/medical_conditions')
  @ApiOperation({summary: 'Get [MedicalCondition] type conditions'  })
  @ApiResponse({
    status: 200,
    description: '[MedicalCondition] Conditions in DB',
    type: [Condition]
  })
  findAllMedicalConditions(){
    return this.conditionsService.findAllMedicalConditions();
  }

  @Get('/patient_info')
  @ApiOperation({summary: 'Get [PatientInfo] type conditions'})
  @ApiResponse({
    status: 200,
    description: '[PatientInfo] Conditions in DB',
    type: [Condition]
  })
  findAllPatientInfo(){
    return this.conditionsService.findAllPatientInfo();
  }

  @Get(':id')
  @ApiOperation({summary: 'Get condition by id'})
  @ApiResponse({
    status: 200,
    description: 'The found condition',
    type: Condition
  })
  findOne(@Param('id') id: string) {
    return this.conditionsService.findOne(id);
  }


  @Patch(':id')
  @ApiOperation({summary: 'Update condition'})
  @ApiResponse({
    status: 200,
    description: 'The updated condition',
    type: Condition,
  })
  update(@Param('id') id: string, @Body() updateConditionDto: UpdateConditionDto) {
    return this.conditionsService.update(id, updateConditionDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Delete condition'})
  remove(@Param('id') id: string) {
    return this.conditionsService.remove(id);
  }
}
