CREATE TABLE weatherforecast 
(
    id integer NOT NULL,
    createdAt date NOT NULL,
    lastUpdated date NOT NULL,
    isDeleted boolean NOT NULL,
    temperature integer NOT NULL,
    feelsLikeTemperature  integer NOT NULL,
    humidity  integer NOT NULL,
    windSpeed  integer NOT NULL,
    windDirection varchar,
    CONSTRAINT weatherforecast_pkey PRIMARY KEY (id)
)