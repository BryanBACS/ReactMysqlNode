import React from "react"

//MAS ORDENADO

export default function MostrarTask({task}){ //recibe tareas para que empieze a recorrer
    return(
        <div> 
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <span>{task.done === 1 ? "Tarea hecha ✔️" : "Tarea no hecha ❌"}</span>
            <span>{task.createAt}</span>
            <button>Delete</button>
            <button>Editar</button>
        </div>
    )
}