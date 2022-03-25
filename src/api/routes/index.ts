import { Router } from "express";
import { HealhtChecker } from "./health-check-routers";

export const getRoutes = () => {
  const router = Router();
  router.use(HealhtChecker);

  return router;
};
