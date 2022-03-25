import { loadMiddlewares } from "./api/middlewares";
import * as AppRouters from "./config/routers";
import express, { Express } from "express";
import "express-async-errors";
import Container from "typedi";

export const build = () => {
  const app: Express = express();
  // const database = Container.get(TypeOrmConnection);

  // await database.connect();
  loadMiddlewares(app);
  AppRouters.load(app);

  return app;
};
