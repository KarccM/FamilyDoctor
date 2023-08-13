import { Injectable } from '@nestjs/common';
import { CreateConclusionDto } from './dto/create-conclusion.dto';
import { UpdateConclusionDto } from './dto/update-conclusion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Conclusion, ConclusionDocument } from './conclusion.schema';
import { Model } from 'mongoose';
import { ConclusionType } from 'src/shared/Utils/constants/enums';
import { BadRequestException } from '@nestjs/common/exceptions';
import { RulesService } from 'src/rules/rules.service';
import { Rule } from 'src/rules/rule.schema';
import { ConditionsService } from 'src/conditions/conditions.service';

@Injectable()
export class ConclusionService {
  constructor(
    @InjectModel(Conclusion.name)
    private conclusionModel: Model<ConclusionDocument>,
    private readonly ruleService: RulesService,
    private readonly conditionService: ConditionsService,
  ) {}

  async addConclusion(createConclusionDto: CreateConclusionDto) {
    let conclusion: ConclusionDocument = null;
    let rules: Rule[] = null;
    let other = createConclusionDto.conclusion;
    try {
      conclusion = await this.conclusionModel.findOne({
        name: createConclusionDto.name,
      });
      if (conclusion != null || conclusion != undefined) {
        throw new BadRequestException(
          `Conclusion [${createConclusionDto.conclusionType}] [${createConclusionDto.name}] already exists`,
        );
      }
      if (
        createConclusionDto.rules == null ||
        createConclusionDto.rules?.length == 0
      ) {
        throw new BadRequestException(
          `Cannot create a conclusion with empty rules!`,
        );
      }
      rules = await Promise.all(
        createConclusionDto.rules.map(async (r) => {
          return await this.ruleService.addRule(r);
        }),
      );
      if (rules == null || rules?.length == 0) {
        throw new BadRequestException(
          `Cannot create a conclusion with empty rules!`,
        );
      }
      conclusion = await this.conclusionModel.create({
        name: createConclusionDto.name,
        priority: createConclusionDto.priority,
        rules: rules,
        conclusionType: ConclusionType[createConclusionDto.conclusionType],
        ...other,
      });
      return await conclusion.populate('rules.conditions.c');
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findAll(): Promise<Conclusion[]> {
    let result = await this.conclusionModel.find({});
    let populatedResult = await this.populateConditions(result);
    return populatedResult;
  }

  async populateConditions(items: Array<Conclusion>) {
    if (Array.isArray(items)) {
      let new_items: Conclusion[];
      try {
        new_items = await Promise.all(
          items.map(async (i) => {
            return await this.populateCondition(i);
          }),
        );
      } catch (error) {
        console.log(error);
      }
      return new_items;
    }
  }

  async populateCondition(item: Conclusion): Promise<Conclusion> {
    let conclusion: Conclusion = null;
    let rules: any[] = [];
    try {
      item.rules = await Promise.all(
        item.rules.map(async (rule) => {
          let conditions: any[] = [];
          conditions = await Promise.all(
            rule.conditions.map(async (cond) => {
              let condObj = await this.conditionService.findOne(cond.c._id);
              return { c: condObj, v: cond.v };
            }),
          );
          return { conditions: conditions };
        }),
      );
    } catch (error) {
      console.error(error);
    }
    return item;
  }

  async findAllDiagnosis(): Promise<Conclusion[]> {
    return await this.conclusionModel.discriminators[ConclusionType.Diagnosis]
      .find({})
      .populate('rules.conditions.0');
  }

  async findOne(id: string): Promise<Conclusion> {
    return await this.conclusionModel
      .findById(id)
      .populate('rules.conditions.0');
  }

  async update(
    id: string,
    updateConclusionDto: UpdateConclusionDto,
  ): Promise<Conclusion> {
    return;
  }

  async remove(id: string) {
    try {
      await this.conclusionModel.findByIdAndDelete(id);
    } catch (error) {
      throw new BadRequestException(`Conclusion with id: ${id} does not exist`);
    }
  }
}
