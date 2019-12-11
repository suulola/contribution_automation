import { AuthService } from './../login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(
    private auth: AuthService,
    ) {
      this.auth.isLoggedIn.subscribe(status => {
        this.isLoggedIn = status;
      })
     }

  ngOnInit() { }

  logout() {
    this.auth.handleLogout()
  }

}
