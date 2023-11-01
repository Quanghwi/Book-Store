import express from 'express';
import routerProduct from './product.router.js';
import routerAuth from './auth.router.js';

const router = express.Router();

router.use('', routerProduct);
router.use('/auth', routerAuth)

export default router