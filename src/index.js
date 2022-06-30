// Instancia de servidor
const express = require('express');
const app = express();
//Middleware
const morgan = require('morgan'); 

//settings
app.set('port',process.env.PORT || 3000); //Definimos la variable port permanente 
                        /*process.env.PORT      En caso de que exista un puerto definido en la nube
                                                se tomara ese puerto por defecto de lo contrario utilizara
                                                el que le asignemos. (3000)*/

app.use(morgan('dev')); //Nos da informacion del la peticion
app.use(express.urlencoded({extended: false})); //Solo nos permitira entender textos en formularios
app.use(express.json()); //Nos permite resivir formatos json y entenderlos


//routes
app.get('/', (req,res)=>{
    res.json({"Title":"Hello world"});
});

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});



