import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {
  SleepQuestion,
  SleepQuestionSchema,
} from "./schema/sleepquestion.schema";
import { SleepQuestionController } from "./sleepquestion.controller";
import { SleepQuestionService } from "./sleepquestion.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SleepQuestion.name, schema: SleepQuestionSchema },
    ]),
  ],
  controllers: [SleepQuestionController],
  providers: [SleepQuestionService],
})
export class SleepQuestionModule {}
