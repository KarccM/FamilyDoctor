import { Injectable } from '@nestjs/common';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rule, RuleDocument } from './rule.schema';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { ConditionsService } from 'src/conditions/conditions.service';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class RulesService {
  constructor(private readonly conditionService: ConditionsService) {}

  async create(createRuleDto: CreateRuleDto) {
    let conditions = [];
    try {
      await Promise.all(
        createRuleDto.conditions.map(async (c) => {
          const cond = await this.conditionService.findOne(c.condition);
          // console.log(`In RulesService: ${cond}`)
          if (cond == null || cond == undefined)
            throw new BadRequestException(
              `Condition with id: ${c.condition} Not Found`,
            );
          if (cond) {
            cond.value = c.value;
            conditions.push(cond);
            return cond;
          }
        }),
      );
      // console.log(`This is the conditions object  ${conditions}`)
      conditions.forEach((e) => {
        console.log('this is e', e);
      });
    } catch (error) {
      throw error;
    }
    // let rule = new Rule();
    // rule.conditions = conditions;
    return { conditions: conditions };
  }

  async addRule(createRuleDto: CreateRuleDto, isIDs = true) {
    try {
      let conditions = [];
      conditions = await Promise.all(
        createRuleDto.conditions.map(async (c) => {
          let condition = isIDs
            ? await this.conditionService.findOne(c.condition)
            : await this.conditionService.findOneByName(c.condition);
          if (condition == undefined || condition == null)
            throw new BadRequestException(
              `Condition with id: ${c.condition} Not Found`,
            );
          else {
            condition.value = c.value;
            conditions.push(condition);
            return condition;
          }
        }),
      );
      // console.log(`I am here in addRule ${conditions}`)
      // conditions = conditions.map(c => {return c._id});
      return { conditions: conditions };
    } catch (error) {
      console.error(error);
      throw error;
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
