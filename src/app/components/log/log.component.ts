import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {Settings} from '../../models/settings.model';

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
      }, (err: any) => {console.error(err); });
  }

  deleteLog(): void {
    this.appService.deleteLog()
      .subscribe(res => {
        this.log = res;
      }, (err: any) => {console.error(err); });
  }

  public onFileChanged(event) {
    const file: File = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = (evt) => {
        const fileResult = <string>(<FileReader>evt.target).result;
        const newSettings: Settings = JSON.parse(fileResult);
        if (newSettings) {
          if (window.confirm('Soll die Datei jetzt importiert werden?')) {
            this.appService.setSettings(newSettings)
              .subscribe(res => {
                if (res) {
                  console.log(res);
                  if (window.confirm('Erfolgreich gespeichert. Die Seite muss aktualisiert werden. Jetzt neuladen?')) {
                    location.reload(true);
                  }
                }
              });
          }
        }
      };
      reader.onerror = (evt) => {
        window.alert('Error reading file.');
      };
    }
  }

}
