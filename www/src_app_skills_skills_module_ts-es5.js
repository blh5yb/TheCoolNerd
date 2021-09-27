(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkTheCoolNerd"] = self["webpackChunkTheCoolNerd"] || []).push([["src_app_skills_skills_module_ts"], {
    /***/
    60762: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SkillsPageRoutingModule": function SkillsPageRoutingModule() {
          return (
            /* binding */
            _SkillsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _skills_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./skills.page */
      19607);

      var routes = [{
        path: '',
        component: _skills_page__WEBPACK_IMPORTED_MODULE_0__.SkillsPage
      }];

      var _SkillsPageRoutingModule = function SkillsPageRoutingModule() {
        _classCallCheck(this, SkillsPageRoutingModule);
      };

      _SkillsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SkillsPageRoutingModule);
      /***/
    },

    /***/
    5435: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SkillsPageModule": function SkillsPageModule() {
          return (
            /* binding */
            _SkillsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _skills_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./skills-routing.module */
      60762);
      /* harmony import */


      var _skills_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./skills.page */
      19607);

      var _SkillsPageModule = function SkillsPageModule() {
        _classCallCheck(this, SkillsPageModule);
      };

      _SkillsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _skills_routing_module__WEBPACK_IMPORTED_MODULE_0__.SkillsPageRoutingModule],
        declarations: [_skills_page__WEBPACK_IMPORTED_MODULE_1__.SkillsPage]
      })], _SkillsPageModule);
      /***/
    },

    /***/
    19607: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SkillsPage": function SkillsPage() {
          return (
            /* binding */
            _SkillsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_skills_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./skills.page.html */
      87877);
      /* harmony import */


      var _skills_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./skills.page.scss */
      48131);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SkillsPage = /*#__PURE__*/function () {
        function SkillsPage() {
          _classCallCheck(this, SkillsPage);
        }

        _createClass(SkillsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkillsPage;
      }();

      _SkillsPage.ctorParameters = function () {
        return [];
      };

      _SkillsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-skills',
        template: _raw_loader_skills_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_skills_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SkillsPage);
      /***/
    },

    /***/
    48131: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza2lsbHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    87877: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-left\">\n      Technical & Analytical Skills\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col>\n        <ion-title>Bioinformatics Analysis</ion-title>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">\n              RNASeq Analysis\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ul>\n              <li>Differential Expression analysis</li>\n              <li>Pathway Analysis</li>\n            </ul>\n          </ion-card-content>\n          <ion-item-divider></ion-item-divider>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">\n              16S Analysis\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ul>\n              <li>Alpha Diversity</li>\n              <li>Beta Diversity</li>\n              <li>Differential Abundance</li>\n            </ul>\n          </ion-card-content>\n          <ion-item-divider></ion-item-divider>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">\n              Virome Analysis\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ul>\n              <li>Genome Assembly</li>\n              <li>Phylogenetic Tree Creation</li>\n            </ul>\n          </ion-card-content>\n          <ion-item-divider></ion-item-divider>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">\n              Assay Validation Analysis\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ul>\n              <li>Analytical Sensitivity & Specificity</li>\n              <li>Concordance</li>\n              <li>Lower Limit of Detection</li>\n              <li>QC Metrics</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n        <ion-title>Development</ion-title>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">\n               Front-End Web Development\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row class=\"ion-text-center\">\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/angular12.webp\"></ion-img>\n                <ion-text>Angular 12</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/Ionic_Logo.png\"></ion-img>\n                <ion-text>Ionic 4</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/Typescript_logo_2020.png\"></ion-img>\n                <ion-text>Typescript 4</ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-text-center\" style=\"margin-top: 5px;\">\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/bootstrap.png\"></ion-img>\n                <ion-text>Bootstrap 3</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/html5.png\"></ion-img>\n                <ion-text>HTML 5</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/CSS3.png\"></ion-img>\n                <ion-text>CSS</ion-text>\n              </ion-col>\n              <!--<ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/aws-logo.png\"></ion-img>\n                <ion-text>AWS Hosting</ion-text>\n              </ion-col>-->\n            </ion-row>\n          </ion-card-content>\n          <ion-item-divider></ion-item-divider>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">\n              Backend Web Development\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row class=\"ion-text-center\" style=\"margin-top: 5px;\">\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/Python-logo.png\"></ion-img>\n                <ion-text>Python 3</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/django.jpeg\"></ion-img>\n                <ion-text>Django REST</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/postgresql.jpeg\"></ion-img>\n                <ion-text>PostgreSQL</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/aws-logo.png\"></ion-img>\n                <ion-text>MongoDB</ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-text-center\" style=\"margin-top: 5px;\">\n              \n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/node.webp\"></ion-img>\n                <ion-text>Node.js</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/firestore.jpeg\"></ion-img>\n                <ion-text>Firestore DB</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/firebase-functions.png\"></ion-img>\n                <ion-text>Firebase Cloud Functions</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n          <ion-item-divider></ion-item-divider>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">\n              Automation\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row class=\"ion-text-center\" style=\"margin-top: 5px;\">\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/Python-logo.png\"></ion-img>\n                <ion-text>Python 3</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/bash.png\"></ion-img>\n                <ion-text>Bash</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/Perl.png\"></ion-img>\n                <ion-text>Perl</ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-text-center\" style=\"margin-top: 5px;\">\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/docker.jpeg\"></ion-img>\n                <ion-text>Docker</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/cron.png\"></ion-img>\n                <ion-text>Cron Jobs</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/sftp.jpeg\"></ion-img>\n                <ion-text>SFTP</ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-text-center\" style=\"margin-top: 5px;\">\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/jenkins.png\"></ion-img>\n                <ion-text>Jenkins UI</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/postgresql.jpeg\"></ion-img>\n                <ion-text>PostgreSQL</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/mongo.png\"></ion-img>\n                <ion-text>MongoDB</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_skills_skills_module_ts-es5.js.map