"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addChatUser = exports.addUserInfo = void 0;
const queries_1 = require("../../../endPoints/queries");
exports.addUserInfo = async (root, payload) => {
    const findProfile = await queries_1.Queries.LoginQueries.getLoginByEmail(payload.email);
    if (!findProfile) {
        await queries_1.Queries.LoginQueries.addUser([
            Object.assign({}, payload),
        ]);
        const User = Object.assign({}, payload);
        const message = `User, ${payload.email} created successfully`;
        return { message, User };
    }
    else {
        const message = `User already exists`;
        return { message };
    }
};
exports.addChatUser = async (root, payload) => {
    const findProfile = await queries_1.Queries.DropshippingQueries.getChatUserByEmail(payload.email);
    if (!findProfile) {
        await queries_1.Queries.DropshippingQueries.addChatUser([
            Object.assign({}, payload),
        ]);
        const ChatUser = Object.assign({}, payload);
        const message = `User, ${payload.email} created successfully`;
        return { message, ChatUser };
    }
    else {
        const message = `User already exists`;
        return { message };
    }
};
