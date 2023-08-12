import { Injectable } from '@nestjs/common';
import { CreateConditionDto } from './dto/create-condition.dto';
import { UpdateConditionDto } from './dto/update-condition.dto';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Condition, ConditionDocument, Symptom,  } from './conditions.schema';
import { Model } from 'mongoose';
import { BadRequestException } from '@nestjs/common/exceptions';
import { ConditionType } from 'src/shared/Utils/constants/enums';

@Injectable()
export class ConditionsService {
  constructor(@InjectModel(Condition.name) private conditionModel: Model<ConditionDocument>) {} 


  async create(createConditionDto: CreateConditionDto): Promise<Condition> {
    let condition = null;
    condition = await this.conditionModel.findOne({name: createConditionDto.name});
    if(condition){
      throw new BadRequestException(`${condition.name} already exists`);
    }
    condition = await this.conditionModel.create({
      name: createConditionDto.name,
      values: createConditionDto.values,
      conditionType: ConditionType[createConditionDto.conditionType],
      question: createConditionDto.question
    });

    return condition
  }

  async findAllSymptoms(): Promise<Condition[]> {
    return await this.conditionModel.discriminators[ConditionType.Symptom].find({});
  }

  async findAllMedicalConditions(): Promise<Condition[]> {
    return await this.conditionModel.discriminators[ConditionType.MedicalCondition].find({});
  }

  async findAllPatientInfo(): Promise<Condition[]> {
    return await this.conditionModel.discriminators[ConditionType.PatientInfo].find({});
  }


  async findAll(): Promise<Condition[]> {
    return await this.conditionModel.find({})
  }

  async findOne(id: string): Promise<Condition> {
    return await this.conditionModel.findById(id)
  }

  async findOneByName(name: string): Promise<Condition> {
    return await this.conditionModel.findOne({name: name})
  }

  async update(id: string, updateConditionDto: UpdateConditionDto): Promise<Condition> {
    let condition;
    try{
      condition = await this.conditionModel.findById(id);
      if(condition) {
      if (updateConditionDto?.name) condition.name = updateConditionDto.name;
      if (updateConditionDto?.question) condition.question = updateConditionDto.question;
      if (updateConditionDto?.values) condition.values = updateConditionDto.values;
      }
  } catch(error) {
    throw new BadRequestException(`Condition with id:${id} does not exist`)
  }
    return await condition.save();
  }

  async remove(id: string) {
    try {
      await this.conditionModel.findByIdAndDelete(id)
    } catch (error) {
      throw new BadRequestException(`Condition with id:${id} does not exist`)
    }  
  }
}
