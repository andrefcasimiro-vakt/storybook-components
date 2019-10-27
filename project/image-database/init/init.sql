GRANT ALL PRIVILEGES ON DATABASE midikrew TO midikrew;

\c midikrew;

DROP TABLE IF EXISTS users;
CREATE TABLE users(id serial PRIMARY KEY, name VARCHAR(255));


INSERT INTO users(name) VALUES('user');
