require('colors');

const { inquirirMenu, 
        pausa,
        leerInput,
        } = require('./helpers/inquierer');
        
//const Tarea = require('./models/tarea')
const Tareas =  require('./models/tareas');
//const { mostrarMenu, pausa } = require('./helpers/mensaje');

// console.clear();

const main = async() => {
  //console.log("Hola mundo");
  
  let opt = '';
  const tareas = new Tareas();
  
  do {
    //opt = await mostrarMenu();
    opt = await inquirirMenu();
    
    switch (opt) {
      case '1':
        // code
        
        const desc = await leerInput('Descripcion:');
        // console.log(desc);
        tareas.crearTarea(desc);
      break;
      
      case '2':
        console.log(tareas.liastadoArr);
        
       break;
      
    }
    
    await pausa();
    //if( opt !== '0') await pausa();
    
  } while ( opt !== '0');
  
} 

main();