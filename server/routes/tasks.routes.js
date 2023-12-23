import { Router } from "express"; //para los get y post
import { getTask,
         getTasks,
         createTask,
         updateTask,
         deleteTask
        } from "../controllers/task.controllers.js";

const router = Router(); //se guarda en una variable

//Ruta para obtener las tareas
router.get('/tasks', getTasks) //se obtiene las tareas mediante un get

//Obtener una tarea con una id en especifico:
router.get('/tasks/:id', getTask)

//este sirve para crear tareas
router.post('/tasks',createTask)

//Modificar una tarea con una id en especifico:
router.put('/tasks/:id',updateTask)

//Eliminar una tarea con una id en especifico:
router.delete('/tasks/:id',deleteTask)


export default router //que devuelva todo lo llamado de router


