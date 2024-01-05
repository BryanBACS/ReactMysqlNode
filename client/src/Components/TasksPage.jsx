import React from "react"
import {GetTasksRequest} from '../api/task.api'
import { useEffect ,useState} from "react"; //esto permite que se ejecute algo inicialmente, en este caso que se ejecute altiro el traer las tareas
import MostrarTask from "./MostrarTaks";
import { useTask } from "../context/TaskProvider.jsx";

export default function TaskPage(){

    const {tasks, loadTasks} = useTask() //aqui extraemos las tareas

    //const [tasks,  setTask] = useState([])//aqui se van a ir guardando las tareas conseguidas del useEffect, como el response da un arreglo, por eso es un arreglo
    
    useEffect(() =>{ //al arrancar la página empezaria primero este codigo, por ello aqui es buen lugar para la petición de datos
        loadTasks() //se ejecuta la función
    }, [])

    function renderContenidoPrincipal(){ //se dejo de esta forma para llevar a cabo una validación anteriormente
        
        if (tasks.length ===0 ){ //validación en caso de no existir tareas
            return <h1> No task aún</h1>
        } 
        
        return tasks.map(task =>(
            <MostrarTask task={task} key={task.id}/> //{/**esto es para quitar el error del key */}, además se llama a otra componente para mas ordenado
        ))

    }

    return(
        <div>
            <h1>Task</h1>
            {/**listar tareas */}
            {renderContenidoPrincipal()} {/** se llama a la función de mostrar */}
        </div>
    )
}