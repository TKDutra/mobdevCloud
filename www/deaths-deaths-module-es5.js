function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deaths-deaths-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeathsDeathsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar class=\"deaths-menu\">\n\t\t<ion-title>My Deaths Search by Author</ion-title>\n\t\t<ion-back-button></ion-back-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar placeholder=\"Search by Responsible\" name=\"search\" [(ngModel)]=\"searchTerm\"  cancelButtonText=\"Cancel\"></ion-searchbar>\n  <ion-list>\n    <div *ngFor=\"let death of deaths | async\">\n      <ion-item *ngIf=\"searchDeath(death)\">\n            <ion-label text-wrap> \n            <h3>{{ death.responsible }}</h3>\n            <h5><ion-icon class=\"death-details\" name=\"film-outline\"></ion-icon> {{ death.season }}</h5>\n            <h5><ion-icon class=\"death-details\" name=\"person-add-outline\"></ion-icon> {{ death.death }}</h5>\n            <h5><ion-icon class=\"death-details\" name=\"warning-outline\"></ion-icon> {{ death.cause }}</h5>\n            <h5><ion-icon class=\"death-details\" name=\"skull\" slot=\"start\"></ion-icon> {{ death.number_of_deaths }}</h5>\n            <h5><ion-icon class=\"death-details\" name=\"chatbubble-outline\"></ion-icon> {{ death.last_words }}</h5>\n          \n          </ion-label>\n      </ion-item>\n    <ion-item  *ngFor=\"let author of authors | async\"> {{author.deathCount}}</ion-item>\n    </div>\n  </ion-list> \n\n\n  \n</ion-content>\n\n\n<!--\n<ion-content>\n  <ion-searchbar name=\"search\" [(ngModel)]=\"searchTerm\"  (ionChange)=\"searchDeath($event)\" cancelButtonText=\"Cancel\"></ion-searchbar>\n  <ion-list>\n    \n      <ion-item  *ngFor=\"let death of (deaths | async)\" [routerLink]=\"['death-count?name=', 'deaths', death.death ]\">\n      <p>{{ death.death }} </p>\n    </ion-item>\n    \n  </ion-list> \n\n\n  \n</ion-content>\n-->";
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/deaths/deaths-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DeathsPageRoutingModule */

  /***/
  function srcAppPagesDeathsDeathsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsPageRoutingModule", function () {
      return DeathsPageRoutingModule;
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


    var _deaths_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./deaths.page */
    "./src/app/pages/deaths/deaths.page.ts");

    var routes = [{
      path: '',
      component: _deaths_page__WEBPACK_IMPORTED_MODULE_3__["DeathsPage"]
    }];

    var DeathsPageRoutingModule = function DeathsPageRoutingModule() {
      _classCallCheck(this, DeathsPageRoutingModule);
    };

    DeathsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeathsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/deaths/deaths.module.ts ***!
    \***********************************************/

  /*! exports provided: DeathsPageModule */

  /***/
  function srcAppPagesDeathsDeathsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsPageModule", function () {
      return DeathsPageModule;
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


    var _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./deaths-routing.module */
    "./src/app/pages/deaths/deaths-routing.module.ts");
    /* harmony import */


    var _deaths_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./deaths.page */
    "./src/app/pages/deaths/deaths.page.ts");

    var DeathsPageModule = function DeathsPageModule() {
      _classCallCheck(this, DeathsPageModule);
    };

    DeathsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathsPageRoutingModule"]],
      declarations: [_deaths_page__WEBPACK_IMPORTED_MODULE_6__["DeathsPage"]]
    })], DeathsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/deaths/deaths.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDeathsDeathsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".deaths-menu {\n  --background: rgb(5, 180, 5);\n  color: white;\n  font-size: 100px;\n  text-align: center;\n}\n\n.death-details {\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2Q2xvdWQvc3JjL2FwcC9wYWdlcy9kZWF0aHMvZGVhdGhzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGVhdGhzL2RlYXRocy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDRSxpQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVhdGhzL2RlYXRocy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVhdGhzLW1lbnUge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDUsIDE4MCwgNSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxufVxuXG4uZGVhdGgtZGV0YWlscyB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuIiwiLmRlYXRocy1tZW51IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNSwgMTgwLCA1KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZWF0aC1kZXRhaWxzIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/deaths/deaths.page.ts ***!
    \*********************************************/

  /*! exports provided: DeathsPage */

  /***/
  function srcAppPagesDeathsDeathsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsPage", function () {
      return DeathsPage;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");

    var DeathsPage = /*#__PURE__*/function () {
      function DeathsPage(router, api) {
        _classCallCheck(this, DeathsPage);

        this.router = router;
        this.api = api;
        this.searchTerm = "";
      }

      _createClass(DeathsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.deaths = this.api.getDeaths();
          this.deaths.subscribe(function (data) {
            console.log('my datadeaths: ', data);
          });
        }
      }, {
        key: "openDetails",
        value: function openDetails(death) {
          var deathId = death.death_id;
          this.router.navigateByUrl("/tabs/deaths/".concat(death.death_id));
          console.log('my dataDeathdetails: ', deathId);
        }
      }, {
        key: "openCount",
        value: function openCount(author) {
          var countdeathId = this.api.getAuthor(author);
          this.router.navigateByUrl("/tabs/deaths".concat(author.author));
          console.log('my dataCountDeath: ', countdeathId);
        }
      }, {
        key: "searchDeath",
        value: function searchDeath(death) {
          return death.responsible.toLowerCase().indexOf(this.searchTerm.toLowerCase()) != -1;
        }
      }]);

      return DeathsPage;
    }();

    DeathsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    DeathsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deaths',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./deaths.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./deaths.page.scss */
      "./src/app/pages/deaths/deaths.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], DeathsPage);
    /***/
  }
}]);
//# sourceMappingURL=deaths-deaths-module-es5.js.map