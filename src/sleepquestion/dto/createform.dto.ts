import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

export enum StopBreathing {
  Never = "never",
  Occasionally = "occasionally",
  Frequently = "frequently",
}

export enum Gender {
  Male = "male",
  Female = "female",
  PreferNotMention = "prefernotmention",
}

export enum Patient {
  Adult = "adult",
  Child = "child",
}

export enum Numbers {
  zero = 0,
  one = 1,
  two = 2,
  three = 3,
}

export enum Snore {
  Yes = "yes",
  No = "no",
  DontKnow = "don\t know",
}
export enum Snoring {
  Slightlylouderthanbreathing = "Slightly louder than breathing",
  Asloudastalking = "As loud as talking",
  Louderthantalking = "Louder than talking",
}

export enum OftenSnore {
  Almosteveryday = "Almost everyday",
  time1 = "3-4 times per week",
  time2 = "1-2 times per week",
  time3 = "1-2 times per month",
  Rarelyornever = "Rarely or never",
}

export enum Options {
  Yes = "yes",
  No = "no",
}

class PatientInformationDTO {
  @IsNotEmpty()
  @IsString()
  patientfirstname: string;

  @IsOptional()
  @IsString()
  patientmiddlename?: string;

  @IsNotEmpty()
  @IsString()
  patientlastname: string;
}

class SleepApeana {
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
}

class Questionnaire {
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
}

class AdultChildQuestionnaire {
  patient: Patient;
}

class AdultSleepQuestionnaire {
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
}

class EpworthScale {
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
}

class BerlinQuentionnaire {
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

export class CreateFormDto {
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => PatientInformationDTO)
  patientinformation: PatientInformationDTO[];

  @ValidateNested({ each: true })
  @Type(() => SleepApeana)
  SleepApeana: SleepApeana[];

  @ValidateNested({ each: true })
  @Type(() => Questionnaire)
  Questionnaire: Questionnaire[];

  @ValidateNested({ each: true })
  @Type(() => AdultChildQuestionnaire)
  AdultChildQuestionnaire: AdultChildQuestionnaire[];

  @ValidateNested({ each: true })
  @Type(() => AdultSleepQuestionnaire)
  AdultSleepQuestionnaire: AdultSleepQuestionnaire[];

  @ValidateNested({ each: true })
  @Type(() => EpworthScale)
  EpworthScale: EpworthScale[];

  @ValidateNested({ each: true })
  @Type(() => BerlinQuentionnaire)
  BerlinQuentionnaire: BerlinQuentionnaire[];
}
