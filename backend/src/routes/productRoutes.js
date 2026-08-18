import express from 'express';
import { getProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

// Matches GET requests to /api/products
router.route('/').get(getProducts);

// Matches GET requests to /api/products/:id
router.route('/:id').get(getProductById);

export default router;