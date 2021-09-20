require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

const { inquirirMenu, 
        pausa,
        leerInput,
        } = require('./helpers/inquierer');
        
const Tareas =  require('./models/tareas');



const main = async() => {
  
  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDB();
  console.log(tareasDB);
 
  if( tareasDB ){
    // cargar tareas
    tareas.cargarTareasFromArr(tareasDB);

  }
  

  // await pausa();

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

    guardarDB( tareas.liastadoArr );
    
    await pausa();
    //if( opt !== '0') await pausa();
    
  } while ( opt !== '0');
  
} 

main();