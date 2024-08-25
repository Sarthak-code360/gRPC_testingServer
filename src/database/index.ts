import mongoose from 'mongoose';

export default async () => {
  try {
    const database = await mongoose.connect(process.env.MONGODB_CONFIG || "");
    console.info('Database Connected');
    return database;
  } catch (err: any) {
    console.error(`Error Connecting database: ${err.message}`);
    throw err;
  }
};
