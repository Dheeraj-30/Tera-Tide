import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artisan: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { 
    type: String, 
    enum: ['Ceramics', 'Textiles', 'Jewelry', 'Woodwork'] 
  },
  stockQuantity: { type: Number, required: true, default: 1 },
  images: [{ type: String }]
}, { timestamps: true });

export default mongoose.model('Product', productSchema);