import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  mongo: process.env.MONGO_URI || "mongodb://localhost:27017/mernproject",
  secret: process.env.JWT_SECRET || "Your secret key",
};

export default config;
