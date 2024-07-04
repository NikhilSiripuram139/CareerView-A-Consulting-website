import { AfterViewChecked, Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from '../../Services/authservice.service';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css'
})
export class SnackbarComponent implements OnInit{

  errormessage : string | undefined;
  authservice = inject(AuthserviceService);

  ngOnInit(): void {
      this.authservice.errmsg.subscribe((data)=>{
        this.errormessage=data;
        setTimeout(() => {
          this.errormessage=null;
        }, 3000);
      })
  }
  

}
