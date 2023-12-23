import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <div>
            <h1>React mysql</h1>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                    
                </li>
                <li>
                    <Link to="/new">Crear tarea</Link>
                </li>
            </ul>
        </div>
    )
}