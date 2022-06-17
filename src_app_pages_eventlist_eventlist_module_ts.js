"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_eventlist_eventlist_module_ts"],{

/***/ 3274:
/*!*************************************************************!*\
  !*** ./src/app/pages/eventlist/eventlist-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventlistPageRoutingModule": () => (/* binding */ EventlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _eventlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventlist.page */ 2813);




const routes = [
    {
        path: '',
        component: _eventlist_page__WEBPACK_IMPORTED_MODULE_0__.EventlistPage
    }
];
let EventlistPageRoutingModule = class EventlistPageRoutingModule {
};
EventlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventlistPageRoutingModule);



/***/ }),

/***/ 3642:
/*!*****************************************************!*\
  !*** ./src/app/pages/eventlist/eventlist.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventlistPageModule": () => (/* binding */ EventlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _eventlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventlist-routing.module */ 3274);
/* harmony import */ var _eventlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventlist.page */ 2813);







let EventlistPageModule = class EventlistPageModule {
};
EventlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _eventlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventlistPageRoutingModule
        ],
        declarations: [_eventlist_page__WEBPACK_IMPORTED_MODULE_1__.EventlistPage]
    })
], EventlistPageModule);



/***/ }),

/***/ 2813:
/*!***************************************************!*\
  !*** ./src/app/pages/eventlist/eventlist.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventlistPage": () => (/* binding */ EventlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _eventlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventlist.page.html?ngResource */ 8947);
/* harmony import */ var _eventlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventlist.page.scss?ngResource */ 4981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events.service */ 7712);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);










