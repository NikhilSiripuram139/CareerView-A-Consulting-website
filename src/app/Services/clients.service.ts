import { Injectable } from '@angular/core';
import { client } from '../models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients:client[]=[
    { image:'../../../assets/Client1.jpg', name:'John Hookman', review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium quia et porro fuga, sit id eaque at magnam possimus est distinctio? Doloribus!'},
    { image:'../../../assets/Client2.jpg', name:'Stefy Limeyar', review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur repudiandae possimus qui eligendi consequatur consectetur laudantium eveniet.'},
    { image:'../../../assets/Client3.jpg', name:'Edward Kitty', review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, autem? Consequatur deserunt porro excepturi beatae natus, delectus numquam necessitatibus quidem iste.'},
    { image:'../../../assets/Client4.jpg', name:'Steve Rogers', review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rem labore odit aspernatur velit ullam? Repellat, nulla molestias.'}
  ];


}
