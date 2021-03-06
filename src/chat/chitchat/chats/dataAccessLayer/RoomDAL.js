"use strict";
/**
 * Copyright 2016 Ahoo Studio.co.th.
 *
 *  RoomDAL.ts
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var localForage = __importStar(require("localforage"));
var RoomDAL = /** @class */ (function () {
    function RoomDAL() {
        this.store = localForage.createInstance({
            name: "rooms"
        });
    }
    RoomDAL.prototype.save = function (key, data) {
        return this.store.setItem(key, data);
    };
    RoomDAL.prototype.get = function (key) {
        return this.store.getItem(key);
    };
    RoomDAL.prototype.remove = function (key) {
        return this.store.removeItem(key);
    };
    RoomDAL.prototype.clear = function () {
        return this.store.clear();
    };
    RoomDAL.prototype.getKeys = function () {
        return this.store.keys();
    };
    return RoomDAL;
}());
exports.RoomDAL = RoomDAL;
