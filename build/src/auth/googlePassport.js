"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GooglePassport = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
require("dotenv/config");
const queries_1 = require("../endPoints/logins/queries");
exports.GooglePassport = [
    passport_1.default.use(new passport_google_oauth20_1.default.Strategy({
        callbackURL: "http://localhost:4000/auth/google/callback",
        clientID: process.env.googleClientID,
        clientSecret: process.env.googleClientSecret,
    }, async (accessToken, refreshToken, profile, done) => {
        console.log("test again");
        try {
            const currentUser = await queries_1.LoginQueries.getLoginByEmail(profile.emails[0].value);
            if (currentUser) {
                const { email, lastLogin } = currentUser;
                console.log("email", email);
                let newCurrentUser = await queries_1.LoginQueries.updateUserLastLoginByEmail(email);
                console.log("User already exists:", currentUser);
                done(null, newCurrentUser);
            }
            else {
                let date = new Date();
                const user = {
                    username: profile.displayName,
                    provider: profile.provider,
                    providerId: profile.id,
                    profileImage: profile.photos[0].value,
                    email: profile.emails[0].value,
                    lastLogin: date,
                };
                const persistedUser = await queries_1.LoginQueries.addUser(user);
                console.log("New user created!");
                done(null, persistedUser);
            }
        }
        catch (error) {
            console.log(error);
            throw new Error("Internal Server Error");
        }
    })),
];
