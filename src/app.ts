import express, {json, Request, Response} from 'express'
import { PlayersController } from './controllers/players-controller';

const createApp = () =>  {
    const app = express();
    app.use(json());

    app.get("/ping", PlayersController.ping);

    return app;
}


export default createApp;