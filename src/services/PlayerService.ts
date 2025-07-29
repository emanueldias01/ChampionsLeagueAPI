import { noContent, ok } from "../utils/HttpResponses";

class PlayersService{
    static async getPlayers(){
        const data = {name : "Ronaldo"}
        if(data){
            return ok(data);
        }

        return noContent();
    }
}

export default PlayersService;