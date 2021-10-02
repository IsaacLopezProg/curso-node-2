const { leerInput,inquirirMenu } = require('./helpers/inquierer')

const main = async() => {
    // const texto = await leerInput("Hola :");
    // console.log(texto);


    let opt;



    do {
        //opt = await mostrarMenu();
        opt = await inquirirMenu();
        
        switch (opt) {
          case '1':
            // code
            
          break;
          
          case '2':
           
          
            break;

    
        
        }
           
        await pausa();
        
      } while ( opt !== 0);
      

}

main();