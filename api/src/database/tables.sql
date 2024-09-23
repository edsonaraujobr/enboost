CREATE DATABASE IF NOT EXISTS enboost;
USE enboost;

CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS translated_words (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    wordEnglish VARCHAR(100) NOT NULL,
    wordPortuguese VARCHAR(100) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS remember_words (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    wordEnglish VARCHAR(100) NOT NULL,
    wordPortuguese VARCHAR(100) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (full_name, email, password) 
VALUES 
('John Doe', 'john.doe@example.com', 'senha123'),
('Jane Smith', 'jane.smith@example.com', 'password456'),
('Carlos Silva', 'carlos.silva@example.com', 'segredo789'),
('Maria Oliveira', 'maria.oliveira@example.com', 'pass12345'),
('Emily Johnson', 'emily.johnson@example.com', 'senha987');

