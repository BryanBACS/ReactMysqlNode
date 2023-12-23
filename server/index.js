import express from 'express'
import {PORT} from './config.js'

//Rutas importación
import indexRoutes from '../server/routes/index.routes.js' //llamado a la ruta index.routes
import taskRoutes from '../server/routes/tasks.routes.js' //Se importan las rutas y funciones de tasks.routes

const app = express(); //se guarda la información de express en app

app.use(express.json()) //poder leer los json body enviados por el post


app.use(indexRoutes) //que la aplicación tenga las rutas de indexroutes
app.use(taskRoutes) //se agregan las rutas de taskRoutes


app.listen(PORT); //que escuche en el puerto 3000 para la ejecución
console.log(`Server is running on port ${PORT}`) //para verificar





