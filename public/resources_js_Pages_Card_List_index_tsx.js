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

var CardListPage = function CardListPage(_a) {
  var cards = _a.cards;
  return react_1["default"].createElement("div", null, react_1["default"].createElement("ul", {
    className: "list-group"
  }, cards.length > 0 && cards.map(function (card, index) {
    return react_1["default"].createElement("li", {
      className: "list-group-item",
      key: index
    }, react_1["default"].createElement("p", null, card.title));
  })));
};

exports.default = CardListPage;

/***/ })

}]);