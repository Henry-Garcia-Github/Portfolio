-- Création de la table 'projects'
CREATE TABLE `projects` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `logo` VARCHAR(255),
  `main_photo` VARCHAR(255),
  `secondary_photo` VARCHAR(255),
  `third_photo` VARCHAR(255),
  `description` TEXT
);

-- Insertion de trois projets initiaux
INSERT INTO `projects` (`name`, `logo`, `main_photo`, `secondary_photo`, `third_photo`, `description`)
VALUES
  ('Foody', 'https://svgshare.com/i/vM1.svg', 'https://svgshare.com/i/vN_.svg', 'https://svgshare.com/i/vNK.svg', 'https://svgshare.com/i/vM2', 'Foody est le 1er projet effectué au début de la formation.
              <br />
              <br />
              <br />
              <br /> Thème : Restauration (imposé)
              <br /> Responsive : Mobile, tablette, desktop
              <br /> Durée : 2 semaines Taille de l’équipe : 5 personnes
              <br /> Technologies utilisées : HTML, CSS'),
  ('Deckforge', 'https://svgshare.com/i/vTz.svg', 'https://svgshare.com/i/vVg.svg', 'https://svgshare.com/i/vWU.svg', 'https://svgshare.com/i/vWd.svg', 'Description du projet 2'),
  ('Carrycare', 'https://svgshare.com/i/vU0.svg', 'https://svgshare.com/i/vVg.svg', 'https://svgshare.com/i/vWU.svg', 'https://svgshare.com/i/vWd.svg', 'Description du projet 3');
