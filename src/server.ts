import express from "express";
import { ApolloServer } from "apollo-server-express";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import compression from "compression";

// import multer from "multer";

import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schemas";
import { tokenGenerator, verifyToken } from "./auth/authHandlers";

import * as jwt from "jsonwebtoken";

import "dotenv/config";
import * as dotenv from "dotenv";
import { Signup, localPassport } from "./auth/localPassport";
import { GooglePassport } from "./auth/googlePassport";
import bodyParser from "body-parser";
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

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET",
};

app.use(bodyParser.urlencoded({ extended: true }));

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );
// // ,
// //   function (req, res) {
// //     // Successful authentication, redirect success.
// //     res.redirect("/success");
// //   }
// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { session: false, failureRedirect: "/" }),
//   tokenGenerator
// );

app.post("/auth/signup", Signup);

app.post(
  "/login",
  passport.authenticate("local", { session: false }),
  tokenGenerator
);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: verifyToken,
  debug: false,
});

apolloServer.applyMiddleware({ app, path: "/graphql" });

const port = process.env.PORT || 4000;

// app.listen(port, () =>
//   console.log(
//     `\nGraphQL Server running on ---> http://localhost:${port}/graphql\n`
//   )
// );

// var server = reqHttp.createServer(app);
app.get("/", (req, res) => {
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
  cors: "http://localhost:3000",
  methods: ["GET", "POST"],
});

io.on("connection", (socket) => {
  socket.emit("connection id", socket.id);
  console.log("connection made");

  socket.on("message", (body) => {
    io.emit("message", body);
  });

  socket.on("nameandemail", (data) => {
    data.socketid = socket.id;
    addChatUser(data);
    // try {
    //   socket.join(data.socketid);
    //   console.log(data);
    //   io.emit("chatroom", {
    //     email: data.email,
    //     type: "status",
    //     text: "Is now connected",
    //     created: Date.now(),
    //   });
    // } catch (e) {
    //   console.log("[error]", "join room :", e);
    //   socket.emit("error", "couldnt perform requested action");
    // }
  });

  socket.on("join", function (data) {
    socket.join(data.email); // We are using room of socket io

    // io.sockets.in(data.email).emit("message", {
    //   // Emits a status message to the connect room when a socket client is connected
    //   type: "status",
    //   text: "Is now connected",
    //   created: Date.now(),
    // });
  });
  socket.on("sendtoclient", function (data) {
    io.sockets.in(data.email).emit("new_msg", {
      name: data.name,
      msg: data.message,
    });
  });
  socket.on("sendtoadmin", function (data) {
    console.log(data);

    socket.to(data.email).emit("to_admin_msg", {
      name: data.name,
      msg: data.msg,
      socketid: data.socketid,
    });
  });
});
