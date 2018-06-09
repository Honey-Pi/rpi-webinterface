import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private app: AppService) { }

  ngOnInit() {
  }

  private saveSettings(): void {
   // this.app.saveSettings();
  }

}
