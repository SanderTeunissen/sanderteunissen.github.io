(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\n\n<!-- <main class=\"main-content\" [@routerAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n</main> -->\n\n<main class=\"main-content\">\n  <router-outlet></router-outlet>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/code-deco/code-deco.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/code-deco/code-deco.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCodeDecoCodeDecoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-deco\">\n  <span class=\"open-bracket\">&#60;</span>\n  <span class=\"dot\">.</span>\n  <span class=\"slash\">/</span>\n  <span class=\"closed-bracket\">&#62;</span>\n  <span class=\"lower\">_</span>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/date-badge/date-badge.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/date-badge/date-badge.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDateBadgeDateBadgeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"date-badge\">\n  <span class=\"icon\">\n    <i class=\"far fa-calendar\"></i>\n  </span>\n  <div class=\"content\">\n      <span class=\"description\">{{description}}</span>\n      <span class=\"date\">{{date}}</span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/intro.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/intro.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIntroIntroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\n  <h1 class=\"intro-text\">\n    H&#233;,<br />\n    Ik ben <span class=\"name\">Sander</span>,<br />\n    web developer\n  </h1>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/life-period/life-period.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/life-period/life-period.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLifePeriodLifePeriodComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"life-period\">\n  <div class=\"logo-block\" [style.background-color]=\"logoBackground\">\n    <a\n      class=\"logo\"\n      target=\"_blank\"\n      [href]=\"url\"\n      [ngStyle]=\"{'background-image':'url(' + path + ')'}\"\n    ></a>\n  </div>\n  <div class=\"context\">\n    <h2 class=\"item-title\">{{ title }}</h2>\n    <div class=\"period\">\n      <i class=\"far fa-calendar\"></i>\n      <span>{{ start }} - {{ end }}</span>\n    </div>\n    <p [innerHTML]=\"content\">fdnjiwenfjinf</p>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"app-navigation\">\n    <a class=\"navigation-logo\" routerLink=\"\">\n        <span class=\"s-logo\">S</span>\n        <span class=\"logo-text\">Sander</span>\n    </a>\n\n    <section class=\"navigation\">\n        <a routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/\"><i class=\"fas fa-home\"></i></a>\n        <a routerLinkActive=\"active\" routerLink=\"/school\"><i class=\"fas fa-school\"></i></a>\n        <a routerLinkActive=\"active\" routerLink=\"/work\"><i class=\"fas fa-briefcase\"></i></a>\n        <a routerLinkActive=\"active\" routerLink=\"/tech\"><i class=\"fas fa-code\"></i></a>\n    </section>\n\n    <section class=\"navigation-social\">\n        <a href=\"https://www.facebook.com/sander.teunissen.9\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a>\n        <a href=\"https://twitter.com/sander21021998\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a>\n        <a href=\"https://www.linkedin.com/in/sft-teunissen/\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a>\n        <a href=\"https://github.com/SanderTeunissen\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n    </section>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/organization-badge/organization-badge.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/organization-badge/organization-badge.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsOrganizationBadgeOrganizationBadgeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"organization-badge\">\n  <img [src]=\"imgUrl\" [alt]=\"imgAlt\" class=\"icon\">\n  <div class=\"content\">\n    <span class=\"description\">{{ description }}</span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-title/page-title.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-title/page-title.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPageTitlePageTitleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"page-title\">{{content}}</h1>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section-title/section-title.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/section-title/section-title.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSectionTitleSectionTitleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"section-title\">{{content}}</h2>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tech-list/tech-list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tech-list/tech-list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTechListTechListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section-title [content]=\"category.title\"></section-title>\n<p>{{category.description}}</p>\n<div class=\"tech-list\">\n    <div class=\"row head\">\n        <div class=\"row-item tech\">Techniek</div>\n        <div class=\"row-item experience\">Ervaring</div>\n    </div>\n    <div class=\"row\" *ngFor=\"let tech of techList\">\n        <div class=\"row-item tech\">\n            <div class=\"tech-logo\" [style.backgroundImage]=\"'url('+ tech.logoPath +')'\"></div>\n            <span class=\"tech-name\">{{tech.name}}</span>\n        </div>\n        <div class=\"row-item experience\">\n            <div class=\"bar\" [style.backgroundColor]=\"tech.colorCode\" [style.flex]=\"tech.skillLevel\"></div>\n            <span class=\"percentage\">{{tech.skillLevel}}%</span>\n            <div class=\"fill\" [style.flex]=\"100 - tech.skillLevel\"></div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"home-page\">\n  <intro></intro>\n  <div class=\"front-page-deco\">\n    <code-deco></code-deco>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found-page/not-found-page.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found-page/not-found-page.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNotFoundPageNotFoundPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page padding\">\n    <span class=\"digits-404\">404</span>\n    <h1>De gevraagde pagina kan niet worden gevonden.</h1>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/school-page/school-page.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/school-page/school-page.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSchoolPageSchoolPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page padding\">\n  <page-title content=\"Opleidingen\"></page-title>\n\n  <life-period\n    *ngFor=\"let e of edu$ | async\"\n    [title]=\"e.title\"\n    [url]=\"e.url\"\n    [content]=\"e.content\"\n    [start]=\"e.period.start\"\n    [end]=\"e.period.end\"\n    [logoPath]=\"e.logo.path\"\n    [logoBackground]=\"e.logo.backgroundColor\"\n  ></life-period>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tech-page/tech-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tech-page/tech-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTechPageTechPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page padding\">\n  <page-title content=\"Technologi&#235;n\"></page-title>\n  <div class=\"content\">\n    <p>\n      Als webdeveloper heb ik ervaring met verschillende webtechnieken en\n      frameworks op zowel de front als back-end. Onderstaande lijst biedt een\n      overzicht van de technieken die ik beheers.\n    </p>\n  </div>\n  <ng-container *ngFor=\"let cat of categoryList$ | async \">\n    <tech-list [category]=\"cat\"></tech-list>\n  </ng-container>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/work-page/work-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/work-page/work-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWorkPageWorkPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page padding\">\n  <page-title content=\"Werkervaring\"></page-title>\n\n  <life-period\n    *ngFor=\"let w of work$ | async\"\n    [title]=\"w.title\"\n    [url]=\"w.url\"\n    [content]=\"w.content\"\n    [start]=\"w.period.start\"\n    [end]=\"w.period.end\"\n    [logoPath]=\"w.logo.path\"\n    [logoBackground]=\"w.logo.backgroundColor\"\n  ></life-period>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/animations/router.animation.ts":
  /*!************************************************!*\
    !*** ./src/app/animations/router.animation.ts ***!
    \************************************************/

  /*! exports provided: routerAnimation */

  /***/
  function srcAppAnimationsRouterAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routerAnimation", function () {
      return routerAnimation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    const routerAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("routerAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("* => *", [// style({ position: "relative" }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      left: "50px",
      opacity: 0
    })], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("1s ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      left: "68px",
      opacity: 1
    }))], {
      optional: true
    })])]);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-content {\n  margin-left: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59IiwiLm1haW4tY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./animations/router.animation */
    "./src/app/animations/router.animation.ts");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'Portfolio - Sander Teunissen';
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      animations: [_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["routerAnimation"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _pages_pages_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/pages.module */
    "./src/app/pages/pages.module.ts"); //firebase


    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_10__["PagesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_7__["routes"]), _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: routes */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages */
    "./src/app/pages/index.ts");

    const routes = [{
      path: "school",
      component: _pages__WEBPACK_IMPORTED_MODULE_1__["SchoolPageComponent"]
    }, {
      path: "tech",
      component: _pages__WEBPACK_IMPORTED_MODULE_1__["TechPageComponent"]
    }, {
      path: "work",
      component: _pages__WEBPACK_IMPORTED_MODULE_1__["WorkPageComponent"]
    }, {
      path: "",
      component: _pages__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"],
      pathMatch: "full"
    }, {
      path: '404',
      component: _pages__WEBPACK_IMPORTED_MODULE_1__["NotFoundPageComponent"]
    }, {
      path: '**',
      redirectTo: '/404'
    }];
    /***/
  },

  /***/
  "./src/app/components/code-deco/code-deco.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/code-deco/code-deco.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCodeDecoCodeDecoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-deco {\n  font-size: 200px;\n}\n.page-deco .open-bracket,\n.page-deco .closed-bracket,\n.page-deco .dot,\n.page-deco .slash {\n  color: var(--font-color);\n}\n.page-deco .lower {\n  color: var(--primary-color);\n  -webkit-animation: blink 2s infinite;\n          animation: blink 2s infinite;\n}\n@-webkit-keyframes blink {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  51% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes blink {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  51% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9jb2RlLWRlY28vY29kZS1kZWNvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvZGUtZGVjby9jb2RlLWRlY28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGO0FEQ0U7Ozs7RUFJRSx3QkFBQTtBQ0NKO0FERUU7RUFDRSwyQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNBSjtBREdFO0VBQ0U7SUFDRSxVQUFBO0VDREo7RURHRTtJQUNFLFVBQUE7RUNESjtFREdFO0lBQ0UsVUFBQTtFQ0RKO0VER0U7SUFDRSxVQUFBO0VDREo7QUFDRjtBRFhFO0VBQ0U7SUFDRSxVQUFBO0VDREo7RURHRTtJQUNFLFVBQUE7RUNESjtFREdFO0lBQ0UsVUFBQTtFQ0RKO0VER0U7SUFDRSxVQUFBO0VDREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29kZS1kZWNvL2NvZGUtZGVjby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWRlY28ge1xuICBmb250LXNpemU6IDIwMHB4O1xuXG4gIC5vcGVuLWJyYWNrZXQsXG4gIC5jbG9zZWQtYnJhY2tldCxcbiAgLmRvdCxcbiAgLnNsYXNoIHtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIH1cblxuICAubG93ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBhbmltYXRpb246IGJsaW5rIDJzIGluZmluaXRlO1xuICB9XG5cbiAgQGtleWZyYW1lcyBibGluayB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUxJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG4iLCIucGFnZS1kZWNvIHtcbiAgZm9udC1zaXplOiAyMDBweDtcbn1cbi5wYWdlLWRlY28gLm9wZW4tYnJhY2tldCxcbi5wYWdlLWRlY28gLmNsb3NlZC1icmFja2V0LFxuLnBhZ2UtZGVjbyAuZG90LFxuLnBhZ2UtZGVjbyAuc2xhc2gge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG4ucGFnZS1kZWNvIC5sb3dlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYW5pbWF0aW9uOiBibGluayAycyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTElIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/code-deco/code-deco.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/code-deco/code-deco.component.ts ***!
    \*************************************************************/

  /*! exports provided: CodeDecoComponent */

  /***/
  function srcAppComponentsCodeDecoCodeDecoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeDecoComponent", function () {
      return CodeDecoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CodeDecoComponent = class CodeDecoComponent {
      constructor() {}

      ngOnInit() {}

    };
    CodeDecoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'code-deco',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./code-deco.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/code-deco/code-deco.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./code-deco.component.scss */
      "./src/app/components/code-deco/code-deco.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CodeDecoComponent);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! . */
    "./src/app/components/index.ts");

    const componentsList = [___WEBPACK_IMPORTED_MODULE_4__["CodeDecoComponent"], ___WEBPACK_IMPORTED_MODULE_4__["DateBadgeComponent"], ___WEBPACK_IMPORTED_MODULE_4__["IntroComponent"], ___WEBPACK_IMPORTED_MODULE_4__["LifePeriodComponent"], ___WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], ___WEBPACK_IMPORTED_MODULE_4__["OrganizationBadgeComponent"], ___WEBPACK_IMPORTED_MODULE_4__["PageTitleComponent"], ___WEBPACK_IMPORTED_MODULE_4__["SectionTitleComponent"], ___WEBPACK_IMPORTED_MODULE_4__["TechListComponent"]];
    let ComponentsModule = class ComponentsModule {};
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [componentsList],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
      exports: [componentsList]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/date-badge/date-badge.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/date-badge/date-badge.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDateBadgeDateBadgeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".date-badge {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 20px;\n  background-color: #222222;\n  color: var(--primary-color);\n}\n@media only screen and (min-width: 701px) {\n  .date-badge {\n    margin-right: 20px;\n    margin-bottom: 5px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .date-badge {\n    margin-top: 15px;\n  }\n}\n@media only screen and (min-width: 701px) {\n  .date-badge .icon {\n    font-size: 40px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .date-badge .icon {\n    font-size: 25px;\n  }\n}\n.date-badge .icon .far {\n  color: var(--primary-color);\n}\n.date-badge .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-left: 30px;\n  margin-right: 10px;\n}\n@media only screen and (min-width: 701px) {\n  .date-badge .content .description {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .date-badge .content .description {\n    font-size: 13px;\n  }\n}\n@media only screen and (min-width: 701px) {\n  .date-badge .content .date {\n    font-size: 20px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .date-badge .content .date {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9kYXRlLWJhZGdlL2RhdGUtYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGF0ZS1iYWRnZS9kYXRlLWJhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUVBLGtCQUFBO0VBVUEseUJBQUE7RUFDQSwyQkFBQTtBQ1RGO0FEQUU7RUFORjtJQU9JLGtCQUFBO0lBQ0Esa0JBQUE7RUNHRjtBQUNGO0FERkU7RUFWRjtJQVdJLGdCQUFBO0VDS0Y7QUFDRjtBRENJO0VBREY7SUFFSSxlQUFBO0VDRUo7QUFDRjtBREFJO0VBTEY7SUFNSSxlQUFBO0VDR0o7QUFDRjtBRERJO0VBQ0UsMkJBQUE7QUNHTjtBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERU07RUFERjtJQUVJLGVBQUE7RUNDTjtBQUNGO0FEQ007RUFMRjtJQU1JLGVBQUE7RUNFTjtBQUNGO0FERU07RUFERjtJQUVJLGVBQUE7RUNDTjtBQUNGO0FEQ007RUFMRjtJQU1JLGVBQUE7RUNFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXRlLWJhZGdlL2RhdGUtYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZS1iYWRnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cbiAgLmljb24ge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuXG4gICAgLmZhciB7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kYXRlIHtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5kYXRlLWJhZGdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XG4gIC5kYXRlLWJhZGdlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5kYXRlLWJhZGdlIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XG4gIC5kYXRlLWJhZGdlIC5pY29uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmRhdGUtYmFkZ2UgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxufVxuLmRhdGUtYmFkZ2UgLmljb24gLmZhciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbi5kYXRlLWJhZGdlIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgLmRhdGUtYmFkZ2UgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmRhdGUtYmFkZ2UgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgLmRhdGUtYmFkZ2UgLmNvbnRlbnQgLmRhdGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuZGF0ZS1iYWRnZSAuY29udGVudCAuZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/date-badge/date-badge.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/date-badge/date-badge.component.ts ***!
    \***************************************************************/

  /*! exports provided: DateBadgeComponent */

  /***/
  function srcAppComponentsDateBadgeDateBadgeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateBadgeComponent", function () {
      return DateBadgeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DateBadgeComponent = class DateBadgeComponent {
      constructor() {
        this.description = "";
        this.date = "";
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('description'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DateBadgeComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('date'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DateBadgeComponent.prototype, "date", void 0);
    DateBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'date-badge',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./date-badge.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/date-badge/date-badge.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./date-badge.component.scss */
      "./src/app/components/date-badge/date-badge.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DateBadgeComponent);
    /***/
  },

  /***/
  "./src/app/components/index.ts":
  /*!*************************************!*\
    !*** ./src/app/components/index.ts ***!
    \*************************************/

  /*! exports provided: CodeDecoComponent, DateBadgeComponent, IntroComponent, LifePeriodComponent, NavigationComponent, OrganizationBadgeComponent, PageTitleComponent, SectionTitleComponent, TechListComponent */

  /***/
  function srcAppComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _code_deco_code_deco_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./code-deco/code-deco.component */
    "./src/app/components/code-deco/code-deco.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CodeDecoComponent", function () {
      return _code_deco_code_deco_component__WEBPACK_IMPORTED_MODULE_1__["CodeDecoComponent"];
    });
    /* harmony import */


    var _date_badge_date_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./date-badge/date-badge.component */
    "./src/app/components/date-badge/date-badge.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DateBadgeComponent", function () {
      return _date_badge_date_badge_component__WEBPACK_IMPORTED_MODULE_2__["DateBadgeComponent"];
    });
    /* harmony import */


    var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./intro/intro.component */
    "./src/app/components/intro/intro.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"];
    });
    /* harmony import */


    var _life_period_life_period_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./life-period/life-period.component */
    "./src/app/components/life-period/life-period.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LifePeriodComponent", function () {
      return _life_period_life_period_component__WEBPACK_IMPORTED_MODULE_4__["LifePeriodComponent"];
    });
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/components/navigation/navigation.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"];
    });
    /* harmony import */


    var _organization_badge_organization_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./organization-badge/organization-badge.component */
    "./src/app/components/organization-badge/organization-badge.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OrganizationBadgeComponent", function () {
      return _organization_badge_organization_badge_component__WEBPACK_IMPORTED_MODULE_6__["OrganizationBadgeComponent"];
    });
    /* harmony import */


    var _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./page-title/page-title.component */
    "./src/app/components/page-title/page-title.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function () {
      return _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__["PageTitleComponent"];
    });
    /* harmony import */


    var _section_title_section_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./section-title/section-title.component */
    "./src/app/components/section-title/section-title.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SectionTitleComponent", function () {
      return _section_title_section_title_component__WEBPACK_IMPORTED_MODULE_8__["SectionTitleComponent"];
    });
    /* harmony import */


    var _tech_list_tech_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tech-list/tech-list.component */
    "./src/app/components/tech-list/tech-list.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TechListComponent", function () {
      return _tech_list_tech_list_component__WEBPACK_IMPORTED_MODULE_9__["TechListComponent"];
    });
    /***/

  },

  /***/
  "./src/app/components/intro/intro.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/intro/intro.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIntroIntroComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".intro-text {\n  color: var(--font-color);\n  margin-left: 30px;\n}\n@media only screen and (min-width: 801px) {\n  .intro-text {\n    font-size: 80px;\n  }\n}\n@media only screen and (min-width: 501px) and (max-width: 800px) {\n  .intro-text {\n    font-size: 60px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .intro-text {\n    font-size: 42px;\n  }\n}\n.intro-text .name {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBSko7SUFLUSxlQUFBO0VDRU47QUFDRjtBREFJO0VBUko7SUFTUSxlQUFBO0VDR047QUFDRjtBRERJO0VBWko7SUFhUSxlQUFBO0VDSU47QUFDRjtBREZJO0VBQ0ksMkJBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm8tdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDFweCkge1xuICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDFweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICB9XG59IiwiLmludHJvLXRleHQge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDFweCkge1xuICAuaW50cm8tdGV4dCB7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMXB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmludHJvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaW50cm8tdGV4dCB7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICB9XG59XG4uaW50cm8tdGV4dCAubmFtZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/intro/intro.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/intro/intro.component.ts ***!
    \*****************************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppComponentsIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let IntroComponent = class IntroComponent {
      constructor() {}

      ngOnInit() {}

    };
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'intro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/intro.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intro.component.scss */
      "./src/app/components/intro/intro.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], IntroComponent);
    /***/
  },

  /***/
  "./src/app/components/life-period/life-period.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/life-period/life-period.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLifePeriodLifePeriodComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".life-period {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  margin-bottom: 50px;\n  background-color: var(--item-background);\n}\n@media only screen and (max-width: 900px) {\n  .life-period {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n@media only screen and (min-width: 901px) {\n  .life-period {\n    min-height: 300px;\n  }\n}\n.life-period .logo-block {\n  box-sizing: border-box;\n}\n@media only screen and (max-width: 900px) {\n  .life-period .logo-block {\n    height: 100px;\n    padding: 15px;\n  }\n}\n@media only screen and (min-width: 901px) {\n  .life-period .logo-block {\n    width: 300px;\n    padding: 30px;\n  }\n}\n.life-period .logo-block .logo {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.life-period .context {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 15px;\n  box-sizing: border-box;\n}\n.life-period .context .item-title {\n  margin: 0;\n  color: var(--secondary-color);\n}\n@media only screen and (min-width: 701px) {\n  .life-period .context .item-title {\n    font-size: 34px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .life-period .context .item-title {\n    font-size: 27px;\n  }\n}\n.life-period .context .period {\n  padding-bottom: 15px;\n}\n.life-period .context .period .far {\n  color: var(--primary-color);\n}\n.life-period .context .period span {\n  margin-left: 15px;\n}\n.life-period .context p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9saWZlLXBlcmlvZC9saWZlLXBlcmlvZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9saWZlLXBlcmlvZC9saWZlLXBlcmlvZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDBCQUFBO1VBQUEsb0JBQUE7RUFVQSxtQkFBQTtFQUVBLHdDQUFBO0FDVEo7QURESTtFQUpKO0lBS1EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDSU47QUFDRjtBREZJO0VBUko7SUFTUSxpQkFBQTtFQ0tOO0FBQ0Y7QURDSTtFQVdJLHNCQUFBO0FDVFI7QUREUTtFQURKO0lBRVEsYUFBQTtJQUNBLGFBQUE7RUNJVjtBQUNGO0FERlE7RUFOSjtJQU9RLFlBQUE7SUFDQSxhQUFBO0VDS1Y7QUFDRjtBRERRO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDR1o7QURDSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDBCQUFBO1VBQUEsb0JBQUE7RUFFQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBUjtBREVRO0VBU0ksU0FBQTtFQUNBLDZCQUFBO0FDUlo7QUREWTtFQURKO0lBRVEsZUFBQTtFQ0lkO0FBQ0Y7QURGWTtFQUxKO0lBTVEsZUFBQTtFQ0tkO0FBQ0Y7QURDUTtFQUNJLG9CQUFBO0FDQ1o7QURDWTtFQUNJLDJCQUFBO0FDQ2hCO0FERVk7RUFDSSxpQkFBQTtBQ0FoQjtBRElRO0VBQ0ksU0FBQTtBQ0ZaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saWZlLXBlcmlvZC9saWZlLXBlcmlvZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWZlLXBlcmlvZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMXB4KSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIH1cblxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWJhY2tncm91bmQpO1xuXG4gICAgLmxvZ28tYmxvY2sge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAxcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRleHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgIC5pdGVtLXRpdGxlIHtcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBlcmlvZCB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAgICAgICAgICAgLmZhciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5saWZlLXBlcmlvZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWJhY2tncm91bmQpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAubGlmZS1wZXJpb2Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAxcHgpIHtcbiAgLmxpZmUtcGVyaW9kIHtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuLmxpZmUtcGVyaW9kIC5sb2dvLWJsb2NrIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmxpZmUtcGVyaW9kIC5sb2dvLWJsb2NrIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAxcHgpIHtcbiAgLmxpZmUtcGVyaW9kIC5sb2dvLWJsb2NrIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxufVxuLmxpZmUtcGVyaW9kIC5sb2dvLWJsb2NrIC5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5saWZlLXBlcmlvZCAuY29udGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmxpZmUtcGVyaW9kIC5jb250ZXh0IC5pdGVtLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgLmxpZmUtcGVyaW9kIC5jb250ZXh0IC5pdGVtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmxpZmUtcGVyaW9kIC5jb250ZXh0IC5pdGVtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gIH1cbn1cbi5saWZlLXBlcmlvZCAuY29udGV4dCAucGVyaW9kIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ubGlmZS1wZXJpb2QgLmNvbnRleHQgLnBlcmlvZCAuZmFyIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmxpZmUtcGVyaW9kIC5jb250ZXh0IC5wZXJpb2Qgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLmxpZmUtcGVyaW9kIC5jb250ZXh0IHAge1xuICBtYXJnaW46IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/life-period/life-period.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/life-period/life-period.component.ts ***!
    \*****************************************************************/

  /*! exports provided: LifePeriodComponent */

  /***/
  function srcAppComponentsLifePeriodLifePeriodComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LifePeriodComponent", function () {
      return LifePeriodComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let LifePeriodComponent = class LifePeriodComponent {
      constructor() {
        this.title = "";
        this.url = "";
        this.content = "";
        this.start = "";
        this.end = "";
        this.path = "";
        this.logoBackground = "";
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LifePeriodComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('url'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LifePeriodComponent.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('content'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LifePeriodComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('start'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LifePeriodComponent.prototype, "start", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('end'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LifePeriodComponent.prototype, "end", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('logoPath'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LifePeriodComponent.prototype, "path", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('logoBackground'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LifePeriodComponent.prototype, "logoBackground", void 0);
    LifePeriodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'life-period',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./life-period.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/life-period/life-period.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./life-period.component.scss */
      "./src/app/components/life-period/life-period.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LifePeriodComponent);
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-navigation {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 60px;\n  z-index: 10;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: var(--menu-background);\n  color: var(--font-color);\n}\n.app-navigation .navigation-logo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  color: var(--font-color);\n  background-color: var(--logo-background);\n  padding: 5px 0 10px 0;\n  cursor: pointer;\n  text-decoration: none;\n}\n.app-navigation .navigation-logo .s-logo {\n  font-size: 55px;\n  text-align: center;\n  color: var(--primary-color);\n}\n.app-navigation .navigation-logo .logo-text {\n  text-align: center;\n  margin-top: -7px;\n  font-size: 13px;\n}\n.app-navigation .navigation {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\n.app-navigation .navigation a {\n  padding: 5px 0;\n  margin: 10px 0;\n  text-align: center;\n  font-size: 25px;\n}\n.app-navigation .navigation a.active .fas, .app-navigation .navigation a.active .fab {\n  color: var(--primary-color) !important;\n}\n.app-navigation .navigation a .fas, .app-navigation .navigation a .fab {\n  color: var(--menu-icon-color) !important;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n}\n.app-navigation .navigation a:hover .fas, .app-navigation .navigation a:hover .fab {\n  color: var(--primary-color) !important;\n}\n.app-navigation .navigation-social {\n  padding: 20px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\n.app-navigation .navigation-social a {\n  padding: 5px 0;\n  margin: 5px 0;\n  text-align: center;\n  font-size: 18px;\n}\n.app-navigation .navigation-social a .fas, .app-navigation .navigation-social a .fab {\n  color: var(--menu-icon-color) !important;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n}\n.app-navigation .navigation-social a:hover .fas, .app-navigation .navigation-social a:hover .fab {\n  color: var(--primary-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUVBLHdDQUFBO0VBQ0Esd0JBQUE7QUNGSjtBRElJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMEJBQUE7VUFBQSxvQkFBQTtFQUVBLHdCQUFBO0VBQ0Esd0NBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0pSO0FETVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0paO0FET1E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0xaO0FEU0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSwwQkFBQTtVQUFBLG9CQUFBO0FDUFI7QURTUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FDUlo7QURXZ0I7RUFDSSxzQ0FBQTtBQ1RwQjtBRGFZO0VBQ0ksd0NBQUE7RUFDQSw4QkFBQTtFQUFBLHNCQUFBO0FDWGhCO0FEZWdCO0VBQ0ksc0NBQUE7QUNicEI7QURtQkk7RUFDSSxlQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMEJBQUE7VUFBQSxvQkFBQTtBQ2xCUjtBRG9CUTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FDbkJaO0FEcUJZO0VBQ0ksd0NBQUE7RUFDQSw4QkFBQTtFQUFBLHNCQUFBO0FDbkJoQjtBRHVCZ0I7RUFDSSxzQ0FBQTtBQ3JCcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbmF2aWdhdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogNjBweDtcblxuICAgIHotaW5kZXg6IDEwO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuXG4gICAgLm5hdmlnYXRpb24tbG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9nby1iYWNrZ3JvdW5kKTtcblxuICAgICAgICBwYWRkaW5nOiA1cHggMCAxMHB4IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgIC5zLWxvZ28ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28tdGV4dCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm5hdmlnYXRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG5cbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIC5mYXMsIC5mYWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mYXMsIC5mYWIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tZW51LWljb24tY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgLmZhcywgLmZhYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZpZ2F0aW9uLXNvY2lhbCB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcblxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuXG4gICAgICAgICAgICAuZmFzLCAuZmFiIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbWVudS1pY29uLWNvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIC5mYXMsIC5mYWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmFwcC1uYXZpZ2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDYwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbi5hcHAtbmF2aWdhdGlvbiAubmF2aWdhdGlvbi1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9nby1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogNXB4IDAgMTBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5hcHAtbmF2aWdhdGlvbiAubmF2aWdhdGlvbi1sb2dvIC5zLWxvZ28ge1xuICBmb250LXNpemU6IDU1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWxvZ28gLmxvZ28tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uYXBwLW5hdmlnYXRpb24gLm5hdmlnYXRpb24gYSB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uYXBwLW5hdmlnYXRpb24gLm5hdmlnYXRpb24gYS5hY3RpdmUgLmZhcywgLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uIGEuYWN0aXZlIC5mYWIge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcbn1cbi5hcHAtbmF2aWdhdGlvbiAubmF2aWdhdGlvbiBhIC5mYXMsIC5hcHAtbmF2aWdhdGlvbiAubmF2aWdhdGlvbiBhIC5mYWIge1xuICBjb2xvcjogdmFyKC0tbWVudS1pY29uLWNvbG9yKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uIGE6aG92ZXIgLmZhcywgLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uIGE6aG92ZXIgLmZhYiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xufVxuLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLXNvY2lhbCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uYXBwLW5hdmlnYXRpb24gLm5hdmlnYXRpb24tc29jaWFsIGEge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uYXBwLW5hdmlnYXRpb24gLm5hdmlnYXRpb24tc29jaWFsIGEgLmZhcywgLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLXNvY2lhbCBhIC5mYWIge1xuICBjb2xvcjogdmFyKC0tbWVudS1pY29uLWNvbG9yKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuLmFwcC1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLXNvY2lhbCBhOmhvdmVyIC5mYXMsIC5hcHAtbmF2aWdhdGlvbiAubmF2aWdhdGlvbi1zb2NpYWwgYTpob3ZlciAuZmFiIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NavigationComponent = class NavigationComponent {
      constructor() {}

      ngOnInit() {}

    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/components/navigation/navigation.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/components/organization-badge/organization-badge.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/organization-badge/organization-badge.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsOrganizationBadgeOrganizationBadgeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".organization-badge {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 20px;\n  background-color: #222222;\n  color: var(--primary-color);\n}\n@media only screen and (min-width: 701px) {\n  .organization-badge {\n    margin-right: 20px;\n    margin-bottom: 5px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .organization-badge {\n    margin-top: 15px;\n  }\n}\n@media only screen and (min-width: 701px) {\n  .organization-badge .icon {\n    height: 45px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .organization-badge .icon {\n    height: 27px;\n  }\n}\n.organization-badge .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-left: 30px;\n  margin-right: 10px;\n}\n@media only screen and (min-width: 701px) {\n  .organization-badge .content .description {\n    font-size: 20px;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .organization-badge .content .description {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9vcmdhbml6YXRpb24tYmFkZ2Uvb3JnYW5pemF0aW9uLWJhZGdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29yZ2FuaXphdGlvbi1iYWRnZS9vcmdhbml6YXRpb24tYmFkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBRUEsa0JBQUE7RUFVQSx5QkFBQTtFQUNBLDJCQUFBO0FDVEY7QURBRTtFQU5GO0lBT0ksa0JBQUE7SUFDQSxrQkFBQTtFQ0dGO0FBQ0Y7QURGRTtFQVZGO0lBV0ksZ0JBQUE7RUNLRjtBQUNGO0FEQ0k7RUFERjtJQUVJLFlBQUE7RUNFSjtBQUNGO0FEQUk7RUFMRjtJQU1JLFlBQUE7RUNHSjtBQUNGO0FEQUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7QURDTTtFQURGO0lBRUksZUFBQTtFQ0VOO0FBQ0Y7QURBTTtFQUxGO0lBTUksZUFBQTtFQ0dOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yZ2FuaXphdGlvbi1iYWRnZS9vcmdhbml6YXRpb24tYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JnYW5pemF0aW9uLWJhZGdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXG4gIC5pY29uIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgaGVpZ2h0OiAyN3B4O1xuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5vcmdhbml6YXRpb24tYmFkZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgLm9yZ2FuaXphdGlvbi1iYWRnZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAub3JnYW5pemF0aW9uLWJhZGdlIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XG4gIC5vcmdhbml6YXRpb24tYmFkZ2UgLmljb24ge1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAub3JnYW5pemF0aW9uLWJhZGdlIC5pY29uIHtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gIH1cbn1cbi5vcmdhbml6YXRpb24tYmFkZ2UgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xuICAub3JnYW5pemF0aW9uLWJhZGdlIC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5vcmdhbml6YXRpb24tYmFkZ2UgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/organization-badge/organization-badge.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/organization-badge/organization-badge.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: OrganizationBadgeComponent */

  /***/
  function srcAppComponentsOrganizationBadgeOrganizationBadgeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationBadgeComponent", function () {
      return OrganizationBadgeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let OrganizationBadgeComponent = class OrganizationBadgeComponent {
      constructor() {
        this.description = "";
        this.imgUrl = "";
        this.imgAlt = "";
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('description'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], OrganizationBadgeComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('imgUrl'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], OrganizationBadgeComponent.prototype, "imgUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('imgAlt'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], OrganizationBadgeComponent.prototype, "imgAlt", void 0);
    OrganizationBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'organization-badge',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./organization-badge.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/organization-badge/organization-badge.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./organization-badge.component.scss */
      "./src/app/components/organization-badge/organization-badge.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OrganizationBadgeComponent);
    /***/
  },

  /***/
  "./src/app/components/page-title/page-title.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/page-title/page-title.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPageTitlePageTitleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-title {\n  font-size: 50px;\n  color: var(--primary-color);\n  margin: 200px 0 30px 0;\n}\n@media only screen and (max-height: 300px), (max-width: 700px) {\n  .page-title {\n    font-size: 35px;\n    margin: 30px 0 15px 0;\n  }\n}\n@media only screen and (min-height: 301px) and (max-height: 500px) and (min-width: 701px) {\n  .page-title {\n    margin: 80px 0 20px 0;\n  }\n}\n@media only screen and (min-height: 501px) and (min-width: 701px) {\n  .page-title {\n    margin: 200px 0 30px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlLXRpdGxlL3BhZ2UtdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS10aXRsZS9wYWdlLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENJO0VBTEo7SUFNUSxlQUFBO0lBQ0EscUJBQUE7RUNFTjtBQUNGO0FEQUk7RUFWSjtJQVdRLHFCQUFBO0VDR047QUFDRjtBRERJO0VBZEo7SUFlUSxzQkFBQTtFQ0lOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2UtdGl0bGUvcGFnZS10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIG1hcmdpbjogMjAwcHggMCAzMHB4IDA7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAzMDBweCksIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDAgMTVweCAwO1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDMwMXB4KSBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgICAgICAgbWFyZ2luOiA4MHB4IDAgMjBweCAwO1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDUwMXB4KSBhbmQgKG1pbi13aWR0aDogNzAxcHgpICB7XG4gICAgICAgIG1hcmdpbjogMjAwcHggMCAzMHB4IDA7XG4gICAgfVxufSIsIi5wYWdlLXRpdGxlIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIG1hcmdpbjogMjAwcHggMCAzMHB4IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAzMDBweCksIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luOiAzMHB4IDAgMTVweCAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAzMDFweCkgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkgYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XG4gIC5wYWdlLXRpdGxlIHtcbiAgICBtYXJnaW46IDgwcHggMCAyMHB4IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDUwMXB4KSBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgLnBhZ2UtdGl0bGUge1xuICAgIG1hcmdpbjogMjAwcHggMCAzMHB4IDA7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/page-title/page-title.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/page-title/page-title.component.ts ***!
    \***************************************************************/

  /*! exports provided: PageTitleComponent */

  /***/
  function srcAppComponentsPageTitlePageTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function () {
      return PageTitleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PageTitleComponent = class PageTitleComponent {
      constructor() {
        this.content = "";
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('content'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PageTitleComponent.prototype, "content", void 0);
    PageTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-title',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-title.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-title/page-title.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-title.component.scss */
      "./src/app/components/page-title/page-title.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PageTitleComponent);
    /***/
  },

  /***/
  "./src/app/components/section-title/section-title.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/section-title/section-title.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSectionTitleSectionTitleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-title {\n  font-size: 35px;\n  color: var(--secondary-color);\n  margin: 80px 0 10px 0;\n}\n@media only screen and (max-height: 300px), (max-width: 700px) {\n  .section-title {\n    font-size: 23px;\n    margin: 40px 0 5px 0;\n  }\n}\n@media only screen and (min-height: 301px) and (max-height: 500px) and (min-width: 701px) {\n  .section-title {\n    margin: 50px 0 5px 0;\n  }\n}\n@media only screen and (min-height: 501px) and (min-width: 701px) {\n  .section-title {\n    margin: 70px 0 15px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9uLXRpdGxlL3NlY3Rpb24tdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbi10aXRsZS9zZWN0aW9uLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUNDSjtBRENJO0VBTEo7SUFNUSxlQUFBO0lBQ0Esb0JBQUE7RUNFTjtBQUNGO0FEQUk7RUFWSjtJQVdRLG9CQUFBO0VDR047QUFDRjtBRERJO0VBZEo7SUFlUSxxQkFBQTtFQ0lOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlY3Rpb24tdGl0bGUvc2VjdGlvbi10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgbWFyZ2luOiA4MHB4IDAgMTBweCAwO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMzAwcHgpLCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgIG1hcmdpbjogNDBweCAwIDVweCAwO1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDMwMXB4KSBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgICAgICAgbWFyZ2luOiA1MHB4IDAgNXB4IDA7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNTAxcHgpIGFuZCAobWluLXdpZHRoOiA3MDFweCkgIHtcbiAgICAgICAgbWFyZ2luOiA3MHB4IDAgMTVweCAwO1xuICAgIH1cbn0iLCIuc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIG1hcmdpbjogODBweCAwIDEwcHggMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDMwMHB4KSwgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBtYXJnaW46IDQwcHggMCA1cHggMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMzAxcHgpIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xuICAuc2VjdGlvbi10aXRsZSB7XG4gICAgbWFyZ2luOiA1MHB4IDAgNXB4IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDUwMXB4KSBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIG1hcmdpbjogNzBweCAwIDE1cHggMDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/section-title/section-title.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/section-title/section-title.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SectionTitleComponent */

  /***/
  function srcAppComponentsSectionTitleSectionTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionTitleComponent", function () {
      return SectionTitleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SectionTitleComponent = class SectionTitleComponent {
      constructor() {
        this.content = "";
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('content'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SectionTitleComponent.prototype, "content", void 0);
    SectionTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'section-title',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./section-title.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section-title/section-title.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./section-title.component.scss */
      "./src/app/components/section-title/section-title.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SectionTitleComponent);
    /***/
  },

  /***/
  "./src/app/components/tech-list/tech-list.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/tech-list/tech-list.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTechListTechListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tech-list {\n  margin: 20px 0 50px;\n}\n.tech-list .row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #222222;\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 600px) {\n  .tech-list .row {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: stretch;\n            align-items: stretch;\n  }\n}\n.tech-list .row .row-item {\n  padding: 15px;\n}\n.tech-list .row .row-item.tech {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 250px;\n  box-sizing: border-box;\n}\n.tech-list .row .row-item.tech .tech-logo {\n  width: 40px;\n  height: 40px;\n  margin: 5px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center center;\n}\n.tech-list .row .row-item.tech .tech-name {\n  margin-left: 15px;\n}\n.tech-list .row .row-item.experience {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.tech-list .row .row-item.experience .percentage {\n  font-weight: 200;\n  margin: 0 10px;\n}\n.tech-list .row .row-item.experience .bar {\n  height: 10px;\n}\n@media only screen and (max-width: 600px) {\n  .tech-list .row.head {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy90ZWNoLWxpc3QvdGVjaC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RlY2gtbGlzdC90ZWNoLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBT0EseUJBQUE7RUFFQSxrQkFBQTtBQ05SO0FERFE7RUFKSjtJQUtRLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLDBCQUFBO1lBQUEsb0JBQUE7RUNJVjtBQUNGO0FERVE7RUFDSSxhQUFBO0FDQVo7QURFWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFFQSxZQUFBO0VBQ0Esc0JBQUE7QUNEaEI7QURHZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7QUNGcEI7QURLZ0I7RUFDSSxpQkFBQTtBQ0hwQjtBRE9ZO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0xoQjtBRE9nQjtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0xwQjtBRFFnQjtFQUNJLFlBQUE7QUNOcEI7QURZWTtFQURKO0lBRVEsYUFBQTtFQ1RkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlY2gtbGlzdC90ZWNoLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVjaC1saXN0IHtcbiAgICBtYXJnaW46IDIwcHggMCA1MHB4O1xuXG4gICAgLnJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcblxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICAgICAgLnJvdy1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgICAgICAgICYudGVjaCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgXG4gICAgICAgICAgICAgICAgLnRlY2gtbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRlY2gtbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5leHBlcmllbmNlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIC5wZXJjZW50YWdlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJhciB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmhlYWQge1xuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnRlY2gtbGlzdCB7XG4gIG1hcmdpbjogMjBweCAwIDUwcHg7XG59XG4udGVjaC1saXN0IC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50ZWNoLWxpc3QgLnJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxufVxuLnRlY2gtbGlzdCAucm93IC5yb3ctaXRlbSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4udGVjaC1saXN0IC5yb3cgLnJvdy1pdGVtLnRlY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4udGVjaC1saXN0IC5yb3cgLnJvdy1pdGVtLnRlY2ggLnRlY2gtbG9nbyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4udGVjaC1saXN0IC5yb3cgLnJvdy1pdGVtLnRlY2ggLnRlY2gtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLnRlY2gtbGlzdCAucm93IC5yb3ctaXRlbS5leHBlcmllbmNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50ZWNoLWxpc3QgLnJvdyAucm93LWl0ZW0uZXhwZXJpZW5jZSAucGVyY2VudGFnZSB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLnRlY2gtbGlzdCAucm93IC5yb3ctaXRlbS5leHBlcmllbmNlIC5iYXIge1xuICBoZWlnaHQ6IDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50ZWNoLWxpc3QgLnJvdy5oZWFkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/tech-list/tech-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/tech-list/tech-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: TechListComponent */

  /***/
  function srcAppComponentsTechListTechListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechListComponent", function () {
      return TechListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_tech_tech_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/tech/tech.service */
    "./src/app/services/tech/tech.service.ts");

    let TechListComponent = class TechListComponent {
      constructor(techService) {
        this.techService = techService;
      }

      ngOnInit() {
        this.techService.tech$.subscribe(list => {
          this.techList = list.filter(x => x.categoryKey == this.category.key).sort((a, b) => a.order > b.order ? 1 : b.order > a.order ? -1 : 0);
        });
      }

    };

    TechListComponent.ctorParameters = () => [{
      type: src_app_services_tech_tech_service__WEBPACK_IMPORTED_MODULE_2__["TechService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TechListComponent.prototype, "category", void 0);
    TechListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tech-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tech-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tech-list/tech-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tech-list.component.scss */
      "./src/app/components/tech-list/tech-list.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tech_tech_service__WEBPACK_IMPORTED_MODULE_2__["TechService"]])], TechListComponent);
    /***/
  },

  /***/
  "./src/app/pages/home-page/home-page.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/home-page/home-page.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomePageHomePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".home-page {\n  height: calc(100vh - 16px);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.home-page .front-page-deco {\n  position: fixed;\n  right: 70px;\n  bottom: 70px;\n}\n@media only screen and (max-height: 750px), (max-width: 700px) {\n  .home-page .front-page-deco {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FGO0FERUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjtBREVJO0VBTEY7SUFNSSxhQUFBO0VDQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1wYWdlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTZweCk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLmZyb250LXBhZ2UtZGVjbyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiA3MHB4O1xuICAgIGJvdHRvbTogNzBweDtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSwgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iLCIuaG9tZS1wYWdlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTZweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhvbWUtcGFnZSAuZnJvbnQtcGFnZS1kZWNvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogNzBweDtcbiAgYm90dG9tOiA3MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzUwcHgpLCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuaG9tZS1wYWdlIC5mcm9udC1wYWdlLWRlY28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/home-page/home-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/home-page/home-page.component.ts ***!
    \********************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppPagesHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let HomePageComponent = class HomePageComponent {
      constructor() {}

      ngOnInit() {}

    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.scss */
      "./src/app/pages/home-page/home-page.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/pages/index.ts":
  /*!********************************!*\
    !*** ./src/app/pages/index.ts ***!
    \********************************/

  /*! exports provided: HomePageComponent, NotFoundPageComponent, SchoolPageComponent, WorkPageComponent, TechPageComponent */

  /***/
  function srcAppPagesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/pages/home-page/home-page.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"];
    });
    /* harmony import */


    var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./not-found-page/not-found-page.component */
    "./src/app/pages/not-found-page/not-found-page.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function () {
      return _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundPageComponent"];
    });
    /* harmony import */


    var _school_page_school_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./school-page/school-page.component */
    "./src/app/pages/school-page/school-page.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SchoolPageComponent", function () {
      return _school_page_school_page_component__WEBPACK_IMPORTED_MODULE_3__["SchoolPageComponent"];
    });
    /* harmony import */


    var _work_page_work_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./work-page/work-page.component */
    "./src/app/pages/work-page/work-page.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WorkPageComponent", function () {
      return _work_page_work_page_component__WEBPACK_IMPORTED_MODULE_4__["WorkPageComponent"];
    });
    /* harmony import */


    var _tech_page_tech_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tech-page/tech-page.component */
    "./src/app/pages/tech-page/tech-page.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TechPageComponent", function () {
      return _tech_page_tech_page_component__WEBPACK_IMPORTED_MODULE_5__["TechPageComponent"];
    });
    /***/

  },

  /***/
  "./src/app/pages/not-found-page/not-found-page.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/not-found-page/not-found-page.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNotFoundPageNotFoundPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".digits-404 {\n  display: block;\n  font-size: 140px;\n  color: var(--primary-color);\n  margin-top: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9hcHAvcGFnZXMvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC1wYWdlL25vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlnaXRzLTQwNCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNDBweDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgbWFyZ2luLXRvcDogNzBweFxufSIsIi5kaWdpdHMtNDA0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTQwcHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/not-found-page/not-found-page.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/not-found-page/not-found-page.component.ts ***!
    \******************************************************************/

  /*! exports provided: NotFoundPageComponent */

  /***/
  function srcAppPagesNotFoundPageNotFoundPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function () {
      return NotFoundPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NotFoundPageComponent = class NotFoundPageComponent {
      constructor() {}

      ngOnInit() {}

    };
    NotFoundPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found-page/not-found-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found-page.component.scss */
      "./src/app/pages/not-found-page/not-found-page.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NotFoundPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/pages.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.module.ts ***!
    \***************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! . */
    "./src/app/pages/index.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    let PagesModule = class PagesModule {};
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [___WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], ___WEBPACK_IMPORTED_MODULE_4__["SchoolPageComponent"], ___WEBPACK_IMPORTED_MODULE_4__["WorkPageComponent"], ___WEBPACK_IMPORTED_MODULE_4__["TechPageComponent"], ___WEBPACK_IMPORTED_MODULE_4__["NotFoundPageComponent"]],
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
    })], PagesModule);
    /***/
  },

  /***/
  "./src/app/pages/school-page/school-page.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/school-page/school-page.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSchoolPageSchoolPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjaG9vbC1wYWdlL3NjaG9vbC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/school-page/school-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/school-page/school-page.component.ts ***!
    \************************************************************/

  /*! exports provided: SchoolPageComponent */

  /***/
  function srcAppPagesSchoolPageSchoolPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchoolPageComponent", function () {
      return SchoolPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_edu_edu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/edu/edu.service */
    "./src/app/services/edu/edu.service.ts");

    let SchoolPageComponent = class SchoolPageComponent {
      constructor(eduService) {
        this.eduService = eduService;
      }

      ngOnInit() {
        this.edu$ = this.eduService.edu$;
      }

    };

    SchoolPageComponent.ctorParameters = () => [{
      type: src_app_services_edu_edu_service__WEBPACK_IMPORTED_MODULE_2__["EduService"]
    }];

    SchoolPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-school-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./school-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/school-page/school-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./school-page.component.scss */
      "./src/app/pages/school-page/school-page.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_edu_edu_service__WEBPACK_IMPORTED_MODULE_2__["EduService"]])], SchoolPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/tech-page/tech-page.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/tech-page/tech-page.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTechPageTechPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2gtcGFnZS90ZWNoLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tech-page/tech-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/tech-page/tech-page.component.ts ***!
    \********************************************************/

  /*! exports provided: TechPageComponent */

  /***/
  function srcAppPagesTechPageTechPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechPageComponent", function () {
      return TechPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/category/category.service */
    "./src/app/services/category/category.service.ts");
    /* harmony import */


    var src_app_services_tech_tech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/tech/tech.service */
    "./src/app/services/tech/tech.service.ts");

    let TechPageComponent = class TechPageComponent {
      constructor(categoryService, techService) {
        this.categoryService = categoryService;
        this.techService = techService;
      }

      ngOnInit() {
        this.categoryList$ = this.categoryService.categories$;
      }

    };

    TechPageComponent.ctorParameters = () => [{
      type: src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
    }, {
      type: src_app_services_tech_tech_service__WEBPACK_IMPORTED_MODULE_3__["TechService"]
    }];

    TechPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tech-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tech-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tech-page/tech-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tech-page.component.scss */
      "./src/app/pages/tech-page/tech-page.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], src_app_services_tech_tech_service__WEBPACK_IMPORTED_MODULE_3__["TechService"]])], TechPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/work-page/work-page.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/work-page/work-page.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWorkPageWorkPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmstcGFnZS93b3JrLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/work-page/work-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/work-page/work-page.component.ts ***!
    \********************************************************/

  /*! exports provided: WorkPageComponent */

  /***/
  function srcAppPagesWorkPageWorkPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkPageComponent", function () {
      return WorkPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_work_work_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/work/work.service */
    "./src/app/services/work/work.service.ts");

    let WorkPageComponent = class WorkPageComponent {
      constructor(workService) {
        this.workService = workService;
      }

      ngOnInit() {
        this.work$ = this.workService.work$;
      }

    };

    WorkPageComponent.ctorParameters = () => [{
      type: src_app_services_work_work_service__WEBPACK_IMPORTED_MODULE_2__["WorkService"]
    }];

    WorkPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-work-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/work-page/work-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work-page.component.scss */
      "./src/app/pages/work-page/work-page.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_work_work_service__WEBPACK_IMPORTED_MODULE_2__["WorkService"]])], WorkPageComponent);
    /***/
  },

  /***/
  "./src/app/services/category/category.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/category/category.service.ts ***!
    \*******************************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServicesCategoryCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let CategoryService = class CategoryService {
      constructor(firestore) {
        this.firestore = firestore;
      }

      get categories$() {
        return this.firestore.collection("category").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => {
          return payload.map(item => {
            let c = item.payload.doc.data();
            c.key = item.payload.doc.id;
            return c;
          }).sort((a, b) => a.order > b.order ? 1 : b.order > a.order ? -1 : 0);
        }));
      }

    };

    CategoryService.ctorParameters = () => [{
      type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
    }];

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], CategoryService);
    /***/
  },

  /***/
  "./src/app/services/date/date.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/date/date.service.ts ***!
    \***********************************************/

  /*! exports provided: DateService */

  /***/
  function srcAppServicesDateDateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateService", function () {
      return DateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DateService = class DateService {
      constructor() {}

      convertStringDateToNumber(date) {
        const parts = date.split(" ");
        return Number(parts[1]) * 100 + this.monthToNr(parts[0]);
      }

      monthToNr(month) {
        switch (month) {
          case "Januari":
            return 1;

          case "Februari":
            return 2;

          case "Maart":
            return 3;

          case "April":
            return 4;

          case "Mei":
            return 5;

          case "Juni":
            return 6;

          case "Juli":
            return 7;

          case "Augustus":
            return 8;

          case "September":
            return 9;

          case "Oktober":
            return 10;

          case "November":
            return 11;

          case "December":
            return 12;
        }
      }

    };
    DateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DateService);
    /***/
  },

  /***/
  "./src/app/services/edu/edu.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/edu/edu.service.ts ***!
    \*********************************************/

  /*! exports provided: EduService */

  /***/
  function srcAppServicesEduEduServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EduService", function () {
      return EduService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _date_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../date/date.service */
    "./src/app/services/date/date.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let EduService = class EduService {
      constructor(firestore, dateService) {
        this.firestore = firestore;
        this.dateService = dateService;
      }

      get edu$() {
        return this.firestore.collection("education").valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(payload => payload.sort((a, b) => this.toCode(b.period.start) > this.toCode(a.period.end) ? 1 : this.toCode(a.period.start) > this.toCode(b.period.end) ? -1 : 0)));
      }

      toCode(date) {
        return this.dateService.convertStringDateToNumber(date);
      }

    };

    EduService.ctorParameters = () => [{
      type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
    }, {
      type: _date_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]
    }];

    EduService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _date_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]])], EduService);
    /***/
  },

  /***/
  "./src/app/services/tech/tech.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/tech/tech.service.ts ***!
    \***********************************************/

  /*! exports provided: TechService */

  /***/
  function srcAppServicesTechTechServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechService", function () {
      return TechService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let TechService = class TechService {
      constructor(firestore) {
        this.firestore = firestore;
      }

      get tech$() {
        return this.firestore.collection("tech").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => {
          return payload.map(item => {
            let t = item.payload.doc.data();
            t.key = item.payload.doc.id;
            return t;
          });
        }));
      }

    };

    TechService.ctorParameters = () => [{
      type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
    }];

    TechService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], TechService);
    /***/
  },

  /***/
  "./src/app/services/work/work.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/work/work.service.ts ***!
    \***********************************************/

  /*! exports provided: WorkService */

  /***/
  function srcAppServicesWorkWorkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkService", function () {
      return WorkService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _date_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../date/date.service */
    "./src/app/services/date/date.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let WorkService = class WorkService {
      constructor(firestore, dateService) {
        this.firestore = firestore;
        this.dateService = dateService;
      }

      get work$() {
        return this.firestore.collection("work_experience").valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(payload => payload.sort((a, b) => this.toCode(b.period.start) > this.toCode(a.period.end) ? 1 : this.toCode(a.period.start) > this.toCode(b.period.end) ? -1 : 0)));
      }

      toCode(date) {
        return this.dateService.convertStringDateToNumber(date);
      }

    };

    WorkService.ctorParameters = () => [{
      type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
    }, {
      type: _date_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]
    }];

    WorkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _date_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]])], WorkService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyBCONkbrc7pX7F5Sn_-ewVMU_uEX9_IgC4",
        authDomain: "portfolio-sander.firebaseapp.com",
        databaseURL: "https://portfolio-sander.firebaseio.com",
        projectId: "portfolio-sander",
        storageBucket: "portfolio-sander.appspot.com",
        messagingSenderId: "125204121145",
        appId: "1:125204121145:web:724d736b133965619aefe8",
        measurementId: "G-0FQWWZD7EY"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/sander/Projects/Portfolio/Angular/Portfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map