CREATE DATABASE breedsdb;

CREATE TABLE breeds(
    id int SERIAL PRIMARY KEY,
    adatability int,
    affection_level int,
    child_friendly int,
    description text,
    energy_level int,
    name string,
    weight jsonb,
    stranger_friendly int


);

