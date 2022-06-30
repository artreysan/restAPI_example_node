const { Router } = require('express'); //Desde express requiero el metodo llamado Router
const { route } = require('.');
const router = Router();  //Cuando ejecuto Router(); lo guardo en un constante objeto llamado router

const movies = require('../sample.json');
console.log(movies);

router.get('/',(req,res)=>{
    res.json(movies);
});

module.exports =router;