import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import User from './src/models/User.js';
import Workshop from './src/models/Workshop.js';
import Product from './src/models/Product.js';

dotenv.config();

// Connect to MongoDB
await connectDB();

const importData = async () => {
  try {
    // 1. Clear out any existing data to start fresh
    await Workshop.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Database cleared. Adding new Indian artisan data...');

    // 2. Create Artisans (Users)
    const artisans = await User.insertMany([
      {
        name: 'Khatri Family',
        email: 'khatri@example.com',
        role: 'artisan',
        location: 'Kutch, Gujarat, India',
        bio: 'Master dyers specializing in natural Indigo and Ajrakh block printing for over 9 generations.'
      },
      {
        name: 'Studio Maati',
        email: 'maati@example.com',
        role: 'artisan',
        location: 'Jaipur, Rajasthan, India',
        bio: 'A collective of traditional terracotta potters bringing modern design to ancient wheel techniques.'
      },
      {
        name: 'Varanasi Weavers Guild',
        email: 'weavers@example.com',
        role: 'artisan',
        location: 'Varanasi, Uttar Pradesh, India',
        bio: 'Preserving the intricate art of handloom silk and cotton weaving along the ghats of the Ganges.'
      }
    ]);

    // 3. Create Workshops (Linked to the Artisans we just created)
    await Workshop.insertMany([
      {
        title: 'Indigo Dyeing & Block Print',
        artisan: artisans[0]._id, // Links to Khatri Family
        description: 'Learn the complex chemistry and art of natural indigo vats. Print your own scarf using heritage carved wooden blocks.',
        category: 'Weaving & Textiles',
        location: 'Kutch, Gujarat, India',
        price: 120,
        duration: '6 hours',
        maxGuests: 8,
        images: ['https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800&auto=format&fit=crop']
      },
      {
        title: 'Terracotta Wheel Pottery',
        artisan: artisans[1]._id, // Links to Studio Maati
        description: 'Feel the earth in your hands. Master the basics of centering and pulling walls on a traditional spinning wheel.',
        category: 'Pottery',
        location: 'Jaipur, Rajasthan, India',
        price: 85,
        duration: '4 hours',
        maxGuests: 4,
     images: ['https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop']
      }
    ]);

    // 4. Create Products (Linked to Artisans)
    await Product.insertMany([
      {
        name: 'Terracotta Ridge Vase',
        artisan: artisans[1]._id, // Links to Studio Maati
        description: 'A hand-thrown, unglazed terracotta vase with organic ridge texturing.',
        price: 85,
        category: 'Ceramics',
        stockQuantity: 12,
        images: ['https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800&auto=format&fit=crop']
      },
      {
        name: 'Handloom Cotton Throw',
        artisan: artisans[2]._id, // Links to Weavers Guild
        description: 'A luxuriously soft, heavy-weave cotton throw blanket woven on traditional wooden looms.',
        price: 120,
        category: 'Textiles',
        stockQuantity: 5,
       images: ['https://images.unsplash.com/photo-1584346733221-5079a49938b8?q=80&w=800&auto=format&fit=crop']
      }
    ]);

    console.log('✅ Data successfully imported!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error importing data: ${error.message}`);
    process.exit(1);
  }
};

importData();