let EventlistPage = class EventlistPage {
    constructor(alertController, toastController, eventservice, platform, router) {
        this.alertController = alertController;
        this.toastController = toastController;
        this.eventservice = eventservice;
        this.platform = platform;
        this.router = router;
        this.finishedloading = false;
        this.eventlist = [];
    }
    ngOnInit() {
        this.eventservice.getAllEvents().subscribe(result => {
            this.eventlist = result;
            this.finishedloading = true;
        }, error => {
            this.finishedloading = true;
        });
    }
    refresh(event) {
        this.eventservice.getAllEvents().subscribe(result => {
            this.eventlist = result;
            event.target.complete();
        }, error => {
            event.target.complete();
        });
    }
    eventclick(event) {
        this.router.navigate(['/countdown', event]);
    }
    delete(event) {
        this.finishedloading = false;
        this.eventservice.deleteEvent(event).subscribe(result => {
            this.finishedloading = true;
            this.eventlist = result;
        }, error => {
            this.finishedloading = true;
        });
    }
    edit(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: '',
                header: 'Edit Event',
                inputs: [
                    {
                        name: 'title',
                        type: 'text',
                        placeholder: 'Title',
                        value: event.title
                    },
                    {
                        name: 'date',
                        type: 'datetime-local',
                        min: moment__WEBPACK_IMPORTED_MODULE_3__().format("yyyy-MM-DD") + "T00:00:00",
                        value: moment__WEBPACK_IMPORTED_MODULE_3__(event.date).format("yyyy-MM-DDTHH:mm:ss.SSS")
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Edit',
                        handler: (inputs) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            if (inputs.title == "" || inputs.date == "") {
                                const toast = yield this.toastController.create({
                                    message: 'Either the title or date is not set',
                                    duration: 2000
                                });
                                toast.present();
                            }
                            else if (moment__WEBPACK_IMPORTED_MODULE_3__(inputs.date).isBefore(moment__WEBPACK_IMPORTED_MODULE_3__())) {
                                const toast = yield this.toastController.create({
                                    message: 'The date is in the past',
                                    duration: 2000
                                });
                                toast.present();
                            }
                            else {
                                this.finishedloading = false;
                                this.eventservice.editEvent(event, inputs.title, moment__WEBPACK_IMPORTED_MODULE_3__(inputs.date).format("yyyy-MM-DDTHH:mm:ssZ")).subscribe(result => {
                                    this.finishedloading = true;
                                    this.eventlist = result;
                                }, error => {
                                    this.finishedloading = true;
                                });
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    add() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: '',
                header: 'Add Event',
                inputs: [
                    {
                        name: 'title',
                        type: 'text',
                        placeholder: 'Title'
                    },
                    {
                        name: 'date',
                        type: 'datetime-local',
                        min: moment__WEBPACK_IMPORTED_MODULE_3__().format("yyyy-MM-DD") + "T00:00:00",
                        value: moment__WEBPACK_IMPORTED_MODULE_3__().format("yyyy-MM-DDTHH:mm:ss.SSS")
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Add',
                        handler: (inputs) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            if (inputs.title == "" || inputs.date == "") {
                                const toast = yield this.toastController.create({
                                    message: 'Either the title or date is not set',
                                    duration: 2000
                                });
                                toast.present();
                            }
                            else if (moment__WEBPACK_IMPORTED_MODULE_3__(inputs.date).isBefore(moment__WEBPACK_IMPORTED_MODULE_3__())) {
                                const toast = yield this.toastController.create({
                                    message: 'The date is in the past',
                                    duration: 2000
                                });
                                toast.present();
                            }
                            else {
                                this.finishedloading = false;
                                this.eventservice.addEvent(inputs.title, moment__WEBPACK_IMPORTED_MODULE_3__(inputs.date).format("yyyy-MM-DDTHH:mm:ssZ")).subscribe(result => {
                                    this.finishedloading = true;
                                    this.eventlist = result;
                                }, error => {
                                    this.finishedloading = true;
                                });
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
};
EventlistPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
EventlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-eventlist',
        template: _eventlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_eventlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventlistPage);



/***/ }),

/***/ 4981:
/*!****************************************************************!*\
  !*** ./src/app/pages/eventlist/eventlist.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".addbutton {\n  --padding-start: 0px;\n}\n.addbutton ion-icon {\n  color: #2ed400;\n  margin: auto;\n}\nion-spinner {\n  width: 100px !important;\n  height: 100px !important;\n}\n.centerspinner {\n  top: 50%;\n  left: 50%;\n  position: fixed;\n  transform: translate(-50%, -50%);\n}\nion-header {\n  -webkit-user-select: none;\n          user-select: none;\n}\nion-list-header {\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQUNKO0FBQUk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQ0E7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0FBRUo7QUFBQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBR0o7QUFBQTtFQUNJLHlCQUFBO1VBQUEsaUJBQUE7QUFHSjtBQUFBO0VBQ0kseUJBQUE7VUFBQSxpQkFBQTtBQUdKIiwiZmlsZSI6ImV2ZW50bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkYnV0dG9ue1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogIzJlZDQwMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cbmlvbi1zcGlubmVye1xuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cbi5jZW50ZXJzcGlubmVye1xuICAgIHRvcDo1MCU7XG4gICAgbGVmdDo1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5pb24taGVhZGVye1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5pb24tbGlzdC1oZWFkZXJ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 8947:
/*!****************************************************************!*\
  !*** ./src/app/pages/eventlist/eventlist.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Event List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\" disabled=\"{{finishedloading == false}}\">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"centerspinner\" *ngIf=\"finishedloading == false\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"content\" *ngIf=\"finishedloading\">\n    <ion-list>\n      <ion-list-header>\n        Events\n      </ion-list-header>\n      <ion-item-sliding *ngFor=\"let event of eventlist\">\n        <ion-item (click)=\"eventclick(event)\">\n          <ion-label>\n            <h3>{{event.title}}</h3>\n            <p>\n              {{event.date | date :'dd/MM/yyyy, h:mm a'}}\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"warning\" (click)=\"edit(event)\">Edit</ion-item-option>\n          <ion-item-option color=\"danger\" (click)=\"delete(event)\">Delete</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n      <ion-item class=\"addbutton\" (click)=\"add()\" lines=\"none\">\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf=\"this.platform.is('desktop') == false\">\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_eventlist_eventlist_module_ts.js.map