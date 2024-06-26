// import { Pool, QueryResult } from "pg";
// import { Signale } from "signale";

// const signale = new Signale();

// const config = {
//   user: "fl0user",
//   host: "ep-billowing-bird-a5yp3y4v.us-east-2.aws.neon.fl0.io",
//   database: "movil",
//   password: "R5ZGa8tKdpTw",
//   port: 5432,
//   ssl: {
//     rejectUnauthorized: false, // Agrega esta línea para aceptar certificados autofirmados
//     require: true
//   }
// };

// const pool = new Pool(config);

// export async function query(sql: string, params?: any[]): Promise<QueryResult> {
//   try {
//     const conn = await pool.connect();
//     signale.success("Conexión exitosa a la BD");
//     const result = await conn.query(sql, params);
//     conn.release();
//     return result;
//   } catch (error) {
//     signale.error(error);
//     throw error; // Cambio aquí
//   }
// }


import mysql from "mysql2/promise";
import { Signale } from "signale";

const signale = new Signale();

const config = {
    host: 'database-1.cfyii6aowla3.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    database: 'vaquito',
    password: '12345678',
    waitForConnections: true,
    connectionLimit: 10,
};

// Crear el pool de conexiones
const pool = mysql.createPool(config);


export async function query(sql: string, params?: any[]) {
    try {
        const conn = await pool.getConnection();
        signale.success("Conexión exitosa a la BD");
        const result = await conn.execute(sql, params);
        conn.release();
        return result;
    } catch (error) {
        console.log(process.env.DB_HOST);
        signale.error(error);
        return null;
    }
}


