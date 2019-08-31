### Schema

CREATE DATABASE flashcard_db;
USE flashcard_db;

CREATE TABLE flashcards
(
	id int NOT NULL AUTO_INCREMENT,
	question varchar(1000) NOT NULL,
    answer varchar(1000) NOT NULL,
	english BOOLEAN DEFAULT false,
    math BOOLEAN DEFAULT false,
    language BOOLEAN DEFAULT false,
    history BOOLEAN DEFAULT false,
    science BOOLEAN DEFAULT false,
    socialstudies BOOLEAN DEFAULT false,
    computerscience BOOLEAN DEFAULT false,

	PRIMARY KEY (id)
);
