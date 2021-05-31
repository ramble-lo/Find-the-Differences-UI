"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "firebase", {
  enumerable: true,
  get: function get() {
    return _app["default"];
  }
});

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

require("firebase/database");

var _config = _interopRequireDefault(require("./config.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  apiKey: _config["default"].PUBLIC_FIREBASE_API_KEY,
  authDomain: "".concat(_config["default"].PUBLIC_FIREBASE_PROJECT_ID, ".firebaseapp.com"),
  databaseURL: "https://".concat(_config["default"].PUBLIC_FIREBASE_PROJECT_ID, "-default-rtdb.asia-southeast1.firebasedatabase.app"),
  projectId: _config["default"].PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "".concat(_config["default"].PUBLIC_FIREBASE_PROJECT_ID, ".appspot.com"),
  messagingSenderId: _config["default"].MESSAGING_SENDER_ID,
  appId: _config["default"].APP_ID,
  measurementId: _config["default"].MEASUREMENT_ID
};

function initFirebase() {
  if (!_app["default"].apps.length) {
    _app["default"].initializeApp(config);
  }
}

initFirebase();