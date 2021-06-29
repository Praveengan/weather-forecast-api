const weather = require('openweather-apis');
const express = require('express');
const mcache = require('memory-cache');
const constants = require('./constant.js');
const cities = require('./india-cities.json');

const app = express();

weather.setAPPID(constants.API_KEY);

var cache = (expiry=constants.CACHE_DURATION) => {
    return (req, res, next) => {
      let key = '__express__' + req.originalUrl || req.url
      let cachedBody = mcache.get(key)
      if (cachedBody) {
        res.send(cachedBody)
        return
      } else {
        res.sendResponse = res.send
        res.send = (body) => {
          mcache.put(key, body,expiry * 1000);
          res.sendResponse(body)
        }
        next()
      }
    }
  }

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// enpoint to list cities in india (limiting to first 10 city matching the prefix)
app.get('/cities',cache(900), (req, res) => {
    let namePrefix = req.query[constants.NAME_QUERY_PARAM] || '';
    let filteredCities = [];
    filteredCities = cities.filter(function(city){
        if (this.count < 10 && city.name.toLowerCase().startsWith(namePrefix)) {
          this.count++;
          return city;
        }
        return false;
      }, {count: 0});
    return res.status(200).send(filteredCities)
});

// enpoint to fetch todays weather details for given city
app.get('/weather', cache(), (req, res) => {
        let reqCity = req.query[constants.CITY_QUERY_PARAM];
        if(!reqCity){
            return res.status(400).send(
              {
                data: null,
                error: {
                  message: 'Missing Mandatory field'
                }
            });
        }
        weather.setCity(reqCity);
        weather.setLang("en");
        weather.setUnits("metric")
        weather.getAllWeather(function(err, data){
            if(err){
                console.log("get weather error : ", err)
                return res.status(500).send(
                  {
                    data: null,
                    error: {
                      message: 'Error while fetching weather data'
                    }
                });
            }
            return res.status(200).send({
              data,
              error: null
            })
        });
});

app.listen(8000, () => {
    console.log('istening on port 8000!')
});