import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { contact } from '../Models/contact';
import { ContactService } from '../Services/contact.service';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  issubmited:boolean=false;

  contactservice = inject (ContactService);

  @ViewChild('contactusform') contactusform : NgForm;

  onsubmit(){

    const name = this.contactusform.value.name;
    const email = this.contactusform.value.email;
    const contactno = this.contactusform.value.contactno;
    const region = this.contactusform.value.region;
    const message = this.contactusform.value.message;
    
    const data : contact ={name, email, contactno, region, message};

    this.contactservice.onaddmessage(data);

    this.contactusform.reset();
  }

  canExit(){
    if((this.contactusform.invalid && this.contactusform.touched)){
      let confirmation=confirm("You've unsaved changes. Do you want to navigate away?");
      if(confirmation){
        return true;
      }
      return false;
    }
    else{
      return true;
    }
  }


}
