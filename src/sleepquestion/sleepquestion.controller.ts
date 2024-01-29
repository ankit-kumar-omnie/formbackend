import { Body, Controller, HttpException, Post, Get } from "@nestjs/common";
import { SleepQuestionService } from "./sleepquestion.service";
import { CreateFormDto } from "./dto/createform.dto";

@Controller("sleepquestion")
export class SleepQuestionController {
  constructor(private sleepService: SleepQuestionService) {}

  @Post("create")
  async createform(@Body() createformDto: CreateFormDto) {
    try {
      return await this.sleepService.createform(createformDto);
    } catch (error) {
      throw new HttpException(error.message, error.statuscode ?? 400);
    }
  }

  @Get()
  async getallforms() {
    return await this.sleepService.getallform();
  }
}
