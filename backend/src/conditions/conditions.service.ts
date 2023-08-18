import { Injectable } from '@nestjs/common';
import { CreateConditionDto } from './dto/create-condition.dto';
import { UpdateConditionDto } from './dto/update-condition.dto';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Condition, ConditionDocument  } from './conditions.schema';
import { Model } from 'mongoose';
import { BadRequestException } from '@nestjs/common/exceptions';
import { ConditionType, ConditionValuesType } from 'src/shared/Utils/constants/enums';
import { YesNoValues } from 'src/shared/Utils/constants/constants';

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
      values: createConditionDto.conditionValuesType == ConditionValuesType.YesNoValues ? YesNoValues: createConditionDto.values,
      conditionType: ConditionType[createConditionDto.conditionType],
      question: createConditionDto.question,
      conditionValuesType: ConditionValuesType[createConditionDto.conditionValuesType]
    });

    return condition
  }

  async findAllSymptoms(): Promise<Condition[]> {
    return await this.conditionModel.find({conditionType: ConditionType.Symptom});
  }

  async findAllMedicalConditions(): Promise<Condition[]> {
    return await this.conditionModel.find({conditionType: ConditionType.MedicalCondition});
  }

  async findAllPatientInfo(): Promise<Condition[]> {
    return await this.conditionModel.find({conditionType: ConditionType.PatientInfo});
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

  // async checkValueValidity()

  async update(id: string, updateConditionDto: UpdateConditionDto): Promise<Condition> {
    let condition;
    try{
      condition = await this.conditionModel.findById(id);
      if(condition) {
      if (updateConditionDto?.name) condition.name = updateConditionDto.name;
      if (updateConditionDto?.question) condition.question = updateConditionDto.question;
      if (updateConditionDto?.conditionValuesType) condition.conditionValuesType = updateConditionDto.conditionValuesType
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
