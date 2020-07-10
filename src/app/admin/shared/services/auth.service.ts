import { Injectable } from '@angular/core';
import {User} from "../../../shared/interfaces/user";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseUrl="http://booksandauthor/api" ;
  message: string ;
  authenticated = false;

  constructor(private httpClient : HttpClient) { }

  login(user: User) {
    return this.httpClient.post(`${this.baseUrl}/login`, {data: user})
      .pipe(map((res) => {
        this.message = res['data'];
        if (this.message == "Успешно!"){
          this.authenticated = true;
        }
        return this.message;


      }));
  }

  isAuthenticated():boolean{
    return this.authenticated
  }

  logout(){
    this.authenticated = false;
  }

}
