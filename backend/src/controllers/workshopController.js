import Workshop from '../models/Workshop.js';
import User from '../models/User.js';

// @desc    Fetch all workshops
// @route   GET /api/workshops
// @access  Public
export const getWorkshops = async (req, res) => {
  try {
    // The .populate() method replaces the artisan ID with the actual User details (like name and location)
    const workshops = await Workshop.find({}).populate('artisan', 'name location profilePicture');
    
    res.status(200).json(workshops);
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching workshops', error: error.message });
  }
};

// @desc    Fetch a single workshop by ID
// @route   GET /api/workshops/:id
// @access  Public
export const getWorkshopById = async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id).populate('artisan', 'name location bio profilePicture');
    
    if (workshop) {
      res.status(200).json(workshop);
    } else {
      res.status(404).json({ message: 'Workshop not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};