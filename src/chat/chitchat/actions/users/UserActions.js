"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = require("redux-actions");
exports.ON_USER_LOGIN = "ON_USER_LOGIN";
exports.ON_USER_LOGOUT = "ON_USER_LOGOUT";
exports.onUserLogin = redux_actions_1.createAction(exports.ON_USER_LOGIN, function (payload) { return payload; });
exports.onUserLogout = redux_actions_1.createAction(exports.ON_USER_LOGOUT, function (payload) { return payload; });
