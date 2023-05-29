create schema projetoFinal

CREATE TABLE projetoFinal.usuarios (
  id SERIAL PRIMARY KEY,
  usuario VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  criacao timestamp default now()
);

CREATE TABLE projetoFinal.notas (
  id SERIAL PRIMARY KEY,
  usuario_id INT REFERENCES projetoFinal.usuarios(id),
  titulo VARCHAR(255) NOT NULL,
  conteudo TEXT,
  criacao timestamp default now(),
  atualizacao timestamp DEFAULT NULL
);