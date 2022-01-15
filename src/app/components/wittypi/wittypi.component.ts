import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Settings} from '../../models/settings.model';
import {AppService} from '../../services/app.service';
import {TranslateService} from '@ngx-translate/core';
import {WittyPi} from '../../models/wittypi.model';

@Component({
  selector: 'app-wittypi',
  templateUrl: './wittypi.component.html',
  styleUrls: ['./wittypi.component.css']
})
export class WittypiComponent {

  public exampleScriptsNormal: {name: string, script: string}[] =
    [
      {
        name: 'Anschalten alle 30Minuten',
        script: 'BEGIN 2015-08-01 08:00:00\n' +
          'END   2035-07-31 18:00:00\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25'
      }, {
        name: 'Anschalten alle 15min',
        script: 'BEGIN 2015-08-01 00:00:00 \n' +
          'END   2035-07-31 23:59:59 \n' +
          'ON    M5 WAIT\n' +
          'OFF   M10'
      },
      {
        name: '7-19Uhr alle 30min, 19-7h stündliches Anschalten',
        script:
          'BEGIN 2015-08-01 07:00:00\n' +
          'END   2035-07-31 23:59:59\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M25\n' +
          'ON    M5 WAIT\n' +
          'OFF   M55\n' +
          'ON    M5 WAIT\n' +
          'OFF   M55\n' +
          'ON    M5 WAIT\n' +
          'OFF   M55\n' +
          'ON    M5 WAIT\n' +
          'OFF   M55\n' +
          'ON    M5 WAIT\n' +
          'OFF   M55\n' +
          'ON    M5 WAIT\n' +
          'OFF   M55\n' +
          'ON    M5 WAIT\n' +
          'OFF   M55\n' +
          'ON    M5 WAIT\n' +
          'OFF   M55\n' +
          'ON    M5 WAIT\n' +
          'OFF   M55\n' +
          'ON    M5 WAIT\n' +
          'OFF   M55\n' +
          'ON    M5 WAIT\n' +
          'OFF   M55\n' +
          'ON    M5 WAIT\n' +
          'OFF   M55\n'
      }
    ];

  public exampleScriptsLow: {name: string, script: string}[] =
    [
      {
        name: 'Täglich um 6 Uhr anschalten',
        script: 'BEGIN 2015-03-01 06:00:00\n' +
          'END   2035-12-31 00:00:00\n' +
          'ON    M5 WAIT\n' +
          'OFF   H23 M55'
      }, {
      name: 'Alle 8h anschalten',
      script: 'BEGIN 2015-03-01 06:00:00\n' +
        'END   2035-12-31 00:00:00\n' +
        'ON    M5 WAIT\n' +
        'OFF   H7 M55\n' +
        'ON    M5 WAIT\n' +
        'OFF   H7 M55\n' +
        'ON    M5 WAIT\n' +
        'OFF   H7 M55'
    }
    ];

  public selectedExampleNormal: string = null;
  public selectedExampleLow: string = null;
  private isLoading: boolean;

  /* two-way databinding for settings*/
  _settings: Settings;
  @Input()
  set settings(val: Settings) {
    this.settingsChange.emit(val);
    this._settings = val;
  }
  get settings() {
    return this._settings;
  }
  @Output()
  settingsChange: EventEmitter<Settings> = new EventEmitter<Settings>();

  public need_restart = 'Erfolgreich. Der Raspberry muss jetzt von dir neugestartet werden.';
  public internet_connection = 'No internet connection. Try again with internet connection.';

  constructor(private appService: AppService, private translate: TranslateService) { }

  installWittyPi(version: number): void {
    this.translate.get('settings.update.internet_connection').subscribe((translated: string) => {
      this.internet_connection = translated;
    });
    this.translate.get('settings.wittypi.need_restart').subscribe((translated: string) => {
      this.need_restart = translated;
    });
    this.isLoading = true;
    this.translate.get('settings.confirm.installWittyPi').subscribe((res: string) => {
      if (window.confirm(res)) {
        this.appService.checkInternet().timeout(15000)
          .subscribe(resInternet => {
            const checkInternetResponse = <any>resInternet;
            if (checkInternetResponse.connected === true) {
              this.appService.update('installWittyPi', false, '&version=' + version)
               .finally(() => this.isLoading = false)
               .subscribe(resUpdate => {
                 console.log(resUpdate);
                 alert(this.need_restart);
               }, (err: any) => {
                 console.error(err);
                 alert('Error while installing WittyPi. Try again.');
               });
            } else {
              this.isLoading = false;
              alert(this.internet_connection);
            }
          }, (err: any) => {
            console.log(err);
            this.isLoading = false;
            alert(this.internet_connection);
          });

      } else {
        this.isLoading = false;
      }
    });
  }

  public showWarningForMissingWait(wittyPiPlan: WittyPi): boolean {
    return (wittyPiPlan.interval === 1 && wittyPiPlan.shutdownAfterTransfer === true && wittyPiPlan.schedule.indexOf('WAIT') === -1);
  }

  public showWarningForWait(wittyPiPlan: WittyPi): boolean {
    return ((wittyPiPlan.shutdownAfterTransfer !== true || wittyPiPlan.interval !== 1 ) && wittyPiPlan.schedule.indexOf('WAIT') !== -1);
  }

  public showWarningForTooBigYears(wittyPiPlan: WittyPi): boolean {
    const globalRegex = new RegExp('(([2][0][3][8-9][-])|([2-9][0-9][4-9][0-9][-]))', 'g');
    return globalRegex.test(wittyPiPlan.schedule);
  }

}
