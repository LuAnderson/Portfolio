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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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

module.exports = "<section class=\"about-andesenv\">\n  <div class=\"container\">\n    <div class=\"row sobre\">\n      <h2>\n        SOBRE MIM\n        <div class=\"horizontal-line\">\n          <div class=\"top\"></div>\n          <div class=\"bottom\"></div>\n        </div>\n      </h2>\n    </div>\n    <div class=\"row\">\n      <div class=\"box-info col-sm-6\">\n        <h3>\n          Howdy!\n        </h3>\n        <p>\n          Olá, eu sou o Lucas Anderson, tenho 22 anos de idade; atualmente trabalho\n          na empresa MedGrupo, onde crio novas features e atuo de QA na equipe\n          mobile de exibição de apostilas voltadas a alunos de Medicina.\n        </p>\n        <div class=\"group-button\">\n          <button class=\"btn btn-outline-secondary cv\" type=\"button\">\n            Baixar Currículo\n          </button>\n          <button class=\"btn btn-outline-secondary info\" type=\"button\">\n            Mais Informações\n          </button>\n        </div>\n      </div>\n      <div class=\"box-skill col-sm-6\">\n        <div class=\"bar expert\">\n          <p>\n            JavaScript (ES6)\n          </p>\n        </div>\n        <div class=\"bar intermediate\">\n          <p>\n            Angular 2+\n          </p>\n        </div>\n        <div class=\"bar advanced\">\n          <p>\n            HTML 5\n          </p>\n        </div>\n        <div class=\"bar intermediate\">\n          <p>\n            CSS 3 (LESS - SASS)\n          </p>\n        </div>\n        <div class=\"bar advanced\">\n          <p>\n            Git (GITHUB)\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/about/about.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/about/about.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-andesenv {\n  color: #bbb;\n  background: #151515;\n  padding: 100px 0; }\n  .about-andesenv .sobre {\n    margin-bottom: 80px; }\n  .about-andesenv .sobre h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      margin: auto; }\n  .about-andesenv .sobre h2 .horizontal-line {\n        margin-top: 15px; }\n  .about-andesenv .sobre h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .about-andesenv .sobre h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .about-andesenv .box-info h3 {\n    font: 100 1.5em monospace;\n    margin-bottom: 15px; }\n  .about-andesenv .box-info p {\n    font: 100 1em cursive;\n    margin: 0 40px 50px 0; }\n  .about-andesenv .box-info .group-button {\n    text-align: center; }\n  .about-andesenv .box-info .group-button button {\n      text-transform: uppercase;\n      font: 700 1.1em monospace;\n      padding: 10px; }\n  .about-andesenv .box-info .group-button button.cv {\n        color: #69a9ec;\n        border-color: #69a9ec;\n        margin-right: 5%; }\n  .about-andesenv .box-skill {\n    font-family: cursive; }\n  .about-andesenv .box-skill .bar {\n      padding: 2px;\n      margin: 0 0 10px 40px;\n      font-weight: bold; }\n  .about-andesenv .box-skill .bar:after {\n        content: \"\";\n        display: inline-block;\n        padding: 5px 0 5px 0px;\n        border-radius: 15px;\n        background-color: #968b8e; }\n  .about-andesenv .box-skill .bar:nth-last-child(1) {\n        margin-bottom: 0px; }\n  .about-andesenv .box-skill .bar.intermediate::after {\n      width: calc(60% - 10px); }\n  .about-andesenv .box-skill .bar.advanced::after {\n      width: calc(80% - 10px); }\n  .about-andesenv .box-skill .bar.expert::after {\n      width: calc(90% - 10px); }\n  @media (max-width: 880px) {\n  .about-andesenv .group-button {\n    margin-bottom: 60px; }\n  .about-andesenv .box-skill .bar {\n    margin: 0 0 10px 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hYm91dC9DOlxcVXNlcnNcXEFuZGVyc29uXFxEb2N1bWVudHNcXFByb2pldG9zXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGhvbWVcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsaUJBQWdCLEVBc0ZuQjtFQXpGRDtJQU1RLG9CQUFtQixFQXVCdEI7RUE3Qkw7TUFTWSwwQkFBeUI7TUFDekIsMEJBQXlCO01BRXpCLGFBQVksRUFnQmY7RUE1QlQ7UUFlZ0IsaUJBQWdCLEVBWW5CO0VBM0JiO1VBa0JvQixvQkFBbUI7VUFDbkIsWUFBVztVQUNYLGVBQWM7VUFDZCxZQUFXLEVBS2Q7RUExQmpCO1lBdUJ3QixtQkFBa0I7WUFDbEIsWUFBVyxFQUNkO0VBekJyQjtJQWlDWSwwQkFBeUI7SUFDekIsb0JBQW1CLEVBQ3RCO0VBbkNUO0lBc0NZLHNCQUFxQjtJQUNyQixzQkFBcUIsRUFDeEI7RUF4Q1Q7SUEyQ1ksbUJBQWtCLEVBWXJCO0VBdkRUO01BNkNnQiwwQkFBeUI7TUFDekIsMEJBQXlCO01BQ3pCLGNBQWEsRUFPaEI7RUF0RGI7UUFrRG9CLGVBQWM7UUFDZCxzQkFBcUI7UUFDckIsaUJBQWdCLEVBQ25CO0VBckRqQjtJQTJEUSxxQkFBb0IsRUE2QnZCO0VBeEZMO01BOERZLGFBQVk7TUFDWixzQkFBcUI7TUFDckIsa0JBQWlCLEVBYXBCO0VBN0VUO1FBbUVnQixZQUFZO1FBQ1osc0JBQXFCO1FBQ3JCLHVCQUFzQjtRQUN0QixvQkFBbUI7UUFDbkIsMEJBQXlCLEVBQzVCO0VBeEViO1FBMkVnQixtQkFBa0IsRUFDckI7RUE1RWI7TUFnRlksd0JBQXVCLEVBQzFCO0VBakZUO01BbUZZLHdCQUF1QixFQUMxQjtFQXBGVDtNQXNGWSx3QkFBdUIsRUFDMUI7RUFJVDtFQUNJO0lBRVEsb0JBQW1CLEVBQ3RCO0VBSEw7SUFNUSxxQkFBb0IsRUFDdkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtYW5kZXNlbnZ7XHJcbiAgICBjb2xvcjogI2JiYjtcclxuICAgIGJhY2tncm91bmQ6ICMxNTE1MTU7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG5cclxuICAgIC5zb2JyZXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udDogMTAwIDIuNWVtIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgICAgIC5ob3Jpem9udGFsLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1MzgzZDM7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJi50b3Age1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYm94LWluZm97XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEwMCAxLjVlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEwMCAxZW0gY3Vyc2l2ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDQwcHggNTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5ncm91cC1idXR0b257XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDcwMCAxLjFlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAmLmN2e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjlhOWVjO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzY5YTllYztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib3gtc2tpbGx7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcblxyXG4gICAgICAgIC5iYXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAgXCJcIjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY4YjhlOyAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bnRoLWxhc3QtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYXIuaW50ZXJtZWRpYXRlOjphZnRlcntcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNjAlIC0gMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYXIuYWR2YW5jZWQ6OmFmdGVye1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg4MCUgLSAxMHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJhci5leHBlcnQ6OmFmdGVye1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg5MCUgLSAxMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xyXG4gICAgLmFib3V0LWFuZGVzZW52e1xyXG4gICAgICAgIC5ncm91cC1idXR0b257XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm94LXNraWxsIC5iYXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

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

