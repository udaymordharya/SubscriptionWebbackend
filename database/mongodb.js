import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env.js';



if (!DB_URI) {
  throw new Error('Database URI is not defined in the environment variables');
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('Subscription Tracker DATABASE is connected to the ${NODE_ENV}');

    }
    catch (error){
        console.error('Error connecting to the database:', error);
        process.exit(1); 
    }
}    
export default connectToDatabase;