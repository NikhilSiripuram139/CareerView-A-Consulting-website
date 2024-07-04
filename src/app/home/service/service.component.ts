import { Component, OnInit, inject } from '@angular/core';
import { OurservicesService } from '../../Services/ourservices.service';
import { service } from '../../Models/serviceee';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent{

  services:service[]=[
    {name:'Online Sessions', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis, nobis dolore repellat dolorum quidem cupiditate repudiandae delectus tenetur sed expedita debitis. Totam, laboriosam veniam.', image:'../../../assets/Dark-navy.jpg' },
    {name:'One-on-One Interaction', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae culpa iste distinctio reprehenderit, animi facilis deleniti!', image:'../../../assets/Blue2.jpg'},
    {name:'Internships', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi pariatur ipsum, provident iusto impedit?', image:'../../../assets/Blue-3.jpg'}
  ];

}
