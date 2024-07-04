import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../Services/contact.service';
import { contact } from '../../Models/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @ViewChild('contactusform') contactusform : NgForm;

  contactservice = inject (ContactService);

  onsubmit(){
    // console.log(this.contactusform);
    const name = this.contactusform.value.name;
    const email = this.contactusform.value.email;
    const contactno = this.contactusform.value.contactno;
    const region = this.contactusform.value.region;
    const message = this.contactusform.value.message;
    
    const data : contact ={name, email, contactno, region, message};

    this.contactservice.onaddmessage(data);

    this.contactusform.reset();
  } 


}
