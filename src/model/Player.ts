export interface Player {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  goals?: number;
  minutes_played?: number;
  awards?: string[];
}
