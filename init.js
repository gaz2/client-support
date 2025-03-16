// init.js
db = db.getSiblingDB('user_db');

db.users.insertMany([
  {
    _id: "1",
    username: "user1",
    email: "user1@example.com",
    createdAt: new Date().toISOString(),
    role: "user",
    status: "active"
  },
  {
    _id: "2",
    username: "user2",
    email: "user2@example.com",
    createdAt: new Date().toISOString(),
    role: "user",
    status: "active"
  },
  {
    _id: "3",
    username: "user3",
    email: "user3@example.com",
    createdAt: new Date().toISOString(),
    role: "admin",
    status: "active"
  },
  {
    _id: "4",
    username: "user4",
    email: "user4@example.com",
    createdAt: new Date().toISOString(),
    role: "user",
    status: "inactive"
  },
  {
    _id: "5",
    username: "user5",
    email: "user5@example.com",
    createdAt: new Date().toISOString(),
    role: "user",
    status: "active"
  }
]);