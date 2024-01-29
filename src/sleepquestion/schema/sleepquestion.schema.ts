import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import {
  Gender,
  Numbers,
  OftenSnore,
  Options,
  Patient,
  Snore,
  Snoring,
  StopBreathing,
} from "../dto/createform.dto";


@Schema({ timestamps: true })
export class SleepQuestion {
  @Prop()
  id: mongoose.Types.ObjectId;

  @Prop()
  patientinformation: [
    {
      patientfirstname: string;
      patientmiddlename: string;
      patientlastname: string;
    }
  ];

  @Prop()
  SleepApeana: [
    {
      snoring: [
        {
          doyousnoring: boolean;
          canyoursnoring: boolean;
        }
      ];

      stopbreathing: [
        {
          stopbreathing: StopBreathing;
        }
      ];
      collarsize: [
        {
          gender: Gender;
        }
      ];

      bloodpressure: [
        {
          treatedforbp: boolean;
        }
      ];

      daytimesleepnes: [
        {
          ocassionallydoze: string;
          busyoractive: boolean;
          drivingorstopped: boolean;
          totalpoints: number;
        }
      ];
    }
  ];

  @Prop()
  Questionnaire: [
    {
      awareofsnoring: string;
      stopbreathewhileasleep: boolean;
      wakeuptime: string;
      difficultyinasleep: boolean;
      hoursofsleep: string;
      feelrefreshed: boolean;
      headache: boolean;
      seenotherdoctors: [
        {
          seenotherdoctor: boolean;
          who: string;
          when: string;
        }
      ];
      sleeplab: [
        {
          study: boolean;
          when: string;
        }
      ];
      difficultyinnose: boolean;
      heartirregularities: boolean;
      highbp: boolean;
      lossofmemory: boolean;
      depressed: boolean;
      normalbedtime: string;
      normalwakeuptime: string;
      schedulechange: boolean;
      paininterfere: boolean;
      fallenasleep: [
        {
          fallen: boolean;
          times: string;
        }
      ];
    }
  ];

  @Prop()
  AdultChildQuestionnaire: [
    {
      patient: Patient;
    }
  ];

  @Prop()
  AdultSleepQuestionnaire: [
    {
      dob: Date;
      age: number;
      gender: Gender;
      weight: number;
      height: number;
      bmi: string;
      sleeptest: {
        sleeptest: boolean;
        when: string;
      };
      diagnosed: boolean;
      usecpap: boolean;
      happywithcpap: boolean;
      happywithsleepappliance: {
        happy: boolean;
        notwhy: string;
      };
      getoutbednight: string;
      feeltired: boolean;
      habituallysnore: boolean;
      highbp: boolean;
      wakingheadache: boolean;
      fatigue: boolean;
      nasalpassage: boolean;
      stopbreathingnight: boolean;
      choking: boolean;
      grindteeth: boolean;
      neckcircumference: boolean;
      bmimorethan35: boolean;
    }
  ];

  @Prop()
  EpworthScale: [
    {
      sittingandreading: Numbers;
      watchingtv: Numbers;
      sittinginpublic: Numbers;
      withoutbreak: Numbers;
      lyingdown: Numbers;
      sittingandtalking: Numbers;
      sittingquietly: Numbers;
      intraffic: Numbers;
      totalscore: Number;
    }
  ];

  @Prop()
  BerlinQuentionnaire: [
    {
      category1: {
        snore: Snore;
        snoring: Snoring;
        oftensnore: OftenSnore;
        botheredpeople: Snore;
        anyonenoticedstopbreathing: OftenSnore;
      };

      category2: {
        tired: OftenSnore;
        wakingtimetired: OftenSnore;
        noddedoff: Options;
        oftenoccur: OftenSnore;
      };

      category3: {
        highbp: Snore;
        date: Date;
      };
    }
  ];
}

export const SleepQuestionSchema = SchemaFactory.createForClass(SleepQuestion);
