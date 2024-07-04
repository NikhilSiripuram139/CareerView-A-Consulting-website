import { Injectable } from '@angular/core';
import { user } from '../Models/users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users:user[]=[
    new user(1, 'Nikhil', 'siripuramnikhil139@gmail.com', '123456'),
    new user(2, 'Akhil', 'siripuramakhil968@gmail.com', '123456'),
    new user(3, 'Ravi', 'ravi123@gmail.com', '123456'),
    new user(4, 'Manoj', 'manoj123@gmail.com', '123456'),
    new user(5, 'krishna', 'krishna123@gmail.com', '123456'),
  ]

  
}
