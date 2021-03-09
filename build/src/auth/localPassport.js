"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signup = exports.localPassport = void 0;
const passport_1 = __importDefault(require("passport"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const queries_1 = require("../endPoints/logins/queries");
const authHandlers_1 = require("./authHandlers");
const passport_local_1 = __importDefault(require("passport-local"));
exports.localPassport = passport_1.default.use(new passport_local_1.default.Strategy({
    usernameField: "username",
    passwordField: "password",
}, async (username, password, done) => {
    try {
        const userInfo = await queries_1.LoginQueries.singleLoginByUsername(username);
        console.log("userInfo", userInfo);
        if (!userInfo) {
            return done(null, false);
        }
        let validatePassword = await bcrypt_1.default.compare(password, userInfo.password);
        if (password === userInfo.password) {
            validatePassword = true;
        }
        if (!validatePassword) {
            return done(null, false);
        }
        const user = [userInfo];
        return done(null, user);
    }
    catch (error) {
        console.log(error);
        throw new Error("Internal Server Error");
    }
}));
exports.Signup = async (req, res, next) => {
    const newUser = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    };
    //valid user inputs
    const validate = authHandlers_1.validateData(newUser);
    if (!validate.valid)
        return res.json(validate.errors);
    try {
        //check if user exists
        const currentUser = await queries_1.LoginQueries.getLoginByEmail(newUser.email);
        if (currentUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        //hash pass
        const hashedPassword = await bcrypt_1.default.hash(newUser.password, 12);
        let date = new Date();
        const user = {
            email: newUser.email,
            username: newUser.username,
            password: hashedPassword,
            lastLogin: date,
            created_at: date,
            provider: "local",
        };
        //add new user to db
        const persistNewUser = await queries_1.LoginQueries.addUser(user);
        console.log(persistNewUser);
        //TODO: Add data in response?
        return res.status(200).json({ message: "User successfully created" });
    }
    catch (error) {
        return res
            .status(500)
            .json({ error: "Something went wrong please try again" + error });
    }
};
