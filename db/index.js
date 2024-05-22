import { createPool } from 'mysql2/promise';
import { config } from "dotenv";
config();

const pool = createPool({
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE_NAME,
    user: process.env.MYSQL_USER
})

const connectToDB = async () => {
    try {
        // console.log("hello")
        // console.log(await pool.getConnection())
        await pool.getConnection();
        // console.log(conn)
        console.log("Mysql Connection Successfull!!!")
    } catch (error) {
        console.log("Database Connection failed!!!!",error);
        throw error;
    }
}

export { connectToDB, pool}