import "reflect-metadata";
import express from 'express';
import { InversifyExpressServer } from "inversify-express-utils";
import { GetIocContainer } from './common/iocRegister';

class Server {
    public start = (port: number) => {
        const container = GetIocContainer();
        const expressApp = express();
        let server = new InversifyExpressServer(container, null, { rootPath: "/api" }, expressApp);
        const app = server.build();
        let serve: any = app.listen(port, () =>
            console.log(`App running on ${serve.address().port}`));
    }
}

export default Server;