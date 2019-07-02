(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-header></app-header>-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/header/header.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/header/header.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n  <img class=\"logo\" src=\"assets/images/logo1.png\" alt=\"betty logo\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/registration-page/registration-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/registration-page/registration-page.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" style=\"display: grid\">\n\n  <div class=\"header-container\">\n    <img class=\"logo\" src=\"assets/images/logo.png\" alt=\"betty logo\">\n  </div>\n\n  <section class=\"banner-section\">\n    <img class=\"banner\" src=\"assets/images/winners-banner-bg.png\" alt=\"banner\">\n  </section>\n\n  <section class=\"registration-progress\">\n    <div class=\"one\"><span>1</span></div>\n    <div class=\"two\"><span>2</span></div>\n    <div class=\"three\"><span>3</span></div>\n    <div class=\"four\"><span>4</span></div>\n  </section>\n\n  <section class=\"get-to-know\"\n           style=\" font-weight: normal; color: #006c60;font-size: 1.5rem; height: 3rem; display: flex; justify-content: center; margin-top: 1rem;\">\n    <span>Trying to get to know you!</span>\n  </section>\n\n  <form [formGroup]=\"registrationFrom\" class=\"registration\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 5rem;\">\n    <div class=\"registration-container-one form-group\" style=\" justify-self: flex-end;\">\n      <mat-form-field appearance=\"legacy\">\n        <input matInput  class=\"form-control\" formControlName=\"firstName\" placeholder=\"First Name\">\n      </mat-form-field>\n      <br>\n      <mat-form-field appearance=\"legacy\">\n        <input matInput class=\"form-control\" formControlName=\"lastName\" placeholder=\"Last Name\">\n      </mat-form-field>\n      <br>\n      <mat-form-field appearance=\"legacy\">\n        <input matInput class=\"form-control\" formControlName=\"promoCode\" placeholder=\"promo-code\">\n      </mat-form-field>\n    </div>\n\n    <div classs=\"registration-container-two\">\n      <mat-form-field appearance=\"legacy\" style=\"margin-bottom: 2rem;\">\n        <input matInput class=\"form-control\" formControlName=\"userName\" placeholder=\"Choose a username\">\n      </mat-form-field>\n      <div style=\"display: flex;\">\n        <mat-radio-button value=\"Always\">Female</mat-radio-button>\n        <span style=\"margin:0 1rem;\">|</span>\n        <mat-radio-button value=\"Never\">Male</mat-radio-button>\n      </div>\n    </div>\n  </form>\n  </div>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/user-referral/user-referral.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/user-referral/user-referral.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"grid-container\">\n  <div class=\"container\">\n    <div class=\"promo-message\">\n      <div class=\"msg-header\">\n        <span>Want more bonus from Betty</span><br>\n        <span> for free? </span>\n      </div>\n      <div class=\"msg-body\">\n        <span>Get free bonus up to ₦2000 when you </span><br>\n        <span>refer a friend to play Betty! </span>\n      </div>\n      <div class=\"msg-footer\">\n        <span>How Invite Works!</span>\n      </div>\n    </div>\n\n    <div class=\"promo-image\">\n      <img src=\"assets/images/message-image.png\">\n    </div>\n\n    <div class=\"share-invite\">\n      <div class=\"share-msg\">\n        <span> Share with your Friend</span>\n      </div>\n\n      <form [formGroup]=\"promoCodeForm\">\n        <div class=\"form-group share-form \">\n          <input style=\"width: 100%; height: 3rem;\" type=\"text\"\n                 class=\"form-control\" formControlName=\"promoCode\"\n                 placeholder=\"Enter promo code\">\n        </div>\n      </form>\n\n      <div class=\"invite-friend-btn\" style=\"justify-self: center; width: 100%;\">\n\n        <button class=\"btn to-know\" type=\"submit\" style=\"width: 100%\" [disabled]=\"!promoCodeForm.valid\" (click)=\"submitPromoCode()\">\n          <span style=\"font-size: 1rem; color: #ffff\" >INVITE FRIENDS</span>\n        </button>\n\n      </div>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found404-component/not-found404-component.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found404-component/not-found404-component.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Ooooops! could not find page\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_user_referral_user_referral_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/user-referral/user-referral.component */ "./src/app/component/user-referral/user-referral.component.ts");
/* harmony import */ var _component_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/registration-page/registration-page.component */ "./src/app/component/registration-page/registration-page.component.ts");
/* harmony import */ var _resolvers_promo_code_resolver_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers/promo-code-resolver.resolver */ "./src/app/resolvers/promo-code-resolver.resolver.ts");
/* harmony import */ var _not_found404_component_not_found404_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found404-component/not-found404-component.component */ "./src/app/not-found404-component/not-found404-component.component.ts");







