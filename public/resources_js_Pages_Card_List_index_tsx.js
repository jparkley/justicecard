(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Card_List_index_tsx"],{

/***/ "./resources/js/Pages/Card/List/index.tsx":
/*!************************************************!*\
  !*** ./resources/js/Pages/Card/List/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var layout_1 = __importDefault(__webpack_require__(/*! ../../../components/common/layout */ "./resources/js/components/common/layout/index.tsx"));

var CardListPage = function CardListPage(_a) {
  var cards = _a.cards;
  return react_1["default"].createElement(layout_1["default"], null, react_1["default"].createElement("div", {
    className: "row"
  }, cards.length > 0 && cards.map(function (card, index) {
    return react_1["default"].createElement("div", {
      className: "col-lg-4 col-md-6 col-sm-12",
      key: index
    }, react_1["default"].createElement("div", {
      className: "card"
    }, react_1["default"].createElement("div", {
      className: "card-body"
    }, react_1["default"].createElement("img", {
      className: "card-img-top img-fluid",
      src: card.img_url,
      alt: ""
    }), react_1["default"].createElement("div", {
      className: "card-block"
    }, react_1["default"].createElement("h4", {
      className: "card-title"
    }, card.title), react_1["default"].createElement("h4", {
      className: "card-title"
    }, card.country), react_1["default"].createElement("p", {
      className: "card-text"
    }, card.subtitle), react_1["default"].createElement("p", {
      className: "card-text"
    }, card.description)))));
  })));
};

exports.default = CardListPage;

/***/ }),

/***/ "./resources/js/components/common/layout/index.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/common/layout/index.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var nav_1 = __importDefault(__webpack_require__(/*! ../../../components/common/nav */ "./resources/js/components/common/nav/index.tsx"));

var Layout = function Layout(_a) {
  var children = _a.children;
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(nav_1["default"], null), react_1["default"].createElement("div", {
    className: "container"
  }, children));
};

exports.default = Layout;

/***/ }),

/***/ "./resources/js/components/common/nav/index.tsx":
/*!******************************************************!*\
  !*** ./resources/js/components/common/nav/index.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Menu = function Menu() {
  return react_1["default"].createElement("nav", {
    className: "navbar navbar-expand-md navbar-light bg-white shadow-sm"
  }, react_1["default"].createElement("div", {
    className: "container"
  }, react_1["default"].createElement("a", {
    className: "navbar-brand",
    href: "/card/list"
  }, "Justice"), react_1["default"].createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, react_1["default"].createElement("ul", {
    className: "navbar-nav mr-auto"
  }, react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement("a", {
    className: "navbar-brand",
    href: "/card/add"
  }, "Add"))), react_1["default"].createElement("ul", {
    className: "navbar-nav ml-auto"
  }, react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Register"))))));
};

exports.default = Menu;

/***/ })

}]);