import express from 'express'
import { createProduct, deleteFakeProduct, deleteRealProduct, getAllProduct, getDetailProduct, restoreProduct, updateProduct } from '../controllers/product.controller.js';
import { checkPermission } from '../middlewares/checkPermission.js';
const routerProduct = express.Router()

routerProduct.get('/products', getAllProduct);
routerProduct.get('/products/:id', getDetailProduct);
routerProduct.patch('/products/:id', checkPermission, updateProduct);
routerProduct.post('/products/', checkPermission, createProduct);
routerProduct.patch('/deleteFakeProduct/:id', checkPermission, deleteFakeProduct);
routerProduct.patch('/restoreProduct/:id', checkPermission, restoreProduct);
routerProduct.delete('/products/:id', checkPermission, deleteRealProduct);

export default routerProduct