var routes = [
    { path: 'referral-page', component: _component_user_referral_user_referral_component__WEBPACK_IMPORTED_MODULE_3__["UserReferralComponent"] },
    { path: 'registration-page', component: _component_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationPageComponent"] },
    {
        path: 'registration-page/:promo-code',
        component: _component_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationPageComponent"],
        resolve: { promoCode: _resolvers_promo_code_resolver_resolver__WEBPACK_IMPORTED_MODULE_5__["PromoCodeResolver"] }
    },
    { path: '', redirectTo: '/referral-page', pathMatch: 'full' },
    { path: '**', component: _not_found404_component_not_found404_component_component__WEBPACK_IMPORTED_MODULE_6__["NotFound404ComponentComponent"] },
    { path: '**', redirectTo: '/404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'betty-referral';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_user_referral_user_referral_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/user-referral/user-referral.component */ "./src/app/component/user-referral/user-referral.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _component_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/registration-page/registration-page.component */ "./src/app/component/registration-page/registration-page.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _not_found404_component_not_found404_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found404-component/not-found404-component.component */ "./src/app/not-found404-component/not-found404-component.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_user_referral_user_referral_component__WEBPACK_IMPORTED_MODULE_5__["UserReferralComponent"],
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _component_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationPageComponent"],
                _not_found404_component_not_found404_component_component__WEBPACK_IMPORTED_MODULE_13__["NotFound404ComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container{\r\n  display: grid;\r\n  justify-items: start;\r\n  align-items: center;\r\n  height: 4rem;\r\n  width:100%;\r\n  background:#4CC6B7;\r\n  padding:0px;\r\n  margin:0px;\r\n}\r\n\r\n.logo{\r\n  height: 1.5rem;\r\n  align-self: center;\r\n  /*margin-top:5%;*/\r\n  margin-left:2%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6ImhlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kOiM0Q0M2Qjc7XHJcbiAgcGFkZGluZzowcHg7XHJcbiAgbWFyZ2luOjBweDtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIC8qbWFyZ2luLXRvcDo1JTsqL1xyXG4gIG1hcmdpbi1sZWZ0OjIlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/registration-page/registration-page.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/component/registration-page/registration-page.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container {\r\n  display: grid;\r\n  justify-items: start;\r\n  align-items: center;\r\n  height: 6rem;\r\n  width: 100%;\r\n  background: whitesmoke;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.logo {\r\n  height: 3rem;\r\n  align-self: center;\r\n  width: auto;\r\n  margin-left: 10%;\r\n\r\n}\r\n\r\n.banner {\r\n  height: 10rem;\r\n  width: 100%;\r\n}\r\n\r\n.one {\r\n  background-color: #f6a20a;\r\n  color: #fff;\r\n  font-size: 1rem;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  margin: 0 0.5rem;\r\n  text-align: center;\r\n  border: 1px solid #f6a20a;\r\n  display: inline-block;\r\n  border-radius: 100%;\r\n}\r\n\r\n.two {\r\n  background-color: transparent;\r\n  color: #f6a20a;\r\n  font-size: 1rem;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  margin: 0 0.5rem;\r\n  text-align: center;\r\n  border: 1px solid #f6a20a;\r\n  display: inline-block;\r\n  border-radius: 100%;\r\n}\r\n\r\n.three {\r\n  background-color: transparent;\r\n  color: #f6a20a;\r\n  font-size: 1rem;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  margin: 0 0.5rem;\r\n  text-align: center;\r\n  border: 1px solid #f6a20a;\r\n  display: inline-block;\r\n  border-radius: 100%;\r\n}\r\n\r\n.four {\r\n  background-color: transparent;\r\n  color: #f6a20a;\r\n  font-size: 1rem;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  margin: 0 0.5rem;\r\n  text-align: center;\r\n  border: 1px solid #f6a20a;\r\n  display: inline-block;\r\n  border-radius: 100%;\r\n}\r\n\r\n.registration-progress {\r\n  margin-top: 1.2rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.registration-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/*.registration-container > * {*/\r\n\r\n/*  width: 100%;*/\r\n\r\n/*}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi1wYWdlL3JlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDLGlCQUFpQjs7QUFDakIsSUFBSSIsImZpbGUiOiJyZWdpc3RyYXRpb24tcGFnZS9yZWdpc3RyYXRpb24tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDZyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcblxyXG59XHJcblxyXG4uYmFubmVyIHtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ub25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZhMjBhO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y2YTIwYTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLnR3byB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICNmNmEyMGE7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBtYXJnaW46IDAgMC41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjZhMjBhO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnRocmVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2Y2YTIwYTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNmEyMGE7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2Y2YTIwYTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNmEyMGE7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5yZWdpc3RyYXRpb24tcHJvZ3Jlc3Mge1xyXG4gIG1hcmdpbi10b3A6IDEuMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWdpc3RyYXRpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qLnJlZ2lzdHJhdGlvbi1jb250YWluZXIgPiAqIHsqL1xyXG4vKiAgd2lkdGg6IDEwMCU7Ki9cclxuLyp9Ki9cclxuIl19 */"

/***/ }),

/***/ "./src/app/component/registration-page/registration-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/registration-page/registration-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: RegistrationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function() { return RegistrationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegistrationPageComponent = /** @class */ (function () {
    function RegistrationPageComponent(fb, route) {
        this.fb = fb;
        this.route = route;
        this.promoCode = this.route.snapshot.data['promoCode'];
    }
    RegistrationPageComponent.prototype.ngOnInit = function () {
        this.initializeContactForm();
    };
    RegistrationPageComponent.prototype.initializeContactForm = function () {
        this.registrationFrom = this.fb.group({
            firstName: [''],
            lastName: [''],
            promoCode: [this.promoCode],
            userName: ['']
        });
    };
    RegistrationPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-page',
            template: __webpack_require__(/*! raw-loader!./registration-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/registration-page/registration-page.component.html"),
            styles: [__webpack_require__(/*! ./registration-page.component.css */ "./src/app/component/registration-page/registration-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RegistrationPageComponent);
    return RegistrationPageComponent;
}());



/***/ }),

