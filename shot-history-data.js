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
// Structure (V01.005.102+) : clé "NOM|JJ/MM/AAAA" → {shotPoints, teeGeoByHole}.
// - shotPoints : tableau de 18 entrées (une par trou), chaque entrée = tableau de points
//   {x, y, lat, lng, accuracy}.
// - teeGeoByHole : tableau de 18 entrées (une par trou), chaque entrée = {x, y, lat, lng,
//   accuracy} du départ, ou null si non marqué.
//
// Vidé le 04/09/2026 à la demande du Directeur de session : la seule entrée qu'il contenait
// (manche de test "Claude Caddie Assistant" du 04/09/2026) a été effacée de l'historique.

window.SHOT_HISTORY_DATA = {
  // Aucune manche officielle avec GPS pour le moment.
};
