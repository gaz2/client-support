import express from 'express';
import cors from 'cors';
import { connectDB } from './utils/db';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Подключение к MongoDB
connectDB();

// Middleware
//app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userRoutes);


// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
