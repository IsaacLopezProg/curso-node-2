const fs = require('fs'); 

const axios = require('axios');


class Busquedas{
	
	historial = [];
	dbPath = './DB/database.json';
	
	constructor(){
		
		this.leerDB();
	}

	get historialCapitalizado(){
		
		return this.historial.map(lugar =>{

			let palabras = lugar.split(' ');
			palabras = palabras.map(p  => p[0].toUpperCase() + p.substring(1));

			return palabras.join(' ');

		})

		
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
	
	
	async climaLugar(lat, lon){
		try {
			// intance.axios.create()
			
			// NOTA IMPORTANTE: siempre poner http:// en las conexiones con axios
			// const respu = await axios.get('http://api.openweathermap.org/data/2.5/weather?lat=19.43&lon=-70.42&appid=5ec9319031dac6e4d54b269d01d579a7&units=metric&lang=es');
			
			// resp.data
			
			
			const intance = axios.create({
				baseURL: `http://api.openweathermap.org/data/2.5/weather`,//?lat=${lat}&lon=${lon}`,
				params: { ...this.paramsOpenwather, lat, lon}
			})
			
			
			
			
			const resp = await intance.get();
			// description = resp.data.weather.description;
			// console.log(resp.data);
			// return resp.data(clima => ({
			// 	desc : clima.weather.description,
			// 	min:clima.main.temp_min,
			// 	max:clima.main.temp_max,
			// 	temp:clima.main.temp
			// }));

			return {
				desc: resp.data.weather[0].description,
				min: resp.data.main.temp_min,
				max: resp.data.main.temp_max,
				temp: resp.data.main.temp
			}
			
			
		} catch (e) {
			console.log(e)
		}
	}


	agregarHistorial(lugar=''){

		if(this.historial.includes(lugar.toLocaleLowerCase())){
			return;
		}

		this.historial = this.historial.slice(0,5);

		this.historial.unshift(lugar.toLocaleLowerCase());


		this.guardarDB();

	}

	guardarDB(){

		const payload = {
			historial: this.historial
		};

		fs.writeFileSync(this.dbPath, JSON.stringify(payload));

	

	}

	leerDB(){

		if ( !fs.existsSync(this.dbPath)){
			return null;
		}

		const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8'});
    	const data = JSON.parse(info);
		this.historial = data.historial;

 

	}
}

module.exports = Busquedas;