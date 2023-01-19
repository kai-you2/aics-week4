import { json, urlencoded } from "body-parser";
import express from "express";
import { Client } from "pg";
import { Service } from "./service";
import { RedisClientType } from "@redis/client";

const initApp = async (db: Client, redis: RedisClientType) => {
  const calculator = new Service(db, redis);

  var app = express();
  app.disable("x-powered-by");
  // be able to parse post request
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("", calculator.router);

  return app;
};

export default initApp;
