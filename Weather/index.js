require('dotenv').config()

console.log(process.env);


const { leerInput,inquirirMenu } = require('./helpers/inquierer');
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
          	
          	const lugar = await leerInput('Ciudad: ');
          	await busquedas.ciudad(lugar);	
         	//console.log(lugar);
          	
          	
          	
          	
          	console.log('\n Informacion de la ciudad \n'.green);
          	console.log('Ciudad:',);
          	console.log('Lat:',);
          	console.log('Lng:',);
          	console.log('Temperatura:',);
          	console.log('Minima:',);
          	console.log('Maxima:',);
            // code
            
          break;
          
          case 2:
           
          
            break;

    
        
        }
           
       if( opt !== 0) await pausa();
        
      } while ( opt !== 0);
      

}

//main();