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

module.exports = "<app-navigation></app-navigation>\n\n<!-- <main class=\"main-content\" [@routerAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n</main> -->\n\n<main class=\"main-content\">\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/code-deco/code-deco.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/code-deco/code-deco.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-deco\">\n  <span class=\"open-bracket\">&#60;</span>\n  <span class=\"dot\">.</span>\n  <span class=\"slash\">/</span>\n  <span class=\"closed-bracket\">&#62;</span>\n  <span class=\"lower\">_</span>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/date-badge/date-badge.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/date-badge/date-badge.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"date-badge\">\n  <span class=\"icon\">\n    <i class=\"far fa-calendar\"></i>\n  </span>\n  <div class=\"content\">\n      <span class=\"description\">{{description}}</span>\n      <span class=\"date\">{{date}}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/intro/intro.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/intro/intro.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"intro\">\n  <h1 class=\"intro-text\">\n    H&#233;,<br />\n    Ik ben <span class=\"name\">Sander</span>,<br />\n    web developer\n  </h1>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/life-period/life-period.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/life-period/life-period.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"life-period\">\n  <div class=\"logo-block\" [style.background-color]=\"logoBackground\">\n    <a\n      class=\"logo\"\n      target=\"_blank\"\n      [href]=\"url\"\n      [ngStyle]=\"{'background-image':'url(' + path + ')'}\"\n    ></a>\n  </div>\n  <div class=\"context\">\n    <h2 class=\"item-title\">{{ title }}</h2>\n    <div class=\"period\">\n      <i class=\"far fa-calendar\"></i>\n      <span>{{ start }} - {{ end }}</span>\n    </div>\n    <p [innerHTML]=\"content\">fdnjiwenfjinf</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"app-navigation\">\n    <a class=\"navigation-logo\" routerLink=\"\">\n        <span class=\"s-logo\">S</span>\n        <span class=\"logo-text\">Sander</span>\n    </a>\n\n    <section class=\"navigation\">\n        <a routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/\"><i class=\"fas fa-home\"></i></a>\n        <a routerLinkActive=\"active\" routerLink=\"/school\"><i class=\"fas fa-school\"></i></a>\n        <a routerLinkActive=\"active\" routerLink=\"/work\"><i class=\"fas fa-briefcase\"></i></a>\n        <a routerLinkActive=\"active\" routerLink=\"/tech\"><i class=\"fas fa-code\"></i></a>\n    </section>\n\n    <section class=\"navigation-social\">\n        <a href=\"https://www.facebook.com/sander.teunissen.9\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a>\n        <a href=\"https://twitter.com/sander21021998\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a>\n        <a href=\"https://www.linkedin.com/in/sft-teunissen/\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a>\n        <a href=\"https://github.com/SanderTeunissen\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n    </section>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/organization-badge/organization-badge.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/organization-badge/organization-badge.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"organization-badge\">\n  <img [src]=\"imgUrl\" [alt]=\"imgAlt\" class=\"icon\">\n  <div class=\"content\">\n    <span class=\"description\">{{ description }}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/page-title/page-title.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/page-title/page-title.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">{{content}}</h1>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/section-title/section-title.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/section-title/section-title.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"section-title\">{{content}}</h2>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tech-list/tech-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tech-list/tech-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tech-list\">\n    <div class=\"row head\">\n        <div class=\"row-item tech\">Techniek</div>\n        <div class=\"row-item experience\">Ervaring</div>\n    </div>\n    <div class=\"row\" *ngFor=\"let tech of techList\">\n        <div class=\"row-item tech\">\n            <div class=\"tech-logo\" [style.backgroundImage]=\"'url('+ tech.logoPath +')'\"></div>\n            <span class=\"tech-name\">{{tech.name}}</span>\n        </div>\n        <div class=\"row-item experience\">\n            <div class=\"bar\" [style.backgroundColor]=\"tech.colorCode\" [style.flex]=\"tech.skillLevel\"></div>\n            <span class=\"percentage\">{{tech.skillLevel}}%</span>\n            <div class=\"fill\" [style.flex]=\"100 - tech.skillLevel\"></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home-page/home-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home-page/home-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n  <intro></intro>\n  <div class=\"front-page-deco\">\n    <code-deco></code-deco>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/school-page/school-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/school-page/school-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page padding\">\n  <page-title content=\"Opleidingen\"></page-title>\n\n  <life-period\n    *ngFor=\"let e of edu\"\n    [title]=\"e.title\"\n    [url]=\"e.url\"\n    [content]=\"e.content\"\n    [start]=\"e.period.start\"\n    [end]=\"e.period.end\"\n    [logoPath]=\"e.logo.path\"\n    [logoBackground]=\"e.logo.backgroundColor\"\n  ></life-period>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tech-page/tech-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tech-page/tech-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page padding\">\n  <page-title content=\"Technologi&#235;n\"></page-title>\n  <div class=\"content\">\n    <p>\n      Als webdeveloper heb ik ervaring met verschillende webtechnieken en\n      frameworks op zowel de front als back-end. Onderstaande lijst biedt een\n      overzicht van de technieken die ik beheers.\n    </p>\n  </div>\n  <tech-list></tech-list>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/work-page/work-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/work-page/work-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page padding\">\n  <page-title content=\"Werkervaring\"></page-title>\n\n  <life-period\n    *ngFor=\"let e of work\"\n    [title]=\"e.title\"\n    [url]=\"e.url\"\n    [content]=\"e.content\"\n    [start]=\"e.period.start\"\n    [end]=\"e.period.end\"\n    [logoPath]=\"e.logo.path\"\n    [logoBackground]=\"e.logo.backgroundColor\"\n  ></life-period>\n</div>\n"

/***/ }),

/***/ "./src/app/animations/router.animation.ts":
/*!************************************************!*\
  !*** ./src/app/animations/router.animation.ts ***!
  \************************************************/
/*! exports provided: routerAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerAnimation", function() { return routerAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routerAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routerAnimation", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => *", [
        // style({ position: "relative" }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "50px", opacity: 0 })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1s ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "68px", opacity: 1 }))], { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  margin-left: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59IiwiLm1haW4tY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufSJdfQ== */"

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
/* harmony import */ var _animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/router.animation */ "./src/app/animations/router.animation.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Portfolio - Sander Teunissen';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            animations: [_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["routerAnimation"]],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["routes"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");

var routes = [
    {
        path: "school",
        component: _pages__WEBPACK_IMPORTED_MODULE_0__["SchoolPageComponent"]
    }, {
        path: "tech",
        component: _pages__WEBPACK_IMPORTED_MODULE_0__["TechPageComponent"]
    }, {
        path: "work",
        component: _pages__WEBPACK_IMPORTED_MODULE_0__["WorkPageComponent"]
    }, {
        path: "",
        component: _pages__WEBPACK_IMPORTED_MODULE_0__["HomePageComponent"],
        pathMatch: "full"
    }
];


