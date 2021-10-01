require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

const { inquirirMenu, 
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoChecklist
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
       
        tareas.listadoCompleto();
        break;
        
      case '3':
       
      	//tareas.verTarea();
      	tareas.liastadoArr.forEach(p=>{
      		console.log(p.desc)
      	});
        //const [id] = tareas.liastadoArr;
        //console.log(desc);
        break;
        
      case '5':
      	
      	const ids = await mostrarListadoChecklist(tareas.liastadoArr);	
      	console.log(ids);
      	
      break;

      case '6':
       
        const id = await listadoTareasBorrar( tareas.liastadoArr);
        if ( id !== '0'){
        	const ok = await confirmar('Estas seguro?');
        	if (ok){
        	tareas.borrarTarea(id);
        	console.log(`Tarea Borrada`.red);
        	}else{
        	console.log(`La Tarea no fue borrada`.blue);
        	}
        }
        //console.log( {ok} );
        
       break;
      
    }

    guardarDB( tareas.liastadoArr );
    
    await pausa();
    //if( opt !== '0') await pausa();
    
  } while ( opt !== '0');
  
} 

main();