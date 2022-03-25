import { Router, Express } from "express";
import * as YAMLJS from "yamljs";
import * as swaggerUi from "swagger-ui-express";
// import { AppError } from './exceptions/appError';
import { getRoutes } from "../api/routes";

export const load = (app: Express) => {
  try {
    const router = Router();

    router.use("/", getRoutes());

    const swaggerDocument = YAMLJS.load("./swagger.yml");
    router.use("^/$", (req, res) => {
      return res.redirect("/api-docs");
    });
    router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.use(router);
  } catch (error) {
    console.error(error);
  }
};
