const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./auth/auth-router");
const itemsRouter = require("./items/items-router");
const usersRouter = require("./users/users-router");
const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);
server.use("/api/items", itemsRouter);

module.exports = server;
