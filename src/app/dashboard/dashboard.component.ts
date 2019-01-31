import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  logs : any = [];
  pages: any = [];
  totalPages : number = 5674;
  currPage : number = 1;
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    // this.callDashboardService(localStorage.getItem('token'));
    this.pagingLogic();
  }

  callDashboardService(token){
    this.apiService.getRespForDashboard(token).subscribe(data =>{
      console.log(data);
      this.logs = data;
      this.currPage = 1;
      this.pagingLogic();
    }, err =>{
      console.log(err);
    });
  }

  getDataOnthisPage(pageq){
    var page_num = pageq.innerHTML;
    if(page_num == 'First'){
      page_num = 1;
    }else if(page_num == 'Last'){
      page_num = this.totalPages;
    }
    // code to get this page data
    this.currPage = parseInt(page_num);
    this.pagingLogic();
  }

  pagingLogic(){
    if(this.totalPages<10){
      this.pages = this.initiatePages(1, this.totalPages, this.currPage,0);
    }else{
      if(this.currPage < 6){
        this.pages = this.initiatePages(1,10, this.currPage,3);
      }else if(this.currPage > this.totalPages - 6){
        this.pages = this.initiatePages(this.totalPages-9, this.totalPages, this.currPage,1);
      }else{
        this.pages = this.initiatePages(this.currPage-4, this.currPage+4, this.currPage,2);
      }
    }
  }

  initiatePages(ip,lp, currPage, flag){
    let tmp_pages = [];
    if(flag == 1 || flag == 2)
      tmp_pages.push({"number":"First","active":"btn btn-primary"});

    for(var i=ip; i<=lp; i++){
      if(i == currPage)
        tmp_pages.push({"number":i,"active":"btn btn-danger"});
      else
        tmp_pages.push({"number":i,"active":"btn btn-primary"});
    }

    if(flag == 2 || flag == 3)
      tmp_pages.push({"number":"Last","active":"btn btn-primary"});
    return tmp_pages;
  }

}
