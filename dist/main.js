(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"rpi-webinterface","version":"0.0.3","license":"MIT","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"^6.1.8","@angular/common":"^6.1.8","@angular/compiler":"^6.1.8","@angular/core":"^6.1.8","@angular/forms":"^6.1.8","@angular/http":"^6.1.8","@angular/platform-browser":"^6.1.8","@angular/platform-browser-dynamic":"^6.1.8","@angular/router":"^6.1.8","core-js":"^2.4.1","rxjs":"^6.3.2","rxjs-compat":"^6.3.2","zone.js":"^0.8.14"},"devDependencies":{"@angular-devkit/build-angular":"~0.6.8","@angular/cli":"^6.2.3","@angular/compiler-cli":"^6.1.8","@angular/language-service":"^6.1.8","@types/jasmine":"~2.5.53","@types/jasminewd2":"~2.0.2","@types/node":"^6.0.117","codelyzer":"~3.2.0","jasmine-core":"~2.6.2","jasmine-spec-reporter":"~4.1.0","karma":"~1.7.0","karma-chrome-launcher":"~2.1.1","karma-cli":"~1.0.1","karma-coverage-istanbul-reporter":"^1.2.1","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.1.2","ts-node":"~3.2.0","tslint":"~5.7.0","typescript":"^2.9.2"}};

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

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _components_internet_internet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/internet/internet.component */ "./src/app/components/internet/internet.component.ts");
/* harmony import */ var _components_log_log_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/log/log.component */ "./src/app/components/log/log.component.ts");
/* harmony import */ var _components_measurement_measurement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/measurement/measurement.component */ "./src/app/components/measurement/measurement.component.ts");
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
                _components_settings_ts_field_ts_field_component__WEBPACK_IMPORTED_MODULE_9__["TsFieldComponent"],
                _components_internet_internet_component__WEBPACK_IMPORTED_MODULE_10__["InternetComponent"],
                _components_log_log_component__WEBPACK_IMPORTED_MODULE_11__["LogComponent"],
                _components_measurement_measurement_component__WEBPACK_IMPORTED_MODULE_12__["MeasurementComponent"]
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

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <span class=\"text-muted\">&copy; <a href=\"https://www.honey-pi.de\" target=\"_blank\">Honey-Pi.de</a> | v{{ appVersion }}</span>\n  </div>\n</footer>\n"

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

