const events = [
    {
        id: 1,
        name: 'Aberrant Achatina (Aberramt Snail)',
        synonyms: ['Aberrant Snail','Ab Snail', 'Abb Snail', 'Abberant Snail', 'Abberant Achatina']
    },
    {
        id: 2,
        name: 'Achatina',
        synonyms: ['Snail']
    },
    {
        id: 3,
        name: 'Allosaurus',
        synonyms: ['Allo']
    },
    {
        id: 4,
        name: 'R-Allosaurus',
        synonyms: ['R-Allo', 'R Allo', 'R Allosaurus']
    },
    {
        id: 5,
        name: 'X-Allosaurus',
        synonyms: ['X-Allo', 'X Allo', 'X Allosaurus']
    },
    {
        id: 6,
        name: 'Amargasaurus',
    },
    {
        id: 7,
        name: 'Andrewsarchus',
        synonyms: ['Andrew']
    },
    {
        id: 7,
        name: 'Aberrant Anglerfish',
        synonyms: ['Aberrant Angler', 'Ab Angler', 'Abb Angler', 'Abberant Angler', 'Abberant Anglerfish']
    },
    {
        id: 8,
        name: 'Anglerfish',
        synonyms: ['Angler']
    },
    {
        id: 9,
        name: 'Aberrant Ankylosaurus',
        synonyms: ['Ab Anky', 'Abb Anky', 'Abberant Anky', 'Abberant Ankylosaurus']
    },
    {
        id: 10,
        name: 'Ankylosaurus',
        synonyms: ['Anky']
    },
    {
        id: 11,
        name: 'X-Ankylosaurus',
        synonyms: ['X-Anky', 'X Anky', 'X Ankylosaurus']
    },
    {
        id: 12,
        name: 'Aberrant Araneo',
        synonyms: ['Ab Spider', 'Abb Spider', 'Abberant Araneo', 'Abberant Spider']
    },
    {
        id: 13,
        name: 'Araneo',
        synonyms: ['Spider']
    },
    {
        id: 14,
        name: 'Archaeopteryx',
        synonyms: ['Parachute Bird', 'Parachute']
    },
    {
        id: 15,
        name: 'Argentavis',
        synonyms: ['Argy']
    },
    {
        id: 16,
        name: 'X-Argentavis',
        synonyms: ['X-Argy', 'X Argy', 'X Argentavis']
    },
    {
        id: 17,
        name: 'Aberrant Arthropluera',
        synonyms: ['Ab Arthro', 'Abb Arthro','Abberant Arthro', 'Ab Centipede', 'Abb Centipede']
    },
    {
        id: 18,
        name: 'Arthropluera',
        synonyms: ['Arthro', 'Centipede']
    },
    {
        id: 19,
        name: 'Astrodelphis',
        synonyms: ['Astro']
    },
    {
        id: 20,
        name: 'Aberrant Baryonyx',
        synonyms: ['Abberant Bary', 'Abberant Baryonyx', 'Ab Baryonyx', 'Abb Baryonyx', 'Ab Bary', 'Abb Bary']
    },
    {
        id: 21,
        name: 'Baryonyx',
        synonyms: ['Bary']
    },
    {
        id: 22,
        name: 'Basilosaurus',
        synonyms: ['Basilo']
    },
    {
        id: 23,
        name: 'X-Basilosaurus',
        synonyms: ['X-Basilo', 'X Basilo', 'X Basilosaurus']
    },
    {
        id: 24,
        name: 'Aberrant Beelzebufo',
        synonyms: ['Abberant Beelze','Abberant Beezlebufo', 'Abberant Frog','Abb Frog', 'Ab Frog', 'Abb Beelze', 'Ab Beezle', 'Ab Bufo', 'Abb Bufo']
    },
    {
        id: 25,
        name: 'Beelzebufo',
        synonyms: ['Beezle', 'Bufo', 'Frog']
    },
    {
        id: 26,
        name: 'Bloodstalker',
        synonyms: ['Stalker']
    },
    {
        id: 27,
        name: 'Brontosaurus',
        synonyms: ['Bronto']
    },
    {
        id: 28,
        name: 'R-Brontosaurus',
        synonyms: ['R-Bronto', 'R Bronto', 'R Brontosaurus']
    },
    {
        id: 29,
        name: 'Bulbdog',
    },
    {
        id: 30,
        name: 'Aberrant Carbonemys',
        synonyms: ['Abberant Carbo', 'Abberant Carbonemys', 'Abb Carbo', 'Ab Carbo', 'Ab Turtle', 'Abb Turtle']
    },
    {
        id: 31,
        name: 'Carbonemys',
        synonyms: ['Carbo', 'Turtle']
    },
    {
        id: 32,
        name: 'R-Carbonemys',
        synonyms: ['R-Carbo', 'R Carbo', 'R-Turtle', 'R Turtle', 'R Carbonemys']
    },
    {
        id: 33,
        name: 'Carcharondontosaurus',
        synonyms: ['Carcha', 'Charchar', 'Char Char']
    },
    {
        id: 34,
        name: 'Aberrant Carnotaurus',
        synonyms: ['Abberant Carnotaurus', 'Abberant Carno', 'Abb Carno', 'Ab Carno']
    },
    {
        id: 35,
        name: 'Carnotaurus',
        synonyms: ['Carno']
    },
    {
        id: 36,
        name: 'R-Carnotaurus',
        synonyms: ['R-Carno', 'R Carno', 'R Carnotaurus']
    },
    {
        id: 37,
        name: 'Castoroides',
        synonyms: ['Beaver']
    },
    {
        id: 38,
        name: 'Chalicotherium',
        synonyms: ['Chalico', 'Poop Thrower', 'Beer Drinker']
    },
    {
        id: 39,
        name: 'Compsognathus',
        synonyms: ['Compy']
    },
    {
        id: 40,
        name: 'Blood Crystal Wyvern',
        synonyms: ['Blood Wyv', 'Blood', 'Blood Crystal Wyv', 'Blood Wyvern']
    },
    {
        id: 41,
        name: 'Ember Crystal Wyvern',
        synonyms: ['Ember', 'Ember Wyv', 'Ember Crystal Wyv']
    },
    {
        id: 42,
        name: 'Tropical Crystal Wyvern',
        synonyms: ['Tropic', 'Tropical', 'Tropic Wyv', 'Tropical Wyvern', 'Tropic Crystal Wyvern']
    },
    {
        id: 43,
        name: 'Daedon',
    },
    {
        id: 44,
        name: 'R-Daedon',
        synonyms: ['R Daedon']
    },
    {
        id: 45,
        name: 'Deinonychus',
        synonyms: ['Deinon', 'Deino', 'Chicken']
    },
    {
        id: 46,
        name: 'Desmodus',
        synonyms: ['Bat', 'Desmo']
    },
    {
        id: 47,
        name: 'Dilophosaur',
        synonyms: ['Dilo']
    },
    {
        id: 48,
        name: 'R-Dilophosaur',
        synonyms: ['R-Dilo', 'R Dilo', 'R Dilophosaur']
        
    },
    {
        id: 49,
        name: 'Aberrant Dimetrodon',
        synonyms: ['Abberant Dimetrodon', 'Abb Dimet', 'Abb Dimetrodon', 'Ab Dimetrodon', 'Abberant Dimet', 'Ab Dimet']
    },
    {
        id: 50,
        name: 'Dimetrodon',
        synonyms: ['Dimet']
    },
    {
        id: 51,
        name: 'Aberrant Dimorphodon',
        synonyms: ['Abberant Dimorphodon', 'Abberant Dimorph', 'Ab Dimorph', 'Abb Dimorph']
    },
    {
        id: 52,
        name: 'Dimorphodon',
        synonyms: ['Dimorph']
    },
    {
        id: 53,
        name: 'Dinopithecus',
    },
    {
        id: 54,
        name: 'Aberrant Diplocaulus',
        synonyms: ['Abberant Diplocaulus', 'Abberant Salamander', 'Abb Slamander', 'Ab Salamander', 'Abb Diplocaulus', 'Ab Diplocaulus']
    },
    {
        id: 55,
        name: 'Diplocaulus',
        synonyms: ['Salamander']
    },
    {
        id: 56,
        name: 'Aberrant Diplodocus',
        synonyms: ['Abberant Diplodocus', 'Abberant Diplo', 'Abb Diplo', 'Ab Diplo', 'Aberrant Diplo', 'Ab Diplodocus', 'Abb Diplodocus']
    },
    {
        id: 57,
        name: 'Diplodocus',
        synonyms: ['Diplo']
    },
    {
        id: 58,
        name: 'Aberrant Direbear',
        synonyms: ['Abberant Direbear', 'Abberant Bear', 'Abb Direbear', 'Ab Direbear', 'Ab Bear', 'Abb Bear', 'Aberrant Bear']
    },
    {
        id: 59,
        name: 'Direbear',
        synonyms: ['Bear']
    },
    {
        id: 60,
        name: 'Direwolf',
        synonyms: ['Wolf']
    },
    {
        id: 61,
        name: 'R-Direwolf',
        synonyms: ['R Direwolf', 'R-Wolf', 'R Wolf']
    },
    {
        id: 62,
        name: 'Aberrant Dodo',
        synonyms: ['Abberant Dodo', 'Abb Dodo', 'Ab Dodo']
    },
    {
        id: 63,
        name: 'Dodo',
    },
    {
        id: 64,
        name: 'Aberrant Doedicurus',
        synonyms: ['Abberant Doedicurus','Abb Doedic', 'Ab Doedic', 'Abberrant Doedic']
    },
    {
        id: 65,
        name: 'Doedicurus',
        synonyms: ['Doedic']
    },
    {
        id: 66,
        name: 'Dunkleosteus',
        synonyms: ['Dunkleo', 'Dunky']
    },
    {
        id: 67,
        name: 'X-Dunkleosteus',
        synonyms: ['X-Dunky', 'X Dunkleosteus', 'X Dunky']
    },
    {
        id: 68,
        name: 'Aberrant Electrophorus',
        synonyms: ['Abberant Electrophorus', 'Abberant Eel', 'Abb Eel', 'Ab Eel', 'Abberant Eel']
    },
    {
        id: 69,
        name: 'Electrophorus',
        synonyms: ['Eel']
    },
    {
        id: 70,
        name: 'Aberrant Equus',
        synonyms: ['Ab Horse', 'Abb Horse', 'Abberant Equus', 'Abb Equus', 'Ab Equus', 'Abberant Horse']
    },
    {
        id: 71,
        name: 'Equus',
        synonyms: ['Horse']
    },
    {
        id: 72,
        name: 'R-Equus',
        synonyms: ['R Equus', 'R Horse', 'R-Horse']
    },
    {
        id: 73,
        name: 'Featherlight',
    },
    {
        id: 74,
        name: 'Ferox',
    },
    {
        id: 75,
        name: 'Gacha',
    },
    {
        id: 76,
        name: 'Gallimimus',
        synonyms: ['Galli', 'Gally']
    },
    {
        id: 77,
        name: 'Gasbags',
        synonyms: ['Gasbag']
    },
    {
        id: 78,
        name: 'R-Gasbags',
        synonyms: ['R Gasbags', 'R Gasbag', 'R-Gasbag']
    },
    {
        id: 79,
        name: 'Giganotosaurus',
        synonyms: ['Giga']
    },
    {
        id: 80,
        name: 'R-Giganotosaurus',
        synonyms: ['R-Giga', 'R Giganotosaurus', 'R Giga']
    },
    {
        id: 81,
        name: 'Aberrant Gigantopithecus',
        synonyms: ['Abb Big Monkey', 'Ab Big Monkey', 'Abberant Big Monkey','Abberant Gigantopithecus', 'Abb Gigantopithecus', 'Ab Gigantopithecus', 'Abb Gorilla', 'Abberant Gorilla', 'Aberrant Gorilla', 'Ab Gorilla']
    },
    {
        id: 82,
        name: 'Gigantopithecus',
        synonyms: ['Gorilla', 'Big Monkey']
    },
    {
        id: 83,
        name: 'Glowtail',
    },
    {
        id: 84,
        name: 'Hesperonis',
    },
    {
        id: 85,
        name: 'Hyaenodon',
        synonyms: ['Hyena']
    },
    {
        id: 86,
        name: 'Ichthyornis',
        synonyms: ['Ichthy', 'Flying Pego', 'Flying Pegomastax']
    },
    {
        id: 87,
        name: 'Ichthyosaurus',
        synonyms: ['Dolphin']
    },
    {
        id: 88,
        name: 'X-Ichthyosaurus',
        synonyms: ['X Ichthyosaurus', 'X Dolphin', 'X-Dolphin']
    },
    {
        id: 89,
        name: 'Aberrant Iguanodon',
        synonyms:['Abberant Iguanodon', 'Abb Iguanodon', 'Ab Iguanodon']
    },
    {
        id: 90,
        name: 'Iguanodon',
    },
    {
        id: 91,
        name: 'Jerboa',
    },
    {
        id: 92,
        name: 'Kairuku',
        synonyms: ['Penguin']
    },
    {
        id: 93,
        name: 'Kaprosuchus',
        synonyms: ['Kapro']
    },
    {
        id: 94,
        name: 'Kentrosaurus',
        synonyms: ['Kentro']
    },
    {
        id: 95,
        name: 'Lymantria',
        synonyms: ['Moth']
    },
    {
        id: 96,
        name: 'Aberrant Lystrosaurus',
        synonyms: ['Abberant Lystrosaurus', 'Abb Lystrosaurus', 'Ab Lystrosaurus', 'Abberant Lystro', 'Aberrant Lystro', 'Abb Lystro', 'Ab Lystro']
    },
    {
        id: 97,
        name: 'Lystrosaurus',
        synonyms: ['Lystro']
    },
    {
        id: 98,
        name: 'Maewing',
    },
    {
        id: 99,
        name: 'Magmasaur',
        synonyms: ['Mag']
    },
    {
        id: 100,
        name: 'Mammoth',
    },
    {
        id: 101,
        name: 'Managarmr',
        synonyms: ['Mana']
    },
    {
        id: 102,
        name: 'Aberrant Manta',
        synonyms: ['Abberant Manta', 'Abb Manta', 'Ab Manta', 'Abberant Stingray', 'Abberant Sting Ray', 'Abb Stingray', 'Abb Sting Ray', 'Ab Stingray', 'Ab Sting Ray']
    },
    {
        id: 103,
        name: 'Manta',
        synonyms: ['Stingray', 'Sting Ray']
    },
    {
        id: 104,
        name: 'Mantis',
    },
    {
        id: 105,
        name: 'Megachelon',
        synonyms: ['Giant Turtle']
    },
    {
        id: 106,
        name: 'Aberrant Megalania',
        synonyms:['Abberant Megalania', 'Abb Megalania', 'Ab Megalania']
    },
    {
        id: 107,
        name: 'Megalania',
    },
    {
        id: 108,
        name: 'Megaloceros',
        synonyms: ['Deer', 'Reindeer']
    },
    {
        id: 109,
        name: 'Megalodon',
        synonyms: ['Shark', 'Meg']
    },
    {
        id: 110,
        name: 'X-Megalodon',
        synonyms: ['X Megalodon', 'X-Shark', 'X Shark', 'X-Meg', 'X Meg']
    },
    {
        id: 111,
        name: 'Aberrant Megalosaurus',
        synonyms: ['Abberant Megalosaurus', 'Abb Megalosaurus', 'Ab Megalosaurus', 'Abb Megalo', 'Ab Megalo', 'Abberant Megalo', 'Aberrant Megalo']
    },
    {
        id: 112,
        name: 'Megalosaurus',
        synonyms: ['Megalo']
    },
    {
        id: 113,
        name: 'Megatherium',
    },
    {
        id: 114,
        name: 'R-Megatherium',
        synonyms: ['R Megatherium']
    },
    {
        id: 115,
        name: 'Mesopithecus',
        synonyms: ['Meso', 'Monkey', 'Little Monkey', 'Small Monkey']
    },
    {
        id: 116,
        name: 'Microraptor',
    },
    {
        id: 117,
        name: 'Morellatops',
        synonyms: ['Morell', 'Morrel', 'Camel']
    },
    {
        id: 118,
        name: 'Mosasaurus',
        synonyms: ['Mosa']
    },
    {
        id: 119,
        name: 'X-Mosasaurus',
        synonyms: ['X Mosasaurus', 'X-Mosa', 'X Mosa']
    },
    {
        id: 120,
        name: 'Aberrant Moschops',
        synonyms:['Abberant Moschops', 'Abberant Moschop', 'Aberrant Moschop', 'Abb Moschop', 'Ab Moschop', 'Abb Moschops', 'Ab Moschops']
    },
    {
        id: 121,
        name: 'Moschops',
        synonyms:['Moschop']
    },
    {
        id: 122,
        name: 'Onyc',
        synonyms: ['Small bat', 'Cave Bat']
    },
    {
        id: 123,
        name: 'Aberrant Otter',
        synonyms: ['Abberant Otter', 'Abb Otter', 'Ab Otter']
    },
    {
        id: 124,
        name: 'Otter',
    },
    {
        id: 125,
        name: 'X-Otter',
        synonyms: ['X Otter']
    },
    {
        id: 126,
        name: 'Oviraptor',
    },
    {
        id: 127,
        name: 'Aberrant Ovis',
        synonyms: ['Abberant Ovis', 'Abberant Sheep', 'Abb Ovis', 'Ab Ovis', 'Abb Sheep', 'Ab Sheep']
    },
    {
        id: 128,
        name: 'Ovis',
        synonyms: ['Sheep']
    },
    {
        id: 129,
        name: 'Pachycephalosaurus',
        synonyms: ['Pachy', 'Headbutter', 'Head Butter']
    },
    {
        id: 130,
        name: 'Pachyrhinosaurus',
        synonyms: ['Pachy Rhino', 'Pachyrhino']
    },
    {
        id: 131,
        name: 'Aberrant Paraceratherium',
        synonyms: ['Abberant Paraceratherium', 'Aberrant Paracer', 'Abberant Paracer', 'Abberant Racer', 'Aberrant Racer', 'Abb Paracer', 'Ab Paracer', 'Abb Racer', 'Ab Racer']
    },
    {
        id: 132,
        name: 'Paraceratherium',
        synonyms: ['Paracer', 'Racer']
    },
    {
        id: 133,
        name: 'X-Paraceratherium',
        synonyms: ['X Paraceratherium', 'X-Paracer', 'X Paracer', 'X-Racer', 'X Racer']
    },
    {
        id: 134,
        name: 'Aberrant Parasaur',
        synonyms: ['Abberant Parasaur', 'Abb Parasaur', 'Ab Parasaur']
    },
    {
        id: 135,
        name: 'Parasaur',
    },
    {
        id: 136,
        name: 'R-Parasaur',
        synonyms: ['R Parasaur']
    },
    {
        id: 137,
        name: 'Tek Parasaur',
        synonyms: ['Tech Parasaur']
    },
    {
        id: 138,
        name: 'X-Parasaur',
        synonyms: ['X Parasaur']
    },

    {
        id: 139,
        name: 'Pegomastax',
        synonyms: ['Pego']
    },
    {
        id: 140,
        name: 'Pelagornis',
        synonyms: ['Pelly']
    },
    {
        id: 141,
        name: 'Phiomia',
    },
    {
        id: 142,
        name: 'Plesiosaur',
        synonyms: ['Plesi']
    },
    {
        id: 143,
        name: 'Procoptodon',
        synonyms: ['Kangaroo', 'Roo', 'Procopt']
    },
    {
        id: 144,
        name: 'R-Procoptodon',
        synonyms: ['R-Kangaroo', 'R-Roo', 'R-Procopt', 'R Kangaroo', 'R Roo', 'R Procopt']
    },
    {
        id: 145,
        name: 'Pteradon',
        synonyms: ['Ptera', 'PT']
    },
    {
        id: 146,
        name: 'Aberrant Pulmonoscorpius',
        synonyms: ['Aberrant Pulmono', 'Aberrant Scorpion', 'Abberant Pulmonoscorpius', 'Abberant Pulmono', 'Abberant Scorpion', 'Abb Pulmonoscorpius', 'Abb Pulmono', 'Abb Scorpion', 'Ab Pulmonoscorpius']
    },
    {
        id: 147,
        name: 'Pulmonoscorpius',
        synonyms: ['Pulmono', 'Scorpion']
    },
    {
        id: 148,
        name: 'Aberrant Purlovia',
        synonyms: ['Abberant Purlovia', 'Abb Purlovia', 'Ab Purlovia']
    },
    {
        id: 149,
        name: 'Purlovia',
    },
    {
        id: 150,
        name: 'Quetzalcoatlus',
        synonyms: ['Quetzal', 'Quetz']
    },
    {
        id: 151,
        name: 'R-Quetzalcoatlus',
        synonyms: ['R Quetzalcoatlus', 'R-Quetzal', 'R-Quetz', 'R Quetzal', 'R Quetz']
    },
    {
        id: 152,
        name: 'Tek Quetzalcoatlus',
        synonyms: ['Tech Quetzalcoatlus', 'Tech Quetz', 'Tek Quetz', 'Tech Quetzal', 'Tek Quetzal']
    },
    {
        id: 153,
        name: 'Aberrant Raptor',
        synonyms: ['Abberant Raptor', 'Abb Raptor', 'Ab Raptor']
    },
    {
        id: 154,
        name: 'Raptor',
    },
    {
        id: 155,
        name: 'Tek Raptor',
        synonyms: ['Tech Raptor']
    },
    {
        id: 156,
        name: 'X-Raptor',
        synonyms: ['X Raptor']
    },
    {
        id: 157,
        name: 'Ravager',
    },
    {
        id: 158,
        name: 'Tyrannosaurus Rex',
        synonyms: ['T Rex', 'T-Rex', 'Rex']
    },
    {
        id: 159,
        name: 'Tek Tyrannosaurus Rex',
        synonyms: ['Tech Tyrannosaurus Rex', 'Tech Rex', 'Tek Rex']
        
    },
    {
        id: 160,
        name: 'X-Tyrannosaurus Rex',
        synonyms: ['X Tyrannosaurus Rex', 'X-Rex', 'X Rex']
    },
    {
        id: 161,
        name: 'Roll Rat',
    },
    {
        id: 162,
        name: 'Sabertooth',
        synonyms: ['Saber']
    },
    {
        id: 163,
        name: 'X-Sabertooth',
        synonyms: ['X Sabertooth', 'X-Saber', 'X Saber']
    },
    {
        id: 164,
        name: 'Aberrant Sarcosuchus',
        synonyms: ['Abberant Sarcosuchus', 'Abberant Sarco', 'Aberrant Sarco', 'Abb Sarcosuchus', 'Ab Sarcosuchus', 'Abb Sarco', 'Ab Sarco']
    },
    {
        id: 165,
        name: 'Sarcosuchus',
        synonyms: ['Sarco']
    },
    {
        id: 166,
        name: 'Shadowmane',
        synonyms: ['Shadow']
    },
    {
        id: 167,
        name: 'Shinehorn',
    },
    {
        id: 168,
        name: 'Sinomacrops',
        synonyms: ['Sino']
    },
    {
        id: 169,
        name: 'Snow Owl',
        synonyms: ['Owl']
    },
    {
        id: 170,
        name: 'R-Snow Owl',
        synonyms: ['R Snow Owl', 'R-Owl', 'R Owl']
    },
    {
        id: 171,
        name: 'Aberrant Spinosaurus',
        synonyms: ['Abberant Spinosaurus', 'Abberant Spino', 'Aberrant Spino', 'Abb Spinosaurus', 'Ab Spinosaurus', 'Abb Spino', 'Ab Spino']
    },
    {
        id: 172,
        name: 'Spinosaurus',
        synonyms: ['Spino']
    },
    {
        id: 173,
        name: 'X-Spinosaurus',
        synonyms: ['X Spinosaurus', 'X-Spino', 'X Spino']
    },
    {
        id: 174,
        name: 'Aberrant Stegosaurus',
        synonyms: ['Abberant Stegosaurus', 'Aberrant Stego', 'Abberant Stego', 'Abb Stegosaurus', 'Ab Stegosaurus', 'Abb Stego', 'Ab Stego']
    },
    {
        id: 175,
        name: 'Aberrant Stegosaurus',
        synonyms: ['Abberant Stegosaurus', 'Abberant Stego', 'Abb Stegosaurus', 'Abb Stego', 'Ab Stegosaurus', 'Ab Stego']
    },
    {
        id: 176,
        name: 'Stegosaurus',
        synonyms: ['Stego']
    },
    {
        id: 177,
        name: 'Tek Stegosaurus',
        synonyms: ['Tech Stegosaurus', 'Tech Stego', 'Tek Stego']
    },
    {
        id: 178,
        name: 'Tapejara',
        synonyms: ['Tappy']
    },
    {
        id: 179,
        name: 'X-Tapejara',
        synonyms: ['X Tapejara', 'X-Tappy', 'X Tappy']
    },
    {
        id: 180,
        name: 'Terror Bird',
    },
    {
        id: 181,
        name: 'Therizinosaurus',
        synonyms: ['Theri', 'Therizino']
    },
    {
        id: 182,
        name: 'Thorny Dragon',
        synonyms: ['Thorny']
    },
    {
        id: 183,
        name: 'Thylacoleo',
        synonyms: ['Thyla']
    },
    {
        id: 184,
        name: 'R-Thylacoleo',
        synonyms: ['R Thylacoleo', 'R-Thyla', 'R Thyla']
    },
    {
        id: 185,
        name: 'Aberrant Triceratops',
        synonyms: ['Aberrant Trike', 'Aberrant Three Horn', 'Aberrant Three-Horn', 'Abberant Triceratops', 'Abberant Trike', 'Abberant Three-Horn', 'Abberant Three Horn', 'Abb Triceratops','Ab Triceratops', 'Abb Trike', 'Ab Trike']
    },
    {
        id: 186,
        name: 'Triceratops',
        synonyms: ['Trike', 'Three Horn', 'Three-Horn']
    },
    {
        id: 187,
        name: 'Tek Triceratops',
        synonyms: ['Tech Triceratops', 'Tech Trike', 'Tek Trike', 'Tech Three Horn', 'Tech Three-Horn', 'Tek Three-Horn', 'Tek Three Horn']
    },
    {
        id: 188,
        name: 'X-Triceratops',
        synonyms: ['X Triceratops', 'X Trike', 'X-Trike', 'X-Three Horn', 'X Three Horn', 'X-Three-Horn', 'X Three-Horn']
    },
    {
        id: 189,
        name: 'Troodon',
    },
    {
        id: 190,
        name: 'Tropeognathus',
        synonyms:['Tropeo']
    },
    {
        id: 191,
        name: 'Tusoteuthis',
        synonyms:['Tuso']
    },
    {
        id: 192,
        name: 'Unicorn',
    },
    {
        id: 193,
        name: 'Velonasaur',
        synonyms:['Velo', 'Velona', 'Velano', 'Velonosaur']
    },
    {
        id: 194,
        name: 'R-Velonasaur',
        synonyms:['R Velonasaur','R-Velo', 'R-Velona', 'R-Velano', 'R-Velonosaur', 'R Velo', 'R Velona', 'R Velano', 'R Velonosaur']
    },
    {
        id: 195,
        name: 'Voidwyrm',
        synonyms:['Void']
    },
    {
        id: 196,
        name: 'Vulture',
        synonyms:['Buzzard']
    },
    {
        id: 197,
        name: 'Wooly Rhino',
        synonyms:['Rhino']
    },
    {
        id: 198,
        name: 'X-Wooly Rhino',
        synonyms:['X Wooly Rhino', 'X-Rhino', 'X Rhino']
    },
    {
        id: 199,
        name: 'Fire Wyvern',
        synonyms:['Fire Wyv']
    },
    {
        id: 200,
        name: 'Ice Wyvern',
        synonyms:['Ice Wyv']
    },
    {
        id: 201,
        name: 'Lightning Wyvern',
        synonyms:['Lightning Wyv']
    },
    {
        id: 202,
        name: 'Poison Wyvern',
        synonyms:['Poison Wyv']
    },
    {
        id: 203,
        name: 'Yutyrannus',
        synonyms:['Yuty']
    },
    {
        id: 204,
        name: 'X-Yutyrannus',
        synonyms:['X Yutyrannus', 'X-Yuty', 'X Yuty']
    }
]

export default events;
