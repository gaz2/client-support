import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
const mongooseOptions: mongoose.ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect('mongodb://mongo:27017/mydatabase', mongooseOptions)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Маршруты
app.use('/api', routes);

// Запуск сервера
app.listen(3001, () => {
  console.log('Server is running on port 3001');
}).on('error', (error) => {
  console.error('Server error:', error);
});