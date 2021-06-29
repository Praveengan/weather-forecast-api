# Weather Forecast API 

It supports finding a city by name and retrieving the weather by city name via the official [api](https://openweathermap.org/current). 

## Install dependency

Run `npm run install` to download all the dependencies required for the project

## Development server

Note : Before running the development server. Set the API_KEY environement variable value to key which authorizes the request.

Run `npm run start` for a dev server. (Default enpoint is `http://localhost:8000/`).

## End Points

| Endpoint                                 | Response                                                                                                          | Query Params                                                                                                                                                                                                                                                       |
|------------------------------------------|-------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/weather`            | { data: [open-weather model](https://openweathermap.org/current#current_JSON), error: { message: "Error message"} } | - **city** (`string`)**:** The name for the city of which you want the current weather                                                                                                                                                                       |
| `/cities`                | { data: ['citynames'], error: { message: "Error message"} } | - **name** (`string`)**:** city name prefix to filter results                                                                                                                                                                       |
