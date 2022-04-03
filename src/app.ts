import { loadMiddlewares } from "./api/middlewares";
import * as AppRouters from "./config/routers";
import { TypeOrmConnection } from "./config/database";
import express, { Express } from "express";
import "express-async-errors";
import Container from "typedi";

export const build = async () => {
  const app: Express = express();
  const database = Container.get(TypeOrmConnection);

  console.info("Loading database connection");
  await database.connect();

  loadMiddlewares(app);
  AppRouters.load(app);

  return app;
};
