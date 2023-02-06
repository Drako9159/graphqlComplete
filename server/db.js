import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
export async function connectDB() {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MONGO_DB_CONNECTED: ${conn.connection.name}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    //shutdown process, 1 for error, 0 is ok
    process.exit(1);
  }
}
