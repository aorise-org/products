webpackJsonp([1],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail; });
/**
 * Created by tangjy on 2017/9/29.
 */
var Detail = (function () {
    function Detail() {
    }
    return Detail;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 Generated class for the ServiceProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var ServiceProvider = (function () {
    function ServiceProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello VideoServiceProvider Provider');
    }
    ServiceProvider.prototype.get = function (url) {
        console.log('VideoServiceProvider = ' + url);
        // this.showLoading();
        return this.http.get(url)
            .map(function (response) {
            // this.dismissLoading();
            console.log('response = ' + JSON.stringify(response));
            return response || {};
        }).catch(function (error) {
            // this.dismissLoading();
            var errMsg;
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Response */]) {
                var body = error.json() || '';
                var err = body.error || JSON.stringify(body);
                errMsg = error.status + " - " + (error.statusText || '') + " " + err;
            }
            else {
                errMsg = error.message ? error.message : error.toString();
            }
            console.error(errMsg);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
        });
    };
    return ServiceProvider;
}());
ServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* LoadingController */]])
], ServiceProvider);

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_video__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview_preview__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(app, navCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.videoParams = "http://baobab.wdjcdn.com/14564977406580.mp4";
        this.previewParams = "https://raw.githubusercontent.com/aorise-org/products/master/assets/login.docx";
    }
    HomePage.prototype.gotoVideoPage = function () {
        this.entryVideoPage(this.videoParams);
    };
    HomePage.prototype.entryVideoPage = function (params) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__video_video__["a" /* VideoPage */], params);
    };
    HomePage.prototype.gotoPreviewPage = function () {
        this.entryPreviewPage(this.previewParams);
    };
    HomePage.prototype.entryPreviewPage = function (params) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__preview_preview__["a" /* PreviewPage */], params);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"D:\AoriseGit\ionic-education\src\pages\home\home.html"*/'<!--<ion-header>-->\n<!--<ion-navbar>-->\n<!--<ion-title style="text-align:center">-->\n<!--智慧教育-->\n<!--</ion-title>-->\n<!--</ion-navbar>-->\n<!--</ion-header>-->\n\n<ion-content padding>\n  <p> {{ \'HOME.SHARE_TITLE\' | translate }}</p>\n\n  <button ion-button block (click)="gotoVideoPage()">{{ \'HOME.SHARE_VIDEO\' | translate }}</button>\n\n  <button ion-button block (click)="gotoPreviewPage()">{{ \'HOME.SHARE_PREVIEW\' | translate }}</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\AoriseGit\ionic-education\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_video__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_api__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoPage = (function () {
    // videoWrap: VideoWrap;
    function VideoPage(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        console.log(this.navParams.data);
        this.videoId = this.navParams.data;
        this.video = new __WEBPACK_IMPORTED_MODULE_2__models_video__["a" /* Video */]();
    }
    VideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
    };
    VideoPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit VideoPage');
        this.httpService.get(__WEBPACK_IMPORTED_MODULE_4__environments_api__["a" /* Api */].getVideoUrl()).subscribe(function (videoWrap) {
            console.log("subscribe");
            _this.video = videoWrap.data;
            // Todo 测试用代码
            // this.video.url = this.videoId;
            var videoPlayer = document.getElementById("video-player");
            videoPlayer.setAttribute('src', _this.video.url);
        }, function (error) {
            _this.errorMessage = error;
            console.log("error = " + _this.errorMessage);
        });
    };
    return VideoPage;
}());
VideoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-video',template:/*ion-inline-start:"D:\AoriseGit\ionic-education\src\pages\video\video.html"*/'<!--\n  Generated template for the VideoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n<!--<ion-navbar>-->\n<!--<ion-title>{{video.name}}</ion-title>-->\n<!--</ion-navbar>-->\n<!--</ion-header>-->\n\n<ion-content>\n  <video id="video-player" controls autoplay="autoplay">\n    <source src={{video.url}} type="video/mp4">\n    {{\'NOT_SUPPORT_VIDEO_TAG\' | translate}}\n  </video>\n\n  <education-detail [detailPreview]="video"></education-detail>\n</ion-content>\n\n<ion-footer no-border>\n  <education-app></education-app>\n</ion-footer>\n\n'/*ion-inline-end:"D:\AoriseGit\ionic-education\src\pages\video\video.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
], VideoPage);

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(219);

/**
 * Created by tangjy on 2017/10/14.
 */
var Api = (function () {
    function Api() {
    }
    Api.getVideoUrl = function () {
        return (__WEBPACK_IMPORTED_MODULE_0__environment__["a" /* environment */].production) ? "https://easy-mock.com/mock/59cf1534c5c4302238f614c5/ionic-education/video" : "/assets/mock/video.json";
    };
    Api.getPreviewUrl = function () {
        return (__WEBPACK_IMPORTED_MODULE_0__environment__["a" /* environment */].production) ? "https://easy-mock.com/mock/59cf1534c5c4302238f614c5/ionic-education/preview" : "/assets/mock/preview.json";
    };
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/**
 * Created by tangjy on 2017/6/28.
 */
/**
 * Created by tangjy on 2017/6/28.
 */ var environment = {
    production: true,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_preview__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_api__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreviewPage = (function () {
    function PreviewPage(app, navCtrl, navParams, httpService) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        console.log(this.navParams.data);
        this.previewId = this.navParams.data;
        this.preview = new __WEBPACK_IMPORTED_MODULE_2__models_preview__["a" /* Preview */]();
    }
    PreviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
    };
    PreviewPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit VideoPage');
        this.httpService.get(__WEBPACK_IMPORTED_MODULE_5__environments_api__["a" /* Api */].getPreviewUrl()).subscribe(function (previewWrap) {
            _this.preview = previewWrap.data;
            // Todo 测试用代码
            // this.preview.url = this.previewId;
            // this.previewUrl = "https://view.officeapps.live.com/op/view.aspx?src=" + this.preview.url;
            // console.log("subscribe: previewUrl = " + this.previewUrl);
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    PreviewPage.prototype.gotoDetailsPage = function () {
        this.entryDetailsPage(this.preview.url);
    };
    PreviewPage.prototype.entryDetailsPage = function (url) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__details_details__["a" /* DetailsPage */], url);
    };
    return PreviewPage;
}());
PreviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-preview',template:/*ion-inline-start:"D:\AoriseGit\ionic-education\src\pages\preview\preview.html"*/'<!--\n  Generated template for the PreviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <div class="table" style="background-image: url(assets/image/education_def_video.png)">\n    <div class="cell">\n      <img class="open" src="assets/image/education_btn_open_data.png" (click)="gotoDetailsPage()"/>\n    </div>\n  </div>\n\n  <education-detail [detailPreview]="preview"></education-detail>\n</ion-content>\n\n<ion-footer no-border>\n  <education-app></education-app>\n</ion-footer>\n'/*ion-inline-end:"D:\AoriseGit\ionic-education\src\pages\preview\preview.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]) === "function" && _d || Object])
], PreviewPage);

var _a, _b, _c, _d;
//# sourceMappingURL=preview.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detailsUrl = this.navParams.data;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    return DetailsPage;
}());
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-details',template:/*ion-inline-start:"D:\AoriseGit\ionic-education\src\pages\details\details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n<!--<ion-navbar>-->\n<!--<ion-title>details</ion-title>-->\n<!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-content>\n  <pdf-viewer [src]="detailsUrl"\n              [render-text]="true"\n              style="display: block;">\n  </pdf-viewer>\n</ion-content>\n'/*ion-inline-end:"D:\AoriseGit\ionic-education\src\pages\details\details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(219);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_video_video__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_preview_preview__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_details_details__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_service_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_pdf_viewer__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_education_app_education_app__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_education_detail_education_detail__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// // The translate loader needs to know where to load i18n files
// // in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_video_video__["a" /* VideoPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_preview_preview__["a" /* PreviewPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_15__components_education_app_education_app__["a" /* EducationAppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_education_detail_education_detail__["a" /* EducationDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_14_ng2_pdf_viewer__["PdfViewerModule"],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_7__pages_video_video__["a" /* VideoPage */], name: 'Video', segment: 'video/:params' },
                    { component: __WEBPACK_IMPORTED_MODULE_8__pages_preview_preview__["a" /* PreviewPage */], name: 'Preview', segment: 'preview/:params' }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_video_video__["a" /* VideoPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_preview_preview__["a" /* PreviewPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_service_service__["a" /* ServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(translate, platform, statusBar, splashScreen) {
        var _this = this;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.initTranslate();
        });
    }
    MyApp.prototype.initTranslate = function () {
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('zh');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use('zh'); // Set your language here
        }
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\AoriseGit\ionic-education\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\AoriseGit\ionic-education\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VideoWrap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail__ = __webpack_require__(113);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Created by tangjy on 2017/9/29.
 */
var VideoWrap = (function () {
    function VideoWrap() {
    }
    return VideoWrap;
}());

var Video = (function (_super) {
    __extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Video;
}(__WEBPACK_IMPORTED_MODULE_0__detail__["a" /* Detail */]));

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PreviewWrap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Preview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail__ = __webpack_require__(113);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Created by tangjy on 2017/9/29.
 */
var PreviewWrap = (function () {
    function PreviewWrap() {
    }
    return PreviewWrap;
}());

var Preview = (function (_super) {
    __extends(Preview, _super);
    function Preview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Preview;
}(__WEBPACK_IMPORTED_MODULE_0__detail__["a" /* Detail */]));

//# sourceMappingURL=preview.js.map

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EducationAppComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EducationAppComponent = (function () {
    // text: string;
    function EducationAppComponent(toastCtrl) {
        this.toastCtrl = toastCtrl;
        console.log('Hello EducationAppComponent Component');
    }
    EducationAppComponent.prototype.gotoEducationApp = function () {
        console.log("gotoDownloadPage");
        this.presentToast();
    };
    EducationAppComponent.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: '以后会跳转教育APP下载页面，或者直接下载教育APP',
            duration: 3000
        });
        toast.present();
    };
    return EducationAppComponent;
}());
EducationAppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'education-app',template:/*ion-inline-start:"D:\AoriseGit\ionic-education\src\components\education-app\education-app.html"*/'<!-- Generated template for the EducationAppComponent component -->\n<div>\n  <button ion-button full (click)="gotoEducationApp()">{{ \'EDUCATION_APP.NAME\' | translate }}</button>\n</div>\n'/*ion-inline-end:"D:\AoriseGit\ionic-education\src\components\education-app\education-app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], EducationAppComponent);

//# sourceMappingURL=education-app.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_detail__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EducationDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EducationDetailComponent = (function () {
    function EducationDetailComponent() {
        console.log('Hello EducationDetailComponent Component');
    }
    return EducationDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_detail__["a" /* Detail */])
], EducationDetailComponent.prototype, "detailPreview", void 0);
EducationDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'education-detail',template:/*ion-inline-start:"D:\AoriseGit\ionic-education\src\components\education-detail\education-detail.html"*/'<!-- Generated template for the EducationDetailComponent component -->\n<div>\n  <p class="content-title">{{detailPreview.name}}</p>\n  <hr>\n  <p class="content-title">{{ \'CONTENT_TITLE\' | translate }}</p>\n  <p class="content-body">{{detailPreview.description}}</p>\n</div>\n'/*ion-inline-end:"D:\AoriseGit\ionic-education\src\components\education-detail\education-detail.html"*/
    }),
    __metadata("design:paramtypes", [])
], EducationDetailComponent);

//# sourceMappingURL=education-detail.js.map

/***/ })

},[239]);
//# sourceMappingURL=main.js.map