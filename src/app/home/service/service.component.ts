import { Component, OnInit, inject } from '@angular/core';
import { OurservicesService } from '../../Services/ourservices.service';
import { service } from '../../models/serviceee';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit {

  ourservice=inject(OurservicesService);

  services:service[];
   
  ngOnInit(){
    this.services=this.ourservice.services;
  }


}
