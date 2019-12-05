import { Router } from '@angular/router';
import { AuthService } from './../login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = this.auth.isUserLoggedIn();

  constructor(
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  logout() {
    this.isLoggedIn = false;
    console.log("one")
    console.log(this.isLoggedIn)
    this.auth.handleLogout()
  }

}
