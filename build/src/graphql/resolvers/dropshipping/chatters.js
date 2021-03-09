"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateActiveChatter = exports.getActiveChatters = void 0;
const queries_1 = require("../../../endPoints/queries");
exports.getActiveChatters = async (root, args) => {
    const categories = await queries_1.Queries.DropshippingQueries.getActiveChatters(args.active);
    return categories;
};
exports.deactivateActiveChatter = async (root, args) => {
    let chatter = await queries_1.Queries.DropshippingQueries.deactivateChatter(args.socketid);
    let socket = {
        socket: args.socketid,
    };
    const message = `User, ${args.socketid} deactivated`;
    return { message, socket };
};
