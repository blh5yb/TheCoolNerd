(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkTheCoolNerd"] = self["webpackChunkTheCoolNerd"] || []).push([["src_app_projects_projects_module_ts"], {
    /***/
    97591: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectsPageRoutingModule": function ProjectsPageRoutingModule() {
          return (
            /* binding */
            _ProjectsPageRoutingModule
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


      var _projects_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./projects.page */
      39207);

      var routes = [{
        path: '',
        component: _projects_page__WEBPACK_IMPORTED_MODULE_0__.ProjectsPage
      }];

      var _ProjectsPageRoutingModule = function ProjectsPageRoutingModule() {
        _classCallCheck(this, ProjectsPageRoutingModule);
      };

      _ProjectsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProjectsPageRoutingModule);
      /***/
    },

    /***/
    80132: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectsPageModule": function ProjectsPageModule() {
          return (
            /* binding */
            _ProjectsPageModule
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


      var _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./projects-routing.module */
      97591);
      /* harmony import */


      var _projects_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./projects.page */
      39207);

      var _ProjectsPageModule = function ProjectsPageModule() {
        _classCallCheck(this, ProjectsPageModule);
      };

      _ProjectsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectsPageRoutingModule],
        declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_1__.ProjectsPage]
      })], _ProjectsPageModule);
      /***/
    },

    /***/
    39207: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectsPage": function ProjectsPage() {
          return (
            /* binding */
            _ProjectsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_projects_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./projects.page.html */
      44204);
      /* harmony import */


      var _projects_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./projects.page.scss */
      36927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ProjectsPage = /*#__PURE__*/function () {
        function ProjectsPage() {
          _classCallCheck(this, ProjectsPage);
        }

        _createClass(ProjectsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProjectsPage;
      }();

      _ProjectsPage.ctorParameters = function () {
        return [];
      };

      _ProjectsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-projects',
        template: _raw_loader_projects_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_projects_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProjectsPage);
      /***/
    },

    /***/
    36927: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    44204: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-left\">\n      Highlight Projects\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col>\n        <ion-title><a href=\"https://scholar.google.com/scholar?hl=en&as_sdt=0%2C26&q=barry+hykes&btnG=\">Bioinformatics Publications</a></ion-title>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">\n              <a href=\"https://science.sciencemag.org/content/360/6385/204.abstract\">\n                Tuft Cells Promote Norovirus Infection\n              </a>\n               - RNASeq Analysis\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ul>\n              <li>STAR</li>\n              <li>HTSeq-Count</li>\n              <li>GENE-E</li>\n              <li>DESeq2</li>\n              <li>GSEA</li>\n              <li>GG-Plot</li>\n            </ul>\n          </ion-card-content>\n          <ion-item-divider></ion-item-divider>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">\n              <a href=\"https://www.sciencedirect.com/science/article/pii/S0092867420308060\">\n                Intestinal Microbiome Restricts Alphavirus Infection\n              </a>\n               - 16S Analysis\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ul>\n              <li>Dada2</li>\n              <li>Phyloseq</li>\n              <li>GG-Plot</li>\n              <li>Microbiome</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n        <ion-title>Web Development</ion-title>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">\n              <a href=\"https://step-4-cash.web.app/home\">\n                step-4-cash.web.app\n              </a>\n               - contest progressive web app\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row class=\"ion-text-center\">\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/angular12.webp\"></ion-img>\n                <ion-text>Angular 12</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/bootstrap.png\"></ion-img>\n                <ion-text>Bootstrap 3</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/Typescript_logo_2020.png\"></ion-img>\n                <ion-text>Typescript 4</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/node.webp\"></ion-img>\n                <ion-text>Node.js</ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-text-center\" style=\"margin-top: 5px;\">\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/firebase.png\"></ion-img>\n                <ion-text>Firebase</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/Fitbit.png\"></ion-img>\n                <ion-text>Fitbit API</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/stripe.png\"></ion-img>\n                <ion-text>Stripe API</ion-text>\n              </ion-col>\n              <!--<ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/aws-logo.png\"></ion-img>\n                <ion-text>AWS Hosting</ion-text>\n              </ion-col>-->\n            </ion-row>\n          </ion-card-content>\n          <ion-item-divider></ion-item-divider>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">\n              <a href=\"http://thecoolnerd.me\">thecoolnerd.me </a>\n              - this website\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row class=\"ion-text-center\" style=\"margin-top: 5px;\">\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/angular12.webp\"></ion-img>\n                <ion-text>Angular 12</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/bootstrap.png\"></ion-img>\n                <ion-text>Bootstrap 3</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/Typescript_logo_2020.png\"></ion-img>\n                <ion-text>Typescript 4</ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-text-center\" style=\"margin-top: 5px;\">\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/Ionic_Logo.png\"></ion-img>\n                <ion-text>Ionic 4</ion-text>\n              </ion-col>\n              <ion-col>\n                <ion-img class=\"image-center\" style=\"height: 13vh; width: 13vw;\" src=\"../../assets/icon/aws-logo.png\"></ion-img>\n                <ion-text>AWS Hosting</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_projects_projects_module_ts-es5.js.map