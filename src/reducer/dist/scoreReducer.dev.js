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
      console.log('addScore reducer執行'); //...//

      return state + action.payload;

    case 'clearScore':
      console.log('clearScore reducer執行'); //...//

      return 0;

    default:
      return state;
    //有被調用的都被顯示出來
  }
};

var _default = score;
exports["default"] = _default;