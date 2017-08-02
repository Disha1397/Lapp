webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_reset__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_edit_profile_edit__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var ProfessorPage = (function () {
    function ProfessorPage(navCtrl, navParams, afauth, alertCtrl, afData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.alertCtrl = alertCtrl;
        this.afData = afData;
        this.user = {};
        console.log(this.user.email);
    }
    ProfessorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    ProfessorPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res, e_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("login fired:" + user.email, user.password);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afauth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 2:
                        res = _a.sent();
                        console.log(res);
                        this.proDetails = this.afData.object('Professor/' + res.uid);
                        this.proDetails.subscribe(function (data) {
                            console.log(data.fname);
                            if (data.fname != undefined) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__profile_edit_profile_edit__["a" /* ProfileEditPage */]);
                            }
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        alert_1 = this.alertCtrl.create({
                            title: e_1.message,
                            subTitle: 'Please check your Information',
                            buttons: ['OK']
                        });
                        alert_1.present();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProfessorPage.prototype.reset = function () {
        console.log("Reset page fired");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reset_reset__["a" /* ResetPage */]);
    };
    return ProfessorPage;
}());
ProfessorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-professor',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp\src\pages\Professor\Professor.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Professors Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background">\n  <div class="list card animated bounceInRight">\n  <ion-card >\n    <ion-card-header>\n      LOGIN\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list no-lines>\n\n        <ion-item>\n            <img class="circle" src="../img/logo.jpg" alt="your image">\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Username</ion-label>\n          <ion-input type="text" name="email" [(ngModel)]="user.email"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" name="password" [(ngModel)]="user.password"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <p>Forgot Password ? <a (click)="reset()">Get Your password</a></p>\n        </ion-item>\n        <button ion-button outline block color="danger" id="loginBtn" (click)="login(user)">Login</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp\src\pages\Professor\Professor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], ProfessorPage);

