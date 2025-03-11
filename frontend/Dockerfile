FROM node:lts AS build-stage


# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Собираем проект
RUN npm run build

# Открываем порт 3000
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "run", "start"]
