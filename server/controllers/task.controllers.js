import {pool} from '../db.js' //se llama a la base de datos

//TODAS LAS FUNCIONES SE EXPORTAN DEBIDO QUE SON LLAMADAS POR LAS RUTAS

//Función obtener todas las tareas. Aqui al usuario devuelve las tareas
export const getTasks = async (req,res) =>{ //como responde se hace uso de request y response(req y res)
    try { //esto sirve para manejar los errores, asi en caso de que haya un error no se caiga todo el servicio, con try y catch
        const [result] = await pool.query("SELECT * FROM task ORDER BY createAt ASC") //QUe devuelva todo dentro de la tabla task en orden ascendente de CreateAt(cuando se creo la tarea)
        res.json(result) //que me devuelva un json con todo lo de dentro de la lista tareas
        //en este caso es solo tareas ya que devuelve un arreglo con todo y to quiero que muestre todoA
    } catch (error) { //por ende en caso de existir un error que lo capture y devuelva algo en concreto
        res.status(500).json({message: error.message})
    }
}

//Función para obtener una tarea en especifico
export const getTask =  async (req,res) =>{ //como responde se hace uso de request y response(req y res)
    try { //esto sirve para manejar los errores, asi en caso de que haya un error no se caiga todo el servicio, con try y catch
        console.log(req.params.id) //de esta forma se obtiene el valor de la id que se agrega en la url, como /tareas/1, aqui se entrega el 1
        const [response] = await pool.query("SELECT * FROM task WHERE id = ?", [req.params.id]) //Muestra todos los valores de la columna task donde la id sea igual al valor que te entrego
        //por lo tanto ese valor de id de la ruta se le entrega y busca la tarea que tenga esa id
        if (response.length === 0){ //En caso de que la lista devuelta este vacia(al ser una lista se ve que el largo de la lista sea 0)
            return res.status(404).json({message: "tarea no encontrada"}) //que muestre que no existe esta tarea, con un error 404
        }
        res.json(response[0]) //que muestre los valores que tengan la id en especifico y como es solo un valor que muestre solo el 0
        //por ello al ser una busqueda por id solo me devuelve un valor, por ende que muestre el arreglo 0 que es el valor unico que devolvio
        console.log(response[0])
    } catch (error) {//por ende en caso de existir un error que lo capture y devuelva algo en concreto
        res.status(500).json({message: error.message})
    }
}

//Función para crear una tarea
export const createTask = async (req,res) =>{ //como responde se hace uso de request y response(req y res)
    try { //esto sirve para manejar los errores, asi en caso de que haya un error no se caiga todo el servicio, con try y catch
        //console.log(req.body)
        const {title, description} = req.body; //Se guarda la información ingresada desde el body
        const [respuesta] = await pool.query( //la respuesta devuelta es una lista de valores por ello la respuesta se guarda como [] lista
            "INSERT INTO task(title,description) VALUES (?, ?)", //Con await al ser conexión a la base de datos
            [title, description]
        ); //se inserta 
        //de esta forma dentro de la tabla task a las variables title y description se ingresa los valores de values, 
        //que se agrega mediante ?(valor 1) y ?(valor 2), los cuales son y se agregan asi [title, description]
        res.json({ //se va a retornar una respuesta tipo json que va a tener
            id: respuesta.insertId, 
            title,
            description
        })
        console.log(respuesta)
        //res.send('Creando tareas')
        
    } catch (error) {//por ende en caso de existir un error que lo capture y devuelva algo en concreto
        res.status(500).json({message: error.message})
    }
};

//Función para Actualizar tarea
export const updateTask = async (req,res) =>{ //como responde se hace uso de request y response(req y res)
    try { //esto sirve para manejar los errores, asi en caso de que haya un error no se caiga todo el servicio, con try y catch
        const [response] = await pool.query("UPDATE task SET ? WHERE id = ?",[req.body,req.params.id]) 
        //esta segunda forma es mejor, porque en caso de que envie un solo parametro solo se cambia ese, si envia 2 cambia los 2, no es fijo

        // otra forma: const [response] = await pool.query("UPDATE task SET title=?, description=? WHERE id = ?",[title,description,req.params.id]) 
        //modifica en la tabla task los valores title con ?, description con ? que tengan la id = ?

        if (response.affectedRows === 0){
            return res.status(404).json({message: "Tarea no encontrada"})
        }
        console.log(response)
        res.json(response)
        
    } catch (error) {//por ende en caso de existir un error que lo capture y devuelva algo en concreto
        res.status(500).json({message: error.message})
    }
}

//Función para BORRAR una tarea
export const deleteTask =  async (req,res) =>{ //como responde se hace uso de request y response(req y res)
    try {//esto sirve para manejar los errores, asi en caso de que haya un error no se caiga todo el servicio, con try y catch
        console.log(req.params.id) //id obtenida de la url localhost/task/1 por ejemplo
        const [response] = await pool.query("DELETE FROM task WHERE id = ?", [req.params.id])
        //Elimina el valor dentro de tareas donde la id sea igual al valor entregado (req.params.id)
        console.log(response)
        if (response.affectedRows === 0){ // Como el response entrega varios valores de filas afectadas, id, etc..
            //lo que se hace es que en caso de que no se haya afectado nada(ningun cambio como borrado), que muestre tarea no encontrada 
            return res.status(404).json({message:"tarea no encontrada"}) 
            //que devuelva un error 404 con un mensaje de no encontrado
            //Además un return para que no se muestra lo siguiente del if
        }
        return res.status(204).json({message: "Tarea borrada"}) //Enviar mensaje de tarea borrada con 204
        
    } catch (error) {//por ende en caso de existir un error que lo capture y devuelva algo en concreto
        res.status(500).json({message: error.message})
    }
}





