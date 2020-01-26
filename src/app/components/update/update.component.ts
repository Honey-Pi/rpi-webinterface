import { Component, OnInit } from '@angular/core';
import {Settings} from '../../models/settings.model';
import 'rxjs/Rx' ;
import {AppService} from '../../services/app.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public log = null;
  public isLoading = false;
  public versionInfo = null;

  constructor(private appService: AppService) { }

  public apiURL;

  ngOnInit() {
    this.apiURL = environment.apiURL;
  }

  public get isAccessPoint() {
    const host: string = window.location.hostname;
    return (host === '192.168.4.1');
  }

  update(mode): void {
    this.log = null;
    this.isLoading = true;
    this.appService.update(mode)
      .finally(() => this.isLoading = false)
      .subscribe(res => {
        console.log(res);
        this.log = res;
        if (window.confirm('Erfolgreich aktualisiert. Die Seite muss aktualisiert werden. Jetzt neuladen?')) {
          location.reload(true);
        }
      }, (err: any) => {console.error(err); });
  }

  getVersionInfo(): void {
    this.versionInfo = null;
    this.log = null;
    this.isLoading = true;
    this.appService.update('versionInfo')
      .finally(() => this.isLoading = false)
      .subscribe(res => {
        try {
          this.versionInfo = <any>res;
          this.log = null;
          if (this.versionInfo.error) {
            throw new Error('Exception occured: ' + this.versionInfo.error);
          }
        } catch (e) {
          console.error(e);
          this.log = e;
          this.versionInfo = null;
        }
      }, (err: any) => {
        this.versionInfo = null;
        console.error(err);
        this.log = err;
        if (err.name && err.name === 'TimeoutError') {
          this.log = 'TimeoutError.';
        } else if (err.name && err.name === 'HttpErrorResponse') {
          this.log = 'HttpErrorResponse.';
        }
      });
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
