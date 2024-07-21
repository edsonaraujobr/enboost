ALTER USER 'root' @'localhost' IDENTIFIED
WITH
    mysql_native_password BY 'root';

CREATE DATABASE enboost;
USE enboost;

CREATE TABLE users(
    id INTEGER PRIMARY AUTO_INCREMENT,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);
CREATE TABLE translated_words (
    id INTEGER PRIMARY AUTO_INCREMENT,
    wordEnglish VARCHAR(100) NOT NULL,
    wordPortuguese VARCHAR(100) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_user INTEGER,
    FOREIGN KEY id_user REFERENCES user (id)
);

CREATE TABLE remember_words (
    id INTEGER PRIMARY AUTO_INCREMENT,
    wordEnglish VARCHAR(100) NOT NULL,
    wordPortuguese VARCHAR(100) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_user INTEGER,
    FOREIGN KEY id_user REFERENCES user (id)
);

CREATE TABLE movies (
    id INTEGER PRIMARY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    level VARCHAR(10) NOT NULL,
    release_year YEAR
);

CREATE TABLE series (
    id INTEGER PRIMARY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    level VARCHAR(10) NOT NULL,
    release_year YEAR
);

CREATE TABLE tips (
    id INTEGER PRIMARY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    level VARCHAR(10) NOT NULL,
    release_year YEAR
);


