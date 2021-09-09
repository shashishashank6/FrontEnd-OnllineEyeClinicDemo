import { Appointment } from "./appointment";

export class Patient{
patientId:number;
patientName:string;
patientAge:number;
patientMobile:bigint;
patientEmail:string;
patientDOB:Date;
patientUserName:string;
patientPassword:string;
patientAddress:string;
appointments:Appointment[];
}