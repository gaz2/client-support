// Создаем пользователя admin в базе данных admin
db.getSiblingDB("admin").createUser({
  user: "admin",
  pwd: "admin123",
  roles: [{ role: "userAdminAnyDatabase", db: "admin" }],
});

// Создаем базу данных user_db и пользователя mir_user
db.getSiblingDB("user_db").createUser({
  user: "mir_user",
  pwd: "mir123",
  roles: [{ role: "dbOwner", db: "user_db" }],
});