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

  @Post('/chat')
  @ApiResponse({type: ChatResponse})
  chat(@Body() answerChatDto: AnswerChatDto){
    return this.chatsService.answer(answerChatDto)
  }
}
