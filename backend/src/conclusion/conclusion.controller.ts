import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConclusionService } from './conclusion.service';
import { CreateConclusionDto } from './dto/create-conclusion.dto';
import { UpdateConclusionDto } from './dto/update-conclusion.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger/dist';

@ApiTags('conclusion')
@Controller('conclusion')
export class ConclusionController {
  constructor(private readonly conclusionService: ConclusionService) {}

  @Post()
  create(@Body() createConclusionDto: CreateConclusionDto) {
    return this.conclusionService.create(createConclusionDto);
  }

  @Get()
  findAll() {
    return this.conclusionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conclusionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConclusionDto: UpdateConclusionDto) {
    return this.conclusionService.update(id, updateConclusionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conclusionService.remove(id);
  }
}
