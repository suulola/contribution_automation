import { NavbarComponent } from './../navbar/navbar.component';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  errorMessage: string;
  username: string;
  password: string;

  invalidLogin = false;
  loginSuccess = false;
  USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

 handleLogin(username, password) : void {

    try {
      if(username.trim() == '') {
        this.errorMessage = "Input a valid username";
       }else if(password.trim() == '') {
         this.errorMessage = "Input a valid password";
       }else {
         this.errorMessage = '';
            this.authService.authenticationService(username, password)
            .subscribe(
            async data => {
             if(data["message"] == "success") {
              this.authService.setLoginState(true);
              sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
               // using window.location.reload() should be the ideal method
               // search for the ideal method
              // await window.location.reload()
              this.router.navigate(["dashboard"])


             }else {
               window.alert(data["message"])
             }
            }
         )
       }

    } catch (error) {
      console.log("hidifsda")

    }





  }



}
