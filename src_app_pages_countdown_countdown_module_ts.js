"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_countdown_countdown_module_ts"],{

/***/ 7151:
/*!*************************************************************!*\
  !*** ./src/app/pages/countdown/countdown-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountdownPageRoutingModule": () => (/* binding */ CountdownPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _countdown_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countdown.page */ 2407);




const routes = [
    {
        path: '',
        component: _countdown_page__WEBPACK_IMPORTED_MODULE_0__.CountdownPage
    }
];
let CountdownPageRoutingModule = class CountdownPageRoutingModule {
};
CountdownPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CountdownPageRoutingModule);



/***/ }),

/***/ 5160:
/*!*****************************************************!*\
  !*** ./src/app/pages/countdown/countdown.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountdownPageModule": () => (/* binding */ CountdownPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _countdown_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countdown-routing.module */ 7151);
/* harmony import */ var _countdown_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countdown.page */ 2407);







let CountdownPageModule = class CountdownPageModule {
};
CountdownPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _countdown_routing_module__WEBPACK_IMPORTED_MODULE_0__.CountdownPageRoutingModule
        ],
        declarations: [_countdown_page__WEBPACK_IMPORTED_MODULE_1__.CountdownPage]
    })
], CountdownPageModule);



/***/ }),

/***/ 2407:
/*!***************************************************!*\
  !*** ./src/app/pages/countdown/countdown.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountdownPage": () => (/* binding */ CountdownPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _countdown_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countdown.page.html?ngResource */ 5427);
/* harmony import */ var _countdown_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countdown.page.scss?ngResource */ 9449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../events.service */ 7712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/local-notifications */ 5568);









let CountdownPage = class CountdownPage {
    constructor(eventservice, route) {
        this.eventservice = eventservice;
        this.route = route;
        this.finishedloading = false;
        this.latestevent = undefined;
        this.receivedevent = undefined;
        this.daysleft = "";
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.id == undefined) {
                this.eventservice.getLatestEvent().subscribe(result => {
                    this.subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(1000).subscribe(x => {
                        this.recalculate();
                    });
                    this.latestevent = result;
                    this.recalculate();
                    this.finishedloading = true;
                    this.makelocalnotification(result);
                }, error => {
                    this.finishedloading = true;
                    this.makelocalnotification();
                });
            }
            else {
                this.subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(1000).subscribe(x => {
                    this.recalculate();
                });
                this.latestevent = { id: parseInt(params.id), title: params.title, date: new Date(params.date) };
                this.receivedevent = this.latestevent;
                this.recalculate();
                this.finishedloading = true;
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    }
    refresh(event) {
        if (this.receivedevent == undefined) {
            this.eventservice.getLatestEvent().subscribe(result => {
                this.latestevent = result;
                this.recalculate();
                event.target.complete();
                this.makelocalnotification(result);
            }, error => {
                event.target.complete();
                this.makelocalnotification();
            });
        }
        else {
            this.latestevent = this.receivedevent;
            this.recalculate();
            event.target.complete();
        }
    }
    recalculate() {
        let eventdatemoment = moment__WEBPACK_IMPORTED_MODULE_2__(this.latestevent.date);
        var ms = eventdatemoment.diff(moment__WEBPACK_IMPORTED_MODULE_2__());
        var d = moment__WEBPACK_IMPORTED_MODULE_2__.duration(ms);
        this.daysleft = `Years: ${d.years()}, Months: ${d.months()}, Days: ${d.days()}, Hours: ${d.hours()}, Minutes: ${d.minutes()}, Seconds: ${d.seconds()}`;
        if (this.receivedevent == undefined && d.milliseconds() <= 0) {
            this.finishedloading = false;
            this.eventservice.getLatestEvent().subscribe(result => {
                this.latestevent = result;
                this.recalculate();
                this.finishedloading = true;
                this.makelocalnotification(result);
            }, error => {
                this.finishedloading = true;
                this.makelocalnotification();
            });
        }
    }
    makelocalnotification(event) {
        _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_4__.LocalNotifications.getPending().then((pendingresult) => {
            if (pendingresult.notifications.length == 0) {
                if (event != null) {
                    _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_4__.LocalNotifications.schedule({
                        notifications: [
                            {
                                id: event.id,
                                title: "Upcoming Event",
                                body: event.title,
                                schedule: {
                                    at: event.date,
                                }
                            }
                        ]
                    });
                }
            }
            else {
                _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_4__.LocalNotifications.cancel({
                    notifications: [
                        {
                            id: pendingresult.notifications[0].id
                        }
                    ]
                }).then(() => {
                    if (event != null) {
                        _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_4__.LocalNotifications.schedule({
                            notifications: [
                                {
                                    id: event.id,
                                    title: "Upcoming Event",
                                    body: event.title,
                                    schedule: {
                                        at: event.date,
                                    }
                                }
                            ]
                        });
                    }
                });
            }
        });
    }
};
CountdownPage.ctorParameters = () => [
    { type: _events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
CountdownPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-countdown',
        template: _countdown_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_countdown_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CountdownPage);



/***/ }),

/***/ 1925:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();


/***/ }),

/***/ 3491:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 7269);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber, counter: 0, period }));
        return subscriber;
    });
}
function dispatch(state) {
    const { subscriber, counter, period } = state;
    subscriber.next(counter);
    this.schedule({ subscriber, counter: counter + 1, period }, period);
}


/***/ }),

/***/ 5353:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2425);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}


/***/ }),

/***/ 3670:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 5353);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}


/***/ }),

/***/ 2901:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 1925);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}


/***/ }),

/***/ 328:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 3670);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2901);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;


/***/ }),

/***/ 7269:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric)
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 4327);

function isNumeric(val) {
    return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && (val - parseFloat(val) + 1) >= 0;
}


/***/ }),

/***/ 9449:
/*!****************************************************************!*\
  !*** ./src/app/pages/countdown/countdown.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-spinner {\n  width: 100px !important;\n  height: 100px !important;\n}\n\n.centerspinner {\n  top: 50%;\n  left: 50%;\n  position: fixed;\n  transform: translate(-50%, -50%);\n}\n\n.content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.ios ion-card {\n  margin-bottom: 100px;\n}\n\nion-card-content p {\n  margin-top: 10px;\n}\n\nion-header {\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZG93bi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksb0JBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0FBS0o7O0FBRkE7RUFDSSx5QkFBQTtVQUFBLGlCQUFBO0FBS0oiLCJmaWxlIjoiY291bnRkb3duLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zcGlubmVye1xuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cbi5jZW50ZXJzcGlubmVye1xuICAgIHRvcDo1MCU7XG4gICAgbGVmdDo1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5pb3MgaW9uLWNhcmR7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5pb24tY2FyZC1jb250ZW50IHB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWhlYWRlcntcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iXX0= */";

/***/ }),

/***/ 5427:
/*!****************************************************************!*\
  !*** ./src/app/pages/countdown/countdown.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar translucent>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Countdown</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\" disabled=\"{{finishedloading == false}}\">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"centerspinner\" *ngIf=\"finishedloading == false\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"content\" *ngIf=\"finishedloading\">\n    <ion-card *ngIf=\"latestevent\">\n      <ion-card-header>\n        <ion-card-title>{{latestevent.title}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>\n          Date : \n          <br>\n          {{latestevent.date | date :'dd/MM/yyyy, h:mm a'}}\n          <br>\n        </p>\n        <p>\n          Time Left : \n          <br>\n          {{daysleft}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n    <ion-label *ngIf=\"!latestevent\">\n      No Event Upcoming\n    </ion-label>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_countdown_countdown_module_ts.js.map