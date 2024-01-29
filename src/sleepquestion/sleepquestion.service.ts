import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { SleepQuestion } from "./schema/sleepquestion.schema";
import { Model } from "mongoose";
import { CreateFormDto } from "./dto/createform.dto";

@Injectable()
export class SleepQuestionService {
  constructor(
    @InjectModel(SleepQuestion.name)
    private sleepquestionModel: Model<SleepQuestion>
  ) {}

  async createform(createform: CreateFormDto): Promise<SleepQuestion> {
    const formcreation = await this.sleepquestionModel.create(createform);
    if (!formcreation) {
      throw new BadRequestException(`Invalid Details`);
    }
    return formcreation;
  }

  async getallform(): Promise<SleepQuestion[]> {
    return await this.sleepquestionModel.find();
  }
}
