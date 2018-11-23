(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

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
        this.title = 'portfolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-andesenv\">\r\n  <div class=\"container\">\r\n    <div class=\"row sobre\">\r\n      <h2>\r\n        SOBRE MIM\r\n        <div class=\"horizontal-line\">\r\n          <div class=\"top\"></div>\r\n          <div class=\"bottom\"></div>\r\n        </div>\r\n      </h2>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"box-info col-sm-6\">\r\n        <h3>\r\n          Howdy!\r\n        </h3>\r\n        <p>\r\n          Olá, eu sou o Lucas Anderson, tenho 22 anos de idade; atualmente trabalho\r\n          na empresa MedGrupo, onde crio novas features e atuo de QA na equipe\r\n          mobile de exibição de apostilas voltadas a alunos de Medicina.\r\n        </p>\r\n        <div class=\"group-button\">\r\n          <button class=\"btn btn-outline-secondary cv\" type=\"button\">\r\n            Baixar Currículo\r\n          </button>\r\n          <button class=\"btn btn-outline-secondary info\" type=\"button\">\r\n            Mais Informações\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"box-skill col-sm-6\">\r\n        <div class=\"bar expert\">\r\n          <p>\r\n            JavaScript (ES6)\r\n          </p>\r\n        </div>\r\n        <div class=\"bar intermediate\">\r\n          <p>\r\n            Angular 2+\r\n          </p>\r\n        </div>\r\n        <div class=\"bar advanced\">\r\n          <p>\r\n            HTML 5\r\n          </p>\r\n        </div>\r\n        <div class=\"bar intermediate\">\r\n          <p>\r\n            CSS 3 (LESS - SASS)\r\n          </p>\r\n        </div>\r\n        <div class=\"bar advanced\">\r\n          <p>\r\n            Git (GITHUB)\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/about/about.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/about/about.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-andesenv {\n  color: #bbb;\n  background: #151515;\n  padding: 100px 0; }\n  .about-andesenv .sobre {\n    margin-bottom: 80px; }\n  .about-andesenv .sobre h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      margin: auto; }\n  .about-andesenv .sobre h2 .horizontal-line {\n        margin-top: 15px; }\n  .about-andesenv .sobre h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .about-andesenv .sobre h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .about-andesenv .box-info h3 {\n    font: 100 1.5em monospace;\n    margin-bottom: 15px; }\n  .about-andesenv .box-info p {\n    font: 100 1em cursive;\n    margin: 0 40px 50px 0; }\n  .about-andesenv .box-info .group-button {\n    text-align: center; }\n  .about-andesenv .box-info .group-button button {\n      text-transform: uppercase;\n      font: 700 1.1em monospace;\n      padding: 10px; }\n  .about-andesenv .box-info .group-button button.cv {\n        color: #69a9ec;\n        border-color: #69a9ec;\n        margin-right: 5%; }\n  .about-andesenv .box-skill {\n    font-family: cursive; }\n  .about-andesenv .box-skill .bar {\n      padding: 2px;\n      margin: 0 0 10px 40px;\n      font-weight: bold; }\n  .about-andesenv .box-skill .bar:after {\n        content: \"\";\n        display: inline-block;\n        padding: 5px 0 5px 0px;\n        border-radius: 15px;\n        background-color: #968b8e; }\n  .about-andesenv .box-skill .bar:nth-last-child(1) {\n        margin-bottom: 0px; }\n  .about-andesenv .box-skill .bar.intermediate::after {\n      width: calc(60% - 10px); }\n  .about-andesenv .box-skill .bar.advanced::after {\n      width: calc(80% - 10px); }\n  .about-andesenv .box-skill .bar.expert::after {\n      width: calc(90% - 10px); }\n  @media (max-width: 880px) {\n  .about-andesenv .group-button {\n    margin-bottom: 60px; }\n  .about-andesenv .box-skill .bar {\n    margin: 0 0 10px 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2Fib3V0L2M6XFxVc2Vyc1xcQW5kZXJzb25cXERvY3VtZW50c1xcUHJvamV0b3NcXHBvcnRmb2xpb1xcc3JjL2FwcFxcaG9tZVxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFzRm5CO0VBekZEO0lBTVEsb0JBQW1CLEVBdUJ0QjtFQTdCTDtNQVNZLDBCQUF5QjtNQUN6QiwwQkFBeUI7TUFFekIsYUFBWSxFQWdCZjtFQTVCVDtRQWVnQixpQkFBZ0IsRUFZbkI7RUEzQmI7VUFrQm9CLG9CQUFtQjtVQUNuQixZQUFXO1VBQ1gsZUFBYztVQUNkLFlBQVcsRUFLZDtFQTFCakI7WUF1QndCLG1CQUFrQjtZQUNsQixZQUFXLEVBQ2Q7RUF6QnJCO0lBaUNZLDBCQUF5QjtJQUN6QixvQkFBbUIsRUFDdEI7RUFuQ1Q7SUFzQ1ksc0JBQXFCO0lBQ3JCLHNCQUFxQixFQUN4QjtFQXhDVDtJQTJDWSxtQkFBa0IsRUFZckI7RUF2RFQ7TUE2Q2dCLDBCQUF5QjtNQUN6QiwwQkFBeUI7TUFDekIsY0FBYSxFQU9oQjtFQXREYjtRQWtEb0IsZUFBYztRQUNkLHNCQUFxQjtRQUNyQixpQkFBZ0IsRUFDbkI7RUFyRGpCO0lBMkRRLHFCQUFvQixFQTZCdkI7RUF4Rkw7TUE4RFksYUFBWTtNQUNaLHNCQUFxQjtNQUNyQixrQkFBaUIsRUFhcEI7RUE3RVQ7UUFtRWdCLFlBQVk7UUFDWixzQkFBcUI7UUFDckIsdUJBQXNCO1FBQ3RCLG9CQUFtQjtRQUNuQiwwQkFBeUIsRUFDNUI7RUF4RWI7UUEyRWdCLG1CQUFrQixFQUNyQjtFQTVFYjtNQWdGWSx3QkFBdUIsRUFDMUI7RUFqRlQ7TUFtRlksd0JBQXVCLEVBQzFCO0VBcEZUO01Bc0ZZLHdCQUF1QixFQUMxQjtFQUlUO0VBQ0k7SUFFUSxvQkFBbUIsRUFDdEI7RUFITDtJQU1RLHFCQUFvQixFQUN2QixFQUFBIiwiZmlsZSI6ImFwcC9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWFuZGVzZW52e1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuXHJcbiAgICAuc29icmV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEwMCAyLjVlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgICAgICAuaG9yaXpvbnRhbC1saW5lIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTM4M2QzO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICYudG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJveC1pbmZve1xyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICBmb250OiAxMDAgMS41ZW0gbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250OiAxMDAgMWVtIGN1cnNpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA0MHB4IDUwcHggMDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuZ3JvdXAtYnV0dG9ue1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBmb250OiA3MDAgMS4xZW0gbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJi5jdntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY5YTllYztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM2OWE5ZWM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYm94LXNraWxse1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG5cclxuICAgICAgICAuYmFye1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggNDBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogIFwiXCI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgIFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk2OGI4ZTsgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOm50aC1sYXN0LWNoaWxkKDEpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFyLmludGVybWVkaWF0ZTo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDYwJSAtIDEwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFyLmFkdmFuY2VkOjphZnRlcntcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoODAlIC0gMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYXIuZXhwZXJ0OjphZnRlcntcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoOTAlIC0gMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODgwcHgpIHtcclxuICAgIC5hYm91dC1hbmRlc2VudntcclxuICAgICAgICAuZ3JvdXAtYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJveC1za2lsbCAuYmFye1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/home/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/home/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/home/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-andesenv\">\r\n\r\n  <div class=\"footer-left\">\r\n\r\n    <h3>Lucas<span>AnDesenv</span>Lima</h3>\r\n\r\n    <p class=\"footer-links\">\r\n      <a href=\"#\">INICIO</a>\r\n      ·\r\n      <a href=\"#\">PORTFÓLIO</a>\r\n      ·\r\n      <a href=\"#\">BIBLIOTECA</a>\r\n      ·\r\n      <a href=\"#\">TRAINNING</a>\r\n      ·\r\n      <a href=\"#\">APLICATIVO</a>\r\n    </p>\r\n\r\n    <p class=\"footer-my-name\">Copyright 2018 &copy; Lucas Anderson S. Lima</p>\r\n\r\n  </div>\r\n\r\n  <div class=\"footer-center\">\r\n\r\n    <div>\r\n      <i class=\"fa fa-map-marker\"></i>\r\n      <p><span>Barra da Tijuca</span> Rio de Janeiro, Brasil</p>\r\n    </div>\r\n\r\n    <div>\r\n      <i class=\"fa fa-phone\"></i>\r\n      <p>21 96700 1399</p>\r\n    </div>\r\n\r\n    <div>\r\n      <i class=\"fa fa-envelope\"></i>\r\n      <p><a href=\"mailto:lucasand96@gmail.com\">lucasand96@gmail.com</a></p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"footer-right\">\r\n\r\n    <p class=\"footer-company-about\">\r\n      <span>\r\n        Redes Sociais:\r\n      </span>\r\n    </p>\r\n\r\n    <div class=\"footer-icons\">\r\n      <a href=\"#\"><i class=\"fab fa-behance\"></i></a>\r\n      <a href=\"#\"><i class=\"fab fa-codepen\"></i></a>\r\n      <a href=\"#\"><i class=\"fab fa-discord\"></i></a>\r\n      <a href=\"#\"><i class=\"fa fa-envelope-square\"></i></a>\r\n      <a href=\"#\"><i class=\"fab fa-github\"></i></a>\r\n      <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\r\n      <a href=\"#\"><i class=\"fab fa-linkedin\"></i></a>\r\n      <a href=\"#\"><i class=\"fab fa-medium\"></i></a>\r\n      <a href=\"#\"><i class=\"fab fa-skype\"></i></a>\r\n      <a href=\"#\"><i class=\"fab fa-stack-overflow\"></i></a>\r\n      <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</footer>"

/***/ }),

