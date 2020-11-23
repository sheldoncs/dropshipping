import express from "express";
import { ApolloServer } from "apollo-server-express";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import { socketServer } from "./chatServer/chatServer";
import { chatListener } from "./chatServer/chatServer";
// import multer from "multer";

import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schemas";
import { tokenGenerator, verifyToken } from "./auth/authHandlers";

import * as jwt from "jsonwebtoken";

import "dotenv/config";
import * as dotenv from "dotenv";
// import { Signup, localPassport } from "./auth/localPassport";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

let io = socketServer(app);
chatListener(io);
app.use(express.json());
app.use(passport.initialize());

var router = express.Router();

app.use(express.static(__dirname + "/public"));
app.use(
  helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === "production" ? undefined : false,
  })
);
app.use(logger("dev"));

// app.use(cors());

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get(
//   "/auth/linkedin",
//   passport.authenticate("linkedin", {
//     session: false,
//     scope: ["r_emailaddress", "r_liteprofile"],
//   })
// );

// app.post("/auth/signup", Signup);

// app.post(
//   "/login",
//   passport.authenticate("local", { session: false }),
//   tokenGenerator
// );

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: verifyToken,
  debug: false,
});

apolloServer.applyMiddleware({ app, path: "/graphql" });

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(
    `\nGraphQL Server running on ---> http://localhost:${port}/graphql\n`
  )
);
