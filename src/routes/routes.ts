import { Router } from "express";
import { PlayersController } from "../controllers/players-controller";

const routes = Router();

routes.get("/ping", PlayersController.ping);

export default routes;