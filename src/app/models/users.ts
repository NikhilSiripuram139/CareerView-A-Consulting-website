export class user{
    id:number;
    name:string;
    mail:string;
    passward:string;

    constructor(id:number, name:string, mail:string, passward:any){
        this.id=id;
        this.name=name;
        this.mail=mail;
        this.passward=passward;
    }
}