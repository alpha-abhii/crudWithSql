import { create, deleteRecord, find, findById, update } from "../db/queries.js"


export const getAllProducts = async (req,res) => {
    try {
        const products = await find();
        return res.status(200).json({products});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error Occurred"})
    }
}
export const getProduct = async (req,res) => {
    const id = req.params.id;
    try {
        const product = await findById(id)
        return res
            .status(201)
            .json({product})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error occured while finding product"})
    }
}
export const createProduct = async (req,res) => {
    const {title,description,price} = req.body;
    if(!title || !description || !price){
        return res
            .status(403)
            .json({msg: "Input parameters were not provided"});
    }

    try {
        const products = await create(title,description,price);
        return res
            .status(201)
            .json({products})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error occured while creating product"})
    }
}
export const updateProduct = async (req,res) => {
    const {title,description,price} = req.body;
    const id = req.params.id;
    if(!title || !description || !price){
        return res
            .status(403)
            .json({msg: "Input parameters were not provided"});
    }

    try {
        const products = await update(title,description,price,id);
        return res
            .status(200)
            .json({products})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error occured while updating product"})
    }
}
export const deleteProduct = async (req,res) => {
    const id = req.params.id;
    if(!id){
        return res
            .status(403)
            .json({msg: "Product with given id doesnot exist in db"});
    }

    try {
        const products = await deleteRecord(id);
        return res
            .status(200)
            .json({products})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error occured while updating product"})
    }
}