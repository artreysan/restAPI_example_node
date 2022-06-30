//Container of routes

const { Router } = require('express'); //Desde express requiero el metodo llamado Router
const router = Router();  //Cuando ejecuto Router(); lo guardo en un constante objeto llamado router

router.get('/', (req,res)=>{
    res.json({"Title":"Hello world"});
});

router.get('/test', (req,res)=>{
    const info = {
        "name":"Arturo",
        "website":"In Construction"
    }
    res.json(info);
});

//Exportamos el objeto
module.exports = router;