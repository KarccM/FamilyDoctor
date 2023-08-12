import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat, ChatDocument } from './chats.schema';
import { Model } from 'mongoose';
import { ChatEntity } from './entities/chat.entity';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { NotFoundException} from '@nestjs/common/exceptions'

@Injectable()
export class ChatsService {
    constructor(@InjectModel(Chat.name) private chatModel: Model<ChatDocument>){}

    async create(createChatDto: CreateChatDto): Promise<ChatEntity> {
        let chat: ChatEntity = null;
        chat = await this.chatModel.create({user_id: createChatDto.user_id, context: {}});
        return chat;
    }

    async update(updateChatDto: UpdateChatDto): Promise<ChatEntity> {
        let chat: ChatDocument;
        try{
            chat = await this.chatModel.findOne({_id: updateChatDto._id, user_id: updateChatDto.user_id});
            if(chat == null || chat == undefined) {throw new Error(`Can't Update on Chat that does not exist`)}
            chat.context = updateChatDto.context;
        } catch (error) {
            throw error
        }
        return await chat.save();
    }

    async findAll(): Promise<ChatEntity[]> {
        let chats = await this.chatModel.find({});
        return chats
    }

    async findOne(id: string, user_id: string): Promise<ChatEntity> {
        let chat: ChatEntity = null;
        try {
            chat = await this.chatModel.findOne({_id: id, user_id: user_id})
            if(chat == null || chat  == undefined) {throw new NotFoundException(`Chat with id:${id} and user_id:${user_id} Not Found!`)}
        } catch (error) {
            throw error;
        }
        return chat;
    }

    async remove(id: string, user_id: string){
        try{
            await this.chatModel.findOneAndDelete({_id: id, user_id: user_id});
        } catch (error) {
            throw new NotFoundException(`Chat with id:${id} and user_id:${user_id} Not Found!`)
        }
    }
}
