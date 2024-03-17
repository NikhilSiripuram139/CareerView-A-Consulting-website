import { Injectable, inject } from '@angular/core';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  islogged:boolean;

  userservice=inject(UserserviceService);

  login(mail:string, passward:string){
    const user=this.userservice.users.find(u=>u.mail===mail && u.passward===passward);

    if(user===undefined){
     this.islogged=false;
    }else{
      this.islogged=true;
    }
    return user;
  }

  logout(){
    this.islogged=false;

  }

  isauthenticated(){
    return this.islogged;
  }

  
}
