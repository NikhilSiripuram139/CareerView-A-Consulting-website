import { Component, ElementRef, EventEmitter, Injectable, OnInit, Output, ViewChild, inject, viewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthserviceService } from '../../Services/authservice.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent implements OnInit{

  @Output() logging: EventEmitter<boolean>=new EventEmitter<boolean>();
  
  

  
  

  // onlogin(){
  //   this.logging.emit(this.logged);
  // }
  

  @ViewChild('username') username:ElementRef;
  @ViewChild('passward') passward:ElementRef;

  router=inject(Router);

  authservice=inject(AuthserviceService);

  activeroute=inject(ActivatedRoute);

  ngOnInit(){
    if(this.authservice.islogged){
      this.activeroute.queryParamMap.subscribe((data)=>{
        const logout=Boolean(data.get('logout'));
        if(logout){
          this.authservice.logout();
          alert("You've logged out.");
        }
      })
    }
  }

  

  loginclicked(){
    const username = this.username.nativeElement.value;
    const passward = this.passward.nativeElement.value;

    const user = this.authservice.login(username, passward);

    if(user===undefined){
      alert("The login credentials you've entered are incorrect. Please check and try again.")
    }
    else{
      alert("Welcom "+ user.name+". Your logged in.")
      this.router.navigate(['/Home']);
    }

  }


  

}
