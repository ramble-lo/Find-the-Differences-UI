"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearUserAnswereArray = exports.addUserAnswereArray = exports.clearTimeScoreArray = exports.addTimeScoreArray = exports.clearScore = exports.addScore = void 0;

var addScore = function addScore(value) {
  return {
    type: 'addScore',
    payload: value
  };
};

exports.addScore = addScore;

var clearScore = function clearScore(value) {
  return {
    type: 'clearScore',
    payload: value
  };
};

exports.clearScore = clearScore;

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

var addUserAnswereArray = function addUserAnswereArray(value) {
  return {
    type: 'addUserAnswereArray',
    payload: value
  };
};

exports.addUserAnswereArray = addUserAnswereArray;

var clearUserAnswereArray = function clearUserAnswereArray(value) {
  return {
    type: 'clearUserAnswereArray',
    payload: value
  };
};

exports.clearUserAnswereArray = clearUserAnswereArray;