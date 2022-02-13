import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

// declare jQuery for Bootstrap 4.1 Tooltip
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  isNewReleaseAvailable: boolean;



  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    console.log('Browser language is: ' + translate.getBrowserLang());

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(translate.getBrowserLang());
  }

  ngOnInit() {

  }

  initialiseTooltip() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  jumpToUpdateSection() {
    document.querySelector('#headingSeven').scrollIntoView();
  }

}
