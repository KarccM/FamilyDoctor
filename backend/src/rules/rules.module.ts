import { Module } from '@nestjs/common';
import { RulesService } from './rules.service';
import { RulesController } from './rules.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rule, RuleSchema } from './rule.schema';
import { SharedModule } from 'src/shared/shared.module';
import { ConditionsModule } from 'src/conditions/conditions.module';

@Module({
  imports: [
    // MongooseModule.forFeature([{name: Rule.name, schema: RuleSchema}]),
    SharedModule,
    ConditionsModule
  ],
  controllers: [RulesController],
  providers: [RulesService],
  exports: [RulesService]
})
export class RulesModule {}
