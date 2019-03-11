(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/users/user-create/create-user.component.html":
/*!**************************************************************!*\
  !*** ./src/app/users/user-create/create-user.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\n    <div class=\"col-sm-12\">\n       <div class=\"content-header\">Create User</div>\n    </div>\n </div> -->\n <!-- <button class=\"btn btn-warn\" (click)=\"gotoOtherPage()\">Users</button> -->\n <!-- <form [formGroup]=\"userFrom\" (ngSubmit)=\"submitForm()\">\n <div class=\"row\">\n    <div class=\"col-sm-12\">\n       <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n             <h3 class=\"panel-title\">User Details</h3>\n          </div>\n          <div class=\"panel-body\">\n             <div class=\"form-group\">\n                <label class=\"col-sm-3 control-label\">First Name<span class=\"mandatory\">&nbsp;*</span></label>\n                <div class=\"col-sm-5\">\n                   <input type=\"text\" \n                      class=\"form-control\"    \n                      placeholder=\"First Name\" \n                      maxlength=\"64\"\n                      required=\"true\"\n                      formControlName=\"firstName\">\n                </div>\n             </div>\n             <div class=\"form-group-separator\"></div>\n             <div class=\"form-group\">\n                <label class=\"col-sm-3 control-label\">LastName<span class=\"mandatory\">&nbsp;*</span></label>\n                <div class=\"col-sm-5\">\n                   <input type=\"text\" \n                      class=\"form-control\"    \n                      placeholder=\"Last Name\" \n                      maxlength=\"64\"\n                      required=\"true\"\n                      formControlName=\"lastName\">\n                </div>\n             </div>\n             <div class=\"form-group-separator\"></div>\n             <div class=\"form-group\">\n                <label class=\"col-sm-3 control-label\">EmailId<span class=\"mandatory\">&nbsp;*</span></label>\n                <div class=\"col-sm-5\">\n                   <input type=\"text\" \n                      class=\"form-control\"    \n                      placeholder=\"Email\" \n                      maxlength=\"64\"\n                      required=\"true\"\n                      formControlName=\"emailId\">\n                </div>\n             </div>\n             <div class=\"form-group-separator\"></div>\n          </div>\n       </div>\n    </div>\n </div>\n <div class=\"row\">\n    <div class=\"col-sm-12\">\n       <div class=\"panel panel-default\">\n          <div class=\"panel-body\" style=\"text-align: center;\">\n             <input class=\"btn btn-info btn-icon\" type=\"submit\" value=\"Submit\"/>\n             <input type=\"button\" class=\"btn btn-warning btn-icon\" value=\"Reset\">\n          </div>\n       </div>\n    </div>\n </div>\n </form> -->\n <div class=\"row\">\n    <div class=\"col-md-12\">\n       <div class=\"card\">\n          <div class=\"card-header\">\n             <h4 class=\"card-title\" id=\"from-actions-bottom-right\">Create User Form</h4>\n          </div>\n          <div class=\"card-body\">\n             <div class=\"px-3\">\n                <form [formGroup]=\"userFrom\" (ngSubmit)=\"submitForm()\"> \n                <div class=\"form-body\">\n                   <h4 class=\"form-section\"><i class=\"ft-info\"></i>User Info</h4>\n                   <div class=\"row\">\n                        <div class=\"form-group col-md-3 offset-1 mb-2\">\n                            <label for=\"location2\">User Role</label>\n                            <select class=\"custom-select form-control form-control-sm\" id=\"location2\" name=\"location2\">\n                                <option value=\"\">Select Role</option>\n                                <option value=\"Admin\">Admin</option>\n                                <option value=\"Account Manager\">Account Manager</option>\n                                <option value=\"Technical Screener\">Technical Screener</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col-3 mb-2\">\n                                <label>Reporting Manager</label>\n                                <select class=\"custom-select form-control form-control-sm\" id=\"location2\" name=\"location2\">\n                                    <option value=\"\">Select</option>\n                                    <option value=\"Azhar Liaquat\">Azhar Liaquat</option>\n                                    <option value=\"Sanjib Mallik\">Sanjib Mallik</option>\n                                    <option value=\"Nitish Kumat\">Nitish Kumar</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-3 mb-2\">\n                                <label>Reporting Vp of Sales</label>\n                                <select class=\"custom-select form-control form-control-sm\" id=\"location2\" name=\"location2\">\n                                    <option value=\"\">Select</option>\n                                    <option value=\"Azhar Liaquat\">Azhar Liaquat</option>\n                                    <option value=\"Sanjib Mallik\">Sanjib Mallik</option>\n                                    <option value=\"Nitish Kumat\">Nitish Kumar</option>\n                                </select>\n                            </div>                        \n                     </div>\n                   <div class=\"row\">\n                      <div class=\"form-group col-md-3 offset-1 mb-2\">\n                         <label for=\"userinput1\">First Name</label>\n                         <input type=\"text\" id=\"\" class=\"form-control form-control-sm\" placeholder=\"First Name\" name=\"First name\">\n                      </div>\n                      <div class=\"form-group col-md-3 mb-2\">\n                         <label for=\"userinput2\">Last Name</label>\n                         <input type=\"text\" id=\"userinput2\" class=\"form-control form-control-sm\" placeholder=\"Last Name\" name=\"lastName\">\n                      </div>\n                      <div class=\"form-group col-md-3 mb-2\">\n                            <label for=\"userinput1\">User Name</label>\n                            <input type=\"text\" id=\"userinput1\" class=\"form-control form-control-sm\" placeholder=\"User Name\" name=\"userName\">\n                         </div>\n                   </div>\n                   <div class=\"row\">\n                      <div class=\"form-group col-3 offset-1 mb-2\">\n                         <label for=\"userinput5\">Email</label>\n                         <input class=\"form-control form-control-sm\" type=\"email\" placeholder=\"email\" id=\"userinput5\">\n                      </div>                   \n                        <div class=\"form-group col-3 mb-2\">\n                           <label>Contact Number</label>\n                           <input class=\"form-control form-control-sm\" type=\"tel\" placeholder=\"Contact Number\" id=\"userinput7\">\n                        </div>\n                        <div class=\"form-group col-3 mb-2\">\n                           <label>Alternate Number</label>\n                           <input class=\"form-control form-control-sm\" type=\"tel\" placeholder=\"Alternate Contact Number\" id=\"userinput7\">\n                        </div>\n                    </div>\n                    \n                    <h4 class=\"form-section\"><i class=\"ft-mail\"></i> Skills</h4>\n                    <div class=\"row\">\n                        <div class=\"form-group col-2 offset-1 mb-2\">\n                            <label>Skill Type</label>\n                            <select class=\"custom-select form-control form-control-sm\" id=\"location2\" name=\"location2\">\n                                <option value=\"\">Select</option>\n                                <option value=\"Primary\">Primary</option>\n                                <option value=\"Secondary\">Secondary</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col-3 mb-2\">\n                            <label>Skill</label>\n                            <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"Skill Name\" id=\"userinput7\">\n                        </div>\n                        <div class=\"form-group col-2 mb-2\">\n                            <label>Years</label>\n                            <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"Years\" id=\"userinput7\">\n                        </div>\n                        <div class=\"form-group col-2 mb-2\">\n                            <label>Months</label>\n                            <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"Months\" id=\"userinput7\">\n                        </div>\n                    </div>\n                    <h4 class=\"form-section\"><i class=\"ft-mail\"></i> Address</h4>\n                    <div class=\"row\">\n                        <div class=\"form-group col-md-3 offset-1 mb-2\">\n                            <label for=\"userinput1\">Address Line 1</label>\n                            <input type=\"text\" id=\"userinput1\" class=\"form-control form-control-sm\" placeholder=\"Door No, Apartment\" name=\"name\">\n                        </div>\n                      <div class=\"form-group col-md-3 mb-2\">\n                         <label for=\"userinput2\">Address Line 2</label>\n                         <input type=\"text\" id=\"userinput2\" class=\"form-control form-control-sm\" placeholder=\"Street, Area\" name=\"company\">\n                      </div>\n                      <div class=\"form-group col-md-3 mb-2\">\n                            <label for=\"userinput2\">City</label>\n                            <input type=\"text\" id=\"userinput2\" class=\"form-control form-control-sm\" placeholder=\"City\" name=\"company\">\n                         </div>\n                   </div>\n                   <div class=\"row\">\n                    <div class=\"form-group col-md-3 offset-1 mb-2\">\n                       <label for=\"userinput1\">Zip Code</label>\n                       <input type=\"text\" id=\"userinput1\" class=\"form-control form-control-sm\" placeholder=\"Zip Code\" name=\"name\">\n                    </div>\n                    \n                    <div class=\"form-group col-md-3 mb-2\">\n                       <label for=\"userinput1\">State</label>\n                       <input type=\"text\" id=\"userinput1\" class=\"form-control form-control-sm\" placeholder=\"State\" name=\"name\">\n                    </div>\n                    <div class=\"form-group col-md-3 mb-2\">\n                       <label for=\"userinput2\">Country</label>\n                       <input type=\"text\" id=\"userinput2\" class=\"form-control form-control-sm\" placeholder=\"Country\" name=\"company\">\n                    </div>\n                 </div>\n                 <h4 class=\"form-section\"><i class=\"ft-mail\"></i> Upload</h4>\n                 <div class=\"row\">\n                        <div class=\"form-group col-md-4 offset-1 mb-2\">\n                            <label for=\"location2\">Upload Profile</label>\n                            <input type=\"file\" class=\"form-control-file\" id=\"basicInputFile\">\n                        </div>                        \n                     </div>\n                </div>\n                <div class=\"form-actions center\">\n                        <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\">\n                            <i class=\"ft-x\"></i> Cancel\n                        </button>\n                        <button type=\"button\" class=\"btn btn-raised btn-primary\">\n                            <i class=\"fa fa-check-square-o\"></i> Save\n                        </button>\n                </div>\n                </form>\n                \n             </div>\n          </div>\n       </div>\n    </div>\n </div>"

/***/ }),

