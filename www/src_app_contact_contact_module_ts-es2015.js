(self["webpackChunkTheCoolNerd"] = self["webpackChunkTheCoolNerd"] || []).push([["src_app_contact_contact_module_ts"],{

/***/ 87848:
/*!*****************************************************!*\
  !*** ./src/app/constants/formValidationMessages.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTACT": function() { return /* binding */ CONTACT; }
/* harmony export */ });
const CONTACT = {
    first_name: {
        required: 'First name is required'
    },
    last_name: {
        required: 'Last name is required'
    },
    email: {
        required: 'email is required',
        email: 'email is invalid'
    },
    summary: {
        required: 'summary is required'
    }
};


/***/ }),

/***/ 68778:
/*!***************************************************!*\
  !*** ./src/app/contact/contact-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageRoutingModule": function() { return /* binding */ ContactPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.page */ 36827);




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_0__.ContactPage
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ 25486:
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageModule": function() { return /* binding */ ContactPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-routing.module */ 68778);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page */ 36827);







let ContactPageModule = class ContactPageModule {
};
ContactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactPageRoutingModule
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_1__.ContactPage]
    })
], ContactPageModule);



/***/ }),

/***/ 36827:
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": function() { return /* binding */ ContactPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact.page.html */ 99993);
/* harmony import */ var _contact_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page.scss */ 74396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _constants_formValidationMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/formValidationMessages */ 87848);
/* harmony import */ var _providers_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/helper.service */ 46723);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/functions */ 19486);








let ContactPage = class ContactPage {
    constructor(helperService, functions) {
        this.helperService = helperService;
        this.functions = functions;
        this.inquiryType = '';
        this.formError = {
            first_name: '',
            last_name: '',
            company: '',
            email: '',
            summary: '',
        };
        this.validationMessage = _constants_formValidationMessages__WEBPACK_IMPORTED_MODULE_2__.CONTACT;
        this.mail_res = '';
        this.is_loading = false;
    }
    ngOnInit() {
        this.createFormControl();
        this.createForm();
    }
    onSubmit() {
        this.is_loading = true;
        console.log('submit');
        const fname = this.contactForm.controls["first_name"].value;
        const lname = this.contactForm.controls["last_name"].value;
        const contact_email = this.contactForm.controls["email"].value;
        const org = this.contactForm.controls["company"].value;
        const description = this.contactForm.controls["summary"].value;
        const email_info = {
            "body": "first name: " + fname + "\nlast name: " + lname +
                "\nemail: " + contact_email + "\ncompany: " + org +
                "\ndescription: " + description
        };
        this.functions.httpsCallable("sendMail")(email_info)
            .subscribe(res => {
            console.log(res);
            this.mail_res = res;
            this.is_loading = false;
        });
    }
    createFormControl() {
        this.first_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            this.last_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
            this.company = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            this.summary = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
    }
    createForm() {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            company: this.company,
            summary: this.summary
        });
        this.contactForm.valueChanges.subscribe(data => this.onFormValueChanged(data));
    }
    onFormValueChanged(data) {
        this.formError = this.helperService.prepareValidationMessage(this.contactForm, this.validationMessage, this.formError);
    }
};
ContactPage.ctorParameters = () => [
    { type: _providers_helper_service__WEBPACK_IMPORTED_MODULE_3__.HelperService },
    { type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__.AngularFireFunctions }
];
ContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-contact',
        template: _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactPage);



/***/ }),

/***/ 46723:
/*!*********************************************!*\
  !*** ./src/app/providers/helper.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperService": function() { return /* binding */ HelperService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let HelperService = class HelperService {
    constructor() { }
    prepareValidationMessage(form, validationMessage, formFields) {
        for (const field in formFields) {
            formFields[field] = '';
            const control = form.controls[field];
            if (control && control.invalid) {
                const messageObj = validationMessage[field];
                for (const key in control.errors) {
                    formFields[field] = formFields[field] + messageObj[key] + ' ';
                }
            }
        }
        return formFields;
    }
};
HelperService.ctorParameters = () => [];
HelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], HelperService);



/***/ }),

/***/ 74396:
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 99993:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-left\">\n      Contact Me\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<app-alert *ngIf=\"mail_res\" [message]=\"mail_res\" (close)=\"onClose()\"></app-alert>\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">\n              Contact Form\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <form [formGroup]=\"contactForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n              <ion-item>\n                <ion-label position=\"floating\">First Name</ion-label>\n                <ion-input type=\"text\" formControlName=\"first_name\"></ion-input>\n              </ion-item>\n              <div *ngIf=\"first_name.invalid && (first_name.dirty || first_name.touched)\" class=\"error-message\">{{formError.first_name}}</div>\n              <ion-item>\n                <ion-label position=\"floating\">Last Name</ion-label>\n                <ion-input type=\"text\" formControlName=\"last_name\"></ion-input>\n              </ion-item>\n              <div *ngIf=\"last_name.invalid && (last_name.dirty || last_name.touched)\" class=\"error-message\">{{formError.last_name}}</div>\n              <ion-item>\n                <ion-label position=\"floating\">Email Address</ion-label>\n                <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n              </ion-item>\n              <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"error-message\">{{formError.email}}</div>\n              <ion-item>\n                <ion-label position=\"floating\">Company</ion-label>\n                <ion-input formControlName=\"company\"></ion-input>\n                <!--<ion-label position=\"floating\">Inquiry Type</ion-label>\n                <ion-select>\n                  <ion-select-option value=\"bioinformatics\">Full Time Employment</ion-select-option>\n                  <ion-select-option value=\"bioinformatics\">Contracting</ion-select-option>\n                  <ion-select-option value=\"bioinformatics\">Contracting</ion-select-option>\n                </ion-select>-->\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Summary</ion-label>\n                <ion-textarea formControlName=\"summary\"></ion-textarea>\n              </ion-item>\n              <div *ngIf=\"summary.invalid && (summary.dirty || summary.touched)\" class=\"error-message\">{{formError.summary}}</div>\n              <ion-button color=\"success\" expand=\"block\" class=\"ion-margin-top\" [disabled]=\"contactForm.invalid\" (click)=\"onSubmit()\">Submit\n                <ion-spinner *ngIf=\"is_loading\"></ion-spinner>\n              </ion-button>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_contact_contact_module_ts-es2015.js.map