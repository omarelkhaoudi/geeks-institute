# Game Collection Manager

Une application web pour gérer une collection de jeux vidéo, développée avec **Flask** et **PostgreSQL**.

---

## Fonctionnalités

- Ajouter, modifier et supprimer des jeux vidéo.
- Gérer les développeurs et les plateformes de jeux.
- Recherche et filtrage de jeux.
- Interface utilisateur simple et responsive avec TailwindCSS.
- Connexion à une base de données PostgreSQL via psycopg2.

---

## Technologies utilisées

- **Python 3.11+**
- **Flask 3.x**
- **PostgreSQL**
- **psycopg2**
- **Jinja2** pour le templating
- **TailwindCSS** pour le design
- **HTML / CSS / JavaScript** pour le front-end

---

## Installation

1. **Cloner le dépôt :**
```bash
git clone https://github.com/ton-omarelkhaoudi/week-2/day-5/daily-challenges/GAMING COLLECTION MANAGER.git
cd GAMING-COLLECTION-MANAGER

2-- Créer un environnement virtuel et l'activer :
python -m venv venv
# Windows
venv\Scripts\activate
# macOS / Linux
source venv/bin/activate

3-- Installer les dépendances :

python -m venv venv
# Windows
venv\Scripts\activate
# macOS / Linux
source venv/bin/activate

4- Configurer la base de données PostgreSQL :

Créer une base de données, par exemple game_db.

Mettre à jour le fichier .env avec vos informations PostgreSQL :

DB_NAME=game_db
DB_USER=postgres
DB_PASSWORD=ton_mot_de_passe
DB_HOST=localhost
DB_PORT=5432

5- Créer les tables :

python db_setup.py
# ou exécuter le script SQL fourni
psql -U postgres -d game_db -f schema.sql

Lancer l'application
flask run


L'application sera disponible sur : http://127.0.0.1:5000

6- Structure du projet
game-app/
│
├── app.py                # Point d'entrée de l'application Flask
├── db_config.py          # Configuration de la base de données
├── models.py             # Modèles pour les tables
├── routes.py             # Routes Flask
├── templates/            # Templates Jinja2
├── static/               # CSS, JS, images
├── requirements.txt
└── README.md

Contribution

Les contributions sont les bienvenues !

Fork le projet

Crée ta branche (git checkout -b feature/ma-feature)

Commit tes changements (git commit -m 'Ajout de ma feature')

Push sur la branche (git push origin feature/ma-feature)

Ouvre un Pull Request

Licence

Ce projet est sous licence MIT.


Si tu veux, je peux aussi te générer une **version courte et très pro** de README adaptée pour GitHub qui attire l’œil et décrit ton projet en 1 minute de lecture.  

Veux‑tu que je fasse ça ?
