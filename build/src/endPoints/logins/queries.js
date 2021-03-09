"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginQueries = void 0;
const knex_1 = __importDefault(require("../../config/knex"));
exports.LoginQueries = {
    getLoginByEmail: async (email) => {
        const login = await knex_1.default("user").where({ email }).first();
        return login;
    },
    singleLoginByUsername: async (email) => {
        const loginByUsername = await knex_1.default("user").where({ email }).first();
        return loginByUsername;
    },
    updateUserLastLoginByEmail: async (email) => {
        let date = knex_1.default.fn.now();
        return await knex_1.default("users")
            .where({ email })
            .update({ lastLogin: date, updated_at: date }, ["*"]);
    },
    addUser: async (user) => {
        return await knex_1.default("user").insert(user).returning("*");
    },
};
