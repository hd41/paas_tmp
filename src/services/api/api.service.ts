import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  dashUrl = "http://127.0.0.1:5000/dashboard";

  /** this is for making GET request with params */
  // const  params = new  HttpParams().set('_page', "1").set('_limit', "1");
  // this.customersObservable = this.httpClient.get("http://127.0.0.1:3000/customers", {params});

  getRespForDashboard(token): any{
        return this.httpClient.post(`${this.dashUrl}`,{'token':token},
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
