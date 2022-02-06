import { Component, OnInit } from '@angular/core';
import {Settings} from '../../models/settings.model';
import 'rxjs/Rx' ;
import {AppService} from '../../services/app.service';
import {environment} from '../../../environments/environment';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public log = null;
  public isLoading = false;
  public versionInfo = null;
  public usePreVersion: boolean = false;
  public apiURL;
  public internet_connection = 'No internet connection. Try again with internet connection.';
  public need_refresh = 'Erfolgreich aktualisiert. Die Seite muss aktualisiert werden. Jetzt neuladen?';
  public want_import = 'Soll die Datei jetzt importiert werden?';

  constructor(private appService: AppService, private translate: TranslateService) { }

  ngOnInit() {
    this.apiURL = environment.apiURL;

    this.translate.get('settings.update.internet_connection').subscribe((translated: string) => {
      this.internet_connection = translated;
    });
    this.translate.get('settings.update.need_refresh').subscribe((translated: string) => {
      this.need_refresh = translated;
    });
    this.translate.get('settings.update.want_import').subscribe((translated: string) => {
      this.want_import = translated;
    });
  }

  public get isAccessPoint() {
    const host: string = window.location.hostname;
    return (host === '192.168.4.1');
  }

  update(mode): void {
    this.translate.get('settings.update.internet_connection').subscribe((translated: string) => {
      this.internet_connection = translated;
    });
    this.translate.get('settings.update.need_refresh').subscribe((translated: string) => {
      this.need_refresh = translated;
    });

    this.log = null;
    this.isLoading = true;

    this.appService.checkInternet().timeout(15000)
      .subscribe(resInternet => {
        const checkInternetResponse = <any>resInternet;
        if (checkInternetResponse.connected === true) {
          this.appService.update(mode, this.usePreVersion)
            .finally(() => this.isLoading = false)
            .subscribe(res => {
              console.log(res);
              this.log = res;
              this.translate.get('settings.update.need_refresh').subscribe((translated: string) => {
                this.need_refresh = translated;
                if (window.confirm(this.need_refresh)) {
                  window.location.reload();
                }
              });
            }, (err: any) => {console.error(err); });
        } else {
          this.isLoading = false;
          this.translate.get('settings.update.internet_connection').subscribe((translated: string) => {
            this.internet_connection = translated;
            alert(this.internet_connection);
          });
        }
      }, (err: any) => {
        console.log(err);
        this.isLoading = false;
        this.translate.get('settings.update.internet_connection').subscribe((translated: string) => {
          this.internet_connection = translated;
          alert(this.internet_connection);
        });
      });
  }

  getVersionInfo(): void {
    this.versionInfo = null;
    this.log = null;
    this.isLoading = true;

    this.appService.checkInternet().timeout(15000)
      .subscribe(resInternet => {
        const checkInternetResponse = <any>resInternet;
        if (checkInternetResponse.connected === true) {
          this.appService.update('versionInfo', this.usePreVersion)
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
        } else {
          this.isLoading = false;
          this.translate.get('settings.update.internet_connection').subscribe((translated: string) => {
            this.internet_connection = translated;
            alert(this.internet_connection);
          });
        }
      }, (err: any) => {
        console.log(err);
        this.isLoading = false;
        this.translate.get('settings.update.internet_connection').subscribe((translated: string) => {
          this.internet_connection = translated;
          alert(this.internet_connection);
        });
      });
  }

  public onFileChanged(event) {
    this.translate.get('settings.update.need_refresh').subscribe((translated: string) => {
      this.need_refresh = translated;
    });
    this.translate.get('settings.update.want_import').subscribe((translated: string) => {
      this.want_import = translated;
    });

    const file: File = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = (evt) => {
        const fileResult = <string>(<FileReader>evt.target).result;
        const newSettings: Settings = JSON.parse(fileResult);
        if (newSettings) {
          this.translate.get('settings.update.want_import').subscribe((translated: string) => {
            this.want_import = translated;
            if (window.confirm(this.want_import)) {
              this.appService.setSettings(newSettings)
                .subscribe(res => {
                  if (res) {
                    console.log(res);
                    if (window.confirm(this.need_refresh)) {
                      window.location.reload();
                    }
                  }
                });
            }
          });
        }
      };
      reader.onerror = (evt) => {
        window.alert('Error reading file.');
      };
    }
  }

}
