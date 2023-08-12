import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema({timestamps: true})
export class Chat{
    _id

    @Prop({type: String, required: true})
    user_id: string;

    @Prop({type: {}})
    context: any;

    // @Prop({type: Date})
}

export const ChatSchema = SchemaFactory.createForClass(Chat);