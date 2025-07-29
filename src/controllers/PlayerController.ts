import { Request, Response } from "express";
import PlayersService from "../services/PlayerService";

export class PlayersController{
    private service: PlayersService;

    constructor(service : PlayersService){
        this.service = service;
    }

    async getPlayers(req : Request, res : Response){
        const response = await this.service.getPlayers();
        return res.status(response.status).json(response.body);
    }

    async getPlayerById(req : Request, res: Response){
        const id = parseInt(req.params.id)
        const response = await this.service.getPlayerById(id);
        res.status(response.status).json(response.body);
    }
}