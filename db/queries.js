import { pool } from "./index.js"

const find = async () => {
    const QUERY = "SELECT * FROM products";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY)
        // console.log(result)
        return result[0];
    } catch (error) {
        console.log("Error occurred while finding all records",error);
        throw error;
    }
}

const findById = async (id) => {
    const QUERY = "SELECT * FROM products WHERE id = ?";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY,[id])
        // console.log(result)
        return result[0];
    } catch (error) {
        console.log("Error occurred while findById record",error);
        throw error;
    }
}

const create = async (title, description, price) => {
    const QUERY = `INSERT INTO products 
    (title, description, price)
    VALUES(?,?,?)`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY,[title, description, price])
        // console.log(result)
        return result;
    } catch (error) {
        console.log("Error occurred while creating new record",error);
        throw error;
    }
}

const update = async (title, description, price,id) => {
    const QUERY = `UPDATE products 
        SET title = ?, description = ?, price = ?
        WHERE id = ?`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY,[title, description, price,id])
        // console.log(result)
        return result[0];
    } catch (error) {
        console.log("Error occurred while updating record",error);
        throw error;
    }
}

const deleteRecord = async (id) => {
    const QUERY = `DELETE FROM products
        WHERE id = ?`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY,[id])
        // console.log(result)
        return result[0];
    } catch (error) {
        console.log("Error occurred while DELETING record",error);
        throw error;
    }
}

export {
    find,
    findById,
    create,
    update,
    deleteRecord
}