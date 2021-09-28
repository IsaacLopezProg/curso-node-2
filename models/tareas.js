const Tarea  = require('./tarea');

class Tareas {
  
  _listado = {};

  get liastadoArr(){
    const listado = [];
    Object.keys(this._listado).forEach( key => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }
  
  constructor(){
    this._listado = {};
  }


	borrarTarea( id = ""){
		if (this._listado[id]);
	}


  cargarTareasFromArr(tareas = []){

    tareas.forEach(tarea => {

      this._listado[tarea.id] = tarea;

    });

  }
  
  
  crearTarea( desc = ''){
     
    const  tarea = new Tarea(desc);
    
    this._listado[tarea.id] = tarea;
  }


  listadoCompleto(){


    // let li = this._listado;

    
    // console.log( Object.entries(li));
    // console.log( Object.values(li));
    // console.log( Object.keys(li));


    console.log();

    this.liastadoArr.forEach( (tarea, i) => {

      const idx = `${i + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = ( completadoEn )
                        ? 'Completada'.green
                        : 'Pendiente'.red;


      console.log(`${ idx } ${ desc } :: ${ estado }`);

    });


  }
  
  
}

module.exports = Tareas;
