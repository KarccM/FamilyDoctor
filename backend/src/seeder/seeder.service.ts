import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { Command } from 'nestjs-command';
import { ConclusionService } from 'src/conclusion/conclusion.service';
import { ConditionsService } from 'src/conditions/conditions.service';

@Injectable()
export class SeederService {
  constructor(
    private readonly conditionService: ConditionsService,
    private readonly conclusionService: ConclusionService,
  ) {}

  @Command({
    command: 'seed:KnowledgeBase',
    describe: 'seeding the knowledge base | Conditions & Conclusions',
    aliases: ['seed:KB', 'seed:kb'],
  })
  async seed() {
    log(`THIS IS SO MUCH FUN I LOVE IT!!!!!!!!!!!!!`);
  }
}
