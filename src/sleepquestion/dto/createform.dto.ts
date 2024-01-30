import mongoose from "mongoose";

class LabelValues {
  id: mongoose.Types.ObjectId;

  label: string;

  values: string[];
}

export class CreateFormDto {
  id: mongoose.Types.ObjectId;

  label: string;

  formData: [
    {
      label: string;
      subQuestion: LabelValues[];
    }
  ];
}
