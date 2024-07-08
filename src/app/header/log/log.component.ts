import { AfterViewInit, Component, ElementRef, EventEmitter, Injectable, OnInit, Output, ViewChild, inject, viewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthserviceService } from '../../Services/authservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../Models/AuthResponse';
import { SnackbarComponent } from '../../utility/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, SnackbarComponent],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent{

  loginmode:boolean=true;
  errormessage : string | undefined;
  
  router=inject(Router);
  authservices=inject(AuthserviceService);
  @ViewChild('loginform') loginform : NgForm;

  authobs: Observable<AuthResponse>;


  onsubmit(){
    const email = this.loginform.value.email;
    const password = this.loginform.value.password;

    if(this.loginmode){
      this.authobs = this.authservices.login(email, password);
    }else{
      this.authobs = this.authservices.signup(email, password);
    }
  
    this.authobs.subscribe({ 
      next : (res)=>{
        // console.log(res);
        this.router.navigate(['/Home']);
      }, error : (err)=>{
        
        this.authservices.errmsg.next(err)
      }
    })


    this.loginform.reset();
  }

  oncancel(){
    this.router.navigate(['/Home']);
  }

  onchangemode(){
    this.loginmode=!this.loginmode;
  }



}
