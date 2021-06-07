DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    date_created VARCHAR(255)
);

INSERT INTO users(email, date_created) VALUES ('chance.c.harmon@gmail.com', NOW());