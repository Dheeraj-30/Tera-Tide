import express from 'express';
import { getWorkshops, getWorkshopById } from '../controllers/workshopController.js';

const router = express.Router();

// Matches GET requests to /api/workshops
router.route('/').get(getWorkshops);

// Matches GET requests to /api/workshops/:id
router.route('/:id').get(getWorkshopById);

export default router;