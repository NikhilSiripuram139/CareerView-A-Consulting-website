import { Component, Inject, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LogComponent } from './log/log.component';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from '../Services/authservice.service';
import { user } from '../Models/users';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, LogComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isloged: boolean = false;
  menuclicked:boolean = false;

  authservice = inject(AuthserviceService);

  ngOnInit(): void {
    setTimeout(() => {
      this.authservice.user.subscribe((user) => {
        const condition = user ? true : false;
        this.isloged = condition;
      })
    }, 0);

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", function () {
        var header = this.document.querySelector("div.header-container");
        header.classList.toggle("sticky", window.scrollY > 0);
      })
    }
  }


  onlogout() {
    this.authservice.logout();
  }

  onmenucliked(){
    this.menuclicked=!this.menuclicked;
  }

}
