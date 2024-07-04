import { Component, OnInit, inject } from '@angular/core';
import { ClientsService } from '../../Services/clients.service';
import { client } from '../../Models/clients';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimony',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.css'
})
export class TestimonyComponent implements OnInit{

  clientservice=inject(ClientsService);

  clients:client[];
  // showreviews:boolean=false;

ngOnInit(){
  this.clientservice.onfetchreviews()
  .subscribe({
    next: (list)=>{
      this.clients = list;
    }
  });
  
}

}