/***/ }),

/***/ "./src/app/components/code-deco/code-deco.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/code-deco/code-deco.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-deco {\n  font-size: 200px;\n}\n.page-deco .open-bracket,\n.page-deco .closed-bracket,\n.page-deco .dot,\n.page-deco .slash {\n  color: var(--font-color);\n}\n.page-deco .lower {\n  color: var(--primary-color);\n  -webkit-animation: blink 2s infinite;\n          animation: blink 2s infinite;\n}\n@-webkit-keyframes blink {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  51% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes blink {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  51% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9jb2RlLWRlY28vY29kZS1kZWNvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvZGUtZGVjby9jb2RlLWRlY28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGO0FEQ0U7Ozs7RUFJRSx3QkFBQTtBQ0NKO0FERUU7RUFDRSwyQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNBSjtBREdFO0VBQ0U7SUFDRSxVQUFBO0VDREo7RURHRTtJQUNFLFVBQUE7RUNESjtFREdFO0lBQ0UsVUFBQTtFQ0RKO0VER0U7SUFDRSxVQUFBO0VDREo7QUFDRjtBRFhFO0VBQ0U7SUFDRSxVQUFBO0VDREo7RURHRTtJQUNFLFVBQUE7RUNESjtFREdFO0lBQ0UsVUFBQTtFQ0RKO0VER0U7SUFDRSxVQUFBO0VDREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29kZS1kZWNvL2NvZGUtZGVjby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWRlY28ge1xuICBmb250LXNpemU6IDIwMHB4O1xuXG4gIC5vcGVuLWJyYWNrZXQsXG4gIC5jbG9zZWQtYnJhY2tldCxcbiAgLmRvdCxcbiAgLnNsYXNoIHtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIH1cblxuICAubG93ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBhbmltYXRpb246IGJsaW5rIDJzIGluZmluaXRlO1xuICB9XG5cbiAgQGtleWZyYW1lcyBibGluayB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUxJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG4iLCIucGFnZS1kZWNvIHtcbiAgZm9udC1zaXplOiAyMDBweDtcbn1cbi5wYWdlLWRlY28gLm9wZW4tYnJhY2tldCxcbi5wYWdlLWRlY28gLmNsb3NlZC1icmFja2V0LFxuLnBhZ2UtZGVjbyAuZG90LFxuLnBhZ2UtZGVjbyAuc2xhc2gge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG4ucGFnZS1kZWNvIC5sb3dlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYW5pbWF0aW9uOiBibGluayAycyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTElIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/code-deco/code-deco.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/code-deco/code-deco.component.ts ***!
  \*************************************************************/
/*! exports provided: CodeDecoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeDecoComponent", function() { return CodeDecoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CodeDecoComponent = /** @class */ (function () {
    function CodeDecoComponent() {
    }
    CodeDecoComponent.prototype.ngOnInit = function () {
    };
    CodeDecoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'code-deco',
            template: __webpack_require__(/*! raw-loader!./code-deco.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/code-deco/code-deco.component.html"),
            styles: [__webpack_require__(/*! ./code-deco.component.scss */ "./src/app/components/code-deco/code-deco.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CodeDecoComponent);
    return CodeDecoComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/app/components/index.ts");





var componentsList = [
    ___WEBPACK_IMPORTED_MODULE_4__["CodeDecoComponent"],
    ___WEBPACK_IMPORTED_MODULE_4__["DateBadgeComponent"],
    ___WEBPACK_IMPORTED_MODULE_4__["IntroComponent"],
    ___WEBPACK_IMPORTED_MODULE_4__["LifePeriodComponent"],
    ___WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
    ___WEBPACK_IMPORTED_MODULE_4__["OrganizationBadgeComponent"],
    ___WEBPACK_IMPORTED_MODULE_4__["PageTitleComponent"],
    ___WEBPACK_IMPORTED_MODULE_4__["SectionTitleComponent"],
    ___WEBPACK_IMPORTED_MODULE_4__["TechListComponent"],
];
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [componentsList],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            exports: [componentsList]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/date-badge/date-badge.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/date-badge/date-badge.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".date-badge {\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  background-color: #222222;\n  color: var(--primary-color);\n}\n@media only screen and (min-width: 701px) {\n  .date-badge {\n    margin-right: 20px;\n    margin-bottom: 5px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .date-badge {\n    margin-top: 15px;\n  }\n}\n@media only screen and (min-width: 701px) {\n  .date-badge .icon {\n    font-size: 40px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .date-badge .icon {\n    font-size: 25px;\n  }\n}\n.date-badge .icon .far {\n  color: var(--primary-color);\n}\n.date-badge .content {\n  display: flex;\n  flex-direction: column;\n  margin-left: 30px;\n  margin-right: 10px;\n}\n@media only screen and (min-width: 701px) {\n  .date-badge .content .description {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .date-badge .content .description {\n    font-size: 13px;\n  }\n}\n@media only screen and (min-width: 701px) {\n  .date-badge .content .date {\n    font-size: 20px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .date-badge .content .date {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9kYXRlLWJhZGdlL2RhdGUtYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGF0ZS1iYWRnZS9kYXRlLWJhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFVQSx5QkFBQTtFQUNBLDJCQUFBO0FDVEY7QURBRTtFQU5GO0lBT0ksa0JBQUE7SUFDQSxrQkFBQTtFQ0dGO0FBQ0Y7QURGRTtFQVZGO0lBV0ksZ0JBQUE7RUNLRjtBQUNGO0FEQ0k7RUFERjtJQUVJLGVBQUE7RUNFSjtBQUNGO0FEQUk7RUFMRjtJQU1JLGVBQUE7RUNHSjtBQUNGO0FEREk7RUFDRSwyQkFBQTtBQ0dOO0FEQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFTTtFQURGO0lBRUksZUFBQTtFQ0NOO0FBQ0Y7QURDTTtFQUxGO0lBTUksZUFBQTtFQ0VOO0FBQ0Y7QURFTTtFQURGO0lBRUksZUFBQTtFQ0NOO0FBQ0Y7QURDTTtFQUxGO0lBTUksZUFBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RhdGUtYmFkZ2UvZGF0ZS1iYWRnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlLWJhZGdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblxuICAuaWNvbiB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG5cbiAgICAuZmFyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRhdGUge1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmRhdGUtYmFkZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgLmRhdGUtYmFkZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmRhdGUtYmFkZ2Uge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgLmRhdGUtYmFkZ2UgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuZGF0ZS1iYWRnZSAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59XG4uZGF0ZS1iYWRnZSAuaWNvbiAuZmFyIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmRhdGUtYmFkZ2UgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xuICAuZGF0ZS1iYWRnZSAuY29udGVudCAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuZGF0ZS1iYWRnZSAuY29udGVudCAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xuICAuZGF0ZS1iYWRnZSAuY29udGVudCAuZGF0ZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5kYXRlLWJhZGdlIC5jb250ZW50IC5kYXRlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/date-badge/date-badge.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/date-badge/date-badge.component.ts ***!
  \***************************************************************/
/*! exports provided: DateBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateBadgeComponent", function() { return DateBadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateBadgeComponent = /** @class */ (function () {
    function DateBadgeComponent() {
        this.description = "";
        this.date = "";
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('description'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DateBadgeComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('date'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DateBadgeComponent.prototype, "date", void 0);
    DateBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'date-badge',
            template: __webpack_require__(/*! raw-loader!./date-badge.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/date-badge/date-badge.component.html"),
            styles: [__webpack_require__(/*! ./date-badge.component.scss */ "./src/app/components/date-badge/date-badge.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DateBadgeComponent);
    return DateBadgeComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: CodeDecoComponent, DateBadgeComponent, IntroComponent, LifePeriodComponent, NavigationComponent, OrganizationBadgeComponent, PageTitleComponent, SectionTitleComponent, TechListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_deco_code_deco_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-deco/code-deco.component */ "./src/app/components/code-deco/code-deco.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeDecoComponent", function() { return _code_deco_code_deco_component__WEBPACK_IMPORTED_MODULE_0__["CodeDecoComponent"]; });

/* harmony import */ var _date_badge_date_badge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-badge/date-badge.component */ "./src/app/components/date-badge/date-badge.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateBadgeComponent", function() { return _date_badge_date_badge_component__WEBPACK_IMPORTED_MODULE_1__["DateBadgeComponent"]; });

/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/components/intro/intro.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"]; });

/* harmony import */ var _life_period_life_period_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./life-period/life-period.component */ "./src/app/components/life-period/life-period.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LifePeriodComponent", function() { return _life_period_life_period_component__WEBPACK_IMPORTED_MODULE_3__["LifePeriodComponent"]; });

/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]; });

/* harmony import */ var _organization_badge_organization_badge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organization-badge/organization-badge.component */ "./src/app/components/organization-badge/organization-badge.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganizationBadgeComponent", function() { return _organization_badge_organization_badge_component__WEBPACK_IMPORTED_MODULE_5__["OrganizationBadgeComponent"]; });

/* harmony import */ var _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-title/page-title.component */ "./src/app/components/page-title/page-title.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function() { return _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__["PageTitleComponent"]; });

/* harmony import */ var _section_title_section_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section-title/section-title.component */ "./src/app/components/section-title/section-title.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionTitleComponent", function() { return _section_title_section_title_component__WEBPACK_IMPORTED_MODULE_7__["SectionTitleComponent"]; });

