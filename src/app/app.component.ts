import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isNewReleaseAvailable = false;

  constructor(private appService: AppService, private translate: TranslateService) {}

  ngOnInit() {
    this.initNewUpdateRoutine();
  }

  async initNewUpdateRoutine() {
    let interval = 1*60*1000; // 1min
    let lastUpdateCheck: number = parseInt(sessionStorage.getItem('lastUpdateCheck'));
    if (isNaN(lastUpdateCheck) || new Date(lastUpdateCheck) <= new Date(Date.now()-interval)) {
      sessionStorage.setItem('lastUpdateCheck', Date.now().toString());
      await this.searchForNewUpdate();
    } else {
      console.log("Did not search for new updates because latest check is less than 1 minutes ago.");
    }
  }

  searchForNewUpdate() {
    console.log("Initiated a check to search for new available updates.");
    return new Promise(resolve => {
      setTimeout(() => {
        this.appService.checkNewUpdate().timeout(7000)
          .finally(() => {
            console.log("Finished search for new Updates.");
            resolve('resolved');
          })
          .subscribe(res => {
            // ok
            if (res.isNewVersionAvailable === true) {
              console.log("There is a new release available. Install it to keep your HoneyPi up-to-date.");
              console.log("isStable=",res.isStable);
              this.isNewReleaseAvailable = true;
            } else {
              console.log("Successful checked for new updates but you have the most recent HoneyPi releases installed.");
            }
          }, (err: any) => {
            // error
            console.error("Error while searching for new updates:", err);
            this.isNewReleaseAvailable = false;
          });
      }, 5000);
    });
  }
}
