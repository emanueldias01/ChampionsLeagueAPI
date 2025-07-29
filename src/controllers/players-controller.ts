import { Request, Response } from "express";
import PlayersService from "../services/players-service";

export class PlayersController{
    static async getPlayers(req : Request, res : Response){
        const data = await PlayersService.getPlayers();
        return res.status(200).json(data);
    }
}