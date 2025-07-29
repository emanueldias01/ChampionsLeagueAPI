import { Router } from "express";
import { PlayersController } from "../controllers/PlayersController";

const routes = Router();

routes.get("/players", PlayersController.getPlayers);

export default routes;