/***/ "./src/app/home/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-andesenv {\n  background-color: #000;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  width: 100%;\n  text-align: left;\n  font: bold 16px sans-serif;\n  padding: 55px 50px; }\n  .footer-andesenv .footer-left,\n  .footer-andesenv .footer-center,\n  .footer-andesenv .footer-right {\n    display: inline-block;\n    vertical-align: top; }\n  .footer-andesenv .footer-left {\n    width: 40%; }\n  .footer-andesenv h3 {\n    color: #ffffff;\n    font: normal 2em 'Cookie', cursive;\n    margin: 0; }\n  .footer-andesenv h3 span {\n      color: #5383d3; }\n  .footer-andesenv .footer-links {\n    color: #ffffff;\n    margin: 20px 0 12px;\n    padding: 0;\n    font-size: 18px; }\n  .footer-andesenv .footer-links a {\n      display: inline-block;\n      line-height: 1.8;\n      text-decoration: none;\n      color: inherit; }\n  .footer-andesenv .footer-my-name {\n    color: #8f9296;\n    font-size: 14px;\n    font-weight: normal;\n    margin: 2.5rem 0; }\n  .footer-andesenv .footer-center {\n    width: 35%; }\n  .footer-andesenv .footer-center p {\n      display: inline-block;\n      color: #ffffff;\n      vertical-align: middle;\n      margin: 0; }\n  .footer-andesenv .footer-center p span {\n        display: block;\n        font-weight: normal;\n        font-size: 14px;\n        line-height: 2; }\n  .footer-andesenv .footer-center p a {\n        color: #5383d3;\n        text-decoration: none; }\n  .footer-andesenv i {\n    background-color: #33383b;\n    color: #ffffff;\n    font-size: 25px;\n    width: 38px;\n    height: 38px;\n    border-radius: 50%;\n    text-align: center;\n    line-height: 42px;\n    margin: 10px 15px;\n    vertical-align: middle; }\n  .footer-andesenv i.fa-envelope {\n      font-size: 17px;\n      line-height: 38px; }\n  .footer-andesenv .footer-right {\n    width: 20%; }\n  .footer-andesenv .footer-company-about {\n    line-height: 20px;\n    color: #92999f;\n    font-size: 13px;\n    font-weight: normal;\n    margin: 0; }\n  .footer-andesenv .footer-company-about span {\n      display: block;\n      color: #5383d3;\n      font-size: 1rem;\n      font-weight: bold;\n      margin-bottom: 20px; }\n  .footer-andesenv .footer-icons {\n    margin-top: 25px; }\n  @media (max-width: 880px) {\n  .footer-andesenv {\n    font: bold 14px sans-serif; }\n    .footer-andesenv .footer-left,\n    .footer-andesenv .footer-center,\n    .footer-andesenv .footer-right {\n      display: block;\n      margin-bottom: 40px;\n      text-align: center;\n      width: 100%; }\n    .footer-andesenv .footer-center i {\n      margin-left: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2Zvb3Rlci9jOlxcVXNlcnNcXEFuZGVyc29uXFxEb2N1bWVudHNcXFByb2pldG9zXFxwb3J0Zm9saW9cXHNyYy9hcHBcXGhvbWVcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiYXBwL2hvbWUvZm9vdGVyL2M6XFxVc2Vyc1xcQW5kZXJzb25cXERvY3VtZW50c1xcUHJvamV0b3NcXHBvcnRmb2xpb1xcc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsdUJDSG1CO0VESW5CLDRDQUEyQztFQUMzQyx1QkFBc0I7RUFDdEIsWUFBVztFQUNYLGlCQUFnQjtFQUNoQiwyQkFBMEI7RUFFMUIsbUJBQWtCLEVBNkdsQjtFQXJIRDs7O0lBYVEsc0JBQXFCO0lBQ3JCLG9CQUFtQixFQUN0QjtFQWZMO0lBa0JRLFdBQVUsRUFDYjtFQW5CTDtJQXNCUSxlQUFlO0lBQ2YsbUNBQWtDO0lBQ2xDLFVBQVMsRUFLWjtFQTdCTDtNQTJCWSxlQUFlLEVBQ2xCO0VBNUJUO0lBZ0NRLGVBQWU7SUFDZixvQkFBbUI7SUFDbkIsV0FBVTtJQUVWLGdCQUFlLEVBUWxCO0VBNUNMO01BdUNZLHNCQUFvQjtNQUNwQixpQkFBZ0I7TUFDaEIsc0JBQXFCO01BQ3JCLGVBQWUsRUFDbEI7RUEzQ1Q7SUErQ1EsZUFBZTtJQUNmLGdCQUFlO0lBQ2Ysb0JBQW1CO0lBQ25CLGlCQUFnQixFQUNuQjtFQW5ETDtJQXNEUSxXQUFVLEVBb0JiO0VBMUVMO01BeURZLHNCQUFxQjtNQUNyQixlQUFjO01BQ2QsdUJBQXNCO01BQ3RCLFVBQVEsRUFhWDtFQXpFVDtRQStEZ0IsZUFBYztRQUNkLG9CQUFtQjtRQUNuQixnQkFBYztRQUNkLGVBQWEsRUFDaEI7RUFuRWI7UUFzRWdCLGVBQWU7UUFDZixzQkFBcUIsRUFDeEI7RUF4RWI7SUE2RVEsMEJBQTBCO0lBQzFCLGVBQWM7SUFDZCxnQkFBZTtJQUNmLFlBQVc7SUFDWCxhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsa0JBQWlCO0lBQ2pCLHVCQUFzQixFQU16QjtFQTVGTDtNQXlGWSxnQkFBZTtNQUNmLGtCQUFpQixFQUNwQjtFQTNGVDtJQStGUSxXQUFVLEVBQ2I7RUFoR0w7SUFtR1Esa0JBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZTtJQUNmLG9CQUFtQjtJQUNuQixVQUFTLEVBU1o7RUFoSEw7TUEwR1ksZUFBYztNQUNkLGVBQWU7TUFDZixnQkFBZTtNQUNmLGtCQUFpQjtNQUNqQixvQkFBbUIsRUFDdEI7RUEvR1Q7SUFtSFEsaUJBQWdCLEVBQ25CO0VBSUw7RUFFQztJQUNPLDJCQUEwQixFQWNoQztJQWZEOzs7TUFNVyxlQUFjO01BQ2Qsb0JBQW1CO01BQ25CLG1CQUFrQjtNQUNsQixZQUFXLEVBQ2Q7SUFWUjtNQWFXLGVBQWMsRUFDakIsRUFBQSIsImZpbGUiOiJhcHAvaG9tZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uZm9vdGVyLWFuZGVzZW52e1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGZvbnQ6IGJvbGQgMTZweCBzYW5zLXNlcmlmO1xyXG5cclxuXHRwYWRkaW5nOiA1NXB4IDUwcHg7XHJcbiAgICBcclxuICAgIC5mb290ZXItbGVmdCxcclxuICAgIC5mb290ZXItY2VudGVyLFxyXG4gICAgLmZvb3Rlci1yaWdodHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWxlZnR7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuXHJcbiAgICBoM3tcclxuICAgICAgICBjb2xvcjogICNmZmZmZmY7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIDJlbSAnQ29va2llJywgY3Vyc2l2ZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAgIzUzODNkMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1saW5rc3tcclxuICAgICAgICBjb2xvcjogICNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAgaW5oZXJpdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1teS1uYW1le1xyXG4gICAgICAgIGNvbG9yOiAgIzhmOTI5NjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW46IDIuNXJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItY2VudGVye1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG5cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAgIzUzODNkMztcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzMzMzgzYjtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDM4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAgICAgJi5mYS1lbnZlbG9wZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1yaWdodHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItY29tcGFueS1hYm91dHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjogICM5Mjk5OWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICAjNTM4M2QzO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWljb25ze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODgwcHgpIHtcclxuXHJcblx0LmZvb3Rlci1hbmRlc2VudntcclxuICAgICAgICBmb250OiBib2xkIDE0cHggc2Fucy1zZXJpZjtcclxuICAgICAgICBcclxuICAgICAgICAuZm9vdGVyLWxlZnQsXHJcbiAgICAgICAgLmZvb3Rlci1jZW50ZXIsXHJcbiAgICAgICAgLmZvb3Rlci1yaWdodHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyLWNlbnRlciBpe1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcblx0fVxyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjMDAwO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/footer/footer.component.ts ***!
  \*************************************************/
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/home/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/home/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-intro></app-intro>\r\n\r\n<app-menu></app-menu>\r\n\r\n<app-about></app-about>\r\n\r\n<app-professional></app-professional>\r\n\r\n<app-portfolio></app-portfolio>\r\n\r\n<app-trainning></app-trainning>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/home/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/home/intro/intro.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/home/about/about.component.ts");
/* harmony import */ var _professional_professional_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./professional/professional.component */ "./src/app/home/professional/professional.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/home/portfolio/portfolio.component.ts");
/* harmony import */ var _trainning_trainning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trainning/trainning.component */ "./src/app/home/trainning/trainning.component.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _professional_professional_component__WEBPACK_IMPORTED_MODULE_7__["ProfessionalComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                _trainning_trainning_component__WEBPACK_IMPORTED_MODULE_9__["TrainningComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__["SwiperModule"]
            ],
            exports: [
                _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/intro/intro.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/intro/intro.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"intro-andesenv\">\r\n  <h1 class=\"name-andesenv\">Lucas <span>Anderson</span> Lima</h1>\r\n  <h3 class=\"profission-andesenv\">Desenvolvimento Front End</h3>\r\n  <hr class=\"intro-divider\">\r\n  <div class=\"social-andesenv\">\r\n    <a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fab fa-github\"></i> GITHUB</a>\r\n    <a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fab fa-linkedin\"></i> Linkedin</a>\r\n    <a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fab fa-twitter\"></i> Twitter</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/intro/intro.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/intro/intro.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-andesenv {\n  height: 95vh;\n  width: 100%;\n  background-image: url('showcase_bg.jpg');\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  text-align: center;\n  padding: 20% 0; }\n  .intro-andesenv h1 {\n    font: 100 4em cursive;\n    margin: 0 0 15px 0; }\n  .intro-andesenv h1 span {\n      color: #5383d3; }\n  .intro-andesenv .intro-divider {\n    width: 20vw;\n    border: 1px solid #8d3601; }\n  .intro-andesenv h3 {\n    font: 100 2em monospace;\n    text-shadow: 2px 2px 3px black; }\n  .intro-andesenv .social-andesenv a {\n    text-decoration: none;\n    color: white;\n    text-transform: uppercase;\n    margin: 0 5px;\n    font-family: monospace;\n    background: #393a42;\n    border: 1px solid #403f3f; }\n  @media (max-width: 880px) {\n  .intro-andesenv {\n    padding-top: 40% 0 0 0; } }\n  @media (min-width: 890px) and (max-width: 1240px) {\n  .intro-andesenv {\n    padding: 50% 0 0 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2ludHJvL2M6XFxVc2Vyc1xcQW5kZXJzb25cXERvY3VtZW50c1xcUHJvamV0b3NcXHBvcnRmb2xpb1xcc3JjL2FwcFxcaG9tZVxcaW50cm9cXGludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLFlBQVc7RUFFWCx5Q0FBd0Q7RUFDeEQsNkJBQTRCO0VBQzVCLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsdUJBQXNCO0VBRXRCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsZUFBYyxFQW1DakI7RUEvQ0Q7SUFlUSxzQkFBcUI7SUFFckIsbUJBQWtCLEVBS3JCO0VBdEJMO01Bb0JZLGVBQWMsRUFDakI7RUFyQlQ7SUF5QlEsWUFBVztJQUNYLDBCQUF5QixFQUM1QjtFQTNCTDtJQThCUSx3QkFBdUI7SUFDdkIsK0JBQXNDLEVBQ3pDO0VBaENMO0lBb0NZLHNCQUFxQjtJQUNyQixhQUFZO0lBQ1osMEJBQXlCO0lBQ3pCLGNBQWE7SUFFYix1QkFBc0I7SUFFdEIsb0JBQW1CO0lBQ25CLDBCQUNKLEVBQUM7RUFLVDtFQUNJO0lBQ0ksdUJBQXNCLEVBQ3pCLEVBQUE7RUFHTDtFQUNJO0lBQ0ksbUJBQWtCLEVBQ3JCLEVBQUEiLCJmaWxlIjoiYXBwL2hvbWUvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm8tYW5kZXNlbnYge1xyXG4gICAgaGVpZ2h0OiA5NXZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3Nob3djYXNlX2JnLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMCUgMDtcclxuXHJcbiAgICBoMXtcclxuICAgICAgICBmb250OiAxMDAgNGVtIGN1cnNpdmU7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMCAwIDE1cHggMDtcclxuXHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6ICM1MzgzZDM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbnRyby1kaXZpZGVyIHtcclxuICAgICAgICB3aWR0aDogMjB2dztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOGQzNjAxO1xyXG4gICAgfVxyXG5cclxuICAgIGgze1xyXG4gICAgICAgIGZvbnQ6IDEwMCAyZW0gbW9ub3NwYWNlO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsMCwwLDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwtYW5kZXNlbnZ7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcblxyXG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM5M2E0MjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQwM2YzZlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xyXG4gICAgLmludHJvLWFuZGVzZW52e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MCUgMCAwIDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4OTBweCkgYW5kIChtYXgtd2lkdGg6IDEyNDBweCkge1xyXG4gICAgLmludHJvLWFuZGVzZW52e1xyXG4gICAgICAgIHBhZGRpbmc6IDUwJSAwIDAgMDtcclxuICAgIH1cclxufSAgICJdfQ== */"

/***/ }),

