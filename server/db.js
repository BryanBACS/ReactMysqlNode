//Conexión con mysql
import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host:'localhost', //aqui se trae el puerto por defecto
    port: 8080, //se asigna el puerto, en este caso como tengo en uso el 3306 hago uso del 8080
    user: 'root', //nombre de super root de mysql
    password: '123456789', //password agregada en string
    database: 'taskdb' //nombre
})