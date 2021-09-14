import { Test } from "./test";

export class Doctor{
    doctorId:number;
    doctorName:string;
    doctorConsultationTime:string;
    doctorMobile:number;
    doctorEmail:string;
    doctorUserName:string;
    doctorPassword:string;
    doctorAddress:string;
    test:Test[];
    overload_constructor(){

    }
    constructor(username?:string,password?:string){
        this.doctorUserName=username;
        this.doctorPassword=password;
    }
}