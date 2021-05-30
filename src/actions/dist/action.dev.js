"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearScore = exports.clearTimeScoreArray = exports.addTimeScoreArray = exports.addScore = void 0;

var addScore = function addScore(value) {
  return {
    type: 'addScore',
    payload: value
  };
};

exports.addScore = addScore;

var addTimeScoreArray = function addTimeScoreArray(value) {
  return {
    type: 'addTimeScoreArray',
    payload: value
  };
};

exports.addTimeScoreArray = addTimeScoreArray;

var clearTimeScoreArray = function clearTimeScoreArray(value) {
  return {
    type: 'clearTimeScoreArray',
    payload: value
  };
};

exports.clearTimeScoreArray = clearTimeScoreArray;

var clearScore = function clearScore(value) {
  return {
    type: 'clearScore',
    payload: value
  };
};

exports.clearScore = clearScore;