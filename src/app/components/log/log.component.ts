import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";
import {Settings} from "../../models/settings.model";

import 'rxjs/Rx' ;

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  public log: string = null;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getLog();
  }

  getLog(): void {
    this.log = null;
    this.appService.getLog()
      .subscribe(res => {
        this.log = res;
      }, (err: any) => {console.error(err);});
  }

  deleteLog(): void {
    this.appService.deleteLog()
      .subscribe(res => {
        this.log = res;
      }, (err: any) => {console.error(err);});
  }

  public onFileChanged(event) {
    let file: File = event.target.files[0];
    console.log(file);
    if(file) {
      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = (evt) => {
        let fileResult = <string>(<FileReader>event.target).result;
        let newSettings: Settings = JSON.parse(fileResult);
        if (newSettings) {
          if(window.confirm("Soll die Datei jetzt importiert werden?")) {
            this.appService.setSettings(newSettings)
              .subscribe(res => {
                if (res) {
                  console.log(res);
                  if (window.confirm("Die Seite muss aktualisiert werden. Jetzt neuladen?")) {
                    location.reload(true);
                  }
                }
              });
          }
        }
      };
      reader.onerror = (evt) => {
        window.alert("Error reading file.")
      };
    }
  }

}
