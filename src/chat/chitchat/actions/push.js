"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BackendFactory_1 = require("../chats/BackendFactory");
const ChitChatFactory_1 = require("../chats/ChitChatFactory");
const getConfig = () => ChitChatFactory_1.ChitChatFactory.getInstance().config;
function push(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const backendFactory = BackendFactory_1.BackendFactory.getInstance();
        const server = backendFactory.getServer();
        const msg = {};
        msg.payload = payload;
        msg["x-api-key"] = getConfig().Stalk.apiKey;
        msg["x-api-version"] = getConfig().Stalk.apiVersion;
        msg["x-app-id"] = getConfig().Stalk.appId;
        return yield server.getPushApi().push(msg);
    });
}
exports.push = push;