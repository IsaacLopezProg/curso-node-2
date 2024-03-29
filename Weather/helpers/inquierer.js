const inquirer = require('inquirer');
require('colors');

const preguntas = (
  {
    type: 'list',
    name:'opcion',
    message: 'Que desea hacer?',
    choices: [
        {
          value: 1,
          name: `${'1.'.green} Buscar Ciudad`
        },
        {
          value: 2,
          name:`${'2.'.green} Historial`
        },
        {
          value: 0,
          name:`${'0.'.green} Salir`
        },
      ]
  }
);

const inquirirMenu = async() => {
  
    console.clear();
    console.log('============================'.green);
    console.log('    Seleccione una opcion'.white);
    console.log('============================\n'.green);
    
    const { opcion } = await inquirer.prompt(preguntas);
    
    return opcion;
    
}

const enter = (
  {
    type: 'input',
    name:'enter',
    message: `\n Presione ${ 'ENTER'.green } para continuar \n`,
  }
);
pausa = async () => {
  const  pausa  = await inquirer.prompt(enter);
}






const leerInput = async (message) => {
  
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate (value){
        if(value.length === 0 ){
          return 'Por favor ingrese un valor';
        }
        return true;
      }
    }
    ];
  
  
  const { desc } = await inquirer.prompt(question);
  return desc;
}


const listarLugares = async( lugares = [] ) => {

	const choices = lugares.map((lugar, i) => {
		
		const idx = `${i + 1}`.green;
		
		return {
			value: lugar.id,
			name:`${idx} ${lugar.nombre}`
		}
	});
	
	choices.unshift({
		value:0,
		name:'0.'.green + 'Cancelar'
	});
	
	const preguntas = [
		{
			type:'list',
			name:'id',
			message:'Seleccione lugar:',
			choices
			
		}
		]
		
		const { id } = await inquirer.prompt(preguntas);
		return id;
	//console.log(choices);
	
}

const confirmar = async (message) => {
	
	const question = [
		{
			type:'confirm',
			name:'ok',
			message
		}];
	const { ok } = await inquirer.prompt(question);
	return ok;
		
}




const mostrarListadoChecklist = async( tareas = [] ) => {

	const choices = tareas.map((tarea, i) => {
		
		const idx = `${i + 1}`.green;
		
		return {
			value: tarea.id,
			name:`${idx} ${tarea.desc}`,
			checked: ( tarea.completadoEn) ? true : false
		}
	});
	
	const pregunta = [
		{
			type:'checkbox',
			name:'ids',
			message:'Seleccione',
			choices
			
		}
		]
		
		const { ids } = await inquirer.prompt(pregunta);
		return ids;
	//console.log(choices);
	
}









module.exports = {
  inquirirMenu,
  pausa,
  leerInput,
  listarLugares,
  confirmar,
  mostrarListadoChecklist
}