module.exports = "<footer class=\"footer-andesenv\">\n\n  <div class=\"footer-left\">\n\n    <h3>Lucas<span>AnDesenv</span>Lima</h3>\n\n    <p class=\"footer-links\">\n      <a href=\"#\">INICIO</a>\n      ·\n      <a href=\"#\">PORTFÓLIO</a>\n      ·\n      <a href=\"#\">BIBLIOTECA</a>\n      ·\n      <a href=\"#\">TRAINNING</a>\n      ·\n      <a href=\"#\">APLICATIVO</a>\n    </p>\n\n    <p class=\"footer-my-name\">Copyright 2018 &copy; Lucas Anderson S. Lima</p>\n\n  </div>\n\n  <div class=\"footer-center\">\n\n    <div>\n      <i class=\"fa fa-map-marker\"></i>\n      <p><span>Barra da Tijuca</span> Rio de Janeiro, Brasil</p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-phone\"></i>\n      <p>21 96700 1399</p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-envelope\"></i>\n      <p><a href=\"mailto:lucasand96@gmail.com\">lucasand96@gmail.com</a></p>\n    </div>\n\n  </div>\n\n  <div class=\"footer-right\">\n\n    <p class=\"footer-company-about\">\n      <span>\n        Redes Sociais:\n      </span>\n    </p>\n\n    <div class=\"footer-icons\">\n      <a href=\"#\"><i class=\"fab fa-behance\"></i></a>\n      <a href=\"#\"><i class=\"fab fa-codepen\"></i></a>\n      <a href=\"#\"><i class=\"fab fa-discord\"></i></a>\n      <a href=\"#\"><i class=\"fa fa-envelope-square\"></i></a>\n      <a href=\"#\"><i class=\"fab fa-github\"></i></a>\n      <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\n      <a href=\"#\"><i class=\"fab fa-linkedin\"></i></a>\n      <a href=\"#\"><i class=\"fab fa-medium\"></i></a>\n      <a href=\"#\"><i class=\"fab fa-skype\"></i></a>\n      <a href=\"#\"><i class=\"fab fa-stack-overflow\"></i></a>\n      <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n    </div>\n\n  </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/home/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-andesenv {\n  background-color: #000;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  width: 100%;\n  text-align: left;\n  font: bold 16px sans-serif;\n  padding: 55px 50px; }\n  .footer-andesenv .footer-left,\n  .footer-andesenv .footer-center,\n  .footer-andesenv .footer-right {\n    display: inline-block;\n    vertical-align: top; }\n  .footer-andesenv .footer-left {\n    width: 40%; }\n  .footer-andesenv h3 {\n    color: #ffffff;\n    font: normal 2em 'Cookie', cursive;\n    margin: 0; }\n  .footer-andesenv h3 span {\n      color: #5383d3; }\n  .footer-andesenv .footer-links {\n    color: #ffffff;\n    margin: 20px 0 12px;\n    padding: 0;\n    font-size: 18px; }\n  .footer-andesenv .footer-links a {\n      display: inline-block;\n      line-height: 1.8;\n      text-decoration: none;\n      color: inherit; }\n  .footer-andesenv .footer-my-name {\n    color: #8f9296;\n    font-size: 14px;\n    font-weight: normal;\n    margin: 2.5rem 0; }\n  .footer-andesenv .footer-center {\n    width: 35%; }\n  .footer-andesenv .footer-center p {\n      display: inline-block;\n      color: #ffffff;\n      vertical-align: middle;\n      margin: 0; }\n  .footer-andesenv .footer-center p span {\n        display: block;\n        font-weight: normal;\n        font-size: 14px;\n        line-height: 2; }\n  .footer-andesenv .footer-center p a {\n        color: #5383d3;\n        text-decoration: none; }\n  .footer-andesenv i {\n    background-color: #33383b;\n    color: #ffffff;\n    font-size: 25px;\n    width: 38px;\n    height: 38px;\n    border-radius: 50%;\n    text-align: center;\n    line-height: 42px;\n    margin: 10px 15px;\n    vertical-align: middle; }\n  .footer-andesenv i.fa-envelope {\n      font-size: 17px;\n      line-height: 38px; }\n  .footer-andesenv .footer-right {\n    width: 20%; }\n  .footer-andesenv .footer-company-about {\n    line-height: 20px;\n    color: #92999f;\n    font-size: 13px;\n    font-weight: normal;\n    margin: 0; }\n  .footer-andesenv .footer-company-about span {\n      display: block;\n      color: #5383d3;\n      font-size: 1rem;\n      font-weight: bold;\n      margin-bottom: 20px; }\n  .footer-andesenv .footer-icons {\n    margin-top: 25px; }\n  @media (max-width: 880px) {\n  .footer-andesenv {\n    font: bold 14px sans-serif; }\n    .footer-andesenv .footer-left,\n    .footer-andesenv .footer-center,\n    .footer-andesenv .footer-right {\n      display: block;\n      margin-bottom: 40px;\n      text-align: center;\n      width: 100%; }\n    .footer-andesenv .footer-center i {\n      margin-left: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb290ZXIvQzpcXFVzZXJzXFxBbmRlcnNvblxcRG9jdW1lbnRzXFxQcm9qZXRvc1xccG9ydGZvbGlvL3NyY1xcYXBwXFxob21lXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9mb290ZXIvQzpcXFVzZXJzXFxBbmRlcnNvblxcRG9jdW1lbnRzXFxQcm9qZXRvc1xccG9ydGZvbGlvL3NyY1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyx1QkNIbUI7RURJbkIsNENBQTJDO0VBQzNDLHVCQUFzQjtFQUN0QixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLDJCQUEwQjtFQUUxQixtQkFBa0IsRUE2R2xCO0VBckhEOzs7SUFhUSxzQkFBcUI7SUFDckIsb0JBQW1CLEVBQ3RCO0VBZkw7SUFrQlEsV0FBVSxFQUNiO0VBbkJMO0lBc0JRLGVBQWU7SUFDZixtQ0FBa0M7SUFDbEMsVUFBUyxFQUtaO0VBN0JMO01BMkJZLGVBQWUsRUFDbEI7RUE1QlQ7SUFnQ1EsZUFBZTtJQUNmLG9CQUFtQjtJQUNuQixXQUFVO0lBRVYsZ0JBQWUsRUFRbEI7RUE1Q0w7TUF1Q1ksc0JBQW9CO01BQ3BCLGlCQUFnQjtNQUNoQixzQkFBcUI7TUFDckIsZUFBZSxFQUNsQjtFQTNDVDtJQStDUSxlQUFlO0lBQ2YsZ0JBQWU7SUFDZixvQkFBbUI7SUFDbkIsaUJBQWdCLEVBQ25CO0VBbkRMO0lBc0RRLFdBQVUsRUFvQmI7RUExRUw7TUF5RFksc0JBQXFCO01BQ3JCLGVBQWM7TUFDZCx1QkFBc0I7TUFDdEIsVUFBUSxFQWFYO0VBekVUO1FBK0RnQixlQUFjO1FBQ2Qsb0JBQW1CO1FBQ25CLGdCQUFjO1FBQ2QsZUFBYSxFQUNoQjtFQW5FYjtRQXNFZ0IsZUFBZTtRQUNmLHNCQUFxQixFQUN4QjtFQXhFYjtJQTZFUSwwQkFBMEI7SUFDMUIsZUFBYztJQUNkLGdCQUFlO0lBQ2YsWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLGtCQUFpQjtJQUNqQixrQkFBaUI7SUFDakIsdUJBQXNCLEVBTXpCO0VBNUZMO01BeUZZLGdCQUFlO01BQ2Ysa0JBQWlCLEVBQ3BCO0VBM0ZUO0lBK0ZRLFdBQVUsRUFDYjtFQWhHTDtJQW1HUSxrQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFlO0lBQ2Ysb0JBQW1CO0lBQ25CLFVBQVMsRUFTWjtFQWhITDtNQTBHWSxlQUFjO01BQ2QsZUFBZTtNQUNmLGdCQUFlO01BQ2Ysa0JBQWlCO01BQ2pCLG9CQUFtQixFQUN0QjtFQS9HVDtJQW1IUSxpQkFBZ0IsRUFDbkI7RUFJTDtFQUVDO0lBQ08sMkJBQTBCLEVBY2hDO0lBZkQ7OztNQU1XLGVBQWM7TUFDZCxvQkFBbUI7TUFDbkIsbUJBQWtCO01BQ2xCLFlBQVcsRUFDZDtJQVZSO01BYVcsZUFBYyxFQUNqQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uZm9vdGVyLWFuZGVzZW52e1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGZvbnQ6IGJvbGQgMTZweCBzYW5zLXNlcmlmO1xyXG5cclxuXHRwYWRkaW5nOiA1NXB4IDUwcHg7XHJcbiAgICBcclxuICAgIC5mb290ZXItbGVmdCxcclxuICAgIC5mb290ZXItY2VudGVyLFxyXG4gICAgLmZvb3Rlci1yaWdodHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWxlZnR7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuXHJcbiAgICBoM3tcclxuICAgICAgICBjb2xvcjogICNmZmZmZmY7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIDJlbSAnQ29va2llJywgY3Vyc2l2ZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAgIzUzODNkMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1saW5rc3tcclxuICAgICAgICBjb2xvcjogICNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAgaW5oZXJpdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1teS1uYW1le1xyXG4gICAgICAgIGNvbG9yOiAgIzhmOTI5NjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW46IDIuNXJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItY2VudGVye1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG5cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAgIzUzODNkMztcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzMzMzgzYjtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDM4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAgICAgJi5mYS1lbnZlbG9wZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1yaWdodHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItY29tcGFueS1hYm91dHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjogICM5Mjk5OWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICAjNTM4M2QzO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWljb25ze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODgwcHgpIHtcclxuXHJcblx0LmZvb3Rlci1hbmRlc2VudntcclxuICAgICAgICBmb250OiBib2xkIDE0cHggc2Fucy1zZXJpZjtcclxuICAgICAgICBcclxuICAgICAgICAuZm9vdGVyLWxlZnQsXHJcbiAgICAgICAgLmZvb3Rlci1jZW50ZXIsXHJcbiAgICAgICAgLmZvb3Rlci1yaWdodHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyLWNlbnRlciBpe1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcblx0fVxyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjMDAwO1xyXG4iXX0= */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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

