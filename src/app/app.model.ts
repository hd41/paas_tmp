export class AppModel {
    id: number;
    username: String;
    password: String;
    constructor(id:number,username: String,password: String){
        this.id=id;
        this.username=username;
        this.password=password;
    }
  }

export class LogModel {

  id: number;
  log_name: String;
  log_source: String;

  constructor(id: number, log_name: String, log_source: String){
    this.id = id;
    this.log_name = log_name;
    this.log_source = log_source;
  }
}
