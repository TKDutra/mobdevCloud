(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotes-quotes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar class=\"quote-menu\">\n\t\t<ion-title>My Quotes Search by Author</ion-title>\n\t\t<ion-back-button></ion-back-button>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-searchbar placeholder=\"Search by Author\" name=\"search\" [(ngModel)]=\"searchTerm\"   cancelButtonText=\"Cancel\"></ion-searchbar>\n\t<ion-list>\n\t\t<div  *ngFor=\"let quote of quotes | async\" >\n\t\t\t<ion-item *ngIf=\"searchQuote(quote)\" button detail lines=\"inset\"  (click)=\"openDetails(quote)\">\n\t\t\t\t<p>{{ quote.quote }}</p>\n\t\t\t</ion-item>\n\t\t</div>\n\t</ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/quotes/quotes-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/quotes/quotes-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: QuotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPageRoutingModule", function() { return QuotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _quotes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes.page */ "./src/app/pages/quotes/quotes.page.ts");




const routes = [
    {
        path: '',
        component: _quotes_page__WEBPACK_IMPORTED_MODULE_3__["QuotesPage"]
    }
];
let QuotesPageRoutingModule = class QuotesPageRoutingModule {
};
QuotesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuotesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/quotes/quotes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/quotes/quotes.module.ts ***!
  \***********************************************/
/*! exports provided: QuotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPageModule", function() { return QuotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotes-routing.module */ "./src/app/pages/quotes/quotes-routing.module.ts");
/* harmony import */ var _quotes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotes.page */ "./src/app/pages/quotes/quotes.page.ts");







let QuotesPageModule = class QuotesPageModule {
};
QuotesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuotesPageRoutingModule"]
        ],
        declarations: [_quotes_page__WEBPACK_IMPORTED_MODULE_6__["QuotesPage"]]
    })
], QuotesPageModule);



/***/ }),

/***/ "./src/app/pages/quotes/quotes.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/quotes/quotes.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".quote-menu {\n  --background: rgb(5, 180, 5);\n  color: white;\n  font-size: 100px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2Q2xvdWQvc3JjL2FwcC9wYWdlcy9xdW90ZXMvcXVvdGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcXVvdGVzL3F1b3Rlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdW90ZXMvcXVvdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdW90ZS1tZW51IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYig1LCAxODAsIDUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbn1cbiIsIi5xdW90ZS1tZW51IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNSwgMTgwLCA1KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/quotes/quotes.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/quotes/quotes.page.ts ***!
  \*********************************************/
/*! exports provided: QuotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPage", function() { return QuotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




let QuotesPage = class QuotesPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        this.searchTerm = "";
    }
    ngOnInit() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => {
            console.log('my data: ', data);
        });
    }
    openDetails(quote) {
        let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
        console.log('my dataQuoteDetails: ', quoteId);
    }
    searchQuote(quote) {
        return quote.author.toLowerCase().indexOf(this.searchTerm.toLowerCase()) != -1;
    }
};
QuotesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
QuotesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./quotes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./quotes.page.scss */ "./src/app/pages/quotes/quotes.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], QuotesPage);



/***/ })

}]);
//# sourceMappingURL=quotes-quotes-module-es2015.js.map