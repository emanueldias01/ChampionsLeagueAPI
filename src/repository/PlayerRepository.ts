import { Player } from "../model/Player";
import fs from 'fs';

const pathJson = "./src/data/players.json";

class PlayerRepository {
  async getPlayers(): Promise<Player[]> {

    const data = fs.readFileSync(pathJson, "utf-8")
    const rawPlayers : Player[] = JSON.parse(data); 
    return rawPlayers.map(p => ({
      id: p.id,
      name: p.name,
      club: p.club,
      nationality: p.nationality,
      position: p.position
    }));
  }

  async findPlayerById(id: number): Promise<Player | null> {
    const data = fs.readFileSync(pathJson, "utf-8");
    const rawPlayers : Player[] = JSON.parse(data);
    const player = rawPlayers.find(p => p.id === id);
    return player ?? null;
  }

  async createPlayer(player : Player) : Promise<Player | null>{
    const data = fs.readFileSync(pathJson, "utf-8");
    const rawPlayers : Player[] = JSON.parse(data);
    const search = rawPlayers.find(p => p.name === player.name || p.id === player.id);
    if(search) return null;
    rawPlayers.push(player);

    fs.writeFileSync(pathJson, JSON.stringify(rawPlayers, null, 2), "utf-8");

    return player;
  }

  async updatePlayer(player : Player) : Promise<Player | null>{
    const data = fs.readFileSync(pathJson, "utf-8");
    const rawPlayers : Player[] = JSON.parse(data);
    const search = rawPlayers.find(p => p.id === player.id);
    if(!search) return null;

    search.name = player.name;
    search.club = player.club;
    search.minutes_played = player.minutes_played;
    search.goals = player.goals;
    search.nationality = player.nationality;
    search.position = player.position;
    search.awards = player.awards;

    fs.writeFileSync(pathJson, JSON.stringify(rawPlayers, null, 2), "utf-8");

    return search;
  }

  async deletePlayerById(id : number) : Promise<Player | null>{
    const data = fs.readFileSync(pathJson, "utf-8");
    const rawPlayers : Player[] = JSON.parse(data);
    const index = rawPlayers.findIndex(p => p.id === id);
    if(index === -1) return null;
    const res = rawPlayers[index];
    rawPlayers.splice(index, 1);

    fs.writeFileSync(pathJson, JSON.stringify(rawPlayers, null, 2), "utf-8");


    return res;
  }
}

export default PlayerRepository;
