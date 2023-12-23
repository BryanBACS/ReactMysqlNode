import React from "react"
import {Route,Routes} from 'react-router-dom' //para crear multiples rutas
import TaskPage from './Components/TasksPage' //para visualizar tareas
import TaskForm from './Components/TaskForm'
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div>
        <Routes> {/*Creo varias rutas */}
          <Route path="/" element={<TaskPage />} /> {/*Primera ruta para visualizar tareas*/}
          {/*Dice que si ingresa a la ruta "/" que muestre el elemento o componente:TaskPage */}
        
          {/*Segunda ruta para crear tareas*/}
          <Route path="/new" element={<TaskForm/>} />

          {/*ruta en caso de introducir una ruta no valida*/}
          <Route path="*" element={<NotFound/>} /> {/*Para todas las páginas(*) que muestre NotFound*/}
        </Routes>
      </div>
      
    </div>
    
  );
}

export default App;
