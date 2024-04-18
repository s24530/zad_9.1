DROP TABLE IF EXISTS cars;

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(255) NOT NULL,
    year INT NOT NULL
);

INSERT INTO cars (brand, year) VALUES ('Toyota',  2018);
INSERT INTO cars (brand, year) VALUES ('Honda',  2019);
INSERT INTO cars (brand, year) VALUES ('Ford', 2020);
INSERT INTO cars (brand, year) VALUES ('Chevrolet', 2017);
INSERT INTO cars (brand, year) VALUES ('BMW', 2021);
