import { Component, OnInit, inject } from '@angular/core';
import { OurservicesService } from '../Services/ourservices.service';
import { service } from '../models/serviceee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ourservices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ourservices.component.html',
  styleUrl: './ourservices.component.css'
})
export class OurservicesComponent implements OnInit{

  serviceslist=inject(OurservicesService);
  list:service[];

  ngOnInit(){
    this.list=this.serviceslist.services2;
  }


}
