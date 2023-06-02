import {createPool} from 'mysql2/promise';
import {
    DB_HOST ,
    DB_PORT ,
    DB_USER ,
    DB_PASSWORD ,
    DB_DATABASE
} from './config.js'
export const pool = createPool({
    host: DB_HOST,          //Host de la base de datos
    user: DB_USER,               //Usuario
    password : DB_PASSWORD,    //Contraseña    
    port : DB_PORT,                //Puerto
    database : DB_DATABASE      //Base de Datos
});