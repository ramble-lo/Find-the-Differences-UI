"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _scoreReducer = _interopRequireDefault(require("../reducer/scoreReducer"));

var _timeScoreArrayReducer = _interopRequireDefault(require("../reducer/timeScoreArrayReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  score: _scoreReducer["default"],
  timeScoreArray: _timeScoreArrayReducer["default"]
}));
var _default = store;
exports["default"] = _default;