(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["candidates-candidates-module"],{

/***/ "./src/app/candidates/candidate-create/create-candidate.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/candidates/candidate-create/create-candidate.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n       <div class=\"card\">\n          <div class=\"card-header\">\n             <h4 class=\"card-title\" id=\"from-actions-bottom-right\">Add Candidate Form</h4>\n          </div>\n          <div class=\"card-body\">\n             <div class=\"px-3\">\n                <form [formGroup]=\"userFrom\" (ngSubmit)=\"submitForm()\"> \n                <div class=\"form-body\">\n                   <h4 class=\"form-section\"><i class=\"ft-info\"></i>Candidate Info</h4>\n                   <div class=\"row\">\n                        <div class=\"form-group col-md-4 offset-1 mb-2\">\n                            <label for=\"location2\">User Role</label>\n                            <select class=\"custom-select form-control border-primary\" id=\"location2\" name=\"location2\">\n                                <option value=\"\">Select Role</option>\n                                <option value=\"Admin\">Admin</option>\n                                <option value=\"Account Manager\">Account Manager</option>\n                                <option value=\"Technical Screener\">Technical Screener</option>\n                            </select>\n                        </div>                        \n                     </div>\n                   <div class=\"row\">\n                      <div class=\"form-group col-md-4 offset-1 mb-2\">\n                         <label for=\"userinput1\">First Name</label>\n                         <input type=\"text\" id=\"\" class=\"form-control border-primary\" placeholder=\"First Name\" name=\"First name\">\n                      </div>\n                      <div class=\"form-group col-md-4 offset-1 mb-2\">\n                         <label for=\"userinput2\">Last Name</label>\n                         <input type=\"text\" id=\"userinput2\" class=\"form-control border-primary\" placeholder=\"Last Name\" name=\"company\">\n                      </div>\n                   </div>\n                   <div class=\"row\">\n                      <div class=\"form-group col-md-4 offset-1 mb-2\">\n                         <label for=\"userinput1\">User Name</label>\n                         <input type=\"text\" id=\"userinput1\" class=\"form-control border-primary\" placeholder=\"User Name\" name=\"name\">\n                      </div>\n                      <div class=\"form-group col-4 offset-1 mb-2\">\n                         <label for=\"userinput5\">Email</label>\n                         <input class=\"form-control border-primary\" type=\"email\" placeholder=\"email\" id=\"userinput5\">\n                      </div>\n                   </div>                   \n                   <div class=\"row\">\n                        <div class=\"form-group col-4 offset-1 mb-2\">\n                           <label>Contact Number</label>\n                           <input class=\"form-control border-primary\" type=\"tel\" placeholder=\"Contact Number\" id=\"userinput7\">\n                        </div>\n                        <div class=\"form-group col-4 offset-1 mb-2\">\n                           <label>Alternate Number</label>\n                           <input class=\"form-control border-primary\" type=\"tel\" placeholder=\"Alternate Contact Number\" id=\"userinput7\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-4 offset-1 mb-2\">\n                            <label>Reporting Manager</label>\n                            <select class=\"custom-select form-control border-primary\" id=\"location2\" name=\"location2\">\n                                <option value=\"\">Select</option>\n                                <option value=\"Azhar Liaquat\">Azhar Liaquat</option>\n                                <option value=\"Sanjib Mallik\">Sanjib Mallik</option>\n                                <option value=\"Nitish Kumat\">Nitish Kumar</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col-4 offset-1 mb-2\">\n                            <label>Reporting Vp of Sales</label>\n                            <select class=\"custom-select form-control border-primary\" id=\"location2\" name=\"location2\">\n                                <option value=\"\">Select</option>\n                                <option value=\"Azhar Liaquat\">Azhar Liaquat</option>\n                                <option value=\"Sanjib Mallik\">Sanjib Mallik</option>\n                                <option value=\"Nitish Kumat\">Nitish Kumar</option>\n                            </select>\n                        </div>\n                    </div>\n                    <h4 class=\"form-section\"><i class=\"ft-mail\"></i> Skills</h4>\n                    <div class=\"row\">\n                        <div class=\"form-group col-2 offset-1 mb-2\">\n                            <label>Skill Type</label>\n                            <select class=\"custom-select form-control border-primary\" id=\"location2\" name=\"location2\">\n                                <option value=\"\">Select</option>\n                                <option value=\"Primary\">Primary</option>\n                                <option value=\"Secondary\">Secondary</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col-3 mb-2\">\n                            <label>Skill</label>\n                            <input class=\"form-control border-primary\" type=\"text\" placeholder=\"Skill Name\" id=\"userinput7\">\n                        </div>\n                        <div class=\"form-group col-2 mb-2\">\n                            <label>Years</label>\n                            <input class=\"form-control border-primary\" type=\"text\" placeholder=\"Years\" id=\"userinput7\">\n                        </div>\n                        <div class=\"form-group col-2 mb-2\">\n                            <label>Months</label>\n                            <input class=\"form-control border-primary\" type=\"text\" placeholder=\"Months\" id=\"userinput7\">\n                        </div>\n                    </div>\n                    <h4 class=\"form-section\"><i class=\"ft-mail\"></i> Address</h4>\n                    <div class=\"row\">\n                        <div class=\"form-group col-md-4 offset-1 mb-2\">\n                            <label for=\"userinput1\">Address Line 1</label>\n                            <input type=\"text\" id=\"userinput1\" class=\"form-control border-primary\" placeholder=\"Door No, Apartment\" name=\"name\">\n                        </div>\n                      <div class=\"form-group col-md-4 offset-1 mb-2\">\n                         <label for=\"userinput2\">Address Line 2</label>\n                         <input type=\"text\" id=\"userinput2\" class=\"form-control border-primary\" placeholder=\"Street, Area\" name=\"company\">\n                      </div>\n                   </div>\n                   <div class=\"row\">\n                    <div class=\"form-group col-md-4 offset-1 mb-2\">\n                       <label for=\"userinput1\">Zip Code</label>\n                       <input type=\"text\" id=\"userinput1\" class=\"form-control border-primary\" placeholder=\"Zip Code\" name=\"name\">\n                    </div>\n                    <div class=\"form-group col-md-4 offset-1 mb-2\">\n                       <label for=\"userinput2\">City</label>\n                       <input type=\"text\" id=\"userinput2\" class=\"form-control border-primary\" placeholder=\"City\" name=\"company\">\n                    </div>\n                 </div>\n                 <div class=\"row\">\n                    <div class=\"form-group col-md-4 offset-1 mb-2\">\n                       <label for=\"userinput1\">State</label>\n                       <input type=\"text\" id=\"userinput1\" class=\"form-control border-primary\" placeholder=\"State\" name=\"name\">\n                    </div>\n                    <div class=\"form-group col-md-4 offset-1 mb-2\">\n                       <label for=\"userinput2\">Country</label>\n                       <input type=\"text\" id=\"userinput2\" class=\"form-control border-primary\" placeholder=\"Country\" name=\"company\">\n                    </div>\n                 </div>\n                 <h4 class=\"form-section\"><i class=\"ft-mail\"></i> Upload</h4>\n                 <div class=\"row\">\n                        <div class=\"form-group col-md-4 offset-1 mb-2\">\n                            <label for=\"location2\">Upload Profile</label>\n                            <input type=\"file\" class=\"form-control-file\" id=\"basicInputFile\">\n                        </div>                        \n                     </div>\n                </div>\n                <div class=\"form-actions center\">\n                        <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\">\n                            <i class=\"ft-x\"></i> Cancel\n                        </button>\n                        <button type=\"button\" class=\"btn btn-raised btn-primary\">\n                            <i class=\"fa fa-check-square-o\"></i> Save\n                        </button>\n                </div>\n                </form>\n                \n             </div>\n          </div>\n       </div>\n    </div>\n </div>"

/***/ }),

