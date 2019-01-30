import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { AppModel } from '../app.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  errorMsg: String;
  errorFlag: Boolean = false;
  data:any;
  hideElement : Boolean = true;

  constructor(private loginService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  login(value: AppModel){
    this.loginService.getRespForLogin(value).subscribe(data =>{
      console.log('In component: '+data.username.length+' : '+data.user_token)
      localStorage.setItem('username',data.username);
      localStorage.setItem('token',data.user_token);
      if(data.username == 'fil_paas'){
        this.navigateToDashboard();
      }else{
        this.hideElement = false;
      }
    }, err =>{
      console.log(err);
    });
  }

  navigateToDashboard(){
    this.router.navigate(['/dashboard',{'token':localStorage.getItem('token')}]);
  }
}
