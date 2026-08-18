import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional because Google OAuth users won't have a password
  googleId: { type: String }, // Stores the Google Auth ID
  role: { 
    type: String, 
    enum: ['traveler', 'artisan', 'admin'], 
    default: 'traveler' 
  },
  profilePicture: { type: String },
  // Artisan specific fields (only filled if role is 'artisan')
  bio: { type: String },
  location: { type: String } // e.g., "Jaipur, Rajasthan"
}, { timestamps: true });

export default mongoose.model('User', userSchema);