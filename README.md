# Steam Docker Project

## Описание

Този проект съдържа две услуги:

- Backend услуга: Node.js Express API, свързан с MongoDB.
- MongoDB база данни, използваща официалния Mongo контейнер.

## Как да стартирате

1. Клонирайте репото:

git clone https://github.com/21527-uktc/steam-docker-project.git
cd steam-docker-project
Стартирайте с Docker Compose:

docker-compose up --build
Достъп до API-то:

http://localhost:3000

Docker Hub образи
Backend: docker.io/nasko7g/steam-backend:latest

MongoDB: официален образ mongo:6

Структура на проекта
server.js - Node.js backend код

Dockerfile - за backend

docker-compose.yml - дефинира backend и mongo контейнери

Комуникация между услугите
Backend се свързва към MongoDB през Docker мрежата с хоста mongo и порт 27017.