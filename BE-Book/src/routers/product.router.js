import express from 'express'
import { createProduct, deleteFakeProduct, getAllProduct, getDetailProduct, restoreProduct, updateProduct } from '../controllers/product.controller.js';
const routerProduct = express.Router()

routerProduct.get('/products', getAllProduct);
routerProduct.get('/products/:id', getDetailProduct);
routerProduct.patch('/products/:id', updateProduct);
routerProduct.post('/products/', createProduct);
routerProduct.patch('/deleteFakeProduct/:id', deleteFakeProduct);
routerProduct.patch('/restoreProduct/:id', restoreProduct);
// routerProduct.delete('/:id', remove);

export default routerProduct