//# sourceMappingURL=Professor.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attendance_attendance__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Professor_Professor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, afauth, tc, alertCtrl, afData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.tc = tc;
        this.alertCtrl = alertCtrl;
        this.afData = afData;
        this.period = "1";
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.initializeYear();
        this.initializeDepartment();
        this.initializeSubject();
        this.initializeSemester();
    }
    ProfilePage.prototype.periods = function () {
        return [
            "1", "2", "3", "4", "5", "6", "7", "8"
        ];
    };
    ProfilePage.prototype.initializeYear = function () {
        this.years = [
            { id: 1, name: '1' },
            { id: 2, name: '2' },
            { id: 3, name: '3' },
            { id: 4, name: '4' }
        ];
    };
    ProfilePage.prototype.initializeSemester = function () {
        this.semesters = [
            { id: 1, name: 'Odd' },
            { id: 2, name: 'Even' }
        ];
    };
    ProfilePage.prototype.initializeDepartment = function () {
        this.departments = [
            { id: 1, name: 'CSE' },
            { id: 2, name: 'EEE' },
            { id: 3, name: 'ECE' },
            { id: 4, name: 'MECH' },
            { id: 5, name: 'IT' }
        ];
    };
    ProfilePage.prototype.initializeSubject = function () {
        this.subjects = [
            { id: 1, name: 'RMT', year_id: 4, department_id: 1, semester_id: 1 },
            { id: 2, name: 'CNS', year_id: 4, department_id: 1, semester_id: 1 },
            { id: 3, name: 'GTA', year_id: 4, department_id: 1, semester_id: 1 },
            { id: 4, name: 'CF', year_id: 4, department_id: 1, semester_id: 1 },
            { id: 5, name: 'GCC', year_id: 4, department_id: 1, semester_id: 1 },
            { id: 6, name: 'AI', year_id: 4, department_id: 1, semester_id: 2 },
            { id: 7, name: 'DSP', year_id: 4, department_id: 1, semester_id: 2 },
            { id: 8, name: 'MPMC', year_id: 4, department_id: 1, semester_id: 2 },
            { id: 9, name: 'PDS', year_id: 4, department_id: 1, semester_id: 2 }
        ];
    };
    ProfilePage.prototype.setPeriod = function (sPeriod) {
        this.selectedPeriods = this.sPeriod;
    };
    ProfilePage.prototype.setDepartmentValues = function (sYear) {
        this.selectedDepartments = this.departments;
    };
    ProfilePage.prototype.setSubjectValues = function (sDepartment, sYear, sSemester) {
        this.selectedSubjects = this.subjects.filter(function (subject) { return subject.department_id == sDepartment.id &&
            subject.year_id == sYear.id && subject.semester_id == sSemester.id; });
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    ProfilePage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfilePage');
        var time = __WEBPACK_IMPORTED_MODULE_6_moment__();
        var format = 'hh:mm:ss';
        var period1 = __WEBPACK_IMPORTED_MODULE_6_moment__('8:00:00', format);
        var period2 = __WEBPACK_IMPORTED_MODULE_6_moment__('9:00:00', format);
        var period3 = __WEBPACK_IMPORTED_MODULE_6_moment__('10:10:00', format);
        var period4 = __WEBPACK_IMPORTED_MODULE_6_moment__('11:00:00', format);
        var period5 = __WEBPACK_IMPORTED_MODULE_6_moment__('11:50:00', format);
        var period6 = __WEBPACK_IMPORTED_MODULE_6_moment__('13:20:00', format);
        var period7 = __WEBPACK_IMPORTED_MODULE_6_moment__('14:20:00', format);
        var period8 = __WEBPACK_IMPORTED_MODULE_6_moment__('15:10:00', format);
        var period9 = __WEBPACK_IMPORTED_MODULE_6_moment__('16:10:00', format);
        if (time.isBetween(period1, period2)) {
            this.period = '1';
        }
        if (time.isBetween(period2, period3)) {
            this.period = '2';
        }
        if (time.isBetween(period3, period4)) {
            this.period = '3';
        }
        if (time.isBetween(period4, period5)) {
            this.period = '4';
        }
        if (time.isBetween(period5, period6)) {
            this.period = '5';
        }
        if (time.isBetween(period6, period7)) {
            this.period = '6';
        }
        if (time.isBetween(period7, period8)) {
            this.period = '7';
        }
        if (time.isBetween(period8, period9)) {
            this.period = '8';
        }
        this.afauth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                console.log(data.email);
                _this.tc.create({
                    message: 'You are logged in,${{data.email}}',
                    duration: 3000
                }).present();
                _this.profiledetails = _this.afData.object('Professor/' + data.uid);
            }
            else {
                _this.tc.create({
                    message: 'Something went wrong Bosco',
                    duration: 3000
                }).present();
            }
        });
    };
    ProfilePage.prototype.isEmpty = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    };
    ;
    ProfilePage.prototype.logout = function () {
        console.log("logout button fired");
        this.afauth.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__Professor_Professor__["a" /* ProfessorPage */]);
    };
    ProfilePage.prototype.markAttendance = function (sYear, sDepartment, sSubject) {
        if ("undefined" === typeof sYear || "undefined" === typeof sDepartment /*|| "undefined" === typeof sSubject*/) {
            var alert_1 = this.alertCtrl.create({
                title: 'Insufficient Details',
                subTitle: 'Please enter all the details',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            console.log("attendance firered" + sYear.name + sDepartment.name + this.selectedPeriods);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__attendance_attendance__["a" /* AttendancePage */], {
                param1: sYear.name, param2: sDepartment.name, param3: this.selectedPeriods
            });
        }
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n        <ion-title>Profile page</ion-title>\n    <ion-buttons right color="danger">\n      <button ion-button (click)="logout()">Logout</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n		<ion-item>\n			<ion-label>Username:{{(profiledetails|async)?.fname}}</ion-label>\n		</ion-item>\n\n  <ion-item>\n    <ion-label>Period No</ion-label>\n    <ion-select (ionChange)="setPeriod(sPeriod)" [(ngModel)]="sPeriod"  multiple="true">\n      <ion-option *ngFor="let period of periods()">{{period}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n     <ion-label><strong>Year</strong></ion-label>\n     <ion-select (ionChange)="setDepartmentValues(sYear)" [(ngModel)]="sYear">\n          <ion-option [value]="sYear" *ngFor = "let sYear of years">{{sYear.name}}  </ion-option>\n    </ion-select>\n    </ion-item>\n\n\n\n<ion-item>\n    <ion-label>Semester</ion-label>\n    <ion-select  [(ngModel)]="sSemester" >\n      <ion-option [value]="sSemester" *ngFor="let sSemester of semesters ">{{sSemester.name}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n\n\n<ion-item>\n      <ion-label>Department</ion-label>\n      <ion-select (ionChange)="setSubjectValues(sDepartment, sYear, sSemester)" [(ngModel)]="sDepartment">\n         <ion-option [value]="sDepartment" *ngFor = "let sDepartment of selectedDepartments">{{sDepartment.name}}</ion-option>\n      </ion-select>\n </ion-item>\n\n\n\n\n\n  <ion-item >\n    <ion-label> Subject </ion-label>\n      <ion-select [(ngModel)]="sSubject" >\n        <ion-option [value]="sSubject" *ngFor="let sSubject of selectedSubjects" >{{sSubject.name}}</ion-option>\n      </ion-select>\n\n  </ion-item>\n\n\n\n  <button ion-button color="dark" outline (click)="markAttendance(sYear,sDepartment,sSubject)">\n    MARK ATTENDANCE</button><br>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Student_Student__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testtab_testtab__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Professor_Professor__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__Professor_Professor__["a" /* ProfessorPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__Student_Student__["a" /* StudentPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__testtab_testtab__["a" /* TestTabPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Work\Mini Project\Lapp\src\pages\tabs\tabs.html"*/'<ion-tabs color="mycolor1">\n  <ion-tab [root]="tab1Root" tabTitle="Professors Login" ></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Students Login" ></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Test Tab"  ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentPage = (function () {
    function StudentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return StudentPage;
}());
StudentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-student',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp\src\pages\Student\Student.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Students Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="background">\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      LOGIN\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list no-lines>\n\n        <ion-item>\n\n          <ion-label floating>Username</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <p>Forgot Password ? <a>Get Your password</a></p>\n\n        </ion-item>\n\n        <button ion-button outline block color="danger">Login</button>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp\src\pages\Student\Student.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], StudentPage);

//# sourceMappingURL=Student.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestTabPage = (function () {
    function TestTabPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return TestTabPage;
}());
TestTabPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-testtab',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp\src\pages\testtab\testtab.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Test Tabs\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp\src\pages\testtab\testtab.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], TestTabPage);

//# sourceMappingURL=testtab.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the AttendancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AttendancePage = (function () {
    function AttendancePage(navCtrl, navParams, afauth, afData, fb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.afData = afData;
        this.name = [];
        this.attendance = [];
        this.regNo = [];
        this.attendanceArray = [];
        this.presentArray = [];
        this.absentArray = [];
        this.selectedStudents = [''];
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.year = this.navParams.get('param1');
        this.dept = this.navParams.get('param2');
        this.periods = this.navParams.get("param3");
        this.namedetails = this.afData.object('Namelist/Namelist/' + this.dept + '/' + this.year + ' Year/');
        this.namedetails.subscribe(function (data) {
            var keys = Object.keys(data);
            _this.data = keys;
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var i = keys_1[_i];
                _this.regNo.push(i);
                _this.namedetails2 = _this.afData.object('Namelist/Namelist/' + _this.dept + '/' + _this.year + ' Year/' + i);
                _this.namedetails2.subscribe(function (data1) {
                    _this.attendance.push(data1.Attendance);
                    _this.name.push(data1.Name);
                });
            }
        });
    }
    AttendancePage.prototype.markAttendance = function (test, attendanceArray) {
        if (attendanceArray) {
            this.presentArray.push(test);
        }
        else {
            this.presentArray.splice(this.presentArray.indexOf(test), 1);
        }
        console.log("present array is" + this.presentArray);
        //console.log("absent array is"+this.absentArray);
    };
    AttendancePage.prototype.confirmAttendance = function () {
        var _this = this;
        this.absentArray = this.regNo.filter(function (item) { return _this.presentArray.indexOf(item) < 0; });
        console.log("absentees are" + this.absentArray);
    };
    AttendancePage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    AttendancePage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    AttendancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttendancePage');
    };
    return AttendancePage;
}());
AttendancePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-attendance',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp\src\pages\attendance\attendance.html"*/'<!--\n  Generated template for the AttendancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Attendance: {{this.dept}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor = "let regNo of regNo; let i = index" >\n      <ion-label> {{regNo}} {{name[i]}}  </ion-label>\n      <ion-checkbox [(ngModel)] = "attendanceArray[i]" (ionChange)="markAttendance(regNo,attendanceArray[i])" checked="true">  </ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <ion-item>\n     <button ion-button type="button" (click)="confirmAttendance()">Confirm Attendance</button>\n   </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp\src\pages\attendance\attendance.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
], AttendancePage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=attendance.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the ResetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ResetPage = (function () {
    function ResetPage(navCtrl, navParams, afauth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.alertCtrl = alertCtrl;
        this.er = {};
    }
    ResetPage.prototype.ionViewDidLoad = function () {
        console.log("resetpage fired");
    };
    ResetPage.prototype.resetPassword = function (email) {
        return __awaiter(this, void 0, __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.Promise, function () {
            var res, e_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(email);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afauth.auth.sendPasswordResetEmail(email)];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, this.navCtrl.pop()];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        alert_1 = this.alertCtrl.create({
                            title: e_1.message,
                            subTitle: 'Please check your Information',
                            buttons: ['OK']
                        });
                        alert_1.present();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ResetPage;
}());
ResetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reset',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp\src\pages\reset\reset.html"*/'<!--\n  Generated template for the ResetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reset Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background">\n  <div class="list card animated bounceInRight">\n  <ion-card >\n    <ion-card-header>\n      Password Reset\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list no-lines>\n        <ion-item>\n            <img class="circle"src="../img/logo.jpg" alt="your image">\n        </ion-item>\n        <ion-item>\n\n          <ion-label floating>EmailId</ion-label>\n          <ion-input type="text" name="email" [(ngModel)]="email"></ion-input>\n        </ion-item>\n\n\n        <button ion-button outline block color="danger"  (click)="resetPassword(email)">Login</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp\src\pages\reset\reset.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ResetPage);

//# sourceMappingURL=reset.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(113);
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
 * Generated class for the ProfileEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfileEditPage = (function () {
    function ProfileEditPage(navCtrl, navParams, afauth, alertCtrl, afData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.alertCtrl = alertCtrl;
        this.afData = afData;
        this.profiledetails = {};
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    ProfileEditPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    ProfileEditPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    ProfileEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileEditPage');
    };
    ProfileEditPage.prototype.create = function (profiledetails) {
        var _this = this;
        console.log(profiledetails.lname && profiledetails.fname && profiledetails.dept);
        if (profiledetails.lname && profiledetails.fname && profiledetails.dept) {
            this.afauth.authState.take(1).subscribe(function (data) {
                _this.afData.object('Professor/' + data.uid).set(profiledetails).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]); });
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: "Update Failed",
                subTitle: 'Please Enter all the required Information',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    return ProfileEditPage;
}());
ProfileEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile-edit',template:/*ion-inline-start:"E:\Work\Mini Project\Lapp\src\pages\profile-edit\profile-edit.html"*/'<!--\n  Generated template for the ProfileEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile Edit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background">\n  <div class="list card animated bounceInRight">\n  <ion-card >\n\n    <ion-card-content>\n      <ion-list no-lines>\n\n        <ion-item>\n            <img class="circle" src="../img/logo.jpg" alt="your image">\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>FirstName</ion-label>\n            <ion-input type="text" name="fname" [(ngModel)]="profiledetails.fname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>LastName</ion-label>\n            <ion-input type="text" name="lname" [(ngModel)]="profiledetails.lname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label><b>Deptarment</b></ion-label>\n\n        </ion-item>\n\n        <ion-list radio-group [(ngModel)]="profiledetails.dept">\n              <ion-item>\n                <ion-label>CSE</ion-label>\n                <ion-radio value="CSE" checked></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>MECH</ion-label>\n                <ion-radio value="MECH"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>IT</ion-label>\n                <ion-radio value="IT" ></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>ECE</ion-label>\n                <ion-radio value="ECE" ></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>EEE</ion-label>\n                <ion-radio value="EEE" ></ion-radio>\n              </ion-item>\n        </ion-list>\n\n        <button ion-button outline block color="danger" id="loginBtn" (click)="create(profiledetails)">Update</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp\src\pages\profile-edit\profile-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], ProfileEditPage);

//# sourceMappingURL=profile-edit.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Student_Student__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_testtab_testtab__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Professor_Professor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reset_reset__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_edit_profile_edit__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_attendance_attendance__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var config = {
    apiKey: "AIzaSyCwsZwBg8oiNGKvXP3TNGHsRpOyc2CmAVM",
    authDomain: "lapp-a4af3.firebaseapp.com",
    databaseURL: "https://lapp-a4af3.firebaseio.com",
    projectId: "lapp-a4af3",
    storageBucket: "lapp-a4af3.appspot.com",
    messagingSenderId: "545793665296"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_Student_Student__["a" /* StudentPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_testtab_testtab__["a" /* TestTabPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_Professor_Professor__["a" /* ProfessorPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_reset_reset__["a" /* ResetPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_edit_profile_edit__["a" /* ProfileEditPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_attendance_attendance__["a" /* AttendancePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_Student_Student__["a" /* StudentPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_testtab_testtab__["a" /* TestTabPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_reset_reset__["a" /* ResetPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_edit_profile_edit__["a" /* ProfileEditPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_attendance_attendance__["a" /* AttendancePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_Professor_Professor__["a" /* ProfessorPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(205);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Work\Mini Project\Lapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Work\Mini Project\Lapp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 220,
	"./af.js": 220,
	"./ar": 221,
	"./ar-dz": 222,
	"./ar-dz.js": 222,
	"./ar-kw": 223,
	"./ar-kw.js": 223,
	"./ar-ly": 224,
	"./ar-ly.js": 224,
	"./ar-ma": 225,
	"./ar-ma.js": 225,
	"./ar-sa": 226,
	"./ar-sa.js": 226,
	"./ar-tn": 227,
	"./ar-tn.js": 227,
	"./ar.js": 221,
	"./az": 228,
	"./az.js": 228,
	"./be": 229,
	"./be.js": 229,
	"./bg": 230,
	"./bg.js": 230,
	"./bn": 231,
	"./bn.js": 231,
	"./bo": 232,
	"./bo.js": 232,
	"./br": 233,
	"./br.js": 233,
	"./bs": 234,
	"./bs.js": 234,
	"./ca": 235,
	"./ca.js": 235,
	"./cs": 236,
	"./cs.js": 236,
	"./cv": 237,
	"./cv.js": 237,
	"./cy": 238,
	"./cy.js": 238,
	"./da": 239,
	"./da.js": 239,
	"./de": 240,
	"./de-at": 241,
	"./de-at.js": 241,
	"./de-ch": 242,
	"./de-ch.js": 242,
	"./de.js": 240,
	"./dv": 243,
	"./dv.js": 243,
	"./el": 244,
	"./el.js": 244,
	"./en-au": 245,
	"./en-au.js": 245,
	"./en-ca": 246,
	"./en-ca.js": 246,
	"./en-gb": 247,
	"./en-gb.js": 247,
	"./en-ie": 248,
	"./en-ie.js": 248,
	"./en-nz": 249,
	"./en-nz.js": 249,
	"./eo": 250,
	"./eo.js": 250,
	"./es": 251,
	"./es-do": 252,
	"./es-do.js": 252,
	"./es.js": 251,
	"./et": 253,
	"./et.js": 253,
	"./eu": 254,
	"./eu.js": 254,
	"./fa": 255,
	"./fa.js": 255,
	"./fi": 256,
	"./fi.js": 256,
	"./fo": 257,
	"./fo.js": 257,
	"./fr": 258,
	"./fr-ca": 259,
	"./fr-ca.js": 259,
	"./fr-ch": 260,
	"./fr-ch.js": 260,
	"./fr.js": 258,
	"./fy": 261,
	"./fy.js": 261,
	"./gd": 262,
	"./gd.js": 262,
	"./gl": 263,
	"./gl.js": 263,
	"./gom-latn": 264,
	"./gom-latn.js": 264,
	"./he": 265,
	"./he.js": 265,
	"./hi": 266,
	"./hi.js": 266,
	"./hr": 267,
	"./hr.js": 267,
	"./hu": 268,
	"./hu.js": 268,
	"./hy-am": 269,
	"./hy-am.js": 269,
	"./id": 270,
	"./id.js": 270,
	"./is": 271,
	"./is.js": 271,
	"./it": 272,
	"./it.js": 272,
	"./ja": 273,
	"./ja.js": 273,
	"./jv": 274,
	"./jv.js": 274,
	"./ka": 275,
	"./ka.js": 275,
	"./kk": 276,
	"./kk.js": 276,
	"./km": 277,
	"./km.js": 277,
	"./kn": 278,
	"./kn.js": 278,
	"./ko": 279,
	"./ko.js": 279,
	"./ky": 280,
	"./ky.js": 280,
	"./lb": 281,
	"./lb.js": 281,
	"./lo": 282,
	"./lo.js": 282,
	"./lt": 283,
	"./lt.js": 283,
	"./lv": 284,
	"./lv.js": 284,
	"./me": 285,
	"./me.js": 285,
	"./mi": 286,
	"./mi.js": 286,
	"./mk": 287,
	"./mk.js": 287,
	"./ml": 288,
	"./ml.js": 288,
	"./mr": 289,
	"./mr.js": 289,
	"./ms": 290,
	"./ms-my": 291,
	"./ms-my.js": 291,
	"./ms.js": 290,
	"./my": 292,
	"./my.js": 292,
	"./nb": 293,
	"./nb.js": 293,
	"./ne": 294,
	"./ne.js": 294,
	"./nl": 295,
	"./nl-be": 296,
	"./nl-be.js": 296,
	"./nl.js": 295,
	"./nn": 297,
	"./nn.js": 297,
	"./pa-in": 298,
	"./pa-in.js": 298,
	"./pl": 299,
	"./pl.js": 299,
	"./pt": 300,
	"./pt-br": 301,
	"./pt-br.js": 301,
	"./pt.js": 300,
	"./ro": 302,
	"./ro.js": 302,
	"./ru": 303,
	"./ru.js": 303,
	"./sd": 304,
	"./sd.js": 304,
	"./se": 305,
	"./se.js": 305,
	"./si": 306,
	"./si.js": 306,
	"./sk": 307,
	"./sk.js": 307,
	"./sl": 308,
	"./sl.js": 308,
	"./sq": 309,
	"./sq.js": 309,
	"./sr": 310,
	"./sr-cyrl": 311,
	"./sr-cyrl.js": 311,
	"./sr.js": 310,
	"./ss": 312,
	"./ss.js": 312,
	"./sv": 313,
	"./sv.js": 313,
	"./sw": 314,
	"./sw.js": 314,
	"./ta": 315,
	"./ta.js": 315,
	"./te": 316,
	"./te.js": 316,
	"./tet": 317,
	"./tet.js": 317,
	"./th": 318,
	"./th.js": 318,
	"./tl-ph": 319,
	"./tl-ph.js": 319,
	"./tlh": 320,
	"./tlh.js": 320,
	"./tr": 321,
	"./tr.js": 321,
	"./tzl": 322,
	"./tzl.js": 322,
	"./tzm": 323,
	"./tzm-latn": 324,
	"./tzm-latn.js": 324,
	"./tzm.js": 323,
	"./uk": 325,
	"./uk.js": 325,
	"./ur": 326,
	"./ur.js": 326,
	"./uz": 327,
	"./uz-latn": 328,
	"./uz-latn.js": 328,
	"./uz.js": 327,
	"./vi": 329,
	"./vi.js": 329,
	"./x-pseudo": 330,
	"./x-pseudo.js": 330,
	"./yo": 331,
	"./yo.js": 331,
	"./zh-cn": 332,
	"./zh-cn.js": 332,
	"./zh-hk": 333,
	"./zh-hk.js": 333,
	"./zh-tw": 334,
	"./zh-tw.js": 334
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 428;

/***/ })

},[337]);
//# sourceMappingURL=main.js.map