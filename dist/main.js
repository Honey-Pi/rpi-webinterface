(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"rpi-webinterface","version":"0.0.1","license":"MIT","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"^6.0.5","@angular/cli":"^6.0.8","@angular/common":"^6.0.5","@angular/compiler":"^6.0.5","@angular/core":"^6.0.5","@angular/forms":"^6.0.5","@angular/http":"^6.0.5","@angular/platform-browser":"^6.0.5","@angular/platform-browser-dynamic":"^6.0.5","@angular/router":"^6.0.5","core-js":"^2.4.1","rxjs":"^6.2.1","rxjs-compat":"^6.2.1","zone.js":"^0.8.14"},"devDependencies":{"@angular-devkit/build-angular":"~0.6.8","@angular/cli":"1.4.9","@angular/compiler-cli":"^6.0.5","@angular/language-service":"^6.0.5","@types/jasmine":"~2.5.53","@types/jasminewd2":"~2.0.2","@types/node":"^6.0.113","codelyzer":"~3.2.0","jasmine-core":"~2.6.2","jasmine-spec-reporter":"~4.1.0","karma":"~1.7.0","karma-chrome-launcher":"~2.1.1","karma-cli":"~1.0.1","karma-coverage-istanbul-reporter":"^1.2.1","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.1.2","ts-node":"~3.2.0","tslint":"~5.7.0","typescript":"^2.7.2"}};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_settings_ts_field_ts_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/settings/ts-field/ts-field.component */ "./src/app/components/settings/ts-field/ts-field.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_settings_ts_field_ts_field_component__WEBPACK_IMPORTED_MODULE_9__["TsFieldComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <span class=\"text-muted\">&copy; <a href=\"https://honey-pi.de\" target=\"_blank\">Honey-Pi.de</a> | v{{ appVersion }}</span>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var appVersion = __webpack_require__(/*! ../../../../package.json */ "./package.json").version;
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.appVersion = appVersion;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"\">HoneyPi</a>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <div class=\"float-right\">\r\n      <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"saveSettings()\">Speichern</button>\r\n    </div>\r\n    <h1>Hardware Einstellungen</h1>\r\n    <div id=\"accordion\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingOne\">\r\n          <h5 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n              ThingSpeak Einstellungen\r\n            </button>\r\n          </h5>\r\n        </div>\r\n        <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n          <div class=\"card-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"ts_channel_id\">ThingSpeak Channel-ID</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"settings.ts_channel_id\" id=\"ts_channel_id\" name=\"ts_channel_id\" placeholder=\"Channel-ID\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"ts_write_key\">ThingSpeak Write-Key</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings.ts_write_key\" id=\"ts_write_key\" name=\"ts_write_key\" placeholder=\"Write-Key\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingTwo\">\r\n          <h5 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n              Mobilfunkübertragung\r\n            </button>\r\n          </h5>\r\n        </div>\r\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n          <div class=\"card-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"sim_apn\">APN der SIM-Karte</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings.sim_apn\" id=\"sim_apn\" name=\"sim_apn\" placeholder=\"APN\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingThree\">\r\n          <h5 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n              Angeschlossene Sensoren\r\n            </button>\r\n          </h5>\r\n        </div>\r\n        <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-bordered table-sm table-responsive-md\">\r\n              <thead>\r\n                <tr>\r\n                  <th colspan=\"2\">Sensoren</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody id=\"sensors\">\r\n                <ng-container *ngFor=\"let sensor of settings.sensors; let i = index\">\r\n                  <tr [ngClass]=\"{'my-bg': (i%2 == 0)}\">\r\n                    <td>\r\n                      <select [(ngModel)]=\"sensor.type\" name=\"sensor-type\" class=\"custom-select\">\r\n                        <option [ngValue]=\"0\">Temperatursensor (DS18b20)</option>\r\n                        <option [ngValue]=\"1\">BME680 (Temperatur+Luftfeuchtigkeit+Luftdruck+Qualität)</option>\r\n                        <option [ngValue]=\"2\">Gewichtssensor (A/D: HX711)</option>\r\n                      </select>\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger float-right\" (click)=\"removeSensor(i)\" title=\"Entfernen\">\r\n                        &#x232b;\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"sensor.type == 0\" [ngClass]=\"{'my-bg': (i%2 == 0)}\">\r\n                    <td colspan=\"2\">\r\n                      <div class=\"row\">\r\n                        <div class=\"form-group col-6\">\r\n                          <label for=\"device_id\">Sensor Device-ID</label>\r\n                          <select [(ngModel)]=\"sensor.device_id\" id=\"device_id\" name=\"device_id\" class=\"custom-select\">\r\n                            <option [ngValue]=\"undefined\">Device-ID auswählen...</option>\r\n                            <ng-container *ngFor=\"let device of temperatureSensors\">\r\n                              <option [ngValue]=\"device\">{{ device }}</option>\r\n                            </ng-container>\r\n                          </select>\r\n                        </div>\r\n                        <div class=\"form-group col-6\">\r\n                          <settings-ts-field [label]=\"'ThingSpeak Feldname'\"\r\n                                             (ts_fieldChanged)=\"sensor.ts_field = $event\"\r\n                                             [ts_field]=\"sensor.ts_field\" ></settings-ts-field>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          <div class=\"alert alert-info\" *ngIf=\"temperatureSensors.length == 0\">\r\n                            Es konnten keine Temperatursensor am Gerät gefunden werden.<br>\r\n                            Prüfe ob die Sensoren angeschlossen und <a (click)=\"getTemperatureSensors()\" [routerLink]=\"\">aktualisiere</a> die Liste.\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"sensor.type == 1\" [ngClass]=\"{'my-bg': (i%2 == 0)}\">\r\n                    <td colspan=\"2\">\r\n                      <div class=\"row\">\r\n                        <div class=\"form-group col-6\">\r\n                          <settings-ts-field [label]=\"'ThingSpeak Temperatur'\"\r\n                                             [ts_field_id]=\"'ts_field_temperature'\"\r\n                                             (ts_fieldChanged)=\"sensor.ts_field_temperature = $event\"\r\n                                             [ts_field]=\"sensor.ts_field_temperature\" ></settings-ts-field>\r\n                        </div>\r\n                        <div class=\"form-group col-6\">\r\n                          <settings-ts-field [label]=\"'ThingSpeak Luftfeuchtigkeit'\"\r\n                                             [ts_field_id]=\"'ts_field_humidity'\"\r\n                                             (ts_fieldChanged)=\"sensor.ts_field_humidity = $event\"\r\n                                             [ts_field]=\"sensor.ts_field_humidity\" ></settings-ts-field>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"form-group col-6\">\r\n                          <settings-ts-field [label]=\"'ThingSpeak Luftdruck'\"\r\n                                             [ts_field_id]=\"'ts_field_air_pressure'\"\r\n                                             (ts_fieldChanged)=\"sensor.ts_field_air_pressure = $event\"\r\n                                             [ts_field]=\"sensor.ts_field_air_pressure\" ></settings-ts-field>\r\n                        </div>\r\n                        <div class=\"form-group col-6\">\r\n                          <settings-ts-field [label]=\"'ThingSpeak Qualität'\"\r\n                                             [ts_field_id]=\"'ts_field_air_quality'\"\r\n                                             (ts_fieldChanged)=\"sensor.ts_field_air_quality = $event\"\r\n                                             [ts_field]=\"sensor.ts_field_air_quality\" ></settings-ts-field>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"sensor.type == 2\" [ngClass]=\"{'my-bg': (i%2 == 0)}\">\r\n                    <td colspan=\"2\">\r\n                      <div class=\"row\">\r\n                        <div class=\"form-group col-6\">\r\n                          <label for=\"pin_dt\">GPIO-PIN DT</label>\r\n                          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"sensor.pin_dt\" id=\"pin_dt\" name=\"pin_dt\" placeholder=\"DT\">\r\n                        </div>\r\n                        <div class=\"form-group col-6\">\r\n                          <label for=\"pin_sck\">GPIO-PIN SCK</label>\r\n                          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"sensor.pin_sck\" id=\"pin_sck\" name=\"pin_sck\" placeholder=\"SCK\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"form-group col-6\">\r\n                          <label for=\"reference_unit\">Wägezellen Kalibrierungswert</label>\r\n                          <input type=\"string\" class=\"form-control\" [(ngModel)]=\"sensor.reference_unit\" id=\"reference_unit\" name=\"reference_unit\" placeholder=\"Kalibrierungswert\">\r\n                        </div>\r\n                        <div class=\"form-group col-6\">\r\n                          <settings-ts-field [label]=\"'ThingSpeak Feldname'\"\r\n                                             (ts_fieldChanged)=\"sensor.ts_field = $event\"\r\n                                             [ts_field]=\"sensor.ts_field\" ></settings-ts-field>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                          <div class=\"alert alert-info\"><b>Kalibrierungswert ausrechnen:</b><br>\r\n                            1. Setze den Kalibrierungswert auf 1<br>\r\n                            2. Platziere genau 2kg (2000g) auf die Waage<br>\r\n                            3. Teile den durchschnittlichen Messwert durch die 2kg: 184000/2000 = <b>Kalibrierungswert</b>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n                <tr>\r\n                  <td colspan=\"2\">\r\n                    <button class=\"btn btn-primary\" (click)=\"addSensor()\" title=\"Hinzufügen\">\r\n                      &#x2b; Sensor hinzufügen\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <hr />\r\n            <div class=\"form-group\">\r\n              <label for=\"button_pin\">Wartungsmodus-Taster GPIO-PIN</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"settings.button_pin\" id=\"button_pin\" name=\"button_pin\" placeholder=\"GPIO-PIN\">\r\n            </div>\r\n            <div class=\"alert alert-info\">Eine Änderung am GPIO-PIN des Tasters erfordert einen Neustart des Gerätes.</div>\r\n            <div class=\"form-group\">\r\n              <label for=\"interval\">Messintervall</label>\r\n              <select [(ngModel)]=\"settings.interval\" id=\"interval\" name=\"interval\" class=\"custom-select\">\r\n                <option [ngValue]=\"undefined\">Intervall auswählen...</option>\r\n                <option [ngValue]=\"60\">1min</option>\r\n                <option [ngValue]=\"300\">5min</option>\r\n                <option [ngValue]=\"600\">10min</option>\r\n                <option [ngValue]=\"900\">15min</option>\r\n                <option [ngValue]=\"1800\">30min</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _models_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/settings.model */ "./src/app/models/settings.model.ts");
/* harmony import */ var _models_sensor_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/sensor.model */ "./src/app/models/sensor.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(appService) {
        this.appService = appService;
        this.settings = new _models_settings_model__WEBPACK_IMPORTED_MODULE_2__["Settings"]();
        this.temperatureSensors = new Array();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        /* initial load */
        this.getSettings();
        this.getTemperatureSensors();
    };
    SettingsComponent.prototype.getSettings = function () {
        var _this = this;
        this.appService.getSettings()
            .subscribe(function (res) {
            if (res) {
                _this.settings = res;
            }
        }, function (err) { console.log(err.status); console.log(err); });
    };
    SettingsComponent.prototype.saveSettings = function () {
        var _this = this;
        this.appService.setSettings(this.settings).subscribe(function (res) {
            console.log(res);
            // load new Settings
            _this.getSettings();
        }, function (err) { console.log(err.status); console.log(err); });
    };
    /* Sensors */
    SettingsComponent.prototype.addSensor = function () {
        this.settings.sensors.push(new _models_sensor_model__WEBPACK_IMPORTED_MODULE_3__["Sensor"]());
    };
    SettingsComponent.prototype.removeSensor = function (index) {
        this.settings.sensors.splice(index, 1);
    };
    SettingsComponent.prototype.getTemperatureSensors = function () {
        var _this = this;
        this.appService.getTemperatureSensors()
            .subscribe(function (res) {
            if (res) {
                _this.temperatureSensors = res;
            }
        }, function (err) { console.log(err.status); console.log(err); });
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/ts-field/ts-field.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/settings/ts-field/ts-field.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/settings/ts-field/ts-field.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/settings/ts-field/ts-field.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"{{ ts_field_id }}\">{{ label }}</label>\n<select [(ngModel)]=\"ts_field\" id=\"{{ ts_field_id }}\" name=\"{{ ts_field_id }}\" (ngModelChange)=\"onChange($event)\" class=\"custom-select\">\n  <option [ngValue]=\"undefined\">Feld auswählen...</option>\n  <option value=\"field1\">Feld 1</option>\n  <option value=\"field2\">Feld 2</option>\n  <option value=\"field3\">Feld 3</option>\n  <option value=\"field4\">Feld 4</option>\n  <option value=\"field5\">Feld 5</option>\n  <option value=\"field6\">Feld 6</option>\n  <option value=\"field7\">Feld 7</option>\n  <option value=\"field8\">Feld 8</option>\n</select>\n"

/***/ }),

