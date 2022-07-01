const { Router } = require('express'); //Desde express requiero el metodo llamado Router
const { route } = require('.');
const router = Router();  //Cuando ejecuto Router(); lo guardo en un constante objeto llamado router

const movies = require('../sample.json');
console.log(movies);

router.get('/',(req,res)=>{
    res.json(movies);
});

router.post('/',(req, res) => { //Recibe un objeto del cliente
    console.log(req.body);
    res.send('Received');
    /*
    const id = movies.length + 1;
    const { title, director, year, rating } = req.body;
    const newMovie = { ...req.body, id };
    if (id && title && director && year && rating) {
        movies.push(newMovie);
        res.json(movies);
    } else {

        res.status(500).json({error: 'There was an error.'});
    }
    */
});

module.exports =router;