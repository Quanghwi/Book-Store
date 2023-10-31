import express from 'express';
import routerProduct from '../routers/product.router.js';

const router = express.Router();

router.use('/products', routerProduct)

export default router