(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-details-character-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar class=\"characters-menu\">\n\t\t<ion-buttons slot=\"start\" defaulthref=\"/tabs/(characters: characters)\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title> {{character?.name}} </ion-title>\n\t</ion-toolbar>\n\n\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-card *ngIf=\"character\" class=\"movie-card\" text-center>\n\n\t\t<div>\n\t\t\t<ion-buttons slot=\"end\">\n\t\t\t\t<ion-button (click)=\"unfavouriteCharacter()\" *ngIf=\"isFavouriteCharacters\">\n\t\t\t\t\t<ion-icon name=\"star\" slot=\"icon-only\" color=\"secondary\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button (click)=\"favouriteCharacter()\" *ngIf=\"!isFavouriteCharacters\">\n\t\t\t\t\t<ion-icon name=\"star-outline\" slot=\"icon-only\" class=\"favorite\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t</ion-buttons>\n\t\t</div>\n\n\t\t<p align=\"center\"><img [src]=\"character.img\" width=\"180\" height=\"180\" class=\"info-img\"></p>\n\n\n\t\t\t<ion-card-header class=\"characters-card\">\n\t\t\t\t<ion-card-title> {{character.nickname}}</ion-card-title>\n\t\t\t\t<ion-card-subtitle>Status: {{character.status}} </ion-card-subtitle>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content text-center>\n\n\t\t\t\t<p align=\"left\">Character Information</p>\n\n\n\t\t\t\t<!--\n\t\t\t\t<ion-item  class=\"movie-info\" lines=\"none\">\n\t\t\t\t\t<ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t<ion-label>{{character.name}}</ion-label>\n\t\t\t\t</ion-item>\n                -->\n\t\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t\t<ion-icon name=\"male-female-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t<ion-label>{{character.birthday}}</ion-label>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<!--Portrayed Information-->\n\t\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t\t<ion-icon name=\"walk-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t<ion-label text-wrap>{{character.portrayed}}</ion-label>\n\t\t\t\t</ion-item>\n\n\n\t\t\t\t<!--  Appearance TV Season Information-->\n\t\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t\t<ion-icon name=\"cellular-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t<ion-label text-wrap>{{character.appearance}}</ion-label>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<!--<Occupation Information -->\n\t\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t\t<ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t<ion-label>{{character.occupation}}</ion-label>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<!--Category Information -->\n\t\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t\t<ion-icon name=\"film-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t<ion-label>{{character.category}}</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/character-details/character-details-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/character-details/character-details-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CharacterDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageRoutingModule", function() { return CharacterDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");




const routes = [
    {
        path: '',
        component: _character_details_page__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailsPage"]
    }
];
let CharacterDetailsPageRoutingModule = class CharacterDetailsPageRoutingModule {
};
CharacterDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharacterDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: CharacterDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageModule", function() { return CharacterDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./character-details-routing.module */ "./src/app/pages/character-details/character-details-routing.module.ts");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");







let CharacterDetailsPageModule = class CharacterDetailsPageModule {
};
CharacterDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharacterDetailsPageRoutingModule"]
        ],
        declarations: [_character_details_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsPage"]]
    })
], CharacterDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".characters-menu {\n  --background: rgb(5, 180, 5);\n  color: white;\n  font-size: 100px;\n  text-align: center;\n}\n\nimg {\n  border-radius: 50%;\n}\n\n.characters-title {\n  background: #d7f7d7;\n  color: white;\n  font-size: 20px;\n  text-align: center;\n  height: 10px;\n}\n\n.characters-card {\n  --background: rgb(215, 247, 215);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2Q2xvdWQvc3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXItZGV0YWlscy9jaGFyYWN0ZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXJhY3Rlci1kZXRhaWxzL2NoYXJhY3Rlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FESUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDREo7O0FET0E7RUFDSSxnQ0FBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhcmFjdGVyLWRldGFpbHMvY2hhcmFjdGVyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJhY3RlcnMtbWVudSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoNSwgMTgwLCA1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgXG59XG5cbi5jaGFyYWN0ZXJzLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjE1LCAyNDcsIDIxNSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMHB4O1xuXG4gICAgICAgIFxuICAgIFxufVxuXG4uY2hhcmFjdGVycy1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyMTUsIDI0NywgMjE1KTtcbiAgICBcbn1cbiIsIi5jaGFyYWN0ZXJzLW1lbnUge1xuICAtLWJhY2tncm91bmQ6IHJnYig1LCAxODAsIDUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2hhcmFjdGVycy10aXRsZSB7XG4gIGJhY2tncm91bmQ6ICNkN2Y3ZDc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTBweDtcbn1cblxuLmNoYXJhY3RlcnMtY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIxNSwgMjQ3LCAyMTUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: CharacterDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPage", function() { return CharacterDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/favourite.service */ "./src/app/services/favourite.service.ts");






let CharacterDetailsPage = class CharacterDetailsPage {
    constructor(activatedRoute, api, navCtrl, favouriteService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.navCtrl = navCtrl;
        this.favouriteService = favouriteService;
        this.isFavouriteCharacters = false;
        this.characterId = null;
    }
    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            // console.log(JSON.stringify(this.character));
        });
        this.favouriteService.isFavouriteCharacter(this.characterId).then(isFav => {
            this.isFavouriteCharacters = isFav;
        });
    }
    favouriteCharacter() {
        this.favouriteService.favouriteCharacter(this.characterId).then(() => {
            this.isFavouriteCharacters = true;
        });
    }
    unfavouriteCharacter() {
        this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavouriteCharacters = false;
        });
    }
};
CharacterDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_5__["FavouriteService"] }
];
CharacterDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-character-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./character-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./character-details.page.scss */ "./src/app/pages/character-details/character-details.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _services_favourite_service__WEBPACK_IMPORTED_MODULE_5__["FavouriteService"]])
], CharacterDetailsPage);



/***/ })

}]);
//# sourceMappingURL=character-details-character-details-module-es2015.js.map