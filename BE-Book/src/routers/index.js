import express from 'express';
import routerProduct from './product.router.js';

const router = express.Router();

router.use('', routerProduct)

export default router