/***/ "./src/app/home/intro/intro.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/intro/intro.component.ts ***!
  \***********************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
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

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/home/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/home/intro/intro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/home/menu/menu.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/menu/menu.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"menu-andesenv\" id=\"navbar\">\r\n  <a href=\"#\">Inicio</a>\r\n  <a href=\"#\">Profissional</a>\r\n  <a href=\"#\">Portfólio</a>\r\n  <a href=\"#\">Trainning</a>\r\n  <a href=\"#\">Biblioteca</a>\r\n  <a href=\"#\">Aplicativo</a>\r\n  <a href=\"#\">Contato</a>\r\n</nav>    "

/***/ }),

/***/ "./src/app/home/menu/menu.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/menu/menu.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-andesenv {\n  background: #000;\n  display: block;\n  width: -webkit-fill-available;\n  text-align: center; }\n  .menu-andesenv.fixed {\n    position: fixed;\n    top: 0;\n    z-index: 3; }\n  .menu-andesenv a {\n    display: inline-block;\n    margin: 0 1rem;\n    padding: 15px 16px;\n    color: #ffffff;\n    font: bold 1.3em monospace;\n    text-transform: uppercase;\n    text-decoration: none; }\n  .menu-andesenv a:active, .menu-andesenv a:hover {\n      border-radius: 1em 2em; }\n  .menu-andesenv a:hover {\n      background: #545454; }\n  .menu-andesenv a:active {\n      background: #5383d3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL21lbnUvYzpcXFVzZXJzXFxBbmRlcnNvblxcRG9jdW1lbnRzXFxQcm9qZXRvc1xccG9ydGZvbGlvXFxzcmMvYXBwXFxob21lXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwiYXBwL2hvbWUvbWVudS9jOlxcVXNlcnNcXEFuZGVyc29uXFxEb2N1bWVudHNcXFByb2pldG9zXFxwb3J0Zm9saW9cXHNyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQ0hnQjtFREloQixlQUFjO0VBQ2QsOEJBQTZCO0VBRTdCLG1CQUFrQixFQStCckI7RUFwQ0Q7SUFRUSxnQkFBZTtJQUNmLE9BQU07SUFDTixXQUFVLEVBQ2I7RUFYTDtJQWNRLHNCQUFxQjtJQUNyQixlQUFjO0lBQ2QsbUJBQWtCO0lBRWxCLGVBQWM7SUFFZCwyQkFBMEI7SUFDMUIsMEJBQXlCO0lBQ3pCLHNCQUFxQixFQWF4QjtFQW5DTDtNQTBCWSx1QkFBc0IsRUFDekI7RUEzQlQ7TUE2Qlksb0JBQW1CLEVBQ3RCO0VBOUJUO01BaUNZLG9CQUFtQixFQUN0QiIsImZpbGUiOiJhcHAvaG9tZS9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5tZW51LWFuZGVzZW52e1xyXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmLmZpeGVke1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICAgICAgdG9wOiAwOyBcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxNnB4O1xyXG5cclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgZm9udDogYm9sZCAxLjNlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbSAyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NDU0NTQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzUzODNkMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzAwMDtcclxuIl19 */"

