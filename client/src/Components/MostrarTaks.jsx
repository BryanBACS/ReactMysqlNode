import React from "react"
import { DeleteTaskRequest } from "../api/task.api"
//MAS ORDENADO
import { useTask } from "../context/TaskProvider.jsx";
import { useNavigate } from "react-router-dom";


export default function MostrarTask({task}){ //recibe tareas para que empieze a recorrer
    
    const {deleteTask} = useTask()
    const navigate = useNavigate()

    

    return(
        <div>  {/**Para formatear */}
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <span>{task.done === 1 ? "Tarea hecha ✔️" : "Tarea no hecha ❌"}</span>
            <span>{task.createAt}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
        </div>
    )
}