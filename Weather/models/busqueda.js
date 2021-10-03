const axios = require('axios');


class Busquedas{
	
	historial = [];
	
	constructor(){
		//TODO: LEER DB SI ESXISTE
	}
	
	get paramsMapbox(){
		return{
			'access_token':'pk.eyJ1IjoiaXNhYWNsb3BlenByb2ciLCJhIjoiY2t1YmxvZ2dmMHJzajJ3cTZmbnkwMHQ5NyJ9.wopL-eJtH4musRspImoBLw',
			'limit':'5',
			'language':'es'
		}
	}
	
	async ciudad (lugar = ''){
		
		try {
		
		//console.log(resp.data);
		
			const intance = axios.create({
					baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
					params:	this.paramsMapbox
			});
			
			
			const respu = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?access_token=pk.eyJ1IjoiaXNhYWNsb3BlenByb2ciLCJhIjoiY2t1YmxvZ2dmMHJzajJ3cTZmbnkwMHQ5NyJ9.wopL-eJtH4musRspImoBLw&limit=5&language=es`);
			
			const resp = await intance.get();
			console.log(resp.data);
			
			return []
				
		} catch (e) {
			
			return []; // retornar los lugares
		}
		
		
	}
}

module.exports = Busquedas;