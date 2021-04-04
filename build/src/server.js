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
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const passport_1 = __importDefault(require("passport"));
const compression_1 = __importDefault(require("compression"));
const pg_1 = require("pg");
// import multer from "multer";
const resolvers_1 = require("./graphql/resolvers");
const schemas_1 = require("./graphql/schemas");
const authHandlers_1 = require("./auth/authHandlers");
require("dotenv/config");
const dotenv = __importStar(require("dotenv"));
const localPassport_1 = require("./auth/localPassport");
const googlePassport_1 = require("./auth/googlePassport");
localPassport_1.localPassport;
googlePassport_1.GooglePassport;
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});
pool.on("connect", () => {
    console.log("connected to the db");
});
dotenv.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
app.use(compression_1.default());
app.use(cors_1.default());
var router = express_1.default.Router();
app.use(express_1.default.static(__dirname + "/public"));
app.use(helmet_1.default({
    contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false,
}));
app.use(morgan_1.default("dev"));
app.post("/auth/signup", localPassport_1.Signup);
app.post("/login", passport_1.default.authenticate("local", { session: false }), authHandlers_1.tokenGenerator);
const apolloServer = new apollo_server_express_1.ApolloServer({
    typeDefs: schemas_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    // context: verifyToken,
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
});
