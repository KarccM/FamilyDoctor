import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ConditionDocument = HydratedDocument<Condition>;

@Schema()
export class MedicalCondition {
    name: string;
    conditionType: string;
    question: string;

    @Prop({type: [String]})
    values: string[];
}

@Schema()
export class Symptom {
    name: string;
    conditionType: string;
    question: string;

    @Prop({type: [String]})
    values: string[];
}

@Schema()
export class PatientInfo {
    name: string;
    conditionType: string;
    question: string;

    @Prop({type: []})
    values: any[];
}



@Schema({discriminatorKey: 'conditionType'})
export class Condition{
    _id
    
    @Prop({required: true})
    name: string;

    @Prop()
    question: string;

    @Prop()
    values: [];

    @Prop({
        type: String,
        required: true,
        enum: [Symptom.name, MedicalCondition.name, PatientInfo.name]
    })
    conditionType: string;
}


export const SymptomSchema = SchemaFactory.createForClass(Symptom)


export const MedicalConditionSchema = SchemaFactory.createForClass(MedicalCondition)


export const PatientInfoSchema = SchemaFactory.createForClass(PatientInfo)


export const ConditionSchema = SchemaFactory.createForClass(Condition);