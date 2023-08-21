import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { Command } from 'nestjs-command';
import { ConclusionService } from 'src/conclusion/conclusion.service';
import { ConditionsService } from 'src/conditions/conditions.service';
import { ConditionsList } from 'src/inference-engine/data/conditions.seed.data';
import { ConclusionsList } from 'src/inference-engine/data/conlusions.seed.data';
import { RulesService } from 'src/rules/rules.service';

@Injectable()
export class SeederService {
  constructor(
    private readonly conditionService: ConditionsService,
    private readonly conclusionService: ConclusionService,
    private readonly rulesService: RulesService,
  ) {}

  @Command({
    command: 'seed:KnowledgeBase',
    describe: 'seeding the knowledge base | Conditions & Conclusions',
    aliases: ['seed:KB', 'seed:kb'],
  })
  async seed() {
    log(`THIS IS SO MUCH FUN I LOVE IT!!!!!!!!!!!!!`);
  }

  @Command({
    command: 'seed:conclusions',
    describe: 'Seeding the Conclusions collection',
  })
  async seedConc() {
    let cList = await Promise.all(
      ConclusionsList.map(async (conc) => {
        let rules = null;
        rules = await Promise.all(
          conc.rules.map(async (r) => {
            return await this.rulesService.addRule(r, false);
          }),
        );
        let other = conc.conclusion;
        return {
          name: conc.name,
          priority: conc.priority,
          rules: rules,
          conclusionType: conc.conclusionType,
          ...other,
        };
      }),
    );
    await this.conclusionService.seedCollection(cList);
  }

  @Command({
    command: 'drop:conclusions',
    describe: 'Dropping the Conclusions collection',
  })
  async dropConc() {
    await this.conclusionService.dropCollection();
  }

  @Command({
    command: 'seed:conditions',
    describe: 'seeding the conditions collection',
  })
  async seedCond() {
    // ConditionsList.forEach(async(c) => {
    //   await this.conditionService.create(c)
    // })
    await this.conditionService.seedCollection(ConditionsList);
  }

  @Command({
    command: 'drop:conditions',
    describe: 'dropping the conditions collection',
  })
  async dropCond() {
    await this.conditionService.dropCollection();
  }
}
