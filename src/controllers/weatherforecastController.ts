import { BaseHttpController, controller, httpGet, interfaces } from "inversify-express-utils";


@controller("/weatherforecast")
export class WeatherForecastController extends BaseHttpController implements interfaces.Controller {
    constructor() {
        super();
    }

    @httpGet("/")
    private async get(): Promise<any> {
        try {
            const weatherForecast = {
                "temperature": 25,
                "windSpeed": 13,
                "humidity": 79,
                "windDirection": "South"
            };
            return this.ok(weatherForecast);
        } catch (error: any) {
            return this.badRequest(`An Error Occurred. \nError: ${JSON.stringify(error?.message || error?.stack || error)}`);
        }
    }
}