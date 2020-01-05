DROP DATABASE IF EXISTS database;

CREATE DATABASE database;

\c database

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    email VARCHAR
);

CREATE TABLE images (
    id SERIAL PRIMARY KEY, 
    users_id INT REFERENCES users (id), 
    poster_name VARCHAR REFERENCES users (username), 
    image_url VARCHAR,
    caption VARCHAR
);

CREATE TABLE likes (
    image_id INT REFERENCES images (id),
    liker_id INT REFERENCES users (id)
);

CREATE TABLE hashtags (
    hashtag VARCHAR,
    image_id INT REFERENCES images (id)
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY, 
    comment VARCHAR, 
    image_id INT REFERENCES images (id),
    commentors_name VARCHAR REFERENCES users (username)
);

INSERT INTO users (username, email)
    VALUES ('Mariana Aleta', 'ProjectLead@gmail.com'),
           ('Javed Patrick', 'SeniorFieldResearcher@gmail.com');



-- SELECT * FROM images;