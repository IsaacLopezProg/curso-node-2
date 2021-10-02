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


	borrarTarea( id = ''){
		if (this._listado[id]){
      delete this._listado[id];
    };
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
  
  verTarea(){
  	//console.log(Object.keys(this._listado));
  	//console.log(Object.values(this._listado['id']));
  	//console.log(Object.entries(this._listado));
  	
  	//console.log(this._listado.liastadoArr);
  	
  	this.liastadoArr.forEach(p =>{
  		console.log(p.desc);
  	});
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


  toggleCompletadas( ids = []){

    ids.forEach( id => {

      const tarea = this._listado[id];
      if (!tarea.completadoEn){
        tarea.completadoEn = new Date().toISOString()
      }

    });

    this.liastadoArr.forEach( tarea =>{
      if (!ids.includes(tarea.id)){
        this._listado[tarea.id].completadoEn = null;
      }
    });


  }
  
  
}

module.exports = Tareas;
