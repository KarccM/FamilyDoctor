import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat, ChatDocument } from './chats.schema';
import { Model } from 'mongoose';
import { ChatEntity } from './entities/chat.entity';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { BadRequestException, NotFoundException} from '@nestjs/common/exceptions'
import { AnswerChatDto } from './dto/answer-chat.dto';
import { InferenceEngineService } from 'src/inference-engine/inference-engine.service';
import { PriorityQueue } from 'src/inference-engine/classes/priority-queue';
import { ConditionsService } from 'src/conditions/conditions.service';
import { Condition as ConditionClass } from 'src/inference-engine/classes/condition';
import { ConditionType } from 'src/shared/Utils/constants/enums';
import { Symptom as SymptomClass } from 'src/inference-engine/classes/symptom';
import { MedicalCondition as MedicalConditionClass } from 'src/inference-engine/classes/medical-condition';
import { PatientInfo as PatientInfoClass } from 'src/inference-engine/classes/patient-info';
import { ConditionFactory } from 'src/shared/helpers/condition-factory';
import { ChatResponse } from './entities/chat-response.entity';

@Injectable()
export class ChatsService {
    constructor(
        @InjectModel(Chat.name) private chatModel: Model<ChatDocument>,
        private inferenceEngineService: InferenceEngineService,
        private conditionsService: ConditionsService
        ){}

    async create(createChatDto: CreateChatDto): Promise<ChatEntity> {
        let chat: ChatEntity = null;
        chat = await this.chatModel.create({user_id: createChatDto.user_id, context: {}});
        return chat;
    }

    async start(id: string, user_id: string){
        let chat: ChatDocument;
        let res:  ChatResponse;
        try {
            chat = await  this.chatModel.findOne({_id: id, user_id: user_id});
            if(chat == null || chat == undefined) throw new BadRequestException(`Chat with id:${id} and user:${user_id} doesnot exist`);
            res = await this.inferenceEngineService.start(id, user_id);
        } catch (error) {
            throw error;
        }
        return res;
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

    async answer(answerChatDto: AnswerChatDto): Promise<ChatResponse> {
        let chat: ChatDocument;
        let response: ChatResponse;
        let conditionRes;
        try{
            chat = await this.chatModel.findOne({_id: answerChatDto._id, user_id: answerChatDto.user_id})
            if(chat == null || chat == undefined) {throw new Error('Chat does not exist')}
            let condition = await this.conditionsService.findOneByName(answerChatDto.condition.name);
            if (condition == null || condition == undefined) {throw new BadRequestException(`Condition ${answerChatDto.condition.name} does not exist`)}
            let condInstance: ConditionClass;
            condInstance = ConditionFactory(condition)
            condInstance.answer = answerChatDto.condition.answer;
            let context = {}
            let pqueue: PriorityQueue = await this.inferenceEngineService.init();
            pqueue.updateNodes(condInstance);
            conditionRes = pqueue.askQuestion()
            context = pqueue;
            chat.context = context;
        } catch (error) {
            throw error
        }
        await chat.save();
        response = { condition: conditionRes, context: chat.context, _id: chat.id, user_id: chat.user_id }
        return response;
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
