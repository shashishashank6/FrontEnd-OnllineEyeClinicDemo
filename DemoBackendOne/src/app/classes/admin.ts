export class Admin{
    adminId:number;
    adminUserName:string;
    adminPassword:string;
    overload_constructor() {
        
    }
     constructor(username?:string,password?:string){
         this.adminUserName=username;
         this.adminPassword=password;
    }
}