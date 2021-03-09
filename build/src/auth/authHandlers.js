"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateData = exports.verifyToken = exports.tokenGenerator = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const queries_1 = require("../endPoints/logins/queries");
const apollo_server_express_1 = require("apollo-server-express");
const generateJWT = (user, jwtSecret, expiresIn) => {
    return jwt.sign(user, jwtSecret, expiresIn);
};
exports.tokenGenerator = (req, res) => {
    const { user } = req;
    const _a = user[0], { password } = _a, rest = __rest(_a, ["password"]);
    let expiresIn = 86400;
    const jwtToken = generateJWT(rest, process.env.jwtSecret, { expiresIn });
    let profile = queries_1.LoginQueries.getLoginByEmail(rest.email);
    profile.then((data) => {
        res.status(200).json({
            auth: true,
            token: jwtToken,
            user: rest.email,
            firstname: data.firstname,
            lastname: data.firstname,
            admin: data.admin,
        });
    });
    // res.status(200).json({ auth: true, token: jwtToken, user: rest.email });
};
exports.verifyToken = async (_a) => {
    var { req } = _a, rest = __rest(_a, ["req"]);
    const { authorization } = req.headers;
    if (authorization !== undefined) {
        const token = /Bearer\s(.+)/.exec(authorization)[1];
        jwt.verify(token, process.env.jwtSecret, (err, decodedToken) => {
            if (err) {
                throw new apollo_server_express_1.AuthenticationError("Must authenticate");
            }
            else {
                return Object.assign({ authorized: true, user: decodedToken }, rest);
            }
        });
    }
};
exports.validateData = (data) => {
    let errors = {};
    if (isEmpty(data.email)) {
        errors.email = "Must not be empty";
    }
    else if (!isEmail(data.email)) {
        errors.email = "Must be a valid email";
    }
    if (isEmpty(data.username))
        errors.username = "Must not be empty";
    if (isEmpty(data.password))
        errors.password = "Must not be empty";
    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false,
    };
};
const isEmpty = (string) => {
    if (string.trim() === "")
        return true;
    else
        return false;
};
const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx))
        return true;
    else
        return false;
};
