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
      }, (err: any) => {console.log(err.status); console.log(err);});
  }

  deleteLog(): void {
    this.appService.deleteLog()
      .subscribe(res => {
        this.log = res;
      }, (err: any) => {console.log(err.status); console.log(err);});
  }

  public downloadSettingsFile() {
    this.appService.getSettings().subscribe(data => this.downloadFile(data)),//console.log(data),
      error => console.log('Error downloading the file.'),
      () => console.info('OK');
  }

  private downloadFile(data: Settings) {
    let reader = new FileReader();
    const blob = new Blob([data], { type: 'application/octet-stream'});
    let url = window.URL.createObjectURL(new Blob([data], {type: 'application/json'}));
    /*let link=document.createElement('a');
    link.href=window.URL.createObjectURL(blob);
    link.download="settings.json";
    link.click();
    */
    /*let headers = new Headers();
    headers.append('responseType', 'arraybuffer');
    reader.readAsDataURL(blob);
    reader.onloadend = (e) => {
      window.open(reader.result);
    }*/
    /*
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json'});
    window.open(window.URL.createObjectURL(blob), "_blank");
    */
  }

  public onFileChanged(event) {
    let file: File = event.target.files[0];
    console.log(file);
    if(file) {
      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = (evt) => {
        let newSettings: Settings = JSON.parse(evt.target.result);
        if (newSettings) {
          if(window.confirm("Anschließend bitte die Webseite neu laden. Soll die Datei jetzt importiert werden?")) {
            this.appService.setSettings(newSettings)
              .subscribe(res => {
                console.log(res);
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
