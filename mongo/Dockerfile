FROM mongo:latest

# Копируем скрипт инициализации в контейнер
COPY init.js /docker-entrypoint-initdb.d/

# Скрипт init.js будет выполнен автоматически при первом запуске контейнера