/***/ }),

/***/ "./src/app/home/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.onWindowScroll = function () {
        var navbar = document.getElementById('navbar');
        var sticky = navbar.offsetTop;
        if (window.pageYOffset > sticky) {
            navbar.classList.add('fixed');
        }
        else {
            navbar.classList.remove('fixed');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MenuComponent.prototype, "onWindowScroll", null);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/home/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/home/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/home/portfolio/portfolio.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/portfolio/portfolio.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"portfolio-andesenv\">\r\n  <div class=\"container\">\r\n    <div class=\"row sobre\">\r\n      <h2>\r\n        PORTFÓLIO\r\n        <div class=\"horizontal-line\">\r\n          <div class=\"top\"></div>\r\n          <div class=\"bottom\"></div>\r\n        </div>\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <swiper [config]=\"config\" [(index)]=\"index\">\r\n      <div class=\"big swiper-slide\" data-swiper-autoplay=\"200\">\r\n        <div class=\"swiper-zoom-container\">\r\n          <img src=\"../../../assets/login.png\" alt=\"\" srcset=\"\" class=\"mobile\">\r\n        </div>\r\n      </div>\r\n      <div class=\"big swiper-slide\">\r\n        <div class=\"swiper-zoom-container\">\r\n          <img src=\"../../../assets/cursos-mobile.png\" alt=\"\" srcset=\"\" class=\"mobile\">\r\n        </div>\r\n      </div>\r\n      <div class=\"big swiper-slide\">\r\n        <div class=\"swiper-zoom-container\">\r\n          <img src=\"../../../assets/criar-curso-mobile.png\" alt=\"\" srcset=\"\" class=\"mobile\">\r\n        </div>\r\n      </div>\r\n    </swiper>\r\n\r\n    <h6>Ver Mais Projetos</h6>\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/home/portfolio/portfolio.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/portfolio/portfolio.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-andesenv {\n  color: #bbb;\n  background: #151515;\n  padding: 100px 0; }\n  .portfolio-andesenv .sobre {\n    margin-bottom: 80px; }\n  .portfolio-andesenv .sobre h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      margin: auto; }\n  .portfolio-andesenv .sobre h2 .horizontal-line {\n        margin-top: 15px; }\n  .portfolio-andesenv .sobre h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .portfolio-andesenv .sobre h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .portfolio-andesenv .swiper-slide-active,\n  .portfolio-andesenv .swiper-slide,\n  .portfolio-andesenv h6 {\n    text-align: center; }\n  .portfolio-andesenv img.mobile {\n    max-width: 75%; }\n  .portfolio-andesenv h6 {\n    font: 700 1.3em cursive;\n    cursor: pointer;\n    margin: 5% 0 0 0; }\n  @media (max-width: 880px) {\n  .portfolio-andesenv img.mobile {\n    max-width: 100%; }\n  .portfolio-andesenv h6 {\n    margin: 10% 0 0 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3BvcnRmb2xpby9jOlxcVXNlcnNcXEFuZGVyc29uXFxEb2N1bWVudHNcXFByb2pldG9zXFxwb3J0Zm9saW9cXHNyYy9hcHBcXGhvbWVcXHBvcnRmb2xpb1xccG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUEyQ25CO0VBOUNEO0lBTVEsb0JBQW1CLEVBdUJ0QjtFQTdCTDtNQVNZLDBCQUF5QjtNQUN6QiwwQkFBeUI7TUFFekIsYUFBWSxFQWdCZjtFQTVCVDtRQWVnQixpQkFBZ0IsRUFZbkI7RUEzQmI7VUFrQm9CLG9CQUFtQjtVQUNuQixZQUFXO1VBQ1gsZUFBYztVQUNkLFlBQVcsRUFLZDtFQTFCakI7WUF1QndCLG1CQUFrQjtZQUNsQixZQUFXLEVBQ2Q7RUF6QnJCOzs7SUFrQ1EsbUJBQWtCLEVBQ3JCO0VBbkNMO0lBc0NRLGVBQWMsRUFDakI7RUF2Q0w7SUEwQ1Esd0JBQXVCO0lBQ3ZCLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ25CO0VBR0w7RUFDSTtJQUVRLGdCQUFlLEVBQ2xCO0VBSEw7SUFNUSxrQkFBaUIsRUFDcEIsRUFBQSIsImZpbGUiOiJhcHAvaG9tZS9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcnRmb2xpby1hbmRlc2VudntcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgYmFja2dyb3VuZDogIzE1MTUxNTtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcblxyXG4gICAgLnNvYnJle1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250OiAxMDAgMi41ZW0gbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgLmhvcml6b250YWwtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzUzODNkMztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzdweDtcclxuICAgICAgICAgICAgICAgICAgICAmLnRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3dpcGVyLXNsaWRlLWFjdGl2ZSxcclxuICAgIC5zd2lwZXItc2xpZGUsXHJcbiAgICBoNiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbWcubW9iaWxleyBcclxuICAgICAgICBtYXgtd2lkdGg6IDc1JTtcclxuICAgIH1cclxuXHJcbiAgICBoNntcclxuICAgICAgICBmb250OiA3MDAgMS4zZW0gY3Vyc2l2ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA1JSAwIDAgMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcbiAgICAucG9ydGZvbGlvLWFuZGVzZW52e1xyXG4gICAgICAgIGltZy5tb2JpbGV7IFxyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgbWFyZ2luOiAxMCUgMCAwIDA7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/portfolio/portfolio.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/portfolio/portfolio.component.ts ***!
  \*******************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
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

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.config = {
            direction: 'horizontal',
            slidesPerView: 3,
            keyboard: true,
            mousewheel: true,
            navigation: true,
            spaceBetween: 20,
            centeredSlides: true,
            autoplay: true,
        };
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/home/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/home/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/home/professional/professional.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/professional/professional.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"professional-andesenv\">\r\n  <div class=\"container\">\r\n    <div class=\"row about\">\r\n      <h2>\r\n        CARREIRA PROFISSIONAL\r\n        <div class=\"horizontal-line\">\r\n          <div class=\"top\"></div>\r\n          <div class=\"bottom\"></div>\r\n        </div>\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"main-timeline\">\r\n          <div class=\"timeline\">\r\n            <div class=\"timeline-icon\"><i class=\"fas fa-user-tie\"></i></div>\r\n            <span class=\"year\">2017 - Atual</span>\r\n            <div class=\"timeline-content\">\r\n              <h5 class=\"title\">Desenvolvedor Front End</h5>\r\n              <p class=\"description\">\r\n                <li>CodeOwner | DevOps</li>\r\n                <li>Modelagem de interface web/mobile e Desenvolvimento de componentes mobile;</li>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"timeline\">\r\n            <div class=\"timeline-icon\"><i class=\"fas fa-code\"></i></div>\r\n            <span class=\"year\">2017 - 2018</span>\r\n            <div class=\"timeline-content\">\r\n              <h5 class=\"title\">Freelancer</h5>\r\n              <p class=\"description\">\r\n                <li>Desenvolvedor Front End</li>\r\n                <li>SEO | Web Mobile</li>\r\n                <li>Web Performance e PageSpeed Insights/Ninja</li>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"timeline\">\r\n            <div class=\"timeline-icon\"><i class=\"fas fa-address-book\"></i></div>\r\n            <span class=\"year\">2015 - 2016</span>\r\n            <div class=\"timeline-content\">\r\n              <h5 class=\"title\">Membro do Diretório Acadêmico</h5>\r\n              <p class=\"description\">\r\n                <li>Organização de atividades inclusivas para 'calouros'</li>\r\n                <li>Levantamento de ideias para melhor convívio entre os estudantes universitários</li>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"timeline\">\r\n            <div class=\"timeline-icon\"><i class=\"fas fa-graduation-cap\"></i></div>\r\n            <span class=\"year\">2014</span>\r\n            <div class=\"timeline-content\">\r\n              <h5 class=\"title\">Graduação em Engenharia da Computação</h5>\r\n              <p class=\"description\">\r\n                <li>Universidade Estadual de Feira de Santana</li>\r\n                <li>Preparo para atuar nas áreas de hardware e software</li>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/professional/professional.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/professional/professional.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".professional-andesenv {\n  color: #bbb;\n  background: #202020;\n  padding: 100px 0; }\n  .professional-andesenv .about {\n    margin-bottom: 80px; }\n  .professional-andesenv .about h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      text-align: center;\n      margin: auto; }\n  .professional-andesenv .about h2 .horizontal-line {\n        margin-top: 15px; }\n  .professional-andesenv .about h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .professional-andesenv .about h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .professional-andesenv .main-timeline {\n    overflow: hidden;\n    position: relative; }\n  .professional-andesenv .main-timeline .timeline {\n      width: 50%;\n      float: left;\n      position: relative; }\n  .professional-andesenv .main-timeline .timeline:before, .professional-andesenv .main-timeline .timeline:after {\n        content: \"\";\n        display: block;\n        clear: both; }\n  .professional-andesenv .main-timeline .timeline:before {\n        position: absolute;\n        width: 10px;\n        height: 90%;\n        top: 10%;\n        right: -20px;\n        background: #bbb; }\n  .professional-andesenv .main-timeline .timeline:last-child:before {\n        height: 0; }\n  .professional-andesenv .main-timeline .timeline-icon {\n      width: 80px;\n      height: 80px;\n      border-radius: 50%;\n      overflow: hidden;\n      background: #bbb;\n      text-align: center;\n      position: absolute;\n      top: 0;\n      right: -40px;\n      z-index: 2; }\n  .professional-andesenv .main-timeline .timeline-icon i {\n        font-size: 35px;\n        color: #202020;\n        line-height: 80px;\n        z-index: 1;\n        position: relative; }\n  .professional-andesenv .main-timeline .year {\n      display: block;\n      padding: 0 60px 0 30px;\n      font: 700 2em monospace;\n      color: #303a3b;\n      text-align: right;\n      border-bottom: 2px solid #303a3b;\n      position: relative; }\n  .professional-andesenv .main-timeline .year:after {\n        content: \"\";\n        border-left: 10px solid #303a3b;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        position: absolute;\n        bottom: -11px;\n        left: 0px; }\n  .professional-andesenv .main-timeline .timeline:last-child .timeline-content:after, .professional-andesenv .main-timeline .timeline:last-child .timeline-content:before {\n      width: 0;\n      height: 0; }\n  .professional-andesenv .main-timeline .timeline-content {\n      padding: 18px 60px 18px 40px;\n      text-align: right;\n      position: relative;\n      z-index: 1; }\n  .professional-andesenv .main-timeline .timeline-content .title {\n        font: 700 1.3em cursive;\n        color: #5383d3;\n        margin-top: 0; }\n  .professional-andesenv .main-timeline .timeline-content .description {\n        font: 300 1em monospace;\n        color: #b1b1b1;\n        line-height: 25px; }\n  .professional-andesenv .main-timeline .timeline-content .description li {\n          list-style-type: none; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2) {\n      margin-top: 140px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(even) {\n      margin-bottom: 80px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(odd) {\n      margin: -140px 0 0; }\n  .professional-andesenv .main-timeline .timeline:first-child, .professional-andesenv .main-timeline .timeline:last-child:nth-child(even) {\n      margin: 0px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-icon, .professional-andesenv .main-timeline .timeline:nth-child(2n):before {\n      right: auto;\n      left: -20px;\n      background: #bbb; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-icon {\n      left: -40px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .year {\n      padding: 0 30px 0 60px;\n      text-align: left; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .year:before {\n        left: auto;\n        right: 3px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .year:after {\n        border-left: none;\n        border-right: 10px solid #303a3b;\n        right: 0px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-content {\n      padding: 18px 40px 18px 60px;\n      text-align: left; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-content:before {\n        left: -95px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-content:after {\n        left: 15px; }\n  @media only screen and (max-width: 990px) {\n    .professional-andesenv .main-timeline .timeline {\n      width: 100%; }\n      .professional-andesenv .main-timeline .timeline:nth-child(even), .professional-andesenv .main-timeline .timeline:nth-child(odd) {\n        margin: 0; }\n      .professional-andesenv .main-timeline .timeline:before, .professional-andesenv .main-timeline .timeline:nth-child(2n):before {\n        width: 10px;\n        height: 100%;\n        left: 25px; }\n      .professional-andesenv .main-timeline .timeline .timeline-icon {\n        left: 0; }\n      .professional-andesenv .main-timeline .timeline .year {\n        text-align: left;\n        padding: 0 30px 0 100px; }\n        .professional-andesenv .main-timeline .timeline .year:before {\n          left: auto;\n          right: 4px; }\n        .professional-andesenv .main-timeline .timeline .year:after {\n          left: auto;\n          right: 0px;\n          border-right: 10px solid #303a3b;\n          border-left: none; }\n      .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-icon {\n        left: 0; }\n      .professional-andesenv .main-timeline .timeline:nth-child(2n) .year {\n        text-align: left;\n        padding: 0 30px 0 100px; }\n      .professional-andesenv .main-timeline .timeline:nth-child(2n) .year:before {\n        left: auto;\n        right: 4px; }\n      .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-content {\n        text-align: left;\n        padding: 18px 40px 18px 100px; }\n      .professional-andesenv .main-timeline .timeline .timeline-content {\n        text-align: left;\n        padding: 18px 40px 18px 100px; }\n        .professional-andesenv .main-timeline .timeline .timeline-content:after, .professional-andesenv .main-timeline .timeline .timeline-content:before {\n          width: 0;\n          height: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3Byb2Zlc3Npb25hbC9jOlxcVXNlcnNcXEFuZGVyc29uXFxEb2N1bWVudHNcXFByb2pldG9zXFxwb3J0Zm9saW9cXHNyYy9hcHBcXGhvbWVcXHByb2Zlc3Npb25hbFxccHJvZmVzc2lvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUF3UW5CO0VBM1FEO0lBTVEsb0JBQW1CLEVBeUJ0QjtFQS9CTDtNQVNZLDBCQUF5QjtNQUN6QiwwQkFBeUI7TUFDekIsbUJBQWtCO01BRWxCLGFBQVksRUFpQmY7RUE5QlQ7UUFnQmdCLGlCQUFnQixFQWFuQjtFQTdCYjtVQW1Cb0Isb0JBQW1CO1VBQ25CLFlBQVc7VUFDWCxlQUFjO1VBQ2QsWUFBVyxFQU1kO0VBNUJqQjtZQXlCd0IsbUJBQWtCO1lBQ2xCLFlBQVcsRUFDZDtFQTNCckI7SUFrQ1EsaUJBQWdCO0lBQ2hCLG1CQUFrQixFQWlLckI7RUFwTUw7TUFzQ1ksV0FBVTtNQUNWLFlBQVc7TUFDWCxtQkFBa0IsRUFzQnJCO0VBOURUO1FBNENnQixZQUFXO1FBQ1gsZUFBYztRQUNkLFlBQVcsRUFDZDtFQS9DYjtRQWtEZ0IsbUJBQWtCO1FBQ2xCLFlBQVc7UUFDWCxZQUFXO1FBQ1gsU0FBUTtRQUNSLGFBQVk7UUFFWixpQkFBZ0IsRUFDbkI7RUF6RGI7UUE0RGdCLFVBQVMsRUFDWjtFQTdEYjtNQWlFWSxZQUFXO01BQ1gsYUFBWTtNQUNaLG1CQUFrQjtNQUNsQixpQkFBZ0I7TUFFaEIsaUJBQWdCO01BQ2hCLG1CQUFrQjtNQUVsQixtQkFBa0I7TUFDbEIsT0FBTTtNQUNOLGFBQVk7TUFDWixXQUFVLEVBVWI7RUF0RlQ7UUErRWdCLGdCQUFlO1FBQ2YsZUFBYztRQUNkLGtCQUFpQjtRQUVqQixXQUFVO1FBQ1YsbUJBQWtCLEVBQ3JCO0VBckZiO01BeUZZLGVBQWM7TUFDZCx1QkFBc0I7TUFDdEIsd0JBQXVCO01BRXZCLGVBQWM7TUFDZCxrQkFBaUI7TUFDakIsaUNBQWdDO01BQ2hDLG1CQUFrQixFQVdyQjtFQTNHVDtRQW1HZ0IsWUFBVztRQUNYLGdDQUErQjtRQUMvQixtQ0FBa0M7UUFDbEMsc0NBQXFDO1FBQ3JDLG1CQUFrQjtRQUNsQixjQUFhO1FBQ2IsVUFBUyxFQUNaO0VBMUdiO01BK0dnQixTQUFRO01BQ1IsVUFBUyxFQUNaO0VBakhiO01BcUhZLDZCQUE0QjtNQUM1QixrQkFBaUI7TUFDakIsbUJBQWtCO01BQ2xCLFdBQVUsRUFpQmI7RUF6SVQ7UUEySGdCLHdCQUF1QjtRQUN2QixlQUFjO1FBQ2QsY0FBYSxFQUNoQjtFQTlIYjtRQWlJZ0Isd0JBQXVCO1FBQ3ZCLGVBQWM7UUFDZCxrQkFBaUIsRUFLcEI7RUF4SWI7VUFzSW9CLHNCQUFxQixFQUN4QjtFQXZJakI7TUE2SWdCLGtCQUFpQixFQUNwQjtFQTlJYjtNQWlKZ0Isb0JBQW1CLEVBQ3RCO0VBbEpiO01BcUpnQixtQkFBa0IsRUFDckI7RUF0SmI7TUF5SmdCLFlBQVcsRUFDZDtFQTFKYjtNQThKb0IsWUFBVztNQUNYLFlBQVc7TUFDWCxpQkFBZ0IsRUFDbkI7RUFqS2pCO01Bb0tvQixZQUFXLEVBQ2Q7RUFyS2pCO01Bd0tvQix1QkFBc0I7TUFDdEIsaUJBQWdCLEVBWW5CO0VBckxqQjtRQTRLd0IsV0FBVTtRQUNWLFdBQVUsRUFDYjtFQTlLckI7UUFpTHdCLGtCQUFpQjtRQUNqQixpQ0FBZ0M7UUFDaEMsV0FBVSxFQUNiO0VBcExyQjtNQXdMb0IsNkJBQTRCO01BQzVCLGlCQUFnQixFQVFuQjtFQWpNakI7UUE0THdCLFlBQVcsRUFDZDtFQTdMckI7UUErTHdCLFdBQVUsRUFDYjtFQU1mO0lBdE1OO01BeU1nQixZQUFXLEVBK0RkO01BeFFiO1FBNE1vQixVQUFTLEVBQ1o7TUE3TWpCO1FBZ05vQixZQUFXO1FBQ1gsYUFBWTtRQUNaLFdBQVUsRUFDYjtNQW5OakI7UUFzTm9CLFFBQU8sRUFDVjtNQXZOakI7UUEwTm9CLGlCQUFnQjtRQUNoQix3QkFBdUIsRUFhMUI7UUF4T2pCO1VBOE53QixXQUFVO1VBQ1YsV0FBVSxFQUNiO1FBaE9yQjtVQW1Pd0IsV0FBVTtVQUNWLFdBQVU7VUFDVixpQ0FBZ0M7VUFDaEMsa0JBQWlCLEVBQ3BCO01Bdk9yQjtRQTRPd0IsUUFBTyxFQUNWO01BN09yQjtRQWdQd0IsaUJBQWdCO1FBQ2hCLHdCQUF1QixFQUMxQjtNQWxQckI7UUFzUG9CLFdBQVU7UUFDVixXQUFVLEVBQ2I7TUF4UGpCO1FBMlBvQixpQkFBZ0I7UUFDaEIsOEJBQTZCLEVBQ2hDO01BN1BqQjtRQWdRb0IsaUJBQWdCO1FBQ2hCLDhCQUE2QixFQU1oQztRQXZRakI7VUFvUXdCLFNBQVE7VUFDUixVQUFTLEVBQ1osRUFBQSIsImZpbGUiOiJhcHAvaG9tZS9wcm9mZXNzaW9uYWwvcHJvZmVzc2lvbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2Zlc3Npb25hbC1hbmRlc2VudntcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgYmFja2dyb3VuZDogIzIwMjAyMDtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcblxyXG4gICAgLmFib3V0e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250OiAxMDAgMi41ZW0gbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgICAgICAuaG9yaXpvbnRhbC1saW5lIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTM4M2QzO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3N3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLnRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLXRpbWVsaW5lIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLnRpbWVsaW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMCU7ICAgXHJcbiAgICAgICAgICAgICAgICByaWdodDogLTIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2JiYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50aW1lbGluZS1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2JiYjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnllYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogMCA2MHB4IDAgMzBweDtcclxuICAgICAgICAgICAgZm9udDogNzAwIDJlbSBtb25vc3BhY2U7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogIzMwM2EzYjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzAzYTNiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzMwM2EzYjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTFweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbWVsaW5lOmxhc3QtY2hpbGQgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDYwcHggMThweCA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDcwMCAxLjNlbSBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1MzgzZDM7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udDogMzAwIDFlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2IxYjFiMTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAudGltZWxpbmUge1xyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IC0xNDBweCAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQsICY6bGFzdC1jaGlsZDpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICAgICAgICAgICAgICAudGltZWxpbmUtaWNvbiwgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiYmI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpbWVsaW5lLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC55ZWFyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHggMCA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICMzMDNhM2I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDQwcHggMThweCA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTk1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgICAgICAubWFpbi10aW1lbGluZSB7XHJcbiAgICAgICAgICAgIC50aW1lbGluZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKSwgJjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6YmVmb3JlLCAmOm50aC1jaGlsZCgybik6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGltZWxpbmUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAueWVhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHggMCAxMDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjMzAzYTNiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAudGltZWxpbmUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnllYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHggMCAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pIC55ZWFyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDJuKSAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDQwcHggMThweCAxMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDQwcHggMThweCAxMDBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIsICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/professional/professional.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/professional/professional.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfessionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalComponent", function() { return ProfessionalComponent; });
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

var ProfessionalComponent = /** @class */ (function () {
    function ProfessionalComponent() {
    }
    ProfessionalComponent.prototype.ngOnInit = function () {
    };
    ProfessionalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-professional',
            template: __webpack_require__(/*! ./professional.component.html */ "./src/app/home/professional/professional.component.html"),
            styles: [__webpack_require__(/*! ./professional.component.scss */ "./src/app/home/professional/professional.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfessionalComponent);
    return ProfessionalComponent;
}());



/***/ }),

/***/ "./src/app/home/trainning/trainning.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/trainning/trainning.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"trainning-andesenv\">\r\n  <div class=\"container\">\r\n    <div class=\"row sobre\">\r\n      <h2>\r\n        TRAINNING\r\n        <div class=\"horizontal-line\">\r\n          <div class=\"top\"></div>\r\n          <div class=\"bottom\"></div>\r\n        </div>\r\n      </h2>\r\n    </div>\r\n\r\n    <h5 class=\"category\">Cursos | Artigos | Manuais</h5>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"card\">\r\n        <div class=\"icon\"><i class=\"fab fa-github\"></i></div>\r\n        <p class=\"title\">GITHUB <br> (CURSO BÁSICO)</p>\r\n        <p class=\"text\">Aplicando na prática e utilizando Git Pages</p>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"icon\"><i class=\"fab fa-css3-alt\"></i></div>\r\n        <p class=\"title\">CSS <br> (CURSO BÁSICO)</p>\r\n        <p class=\"text\">Dando cor e vida ao seu site</p>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"icon\"><i class=\"fab fa-js-square\"></i></div>\r\n        <p class=\"title\">JAVASCRIPT <br> (Boas Práticas)</p>\r\n        <p class=\"text\">Melhorando a escrita e funcionamento do seu código</p>\r\n      </div>\r\n    </div>\r\n\r\n    <h6>Conteúdo Trainning Completo</h6>\r\n\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/trainning/trainning.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/trainning/trainning.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trainning-andesenv {\n  color: #bbb;\n  background: #202020;\n  padding: 100px 0; }\n  .trainning-andesenv .sobre {\n    margin-bottom: 80px; }\n  .trainning-andesenv .sobre h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      margin: auto; }\n  .trainning-andesenv .sobre h2 .horizontal-line {\n        margin-top: 15px; }\n  .trainning-andesenv .sobre h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .trainning-andesenv .sobre h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .trainning-andesenv h6,\n  .trainning-andesenv .category {\n    text-align: center;\n    cursor: pointer; }\n  .trainning-andesenv .category {\n    font: 700 1.75em monospace;\n    color: #5383d3;\n    margin: 0 0 15px 0; }\n  .trainning-andesenv .content {\n    padding: 0 4%;\n    margin: 0 auto;\n    width: 100%;\n    max-width: 1024px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .trainning-andesenv .content .card {\n      font-size: 16px;\n      background-color: #292929;\n      width: 100%;\n      max-width: 300px;\n      min-width: 200px;\n      height: 250px;\n      margin: 0px 15px;\n      border-radius: 10px;\n      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);\n      border: 2px solid rgba(7, 7, 7, 0.12);\n      justify-content: center;\n      cursor: no-drop; }\n  .trainning-andesenv .content .card:hover {\n        background: #202020; }\n  .trainning-andesenv .content .card:hover .text {\n          transition: all 0.5s ease;\n          opacity: 1;\n          max-height: 40px; }\n  .trainning-andesenv .content .card .title {\n        font: 600 1em monospace;\n        color: white;\n        text-align: center;\n        text-transform: uppercase;\n        letter-spacing: 4px;\n        width: 100%;\n        margin: 0;\n        margin-top: 10%; }\n  .trainning-andesenv .content .card .text {\n        color: #bbb;\n        font-weight: 200;\n        font-size: 13px;\n        letter-spacing: 2px;\n        text-align: center;\n        width: 80%;\n        margin: 0 auto;\n        margin-top: 20px;\n        opacity: 0;\n        max-height: 0;\n        transition: all .7s ease; }\n  .trainning-andesenv .content .card .icon {\n        color: white;\n        font-size: 3em;\n        background: #5383d3;\n        margin: 0 auto;\n        width: 100%;\n        height: 80px;\n        max-width: 80px;\n        border-radius: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n  .trainning-andesenv h6 {\n    font: 700 1.3em cursive;\n    margin: 7.5% 0 0 0; }\n  @media screen and (max-width: 767px) {\n    .trainning-andesenv .content {\n      flex-direction: column; }\n    .trainning-andesenv .content .card {\n      margin: 15px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3RyYWlubmluZy9jOlxcVXNlcnNcXEFuZGVyc29uXFxEb2N1bWVudHNcXFByb2pldG9zXFxwb3J0Zm9saW9cXHNyYy9hcHBcXGhvbWVcXHRyYWlubmluZ1xcdHJhaW5uaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUF5SW5CO0VBNUlEO0lBTVEsb0JBQW1CLEVBdUJ0QjtFQTdCTDtNQVNZLDBCQUF5QjtNQUN6QiwwQkFBeUI7TUFFekIsYUFBWSxFQWdCZjtFQTVCVDtRQWVnQixpQkFBZ0IsRUFZbkI7RUEzQmI7VUFrQm9CLG9CQUFtQjtVQUNuQixZQUFXO1VBQ1gsZUFBYztVQUNkLFlBQVcsRUFLZDtFQTFCakI7WUF1QndCLG1CQUFrQjtZQUNsQixZQUFXLEVBQ2Q7RUF6QnJCOztJQWlDUSxtQkFBa0I7SUFDbEIsZ0JBQWUsRUFDbEI7RUFuQ0w7SUFzQ1EsMkJBQTBCO0lBQzFCLGVBQWM7SUFFZCxtQkFBa0IsRUFDckI7RUExQ0w7SUE2Q1EsY0FBYTtJQUViLGVBQWM7SUFDZCxZQUFXO0lBQ1gsa0JBQWlCO0lBRWpCLGNBQWE7SUFDYix3QkFBdUI7SUFDdkIsb0JBQW1CLEVBdUV0QjtFQTVITDtNQXdEWSxnQkFBZTtNQUNmLDBCQUF5QjtNQUV6QixZQUFXO01BQ1gsaUJBQWdCO01BQ2hCLGlCQUFnQjtNQUNoQixjQUFhO01BQ2IsaUJBQWdCO01BRWhCLG9CQUFtQjtNQUNuQiw2Q0FBNEM7TUFDNUMsc0NBQXFDO01BQ3JDLHdCQUF1QjtNQUV2QixnQkFBZSxFQXFEbEI7RUEzSFQ7UUF5RWdCLG9CQUFtQixFQU90QjtFQWhGYjtVQTRFb0IsMEJBQXlCO1VBQ3pCLFdBQVU7VUFDVixpQkFBZSxFQUNsQjtFQS9FakI7UUFtRmdCLHdCQUF1QjtRQUN2QixhQUFZO1FBQ1osbUJBQWtCO1FBQ2xCLDBCQUF5QjtRQUN6QixvQkFBbUI7UUFFbkIsWUFBVztRQUNYLFVBQVM7UUFDVCxnQkFBZSxFQUNsQjtFQTVGYjtRQStGZ0IsWUFBVztRQUNYLGlCQUFnQjtRQUNoQixnQkFBZTtRQUNmLG9CQUFtQjtRQUNuQixtQkFBa0I7UUFFbEIsV0FBVTtRQUNWLGVBQWM7UUFDZCxpQkFBZ0I7UUFDaEIsV0FBVTtRQUNWLGNBQVk7UUFDWix5QkFBd0IsRUFDM0I7RUEzR2I7UUE4R2dCLGFBQVk7UUFDWixlQUFjO1FBRWQsb0JBQW1CO1FBQ25CLGVBQWM7UUFDZCxZQUFXO1FBQ1gsYUFBWTtRQUNaLGdCQUFlO1FBQ2Ysb0JBQW1CO1FBQ25CLGNBQWE7UUFDYix3QkFBdUI7UUFDdkIsb0JBQW1CLEVBQ3RCO0VBMUhiO0lBK0hRLHdCQUF1QjtJQUN2QixtQkFBa0IsRUFDckI7RUFFRDtJQW5JSjtNQXFJWSx1QkFBc0IsRUFDekI7SUF0SVQ7TUF5SVksZUFBYyxFQUNqQixFQUFBIiwiZmlsZSI6ImFwcC9ob21lL3RyYWlubmluZy90cmFpbm5pbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhaW5uaW5nLWFuZGVzZW52e1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuXHJcbiAgICAuc29icmV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEwMCAyLjVlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgICAgICAuaG9yaXpvbnRhbC1saW5lIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTM4M2QzO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICYudG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDYsXHJcbiAgICAuY2F0ZWdvcnl7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcnl7XHJcbiAgICAgICAgZm9udDogNzAwIDEuNzVlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgY29sb3I6ICM1MzgzZDM7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMCAwIDE1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMCA0JTtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg3LCA3LCA3LCAwLjEyKTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBjdXJzb3I6IG5vLWRyb3A7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMDIwMjA7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250OiA2MDAgMWVtIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2JiYjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDowO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC43cyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTM4M2QzO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcblxyXG4gICAgaDZ7XHJcbiAgICAgICAgZm9udDogNzAwIDEuM2VtIGN1cnNpdmU7XHJcbiAgICAgICAgbWFyZ2luOiA3LjUlIDAgMCAwO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGVudCAuY2FyZHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/trainning/trainning.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/trainning/trainning.component.ts ***!
  \*******************************************************/
/*! exports provided: TrainningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainningComponent", function() { return TrainningComponent; });
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

var TrainningComponent = /** @class */ (function () {
    function TrainningComponent() {
    }
    TrainningComponent.prototype.ngOnInit = function () {
    };
    TrainningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trainning',
            template: __webpack_require__(/*! ./trainning.component.html */ "./src/app/home/trainning/trainning.component.html"),
            styles: [__webpack_require__(/*! ./trainning.component.scss */ "./src/app/home/trainning/trainning.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainningComponent);
    return TrainningComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\Anderson\Documents\Projetos\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map