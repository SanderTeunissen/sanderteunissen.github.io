(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --font-color: #ffffff;\n  --primary-color: #d9120e;\n  --secondary-color: #888888;\n  --menu-icon-color: #4d4d4e;\n  --background: #1d1d1d;\n  --menu-background: #181818;\n  --logo-background: #000000;\n  --item-background: #222222;\n}\n* {\n  font-family: \"Rubik\", sans-serif;\n  font-weight: bold;\n  color: var(--font-color);\n}\nhtml {\n  overflow-x: hidden;\n  overflow-y: hidden;\n  max-width: 100%;\n}\nbody {\n  background-color: var(--background);\n  overflow-x: hidden;\n  overflow-y: hidden;\n  max-width: 100%;\n}\np {\n  font-size: 18px;\n}\n.page {\n  max-width: 1400px;\n}\n.page.padding {\n  box-sizing: border-box;\n}\n@media only screen and (max-width: 700px) {\n  .page.padding {\n    padding: 0 20px 0 10px;\n  }\n}\n@media only screen and (min-width: 701px) {\n  .page.padding {\n    padding: 0 50px;\n  }\n}\n.content {\n  max-width: 700px;\n}\nrouter-outlet ~ * {\n  position: absolute;\n  height: 100%;\n  width: calc(100% - 60px);\n  overflow-y: auto;\n}\n.badge-row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 700px) {\n  .badge-row {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n.footer-space {\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZXIvUHJvamVjdHMvUG9ydGZvbGlvL0FuZ3VsYXIvUG9ydGZvbGlvL3NyYy9zdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFFQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtBQ0RGO0FESUE7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNERjtBRElBO0VBQ0UsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0FDREY7QURJQTtFQUNFLGlCQUFBO0FDREY7QURHRTtFQUNFLHNCQUFBO0FDREo7QURHSTtFQUhGO0lBSUksc0JBQUE7RUNBSjtBQUNGO0FERUk7RUFQRjtJQVFJLGVBQUE7RUNDSjtBQUNGO0FER0E7RUFDRSxnQkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNBRjtBREVFO0VBSkY7SUFLSSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNDRjtBQUNGO0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG46cm9vdCB7XG4gIC0tZm9udC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZDkxMjBlO1xuICAtLXNlY29uZGFyeS1jb2xvcjogIzg4ODg4ODtcbiAgLS1tZW51LWljb24tY29sb3I6ICM0ZDRkNGU7XG5cbiAgLS1iYWNrZ3JvdW5kOiAjMWQxZDFkO1xuICAtLW1lbnUtYmFja2dyb3VuZDogIzE4MTgxODtcbiAgLS1sb2dvLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIC0taXRlbS1iYWNrZ3JvdW5kOiAjMjIyMjIyO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuaHRtbCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnBhZ2Uge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcblxuICAmLnBhZGRpbmcge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICBwYWRkaW5nOiAwIDIwcHggMCAxMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcbiAgICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuXG5yb3V0ZXItb3V0bGV0IH4gKiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5iYWRnZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLmZvb3Rlci1zcGFjZSB7XG4gIGhlaWdodDogNDBweDtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG46cm9vdCB7XG4gIC0tZm9udC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZDkxMjBlO1xuICAtLXNlY29uZGFyeS1jb2xvcjogIzg4ODg4ODtcbiAgLS1tZW51LWljb24tY29sb3I6ICM0ZDRkNGU7XG4gIC0tYmFja2dyb3VuZDogIzFkMWQxZDtcbiAgLS1tZW51LWJhY2tncm91bmQ6ICMxODE4MTg7XG4gIC0tbG9nby1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAtLWl0ZW0tYmFja2dyb3VuZDogIzIyMjIyMjtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbmh0bWwge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wYWdlIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG59XG4ucGFnZS5wYWRkaW5nIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnBhZ2UucGFkZGluZyB7XG4gICAgcGFkZGluZzogMCAyMHB4IDAgMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkge1xuICAucGFnZS5wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gIH1cbn1cblxuLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuXG5yb3V0ZXItb3V0bGV0IH4gKiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5iYWRnZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5iYWRnZS1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLmZvb3Rlci1zcGFjZSB7XG4gIGhlaWdodDogNDBweDtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sander/Projects/Portfolio/Angular/Portfolio/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map