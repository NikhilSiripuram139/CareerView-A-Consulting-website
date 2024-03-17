import { Injectable } from '@angular/core';
import { service } from '../models/serviceee';

@Injectable({
  providedIn: 'root'
})
export class OurservicesService {

services:service[]=[
  {name:'Online Sessions', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis, nobis dolore repellat dolorum quidem cupiditate repudiandae delectus tenetur sed expedita debitis. Totam, laboriosam veniam.', image:'../../../assets/Dark-navy.jpg' },
  {name:'One-on-One Interaction', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae culpa iste distinctio reprehenderit, animi facilis deleniti!', image:'../../../assets/Blue2.jpg'},
  {name:'Internships', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi pariatur ipsum, provident iusto impedit?', image:'../../../assets/Blue-3.jpg'}
];

services2:service[]=[
  {name:'Online Sessions', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis, nobis dolore repellat dolorum quidem cupiditate repudiandae delectus tenetur sed expedita debitis. Totam, laboriosam veniam.', image:'../../assets/Service1.jpg' },
  {name:'One-on-One Interaction', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae culpa iste distinctio reprehenderit, animi facilis deleniti!', image:'../../assets/Service2.jpg'},
  {name:'Internships', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi pariatur ipsum, provident iusto impedit?', image:'../../assets/Service3.jpg'},
  {name:'Online Courses', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit optio incidunt repellat animi perferendis neque accusamus quaerat voluptate deleniti.', image:'../../assets/Service4.jpg'},
  {name:'Mentoring', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit optio incidunt repellat animi perferendis neque accusamus quaerat voluptate repudiandae delectus tenetur deleniti.', image:'../../assets/Service5.jpg'},
  {name:'Career Guidance', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit optio incidunt repellat animi perferendis neque accusamus sit amet consectetur adipisicing elit. quaerat voluptate deleniti.', image:'../../../assets/Service6.jpg'},
];

}