/***/ "./src/app/components/internet/internet.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/internet/internet.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/internet/internet.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/internet/internet.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-info\">Die Änderungen in diesem Bereich werden nach einem Neustart aktiv.</div>\n<hr />\n<h5 class=\"h5\">WLAN Internetzugang</h5>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"wifi.enabled\" id=\"enabledWifi\">\n  <label class=\"form-check-label\" for=\"enabledWifi\">\n    Mit vorhandenem WLAN-Netzwerk verbinden, wenn verfügbar?\n  </label>\n</div>\n<div class=\"row\" *ngIf=\"wifi.enabled\">\n  <div class=\"form-group col-6\">\n    <label for=\"ssid\">WLAN-Funknetz (SSID)</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"wifi.ssid\" id=\"ssid\" name=\"ssid\" placeholder=\"WLAN-Netzwerkname\">\n  </div>\n  <div class=\"form-group col-6\">\n    <label for=\"password\">WLAN-Netzwerkschlüssel</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"wifi.password\" id=\"password\" name=\"password\" placeholder=\"Passwort\">\n  </div>\n</div>\n<button class=\"btn btn-primary btn-sm\" type=\"button\" role=\"button\">Änderungen speichern</button>\n<hr />\n<h5 class=\"h5\">Mobilfunkverbindung vorhanden?</h5>\n<button type=\"button\" role=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"checkInternet()\">Teste Internetverbindung</button>\n<br>\n<div *ngIf=\"checkInternetResponse\">\n  <span class=\"text-success\" *ngIf=\"checkInternetResponse.connected\">Internetaufruf erfolgreich.</span>\n  <span class=\"text-danger\" *ngIf=\"!checkInternetResponse.connected\">Verbindung fehlgeschlagen.</span>\n  <pre class=\"pre-scrollable\" *ngIf=\"checkInternetResponse.content\">{{checkInternetResponse.content}}</pre>\n</div>\n<br>\n<div class=\"alert alert-info\">\n  Bei aktiviertem AccessPoint, also hier im Wartungsmodus, kann sich der Raspberry Pi <strong>nicht gleichzeitig</strong> auch mit einem WLAN-Netzwerk verbinden.\n  Daher kann beim Test nur die Internetverbindung über den Surfstick oder beim RPi 3B/3B+ auch der LAN-Anschluss getestet werden.\n</div>\n<p>\n  <a class=\"text-danger\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n    Erweiterte Einstellungen für Nutzer, die wissen was sie tun »\n  </a>\n</p>\n<div class=\"collapse\" id=\"collapseExample\">\n  <div class=\"card card-body\">\n    <h5 class=\"h5\">HoneyPi Wartungsmodus</h5>\n    <p>Ändere die SSID und das Passwort des AccessPoints.</p>\n    <div class=\"row\">\n      <div class=\"form-group col-6\">\n        <label for=\"honeypiWifissid\">WLAN-Funknetz (SSID)</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"honeypiWifi.ssid\" id=\"honeypiWifissid\" name=\"honeypiWifissid\" placeholder=\"WLAN-Netzwerkname\">\n      </div>\n      <div class=\"form-group col-6\">\n        <label for=\"honeypiWifipassword\">WLAN-Netzwerkschlüssel</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"honeypiWifi.password\" id=\"honeypiWifipassword\" name=\"honeypiWifipassword\" placeholder=\"Passwort\">\n      </div>\n    </div>\n    <button class=\"btn btn-primary btn-sm\" type=\"button\" role=\"button\">Bisherige Konfiguration überschreiben</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/internet/internet.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/internet/internet.component.ts ***!
  \***********************************************************/
/*! exports provided: InternetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetComponent", function() { return InternetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _models_wifi_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/wifi.model */ "./src/app/models/wifi.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InternetComponent = /** @class */ (function () {
    function InternetComponent(appService) {
        this.appService = appService;
        this.wifi = new _models_wifi_model__WEBPACK_IMPORTED_MODULE_2__["Wifi"]();
        this.honeypiWifi = new _models_wifi_model__WEBPACK_IMPORTED_MODULE_2__["Wifi"]();
    }
    InternetComponent.prototype.checkInternet = function () {
        var _this = this;
        this.appService.checkInternet()
            .subscribe(function (res) {
            if (res) {
                _this.checkInternetResponse = res;
            }
        }, function (err) { console.log(err.status); console.log(err); });
    };
    InternetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-internet',
            template: __webpack_require__(/*! ./internet.component.html */ "./src/app/components/internet/internet.component.html"),
            styles: [__webpack_require__(/*! ./internet.component.css */ "./src/app/components/internet/internet.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], InternetComponent);
    return InternetComponent;
}());



/***/ }),

/***/ "./src/app/components/log/log.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/log/log.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/log/log.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/log/log.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre class=\"pre-scrollable\">{{log}}</pre>\n<button class=\"btn btn-primary btn-sm\" type=\"button\" role=\"button\" (click)=\"getLog()\">Protokoll aktualisieren</button>\n"

/***/ }),

/***/ "./src/app/components/log/log.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/log/log.component.ts ***!
  \*************************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogComponent = /** @class */ (function () {
    function LogComponent(appService) {
        this.appService = appService;
        this.log = "";
    }
    LogComponent.prototype.ngOnInit = function () {
        this.getLog();
    };
    LogComponent.prototype.getLog = function () {
        var _this = this;
        this.appService.getLog()
            .subscribe(function (res) {
            if (res) {
                _this.log = res;
            }
        }, function (err) { console.log(err.status); console.log(err); });
    };
    LogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log',
            template: __webpack_require__(/*! ./log.component.html */ "./src/app/components/log/log.component.html"),
            styles: [__webpack_require__(/*! ./log.component.css */ "./src/app/components/log/log.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], LogComponent);
    return LogComponent;
}());



/***/ }),

