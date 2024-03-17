import { Component, OnInit, inject } from '@angular/core';
import { ClientsService } from '../../Services/clients.service';
import { client } from '../../models/clients';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimony',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.css'
})
export class TestimonyComponent implements OnInit{

  clientreview=inject(ClientsService);

  clients:client[];

ngOnInit(){
    this.clients=this.clientreview.clients;
}

}
