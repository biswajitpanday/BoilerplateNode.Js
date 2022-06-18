import "reflect-metadata";
import { appConfig } from "./common";
import server from "./server";

require('dotenv').config();

const port = parseInt("" + appConfig.port) || 4000;
const starter = new server().start(port);
export default starter;