const { v4: uudiv4 } = require('uuid');




class Tarea {
  
  id = '';
  desc = '';
  completadosEn = null;
  
  constructor( desc ){
    
    
    this.id = uudiv4();
    this.desc = desc;
    this.completadosEn = null;
  }
  
  
}

module.exports = Tarea