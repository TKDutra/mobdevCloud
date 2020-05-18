function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-details-quote-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesQuoteDetailsQuoteDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar class=\"quotes-menu\">\n\t\t<ion-buttons slot=\"start\" defaulthref=\"/tabs/quotes\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Details Quote</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\t<ion-card *ngIf=\"quote\" class=\"movie-card\" text-center>\n\t\t<ion-card-header>\n\t\t\t<ion-card-title>\n\n            tsetes\n\t\t\t\t{{ quote.author }}\n\t\t\t</ion-card-title>\n\t\t\t<ion-card-subtitle>\n\t\t\t\t{{ quote.quote }}\n\t\t\t</ion-card-subtitle>\n\t\t</ion-card-header>\n\t\t<ion-card-content text-center>\n\n\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-icon name=\"star-half\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>{{ quote.quote }}</ion-label>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-icon name=\"clipboard\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label text-wrap>{{ quote.author }}</ion-label>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-icon name=\"contacts\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label text-wrap>{{ quote.series }}</ion-label>\n\t\t\t</ion-item>\n\n\n\n\n\t\t</ion-card-content>\n\t</ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/quote-details/quote-details-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/quote-details/quote-details-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: QuoteDetailsPageRoutingModule */

  /***/
  function srcAppPagesQuoteDetailsQuoteDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteDetailsPageRoutingModule", function () {
      return QuoteDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _quote_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quote-details.page */
    "./src/app/pages/quote-details/quote-details.page.ts");

    var routes = [{
      path: '',
      component: _quote_details_page__WEBPACK_IMPORTED_MODULE_3__["QuoteDetailsPage"]
    }];

    var QuoteDetailsPageRoutingModule = function QuoteDetailsPageRoutingModule() {
      _classCallCheck(this, QuoteDetailsPageRoutingModule);
    };

    QuoteDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuoteDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/quote-details/quote-details.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/quote-details/quote-details.module.ts ***!
    \*************************************************************/

  /*! exports provided: QuoteDetailsPageModule */

  /***/
  function srcAppPagesQuoteDetailsQuoteDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteDetailsPageModule", function () {
      return QuoteDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _quote_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quote-details-routing.module */
    "./src/app/pages/quote-details/quote-details-routing.module.ts");
    /* harmony import */


    var _quote_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quote-details.page */
    "./src/app/pages/quote-details/quote-details.page.ts");

    var QuoteDetailsPageModule = function QuoteDetailsPageModule() {
      _classCallCheck(this, QuoteDetailsPageModule);
    };

    QuoteDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _quote_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuoteDetailsPageRoutingModule"]],
      declarations: [_quote_details_page__WEBPACK_IMPORTED_MODULE_6__["QuoteDetailsPage"]]
    })], QuoteDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/quote-details/quote-details.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/quote-details/quote-details.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesQuoteDetailsQuoteDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".quotes-menu {\n  --background: rgb(5, 180, 5);\n  color: white;\n  font-size: 100px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2Q2xvdWQvc3JjL2FwcC9wYWdlcy9xdW90ZS1kZXRhaWxzL3F1b3RlLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9xdW90ZS1kZXRhaWxzL3F1b3RlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVvdGUtZGV0YWlscy9xdW90ZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdW90ZXMtbWVudSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoNSwgMTgwLCA1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG4iLCIucXVvdGVzLW1lbnUge1xuICAtLWJhY2tncm91bmQ6IHJnYig1LCAxODAsIDUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/quote-details/quote-details.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/quote-details/quote-details.page.ts ***!
    \***********************************************************/

  /*! exports provided: QuoteDetailsPage */

  /***/
  function srcAppPagesQuoteDetailsQuoteDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteDetailsPage", function () {
      return QuoteDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var QuoteDetailsPage = /*#__PURE__*/function () {
      function QuoteDetailsPage(activatedRoute, api, navCtrl) {
        _classCallCheck(this, QuoteDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.navCtrl = navCtrl;
        this.quoteId = null;
      }

      _createClass(QuoteDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
          this.api.getQuote(this.quoteId).subscribe(function (res) {
            _this.quote = res[0];
          });
        }
      }]);

      return QuoteDetailsPage;
    }();

    QuoteDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    QuoteDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-quote-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./quote-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./quote-details.page.scss */
      "./src/app/pages/quote-details/quote-details.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], QuoteDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=quote-details-quote-details-module-es5.js.map