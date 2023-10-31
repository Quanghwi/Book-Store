import express from 'express'
import { create, getAll, getDetail } from '../controllers/product.controller.js';
const routerProduct = express.Router()

routerProduct.get('/', getAll);
routerProduct.get('/:id', getDetail);
routerProduct.post('/', create);
// routerProduct.put('/', update);
// routerProduct.delete('/:id', remove);

export default routerProduct