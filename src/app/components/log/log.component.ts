import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  public log: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getLog();
  }

  getLog(): void {
    this.appService.getLog()
      .subscribe(res => {
        if(res) {
          this.log = res;
        }
      }, (err: any) => {console.log(err.status); console.log(err);});
  }

  deleteLog(): void {
    this.appService.deleteLog()
      .subscribe(res => {
        if(res) {
          this.log = res;
        }
      }, (err: any) => {console.log(err.status); console.log(err);});
  }

}
