import { Doctor } from "./doctor";

export class Test{
    testId:number;
    testName:String;
    testCost:number;
    testDescription:string;
    doctorId:number;
    doctor:Doctor;
    overload_constructor(){

    }
   constructor(testName?:String,testDescription?:string){
            this.testName=testName;
            this.testDescription=testDescription;
    }
}