const getWeather = () =>{
	return [
		{
			"coord":{
			   "lon":-106.002,
			   "lat":39.2247
			},
			"weather":[
			   {
				  "id":803,
				  "main":"Clouds",
				  "description":"nubi sparse",
				  "icon":"04d"
			   }
			],
			"base":"stations",
			"main":{
			   "temp":11.52,
			   "feels_like":10.14,
			   "temp_min":10,
			   "temp_max":12.78,
			   "pressure":1027,
			   "humidity":54
			},
			"visibility":10000,
			"wind":{
			   "speed":2.06,
			   "deg":0
			},
			"clouds":{
			   "all":75
			},
			"dt":1624731995,
			"sys":{
			   "type":1,
			   "id":4795,
			   "country":"US",
			   "sunrise":1624707560,
			   "sunset":1624761261
			},
			"timezone":-21600,
			"id":5421506,
			"name":"Fairplay",
			"cod":200
		 }
	]
}
module.exports = getWeather