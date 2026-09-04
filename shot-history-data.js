// shot-history-data.js — Historique OFFICIEL des points de chute GPS (replay), par joueur + date.
//
// Fichier SÉPARÉ de index.html par choix délibéré : ces données sont volumineuses (coordonnées
// GPS par coup, jusqu'à 18 trous par manche) et ne doivent JAMAIS ralentir le chargement normal
// de l'application. Ce fichier n'est chargé qu'À LA DEMANDE, au moment où quelqu'un clique sur
// "🎬 Revoir les coups (officiel)" dans "📜 Afficher l'historique" — jamais au démarrage.
//
// RÈGLE DE RÉTENTION (appliquée manuellement par Claude à chaque mise à jour) : fenêtre glissante
// d'UN AN par joueur. Quand une nouvelle manche avec GPS est ajoutée pour un joueur, toute manche
// de CE MÊME joueur datée de plus d'un an est retirée.
//
// Structure : clé "NOM|JJ/MM/AAAA" → tableau de 18 entrées (une par trou), chaque entrée = tableau
// de points {x, y, lat, lng, accuracy}.
//
// Première entrée réelle : test GPS/replay en conditions réelles du Directeur de session
// (04/09/2026, identité "Claude Caddie Assistant", trou 1 uniquement, manche volontairement
// partielle — 8 coups pour un score déclaré de 8, cohérent).
window.SHOT_HISTORY_DATA = {
  "Claude Caddie Assistant|04/09/2026": [
    [
      {
        "x": "77.33",
        "y": "10.24",
        "lat": 15.4469569,
        "lng": 102.3337669,
        "accuracy": 45.599998474121094
      },
      {
        "x": "69.17",
        "y": "22.43",
        "lat": 15.4465212,
        "lng": 102.3329499,
        "accuracy": 98.4000015258789
      },
      {
        "x": "64.16",
        "y": "31.35",
        "lat": 15.4463571,
        "lng": 102.3328559,
        "accuracy": 38.85599899291992
      },
      {
        "x": "50.00",
        "y": "43.21",
        "lat": 15.4486123,
        "lng": 102.3334401,
        "accuracy": 30.5
      },
      {
        "x": "47.84",
        "y": "50.47",
        "lat": 15.4486559,
        "lng": 102.3335486,
        "accuracy": 81.02899932861328
      },
      {
        "x": "37.07",
        "y": "58.30",
        "lat": 15.4488426,
        "lng": 102.3347051,
        "accuracy": 10
      },
      {
        "x": "31.22",
        "y": "81.96",
        "lat": 15.4471197,
        "lng": 102.3339143,
        "accuracy": 43.2400016784668
      },
      {
        "x": "26.31",
        "y": "90.96",
        "lat": 15.4469449,
        "lng": 102.3337503,
        "accuracy": 48.900001525878906
      }
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ]
};
