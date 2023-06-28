import { Router } from "express";
import productContoller from "../Controllers/productControllers.js";

const productRoute = Router()

productRoute.get('/', productContoller)
productRoute.get('/products',productContoller)

export default productRoute