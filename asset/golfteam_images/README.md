# Images du parcours SuarPark — sauvegarde

Extrait de l'application GOLFTEAM (V01.005.012), pour sauvegarde sur GitHub.

## Contenu

- `plan_general.jpg` — vue satellite d'ensemble du parcours (utilisée par le bouton "Afficher le plan")
- `holes/trou_01.jpg` à `holes/trou_18.jpg` — captures satellite dédiées de chaque trou, cadrées départ → green (utilisées par le bouton "Afficher le trou"), validées trou par trou avec le Directeur de session.

## Statut de validation (au 30/08/2026, V01.005.012)

Les 18 trous ont été validés avec des captures satellite dédiées (départ visible → green visible, dans un seul cadre). Repère important : sur les captures Google Maps d'origine, le repère "Suer-hN" marque l'**arrivée** (green), pas le départ.

## Réintégration dans l'appli

Ces fichiers sont stockés en base64 dans `index.html` (constantes `HOLE_MAP_IMG` et `COURSE_MAP_IMG`). Pour les remplacer :
1. Encoder le nouveau fichier en base64
2. Remplacer l'entrée correspondante dans le tableau `HOLE_MAP_IMG` (index 0 = trou 1, ..., index 17 = trou 18)
3. Vérifier la syntaxe JavaScript avant de livrer
4. Incrémenter `APP_VERSION`
