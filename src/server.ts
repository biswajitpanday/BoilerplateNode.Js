import bodyParser from 'body-parser';
import express from 'express';
import { InversifyExpressServer } from "inversify-express-utils";
import { GetIocContainer } from './common/iocRegister';
import { AppDataSource } from './repository/dataSource';

var cors = require('cors');
class Server {
    public start = (port: number) => {
        const container = GetIocContainer();
        const expressApp = express();
        let server = new InversifyExpressServer(container, null, { rootPath: "/api" }, expressApp);

        server.setConfig((app) => {
            app.use(cors());
            app.use(bodyParser.urlencoded({
                extended: true
            }));
            app.use(bodyParser.json());
        });

        server.setErrorConfig((app) => {
            app.use((err: any, req: any, res: any, next: any) => {
                console.error(err.stack);
                res.status(500).send(`An Error Occurred!`);
            })
        });

        AppDataSource.initialize().then(() => {
            console.info("Initialized Postgres.")
        });

        const app = server.build();
        let serve: any = app.listen(port, () =>
            console.info(`App running on ${serve.address().port}`));
    }
}

export default Server;