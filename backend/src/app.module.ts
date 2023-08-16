import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConditionsModule } from './conditions/conditions.module';
import { SharedModule } from './shared/shared.module';
import { RulesModule } from './rules/rules.module';
import { ConclusionModule } from './conclusion/conclusion.module';
import { ChatsModule } from './chats/chats.module';
import { InferenceEngine } from './inference-engine/inference-engine.module';

// global uri 
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    CommandModule,
    MongooseModule.forRoot(process.env.NODE_ENV == 'dev'? process.env.MONGODB_URI_LOCAL : process.env.DATABASE_URI),
    ConditionsModule,
    SharedModule,
    RulesModule,
    ConclusionModule,
    ChatsModule,
    InferenceEngine
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}