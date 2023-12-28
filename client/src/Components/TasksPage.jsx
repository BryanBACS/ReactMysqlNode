import React from "react"
import {GetTasksRequest} from '../api/task.api'
import { useEffect ,useState} from "react"; //esto permite que se ejecute algo inicialmente, en este caso que se ejecute altiro el traer las tareas
import MostrarTask from "./MostrarTaks";

export default function TaskPage(){
    const [tasks,  setTask] = useState([])//aqui se van a ir guardando las tareas conseguidas del useEffect, como el response da un arreglo, por eso es un arreglo
    
    useEffect(() =>{ //al arrancar la página empezaria primero este codigo, por ello aqui es buen lugar para la petición de datos
        async function loadTasks(){//se crea la función asyncrona
            const response = await GetTasksRequest()
            setTask(response.data) //se guarda todo el arreglo en task
        
        }
        loadTasks() //se ejecuta la función

    }, [])

    

    return(
        <div>
            <h1>Task</h1>
            {/**listar tareas */}
            {tasks.map(task =>(
                <MostrarTask task={task} key={task.id}/> //{/**esto es para quitar el error del key */}, además se llama a otra componente para mas ordenado
            ))}
        </div>
    )
}