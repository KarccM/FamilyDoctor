import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PriorityQueue } from 'src/inference-engine/classes/priority-queue';

export type ChatDocument = HydratedDocument<Chat>;

@Schema({ timestamps: true })
export class Chat {
  _id;

  @Prop({ type: String, required: true })
  user_id: string;

  @Prop({ type: {} })
  context: PriorityQueue;

  // @Prop({type: Date})
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
