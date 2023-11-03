import express from 'express';
import routerProduct from './product.router.js';
import routerAuth from './auth.router.js';
import routerCategory from './category.router.js';
import routerUpload from './uploadfiles.router.js';

const router = express.Router();

router.use('', routerProduct);
router.use('/auth', routerAuth);
router.use('', routerCategory);
router.use('', routerUpload);

export default router