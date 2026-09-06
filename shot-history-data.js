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
//
// Manche de test "Claude Caddie Assistant" du 05/09/2023, mise à jour (carte étendue, 10 trous,
// 6 pénalités sur les trous 4 et 10) pour tester le fait marquant "🍀 Malchanceux du jour".
window.SHOT_HISTORY_DATA = {
  "Claude Caddie Assistant|05/09/2023": {
    "shotPoints": [
      [
        {
          "x": "61.79",
          "y": "46.60",
          "lat": 15.4127672,
          "lng": 102.2318896,
          "accuracy": 25
        },
        {
          "x": "73.94",
          "y": "10.67",
          "lat": 15.4032327,
          "lng": 102.2063106,
          "accuracy": 18
        }
      ],
      [
        {
          "x": "75.88",
          "y": "59.59",
          "lat": 15.4066063,
          "lng": 102.2014694,
          "accuracy": 11.5
        },
        {
          "x": "75.55",
          "y": "49.80",
          "lat": 15.4066737,
          "lng": 102.2015011,
          "accuracy": 11
        },
        {
          "x": "44.72",
          "y": "26.36",
          "lat": 15.4068941,
          "lng": 102.2013691,
          "accuracy": 11.5
        }
      ],
      [
        {
          "x": "44.88",
          "y": "34.69",
          "lat": 15.4068743,
          "lng": 102.2013266,
          "accuracy": 31
        },
        {
          "x": "62.78",
          "y": "14.06",
          "lat": 15.4068475,
          "lng": 102.2013092,
          "accuracy": 24.92099952697754
        },
        {
          "x": "67.27",
          "y": "9.92",
          "lat": 15.4068475,
          "lng": 102.2013092,
          "accuracy": 24.92099952697754
        },
        {
          "x": "61.68",
          "y": "13.33",
          "lat": 15.4065342,
          "lng": 102.2014058,
          "accuracy": 28
        }
      ],
      [
        {
          "x": "29.27",
          "y": "20.75",
          "lat": 15.4466729,
          "lng": 102.333715,
          "accuracy": 15.5
        },
        {
          "x": "67.02",
          "y": "1.28",
          "lat": 15.4469567,
          "lng": 102.3337628,
          "accuracy": 82.5,
          "penaltyAfter": true
        },
        {
          "x": "71.82",
          "y": "17.55",
          "penaltyAfter": true,
          "lat": 15.4467094,
          "lng": 102.3337701,
          "accuracy": 23
        },
        {
          "x": "51.49",
          "y": "30.26",
          "lat": 15.4466134,
          "lng": 102.3337147,
          "accuracy": 23,
          "penaltyAfter": true
        },
        {
          "x": "58.33",
          "y": "17.59",
          "lat": 15.4466134,
          "lng": 102.3337147,
          "accuracy": 23
        }
      ],
      [
        {
          "x": "22.98",
          "y": "95.23",
          "lat": 15.4469568,
          "lng": 102.3337606,
          "accuracy": 92.9000015258789
        },
        {
          "x": "56.84",
          "y": "61.28",
          "lat": 15.4466377,
          "lng": 102.3337203,
          "accuracy": 47.5
        },
        {
          "x": "69.70",
          "y": "33.15",
          "lat": 15.4466557,
          "lng": 102.3337473,
          "accuracy": 39.03499984741211
        },
        {
          "x": "59.65",
          "y": "9.76",
          "lat": 15.4469405,
          "lng": 102.3337767,
          "accuracy": 87.5999984741211
        },
        {
          "x": "55.63",
          "y": "9.95",
          "lat": 15.4469405,
          "lng": 102.3337767,
          "accuracy": 87.5999984741211
        }
      ],
      [
        {
          "x": "23.77",
          "y": "43.38",
          "lat": 15.4466842,
          "lng": 102.333653,
          "accuracy": 20.5
        },
        {
          "x": "32.58",
          "y": "27.63",
          "lat": 15.4466842,
          "lng": 102.333653,
          "accuracy": 20.5
        },
        {
          "x": "69.00",
          "y": "10.33",
          "lat": 15.4465448,
          "lng": 102.3336468,
          "accuracy": 36
        },
        {
          "x": "74.94",
          "y": "9.00",
          "lat": 15.4465448,
          "lng": 102.3336468,
          "accuracy": 36
        },
        {
          "x": "77.71",
          "y": "8.05",
          "lat": 15.4466355,
          "lng": 102.333802,
          "accuracy": 38.5
        }
      ],
      [
        {
          "x": "79.06",
          "y": "81.71",
          "lat": 15.4464303,
          "lng": 102.3326848,
          "accuracy": 14
        },
        {
          "x": "68.61",
          "y": "80.67",
          "lat": 15.4464688,
          "lng": 102.3329162,
          "accuracy": 52.400001525878906
        },
        {
          "x": "67.83",
          "y": "68.88",
          "lat": 15.4485966,
          "lng": 102.3333988,
          "accuracy": 11
        },
        {
          "x": "57.43",
          "y": "60.34",
          "lat": 15.4494649,
          "lng": 102.3338684,
          "accuracy": 10.5
        },
        {
          "x": "64.67",
          "y": "50.09",
          "lat": 15.4499564,
          "lng": 102.3343846,
          "accuracy": 77.5999984741211
        },
        {
          "x": "45.37",
          "y": "47.98",
          "lat": 15.4498394,
          "lng": 102.3350256,
          "accuracy": 14.5
        },
        {
          "x": "44.36",
          "y": "38.08",
          "lat": 15.4474348,
          "lng": 102.3344465,
          "accuracy": 11.5
        },
        {
          "x": "35.89",
          "y": "27.40",
          "lat": 15.4472563,
          "lng": 102.3343086,
          "accuracy": 30.650999069213867
        },
        {
          "x": "32.44",
          "y": "6.94",
          "lat": 15.4469767,
          "lng": 102.3337877,
          "accuracy": 64.0999984741211
        }
      ],
      [
        {
          "x": "72.52",
          "y": "17.00",
          "lat": 15.446947,
          "lng": 102.3337434,
          "accuracy": 25.051000595092773
        }
      ],
      [
        {
          "x": "41.58",
          "y": "38.26",
          "lat": 15.4464341,
          "lng": 102.3336463,
          "accuracy": 49
        },
        {
          "x": "65.69",
          "y": "13.37",
          "lat": 15.4464439,
          "lng": 102.3336582,
          "accuracy": 79.39199829101562
        },
        {
          "x": "69.90",
          "y": "12.42",
          "lat": 15.4464439,
          "lng": 102.3336582,
          "accuracy": 79.39199829101562
        }
      ],
      [
        {
          "x": "39.21",
          "y": "38.80",
          "lat": 15.4466712,
          "lng": 102.3336249,
          "accuracy": 80.08399963378906,
          "penaltyAfter": true
        },
        {
          "x": "55.40",
          "y": "30.87",
          "lat": 15.4467079,
          "lng": 102.3338338,
          "accuracy": 26.5,
          "penaltyAfter": true
        },
        {
          "x": "86.03",
          "y": "4.41",
          "lat": 15.4466675,
          "lng": 102.333767,
          "accuracy": 24
        },
        {
          "x": "86.63",
          "y": "3.43",
          "lat": 15.4466675,
          "lng": 102.333767,
          "accuracy": 24,
          "penaltyAfter": true
        },
        {
          "x": "65.01",
          "y": "11.32",
          "lat": 15.4466611,
          "lng": 102.3338158,
          "accuracy": 36
        }
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ],
    "teeGeoByHole": [
      {
        "x": "21.40",
        "y": "91.05",
        "lat": 15.4469765,
        "lng": 102.3337897,
        "accuracy": 56.099998474121094
      },
      {
        "x": "79.02",
        "y": "79.52",
        "lat": 15.4068156,
        "lng": 102.2013674,
        "accuracy": 21
      },
      {
        "x": "53.78",
        "y": "65.70",
        "lat": 15.4071426,
        "lng": 102.2012693,
        "accuracy": 22.5
      },
      {
        "x": "64.47",
        "y": "91.27",
        "lat": 15.4466593,
        "lng": 102.3335902,
        "accuracy": 32
      },
      {
        "x": "25.34",
        "y": "95.85",
        "lat": 15.4466295,
        "lng": 102.3339646,
        "accuracy": 29
      },
      {
        "x": "9.86",
        "y": "92.60",
        "lat": 15.4469572,
        "lng": 102.3337648,
        "accuracy": 72.9000015258789
      },
      {
        "x": "81.86",
        "y": "93.14",
        "lat": 15.4469571,
        "lng": 102.3337595,
        "accuracy": 98.4000015258789
      },
      {
        "x": "33.86",
        "y": "83.99",
        "geoFailed": true
      },
      {
        "x": "14.04",
        "y": "85.52",
        "lat": 15.4466677,
        "lng": 102.3337351,
        "accuracy": 31
      },
      {
        "x": "27.26",
        "y": "85.52",
        "lat": 15.4469582,
        "lng": 102.3337665,
        "accuracy": 60
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  }
};