/***/ "./src/app/users/user-create/createUser.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/users/user-create/createUser.component.ts ***!
  \***********************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
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





var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(router, route, toastr, userService) {
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.userService = userService;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        this.userFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'emailId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])
        });
    };
    CreateUserComponent.prototype.gotoOtherPage = function () {
        this.router.navigate(['/user/users']);
    };
    CreateUserComponent.prototype.submitForm = function () {
        this.userService.addNewUser(this.userFrom.value);
        this.router.navigate(['/user/users']);
        this.toastr.typeSuccess();
    };
    CreateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/users/user-create/create-user.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_4__["NGXToastrService"], _users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/users/user-display/users.component.html":
/*!*********************************************************!*\
  !*** ./src/app/users/user-display/users.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"simple\">\n  <div class=\"row\">\n      <div class=\"col-sm-12\">\n          <div class=\"card\">\n              <div class=\"card-header\" style=\"padding-bottom: 0;\">\n                  <h4 class=\"card-title\">Users\n                  <button class=\"btn btn-raised btn-primary\" style=\"float: right;\"\n                  (click)=\"redirectToCreateUser()\">Create User</button>\n                </h4>\n              </div>\n              <div class=\"card-body\">\n                  <div class=\"card-block\">\n                      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" ></ng2-smart-table>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/users/user-display/users.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/users/user-display/users.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/user-display/users.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/users/user-display/users.component.ts ***!
  \*******************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService, router, route) {
        this.usersService = usersService;
        this.router = router;
        this.route = route;
        this.settings = {
            actions: true,
            columns: {
                id: {
                    title: 'ID',
                    filter: true,
                    width: '10%'
                },
                firstName: {
                    title: 'First Name',
                    filter: true,
                },
                lastName: {
                    title: 'Last Name',
                    filter: true,
                },
                userName: {
                    title: 'User Name',
                    filter: true,
                },
                emailId: {
                    title: 'Email',
                    filter: true,
                },
                role: {
                    title: 'Role',
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
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            console.log(data);
            _this.source = data.userList;
            //this.users = data.userList;
        });
    };
    UsersComponent.prototype.createNewUser = function () {
        this.redirectToCreateUser();
    };
    UsersComponent.prototype.redirectToCreateUser = function () {
        this.router.navigate(['/user/create-user']);
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/user-display/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/user-display/users.component.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/users/user-resolver.service.ts":
/*!************************************************!*\
  !*** ./src/app/users/user-resolver.service.ts ***!
  \************************************************/
