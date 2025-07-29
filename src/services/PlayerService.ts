import { Player } from "../model/Player";
import PlayerRepository from "../repository/PlayerRepository";
import { badRequest, HttpResponse, noContent, notFound, ok } from "../utils/HttpResponses";

class PlayersService{
    private repository: PlayerRepository;

    constructor(repository : PlayerRepository){
        this.repository = repository;
    }
    async getPlayers(): Promise<HttpResponse>{
        const data = await this.repository.getPlayers()
        if(data){
            return ok(data);
        }

        return noContent();
    }

    async getPlayerById(id : number): Promise<HttpResponse>{
        const data = await this.repository.findPlayerById(id);
        if(data){
            return ok(data);
        }
        return notFound({ message : "player not found" });
    }

    async createPlayer(player : Player) : Promise<HttpResponse>{
        const data = await this.repository.createPlayer(player);
        if(data){
            return ok(data);
        }

        return badRequest({ message : "worng data" });
    }
}

export default PlayersService;