module.exports = "<div class=\"intro-andesenv\">\n  <h1 class=\"name-andesenv\">Lucas <span>Anderson</span> Lima</h1>\n  <h3 class=\"profission-andesenv\">Desenvolvimento Front End</h3>\n  <hr class=\"intro-divider\">\n  <div class=\"social-andesenv\">\n    <a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fab fa-github\"></i> GITHUB</a>\n    <a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fab fa-linkedin\"></i> Linkedin</a>\n    <a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fab fa-twitter\"></i> Twitter</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/intro/intro.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/intro/intro.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-andesenv {\n  height: 95vh;\n  width: 100%;\n  background-image: url('showcase_bg.jpg');\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  text-align: center;\n  padding: 20% 0; }\n  .intro-andesenv h1 {\n    font: 100 4em cursive;\n    margin: 0 0 15px 0; }\n  .intro-andesenv h1 span {\n      color: #5383d3; }\n  .intro-andesenv .intro-divider {\n    width: 20vw;\n    border: 1px solid #8d3601; }\n  .intro-andesenv h3 {\n    font: 100 2em monospace;\n    text-shadow: 2px 2px 3px black; }\n  .intro-andesenv .social-andesenv a {\n    text-decoration: none;\n    color: white;\n    text-transform: uppercase;\n    margin: 0 5px;\n    font-family: monospace;\n    background: #393a42;\n    border: 1px solid #403f3f; }\n  @media (max-width: 880px) {\n  .intro-andesenv {\n    padding-top: 40% 0 0 0; } }\n  @media (min-width: 890px) and (max-width: 1240px) {\n  .intro-andesenv {\n    padding: 50% 0 0 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9pbnRyby9DOlxcVXNlcnNcXEFuZGVyc29uXFxEb2N1bWVudHNcXFByb2pldG9zXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGhvbWVcXGludHJvXFxpbnRyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixZQUFXO0VBRVgseUNBQXdEO0VBQ3hELDZCQUE0QjtFQUM1Qiw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLHVCQUFzQjtFQUV0QixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGVBQWMsRUFtQ2pCO0VBL0NEO0lBZVEsc0JBQXFCO0lBRXJCLG1CQUFrQixFQUtyQjtFQXRCTDtNQW9CWSxlQUFjLEVBQ2pCO0VBckJUO0lBeUJRLFlBQVc7SUFDWCwwQkFBeUIsRUFDNUI7RUEzQkw7SUE4QlEsd0JBQXVCO0lBQ3ZCLCtCQUFzQyxFQUN6QztFQWhDTDtJQW9DWSxzQkFBcUI7SUFDckIsYUFBWTtJQUNaLDBCQUF5QjtJQUN6QixjQUFhO0lBRWIsdUJBQXNCO0lBRXRCLG9CQUFtQjtJQUNuQiwwQkFDSixFQUFDO0VBS1Q7RUFDSTtJQUNJLHVCQUFzQixFQUN6QixFQUFBO0VBR0w7RUFDSTtJQUNJLG1CQUFrQixFQUNyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRyby1hbmRlc2VudiB7XHJcbiAgICBoZWlnaHQ6IDk1dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2hvd2Nhc2VfYmcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwJSAwO1xyXG5cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQ6IDEwMCA0ZW0gY3Vyc2l2ZTtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG5cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogIzUzODNkMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmludHJvLWRpdmlkZXIge1xyXG4gICAgICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ZDM2MDE7XHJcbiAgICB9XHJcblxyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udDogMTAwIDJlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwwLDAsMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbC1hbmRlc2VudntcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzkzYTQyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDAzZjNmXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcbiAgICAuaW50cm8tYW5kZXNlbnZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwJSAwIDAgMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDg5MHB4KSBhbmQgKG1heC13aWR0aDogMTI0MHB4KSB7XHJcbiAgICAuaW50cm8tYW5kZXNlbnZ7XHJcbiAgICAgICAgcGFkZGluZzogNTAlIDAgMCAwO1xyXG4gICAgfVxyXG59ICAgIl19 */"

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

