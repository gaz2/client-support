import express from 'express';
import cors from 'cors';
import { connectDB } from './utils/db';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';
import type { Request, Response, NextFunction } from 'express';


dotenv.config();
// Подключение к MongoDB
connectDB();
export const corsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
};



const app = express();
app.use(corsMiddleware);
const PORT = process.env.PORT || 3001;


app.use(express.json());

// Routes
app.use('/api/users', userRoutes);


// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
