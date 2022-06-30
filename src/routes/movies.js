const { Router } = require('express'); //Desde express requiero el metodo llamado Router
const { route } = require('.');
const router = Router();  //Cuando ejecuto Router(); lo guardo en un constante objeto llamado router

const movies = require('../sample.json');
console.log(movies);

router.get('/',(req,res)=>{
    res.json(movies);
});

router.post('/',(req,res)=>{ //Resive un objeto del cliente
    const  {tittle, director, year, rating } = req.body;
    if(tittle && director && year && rating){
        res.json('saved');
    }
    else{
        res.send('Wrong Request');
    }
    res.send('Received');
});

module.exports =router;