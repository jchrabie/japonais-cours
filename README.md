# Mise à jour — Cours 3, glossaires et jeux de japonais

Cette archive ajoute le **Cours 3** au site `jchrabie/japonais-cours`, en s’appuyant sur `Cours 3 - wa, o, adjectifs et la particule no.pdf`, la vidéo `Rediff Cours jotho 2.mp4` (rediffusion du cours 3, pas un cours 4) et `Cours en autonomie 3 _ Compter en japonais.mp4`.

## Ajouts pédagogiques

- **Cours 3** : phrases complètes avec は et を, adjectifs devant le nom, négation d’adjectifs devant un nom, forme dictionnaire des verbes, composés en する, particule の (possession, appartenance, type), couleurs avec の et révision des nombres japonais en autonomie 3.
- **Glossaires** : ajout des noms, couleurs, personnages, lieux et objets des exemples, des adjectifs utilisés (dont 長い / nagai et 硬い / katai), des verbes 切る / kiru, する / suru, 予約する / yoyaku suru, 料理する / ryouri suru et 旅行する / ryokou suru, ainsi que des nombres et unités numériques rencontrés dans l’autonomie 3. Les tables gardent une colonne « Premier cours » affichant un seul cours.
- **Jeu de vocabulaire** : utilise la même source de données que les trois glossaires et accepte le filtre Cours 3. Les couleurs comme noms, les personnages, les objets, les verbes composés en する et les nombres / unités sont intégrés ; les propositions restent issues du vocabulaire attribué aux cours sélectionnés.
- **Jeu de grammaire** : le catalogue passe à 158 phrases utilisant le vocabulaire des cours 1 à 3, en gardant les filtres de vocabulaire et de notions indépendants.
- **Jeu des particules** : 58 exercices avec の et réinvestissement de は / を. Le QCM propose cinq particules : は, が, を, か et の.
- **Navigation** : cours 3 ajouté à l’accueil et au menu. Les raccourcis de pratique sont générés une seule fois depuis le catalogue des cours. Le lien vers le jeu des nombres reste dans la fiche du cours 3.

## Fichiers du patch

Le ZIP contient les fichiers modifiés et la nouvelle page `cours3.html`. Il ne remplace pas les feuilles de style communes déjà présentes dans le dépôt (`common.css`, `content.css`, `header.css` et `game.css`).

## Vérifications

- Contrôle syntaxique de tous les fichiers JavaScript livrés.
- Contrôle des identifiants des mots et des références entre phrases, particules et catalogue.
- Vérification des associations au cours 3 pour les entrées nouvellement ajoutées et celles utilisées dans les exercices du cours 3.
- Test des filtres pour le seul cours 3 et vérification que les liens préfiltrés utilisent `courses=3`, `vocabCourses=3`, `conceptCourses=3`, `particleVocabCourses=3` et `particleConceptCourses=3`.

Les fichiers sont prêts à être copiés à la racine du dépôt en conservant leurs chemins. Le ZIP n’est pas publié automatiquement sur GitHub.
