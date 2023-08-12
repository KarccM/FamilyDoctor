import { Injectable } from '@nestjs/common';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rule, RuleDocument } from './rule.schema';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { ConditionsService } from 'src/conditions/conditions.service';
import { BadRequestException} from '@nestjs/common/exceptions'

@Injectable()
export class RulesService {
  constructor(private readonly conditionService: ConditionsService){}

  async addRule(createRuleDto: CreateRuleDto) {
    try {
      let conditions = []
      conditions = await Promise.all(
        createRuleDto.conditions.map(async (c) => {
          try{
          let c_id = new ObjectId(c['c']);
        } catch (error) {
          throw new BadRequestException(`Conditions ID not valid`);
        }
          let condition = await this.conditionService.findOne(c['c']);
          if(condition == null || condition == undefined) throw new BadRequestException(`Condition with id:${c[0]} does not exist`)
          return {'c': condition._id, 'v': c['v'] || 'y'}
        })
      )
      return {conditions: conditions}
    } catch (error) {
      console.error(error)
      throw(error)
    }
  }

  async findAll() {
    return `This action returns all rules`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} rule`;
  }

  async update(id: number, updateRuleDto: UpdateRuleDto) {
    return `This action updates a #${id} rule`;
  }

  async remove(id: number) {
    return `This action removes a #${id} rule`;
  }
}
