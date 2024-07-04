import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { contact } from '../Models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  http = inject(HttpClient);

  onaddmessage(data:contact) {
    this.http.post<{ name: string }>('https://careerview-95bf4-default-rtdb.firebaseio.com/contactus.json', data)
      .subscribe({
        next: (res) => {
          console.log(res);
        }
      })
  }

}
