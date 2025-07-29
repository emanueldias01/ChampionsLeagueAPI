import { Request, Response } from "express";

export class PlayersController{
    static async ping(req : Request, res : Response){
        return res.status(200).json({ message : "pong" });
    }
}