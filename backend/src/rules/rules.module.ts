import { Module } from '@nestjs/common';
import { RulesService } from './rules.service';
import { SharedModule } from 'src/shared/shared.module';
import { ConditionsModule } from 'src/conditions/conditions.module';

@Module({
  imports: [SharedModule, ConditionsModule],
  providers: [RulesService],
  exports: [RulesService],
})
export class RulesModule {}
