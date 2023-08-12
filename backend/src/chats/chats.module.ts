import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from './chats.schema';
import { SharedModule } from 'src/shared/shared.module';
import { InferenceEngine } from 'src/inference-engine/inference-engine.module';
import { ConditionsModule } from 'src/conditions/conditions.module';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Chat.name,
      schema: ChatSchema,
    }]),
    SharedModule,
    InferenceEngine,
    ConditionsModule
  ],
  controllers: [ChatsController],
  providers: [ChatsService]
})
export class ChatsModule {}
