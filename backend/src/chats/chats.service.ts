import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat, ChatDocument } from './chats.schema';
import { Model } from 'mongoose';
import { ChatEntity } from './entities/chat.entity';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import {
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common/exceptions';
import { AnswerChatDto } from './dto/answer-chat.dto';
import { InferenceEngineService } from 'src/inference-engine/inference-engine.service';
import { PriorityQueue } from 'src/inference-engine/classes/priority-queue';
import { ConditionsService } from 'src/conditions/conditions.service';
import { Condition as ConditionClass } from 'src/inference-engine/classes/condition';
import {
  ConditionType,
  ConditionValuesType,
} from 'src/shared/Utils/constants/enums';
import { Symptom as SymptomClass } from 'src/inference-engine/classes/symptom';
import { MedicalCondition as MedicalConditionClass } from 'src/inference-engine/classes/medical-condition';
import { PatientInfo as PatientInfoClass } from 'src/inference-engine/classes/patient-info';
import { ConditionFactory } from 'src/shared/helpers/condition-factory';
import { ChatResponse } from './entities/chat-response.entity';
import { NlpService } from 'src/nlp/nlp.service';

@Injectable()
export class ChatsService {
  constructor(
    @InjectModel(Chat.name) private chatModel: Model<ChatDocument>,
    private inferenceEngineService: InferenceEngineService,
    private conditionsService: ConditionsService,
    private readonly nlpService: NlpService,
  ) {}

  async create(createChatDto: CreateChatDto): Promise<ChatEntity> {
    let chat: ChatEntity = null;
    chat = await this.chatModel.create({
      user_id: createChatDto.user_id,
      context: {},
    });
    return chat;
  }

  async start(id: string) {
    let chat: ChatDocument;
    let res: ChatResponse;
    try {
      chat = await this.chatModel.findOne({ _id: id });
      if (chat == null || chat == undefined)
        throw new BadRequestException(
          `Chat with id:${id} and user: does not exist`,
        );
      res = await this.inferenceEngineService.start(id);
      chat.context = res.context;
      await chat.save();
    } catch (error) {
      throw error;
    }
    return res;
  }

  async update(updateChatDto: UpdateChatDto): Promise<ChatEntity> {
    let chat: ChatDocument;
    try {
      chat = await this.chatModel.findOne({
        _id: updateChatDto._id,
        user_id: updateChatDto.user_id,
      });
      if (chat == null || chat == undefined) {
        throw new Error(`Can't Update on Chat that does not exist`);
      }
      chat.context = updateChatDto.context;
    } catch (error) {
      throw error;
    }
    return await chat.save();
  }

  async helloNLP() {
    let res = await this.nlpService.hello();
    return res;
  }

  async processNLP(answer, labels) {
    let res = await this.nlpService.process_answer(answer, labels);
    return res;
  }

  async process_answer(answer: string, context: any) {
    try {
      let condInstance: ConditionClass;
      debugger;
      let label = null;
      condInstance = ConditionFactory(context.lastQuestion);
      if (
        condInstance.conditionValuesType ==
        ConditionValuesType.NumericIntervalValues
      ) {
        let num_answer = answer.replace(/[^0-9]/g, '');
        condInstance.values.forEach((v) => {
          let keylabel = Object.keys(v)[0];
          if (num_answer > v[keylabel][0] && num_answer < v[keylabel][1]) {
            label = keylabel;
          }
        });
      } else {
        label = await this.nlpService.process_answer(
          answer,
          condInstance.values,
        );
      }
      condInstance.setAnswer(label);
      let pqueue = await this.inferenceEngineService.initFromHistory(context);
      pqueue.updateNodes(condInstance);
      return pqueue;
    } catch (error) {
      throw error;
    }
  }

  async answer(
    answerChatDto: AnswerChatDto,
    id: string,
  ): Promise<ChatResponse> {
    let chat: ChatDocument;
    let response: ChatResponse;
    let conditionRes;
    try {
      chat = await this.chatModel.findOne({
        _id: id,
        user_id: answerChatDto.user_id,
      });
      if (chat == null || chat == undefined) {
        throw new Error('Chat does not exist');
      }
      let context = await this.process_answer(
        answerChatDto.user_response,
        chat.context,
      );
      conditionRes = context.askQuestion();
      chat.context = context;
    } catch (error) {
      throw error;
    }
    await chat.save();
    response = {
      condition: conditionRes,
      context: chat.context,
      _id: chat.id,
      user_id: chat.user_id,
    };
    return response;
  }

  async findAll(): Promise<ChatEntity[]> {
    let chats = await this.chatModel.find({});
    return chats;
  }

  async findOne(id: string, user_id: string): Promise<ChatEntity> {
    let chat: ChatEntity = null;
    try {
      chat = await this.chatModel.findOne({ _id: id, user_id: user_id });
      if (chat == null || chat == undefined) {
        throw new NotFoundException(
          `Chat with id:${id} and user_id:${user_id} Not Found!`,
        );
      }
    } catch (error) {
      throw error;
    }
    return chat;
  }

  async remove(id: string, user_id: string) {
    try {
      await this.chatModel.findOneAndDelete({ _id: id, user_id: user_id });
    } catch (error) {
      throw new NotFoundException(
        `Chat with id:${id} and user_id:${user_id} Not Found!`,
      );
    }
  }
}
