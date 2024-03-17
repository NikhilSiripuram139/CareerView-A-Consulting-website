import { Injectable } from '@angular/core';
import { option } from '../models/careeroptions';
import { details } from '../models/details';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  options:option[]=[
    {id:1, name:'Technology', image:'../../../assets/Software.jpg'},
    {id:2, name:'Industries', image:'../../../assets/Industrial.jpg'},
    {id:3, name:'Marketing', image:'../../../assets/Marketing.jpg'},
    {id:4, name:'Filming', image:'../../../assets/Films.jpg'},
    {id:5, name:'Fashion', image:'../../../assets/Fashion.jpg'},
    {id:6, name:'Management', image:'../../../assets/Management.png'},
  ];


  alloptions:option[]=[
    {id:1, name:'Technology', image:'../../../assets/Software.jpg'},
    {id:2, name:'Industries', image:'../../../assets/Industrial.jpg'},
    {id:3, name:'Marketing', image:'../../../assets/Marketing.jpg'},
    {id:4, name:'Filming', image:'../../../assets/Films.jpg'},
    {id:5, name:'Fashion', image:'../../../assets/Fashion.jpg'},
    {id:6, name:'Management', image:'../../../assets/Management.png'},
    {id:7, name:'Law', image:'../../../assets/Law1.jpg'},
    {id:8, name:'Designing', image:'../../../assets/Design.jpg'},
    {id:9, name:'Robotics', image:'../../../assets/Robotics.jpg'},
    {id:10, name:'Trading', image:'../../../assets/Trade.png'}
  ];  

  sectordetails: details[]=[
    {id:1, name:'Technology', image1:'../../../assets/Tech1.jpg', image2:'../../../assets/Tech2.jpg'},
    {id:2, name:'Industries', image1:'../../../assets/Industries1.jpg', image2:'../../../assets/Industries2.jpg'},
    {id:3, name:'Marketing', image1:'../../../assets/Md1.jpg', image2:'../../../assets/Md2.jpg'},
    {id:4, name:'Filming', image1:'../../../assets/Filming1.jpg', image2:'../../../assets/Filming2.jpg'},
    {id:5, name:'Fashion', image1:'../../../assets/Fashion1.jpg', image2:'../../../assets/Fashion2.jpg'},
    {id:6, name:'Management', image1:'../../../assets/Management1.jpg', image2:'../../../assets/Management2.jpg'},
    {id:7, name:'Law', image1:'../../../assets/Law2.jpg', image2:'../../../assets/Law3.jpg'},
    {id:8, name:'Designing', image1:'../../../assets/Design1.jpg', image2:'../../../assets/Design2.jpg'},
    {id:9, name:'Robotics', image1:'../../../assets/Robotics1.png', image2:'../../../assets/Robotics2.jpg'},
    {id:10, name:'Trading', image1:'../../../assets/Trading1.jpg', image2:'../../../assets/Trading2.jpg'},
  ]
  
}
