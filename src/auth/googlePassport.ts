import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import "dotenv/config";


import { LoginQueries } from "../endPoints/logins/queries";

export const GooglePassport = [
  passport.use(
    new GoogleStrategy.Strategy(
      {
        callbackURL: "http://localhost:4000/auth/google/callback",
        clientID: process.env.googleClientID,
        clientSecret: process.env.googleClientSecret,
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log("test again");
        try {
          const currentUser = await LoginQueries.getLoginByEmail(
            profile.emails[0].value
          );

          if (currentUser) {
            const { email, lastLogin } = currentUser as any;
            console.log("email", email);
            let newCurrentUser = await LoginQueries.updateUserLastLoginByEmail(
              email
            );
            console.log("User already exists:", currentUser);
            done(null, newCurrentUser);
          } else {
            let date = new Date();
            const user = {
              username: profile.displayName,
              provider: profile.provider,
              providerId: profile.id,
              profileImage: profile.photos[0].value,
              email: profile.emails[0].value,
              lastLogin: date,
            };
            const persistedUser = await LoginQueries.addUser(user);
            console.log("New user created!");
            done(null, persistedUser);
          }
        } catch (error) {
          console.log(error);
          throw new Error("Internal Server Error");
        }
      }
    )
  ),
];
