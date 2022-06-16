import "reflect-metadata";
import * as express from 'express';
import { InversifyExpressServer } from "inversify-express-utils";
import container from "./common/inversify.config";


class Server {
    public start = (port: number) => {
        const expressApp = express.default();
        let server = new InversifyExpressServer(container, null, { rootPath: "/api" }, expressApp);
        const app = server.build();
        let serve: any = app.listen(process.env.PORT || 3000, () =>
            `App running on ${serve.address().port}`);
    }
}

export default Server;