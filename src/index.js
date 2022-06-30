// Instancia de servidor
const express = require('express');
const app = express();
//Middleware
const morgan = require('morgan'); 


app.use(morgan('dev')); //Nos da informacion del la peticion
app.use(express.urlencoded({extended:false})); //Solo nos permitira entender textos
app.use(express.json); //Nos permite resivir formatos json y entenderlos

//Starting the server
app.listen(3000, () => {
    console.log('server on port ${3000}');
});

