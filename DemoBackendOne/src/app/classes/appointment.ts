import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Appointment{
    appointmentId:number;
    dateOfAppointment:Date;
    timeOfAppointment:String;
    consultationFee:number;
    patient:Patient;
    doctor:Doctor;
}