/***/ "./src/app/component/user-referral/user-referral.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/user-referral/user-referral.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container{\r\n  display:grid;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-row-gap: 1.5rem;\r\n  justify-self: center;\r\n  align-self: center;\r\n}\r\n\r\n.promo-image {\r\n  justify-self: center;\r\n}\r\n\r\n.promo-message {\r\n  display: grid;\r\n  grid-row-gap: 15px;\r\n  padding: 20px;\r\n}\r\n\r\n.msg-header {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.msg-body {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.msg-footer {\r\n  font-size: 0.8rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.share-invite {\r\n  padding: 20px;\r\n  font-size: 0.6rem;\r\n  display: grid;\r\n  grid-row-gap: 10px;\r\n}\r\n\r\n.invite-friend-btn {\r\n  background: #f6a20a;\r\n  font-family: Nunito, sans-serif;\r\n  font-size: 2em;\r\n  border: none;\r\n}\r\n\r\n.to-know {\r\n  background: #f6a20a;\r\n  box-shadow: 2px 2px 0 #ba7436;\r\n  /*border-radius: 1.5em;*/\r\n  font-family: Nunito, sans-serif;\r\n  font-size: 0.8em;\r\n  border: none;\r\n}\r\n\r\n.share-msg{\r\n  font-size:0.8rem;\r\n}\r\n\r\n.form-group{\r\n  margin-bottom: 0px;\r\n}\r\n\r\n@media screen and (max-width: 699px) {\r\n  .container {\r\n    display: grid;\r\n    grid-row-gap: 4rem;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n  .container {\r\n    display: grid;\r\n    grid-row-gap: 3rem;\r\n    justify-self: center;\r\n    align-self: center;\r\n    max-width: 500px;\r\n  }\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcmVmZXJyYWwvdXNlci1yZWZlcnJhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUdBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0FBRUYiLCJmaWxlIjoidXNlci1yZWZlcnJhbC91c2VyLXJlZmVycmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXJ7XHJcbiAgZGlzcGxheTpncmlkO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtcm93LWdhcDogMS41cmVtO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb21vLWltYWdlIHtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb21vLW1lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1yb3ctZ2FwOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5tc2ctaGVhZGVyIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLm1zZy1ib2R5IHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLm1zZy1mb290ZXIge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2hhcmUtaW52aXRlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uaW52aXRlLWZyaWVuZC1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICNmNmEyMGE7XHJcbiAgZm9udC1mYW1pbHk6IE51bml0bywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4udG8ta25vdyB7XHJcbiAgYmFja2dyb3VuZDogI2Y2YTIwYTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDAgI2JhNzQzNjtcclxuICAvKmJvcmRlci1yYWRpdXM6IDEuNWVtOyovXHJcbiAgZm9udC1mYW1pbHk6IE51bml0bywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnNoYXJlLW1zZ3tcclxuICBmb250LXNpemU6MC44cmVtO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5OXB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiA0cmVtO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAzcmVtO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/user-referral/user-referral.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/user-referral/user-referral.component.ts ***!
  \********************************************************************/
