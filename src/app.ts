import express, {json, Request, Response} from 'express'
import routes from './routes/routes';

const createApp = () =>  {
    const app = express();
    app.use(json());
    app.use("/api", routes);

    return app;
}


export default createApp;