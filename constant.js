const CACHE_DURATION = process.env.CACHE_DURATION != null ? process.env.CACHE_DURATION : 600;  // 10 minutes
const API_KEY = process.env.API_KEY != null ? process.env.API_KEY : 'Enter API Key here';
const CITY_QUERY_PARAM = "city";
const NAME_QUERY_PARAM = "name";
const COUNTRY_QUERY_PARAM = "country";
module.exports = {
    CACHE_DURATION,
    CITY_QUERY_PARAM,
    API_KEY,
    NAME_QUERY_PARAM,
    COUNTRY_QUERY_PARAM
}