import { Request, Response } from "express";
import PlayersService from "../services/PlayerService";
import { ok } from "../utils/HttpResponses";

export class PlayersController{
    static async getPlayers(req : Request, res : Response){
        const response = await PlayersService.getPlayers();
        return res.status(response.status).json(response.body);
    }
}