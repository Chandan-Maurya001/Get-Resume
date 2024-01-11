const express = require("express");
const appRouter = express.Router();
const { dispatcher, isAuthenticated } = require("../../middleware");

const { home, getResumeForm, createResume } = require("../../controllers");

appRouter.get("/", isAuthenticated(), (req, res, next) =>
  dispatcher(req, res, next, home)
);
appRouter.get("/create-resume", isAuthenticated(), (req, res, next) =>
  dispatcher(req, res, next, getResumeForm)
);

appRouter.post("", isAuthenticated(), (req, res, next) =>
  dispatcher(req, res, next, createResume)
);

module.exports = appRouter;
