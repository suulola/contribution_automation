import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, tap, catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";

  constructor(private http: HttpClient) { }



  authenticationService(username: string, password: string) {
    return this.http.get(`http://localhost:8080/api/v1/auth`, {
      headers: {
        authorization: this.createBasicAuthToken(username, password)
      }
    })
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password);
  }

  handleLogout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    return user === null ? false : true;
  }





}
