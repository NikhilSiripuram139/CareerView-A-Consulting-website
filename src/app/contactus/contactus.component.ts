import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  name:string='';
  email:string='';
  contact:string='';
  reagion:string='Hyderabad';
  message:string='';

  issubmited:boolean=false;

  onsubmitclicked(){
    this.issubmited=true;
  }

  canExit(){
    if((this.name || this.email || this.contact || this.reagion || this.message) && !this.issubmited){
      return confirm("You've unsaved changes. Do you want to navigate away?");
    }
    else{
      return true;
    }
  }


}
