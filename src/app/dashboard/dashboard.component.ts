import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  logs : any = [];
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.callDashboardService(localStorage.getItem('token'));
  }

  callDashboardService(token){
    this.apiService.getRespForDashboard(token).subscribe(data =>{
      console.log(data);
      this.logs = data;
    }, err =>{
      console.log(err);
    });
  }

}
