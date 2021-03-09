"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addChatUser = void 0;
const queries_1 = require("../endPoints/dropshipping/queries");
exports.addChatUser = (data) => {
    let user = {
        name: data.name,
        email: data.email,
        isadmin: 0,
        active: 1,
        socketid: data.socketid,
    };
    queries_1.DropshippingQueries.addChatUser(user);
};
