import { Router } from "express";
import { PlayersController } from "../controllers/PlayerController";

class PlayerRoutes{
    controller: PlayersController;

    constructor(controller : PlayersController){
        this.controller = controller
    }

    initializePlayerRoutes(){
        const routes = Router()
        routes.get("/players", (req, res) => this.controller.getPlayers(req, res));
        routes.get("/players/:id", (req, res) => this.controller.getPlayerById(req, res));
        routes.post("/player", (req, res) => this.controller.createPlayer(req, res));

        return routes;
    }
}

export default PlayerRoutes;