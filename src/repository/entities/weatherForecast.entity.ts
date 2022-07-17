import { BaseEntity, Column, Entity } from "typeorm";

@Entity()
export class WeatherForecast extends BaseEntity {
    @Column()
    public temperature!: number;
    @Column()
    public feelsLikeTemperature!: number;
    @Column()
    public humidity!: number;
    @Column()
    public windSpeed!: number;
    @Column()
    public windDirection?: string;
}