/*! exports provided: UserReferralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReferralComponent", function() { return UserReferralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_click_to_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/click-to-chat.service */ "./src/app/services/click-to-chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserReferralComponent = /** @class */ (function () {
    function UserReferralComponent(fb, router, clickToChat) {
        this.fb = fb;
        this.router = router;
        this.clickToChat = clickToChat;
        this.url = '';
        this.mobNumPattern = /^\d{4}$/;
    }
    UserReferralComponent.prototype.ngOnInit = function () {
        this.initializeContactForm();
    };
    UserReferralComponent.prototype.initializeContactForm = function () {
        this.promoCodeForm = this.fb.group({
            promoCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.mobNumPattern)]]
        });
    };
    UserReferralComponent.prototype.submitPromoCode = function () {
        var promocode = this.promoCodeForm.value.promoCode;
        var urlText = 'signup on bettybingo at http://bettybingo.co.zm/registration-page/' + promocode + ' for amazing gaming experience';
        console.log('urltext', urlText);
        var encodedUrlText = encodeURIComponent(urlText);
        // const encodedUrlText = encodeURI(urlText);
        console.log('encodedurltext', encodedUrlText);
        var finalUrl = "https://wa.me/?text=" + encodedUrlText;
        console.log('final url', finalUrl);
        window.location.href = finalUrl;
    };
    UserReferralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-referral',
            template: __webpack_require__(/*! raw-loader!./user-referral.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/user-referral/user-referral.component.html"),
            styles: [__webpack_require__(/*! ./user-referral.component.css */ "./src/app/component/user-referral/user-referral.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_click_to_chat_service__WEBPACK_IMPORTED_MODULE_3__["ClickToChatService"]])
    ], UserReferralComponent);
    return UserReferralComponent;
}());



/***/ }),

/***/ "./src/app/not-found404-component/not-found404-component.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/not-found404-component/not-found404-component.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9ub3QtZm91bmQ0MDQtY29tcG9uZW50L25vdC1mb3VuZDQwNC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found404-component/not-found404-component.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/not-found404-component/not-found404-component.component.ts ***!
  \****************************************************************************/
/*! exports provided: NotFound404ComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFound404ComponentComponent", function() { return NotFound404ComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFound404ComponentComponent = /** @class */ (function () {
    function NotFound404ComponentComponent() {
    }
    NotFound404ComponentComponent.prototype.ngOnInit = function () {
    };
    NotFound404ComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found404-component',
            template: __webpack_require__(/*! raw-loader!./not-found404-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found404-component/not-found404-component.component.html"),
            styles: [__webpack_require__(/*! ./not-found404-component.component.css */ "./src/app/not-found404-component/not-found404-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFound404ComponentComponent);
    return NotFound404ComponentComponent;
}());



/***/ }),

/***/ "./src/app/resolvers/promo-code-resolver.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/resolvers/promo-code-resolver.resolver.ts ***!
  \***********************************************************/
/*! exports provided: PromoCodeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoCodeResolver", function() { return PromoCodeResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var PromoCodeResolver = /** @class */ (function () {
    function PromoCodeResolver() {
    }
    PromoCodeResolver.prototype.resolve = function (route) {
        var promoCode = route.paramMap.get('promo-code');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(promoCode);
    };
    PromoCodeResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PromoCodeResolver);
    return PromoCodeResolver;
}());



/***/ }),

/***/ "./src/app/services/click-to-chat.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/click-to-chat.service.ts ***!
  \***************************************************/
/*! exports provided: ClickToChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickToChatService", function() { return ClickToChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ClickToChatService = /** @class */ (function () {
    function ClickToChatService(http) {
        this.http = http;
    }
    ClickToChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClickToChatService);
    return ClickToChatService;
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

module.exports = __webpack_require__(/*! D:\workspace\work\projects\betty-referral-demo\betty-referral\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map