/***/ "./src/app/candidates/candidate-create/createCandidate.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/candidates/candidate-create/createCandidate.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCandidateComponent", function() { return CreateCandidateComponent; });
/* harmony import */ var _candidates_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../candidates.service */ "./src/app/candidates/candidates.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/toastr/toastr.service */ "./src/app/shared/toastr/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateCandidateComponent = /** @class */ (function () {
    function CreateCandidateComponent(router, route, toastr, candidateService) {
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.candidateService = candidateService;
    }
    CreateCandidateComponent.prototype.ngOnInit = function () {
        this.userFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'emailId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])
        });
    };
    CreateCandidateComponent.prototype.gotoOtherPage = function () {
        this.router.navigate(['/user/users']);
    };
    CreateCandidateComponent.prototype.submitForm = function () {
        this.candidateService.addNewUser(this.userFrom.value);
        this.router.navigate(['/user/users']);
        this.toastr.typeSuccess();
    };
    CreateCandidateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-candidate',
            template: __webpack_require__(/*! ./create-candidate.component.html */ "./src/app/candidates/candidate-create/create-candidate.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_4__["NGXToastrService"], _candidates_service__WEBPACK_IMPORTED_MODULE_0__["CandidatesService"]])
    ], CreateCandidateComponent);
    return CreateCandidateComponent;
}());



/***/ }),

/***/ "./src/app/candidates/candidate-display/candidate.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/candidates/candidate-display/candidate.component.ts ***!
  \*********************************************************************/
