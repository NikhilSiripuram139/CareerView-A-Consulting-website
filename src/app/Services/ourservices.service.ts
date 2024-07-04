import { Injectable, OnInit, inject } from '@angular/core';
import { service } from '../Models/serviceee';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class OurservicesService {


  http = inject(HttpClient);
  authservice = inject(AuthserviceService);

  onaddourservices() {
    for (let i of this.services) {
      this.http.post<{ name: string }>('https://careerview-95bf4-default-rtdb.firebaseio.com/ourservices.json', i)
        .subscribe({
          next: (res) => {
            console.log(res);
          }
        })
    }
  }


  onfetchservices() {
    return this.http.get('https://careerview-95bf4-default-rtdb.firebaseio.com/ourservices.json')
      .pipe(map((response) => {
        let services: service[] = [];

        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            services.push({ ...response[key], id: key });

          }
        }
        return services;
      }),
        catchError((err) => {
          const data = { statuscode: err.statuscode, errormsg: err.message, datetime: new Date() }
          this.servicesreserrors(data);
          this.authservice.errmsg.next(err.error.message);

          return throwError(() => err);
        })
      ) 
  }


  servicesreserrors(data: { statuscode: number, errormsg: string, datetime: Date }) {
    this.http.post('https://careerview-95bf4-default-rtdb.firebaseio.com/ourservreserr.json', data)
      .subscribe();
  }

  services: service[] = [
    // { name: 'Online Sessions', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis, nobis dolore repellat dolorum quidem cupiditate repudiandae delectus tenetur sed expedita debitis. Totam, laboriosam veniam.', image: '../../assets/Service1.jpg' },
    // { name: 'One-on-One Interaction', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae culpa iste distinctio reprehenderit, animi facilis deleniti!', image: '../../assets/Service2.jpg' },
    // { name: 'Internships', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi pariatur ipsum, provident iusto impedit?', image: '../../assets/Service3.jpg' },
    // { name: 'Online Courses', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit optio incidunt repellat animi perferendis neque accusamus quaerat voluptate deleniti.', image: '../../assets/Service4.jpg' },
    // { name: 'Mentoring', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit optio incidunt repellat animi perferendis neque accusamus quaerat voluptate repudiandae delectus tenetur deleniti.', image: '../../assets/Service5.jpg' },
    // { name: 'Career Guidance', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit optio incidunt repellat animi perferendis neque accusamus sit amet consectetur adipisicing elit. quaerat voluptate deleniti.', image: '../../../assets/Service6.jpg' },
  ];

}
