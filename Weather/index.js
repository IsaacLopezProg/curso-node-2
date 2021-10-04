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
			  
          	
          	const termino = await leerInput('Ciudad: ');
          	const lugares = await busquedas.ciudad(termino);	
			const id = await listarLugares(lugares);
			if (id === 0) continue;

				//guardar en db
			const lugarSel = lugares.find(l => l.id === id);
			
			busquedas.agregarHistorial(lugarSel.nombre);
          	//clima
          	const clima = await busquedas.climaLugar(lugarSel.lat,lugarSel.lng); 
			console.log(clima);
          	
          	console.clear();
          	console.log('\n Informacion de la ciudad \n'.green);
          	console.log('Ciudad:', lugarSel.nombre.blue);
          	console.log('Lat:',lugarSel.lat);
          	console.log('Lng:',lugarSel.lng);
          	console.log('Temperatura:',clima.temp,);
          	console.log('Minima:',clima.min);
          	console.log('Maxima:',clima.max);
          	console.log('Como esta el clima:',clima.desc);
            // code
            
          break;
          
          case 2:

			// console.log(busquedas.historial)
          	
			busquedas.historialCapitalizado.forEach((lugar, i)=>{
				//const hist = lugar.replace(/\b[a-z]/g,b=>b.toUpperCase()); //una forma de capitalizar
				const idx = `${i + 1}.`.green;
				console.log(`${ idx } ${ lugar }`);
			});

			
          
            break;

    
        
        }
           
       if( opt !== 0) await pausa();
        
      } while ( opt !== 0);
      

}

main();