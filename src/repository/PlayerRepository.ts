import { Player } from "../model/Player";

const rawPlayers: Player[] = [
  {
    id: 1,
    name: "Serhou Guirassy",
    club: "Borussia Dortmund",
    nationality: "Guiné-Bissau / França",
    goals: 13,
    minutes_played: 1084,
    position: "Atacante"
  },
  {
    id: 2,
    name: "Raphinha",
    club: "Barcelona",
    nationality: "Brasil",
    goals: 13,
    minutes_played: 1225,
    position: "Atacante"
  },
  {
    id: 3,
    name: "Robert Lewandowski",
    club: "Barcelona",
    nationality: "Polônia",
    goals: 11,
    minutes_played: 985,
    position: "Atacante"
  },
  {
    id: 4,
    name: "Harry Kane",
    club: "Bayern Munich",
    nationality: "Inglaterra",
    goals: 11,
    minutes_played: 1120,
    position: "Atacante"
  },
  {
    id: 5,
    name: "Lautaro Martínez",
    club: "Inter Milan",
    nationality: "Argentina",
    goals: 9,
    minutes_played: 857,
    position: "Atacante"
  },
  {
    id: 6,
    name: "Ousmane Dembélé",
    club: "Paris Saint‑Germain",
    nationality: "França",
    goals: 8,
    minutes_played: 1163,
    position: "Atacante",
    awards: ["Player of the Season 2024‑25"]
  },
  {
    id: 7,
    name: "Désiré Doué",
    club: "Paris Saint‑Germain",
    nationality: "França",
    position: "Meia / Atacante",
    awards: ["Young Player of the Season 2024‑25"]
  },
  {
    id: 8,
    name: "Lamine Yamal",
    club: "Barcelona",
    nationality: "Espanha",
    position: "Atacante / Meia"
  }
];

class PlayerRepository {
  async getPlayers(): Promise<Player[]> {
    return rawPlayers.map(p => ({
      id: p.id,
      name: p.name,
      club: p.club,
      nationality: p.nationality,
      position: p.position
    }));
  }

  async findPlayerById(id: number): Promise<Player | null> {
    const player = rawPlayers.find(p => p.id === id);
    return player ?? null;
  }

  async createPlayer(player : Player) : Promise<Player | null>{
    const search = rawPlayers.find(p => p.name === player.name || p.id === player.id);
    if(search) return null;
    rawPlayers.push(player);
    return player;
  }

  async updatePlayer(player : Player) : Promise<Player | null>{
    const search = rawPlayers.find(p => p.id === player.id);
    if(!search) return null;

    search.name = player.name;
    search.club = player.club;
    search.minutes_played = player.minutes_played;
    search.goals = player.goals;
    search.nationality = player.nationality;
    search.position = player.position;
    search.awards = player.awards;

    return search;
  }
}

export default PlayerRepository;
