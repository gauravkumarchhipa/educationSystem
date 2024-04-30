import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(
    process.env.NODE_ENV === "development"
      ? process.env.MONGO_URI_LOCAL
      : process.env.MONGO_URI
  );
  console.log(`MongoDB connect with ${connection?.host}`);
};
