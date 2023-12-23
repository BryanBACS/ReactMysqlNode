import {Router} from 'express'
import {pool} from '../db.js';

const router = Router(); //llamado función para get

router.get("/ping", async (req, res) =>{ //get en la dirección ping que hace: 
    const resultado = await pool.query('SELECT 1 + 1 as result') //crea una columna 1 +1(2) y guardalo en una columna result
    console.log(resultado); //que se muestre el resultado en consola
    res.json('ping'); //y que la respuesta se muesre como estilo json
});

export default router;