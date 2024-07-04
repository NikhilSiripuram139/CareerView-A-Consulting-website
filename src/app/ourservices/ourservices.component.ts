import { Component, OnInit, inject } from '@angular/core';
import { OurservicesService } from '../Services/ourservices.service';
import { service } from '../Models/serviceee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ourservices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ourservices.component.html',
  styleUrl: './ourservices.component.css'
})
export class OurservicesComponent implements OnInit{

  ourservices=inject(OurservicesService);
  serviceslist:service[];

  ngOnInit(){
    this.ourservices.onfetchservices().subscribe({
      next: (list)=>{
        this.serviceslist = list;
      }
    });
  }


}
