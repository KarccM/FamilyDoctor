import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  ConditionType,
  ConditionValuesType,
} from 'src/shared/Utils/constants/enums';

export type ConditionDocument = HydratedDocument<Condition>;

// @Schema()
// export class MedicalCondition {
//     @Prop({required: true, unique: true})
//     name!: string;

//     conditionType: string;
//     question: string;

//     @Prop({type: []})
//     values: any[];
// }

// @Schema()
// export class Symptom {
//     @Prop({required: true, unique: true})
//     name!: string;

//     conditionType: string;
//     question: string;

//     @Prop({type: []})
//     values: any[];
// }

// @Schema()
// export class PatientInfo {
//     @Prop({required: true, unique: true})
//     name!: string;

//     conditionType: string;
//     question: string;

//     @Prop({type: []})
//     values: any[];
// }

// @Schema({discriminatorKey: 'conditionType'})
@Schema()
export class Condition {
  _id;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  question: string;

  @Prop()
  values: [];

  @Prop({
    type: String,
    required: true,
    enum: ConditionType,
  })
  conditionType: string;

  @Prop({
    type: String,
    required: true,
    enum: ConditionValuesType,
  })
  conditionValuesType: string;

  @Prop({ type: String, required: false })
  value?: string;

  @Prop({ type: String, required: false })
  user_answer?: string;
}

export class ConditionTypes {
  _id;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  question: string;

  @Prop()
  values: [];

  @Prop({
    type: String,
    required: true,
    enum: ConditionValuesType,
  })
  conditionValuesType: string;

  @Prop({ type: String, required: false })
  value?: string;

  @Prop({ type: String, required: false })
  user_answer?: string;
}

export const ConditionTypesSchema =
  SchemaFactory.createForClass(ConditionTypes);

// export const MedicalConditionSchema = SchemaFactory.createForClass(MedicalCondition)

// export const PatientInfoSchema = SchemaFactory.createForClass(PatientInfo)

export const ConditionSchema = SchemaFactory.createForClass(Condition);
