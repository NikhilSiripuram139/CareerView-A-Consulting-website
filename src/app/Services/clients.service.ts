import { Injectable, inject } from '@angular/core';
import { client } from '../Models/clients';
import { HttpClient } from '@angular/common/http';
import { Subject, catchError, map, throwError } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService{

  http = inject(HttpClient);
  authservice = inject(AuthserviceService);

  onaddclientreviews(){
    for(let i of this.clients){
      this.http.post<{name : string}>('https://careerview-95bf4-default-rtdb.firebaseio.com/clients.json', i)
      .subscribe({
        next: (res)=>{
        console.log(res);
      }})
    }
  }


  onfetchreviews(){
    return this.http.get('https://careerview-95bf4-default-rtdb.firebaseio.com/clients.json')
    .pipe(map((response)=>{
      let reviews:client[] = [];

      for(let key in response){
        if(response.hasOwnProperty(key)){
          reviews.push({ ...response[key], id:key });

        }
      }
      return reviews;
    }),
    catchError((err)=>{
      const data = {statuscode: err.statuscode, errormsg: err.message, datetime: new Date()}
      this.clientreserrors(data);
      this.authservice.errmsg.next(err.error.message);

      return throwError(()=>err);
    })
  )
  }


  clientreserrors(data:{statuscode:number, errormsg: string, datetime: Date}){
    this.http.post('https://careerview-95bf4-default-rtdb.firebaseio.com/reviewreserr.json', data)
    .subscribe();
  }


  clients:client[]=[
    // { image:'../../../assets/Client1.jpg', name:'John Hookman', review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium quia et porro fuga, sit id eaque at magnam possimus est distinctio? Doloribus!'},
    // { image:'../../../assets/Client2.jpg', name:'Stefy Limeyar', review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur repudiandae possimus qui eligendi consequatur consectetur laudantium eveniet.'},
    // { image:'../../../assets/Client3.jpg', name:'Edward Kitty', review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, autem? Consequatur deserunt porro excepturi beatae natus, delectus numquam necessitatibus quidem iste.'},
    // { image:'../../../assets/Client4.jpg', name:'Steve Rogers', review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rem labore odit aspernatur velit ullam? Repellat, nulla molestias.'}
  ];


}
