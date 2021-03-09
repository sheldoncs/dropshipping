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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const passport_1 = __importDefault(require("passport"));
const compression_1 = __importDefault(require("compression"));
// import multer from "multer";
const resolvers_1 = require("./graphql/resolvers");
const schemas_1 = require("./graphql/schemas");
const authHandlers_1 = require("./auth/authHandlers");
require("dotenv/config");
const dotenv = __importStar(require("dotenv"));
const localPassport_1 = require("./auth/localPassport");
const googlePassport_1 = require("./auth/googlePassport");
// import bodyParser from "body-parser";
const insertData_1 = require("./local/insertData");
localPassport_1.localPassport;
googlePassport_1.GooglePassport;
dotenv.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
app.use(compression_1.default());
// app.use(cors());
var router = express_1.default.Router();
app.use(express_1.default.static(__dirname + "/public"));
app.use(helmet_1.default({
    contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false,
}));
app.use(morgan_1.default("dev"));
app.use(function (request, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    //intercept the OPTIONS call so we don't double up on calls to the integration
    if ("OPTIONS" === request.method) {
        res.send(200);
    }
    else {
        next();
    }
});
// var corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 200, // For legacy browser support
//   methods: "GET",
// };
// app.use(bodyParser.urlencoded({ extended: true, limit: "1000mb" }));
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
app.post("/auth/signup", localPassport_1.Signup);
app.post("/login", passport_1.default.authenticate("local", { session: false }), authHandlers_1.tokenGenerator);
const apolloServer = new apollo_server_express_1.ApolloServer({
    typeDefs: schemas_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    context: authHandlers_1.verifyToken,
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
app.get("/order", (req, res) => {
    res.send("<div>Welcome</div>");
});
let server = require("http").createServer(app);
server.listen(port, () => {
    console.log(`\nGraphQL and chat Server running on ---> http://localhost:${port}/graphql\n`);
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
        insertData_1.addChatUser(data);
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
