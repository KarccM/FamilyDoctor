import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Condition } from 'src/conditions/conditions.schema';
import { YesNoValues } from 'src/shared/Utils/constants/constants';

export type RuleDocument = HydratedDocument<Rule>;

// @Schema({_id: false})
// export class ConditionValue{
//     @Prop({type: mongoose.Schema.Types.ObjectId, ref: Condition.name, required: true})
//     condition: Condition;

//     @Prop({default: YesNoValues[0]})
//     value: string;
// }

@Schema()
export class Rule {
  @Prop({ type: [], required: true })
  conditions: Condition[];

  @Prop({ type: Boolean, required: false, default: null })
  ruleValidity?: boolean;

  @Prop({ type: Boolean, required: false, default: null })
  ruleFired?: boolean;

  @Prop({ type: Number, required: false, default: null })
  trueCondCount?: number;

  @Prop({ type: Number, required: false, default: null })
  ruleWeight?: number;
}

export const RuleSchema = SchemaFactory.createForClass(Rule);
