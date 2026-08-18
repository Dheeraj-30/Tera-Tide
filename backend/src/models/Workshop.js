import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artisan: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Links to the artisan hosting it
    required: true 
  },
  description: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Pottery', 'Weaving & Textiles', 'Culinary', 'Painting', 'Woodwork'] 
  },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String }, // e.g., "4 hours", "2 Days"
  maxGuests: { type: Number, default: 6 },
  images: [{ type: String }], // Array of image URLs
  includes: [{ type: String }] // e.g., ["All Materials", "Refreshments"]
}, { timestamps: true });

export default mongoose.model('Workshop', workshopSchema);