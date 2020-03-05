import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

declare function require(moduleName: string): any;
const { version: appVersion } = require('../../../../package.json')

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public appVersion;

  constructor(private translate: TranslateService) {
    this.appVersion = appVersion;
  }

  ngOnInit() {
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  get currentYear() {
    return (new Date().getFullYear());
  }

}
