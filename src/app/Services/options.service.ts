import { Injectable, inject } from '@angular/core';
import { option } from '../Models/careeroptions';
import { details } from '../Models/details';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthserviceService } from './authservice.service';


@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  http = inject(HttpClient);
  authservice = inject(AuthserviceService);

  onaddsectors(){
    for(let i of this.sectors){
      this.http.post<{name : string}>('https://careerview-95bf4-default-rtdb.firebaseio.com/sectors.json', i)
      .subscribe({
        next: (res)=>{
        console.log(res);
      }})
    }
  }


  onfetchsectors(){
    return this.http.get('https://careerview-95bf4-default-rtdb.firebaseio.com/sectors.json')
    .pipe(map((response)=>{
      let sectors:option[] = [];

      for(let key in response){
        if(response.hasOwnProperty(key)){
          sectors.push({ ...response[key], key:key });

        }
      }
      return sectors;
    }),
    catchError((err)=>{
      const data = {statuscode: err.statuscode, errormsg: err.message, datetime: new Date()}
      this.sectorreserrors(data);
      this.authservice.errmsg.next(err.error.message);

      return throwError(()=>err);
    })
  )
  }


  sectorreserrors(data:{statuscode:number, errormsg: string, datetime: Date}){
    this.http.post('https://careerview-95bf4-default-rtdb.firebaseio.com/sectorreserr.json', data)
    .subscribe();
  }




  onaddsectordetails(){
    for(let i of this.sectordetails){
      this.http.post<{name : string}>('https://careerview-95bf4-default-rtdb.firebaseio.com/sectordetails.json', i)
      .subscribe({
        next: (res)=>{
        console.log(res);
      }})
    }
  }


  onfetchsectordetails(){
    return this.http.get('https://careerview-95bf4-default-rtdb.firebaseio.com/sectordetails.json')
    .pipe(map((response)=>{
      let sectordetails:details[] = [];

      for(let key in response){
        if(response.hasOwnProperty(key)){
          sectordetails.push({ ...response[key], key:key });

        }
      }
      return sectordetails;
    }),
    catchError((err)=>{
      const data = {statuscode: err.statuscode, errormsg: err.message, datetime: new Date()}
      this.sdreserrors(data);

      return throwError(()=>err);
    })
  )
  }


  sdreserrors(data:{statuscode:number, errormsg: string, datetime: Date}){
    this.http.post('https://careerview-95bf4-default-rtdb.firebaseio.com/sdreserr.json', data)
    .subscribe();
  }


  sectors:option[]=[
    // {id:1, name:'Technology', image:'../../../assets/Software.jpg'},
    // {id:2, name:'Industries', image:'../../../assets/Industrial.jpg'},
    // {id:3, name:'Marketing', image:'../../../assets/Marketing.jpg'},
    // {id:4, name:'Filming', image:'../../../assets/Films.jpg'},
    // {id:5, name:'Fashion', image:'../../../assets/Fashion.jpg'},
    // {id:6, name:'Management', image:'../../../assets/Management.png'},
    // {id:7, name:'Law', image:'../../../assets/Law1.jpg'},
    // {id:8, name:'Designing', image:'../../../assets/Design.jpg'},
    // {id:9, name:'Robotics', image:'../../../assets/Robotics.jpg'},
    // {id:10, name:'Trading', image:'../../../assets/Trade.png'}
  ];  

  sectordetails: details[]=[
    // {id:1, name:'Technology', image1:'../../../assets/Tech1.jpg', image2:'../../../assets/Tech2.jpg'},
    // {id:2, name:'Industries', image1:'../../../assets/Industries1.jpg', image2:'../../../assets/Industries2.jpg'},
    // {id:3, name:'Marketing', image1:'../../../assets/Md1.jpg', image2:'../../../assets/Md2.jpg'},
    // {id:4, name:'Filming', image1:'../../../assets/Filming1.jpg', image2:'../../../assets/Filming2.jpg'},
    // {id:5, name:'Fashion', image1:'../../../assets/Fashion1.jpg', image2:'../../../assets/Fashion2.jpg'},
    // {id:6, name:'Management', image1:'../../../assets/Management1.jpg', image2:'../../../assets/Management2.jpg'},
    // {id:7, name:'Law', image1:'../../../assets/Law2.jpg', image2:'../../../assets/Law3.jpg'},
    // {id:8, name:'Designing', image1:'../../../assets/Design1.jpg', image2:'../../../assets/Design2.jpg'},
    // {id:9, name:'Robotics', image1:'../../../assets/Robotics1.png', image2:'../../../assets/Robotics2.jpg'},
    // {id:10, name:'Trading', image1:'../../../assets/Trading1.jpg', image2:'../../../assets/Trading2.jpg'},
  ]
  
  getalloptions(){
    return new Observable<option[]>((data)=>{
      setTimeout(()=>{
        this.onfetchsectors().subscribe({
          next: (list)=>{
            data.next(list);
          }
        })
      }, 1000)
    })
  }


}
