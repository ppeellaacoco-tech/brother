CREATE DATABASE IF NOT EXISTS carta_cumpleanos
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE carta_cumpleanos;

CREATE TABLE IF NOT EXISTS cartas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    destinatario VARCHAR(100) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha DATE NOT NULL
);

INSERT INTO cartas (destinatario, mensaje, fecha)
VALUES (
    'Mi hermano',
    'Feliz cumple Brooo. Te quiero, hermano. Un montón. Quería que el resto de los días sean especiales. Cada vez que nos saludamos luego de no vernos se siente como un wuaaaaauh. No sé, una sensación fresca. Esta carta simplemente es para recordarte que tenés a alguien a quien contarle todo lo que quieras y siempre voy a ser sincero. Para darte de mí, lo mejor. Así no creces solo. Tu hermano siempre va a estar.',
    '2026-09-28'
);
