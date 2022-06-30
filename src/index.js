// Instancia de servidor
const { application } = require('express');
const express = require('express');
const app = express();
//Middleware
const morgan = require('morgan'); 

//routes
app.use(require('./routes/index.js')); //exportamos el objeto "router" de './routes/index.js'
app.use('/api/movies',require('./routes/movies.js')); //exportamos el objeto "router" de './routes/index.js'
                                                      /* cuando declaramos '/api/movies', lo que hacemos 
                                                      de cierto modo es adjudicar una nueva ruta inicial 
                                                      asi a partir de '/api/movies' es como si entraramos a '/'  
                                                      y si entramos a '/api/movies/terror' en el archivo definiremos
                                                      '/terror'
                                                      */

//settings
app.set('port',process.env.PORT || 3000); //Definimos la variable port permanente 
                        /*process.env.PORT      En caso de que exista un puerto definido en la nube
                                                se tomara ese puerto por defecto de lo contrario utilizara
                                                el que le asignemos. (3000)*/
app.set('json spaces',2);//Da un formato de JSON
app.use(morgan('dev')); //Nos da informacion del la peticion
app.use(express.urlencoded({extended: false})); //Solo nos permitira entender textos en formularios
app.use(express.json()); //Nos permite resivir formatos json y entenderlos

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});



