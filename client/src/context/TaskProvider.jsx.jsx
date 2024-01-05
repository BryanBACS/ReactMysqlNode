import { createContext, useContext, useState } from "react";
import { GetTasksRequest, DeleteTaskRequest, createTaskRequest, getTaskRequest, UpdateTaskRequest} from "../api/task.api";
import { TaskContext } from "./TaskContext";

//HOOK PARA PODER LLAMAR TODO ESTO DE MAYOR FACILIDAD
//de esta forma se tiene todos los componentes conectados
export const useTask = () => {
    const context = useContext(TaskContext) //se usa el contexto y devuelva el resultado

    if (!context){ //si el contexto no existe, es decir no esta dentro de TaskContextProvider en app
        throw new Error("El componente debe estar fuera del TaskContextProvider")
    }
    //Sino
    return context; //se devuelve el contexto que es la conexión en todos lados
}

//esto lo que hace es agrupar los componentes, pero para interactuar con esto hace uso del TaskContext(createContext)
//entonces aqui se entrega todos los contextos hijos
//donde se entrega los children(hijos) que serian los componentes que queremos que ingresa
export const TaskContextProvider = ({children}) =>{

    const [tasks,  setTask] = useState([])//aqui se van a ir guardando las tareas conseguidas del useEffect, como el response da un arreglo, por eso es un arreglo

    //función para cargar tareas
    async function loadTasks(){//se crea la función asyncrona
        const response = await GetTasksRequest()
        setTask(response.data) //se guarda todo el arreglo en task
    }

    //función para eliminar tareas
    const deleteTask = async (id) => { //Función para eliminar por id
        try { //en caso de andar bien
            const respuesta = await DeleteTaskRequest(id);
            console.log(respuesta)
            console.log("BORRADO")
            //despues de eliminar que recorra con un filter
            //y que establece las tareas que dice
            //de cada tarea(task =>) que deje las la id diferente distintas a la id que se va eliminar
            //de esta forma se filtra todas las tareas que sean diferentes a id(id a eliminar)

            setTask(tasks.filter(task => task.id !==id))
            //de esta forma se actualiza la página sin tener que darle a reload.
            //y asi se establece como nuevas tareas
            //y como ambas funciones se llaman en el mismo lugar tambien se actualiza

        } catch (error) { //en caso de fallar
            console.log(error) 
        }
    }
    const createTask = async (task) =>{
        try{ //al ser asincrono se maneja los errores mediante el try catch
            const response = await createTaskRequest(task); //recordar que los valores son las tareas(el title y el description)
            //esto devuelve una respuesta
            console.log(response);

            //esto en caso de agregar directamente a lista para no tener que llamar todo el rato al query de tareas,
            //esto es en caso de por ejemplo tener todo en la misma pagina y no tener que actualizar la web, pero como de esa pagina de create nos vamos al inicio en esa carga
            //con el useEffect no le afecta, pero es en caso de necesitarlo.
            //setTask([...tasks, response.data]) //que tome todas las copias de las tareas y agregue la nueva
        }catch(error){
            //en caso de que ocurra un error que se muestre
            console.log(error)
        }
    }

    //conseguir la tarea en especifica, obtener una unica tarea la cual se va a editar posteriormente
    const getTask = async (id) =>{
        try {
            const response = await getTaskRequest(id);
            return response.data //se entrega la información del get conseguido
        } catch (error) {
            //en caso de que ocurra un error que se muestre
            console.log(error)
        }
    }

    //Editar tarea
    const updateTask = async (id, nuevosCampos) =>{
        try {
            const response = await UpdateTaskRequest(id, nuevosCampos);
            console.log(response) //ver en consolta
        } catch (error) {
            //en caso de que ocurra un error que se muestre
            console.log(error)
        }
    }

    return ( //que retorne todo esto
        <TaskContext.Provider value ={{tasks: tasks, loadTasks: loadTasks, deleteTask, createTask, getTask, updateTask}}> {/**Aqui se asigna el valor a exportar que en este caso son las tareas, como multiples valores o funciones por ello las {} */}
    |       {children} {/**esto seria cualquier componente que queramos que acceda */}
        </TaskContext.Provider>
    );
}

