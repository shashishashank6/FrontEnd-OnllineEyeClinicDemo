import { Patient } from "./patient";
import { Test } from "./test";

export class Report {
        reportId:number;
        dateOfReport:Date;
        description:string;
        visualAcuity:string;
        visualAcuityForNear:string;
        visualAcuityForDistance:string;
        test:Test;
        patient:Patient;
    }