/* harmony import */ var _tech_list_tech_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tech-list/tech-list.component */ "./src/app/components/tech-list/tech-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TechListComponent", function() { return _tech_list_tech_list_component__WEBPACK_IMPORTED_MODULE_8__["TechListComponent"]; });












/***/ }),

/***/ "./src/app/components/intro/intro.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/intro/intro.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-text {\n  color: var(--font-color);\n  margin-left: 30px;\n}\n@media only screen and (min-width: 801px) {\n  .intro-text {\n    font-size: 80px;\n  }\n}\n@media only screen and (min-width: 501px) and (max-width: 800px) {\n  .intro-text {\n    font-size: 60px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .intro-text {\n    font-size: 42px;\n  }\n}\n.intro-text .name {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBSko7SUFLUSxlQUFBO0VDRU47QUFDRjtBREFJO0VBUko7SUFTUSxlQUFBO0VDR047QUFDRjtBRERJO0VBWko7SUFhUSxlQUFBO0VDSU47QUFDRjtBREZJO0VBQ0ksMkJBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm8tdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDFweCkge1xuICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDFweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICB9XG59IiwiLmludHJvLXRleHQge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDFweCkge1xuICAuaW50cm8tdGV4dCB7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMXB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmludHJvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaW50cm8tdGV4dCB7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICB9XG59XG4uaW50cm8tdGV4dCAubmFtZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/intro/intro.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/intro/intro.component.ts ***!
  \*****************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'intro',
            template: __webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/components/intro/intro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/components/life-period/life-period.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/life-period/life-period.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".life-period {\n  display: flex;\n  align-items: stretch;\n  margin-bottom: 50px;\n  background-color: var(--item-background);\n}\n@media only screen and (max-width: 900px) {\n  .life-period {\n    flex-direction: column;\n  }\n}\n@media only screen and (min-width: 901px) {\n  .life-period {\n    min-height: 300px;\n  }\n}\n.life-period .logo-block {\n  box-sizing: border-box;\n}\n@media only screen and (max-width: 900px) {\n  .life-period .logo-block {\n    height: 100px;\n    padding: 15px;\n  }\n}\n@media only screen and (min-width: 901px) {\n  .life-period .logo-block {\n    width: 300px;\n    padding: 30px;\n  }\n}\n.life-period .logo-block .logo {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.life-period .context {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1;\n  padding: 15px;\n  box-sizing: border-box;\n}\n.life-period .context .item-title {\n  margin: 0;\n  color: var(--secondary-color);\n}\n@media only screen and (min-width: 701px) {\n  .life-period .context .item-title {\n    font-size: 34px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .life-period .context .item-title {\n    font-size: 27px;\n  }\n}\n.life-period .context .period {\n  padding-bottom: 15px;\n}\n.life-period .context .period .far {\n  color: var(--primary-color);\n}\n.life-period .context .period span {\n  margin-left: 15px;\n}\n.life-period .context p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9saWZlLXBlcmlvZC9saWZlLXBlcmlvZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9saWZlLXBlcmlvZC9saWZlLXBlcmlvZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQVVBLG1CQUFBO0VBRUEsd0NBQUE7QUNUSjtBRERJO0VBSko7SUFLUSxzQkFBQTtFQ0lOO0FBQ0Y7QURGSTtFQVJKO0lBU1EsaUJBQUE7RUNLTjtBQUNGO0FEQ0k7RUFXSSxzQkFBQTtBQ1RSO0FERFE7RUFESjtJQUVRLGFBQUE7SUFDQSxhQUFBO0VDSVY7QUFDRjtBREZRO0VBTko7SUFPUSxZQUFBO0lBQ0EsYUFBQTtFQ0tWO0FBQ0Y7QUREUTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQ0daO0FEQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUVBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBUjtBREVRO0VBU0ksU0FBQTtFQUNBLDZCQUFBO0FDUlo7QUREWTtFQURKO0lBRVEsZUFBQTtFQ0lkO0FBQ0Y7QURGWTtFQUxKO0lBTVEsZUFBQTtFQ0tkO0FBQ0Y7QURDUTtFQUNJLG9CQUFBO0FDQ1o7QURDWTtFQUNJLDJCQUFBO0FDQ2hCO0FERVk7RUFDSSxpQkFBQTtBQ0FoQjtBRElRO0VBQ0ksU0FBQTtBQ0ZaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saWZlLXBlcmlvZC9saWZlLXBlcmlvZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWZlLXBlcmlvZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMXB4KSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIH1cblxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWJhY2tncm91bmQpO1xuXG4gICAgLmxvZ28tYmxvY2sge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAxcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRleHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgIC5pdGVtLXRpdGxlIHtcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBlcmlvZCB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAgICAgICAgICAgLmZhciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5saWZlLXBlcmlvZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWJhY2tncm91bmQpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAubGlmZS1wZXJpb2Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAxcHgpIHtcbiAgLmxpZmUtcGVyaW9kIHtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuLmxpZmUtcGVyaW9kIC5sb2dvLWJsb2NrIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmxpZmUtcGVyaW9kIC5sb2dvLWJsb2NrIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAxcHgpIHtcbiAgLmxpZmUtcGVyaW9kIC5sb2dvLWJsb2NrIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxufVxuLmxpZmUtcGVyaW9kIC5sb2dvLWJsb2NrIC5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5saWZlLXBlcmlvZCAuY29udGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmxpZmUtcGVyaW9kIC5jb250ZXh0IC5pdGVtLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgLmxpZmUtcGVyaW9kIC5jb250ZXh0IC5pdGVtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmxpZmUtcGVyaW9kIC5jb250ZXh0IC5pdGVtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gIH1cbn1cbi5saWZlLXBlcmlvZCAuY29udGV4dCAucGVyaW9kIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ubGlmZS1wZXJpb2QgLmNvbnRleHQgLnBlcmlvZCAuZmFyIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmxpZmUtcGVyaW9kIC5jb250ZXh0IC5wZXJpb2Qgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLmxpZmUtcGVyaW9kIC5jb250ZXh0IHAge1xuICBtYXJnaW46IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/life-period/life-period.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/life-period/life-period.component.ts ***!
  \*****************************************************************/