/*! exports provided: UserDetailsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsResolverService", function() { return UserDetailsResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/users/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailsResolverService = /** @class */ (function () {
    function UserDetailsResolverService(_userService) {
        this._userService = _userService;
    }
    UserDetailsResolverService.prototype.resolve = function (route, state) {
        return this._userService.getAllUsers()
            .map(function (data) {
            if (data) {
                return data.userList;
            }
            else {
                return null;
            }
        });
    };
    UserDetailsResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], UserDetailsResolverService);
    return UserDetailsResolverService;
}());



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _user_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-resolver.service */ "./src/app/users/user-resolver.service.ts");
/* harmony import */ var _user_create_createUser_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-create/createUser.component */ "./src/app/users/user-create/createUser.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_display_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-display/users.component */ "./src/app/users/user-display/users.component.ts");
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
                path: 'users',
                component: _user_display_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
                resolve: {
                    userList: _user_resolver_service__WEBPACK_IMPORTED_MODULE_0__["UserDetailsResolverService"]
                }
            },
            {
                path: 'create-user',
                component: _user_create_createUser_component__WEBPACK_IMPORTED_MODULE_1__["CreateUserComponent"],
            }
        ]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _user_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-resolver.service */ "./src/app/users/user-resolver.service.ts");
/* harmony import */ var _user_display_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-display/users.component */ "./src/app/users/user-display/users.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_create_createUser_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-create/createUser.component */ "./src/app/users/user-create/createUser.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsersRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [
                _user_display_users_component__WEBPACK_IMPORTED_MODULE_1__["UsersComponent"],
                _user_create_createUser_component__WEBPACK_IMPORTED_MODULE_7__["CreateUserComponent"]
            ],
            providers: [
                _user_resolver_service__WEBPACK_IMPORTED_MODULE_0__["UserDetailsResolverService"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/users/users.service.ts":
/*!****************************************!*\
  !*** ./src/app/users/users.service.ts ***!
  \****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "accept": "application/json"
            })
        };
    }
    UsersService.prototype.getAllUsers = function () {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["HttpURIs"].baseDomain + _app_constants__WEBPACK_IMPORTED_MODULE_3__["HttpURIs"].users_json)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res;
        }));
    };
    UsersService.prototype.addNewUser = function (user) {
        return true;
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map