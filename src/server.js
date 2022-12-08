const express = require("express");

const { logger } = require("./middleware/logger");
const { nameValidator } = require("./middleware/validator");
const { notFound } = require("./error-handlers/404");
const { serverError } = require("./error-handlers/500");

const server = express();

server.use(logger);

server.use(nameValidator);

server.get("/person", (req, res) => {
  res.status(200).send({ name: req.name });
});

server.use(notFound);
server.use(serverError);

module.exports = { server };