/***/ "./src/app/components/settings/ts-field/ts-field.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/settings/ts-field/ts-field.component.ts ***!
  \********************************************************************/
/*! exports provided: TsFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsFieldComponent", function() { return TsFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TsFieldComponent = /** @class */ (function () {
    function TsFieldComponent() {
        this.ts_field_id = "ts_field";
        this.ts_fieldChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TsFieldComponent.prototype.onChange = function () {
        this.ts_fieldChanged.emit(this.ts_field);
    };
    TsFieldComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TsFieldComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TsFieldComponent.prototype, "ts_field_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TsFieldComponent.prototype, "ts_field", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TsFieldComponent.prototype, "ts_fieldChanged", void 0);
    TsFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'settings-ts-field',
            template: __webpack_require__(/*! ./ts-field.component.html */ "./src/app/components/settings/ts-field/ts-field.component.html"),
            styles: [__webpack_require__(/*! ./ts-field.component.css */ "./src/app/components/settings/ts-field/ts-field.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TsFieldComponent);
    return TsFieldComponent;
}());



/***/ }),

/***/ "./src/app/models/sensor.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/sensor.model.ts ***!
  \****************************************/
/*! exports provided: Sensor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sensor", function() { return Sensor; });
var Sensor = /** @class */ (function () {
    function Sensor(type) {
        if (type === void 0) { type = 0; }
    }
    return Sensor;
}());



/***/ }),

/***/ "./src/app/models/settings.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/settings.model.ts ***!
  \******************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
var Settings = /** @class */ (function () {
    function Settings() {
        this.sensors = new Array();
    }
    return Settings;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = './backend/';
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getSettings = function () {
        var timestamp = "&t=" + ((new Date()).getTime());
        return this.http.get(apiUrl + 'settings.php?getSettings' + timestamp)
            .map(function (response) {
            if (response) {
                return response;
            }
        });
    };
    AppService.prototype.getTemperatureSensors = function () {
        var timestamp = "&t=" + ((new Date()).getTime());
        return this.http.get(apiUrl + 'ds18b20.php?getSettings' + timestamp)
            .map(function (response) {
            if (response) {
                return response;
            }
        });
    };
    AppService.prototype.setSettings = function (newSettings) {
        return this.http.post(apiUrl + 'settings.php?setSettings', JSON.stringify(newSettings)).map(function (response) {
            return response;
        });
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\javan\Desktop\HoneyPi\rpi-webinterface\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map