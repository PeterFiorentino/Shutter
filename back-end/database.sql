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
    caption VARCHAR,
    alt VARCHAR
);

CREATE TABLE likes (
    image_id INT REFERENCES images (id),
    liker_name VARCHAR REFERENCES users (username)
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
    VALUES ('JonathanFagan', 'JFagan@project.com'),
           ('BriahanaMaugé', 'BMauge@project.com'),
           ('KadijahWilson', 'KWilson@project.com'),
           ('PeterFiorentino', 'PFiorentino@project.com');

INSERT INTO images (poster_name, image_url, caption, alt)
    VALUES ('JonathanFagan', 'https://newyorkknicksmemesdotcom.files.wordpress.com/2013/08/tmac.jpg', 'My favorite player.', 'player on the knicks'),
           ('BriahanaMaugé', 'https://i.ytimg.com/vi/EUbAaeohpiA/maxresdefault.jpg', 'I do not just think he is cute. I like his music!', 'chris brown'),
           ('KadijahWilson', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fulani-braids-1569510184.png?crop=0.503xw:1.00xh;0,0&resize=640:*', 'That is cute', 'blue braids'),
           ('PeterFiorentino', 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-the-last-word-billy-joel-e7209123-22e1-4a8f-acff-136584bdb016.jpg?resize=900,600&w=450', 'The king.', 'billy joel');

INSERT INTO likes (image_id, liker_name)
    VALUES (1,'BriahanaMaugé'),
           (2,'JonathanFagan'),
           (3,'PeterFiorentino'),
           (4,'KadijahWilson');


INSERT INTO hashtags (hashtag, image_id)
    VALUES ('betterAsARocket', 1),
           ('nothingButHits', 2),
           ('blueBraids', 3),
           ('pianoMan', 4),
           ('theGOAT', 4);

INSERT INTO comments (comment, image_id, commentors_name)
    VALUES ('His cousin is better.', 1, 'PeterFiorentino'),
           ('You just like him cause hes cute', 2, 'JonathanFagan'),
           ('Can you do this to me?', 3, 'BriahanaMaugé'),
           ('Who is this?', 4, 'KadijahWilson');



