import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Condition } from 'src/conditions/conditions.schema';

export type RuleDocument = HydratedDocument<Rule>

@Schema()
export class Rule{
    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: Condition.name, required: true })
    conditions: Condition[];
}

export const RuleSchema = SchemaFactory.createForClass(Rule)