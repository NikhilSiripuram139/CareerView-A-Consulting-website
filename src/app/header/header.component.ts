import {  Component, Inject, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LogComponent } from './log/log.component';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from '../Services/authservice.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, LogComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  
  
  // logreceive(val: boolean){
    //   this.showlog=val;
    // }
    
    // onlogclick(){
      //   this.showlog=!this.showlog;
  // }
      
  
  
  

  
    
  showlog:boolean=false;

  onlogin(){
    this.showlog=!this.showlog;
  }
  

  
  


  


  // onlogoutclicked(){
  //   this.showlog=!this.showlog;
  // }

  

}
