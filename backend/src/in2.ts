import https from 'https';
import fs from 'fs';
import express from 'express';
import type { Request, Response } from 'express';

const app = express();

// Типизация объекта options
interface ServerOptions {
  key: Buffer;
  cert: Buffer;
}

// Чтение SSL-сертификатов
const options: ServerOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/mirup.ru/fullchain.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/mirup.ru/privkey.pem'),
};

// Обработчик GET-запроса для /api/users
app.get('/api/users', (req: Request, res: Response) => {
  res.json({ message: 'Users list' });
});

// Создание HTTPS-сервера
https.createServer(options, app).listen(3001, () => {
  console.log('Backend running on https://localhost:3001');
});