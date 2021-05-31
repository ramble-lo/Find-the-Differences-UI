"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var score = function score() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'addScore':
      return state + action.payload;

    case 'clearScore':
      return 0;

    default:
      return state;
  }
};

var _default = score;
exports["default"] = _default;