/***/ "./src/app/components/measurement/measurement.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/measurement/measurement.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/measurement/measurement.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/measurement/measurement.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-info\">\n  Hier werden die Sensoren angezeigt, die im Reiter \"<strong>Angeschlossene Sensoren</strong>\" konfiguriert und gespeichert sind.\n</div>\n<pre class=\"pre-scrollable\">{{measurement}}</pre>\n<button class=\"btn btn-primary btn-sm\" type=\"button\" role=\"button\" (click)=\"getMeasurement()\">Neue Messung abrufen</button>\n"

/***/ }),

/***/ "./src/app/components/measurement/measurement.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/measurement/measurement.component.ts ***!
  \*****************************************************************/
/*! exports provided: MeasurementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementComponent", function() { return MeasurementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MeasurementComponent = /** @class */ (function () {
    function MeasurementComponent(appService) {
        this.appService = appService;
    }
    MeasurementComponent.prototype.ngOnInit = function () {
        this.getMeasurement();
    };
    MeasurementComponent.prototype.getMeasurement = function () {
        var _this = this;
        this.appService.getMeasurement()
            .subscribe(function (res) {
            if (res) {
                _this.measurement = res;
            }
        }, function (err) { console.log(err.status); console.log(err); });
    };
    MeasurementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-measurement',
            template: __webpack_require__(/*! ./measurement.component.html */ "./src/app/components/measurement/measurement.component.html"),
            styles: [__webpack_require__(/*! ./measurement.component.css */ "./src/app/components/measurement/measurement.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], MeasurementComponent);
    return MeasurementComponent;
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

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"\">HoneyPi</a>\n</nav>\n"

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

module.exports = ".myAlert-top{\n  position: fixed;\n  top: 5px;\n  left:2%;\n  width: 96%;\n  z-index:99;\n}\n\n.myAlert-bottom{\n  position: fixed;\n  bottom: 5px;\n  left:2%;\n  width: 96%;\n  z-index:99;\n}\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"float-right\">\n      <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"saveSettings()\">Speichern</button>\n    </div>\n    <h1 class=\"h1\">Einstellungen</h1>\n    <div class=\"alert alert-success myAlert-top\" role=\"alert\" *ngIf=\"settingsSaved\">\n      <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n      <strong>Gespeichert!</strong> Die Einstellungen wurden gespeichert.\n    </div>\n    <div class=\"alert alert-danger myAlert-top\" role=\"alert\" *ngIf=\"settingsError\">\n      <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n      <strong>Fehler!</strong> Die Einstellungen konnten nicht gespeichert werden.\n    </div>\n    <div id=\"accordion\">\n      <div class=\"card\">\n        <div class=\"card-header\" id=\"headingOne\">\n          <h5 class=\"mb-0\">\n            <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n              ThingSpeak Einstellungen\n            </button>\n          </h5>\n        </div>\n        <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n          <div class=\"card-body\">\n            <div class=\"form-group\">\n              <label for=\"ts_channel_id\">ThingSpeak Channel-ID</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"settings.ts_channel_id\" id=\"ts_channel_id\" name=\"ts_channel_id\" placeholder=\"Channel-ID\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"ts_write_key\">ThingSpeak Write-Key</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings.ts_write_key\" id=\"ts_write_key\" name=\"ts_write_key\" placeholder=\"Write-Key\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\" id=\"headingTwo\">\n          <h5 class=\"mb-0\">\n            <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n              Internetverbindung\n            </button>\n          </h5>\n        </div>\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n          <div class=\"card-body\">\n            <app-internet></app-internet>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\" id=\"headingThree\">\n          <h5 class=\"mb-0\">\n            <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n              Angeschlossene Sensoren\n            </button>\n          </h5>\n        </div>\n        <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n          <div class=\"card-body\">\n            <table class=\"table table-bordered table-sm table-responsive-md\">\n              <thead>\n                <tr>\n                  <th colspan=\"2\">Sensoren</th>\n                </tr>\n              </thead>\n              <tbody id=\"sensors\">\n                <ng-container *ngFor=\"let sensor of settings.sensors; let i = index\">\n                  <tr [ngClass]=\"{'my-bg': (i%2 == 0)}\">\n                    <td>\n                      <select [(ngModel)]=\"sensor.type\" name=\"sensor-type\" class=\"custom-select\">\n                        <option [ngValue]=\"0\">Temperatursensor (DS18b20)</option>\n                        <option [ngValue]=\"1\">BME680 (Temperatur+Luftfeuchtigkeit+Luftdruck+Qualität)</option>\n                        <option [ngValue]=\"2\">Gewichtssensor (A/D: HX711)</option>\n                        <option [ngValue]=\"3\">Luftfeuchtigkeit und Temperatur (DHT11/DHT22)</option>\n                      </select>\n                    </td>\n                    <td>\n                      <button class=\"btn btn-danger float-right\" (click)=\"removeSensor(i)\" title=\"Entfernen\">\n                        &#x232b;\n                      </button>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"sensor.type == 0\" [ngClass]=\"{'my-bg': (i%2 == 0)}\">\n                    <td colspan=\"2\">\n                      <div class=\"row\">\n                        <div class=\"form-group col-6\">\n                          <label for=\"device_id\">Sensor Device-ID</label>\n                          <select [(ngModel)]=\"sensor.device_id\" id=\"device_id\" name=\"device_id\" class=\"custom-select\">\n                            <option [ngValue]=\"undefined\">Device-ID auswählen...</option>\n                            <ng-container *ngFor=\"let device of temperatureSensors\">\n                              <option [ngValue]=\"device\">{{ device }}</option>\n                            </ng-container>\n                          </select>\n                        </div>\n                        <div class=\"form-group col-6\">\n                          <settings-ts-field [label]=\"'ThingSpeak Feldname'\"\n                                             (ts_fieldChanged)=\"sensor.ts_field = $event\"\n                                             [ts_field]=\"sensor.ts_field\" ></settings-ts-field>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-12\">\n                          <div class=\"alert alert-info\" *ngIf=\"temperatureSensors.length == 0\">\n                            Es konnten keine Temperatursensor am Gerät gefunden werden.<br>\n                            Prüfe ob die Sensoren richtig angeschlossen sind und <a (click)=\"getTemperatureSensors()\" [routerLink]=\"\">aktualisiere</a> die Liste.\n                          </div>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"sensor.type == 1\" [ngClass]=\"{'my-bg': (i%2 == 0)}\">\n                    <td colspan=\"2\">\n                      <div class=\"row\">\n                        <div class=\"form-group col-6\">\n                          <settings-ts-field [label]=\"'ThingSpeak Temperatur'\"\n                                             [ts_field_id]=\"'ts_field_temperature'\"\n                                             (ts_fieldChanged)=\"sensor.ts_field_temperature = $event\"\n                                             [ts_field]=\"sensor.ts_field_temperature\" ></settings-ts-field>\n                        </div>\n                        <div class=\"form-group col-6\">\n                          <settings-ts-field [label]=\"'ThingSpeak Luftfeuchtigkeit'\"\n                                             [ts_field_id]=\"'ts_field_humidity'\"\n                                             (ts_fieldChanged)=\"sensor.ts_field_humidity = $event\"\n                                             [ts_field]=\"sensor.ts_field_humidity\" ></settings-ts-field>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"form-group col-6\">\n                          <settings-ts-field [label]=\"'ThingSpeak Luftdruck'\"\n                                             [ts_field_id]=\"'ts_field_air_pressure'\"\n                                             (ts_fieldChanged)=\"sensor.ts_field_air_pressure = $event\"\n                                             [ts_field]=\"sensor.ts_field_air_pressure\" ></settings-ts-field>\n                        </div>\n                        <div class=\"form-group col-6\">\n                          <settings-ts-field [label]=\"'ThingSpeak Qualität'\"\n                                             [ts_field_id]=\"'ts_field_air_quality'\"\n                                             (ts_fieldChanged)=\"sensor.ts_field_air_quality = $event\"\n                                             [ts_field]=\"sensor.ts_field_air_quality\" ></settings-ts-field>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"sensor.type == 2\" [ngClass]=\"{'my-bg': (i%2 == 0)}\">\n                    <td colspan=\"2\">\n                      <div class=\"row\">\n                        <div class=\"form-group col-6\">\n                          <label for=\"pin_dt\">GPIO-PIN DT</label>\n                          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"sensor.pin_dt\" id=\"pin_dt\" name=\"pin_dt\" placeholder=\"DT\">\n                        </div>\n                        <div class=\"form-group col-6\">\n                          <label for=\"pin_sck\">GPIO-PIN SCK</label>\n                          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"sensor.pin_sck\" id=\"pin_sck\" name=\"pin_sck\" placeholder=\"SCK\">\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"form-group col-6\">\n                          <label for=\"channel\">HX711 Channel</label>\n                          <select [(ngModel)]=\"sensor.channel\" name=\"channel\" id=\"channel\" class=\"custom-select\">\n                            <option [ngValue]=\"undefined\">Channel auswählen...</option>\n                            <option [ngValue]=\"'A'\">Channel A</option>\n                            <option [ngValue]=\"'B'\">Channel B</option>\n                          </select>\n                        </div>\n                        <div class=\"form-group col-6\">\n                          <settings-ts-field [label]=\"'ThingSpeak Feldname'\"\n                                             (ts_fieldChanged)=\"sensor.ts_field = $event\"\n                                             [ts_field]=\"sensor.ts_field\" ></settings-ts-field>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"form-group col-6\">\n                          <label for=\"offset\">Wägezellen Offset</label>\n                          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"sensor.offset\" id=\"offset\" name=\"offset\" placeholder=\"Offset\">\n                        </div>\n                        <div class=\"form-group col-6\">\n                          <label for=\"reference_unit\">Wägezellen Skalierungswert</label>\n                          <input type=\"number\" step=\"0.001\" class=\"form-control\" [(ngModel)]=\"sensor.reference_unit\" id=\"reference_unit\" name=\"reference_unit\" placeholder=\"Skalierungswert\">\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-6\">\n                          <div class=\"alert alert-info\">\n                            <b>Offset:</b> Beeinflusst das Messergebnis indem das Offset vom Messwert abgezogen wird.\n                          </div>\n                        </div>\n                        <div class=\"col-6\">\n                          <div class=\"alert alert-info\">\n                            <b>Skalierungswert:</b> Beeinflusst das Messergebnis indem (Messwert-Offset) durch den Skalierungswert geteilt wird.\n                            <br />\n                            <i>Wertebereicht: 0.0 bis 1.0 und 1 bis ...</i>\n                          </div>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"sensor.type == 3\" [ngClass]=\"{'my-bg': (i%2 == 0)}\">\n                    <td colspan=\"2\">\n                      <div class=\"row\">\n                        <div class=\"form-group col-6\">\n                          <settings-ts-field [label]=\"'ThingSpeak Temperatur'\"\n                                             [ts_field_id]=\"'ts_field_temperature'\"\n                                             (ts_fieldChanged)=\"sensor.ts_field_temperature = $event\"\n                                             [ts_field]=\"sensor.ts_field_temperature\" ></settings-ts-field>\n                        </div>\n                        <div class=\"form-group col-6\">\n                          <settings-ts-field [label]=\"'ThingSpeak Luftfeuchtigkeit'\"\n                                             [ts_field_id]=\"'ts_field_humidity'\"\n                                             (ts_fieldChanged)=\"sensor.ts_field_humidity = $event\"\n                                             [ts_field]=\"sensor.ts_field_humidity\" ></settings-ts-field>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"form-group col-6\">\n                          <label for=\"pin\">GPIO-PIN </label>\n                          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"sensor.pin\" id=\"pin\" name=\"pin\" placeholder=\"PIN\" />\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                </ng-container>\n                <tr>\n                  <td colspan=\"2\">\n                    <button class=\"btn btn-primary\" (click)=\"addSensor()\" title=\"Hinzufügen\">\n                      &#x2b; Sensor hinzufügen\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <hr />\n            <div class=\"form-group\">\n              <label for=\"button_pin\">Wartungsmodus-Taster GPIO-PIN</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"settings.button_pin\" id=\"button_pin\" name=\"button_pin\" placeholder=\"GPIO-PIN\" required>\n            </div>\n            <div class=\"alert alert-info\">Die Änderung am Taster wird nach einem Neustart aktiv.</div>\n            <div class=\"form-group\">\n              <label for=\"interval\">Messintervall</label>\n              <select [(ngModel)]=\"settings.interval\" id=\"interval\" name=\"interval\" class=\"custom-select\">\n                <option [ngValue]=\"undefined\">Intervall auswählen...</option>\n                <option [ngValue]=\"60\">1min</option>\n                <option [ngValue]=\"300\">5min</option>\n                <option [ngValue]=\"600\">10min</option>\n                <option [ngValue]=\"900\">15min</option>\n                <option [ngValue]=\"1800\">30min</option>\n                <option [ngValue]=\"3600\">60min</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\" id=\"headingFive\">\n          <h5 class=\"mb-0\">\n            <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseHive\" aria-expanded=\"false\" aria-controls=\"collapseHive\">\n              Messdaten\n            </button>\n          </h5>\n        </div>\n        <div id=\"collapseHive\" class=\"collapse\" aria-labelledby=\"headingFive\" data-parent=\"#accordion\">\n          <div class=\"card-body\">\n            <app-measurement></app-measurement>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\" id=\"headingFour\">\n          <h5 class=\"mb-0\">\n            <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\n              Protokoll\n            </button>\n          </h5>\n        </div>\n        <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordion\">\n          <div class=\"card-body\">\n            <app-log></app-log>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

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
        this.temperatureSensors = [];
        this.settingsSaved = false;
        this.settingsError = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        /* initial load */
        this.getSettings();
        this.getTemperatureSensors();
    };
    SettingsComponent.prototype.hideAlertsTimer = function () {
        var _this = this;
        //wait 4 Seconds and hide
        if (this.n) {
            clearTimeout(this.n);
        }
        this.n = window.setTimeout(function () {
            _this.settingsSaved = false;
            _this.settingsError = false;
        }, 4000);
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
            _this.settingsSaved = true;
            _this.settingsError = false;
            _this.hideAlertsTimer();
        }, function (err) {
            console.log(err.status);
            console.log(err);
            _this.settingsError = true;
            _this.hideAlertsTimer();
        });
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

/***/ "./src/app/models/wifi.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/wifi.model.ts ***!
  \**************************************/
/*! exports provided: Wifi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wifi", function() { return Wifi; });
var Wifi = /** @class */ (function () {
    function Wifi() {
    }
    return Wifi;
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
    AppService.prototype.setSettings = function (newSettings) {
        return this.http.post(apiUrl + 'settings.php?setSettings', JSON.stringify(newSettings)).map(function (response) {
            return response;
        });
    };
    AppService.prototype.getTemperatureSensors = function () {
        var timestamp = "t=" + ((new Date()).getTime());
        return this.http.get(apiUrl + 'ds18b20.php?getSettings&' + timestamp)
            .map(function (response) {
            if (response) {
                return response;
            }
        });
    };
    AppService.prototype.getLog = function () {
        var timestamp = "t=" + ((new Date()).getTime());
        return this.http.get(apiUrl + 'log.php?' + timestamp)
            .map(function (response) {
            if (response) {
                return response;
            }
        });
    };
    AppService.prototype.getMeasurement = function () {
        var timestamp = "t=" + ((new Date()).getTime());
        return this.http.get(apiUrl + 'measurement.php?' + timestamp)
            .map(function (response) {
            if (response) {
                return response;
            }
        });
    };
    AppService.prototype.checkInternet = function () {
        var timestamp = "t=" + ((new Date()).getTime());
        return this.http.get(apiUrl + 'check_internet.php?' + timestamp)
            .map(function (response) {
            if (response) {
                return response;
            }
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

module.exports = __webpack_require__(/*! /Users/jara/WebstormProjects/rpi-webinterface/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map