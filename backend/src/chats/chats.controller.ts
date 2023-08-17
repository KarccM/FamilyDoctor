import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { AnswerChatDto } from './dto/answer-chat.dto';
import { ChatResponse } from './entities/chat-response.entity';
import { ChatEntity } from './entities/chat.entity';

@ApiTags('chat')
@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post()
  @ApiResponse({type: ChatEntity})
  create_chat(@Body() createChatDto: CreateChatDto){
    return this.chatsService.create(createChatDto);
  }

  @Post('/chat/:id')
  @ApiResponse({type: ChatResponse})
  chat(@Body() answerChatDto: AnswerChatDto, @Param('id')id: string){
    return this.chatsService.answer(answerChatDto, id)
  }

  @Get('/chat/:id')
  @ApiResponse({type: ChatResponse})
  start(@Body()user_id: string, @Param('id')id: string){
    return this.chatsService.start(id, user_id);
  }

  @Get('/nlp')
  async hello_nlp(){
    return await this.chatsService.helloNLP()
  }

  @Post('/nlp')
  async processNLP(){
    let data = {
      answer: 'أعاني من ارتفاع الحرارة',
      labels: ['نعم يوجد حرارة', 'لا يوجد حرارة', 'لا أعرف']
    }
    return await this.chatsService.processNLP(data.answer, data.labels)
  }
}
