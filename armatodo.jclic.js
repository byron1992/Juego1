if(JClicObject){JClicObject.projectFiles["armatodo.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"armatodo\" version=\"0.1.3\"><settings><title>ArmatodoPrueba<\/title><revision description=\"created\" date=\"12/10/24\" /><descriptors area=\"Ciencias Naturales\" level-codes=\"SEC\" /><skin file=\"@orange.xml\" /><icon192 file=\"Division-celular-resized.jpg\" /><meta_langs>es<\/meta_langs><descriptions><description language=\"es\" /><\/descriptions><license type=\"by-nc-sa\" url=\"https://creativecommons.org/licenses/by-nc-sa/4.0\" /><\/settings><sequence><item id=\"start\" name=\"puzle de agujero\" /><item name=\"rellenar\" /><\/sequence><activities><activity class=\"@puzzles.HolePuzzle\" name=\"puzle de agujero\" code=\"\"><description><p>arma la celula<\/p><\/description><messages><cell border=\"true\" type=\"initial\"><style /><p>Arma la célula <\/p><\/cell><cell type=\"final\"><style /><p>Felicitaciones!!<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><gradient source=\"0x000000\" dest=\"0xFFFFFF\" angle=\"142\" cycles=\"35\" /><counters time=\"true\" actions=\"true\" score=\"true\" /><\/container><window bgColor=\"0xC0C0C0\" border=\"true\" /><skin file=\"@green.xml\" /><\/settings><cells rows=\"3\" cols=\"3\" border=\"true\" image=\"Division-celular-resized.jpg\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"3\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@text.FillInBlanks\" name=\"rellenar\" code=\"\"><description /><messages /><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><counters time=\"true\" actions=\"true\" score=\"true\" /><\/container><window bgColor=\"0xC0C0C0\" border=\"true\" /><\/settings><document><style name=\"targetError\" base=\"target\" foreground=\"0xFF0000\" /><style name=\"target\" base=\"default\" foreground=\"0x0000FF\" target=\"true\" /><style name=\"default\" family=\"Arial\" background=\"0xFFFFFF\" size=\"13\" bold=\"false\" italic=\"false\" tabWidth=\"12\" /><section><p family=\"Arial\" background=\"0xFFFFFF\"><text family=\"Arial\" background=\"0xFFFFFF\">lo <\/text><target><answer>pollitos<\/answer><response fill=\"_\" length=\"8\" maxLength=\"8\" /><text>pollitos<\/text><\/target><text family=\"Arial\" background=\"0xFFFFFF\"> dicen pio pio pio cuando tienen <\/text><target><answer>hambre<\/answer><response fill=\"_\" length=\"6\" maxLength=\"6\" /><text>hambre<\/text><\/target><text family=\"Arial\" background=\"0xFFFFFF\"> cuando tienen frio<\/text><\/p><\/section><\/document><evaluator class=\"@ComplexEvaluator\" /><\/activity><\/activities><mediaBag><media name=\"Division-celular-resized.jpg\" file=\"division-celular-resized.jpg\" /><\/mediaBag><\/JClicProject>\r\n";}
