import { Player } from "../model/Player";

const rawPlayers = [
    {id : 1, name : "Messi"},
    {id : 2, name: "Ronaldo"}
];

class PlayerRepository{
    async getPlayers(): Promise<Player[]>{
        const players : Player[] = rawPlayers.map(p => ({
            id : p.id,
            name : p.name
        }));

        return players;
    }

    async findPlayerById(id : number): Promise<Player | null>{
        const index = rawPlayers.findIndex(p => p.id === id);

        if(index === -1) return null;

        return {
            id: rawPlayers[index].id,
            name: rawPlayers[index].name
        }
    }
}

export default PlayerRepository;