import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
class LabelValues {
  @Prop()
  id: mongoose.Types.ObjectId;

  @Prop()
  label: string;

  @Prop()
  values: string[];
}

@Schema({ timestamps: true })
export class SleepQuestion {
  @Prop()
  id: mongoose.Types.ObjectId;

  @Prop()
  label: string;

  @Prop()
  formData: [
    {
      label: string;
      subQuestion: LabelValues[];
    }
  ];
}

export const SleepQuestionSchema = SchemaFactory.createForClass(SleepQuestion);