module.exports = ".menu-andesenv {\n  background: #000;\n  display: block;\n  width: -webkit-fill-available;\n  text-align: center; }\n  .menu-andesenv.fixed {\n    position: fixed;\n    top: 0;\n    z-index: 3; }\n  .menu-andesenv a {\n    display: inline-block;\n    margin: 0 1rem;\n    padding: 15px 16px;\n    color: #ffffff;\n    font: bold 1.3em monospace;\n    text-transform: uppercase;\n    text-decoration: none; }\n  .menu-andesenv a:active, .menu-andesenv a:hover {\n      border-radius: 1em 2em; }\n  .menu-andesenv a:hover {\n      background: #545454; }\n  .menu-andesenv a:active {\n      background: #5383d3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tZW51L0M6XFxVc2Vyc1xcQW5kZXJzb25cXERvY3VtZW50c1xcUHJvamV0b3NcXHBvcnRmb2xpby9zcmNcXGFwcFxcaG9tZVxcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9tZW51L0M6XFxVc2Vyc1xcQW5kZXJzb25cXERvY3VtZW50c1xcUHJvamV0b3NcXHBvcnRmb2xpby9zcmNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJDSGdCO0VESWhCLGVBQWM7RUFDZCw4QkFBNkI7RUFFN0IsbUJBQWtCLEVBK0JyQjtFQXBDRDtJQVFRLGdCQUFlO0lBQ2YsT0FBTTtJQUNOLFdBQVUsRUFDYjtFQVhMO0lBY1Esc0JBQXFCO0lBQ3JCLGVBQWM7SUFDZCxtQkFBa0I7SUFFbEIsZUFBYztJQUVkLDJCQUEwQjtJQUMxQiwwQkFBeUI7SUFDekIsc0JBQXFCLEVBYXhCO0VBbkNMO01BMEJZLHVCQUFzQixFQUN6QjtFQTNCVDtNQTZCWSxvQkFBbUIsRUFDdEI7RUE5QlQ7TUFpQ1ksb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5tZW51LWFuZGVzZW52e1xyXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmLmZpeGVke1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICAgICAgdG9wOiAwOyBcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxNnB4O1xyXG5cclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgZm9udDogYm9sZCAxLjNlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbSAyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NDU0NTQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzUzODNkMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzAwMDtcclxuIl19 */"

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

