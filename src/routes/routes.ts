import { Router } from "express";
import { PlayersController } from "../controllers/players-controller";

const routes = Router();

routes.get("/players", PlayersController.getPlayers);

export default routes;