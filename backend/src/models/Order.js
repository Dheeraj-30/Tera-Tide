import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  itemType: { 
    type: String, 
    enum: ['Workshop', 'Product'], 
    required: true 
  },
  itemId: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    refPath: 'itemType' // Dynamically references either Workshop or Product model
  },
  quantity: { type: Number, default: 1 }, // Guests for workshops, quantity for products
  totalAmount: { type: Number, required: true },
  bookingDate: { type: Date }, // Only applicable if itemType is 'Workshop'
  paymentStatus: { 
    type: String, 
    enum: ['Pending', 'Paid', 'Failed', 'Cash On Delivery'], 
    default: 'Pending' 
  },
  orderStatus: { 
    type: String, 
    enum: ['Confirmed', 'Shipped', 'Delivered', 'Completed', 'Cancelled'], 
    default: 'Confirmed' 
  }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);