/*! exports provided: CandidatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesComponent", function() { return CandidatesComponent; });
/* harmony import */ var _candidates_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../candidates.service */ "./src/app/candidates/candidates.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CandidatesComponent = /** @class */ (function () {
    function CandidatesComponent(candidatesService, router) {
        var _this = this;
        this.candidatesService = candidatesService;
        this.router = router;
        this.settings = {
            actions: false,
            columns: {
                candidateId: {
                    title: 'ID',
                    filter: true,
                    width: '10%'
                },
                fullName: {
                    title: 'Full Name',
                    filter: true,
                },
                cellPhoneNumber: {
                    title: 'Contact Number',
                    filter: true,
                },
                emailId: {
                    title: 'Email',
                    filter: true,
                },
                subVendorName: {
                    title: 'Sub Vendor',
                    filter: true,
                }
            },
            attr: {
                class: "table table-responsive"
            },
            edit: {
                editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
            },
            delete: {
                deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
            }
        };
        this.candidatesService.getAllUsers()
            .subscribe(function (res) {
            _this.source = res;
            _this.users = res;
        });
    }
    CandidatesComponent.prototype.ngOnInit = function () {
    };
    CandidatesComponent.prototype.createNewUser = function () {
    };
    CandidatesComponent.prototype.redirectToCreateCandidate = function () {
        this.router.navigate(['/candidate/create-candidate']);
    };
    CandidatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidates',
            template: __webpack_require__(/*! ./candidates.component.html */ "./src/app/candidates/candidate-display/candidates.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_candidates_service__WEBPACK_IMPORTED_MODULE_0__["CandidatesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CandidatesComponent);
    return CandidatesComponent;
}());



/***/ }),

/***/ "./src/app/candidates/candidate-display/candidates.component.html":
/*!************************************************************************!*\
  !*** ./src/app/candidates/candidate-display/candidates.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"simple\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\" style=\"padding-bottom: 0;\">\n                        <h4 class=\"card-title\">Candidates\n                        <button class=\"btn btn-raised btn-primary\" style=\"float: right;\"\n                        (click)=\"redirectToCreateCandidate()\">Add Candidate</button>\n                      </h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"card-block\">\n                            <ng2-smart-table [settings]=\"settings\" [source]=\"source\" ></ng2-smart-table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </section>\n      "

/***/ }),

/***/ "./src/app/candidates/candidates-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/candidates/candidates-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CandidatesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesRoutingModule", function() { return CandidatesRoutingModule; });
/* harmony import */ var _candidate_create_createCandidate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candidate-create/createCandidate.component */ "./src/app/candidates/candidate-create/createCandidate.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _candidate_display_candidate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candidate-display/candidate.component */ "./src/app/candidates/candidate-display/candidate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        children: [
            {
                path: 'candidates',
                component: _candidate_display_candidate_component__WEBPACK_IMPORTED_MODULE_3__["CandidatesComponent"],
                data: {
                    title: 'All Candidate'
                }
            },
            {
                path: 'create-candidate',
                component: _candidate_create_createCandidate_component__WEBPACK_IMPORTED_MODULE_0__["CreateCandidateComponent"],
                data: {
                    title: 'Create Candidate'
                }
            }
        ]
    }
];
var CandidatesRoutingModule = /** @class */ (function () {
    function CandidatesRoutingModule() {
    }
    CandidatesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CandidatesRoutingModule);
    return CandidatesRoutingModule;
}());



/***/ }),

/***/ "./src/app/candidates/candidates.module.ts":
/*!*************************************************!*\
  !*** ./src/app/candidates/candidates.module.ts ***!
  \*************************************************/
/*! exports provided: CandidatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesModule", function() { return CandidatesModule; });
/* harmony import */ var _candidate_display_candidate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candidate-display/candidate.component */ "./src/app/candidates/candidate-display/candidate.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _candidates_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candidates-routing.module */ "./src/app/candidates/candidates-routing.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _candidate_create_createCandidate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./candidate-create/createCandidate.component */ "./src/app/candidates/candidate-create/createCandidate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CandidatesModule = /** @class */ (function () {
    function CandidatesModule() {
    }
    CandidatesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _candidates_routing_module__WEBPACK_IMPORTED_MODULE_3__["CandidatesRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: [
                _candidate_display_candidate_component__WEBPACK_IMPORTED_MODULE_0__["CandidatesComponent"],
                _candidate_create_createCandidate_component__WEBPACK_IMPORTED_MODULE_6__["CreateCandidateComponent"]
            ]
        })
    ], CandidatesModule);
    return CandidatesModule;
}());



/***/ }),

/***/ "./src/app/candidates/candidates.service.ts":
/*!**************************************************!*\
  !*** ./src/app/candidates/candidates.service.ts ***!
  \**************************************************/
/*! exports provided: CandidatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesService", function() { return CandidatesService; });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CandidatesService = /** @class */ (function () {
    function CandidatesService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "accept": "application/json"
            })
        };
    }
    ;
    CandidatesService.prototype.getAllUsers = function () {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_0__["HttpURIs"].baseDomain + _app_constants__WEBPACK_IMPORTED_MODULE_0__["HttpURIs"].baseApi + 'candidates', {
            'withCredentials': true,
            headers: this.httpOptions.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var obj = res_1[_i];
                obj.fullName = obj.firstName + ' ' + obj.lastName;
            }
            console.log(res);
            return res;
        }));
    };
    CandidatesService.prototype.getDemoUsers = function () {
        return true;
    };
    CandidatesService.prototype.addNewUser = function (user) {
        return true;
    };
    CandidatesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CandidatesService);
    return CandidatesService;
}());



/***/ })

}]);
//# sourceMappingURL=candidates-candidates-module.js.map