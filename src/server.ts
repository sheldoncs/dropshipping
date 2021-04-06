import express from "express";
import { ApolloServer } from "apollo-server-express";
// import { ApolloServer } from "apollo-server";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import compression from "compression";
import { Pool } from "pg";
// import multer from "multer";

import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schemas";
import { tokenGenerator, verifyToken } from "./auth/authHandlers";

import * as jwt from "jsonwebtoken";

import "dotenv/config";
import * as dotenv from "dotenv";
import { Signup, localPassport } from "./auth/localPassport";
import { GooglePassport } from "./auth/googlePassport";
// import bodyParser from "body-parser";
import { addChatUser } from "./local/insertData";

localPassport;
GooglePassport;

dotenv.config();
const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(compression());
app.use(cors());

var router = express.Router();

app.use(express.static(__dirname + "/public"));
app.use(
  helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === "production" ? undefined : false,
  })
);

app.use(logger("dev"));

app.post("/auth/signup", Signup);

app.post(
  "/login",
  passport.authenticate("local", { session: false }),
  tokenGenerator
);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // context: verifyToken,
  debug: false,
  introspection: true,
  // playground: { version: "1.7.25" },
  playground: true,
});

apolloServer.applyMiddleware({ app, path: "/graphql" });

const port = process.env.PORT || 4000;

// app.listen(port, () =>
//   console.log(
//     `\nGraphQL Server running on ---> http://localhost:${port}/graphql\n`
//   )
// );

// var server = reqHttp.createServer(app);
app.get("/order", (req, res) => {
  res.send("<div>Welcome</div>");
});

let server = require("http").createServer(app);

server.listen(port, () => {
  console.log(
    `\nGraphQL and chat Server running on ---> http://localhost:${port}/graphql\n`
  );
});

// let io = socket(server);

let io = require("socket.io")(server, {
  // cors: "http://localhost:3000",
  cors: "https://sellers-frontend.herokuapp.com/",
  methods: ["GET", "POST"],
});

io.on("connection", (socket) => {
  socket.emit("connection id", socket.id);
  console.log("connection made");

  socket.on("message", (body) => {
    io.emit("message", body);
  });
});
