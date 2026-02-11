# Guide de Déploiement : Dubai Invest (Replit vers Render)

Ce projet est composé d'un Backend Node.js et d'un Frontend Expo. Pour que votre APK fonctionne avec votre base de données sur Render, suivez scrupuleusement ces étapes.

## 1. Préparation GitHub
1. Créez un nouveau dépôt sur GitHub.
2. Copiez TOUT le contenu du dossier `GitHub Download` dans votre dépôt.
3. Pushez les modifications.

## 2. Déploiement du Backend sur Render
1. Sur [Render](https://render.com), créez un **Web Service**.
2. Connectez votre dépôt GitHub.
3. **Paramètres de build** :
   - **Runtime** : `Node`
   - **Build Command** : `npm install && npm run server:build`
   - **Start Command** : `npm run server:prod`
4. **Base de données** :
   - Créez une base de données **PostgreSQL** sur Render (ou utilisez l'URL d'une base existante).
   - Dans l'onglet **Environment** de votre Web Service, ajoutez :
     - `DATABASE_URL` : L'URL de votre base de données Render.
     - `NODE_ENV` : `production`

## 3. Mise à jour de la base de données
Le projet est configuré pour **se mettre à jour tout seul**. 
- Le script `setupDb()` dans `server/db.ts` s'exécute à chaque démarrage du serveur.
- Il vérifie si les tables existent et les crée si nécessaire.
- **Import des données** : Pour peupler la base avec les données de Dubaï, le serveur exécute automatiquement le fichier `seed.ts` s'il détecte que la table `districts` est vide.

## 4. Liaison APK -> Render (CRITIQUE)
Pour que votre APK récupère les données :
1. Une fois votre Web Service déployé, copiez son URL (ex: `https://votre-app.onrender.com`).
2. Dans le code du dossier que vous avez téléchargé, allez dans `lib/query-client.ts`.
3. Assurez-vous que l'URL pointe vers votre adresse Render en production.
4. Générez votre APK avec : `npx eas build --platform android --profile preview`.

## 5. Résumé de l'erreur APK corrigée
Le fichier `app.json` a été nettoyé. Lors du prochain `eas build`, Expo vous demandera de créer un nouveau projet sur votre compte. Répondez "Yes".