module.exports = "<section class=\"portfolio-andesenv\">\n  <div class=\"container\">\n    <div class=\"row sobre\">\n      <h2>\n        PORTFÓLIO\n        <div class=\"horizontal-line\">\n          <div class=\"top\"></div>\n          <div class=\"bottom\"></div>\n        </div>\n      </h2>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <swiper [config]=\"config\" [(index)]=\"index\">\n      <div class=\"big swiper-slide\" data-swiper-autoplay=\"200\">\n        <div class=\"swiper-zoom-container\">\n          <img src=\"../../../assets/login.png\" alt=\"\" srcset=\"\" class=\"mobile\">\n        </div>\n      </div>\n      <div class=\"big swiper-slide\">\n        <div class=\"swiper-zoom-container\">\n          <img src=\"../../../assets/cursos-mobile.png\" alt=\"\" srcset=\"\" class=\"mobile\">\n        </div>\n      </div>\n      <div class=\"big swiper-slide\">\n        <div class=\"swiper-zoom-container\">\n          <img src=\"../../../assets/criar-curso-mobile.png\" alt=\"\" srcset=\"\" class=\"mobile\">\n        </div>\n      </div>\n    </swiper>\n\n    <h6>Ver Mais Projetos</h6>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/home/portfolio/portfolio.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/portfolio/portfolio.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-andesenv {\n  color: #bbb;\n  background: #151515;\n  padding: 100px 0; }\n  .portfolio-andesenv .sobre {\n    margin-bottom: 80px; }\n  .portfolio-andesenv .sobre h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      margin: auto; }\n  .portfolio-andesenv .sobre h2 .horizontal-line {\n        margin-top: 15px; }\n  .portfolio-andesenv .sobre h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .portfolio-andesenv .sobre h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .portfolio-andesenv .swiper-slide-active,\n  .portfolio-andesenv .swiper-slide,\n  .portfolio-andesenv h6 {\n    text-align: center; }\n  .portfolio-andesenv img.mobile {\n    max-width: 75%; }\n  .portfolio-andesenv h6 {\n    font: 700 1.3em cursive;\n    cursor: pointer;\n    margin: 5% 0 0 0; }\n  @media (max-width: 880px) {\n  .portfolio-andesenv img.mobile {\n    max-width: 100%; }\n  .portfolio-andesenv h6 {\n    margin: 10% 0 0 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wb3J0Zm9saW8vQzpcXFVzZXJzXFxBbmRlcnNvblxcRG9jdW1lbnRzXFxQcm9qZXRvc1xccG9ydGZvbGlvL3NyY1xcYXBwXFxob21lXFxwb3J0Zm9saW9cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsaUJBQWdCLEVBMkNuQjtFQTlDRDtJQU1RLG9CQUFtQixFQXVCdEI7RUE3Qkw7TUFTWSwwQkFBeUI7TUFDekIsMEJBQXlCO01BRXpCLGFBQVksRUFnQmY7RUE1QlQ7UUFlZ0IsaUJBQWdCLEVBWW5CO0VBM0JiO1VBa0JvQixvQkFBbUI7VUFDbkIsWUFBVztVQUNYLGVBQWM7VUFDZCxZQUFXLEVBS2Q7RUExQmpCO1lBdUJ3QixtQkFBa0I7WUFDbEIsWUFBVyxFQUNkO0VBekJyQjs7O0lBa0NRLG1CQUFrQixFQUNyQjtFQW5DTDtJQXNDUSxlQUFjLEVBQ2pCO0VBdkNMO0lBMENRLHdCQUF1QjtJQUN2QixnQkFBZTtJQUNmLGlCQUFnQixFQUNuQjtFQUdMO0VBQ0k7SUFFUSxnQkFBZSxFQUNsQjtFQUhMO0lBTVEsa0JBQWlCLEVBQ3BCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGZvbGlvLWFuZGVzZW52e1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuXHJcbiAgICAuc29icmV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEwMCAyLjVlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgICAgICAuaG9yaXpvbnRhbC1saW5lIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTM4M2QzO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICYudG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxyXG4gICAgLnN3aXBlci1zbGlkZSxcclxuICAgIGg2IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGltZy5tb2JpbGV7IFxyXG4gICAgICAgIG1heC13aWR0aDogNzUlO1xyXG4gICAgfVxyXG5cclxuICAgIGg2e1xyXG4gICAgICAgIGZvbnQ6IDcwMCAxLjNlbSBjdXJzaXZlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW46IDUlIDAgMCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODgwcHgpIHtcclxuICAgIC5wb3J0Zm9saW8tYW5kZXNlbnZ7XHJcbiAgICAgICAgaW1nLm1vYmlsZXsgXHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGg2e1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwJSAwIDAgMDtcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = "<section class=\"professional-andesenv\">\n  <div class=\"container\">\n    <div class=\"row about\">\n      <h2>\n        CARREIRA PROFISSIONAL\n        <div class=\"horizontal-line\">\n          <div class=\"top\"></div>\n          <div class=\"bottom\"></div>\n        </div>\n      </h2>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"main-timeline\">\n          <div class=\"timeline\">\n            <div class=\"timeline-icon\"><i class=\"fas fa-user-tie\"></i></div>\n            <span class=\"year\">2017 - Atual</span>\n            <div class=\"timeline-content\">\n              <h5 class=\"title\">Desenvolvedor Front End</h5>\n              <p class=\"description\">\n                <li>CodeOwner | DevOps</li>\n                <li>Modelagem de interface web/mobile e Desenvolvimento de componentes mobile;</li>\n              </p>\n            </div>\n          </div>\n          <div class=\"timeline\">\n            <div class=\"timeline-icon\"><i class=\"fas fa-code\"></i></div>\n            <span class=\"year\">2017 - 2018</span>\n            <div class=\"timeline-content\">\n              <h5 class=\"title\">Freelancer</h5>\n              <p class=\"description\">\n                <li>Desenvolvedor Front End</li>\n                <li>SEO | Web Mobile</li>\n                <li>Web Performance e PageSpeed Insights/Ninja</li>\n              </p>\n            </div>\n          </div>\n          <div class=\"timeline\">\n            <div class=\"timeline-icon\"><i class=\"fas fa-address-book\"></i></div>\n            <span class=\"year\">2015 - 2016</span>\n            <div class=\"timeline-content\">\n              <h5 class=\"title\">Membro do Diretório Acadêmico</h5>\n              <p class=\"description\">\n                <li>Organização de atividades inclusivas para 'calouros'</li>\n                <li>Levantamento de ideias para melhor convívio entre os estudantes universitários</li>\n              </p>\n            </div>\n          </div>\n          <div class=\"timeline\">\n            <div class=\"timeline-icon\"><i class=\"fas fa-graduation-cap\"></i></div>\n            <span class=\"year\">2014</span>\n            <div class=\"timeline-content\">\n              <h5 class=\"title\">Graduação em Engenharia da Computação</h5>\n              <p class=\"description\">\n                <li>Universidade Estadual de Feira de Santana</li>\n                <li>Preparo para atuar nas áreas de hardware e software</li>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/professional/professional.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/professional/professional.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".professional-andesenv {\n  color: #bbb;\n  background: #202020;\n  padding: 100px 0; }\n  .professional-andesenv .about {\n    margin-bottom: 80px; }\n  .professional-andesenv .about h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      text-align: center;\n      margin: auto; }\n  .professional-andesenv .about h2 .horizontal-line {\n        margin-top: 15px; }\n  .professional-andesenv .about h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .professional-andesenv .about h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .professional-andesenv .main-timeline {\n    overflow: hidden;\n    position: relative; }\n  .professional-andesenv .main-timeline .timeline {\n      width: 50%;\n      float: left;\n      position: relative; }\n  .professional-andesenv .main-timeline .timeline:before, .professional-andesenv .main-timeline .timeline:after {\n        content: \"\";\n        display: block;\n        clear: both; }\n  .professional-andesenv .main-timeline .timeline:before {\n        position: absolute;\n        width: 10px;\n        height: 90%;\n        top: 10%;\n        right: -20px;\n        background: #bbb; }\n  .professional-andesenv .main-timeline .timeline:last-child:before {\n        height: 0; }\n  .professional-andesenv .main-timeline .timeline-icon {\n      width: 80px;\n      height: 80px;\n      border-radius: 50%;\n      overflow: hidden;\n      background: #bbb;\n      text-align: center;\n      position: absolute;\n      top: 0;\n      right: -40px;\n      z-index: 2; }\n  .professional-andesenv .main-timeline .timeline-icon i {\n        font-size: 35px;\n        color: #202020;\n        line-height: 80px;\n        z-index: 1;\n        position: relative; }\n  .professional-andesenv .main-timeline .year {\n      display: block;\n      padding: 0 60px 0 30px;\n      font: 700 2em monospace;\n      color: #303a3b;\n      text-align: right;\n      border-bottom: 2px solid #303a3b;\n      position: relative; }\n  .professional-andesenv .main-timeline .year:after {\n        content: \"\";\n        border-left: 10px solid #303a3b;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        position: absolute;\n        bottom: -11px;\n        left: 0px; }\n  .professional-andesenv .main-timeline .timeline:last-child .timeline-content:after, .professional-andesenv .main-timeline .timeline:last-child .timeline-content:before {\n      width: 0;\n      height: 0; }\n  .professional-andesenv .main-timeline .timeline-content {\n      padding: 18px 60px 18px 40px;\n      text-align: right;\n      position: relative;\n      z-index: 1; }\n  .professional-andesenv .main-timeline .timeline-content .title {\n        font: 700 1.3em cursive;\n        color: #5383d3;\n        margin-top: 0; }\n  .professional-andesenv .main-timeline .timeline-content .description {\n        font: 300 1em monospace;\n        color: #b1b1b1;\n        line-height: 25px; }\n  .professional-andesenv .main-timeline .timeline-content .description li {\n          list-style-type: none; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2) {\n      margin-top: 140px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(even) {\n      margin-bottom: 80px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(odd) {\n      margin: -140px 0 0; }\n  .professional-andesenv .main-timeline .timeline:first-child, .professional-andesenv .main-timeline .timeline:last-child:nth-child(even) {\n      margin: 0px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-icon, .professional-andesenv .main-timeline .timeline:nth-child(2n):before {\n      right: auto;\n      left: -20px;\n      background: #bbb; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-icon {\n      left: -40px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .year {\n      padding: 0 30px 0 60px;\n      text-align: left; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .year:before {\n        left: auto;\n        right: 3px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .year:after {\n        border-left: none;\n        border-right: 10px solid #303a3b;\n        right: 0px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-content {\n      padding: 18px 40px 18px 60px;\n      text-align: left; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-content:before {\n        left: -95px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-content:after {\n        left: 15px; }\n  @media only screen and (max-width: 990px) {\n    .professional-andesenv .main-timeline .timeline {\n      width: 100%; }\n      .professional-andesenv .main-timeline .timeline:nth-child(even), .professional-andesenv .main-timeline .timeline:nth-child(odd) {\n        margin: 0; }\n      .professional-andesenv .main-timeline .timeline:before, .professional-andesenv .main-timeline .timeline:nth-child(2n):before {\n        width: 10px;\n        height: 100%;\n        left: 25px; }\n      .professional-andesenv .main-timeline .timeline .timeline-icon {\n        left: 0; }\n      .professional-andesenv .main-timeline .timeline .year {\n        text-align: left;\n        padding: 0 30px 0 100px; }\n        .professional-andesenv .main-timeline .timeline .year:before {\n          left: auto;\n          right: 4px; }\n        .professional-andesenv .main-timeline .timeline .year:after {\n          left: auto;\n          right: 0px;\n          border-right: 10px solid #303a3b;\n          border-left: none; }\n      .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-icon {\n        left: 0; }\n      .professional-andesenv .main-timeline .timeline:nth-child(2n) .year {\n        text-align: left;\n        padding: 0 30px 0 100px; }\n      .professional-andesenv .main-timeline .timeline:nth-child(2n) .year:before {\n        left: auto;\n        right: 4px; }\n      .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-content {\n        text-align: left;\n        padding: 18px 40px 18px 100px; }\n      .professional-andesenv .main-timeline .timeline .timeline-content {\n        text-align: left;\n        padding: 18px 40px 18px 100px; }\n        .professional-andesenv .main-timeline .timeline .timeline-content:after, .professional-andesenv .main-timeline .timeline .timeline-content:before {\n          width: 0;\n          height: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvQzpcXFVzZXJzXFxBbmRlcnNvblxcRG9jdW1lbnRzXFxQcm9qZXRvc1xccG9ydGZvbGlvL3NyY1xcYXBwXFxob21lXFxwcm9mZXNzaW9uYWxcXHByb2Zlc3Npb25hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsaUJBQWdCLEVBd1FuQjtFQTNRRDtJQU1RLG9CQUFtQixFQXlCdEI7RUEvQkw7TUFTWSwwQkFBeUI7TUFDekIsMEJBQXlCO01BQ3pCLG1CQUFrQjtNQUVsQixhQUFZLEVBaUJmO0VBOUJUO1FBZ0JnQixpQkFBZ0IsRUFhbkI7RUE3QmI7VUFtQm9CLG9CQUFtQjtVQUNuQixZQUFXO1VBQ1gsZUFBYztVQUNkLFlBQVcsRUFNZDtFQTVCakI7WUF5QndCLG1CQUFrQjtZQUNsQixZQUFXLEVBQ2Q7RUEzQnJCO0lBa0NRLGlCQUFnQjtJQUNoQixtQkFBa0IsRUFpS3JCO0VBcE1MO01Bc0NZLFdBQVU7TUFDVixZQUFXO01BQ1gsbUJBQWtCLEVBc0JyQjtFQTlEVDtRQTRDZ0IsWUFBVztRQUNYLGVBQWM7UUFDZCxZQUFXLEVBQ2Q7RUEvQ2I7UUFrRGdCLG1CQUFrQjtRQUNsQixZQUFXO1FBQ1gsWUFBVztRQUNYLFNBQVE7UUFDUixhQUFZO1FBRVosaUJBQWdCLEVBQ25CO0VBekRiO1FBNERnQixVQUFTLEVBQ1o7RUE3RGI7TUFpRVksWUFBVztNQUNYLGFBQVk7TUFDWixtQkFBa0I7TUFDbEIsaUJBQWdCO01BRWhCLGlCQUFnQjtNQUNoQixtQkFBa0I7TUFFbEIsbUJBQWtCO01BQ2xCLE9BQU07TUFDTixhQUFZO01BQ1osV0FBVSxFQVViO0VBdEZUO1FBK0VnQixnQkFBZTtRQUNmLGVBQWM7UUFDZCxrQkFBaUI7UUFFakIsV0FBVTtRQUNWLG1CQUFrQixFQUNyQjtFQXJGYjtNQXlGWSxlQUFjO01BQ2QsdUJBQXNCO01BQ3RCLHdCQUF1QjtNQUV2QixlQUFjO01BQ2Qsa0JBQWlCO01BQ2pCLGlDQUFnQztNQUNoQyxtQkFBa0IsRUFXckI7RUEzR1Q7UUFtR2dCLFlBQVc7UUFDWCxnQ0FBK0I7UUFDL0IsbUNBQWtDO1FBQ2xDLHNDQUFxQztRQUNyQyxtQkFBa0I7UUFDbEIsY0FBYTtRQUNiLFVBQVMsRUFDWjtFQTFHYjtNQStHZ0IsU0FBUTtNQUNSLFVBQVMsRUFDWjtFQWpIYjtNQXFIWSw2QkFBNEI7TUFDNUIsa0JBQWlCO01BQ2pCLG1CQUFrQjtNQUNsQixXQUFVLEVBaUJiO0VBeklUO1FBMkhnQix3QkFBdUI7UUFDdkIsZUFBYztRQUNkLGNBQWEsRUFDaEI7RUE5SGI7UUFpSWdCLHdCQUF1QjtRQUN2QixlQUFjO1FBQ2Qsa0JBQWlCLEVBS3BCO0VBeEliO1VBc0lvQixzQkFBcUIsRUFDeEI7RUF2SWpCO01BNklnQixrQkFBaUIsRUFDcEI7RUE5SWI7TUFpSmdCLG9CQUFtQixFQUN0QjtFQWxKYjtNQXFKZ0IsbUJBQWtCLEVBQ3JCO0VBdEpiO01BeUpnQixZQUFXLEVBQ2Q7RUExSmI7TUE4Sm9CLFlBQVc7TUFDWCxZQUFXO01BQ1gsaUJBQWdCLEVBQ25CO0VBaktqQjtNQW9Lb0IsWUFBVyxFQUNkO0VBcktqQjtNQXdLb0IsdUJBQXNCO01BQ3RCLGlCQUFnQixFQVluQjtFQXJMakI7UUE0S3dCLFdBQVU7UUFDVixXQUFVLEVBQ2I7RUE5S3JCO1FBaUx3QixrQkFBaUI7UUFDakIsaUNBQWdDO1FBQ2hDLFdBQVUsRUFDYjtFQXBMckI7TUF3TG9CLDZCQUE0QjtNQUM1QixpQkFBZ0IsRUFRbkI7RUFqTWpCO1FBNEx3QixZQUFXLEVBQ2Q7RUE3THJCO1FBK0x3QixXQUFVLEVBQ2I7RUFNZjtJQXRNTjtNQXlNZ0IsWUFBVyxFQStEZDtNQXhRYjtRQTRNb0IsVUFBUyxFQUNaO01BN01qQjtRQWdOb0IsWUFBVztRQUNYLGFBQVk7UUFDWixXQUFVLEVBQ2I7TUFuTmpCO1FBc05vQixRQUFPLEVBQ1Y7TUF2TmpCO1FBME5vQixpQkFBZ0I7UUFDaEIsd0JBQXVCLEVBYTFCO1FBeE9qQjtVQThOd0IsV0FBVTtVQUNWLFdBQVUsRUFDYjtRQWhPckI7VUFtT3dCLFdBQVU7VUFDVixXQUFVO1VBQ1YsaUNBQWdDO1VBQ2hDLGtCQUFpQixFQUNwQjtNQXZPckI7UUE0T3dCLFFBQU8sRUFDVjtNQTdPckI7UUFnUHdCLGlCQUFnQjtRQUNoQix3QkFBdUIsRUFDMUI7TUFsUHJCO1FBc1BvQixXQUFVO1FBQ1YsV0FBVSxFQUNiO01BeFBqQjtRQTJQb0IsaUJBQWdCO1FBQ2hCLDhCQUE2QixFQUNoQztNQTdQakI7UUFnUW9CLGlCQUFnQjtRQUNoQiw4QkFBNkIsRUFNaEM7UUF2UWpCO1VBb1F3QixTQUFRO1VBQ1IsVUFBUyxFQUNaLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2Zlc3Npb25hbC9wcm9mZXNzaW9uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmVzc2lvbmFsLWFuZGVzZW52e1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuXHJcbiAgICAuYWJvdXR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEwMCAyLjVlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgICAgIC5ob3Jpem9udGFsLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1MzgzZDM7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc3cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYudG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tdGltZWxpbmUge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAudGltZWxpbmUge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEwJTsgICBcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmJiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRpbWVsaW5lLWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmJiO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IC00MHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogODBweDtcclxuXHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAueWVhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDYwcHggMCAzMHB4O1xyXG4gICAgICAgICAgICBmb250OiA3MDAgMmVtIG1vbm9zcGFjZTtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzAzYTNiO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMDNhM2I7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMzAzYTNiO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC0xMXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGltZWxpbmU6bGFzdC1jaGlsZCAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgICAgICY6YWZ0ZXIsICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggNjBweCAxOHB4IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udDogNzAwIDEuM2VtIGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzUzODNkMztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250OiAzMDAgMWVtIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjFiMWIxO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50aW1lbGluZSB7XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogLTE0MHB4IDAgMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCwgJjpsYXN0LWNoaWxkOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pIHtcclxuICAgICAgICAgICAgICAgIC50aW1lbGluZS1pY29uLCAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2JiYjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGltZWxpbmUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnllYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweCAwIDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgIzMwM2EzYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggNDBweCAxOHB4IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtOTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgICAgIC5tYWluLXRpbWVsaW5lIHtcclxuICAgICAgICAgICAgLnRpbWVsaW5lIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pLCAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUsICY6bnRoLWNoaWxkKDJuKTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50aW1lbGluZS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC55ZWFyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweCAwIDEwMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICMzMDNhM2I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgybikge1xyXG4gICAgICAgICAgICAgICAgICAgIC50aW1lbGluZS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAueWVhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweCAwIDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgybikgLnllYXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggNDBweCAxOHB4IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggNDBweCAxOHB4IDEwMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciwgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = "<section class=\"trainning-andesenv\">\n  <div class=\"container\">\n    <div class=\"row sobre\">\n      <h2>\n        TRAINNING\n        <div class=\"horizontal-line\">\n          <div class=\"top\"></div>\n          <div class=\"bottom\"></div>\n        </div>\n      </h2>\n    </div>\n\n    <h5 class=\"category\">Cursos | Artigos | Manuais</h5>\n\n    <div class=\"content\">\n      <div class=\"card\">\n        <div class=\"icon\"><i class=\"fab fa-github\"></i></div>\n        <p class=\"title\">GITHUB <br> (CURSO BÁSICO)</p>\n        <p class=\"text\">Aplicando na prática e utilizando Git Pages</p>\n      </div>\n      <div class=\"card\">\n        <div class=\"icon\"><i class=\"fab fa-css3-alt\"></i></div>\n        <p class=\"title\">CSS <br> (CURSO BÁSICO)</p>\n        <p class=\"text\">Dando cor e vida ao seu site</p>\n      </div>\n      <div class=\"card\">\n        <div class=\"icon\"><i class=\"fab fa-js-square\"></i></div>\n        <p class=\"title\">JAVASCRIPT <br> (Boas Práticas)</p>\n        <p class=\"text\">Melhorando a escrita e funcionamento do seu código</p>\n      </div>\n    </div>\n\n    <h6>Conteúdo Trainning Completo</h6>\n\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/trainning/trainning.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/trainning/trainning.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trainning-andesenv {\n  color: #bbb;\n  background: #202020;\n  padding: 100px 0; }\n  .trainning-andesenv .sobre {\n    margin-bottom: 80px; }\n  .trainning-andesenv .sobre h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      margin: auto; }\n  .trainning-andesenv .sobre h2 .horizontal-line {\n        margin-top: 15px; }\n  .trainning-andesenv .sobre h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .trainning-andesenv .sobre h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .trainning-andesenv h6,\n  .trainning-andesenv .category {\n    text-align: center;\n    cursor: pointer; }\n  .trainning-andesenv .category {\n    font: 700 1.75em monospace;\n    color: #5383d3;\n    margin: 0 0 15px 0; }\n  .trainning-andesenv .content {\n    padding: 0 4%;\n    margin: 0 auto;\n    width: 100%;\n    max-width: 1024px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .trainning-andesenv .content .card {\n      font-size: 16px;\n      background-color: #292929;\n      width: 100%;\n      max-width: 300px;\n      min-width: 200px;\n      height: 250px;\n      margin: 0px 15px;\n      border-radius: 10px;\n      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);\n      border: 2px solid rgba(7, 7, 7, 0.12);\n      justify-content: center;\n      cursor: no-drop; }\n  .trainning-andesenv .content .card:hover {\n        background: #202020; }\n  .trainning-andesenv .content .card:hover .text {\n          transition: all 0.5s ease;\n          opacity: 1;\n          max-height: 40px; }\n  .trainning-andesenv .content .card .title {\n        font: 600 1em monospace;\n        color: white;\n        text-align: center;\n        text-transform: uppercase;\n        letter-spacing: 4px;\n        width: 100%;\n        margin: 0;\n        margin-top: 10%; }\n  .trainning-andesenv .content .card .text {\n        color: #bbb;\n        font-weight: 200;\n        font-size: 13px;\n        letter-spacing: 2px;\n        text-align: center;\n        width: 80%;\n        margin: 0 auto;\n        margin-top: 20px;\n        opacity: 0;\n        max-height: 0;\n        transition: all .7s ease; }\n  .trainning-andesenv .content .card .icon {\n        color: white;\n        font-size: 3em;\n        background: #5383d3;\n        margin: 0 auto;\n        width: 100%;\n        height: 80px;\n        max-width: 80px;\n        border-radius: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n  .trainning-andesenv h6 {\n    font: 700 1.3em cursive;\n    margin: 7.5% 0 0 0; }\n  @media screen and (max-width: 767px) {\n    .trainning-andesenv .content {\n      flex-direction: column; }\n    .trainning-andesenv .content .card {\n      margin: 15px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90cmFpbm5pbmcvQzpcXFVzZXJzXFxBbmRlcnNvblxcRG9jdW1lbnRzXFxQcm9qZXRvc1xccG9ydGZvbGlvL3NyY1xcYXBwXFxob21lXFx0cmFpbm5pbmdcXHRyYWlubmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsaUJBQWdCLEVBeUluQjtFQTVJRDtJQU1RLG9CQUFtQixFQXVCdEI7RUE3Qkw7TUFTWSwwQkFBeUI7TUFDekIsMEJBQXlCO01BRXpCLGFBQVksRUFnQmY7RUE1QlQ7UUFlZ0IsaUJBQWdCLEVBWW5CO0VBM0JiO1VBa0JvQixvQkFBbUI7VUFDbkIsWUFBVztVQUNYLGVBQWM7VUFDZCxZQUFXLEVBS2Q7RUExQmpCO1lBdUJ3QixtQkFBa0I7WUFDbEIsWUFBVyxFQUNkO0VBekJyQjs7SUFpQ1EsbUJBQWtCO0lBQ2xCLGdCQUFlLEVBQ2xCO0VBbkNMO0lBc0NRLDJCQUEwQjtJQUMxQixlQUFjO0lBRWQsbUJBQWtCLEVBQ3JCO0VBMUNMO0lBNkNRLGNBQWE7SUFFYixlQUFjO0lBQ2QsWUFBVztJQUNYLGtCQUFpQjtJQUVqQixjQUFhO0lBQ2Isd0JBQXVCO0lBQ3ZCLG9CQUFtQixFQXVFdEI7RUE1SEw7TUF3RFksZ0JBQWU7TUFDZiwwQkFBeUI7TUFFekIsWUFBVztNQUNYLGlCQUFnQjtNQUNoQixpQkFBZ0I7TUFDaEIsY0FBYTtNQUNiLGlCQUFnQjtNQUVoQixvQkFBbUI7TUFDbkIsNkNBQTRDO01BQzVDLHNDQUFxQztNQUNyQyx3QkFBdUI7TUFFdkIsZ0JBQWUsRUFxRGxCO0VBM0hUO1FBeUVnQixvQkFBbUIsRUFPdEI7RUFoRmI7VUE0RW9CLDBCQUF5QjtVQUN6QixXQUFVO1VBQ1YsaUJBQWUsRUFDbEI7RUEvRWpCO1FBbUZnQix3QkFBdUI7UUFDdkIsYUFBWTtRQUNaLG1CQUFrQjtRQUNsQiwwQkFBeUI7UUFDekIsb0JBQW1CO1FBRW5CLFlBQVc7UUFDWCxVQUFTO1FBQ1QsZ0JBQWUsRUFDbEI7RUE1RmI7UUErRmdCLFlBQVc7UUFDWCxpQkFBZ0I7UUFDaEIsZ0JBQWU7UUFDZixvQkFBbUI7UUFDbkIsbUJBQWtCO1FBRWxCLFdBQVU7UUFDVixlQUFjO1FBQ2QsaUJBQWdCO1FBQ2hCLFdBQVU7UUFDVixjQUFZO1FBQ1oseUJBQXdCLEVBQzNCO0VBM0diO1FBOEdnQixhQUFZO1FBQ1osZUFBYztRQUVkLG9CQUFtQjtRQUNuQixlQUFjO1FBQ2QsWUFBVztRQUNYLGFBQVk7UUFDWixnQkFBZTtRQUNmLG9CQUFtQjtRQUNuQixjQUFhO1FBQ2Isd0JBQXVCO1FBQ3ZCLG9CQUFtQixFQUN0QjtFQTFIYjtJQStIUSx3QkFBdUI7SUFDdkIsbUJBQWtCLEVBQ3JCO0VBRUQ7SUFuSUo7TUFxSVksdUJBQXNCLEVBQ3pCO0lBdElUO01BeUlZLGVBQWMsRUFDakIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdHJhaW5uaW5nL3RyYWlubmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFpbm5pbmctYW5kZXNlbnZ7XHJcbiAgICBjb2xvcjogI2JiYjtcclxuICAgIGJhY2tncm91bmQ6ICMyMDIwMjA7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG5cclxuICAgIC5zb2JyZXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udDogMTAwIDIuNWVtIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgICAgIC5ob3Jpem9udGFsLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1MzgzZDM7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJi50b3Age1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoNixcclxuICAgIC5jYXRlZ29yeXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yeXtcclxuICAgICAgICBmb250OiA3MDAgMS43NWVtIG1vbm9zcGFjZTtcclxuICAgICAgICBjb2xvcjogIzUzODNkMztcclxuXHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDQlO1xyXG5cclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDcsIDcsIDcsIDAuMTIpO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIwMjAyMDtcclxuXHJcbiAgICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDYwMCAxZW0gbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjdzIGVhc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1MzgzZDM7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuXHJcbiAgICBoNntcclxuICAgICAgICBmb250OiA3MDAgMS4zZW0gY3Vyc2l2ZTtcclxuICAgICAgICBtYXJnaW46IDcuNSUgMCAwIDA7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IC5jYXJke1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = __webpack_require__(/*! C:\Users\Anderson\Documents\Projetos\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map