/*! exports provided: LifePeriodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifePeriodComponent", function() { return LifePeriodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LifePeriodComponent = /** @class */ (function () {
    function LifePeriodComponent() {
        this.title = "";
        this.url = "";
        this.content = "";
        this.start = "";
        this.end = "";
        this.path = "";
        this.logoBackground = "";
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LifePeriodComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('url'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LifePeriodComponent.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LifePeriodComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('start'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LifePeriodComponent.prototype, "start", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('end'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LifePeriodComponent.prototype, "end", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('logoPath'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LifePeriodComponent.prototype, "path", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('logoBackground'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LifePeriodComponent.prototype, "logoBackground", void 0);
    LifePeriodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'life-period',
            template: __webpack_require__(/*! raw-loader!./life-period.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/life-period/life-period.component.html"),
            styles: [__webpack_require__(/*! ./life-period.component.scss */ "./src/app/components/life-period/life-period.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LifePeriodComponent);
    return LifePeriodComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-navigation {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 60px;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: var(--menu-background);\n  color: var(--font-color);\n}\n.app-navigation .navigation-logo {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  color: var(--font-color);\n  background-color: var(--logo-background);\n  padding: 5px 0 10px 0;\n  cursor: pointer;\n  text-decoration: none;\n}\n.app-navigation .navigation-logo .s-logo {\n  font-size: 55px;\n  text-align: center;\n  color: var(--primary-color);\n}\n.app-navigation .navigation-logo .logo-text {\n  text-align: center;\n  margin-top: -7px;\n  font-size: 13px;\n}\n.app-navigation .navigation {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.app-navigation .navigation a {\n  padding: 5px 0;\n  margin: 10px 0;\n  text-align: center;\n  font-size: 25px;\n}\n.app-navigation .navigation a.active .fas, .app-navigation .navigation a.active .fab {\n  color: var(--primary-color) !important;\n}\n.app-navigation .navigation a .fas, .app-navigation .navigation a .fab {\n  color: var(--menu-icon-color) !important;\n  transition: color 0.3s;\n}\n.app-navigation .navigation a:hover .fas, .app-navigation .navigation a:hover .fab {\n  color: var(--primary-color) !important;\n}\n.app-navigation .navigation-social {\n  padding: 20px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.app-navigation .navigation-social a {\n  padding: 5px 0;\n  margin: 5px 0;\n  text-align: center;\n  font-size: 18px;\n}\n.app-navigation .navigation-social a .fas, .app-navigation .navigation-social a .fab {\n  color: var(--menu-icon-color) !important;\n  transition: color 0.3s;\n}\n.app-navigation .navigation-social a:hover .fas, .app-navigation .navigation-social a:hover .fab {\n  color: var(--primary-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFFQSx3Q0FBQTtFQUNBLHdCQUFBO0FDRko7QURJSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBRUEsd0JBQUE7RUFDQSx3Q0FBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDSlI7QURNUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDSlo7QURPUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTFo7QURTSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDUFI7QURTUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FDUlo7QURXZ0I7RUFDSSxzQ0FBQTtBQ1RwQjtBRGFZO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtBQ1hoQjtBRGVnQjtFQUNJLHNDQUFBO0FDYnBCO0FEbUJJO0VBQ0ksZUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDbEJSO0FEb0JRO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7QUNuQlo7QURxQlk7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0FDbkJoQjtBRHVCZ0I7RUFDSSxzQ0FBQTtBQ3JCcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbmF2aWdhdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogNjBweDtcblxuICAgIHotaW5kZXg6IDEwO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuXG4gICAgLm5hdmlnYXRpb24tbG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9nby1iYWNrZ3JvdW5kKTtcblxuICAgICAgICBwYWRkaW5nOiA1cHggMCAxMHB4IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgIC5zLWxvZ28ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28tdGV4dCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm5hdmlnYXRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG5cbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIC5mYXMsIC5mYWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mYXMsIC5mYWIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tZW51LWljb24tY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgLmZhcywgLmZhYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZpZ2F0aW9uLXNvY2lhbCB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcblxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuXG4gICAgICAgICAgICAuZmFzLCAuZmFiIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbWVudS1pY29uLWNvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIC5mYXMsIC5mYWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmFwcC1uYXZpZ2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDYwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbi5hcHAtbmF2aWdhdGlvbiAubmF2aWdhdGlvbi1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9nby1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogNXB4IDAgMTBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5hcHAtbmF2aWdhdGlvbiAubmF2aWdhdGlvbi1sb2dvIC5zLWxvZ28ge1xuICBmb250LXNpemU6IDU1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWxvZ28gLmxvZ28tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uYXBwLW5hdmlnYXRpb24gLm5hdmlnYXRpb24gYSB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uYXBwLW5hdmlnYXRpb24gLm5hdmlnYXRpb24gYS5hY3RpdmUgLmZhcywgLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uIGEuYWN0aXZlIC5mYWIge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcbn1cbi5hcHAtbmF2aWdhdGlvbiAubmF2aWdhdGlvbiBhIC5mYXMsIC5hcHAtbmF2aWdhdGlvbiAubmF2aWdhdGlvbiBhIC5mYWIge1xuICBjb2xvcjogdmFyKC0tbWVudS1pY29uLWNvbG9yKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uIGE6aG92ZXIgLmZhcywgLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uIGE6aG92ZXIgLmZhYiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xufVxuLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLXNvY2lhbCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uYXBwLW5hdmlnYXRpb24gLm5hdmlnYXRpb24tc29jaWFsIGEge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uYXBwLW5hdmlnYXRpb24gLm5hdmlnYXRpb24tc29jaWFsIGEgLmZhcywgLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLXNvY2lhbCBhIC5mYWIge1xuICBjb2xvcjogdmFyKC0tbWVudS1pY29uLWNvbG9yKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLXNvY2lhbCBhOmhvdmVyIC5mYXMsIC5hcHAtbmF2aWdhdGlvbiAubmF2aWdhdGlvbi1zb2NpYWwgYTpob3ZlciAuZmFiIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/organization-badge/organization-badge.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/organization-badge/organization-badge.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".organization-badge {\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  background-color: #222222;\n  color: var(--primary-color);\n}\n@media only screen and (min-width: 701px) {\n  .organization-badge {\n    margin-right: 20px;\n    margin-bottom: 5px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .organization-badge {\n    margin-top: 15px;\n  }\n}\n@media only screen and (min-width: 701px) {\n  .organization-badge .icon {\n    height: 45px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .organization-badge .icon {\n    height: 27px;\n  }\n}\n.organization-badge .content {\n  display: flex;\n  flex-direction: column;\n  margin-left: 30px;\n  margin-right: 10px;\n}\n@media only screen and (min-width: 701px) {\n  .organization-badge .content .description {\n    font-size: 20px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .organization-badge .content .description {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9vcmdhbml6YXRpb24tYmFkZ2Uvb3JnYW5pemF0aW9uLWJhZGdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29yZ2FuaXphdGlvbi1iYWRnZS9vcmdhbml6YXRpb24tYmFkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQVVBLHlCQUFBO0VBQ0EsMkJBQUE7QUNURjtBREFFO0VBTkY7SUFPSSxrQkFBQTtJQUNBLGtCQUFBO0VDR0Y7QUFDRjtBREZFO0VBVkY7SUFXSSxnQkFBQTtFQ0tGO0FBQ0Y7QURDSTtFQURGO0lBRUksWUFBQTtFQ0VKO0FBQ0Y7QURBSTtFQUxGO0lBTUksWUFBQTtFQ0dKO0FBQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRENNO0VBREY7SUFFSSxlQUFBO0VDRU47QUFDRjtBREFNO0VBTEY7SUFNSSxlQUFBO0VDR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JnYW5pemF0aW9uLWJhZGdlL29yZ2FuaXphdGlvbi1iYWRnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmdhbml6YXRpb24tYmFkZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cbiAgLmljb24ge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICBoZWlnaHQ6IDI3cHg7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLm9yZ2FuaXphdGlvbi1iYWRnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xuICAub3JnYW5pemF0aW9uLWJhZGdlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5vcmdhbml6YXRpb24tYmFkZ2Uge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgLm9yZ2FuaXphdGlvbi1iYWRnZSAuaWNvbiB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5vcmdhbml6YXRpb24tYmFkZ2UgLmljb24ge1xuICAgIGhlaWdodDogMjdweDtcbiAgfVxufVxuLm9yZ2FuaXphdGlvbi1iYWRnZSAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XG4gIC5vcmdhbml6YXRpb24tYmFkZ2UgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLm9yZ2FuaXphdGlvbi1iYWRnZSAuY29udGVudCAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/organization-badge/organization-badge.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/organization-badge/organization-badge.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OrganizationBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationBadgeComponent", function() { return OrganizationBadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrganizationBadgeComponent = /** @class */ (function () {
    function OrganizationBadgeComponent() {
        this.description = "";
        this.imgUrl = "";
        this.imgAlt = "";
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('description'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], OrganizationBadgeComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('imgUrl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], OrganizationBadgeComponent.prototype, "imgUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('imgAlt'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], OrganizationBadgeComponent.prototype, "imgAlt", void 0);
    OrganizationBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'organization-badge',
            template: __webpack_require__(/*! raw-loader!./organization-badge.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/organization-badge/organization-badge.component.html"),
            styles: [__webpack_require__(/*! ./organization-badge.component.scss */ "./src/app/components/organization-badge/organization-badge.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrganizationBadgeComponent);
    return OrganizationBadgeComponent;
}());



/***/ }),

/***/ "./src/app/components/page-title/page-title.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/page-title/page-title.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-title {\n  font-size: 50px;\n  color: var(--primary-color);\n  margin: 200px 0 30px 0;\n}\n@media only screen and (max-height: 300px), (max-width: 700px) {\n  .page-title {\n    font-size: 35px;\n    margin: 30px 0 15px 0;\n  }\n}\n@media only screen and (min-height: 301px) and (max-height: 500px) and (min-width: 701px) {\n  .page-title {\n    margin: 80px 0 20px 0;\n  }\n}\n@media only screen and (min-height: 501px) and (min-width: 701px) {\n  .page-title {\n    margin: 200px 0 30px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlLXRpdGxlL3BhZ2UtdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS10aXRsZS9wYWdlLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENJO0VBTEo7SUFNUSxlQUFBO0lBQ0EscUJBQUE7RUNFTjtBQUNGO0FEQUk7RUFWSjtJQVdRLHFCQUFBO0VDR047QUFDRjtBRERJO0VBZEo7SUFlUSxzQkFBQTtFQ0lOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2UtdGl0bGUvcGFnZS10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIG1hcmdpbjogMjAwcHggMCAzMHB4IDA7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAzMDBweCksIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDAgMTVweCAwO1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDMwMXB4KSBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgICAgICAgbWFyZ2luOiA4MHB4IDAgMjBweCAwO1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDUwMXB4KSBhbmQgKG1pbi13aWR0aDogNzAxcHgpICB7XG4gICAgICAgIG1hcmdpbjogMjAwcHggMCAzMHB4IDA7XG4gICAgfVxufSIsIi5wYWdlLXRpdGxlIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIG1hcmdpbjogMjAwcHggMCAzMHB4IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAzMDBweCksIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luOiAzMHB4IDAgMTVweCAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAzMDFweCkgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkgYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XG4gIC5wYWdlLXRpdGxlIHtcbiAgICBtYXJnaW46IDgwcHggMCAyMHB4IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDUwMXB4KSBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgLnBhZ2UtdGl0bGUge1xuICAgIG1hcmdpbjogMjAwcHggMCAzMHB4IDA7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/page-title/page-title.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/page-title/page-title.component.ts ***!
  \***************************************************************/
/*! exports provided: PageTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function() { return PageTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageTitleComponent = /** @class */ (function () {
    function PageTitleComponent() {
        this.content = "";
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageTitleComponent.prototype, "content", void 0);
    PageTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-title',
            template: __webpack_require__(/*! raw-loader!./page-title.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/page-title/page-title.component.html"),
            styles: [__webpack_require__(/*! ./page-title.component.scss */ "./src/app/components/page-title/page-title.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageTitleComponent);
    return PageTitleComponent;
}());



/***/ }),

/***/ "./src/app/components/section-title/section-title.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/section-title/section-title.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-title {\n  font-size: 35px;\n  color: var(--secondary-color);\n  margin: 80px 0 10px 0;\n}\n@media only screen and (max-height: 300px), (max-width: 700px) {\n  .section-title {\n    font-size: 23px;\n    margin: 40px 0 5px 0;\n  }\n}\n@media only screen and (min-height: 301px) and (max-height: 500px) and (min-width: 701px) {\n  .section-title {\n    margin: 50px 0 5px 0;\n  }\n}\n@media only screen and (min-height: 501px) and (min-width: 701px) {\n  .section-title {\n    margin: 70px 0 15px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9uLXRpdGxlL3NlY3Rpb24tdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbi10aXRsZS9zZWN0aW9uLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUNDSjtBRENJO0VBTEo7SUFNUSxlQUFBO0lBQ0Esb0JBQUE7RUNFTjtBQUNGO0FEQUk7RUFWSjtJQVdRLG9CQUFBO0VDR047QUFDRjtBRERJO0VBZEo7SUFlUSxxQkFBQTtFQ0lOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlY3Rpb24tdGl0bGUvc2VjdGlvbi10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgbWFyZ2luOiA4MHB4IDAgMTBweCAwO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMzAwcHgpLCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgIG1hcmdpbjogNDBweCAwIDVweCAwO1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDMwMXB4KSBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgICAgICAgbWFyZ2luOiA1MHB4IDAgNXB4IDA7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNTAxcHgpIGFuZCAobWluLXdpZHRoOiA3MDFweCkgIHtcbiAgICAgICAgbWFyZ2luOiA3MHB4IDAgMTVweCAwO1xuICAgIH1cbn0iLCIuc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIG1hcmdpbjogODBweCAwIDEwcHggMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDMwMHB4KSwgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBtYXJnaW46IDQwcHggMCA1cHggMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMzAxcHgpIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xuICAuc2VjdGlvbi10aXRsZSB7XG4gICAgbWFyZ2luOiA1MHB4IDAgNXB4IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDUwMXB4KSBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIG1hcmdpbjogNzBweCAwIDE1cHggMDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/section-title/section-title.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/section-title/section-title.component.ts ***!
  \*********************************************************************/
/*! exports provided: SectionTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitleComponent", function() { return SectionTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SectionTitleComponent = /** @class */ (function () {
    function SectionTitleComponent() {
        this.content = "";
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SectionTitleComponent.prototype, "content", void 0);
    SectionTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'section-title',
            template: __webpack_require__(/*! raw-loader!./section-title.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/section-title/section-title.component.html"),
            styles: [__webpack_require__(/*! ./section-title.component.scss */ "./src/app/components/section-title/section-title.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SectionTitleComponent);
    return SectionTitleComponent;
}());



/***/ }),

/***/ "./src/app/components/tech-list/tech-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/tech-list/tech-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tech-list {\n  margin: 50px 0;\n}\n.tech-list .row {\n  display: flex;\n  align-items: center;\n  background-color: #222222;\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 600px) {\n  .tech-list .row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.tech-list .row .row-item {\n  padding: 15px;\n}\n.tech-list .row .row-item.tech {\n  display: flex;\n  align-items: center;\n  width: 250px;\n  box-sizing: border-box;\n}\n.tech-list .row .row-item.tech .tech-logo {\n  width: 40px;\n  height: 40px;\n  margin: 5px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center center;\n}\n.tech-list .row .row-item.tech .tech-name {\n  margin-left: 15px;\n}\n.tech-list .row .row-item.experience {\n  display: flex;\n  flex: 1;\n  align-items: center;\n}\n.tech-list .row .row-item.experience .percentage {\n  font-weight: 200;\n  margin: 0 10px;\n}\n.tech-list .row .row-item.experience .bar {\n  height: 10px;\n}\n@media only screen and (max-width: 600px) {\n  .tech-list .row.head {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy90ZWNoLWxpc3QvdGVjaC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RlY2gtbGlzdC90ZWNoLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQU9BLHlCQUFBO0VBRUEsa0JBQUE7QUNOUjtBRERRO0VBSko7SUFLUSxzQkFBQTtJQUNBLG9CQUFBO0VDSVY7QUFDRjtBREVRO0VBQ0ksYUFBQTtBQ0FaO0FERVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0Esc0JBQUE7QUNEaEI7QURHZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7QUNGcEI7QURLZ0I7RUFDSSxpQkFBQTtBQ0hwQjtBRE9ZO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtBQ0xoQjtBRE9nQjtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0xwQjtBRFFnQjtFQUNJLFlBQUE7QUNOcEI7QURZWTtFQURKO0lBRVEsYUFBQTtFQ1RkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlY2gtbGlzdC90ZWNoLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVjaC1saXN0IHtcbiAgICBtYXJnaW46IDUwcHggMDtcblxuICAgIC5yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgICAgIC5yb3ctaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAgICAgICAmLnRlY2gge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIFxuICAgICAgICAgICAgICAgIC50ZWNoLWxvZ28ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50ZWNoLW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZXhwZXJpZW5jZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAucGVyY2VudGFnZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5iYXIge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5oZWFkIHtcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi50ZWNoLWxpc3Qge1xuICBtYXJnaW46IDUwcHggMDtcbn1cbi50ZWNoLWxpc3QgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRlY2gtbGlzdCAucm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG59XG4udGVjaC1saXN0IC5yb3cgLnJvdy1pdGVtIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi50ZWNoLWxpc3QgLnJvdyAucm93LWl0ZW0udGVjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi50ZWNoLWxpc3QgLnJvdyAucm93LWl0ZW0udGVjaCAudGVjaC1sb2dvIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi50ZWNoLWxpc3QgLnJvdyAucm93LWl0ZW0udGVjaCAudGVjaC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4udGVjaC1saXN0IC5yb3cgLnJvdy1pdGVtLmV4cGVyaWVuY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRlY2gtbGlzdCAucm93IC5yb3ctaXRlbS5leHBlcmllbmNlIC5wZXJjZW50YWdlIHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4udGVjaC1saXN0IC5yb3cgLnJvdy1pdGVtLmV4cGVyaWVuY2UgLmJhciB7XG4gIGhlaWdodDogMTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRlY2gtbGlzdCAucm93LmhlYWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/tech-list/tech-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tech-list/tech-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TechListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechListComponent", function() { return TechListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tech_tech_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tech/tech.service */ "./src/app/services/tech/tech.service.ts");



var TechListComponent = /** @class */ (function () {
    function TechListComponent(techService) {
        this.techService = techService;
    }
    TechListComponent.prototype.ngOnInit = function () {
        this.techList = this.techService.tech;
    };
    TechListComponent.ctorParameters = function () { return [
        { type: src_app_services_tech_tech_service__WEBPACK_IMPORTED_MODULE_2__["TechService"] }
    ]; };
    TechListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tech-list',
            template: __webpack_require__(/*! raw-loader!./tech-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tech-list/tech-list.component.html"),
            styles: [__webpack_require__(/*! ./tech-list.component.scss */ "./src/app/components/tech-list/tech-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tech_tech_service__WEBPACK_IMPORTED_MODULE_2__["TechService"]])
    ], TechListComponent);
    return TechListComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-page {\n  height: calc(100vh - 16px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.home-page .front-page-deco {\n  position: fixed;\n  right: 70px;\n  bottom: 70px;\n}\n@media only screen and (max-height: 750px), (max-width: 700px) {\n  .home-page .front-page-deco {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNBRjtBREVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUxGO0lBTUksYUFBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtcGFnZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE2cHgpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC5mcm9udC1wYWdlLWRlY28ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogNzBweDtcbiAgICBib3R0b206IDcwcHg7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweCksIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIiwiLmhvbWUtcGFnZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE2cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5ob21lLXBhZ2UgLmZyb250LXBhZ2UtZGVjbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDcwcHg7XG4gIGJvdHRvbTogNzBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSwgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmhvbWUtcGFnZSAuZnJvbnQtcGFnZS1kZWNvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/pages/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/index.ts":
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/*! exports provided: HomePageComponent, SchoolPageComponent, WorkPageComponent, TechPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__["HomePageComponent"]; });

/* harmony import */ var _school_page_school_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-page/school-page.component */ "./src/app/pages/school-page/school-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchoolPageComponent", function() { return _school_page_school_page_component__WEBPACK_IMPORTED_MODULE_1__["SchoolPageComponent"]; });

/* harmony import */ var _work_page_work_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-page/work-page.component */ "./src/app/pages/work-page/work-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkPageComponent", function() { return _work_page_work_page_component__WEBPACK_IMPORTED_MODULE_2__["WorkPageComponent"]; });

/* harmony import */ var _tech_page_tech_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tech-page/tech-page.component */ "./src/app/pages/tech-page/tech-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TechPageComponent", function() { return _tech_page_tech_page_component__WEBPACK_IMPORTED_MODULE_3__["TechPageComponent"]; });







/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/app/pages/index.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");






var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                ___WEBPACK_IMPORTED_MODULE_4__["SchoolPageComponent"],
                ___WEBPACK_IMPORTED_MODULE_4__["WorkPageComponent"],
                ___WEBPACK_IMPORTED_MODULE_4__["TechPageComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/school-page/school-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/school-page/school-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjaG9vbC1wYWdlL3NjaG9vbC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/school-page/school-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/school-page/school-page.component.ts ***!
  \************************************************************/
/*! exports provided: SchoolPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolPageComponent", function() { return SchoolPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_edu_edu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/edu/edu.service */ "./src/app/services/edu/edu.service.ts");



var SchoolPageComponent = /** @class */ (function () {
    function SchoolPageComponent(eduService) {
        this.eduService = eduService;
    }
    SchoolPageComponent.prototype.ngOnInit = function () {
        this.edu = this.eduService.edu;
    };
    SchoolPageComponent.ctorParameters = function () { return [
        { type: src_app_services_edu_edu_service__WEBPACK_IMPORTED_MODULE_2__["EduService"] }
    ]; };
    SchoolPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school-page',
            template: __webpack_require__(/*! raw-loader!./school-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/school-page/school-page.component.html"),
            styles: [__webpack_require__(/*! ./school-page.component.scss */ "./src/app/pages/school-page/school-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_edu_edu_service__WEBPACK_IMPORTED_MODULE_2__["EduService"]])
    ], SchoolPageComponent);
    return SchoolPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tech-page/tech-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/tech-page/tech-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2gtcGFnZS90ZWNoLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tech-page/tech-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/tech-page/tech-page.component.ts ***!
  \********************************************************/
/*! exports provided: TechPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechPageComponent", function() { return TechPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TechPageComponent = /** @class */ (function () {
    function TechPageComponent() {
    }
    TechPageComponent.prototype.ngOnInit = function () {
    };
    TechPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tech-page',
            template: __webpack_require__(/*! raw-loader!./tech-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tech-page/tech-page.component.html"),
            styles: [__webpack_require__(/*! ./tech-page.component.scss */ "./src/app/pages/tech-page/tech-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TechPageComponent);
    return TechPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/work-page/work-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/work-page/work-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmstcGFnZS93b3JrLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/work-page/work-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/work-page/work-page.component.ts ***!
  \********************************************************/
/*! exports provided: WorkPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPageComponent", function() { return WorkPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_work_work_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/work/work.service */ "./src/app/services/work/work.service.ts");



var WorkPageComponent = /** @class */ (function () {
    function WorkPageComponent(workService) {
        this.workService = workService;
    }
    WorkPageComponent.prototype.ngOnInit = function () {
        this.work = this.workService.work;
    };
    WorkPageComponent.ctorParameters = function () { return [
        { type: src_app_services_work_work_service__WEBPACK_IMPORTED_MODULE_2__["WorkService"] }
    ]; };
    WorkPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-page',
            template: __webpack_require__(/*! raw-loader!./work-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/work-page/work-page.component.html"),
            styles: [__webpack_require__(/*! ./work-page.component.scss */ "./src/app/pages/work-page/work-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_work_work_service__WEBPACK_IMPORTED_MODULE_2__["WorkService"]])
    ], WorkPageComponent);
    return WorkPageComponent;
}());



/***/ }),

/***/ "./src/app/services/edu/edu.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/edu/edu.service.ts ***!
  \*********************************************/
/*! exports provided: EduService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EduService", function() { return EduService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EduService = /** @class */ (function () {
    function EduService() {
        this._edu = [
            {
                title: "Minor Mobile Application Development",
                url: "http://han.nl",
                content: "Minor over het ontwikkelen van mobiele applicaties voor Android en iOS. Gedurende deze minor is aandacht besteed aan het ontwikkelen van native iOS applicaties in Swift en hybride applicaties voor beide platformen in Ionic in combinatie met Angular.",
                period: {
                    start: "September 2018",
                    end: "Januari 2019"
                },
                logo: {
                    path: "/assets/companies/han.svg",
                    backgroundColor: "#e50054"
                }
            },
            {
                title: "HBO-ICT",
                url: "http://han.nl",
                content: "Profiel: Webdevelopment <br> Opleiding over het bouwen van software en applicaties met een focus op webapplicaties. Gedurende deze opleiding is aandacht besteed aan het ontwikkelen van webapplicaties in verschillende programmeertalen, database structuren, software architectuur en projectmatig werken.",
                period: {
                    start: "September 2015",
                    end: "Oktober 2019"
                },
                logo: {
                    path: "/assets/companies/han.svg",
                    backgroundColor: "#e50054"
                }
            },
            {
                title: "HAVO",
                url: "https://www.elzendaalcollege.nl/home-boxmeer",
                content: "Profiel: Natuur en techniek <br> Vakken: Nederlands, Engels, Wiskunde B, Scheikunde, Natuurkunde, Informatica, Management & organisatie",
                period: {
                    start: "September 2010",
                    end: "Juni 2015"
                },
                logo: {
                    path: "/assets/companies/elzendaal-college.svg",
                    backgroundColor: "#01bcf3"
                }
            }
        ];
    }
    Object.defineProperty(EduService.prototype, "edu", {
        get: function () {
            return this._edu;
        },
        enumerable: true,
        configurable: true
    });
    EduService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EduService);
    return EduService;
}());



/***/ }),

/***/ "./src/app/services/tech/tech.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/tech/tech.service.ts ***!
  \***********************************************/
/*! exports provided: TechService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechService", function() { return TechService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TechService = /** @class */ (function () {
    function TechService() {
        this._tech = [
            { name: "HTML", logoPath: "/assets/programming/icons/html.png", skillLevel: 95, colorCode: "#EF652A" },
            { name: "CSS", logoPath: "/assets/programming/icons/css.png", skillLevel: 95, colorCode: "#2299F8" },
            { name: "Javascript", logoPath: "/assets/programming/icons/javascript.png", skillLevel: 90, colorCode: "#F0DB4F" },
            { name: "Ionic", logoPath: "/assets/programming/icons/ionic.png", skillLevel: 85, colorCode: "#478AFF" },
            { name: "Angular", logoPath: "/assets/programming/icons/angular.png", skillLevel: 80, colorCode: "#E23237" },
            { name: "React", logoPath: "/assets/programming/icons/react.png", skillLevel: 45, colorCode: "#00D8FF" },
            { name: "RxJS", logoPath: "/assets/programming/icons/rxjs.png", skillLevel: 65, colorCode: "#EE0E99" },
            { name: "NgRx", logoPath: "/assets/programming/icons/ngrx.png", skillLevel: 55, colorCode: "#BA2BD2" },
            { name: "Redux", logoPath: "/assets/programming/icons/redux.png", skillLevel: 65, colorCode: "#7648BE" },
            { name: "Typescript", logoPath: "/assets/programming/icons/typescript.png", skillLevel: 90, colorCode: "#007ACC" },
            { name: "C#", logoPath: "/assets/programming/icons/c_sharp.png", skillLevel: 70, colorCode: "#9F74DA" },
            { name: ".Net Core", logoPath: "/assets/programming/icons/dot_net_core.png", skillLevel: 70, colorCode: "#6D409D" },
            { name: "Microsoft SQL", logoPath: "/assets/programming/icons/mssql.png", skillLevel: 70, colorCode: "#DF3029" },
            { name: "MySQL", logoPath: "/assets/programming/icons/mysql.png", skillLevel: 70, colorCode: "#F29111" },
            { name: "Swift", logoPath: "/assets/programming/icons/swift.png", skillLevel: 50, colorCode: "#FC8838" },
            { name: "PHP", logoPath: "/assets/programming/icons/php.png", skillLevel: 65, colorCode: "#617CBE" },
            { name: "Symfony", logoPath: "/assets/programming/icons/symfony.png", skillLevel: 50, colorCode: "#FFFFFF" },
            { name: "Firebase", logoPath: "/assets/programming/icons/firebase.png", skillLevel: 75, colorCode: "#FAC93E" },
            { name: "MongoDB", logoPath: "/assets/programming/icons/mongodb.png", skillLevel: 40, colorCode: "#69B140" },
            { name: "Java", logoPath: "/assets/programming/icons/java.png", skillLevel: 25, colorCode: "#73A1FB" },
        ];
    }
    Object.defineProperty(TechService.prototype, "tech", {
        get: function () {
            return this._tech;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TechService.prototype, "techOrderedByName", {
        get: function () {
            return this._tech.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        },
        enumerable: true,
        configurable: true
    });
    TechService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TechService);
    return TechService;
}());



/***/ }),

/***/ "./src/app/services/work/work.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/work/work.service.ts ***!
  \***********************************************/
/*! exports provided: WorkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkService", function() { return WorkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkService = /** @class */ (function () {
    function WorkService() {
        this._work = [
            {
                title: "Afstudeerstagair",
                url: "http://linku.nl",
                content: "Als afronding van mijn opleiding HBO-ICT heb ik van april tot en met oktober 2019 een afstudeerstage uitgevoerd bij Linku in Nijmegen. Gedurende deze stage heb ik aan een applicatie gewerkt waarmee facturen gemaakt konden worden in de boekhoudsoftware op basis van urenregistraties in het projectmanagement systeem.",
                period: {
                    start: "April 2019",
                    end: "Oktober 2019"
                },
                logo: {
                    path: "/assets/companies/linku.svg",
                    backgroundColor: "#18aaff"
                }
            }, {
                title: "Web developer op oproepbasis",
                url: "http://rentpro.nl",
                content: "Na mijn meewerkstage ben ik naast mijn opleiding op vrije dagen en in vakanties blijven werken bij Rentpro als webdeveloper op oproepbasis. Hierbij heb ik dezelfde taken als gedurende mijn stageperiode.",
                period: {
                    start: "Februari 2018",
                    end: "November 2018"
                },
                logo: {
                    path: "/assets/companies/rentpro.svg",
                    backgroundColor: "#537e39"
                }
            }, {
                title: "Meewerkstagair",
                url: "http://rentpro.nl",
                content: "Voor mijn opleiding HBO-ICT aan de Hogeschool van Arnhem en Nijmegen heb ik van september 2017 tot en met januari 2018 een meewerkstage volbracht bij Rentpro BV in Elst. Tijdens deze stage heb ik meegewerkt aan het ontwerpen, bouwen en testen van nieuwe uitbreidingen op het Rentpro systeem in ASP.Net framework.",
                period: {
                    start: "September 2017",
                    end: "Januari 2018"
                },
                logo: {
                    path: "/assets/companies/rentpro.svg",
                    backgroundColor: "#537e39"
                }
            }
        ];
    }
    Object.defineProperty(WorkService.prototype, "work", {
        get: function () {
            return this._work;
        },
        enumerable: true,
        configurable: true
    });
    WorkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkService);
    return WorkService;
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

module.exports = __webpack_require__(/*! /Users/sander/Projects/Portfolio/Angular/Portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map