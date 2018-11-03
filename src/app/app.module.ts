import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TsFieldComponent } from './components/settings/ts-field/ts-field.component';
import { InternetComponent } from './components/internet/internet.component';
import { LogComponent } from './components/log/log.component';
import { MeasurementComponent } from './components/measurement/measurement.component';

const appRoutes: Routes = [
  { path: '', component: SettingsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    NavbarComponent,
    FooterComponent,
    TsFieldComponent,
    InternetComponent,
    LogComponent,
    MeasurementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
