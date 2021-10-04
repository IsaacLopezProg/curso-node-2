const axios = require('axios');


class Busquedas{
	
	historial = [];
	
	constructor(){
		//TODO: LEER DB SI ESXISTE
	}
	
	get paramsMapbox(){
		return{
			'access_token': process.env.MAPBOX_KEY,
			'limit':'5',
			'language':'es'
		}
	}
	
	get paramsOpenwather(){
		return{
			'appid':process.env.OPENWATHER_KEY,
			'units':'metric',
			'lang':'es'
		}
	}
	
	async ciudad (lugar = ''){
		
		try {
		
		//console.log(resp.data);
		
			const intance = axios.create({
					baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
					params:	this.paramsMapbox
			});
			
			
			//const respu = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?access_token=pk.eyJ1IjoiaXNhYWNsb3BlenByb2ciLCJhIjoiY2t1YmxvZ2dmMHJzajJ3cTZmbnkwMHQ5NyJ9.wopL-eJtH4musRspImoBLw&limit=5&language=es`);
			
			const resp = await intance.get();
			return resp.data.features.map(lugar => ({
				id : lugar.id,
				nombre : lugar.place_name,
				lng:lugar.center[0],
				lat:lugar.center[1],
			}));
			//console.log(resp.data.features);
			
				
		} catch (e) {
			
			return []; // retornar los lugares
		}
		
		
	}
	
	testAxios(){
		return axios.get('api.openweathermap.org/data/2.5/weather?lat=19.43&lon=-70.42&appid=5ec9319031dac6e4d54b269d01d579a7&units=metric&lang=es')
	}
	
	async climaLugar(){
		try {
			// intance.axios.create()
			
			
			const respu = await axios.get('api.openweathermap.org/data/2.5/weather?lat=19.43&lon=-70.42&appid=5ec9319031dac6e4d54b269d01d579a7&units=metric&lang=es')
			
			//const resp = await intance.get();
			console.log(respu);
			
			
			// resp.data
			
			
		} catch (e) {
			console.log(e)
		}
	}
}

module.exports = Busquedas;