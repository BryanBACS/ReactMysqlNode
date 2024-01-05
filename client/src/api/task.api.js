//Función para la conexión de peticiones http al backend
import axios from 'axios' //libreria para la conexión y recibir y enviar datos al backend


export const createTaskRequest = async (task) => { //función para crear una tarea, esta función recibe el objeto tarea a crear(JSON) por parte de la vista
    //al ser llamado al backend se agrega el async con el await
    //y tarea es enviado al backend a traves de axios
    return await axios.post('http://localhost:4000/tasks',task) //se envia un post hacia la ruta del backend que crea la tarea, recordar 
    //que la ruta es asignada en server/routes/task.routes.js estan asignadas las rutas
    //en este caso es esa ruta pero con post se crea, esto se vio con Postman.
    //además al enviar el post lo que se envia es el objeto task que es un JSON que el backend recibe
}

export const GetTasksRequest = async () =>{
    return await axios.get('http://localhost:4000/tasks') //aqui no se envia datos, sino traemos el arreglo de tareas
    //que al llamar haga la operación y la devuelva
}

//Petición delete al backend
//Aqui recibo la id para borrar ese id
export const DeleteTaskRequest  = async (id) =>{
    return await axios.delete(`http://localhost:4000/tasks/${id}`);
}


//obtener una id en especifico
export const getTaskRequest = async (id) =>{
    return await axios.get(`http://localhost:4000/tasks/${id}`)
}

//Petición actualizar al backend
//Aqui recibo la id para actualizar la información de ese id
//de esta forma segun la id busca la tarea y le envia los nuevosCampos al backend
export const UpdateTaskRequest = async (id, nuevosCampos) =>{
    return await axios.put(`http://localhost:4000/tasks/${id}`, nuevosCampos)
}