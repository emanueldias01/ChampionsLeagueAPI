import express, {json} from 'express'
import PlayerRoutes from './routes/routes';
import { PlayersController } from './controllers/PlayerController';
import PlayersService from './services/PlayerService';
import PlayerRepository from './repository/PlayerRepository';
import cors from 'cors';


const createApp = () =>  {
    
    const playerRepository = new PlayerRepository();
    const playersService = new PlayersService(playerRepository);
    const playersController = new PlayersController(playersService);
    const playerRoutes = new PlayerRoutes(playersController);

    const routes = playerRoutes.initializePlayerRoutes();
    const app = express();
    app.use(json());
    app.use(cors());
    app.use("/api", routes);

    return app;
}


export default createApp;