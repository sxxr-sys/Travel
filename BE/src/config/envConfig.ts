// /src/config/envConfig.ts
import dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
    DB_URI: process.env.MONGODB_URL || "mongodb://localhost:27017/myapp",
    JWT_SECRET: process.env.JWT_SECRET || "your_jwt_secret",
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1h",
    PORT: process.env.PORT || 8000,
};
