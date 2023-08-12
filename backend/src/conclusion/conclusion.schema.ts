import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Rule, RuleSchema } from 'src/rules/rule.schema';

export type ConclusionDocument = HydratedDocument<Conclusion>;
@Schema()
export class Diagnosis{
    @Prop({type: [String]})
    treatment: string[];

    @Prop({type: String})
    specialist: string;

    @Prop({type: [String]})
    notes: string[];
}

@Schema({discriminatorKey: 'conclusionType'})
export class Conclusion{
    @Prop({type: String, required: true})
    name: string;

    @Prop({type: Number, required: true})
    priority: number;

    @Prop({type: [RuleSchema]})
    rules: Rule[];

    @Prop({
        type: String,
        required: true,
        enum: [Diagnosis.name]
    })
    conclusionType: string;
}

export const ConclusionSchema = SchemaFactory.createForClass(Conclusion);
export const DiagnosisSchema = SchemaFactory.createForClass(Diagnosis); 

