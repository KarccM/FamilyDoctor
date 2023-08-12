import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Condition } from 'src/conditions/conditions.schema';

export type RuleDocument = HydratedDocument<Rule>

@Schema({_id: false})
export class ConditionValue{
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Condition.name, required: true})
    c: Condition;

    @Prop({type: mongoose.Schema.Types.Mixed, required: true})
    v: any;
}


@Schema()
export class Rule{
    @Prop({ type: mongoose.Types.Array<ConditionValue>, required: true, ref: Condition.name, refPath: 'conditions.0'})
    conditions: ConditionValue[];
}

export const RuleSchema = SchemaFactory.createForClass(Rule)