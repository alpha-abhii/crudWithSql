import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getAllProducts, updateProduct } from "../handlers/index.js";

const router = Router();

router.route("/").get(getAllProducts);
router.route("/:id").get(getProduct);
router.route("/create").post(createProduct);
router.route("/update/:id").put(updateProduct);
router.route("/delete/:id").delete(deleteProduct)


export default router;