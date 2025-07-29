import express, {json, Request, Response} from 'express'

const createApp = () =>  {
    const app = express();
    app.use(json());

    app.get("/ping", (req : Request, res : Response) => {
        res.status(200).json({ mensagem : "pong" })
    })

    return app;
}


export default createApp;