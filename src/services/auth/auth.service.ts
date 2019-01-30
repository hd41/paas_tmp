import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppModel } from '../../app/app.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  loginUrl = "http://127.0.0.1:5000/login";
  data : any;

  getRespForLogin(obj:{}): any{
        return this.httpClient.post(`${this.loginUrl}`,obj,
            {headers: new HttpHeaders().set('Content-Type', 'application/json')
          }).map(response =>{
          const result = response;
          return result;
        }).catch(error => {
          console.log(error.statusText);
          return Observable.throw(error);
        });
  }
}
