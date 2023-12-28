import express from 'express'
import cors from 'cors'

//Rutas importación
import indexRoutes from '../server/routes/index.routes.js' //llamado a la ruta index.routes
import taskRoutes from '../server/routes/tasks.routes.js' //Se importan las rutas y funciones de tasks.routes

const app = express(); //se guarda la información de express en app

app.use(cors({
    origin: 'http://localhost:3000'  //aqui se coloca que el servidor localhost con puerto 3000 se puede conectar
})); //esto dice que cualquier servidor se puede conectar, por ende para mayor seguridad se puede colocar la url

app.use(express.json()); //poder leer los json body enviados por el post


app.use(indexRoutes) //que la aplicación tenga las rutas de indexroutes
app.use(taskRoutes) //se agregan las rutas de taskRoutes


app.listen(4000); //que escuche en el puerto 3000 para la ejecución
console.log(`Server is running on port 4000`) //para verificar





