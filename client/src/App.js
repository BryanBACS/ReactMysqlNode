import React from "react"
import {Route,Routes} from 'react-router-dom' //para crear multiples rutas
import TaskPage from './Components/TasksPage' //para visualizar tareas
import TaskForm from './Components/TaskForm'
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";

import { TaskContextProvider } from "./context/TaskProvider.jsx";//Aqui llamamos al context

function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div> 
        <TaskContextProvider>{/**toda la aplicación va a estar dentro del context para que este todo conectado */}
          <Routes> {/*Creo varias rutas */}
            <Route path="/" element={<TaskPage />} /> {/*Primera ruta para visualizar tareas*/}
            {/*Dice que si ingresa a la ruta "/" que muestre el elemento o componente:TaskPage */}
          
            {/*Segunda ruta para crear tareas*/}
            <Route path="/new" element={<TaskForm/>} />

             {/*tercera ruta para editar tareas con una id dinamica y con el mismo formulario de creación*/}
             <Route path="/edit/:id" element={<TaskForm/>} />

            {/*ruta en caso de introducir una ruta no valida*/}
            <Route path="*" element={<NotFound/>} /> {/*Para todas las páginas(*) que muestre NotFound*/}
          </Routes>
        </TaskContextProvider> 
      </div>
    </div>
  );
}

export default App;
