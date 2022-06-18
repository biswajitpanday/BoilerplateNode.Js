import { Container } from "inversify";

// Import All The Controllers Here...
import '../controllers/weatherforecastController';

export function GetIocContainer(): Container {
    const container = new Container({ skipBaseClassChecks: true });
    return container;
}