require('dotenv').config()

const { leerInput,inquirirMenu, listarLugares } = require('./helpers/inquierer');
const Busquedas = require('./models/busqueda');

const main = async() => {
    // const texto = await leerInput("Hola :");
    // console.log(texto);

		const busquedas = new Busquedas();
    let opt;



    do {
        //opt = await mostrarMenu();
        opt = await inquirirMenu();
        
        switch (opt) {
          case 1:
          	const clima = await busquedas.climaLugar()
          	
          	const termino = await leerInput('Ciudad: ');
          	const lugares = await busquedas.ciudad(termino);	
         		const id = await listarLugares(lugares);
         		const lugarSel = lugares.find(l => l.id === id);
         		//const lat = lugarSel.lat;
         		
          	
          	
          	
          	//clima
          	const lat = lugarSel.lat,
          		lon = lugarSel.lng;
          		//lat=19.43&lon=-70.62
          	//const clima = await busquedas.climaLugar(19.34,-70.62)
          	
          	
          	
          	
          	
          	console.log('\n Informacion de la ciudad \n'.green);
          	console.log('Ciudad:', lugarSel.nombre.blue);
          	console.log('Lat:',lugarSel.lat);
          	console.log('Lng:',lugarSel.lng);
          	console.log('Temperatura:',);
          	console.log('Minima:',);
          	console.log('Maxima:',);
          	console.log('Como esta el clima:',);
            // code
            
          break;
          
          case 2:
          	
          	console.log(process.env.OPENWATHER_KEY);
          	//console.log(lugarSel);
          	//console.log(lugarSel.lng);
           
          
            break;

    
        
        }
           
       if( opt !== 0) await pausa();
        
      } while ( opt !== 0);
      

}

main();