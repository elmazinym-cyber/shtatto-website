/* ============================================================
   SHTATTO' — menu data (89 items, 7 languages)
   n  = French base name (always shown — the authentic menu name)
   e  = em-content per language ('' or missing = no em)
        gloss style: "/ Mint tea"   ·   note style: "(banana, lemon)"
   p  = price in DH
   d  = description per language (optional)
   ============================================================ */

window.MENU = [

/* ============ TEA ============ */
{ cat:'tea', titleKey:'menu.g.tea',
  icon:'<path d="M5 8h11v6a5 5 0 01-5 5H10a5 5 0 01-5-5V8zM16 10h2a2.5 2.5 0 010 5h-2M8 4c0 1.5-1 1.5-1 3M12 4c0 1.5-1 1.5-1 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  items:[
    { n:"Thé à la menthe", e:{en:"/ Mint tea",es:"/ Té de menta",de:"/ Minztee",it:"/ Tè alla menta",ru:"/ Мятный чай",ar:"/ شاي بالنعناع"}, p:20 },
    { n:"Verveine", e:{en:"/ Verbena",es:"/ Verbena",de:"/ Verbena",it:"/ Verbena",ru:"/ Вербена",ar:"/ شاي لويزة"}, p:20 },
    { n:"Verveine au lait", e:{en:"/ Verbena with milk",es:"/ Verbena con leche",de:"/ Verbena mit Milch",it:"/ Verbena al latte",ru:"/ Вербена с молоком",ar:"/ لويزة بالحليب"}, p:20 },
    { n:"Thé épicé", e:{en:"/ Spice tea",es:"/ Té especiado",de:"/ Gewürztee",it:"/ Tè speziato",ru:"/ Пряный чай",ar:"/ شاي بالتوابل"}, p:25 },
    { n:"Thé à la cannelle", e:{en:"/ Cinnamon tea",es:"/ Té de canela",de:"/ Zimttee",it:"/ Tè alla cannella",ru:"/ Коричный чай",ar:"/ شاي بالقرفة"}, p:25 },
    { n:"Thé glacé", e:{en:"/ Iced tea",es:"/ Té helado",de:"/ Eistee",it:"/ Tè ghiacciato",ru:"/ Холодный чай",ar:"/ شاي مثلج"}, p:30 }
  ]},

/* ============ COFFEE ============ */
{ cat:'coffee', titleKey:'menu.g.coffee',
  icon:'<path d="M4 8h13v7a5 5 0 01-5 5H9a5 5 0 01-5-5V8zM17 10h1.5a2.5 2.5 0 010 5H17M7 3v2M11 3v2M15 3v2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  items:[
    { n:"Expresso", e:{en:"/ Espresso coffee",es:"/ Café espresso",de:"/ Espresso",it:"/ Espresso",ru:"/ Эспрессо",ar:"/ إسبريسو"}, p:20 },
    { n:"Double expresso", e:{en:"/ Double espresso",es:"/ Doble espresso",de:"/ Doppio Espresso",it:"/ Doppio espresso",ru:"/ Двойной эспрессо",ar:"/ إسبريسو مزدوج"}, p:25 },
    { n:"Café au lait", e:{en:"/ Coffee with milk",es:"/ Café con leche",de:"/ Kaffee mit Milch",it:"/ Caffè al latte",ru:"/ Кофе с молоком",ar:"/ قهوة بالحليب"}, p:20 },
    { n:"Café Macchiato", e:{en:"/ Macchiato coffee",es:"/ Café Macchiato",de:"/ Macchiato",it:"/ Caffè macchiato",ru:"/ Макиато",ar:"/ ماكياتو"}, p:20 },
    { n:"Café Noss Noss", e:{en:"/ Noss Noss coffee",es:"/ Café Noss Noss",de:"/ Noss Noss Kaffee",it:"/ Caffè Noss Noss",ru:"/ Кофе Носс Носс",ar:"/ قهوة نوس نوس"}, p:20 },
    { n:"Capuccino", e:{en:"/ Cappuccino",es:"/ Capuchino",de:"/ Cappuccino",it:"/ Cappuccino",ru:"/ Капучино",ar:"/ كابتشينو"}, p:25 },
    { n:"Café aux épices", e:{en:"/ Spiced coffee",es:"/ Café especiado",de:"/ Gewürzkaffee",it:"/ Caffè speziato",ru:"/ Пряный кофе",ar:"/ قهوة بالتوابل"}, p:25 },
    { n:"Café à la cannelle", e:{en:"/ Cinnamon coffee",es:"/ Café de canela",de:"/ Zimtkaffee",it:"/ Caffè alla cannella",ru:"/ Коричный кофе",ar:"/ قهوة بالقرفة"}, p:20 },
    { n:"Café au lait épicé", e:{en:"/ Coffee with spicy milk",es:"/ Café con leche especiada",de:"/ Kaffee mit würziger Milch",it:"/ Caffè al latte speziato",ru:"/ Кофе с пряным молоком",ar:"/ قهوة بالحليب الحار"}, p:25 },
    { n:"Café au lait à la cannelle", e:{en:"/ Coffee with milk & cinnamon",es:"/ Café con leche y canela",de:"/ Kaffee mit Milch & Zimt",it:"/ Caffè al latte e cannella",ru:"/ Кофе с молоком и корицей",ar:"/ قهوة بالحليب والقرفة"}, p:30 },
    { n:"Chocolat chaud", e:{en:"/ Hot chocolate",es:"/ Chocolate caliente",de:"/ Heißschokolade",it:"/ Cioccolata calda",ru:"/ Горячий шоколад",ar:"/ شوكولاتة ساخنة"}, p:20 },
    { n:"Café glacé", e:{en:"/ Iced coffee",es:"/ Café helado",de:"/ Eiskaffee",it:"/ Caffè ghiacciato",ru:"/ Холодный кофе",ar:"/ قهوة مثلجة"}, p:25 },
    { n:"Café au lait glacé", e:{en:"/ Iced coffee with milk",es:"/ Café con leche helado",de:"/ Eiskaffee mit Milch",it:"/ Caffè al latte ghiacciato",ru:"/ Холодный кофе с молоком",ar:"/ قهوة مثلجة بالحليب"}, p:30 }
  ]},

/* ============ JUICE ============ */
{ cat:'juice', titleKey:'menu.g.juice',
  icon:'<path d="M7 4h10l-1.2 15.2A2 2 0 0113.8 21h-3.6a2 2 0 01-2-1.8L7 4zM7 9h10M10 4V2.8M14 4V2.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  items:[
    { n:"Jus d'orange", e:{en:"/ Orange juice",es:"/ Zumo de naranja",de:"/ Orangensaft",it:"/ Succo d'arancia",ru:"/ Апельсиновый сок",ar:"/ عصير برتقال"}, p:25 },
    { n:"Jus de fruits de saison", e:{en:"/ Mix fruit juice",es:"/ Zumo de frutas de temporada",de:"/ Obstsaft der Saison",it:"/ Succo di frutta di stagione",ru:"/ Сок из сезонных фруктов",ar:"/ عصير فواكه موسمية"}, p:40 },
    { n:"Jus de citron à la menthe", e:{en:"/ Lemon juice with mint",es:"/ Zumo de limón con menta",de:"/ Zitronensaft mit Minze",it:"/ Succo di limone alla menta",ru:"/ Лимонный сок с мятой",ar:"/ عصير ليمون بالنعناع"}, p:40 },
    { n:"Sunset", e:{en:"(banana, lemon, orange)",fr:"(banane, limón, naranja)",es:"(plátano, limón, naranja)",de:"(Banane, Zitrone, Orange)",it:"(banana, limone, arancia)",ru:"(банан, лимон, апельсин)",ar:"(موز، ليمون، برتقال)"}, p:40 },
    { n:"Mojito Marocain", e:{en:"/ Moroccan Mojito (lemon & verbena)",es:"/ Mojito marroquí (limón y verbena)",de:"/ Marokkanischer Mojito (Zitrone & Verbena)",it:"/ Mojito marocchino (limone e verbena)",ru:"/ Марокканский мохито (лимон и вербена)",ar:"/ موهيتو مغربي (ليمون ولويزة)"}, p:40 },
    { n:"Jus d'épinard, orange, pomme, gingembre", e:{en:"/ Spinach, orange, apple & ginger",es:"/ Espinacas, naranja, manzana y jengibre",de:"/ Spinat, Orange, Apfel & Ingwer",it:"/ Spinacio, arancia, mela e zenzero",ru:"/ Шпинат, апельсин, яблоко и имбирь",ar:"/ سبانخ وبرتقال وتفاح وزنجبيل"}, p:45 },
    { n:"Jus d'avocat, orange, dates", e:{en:"/ Avocado, orange & dates",es:"/ Aguacate, naranja y dátiles",de:"/ Avocado, Orange & Datteln",it:"/ Avocado, arancia e datteri",ru:"/ Авокадо, апельсин и финики",ar:"/ أفوكادو وبرتقال وتمر"}, p:45 },
    { n:"Jus de carotte, orange, gingembre", e:{en:"/ Carrot, orange & ginger",es:"/ Zanahoria, naranja y jengibre",de:"/ Karotte, Orange & Ingwer",it:"/ Carota, arancia e zenzero",ru:"/ Морковь, апельсин и имбирь",ar:"/ جزر وبرتقال وزنجبيل"}, p:40 },
    { n:"Jus de betterave, pomme, gingembre", e:{en:"/ Beet, apple & ginger",es:"/ Remolacha, manzana y jengibre",de:"/ Rote Bete, Apfel & Ingwer",it:"/ Barbabietola, mela e zenzero",ru:"/ Свёкла, яблоко и имбирь",ar:"/ شمندر وتفاح وزنجبيل"}, p:40 },
    { n:"Rich", e:{en:"(ginger, mint leaf, cucumber, lemon, honey)",fr:"(gingembre, feuille de menthe, concombre, citron, miel)",es:"(jengibre, hoja de menta, pepino, limón, miel)",de:"(Ingwer, Minzblatt, Gurke, Zitrone, Honig)",it:"(zenzero, foglia di menta, cetriolo, limone, miele)",ru:"(имбирь, лист мяты, огурец, лимон, мёд)",ar:"(زنجبيل، ورقة نعناع، خيار، ليمون، عسل)"}, p:40 },
    { n:"Rabouz", e:{en:"(apple, orange, honey, orange blossom)",fr:"(pomme, orange, miel, fleur d'oranger)",es:"(manzana, naranja, miel, azahar)",de:"(Apfel, Orange, Honig, Orangenblüte)",it:"(mela, arancia, miele, fiore d'arancio)",ru:"(яблоко, апельсин, мёд, апельсиновый цвет)",ar:"(تفاح، برتقال، عسل، زهر البرتقال)"}, p:40 }
  ]},

/* ============ MOCKTAILS ============ */
{ cat:'mocktail', titleKey:'menu.g.mocktail',
  icon:'<path d="M4 5h16l-8 8v6h3v2H9v-2h3v-6L4 5zM9 19h6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  items:[
    { n:"Marrakech Ice-Tea", p:45, d:{
      en:"Mint, lemon & ginger tea, garnished with mint leaves",
      fr:"Thé à la menthe, citron et gingembre, garni de feuilles de menthe",
      es:"Té de menta, limón y jengibre, decorado con hojas de menta",
      de:"Minz-, Zitronen- und Ingwertee, garniert mit Minzblättern",
      it:"Tè alla menta, limone e zenzero, guarnito con foglie di menta",
      ru:"Чай с мятой, лимоном и имбирём, украшенный листьями мяты",
      ar:"شاي بالنعناع والليمون والزنجبيل، يُقدَّم بأوراق النعناع" } },
    { n:"Sunset Punch", p:55, d:{
      en:"Orange juice, pomegranate, squeeze of lemon & honey, garnished with lemon slice and mint",
      fr:"Jus d'orange, grenade, filet de citron & miel, garni de rondelle de citron et de menthe",
      es:"Zumo de naranja, granada, chorrito de limón y miel, decorado con rodaja de limón y menta",
      de:"Orangensaft, Granatapfel, Spritzer Zitrone & Honig, garniert mit Zitronenscheibe und Minze",
      it:"Succo d'arancia, melagrana, goccio di limone e miele, guarnito con fetta di limone e menta",
      ru:"Апельсиновый сок, гранат, лимон и мёд, украшенный долькой лимона и мятой",
      ar:"عصير برتقال ورمان ورشة ليمون وعسل، يُقدَّم بشرائح الليمون والنعناع" } },
    { n:"Mint Chocolate", p:50, d:{
      en:"Homemade vanilla ice cream blended with Moroccan mint, milk & dark chocolate, served with mint and chocolate",
      fr:"Glace vanille maison mixée à la menthe marocaine, au lait & chocolat noir, servie avec menthe et chocolat",
      es:"Helado de vainilla casero con menta marroquí, leche y chocolate negro, servido con menta y chocolate",
      de:"Hausgemachtes Vanilleeis mit marokkanischer Minze, Milch & Zartbitterschokolade, serviert mit Minze und Schokolade",
      it:"Gelato alla vaniglia fatto in casa con menta marocchina, latte e cioccolato fondente, servito con menta e cioccolato",
      ru:"Домашнее ванильное мороженое с марокканской мятой, молоком и тёмным шоколадом, подаётся с мятой и шоколадом",
      ar:"آيس كريم فانيلا محضّر في البيت مع النعناع المغربي والحليب والشوكولاتة الداكنة، يُقدَّم بالنعناع والشوكولاتة" } },
    { n:"Date & Amlou", p:60, d:{
      en:"Homemade vanilla ice cream blended with Medjool dates, amlou, milk, banana & honey",
      fr:"Glace vanille maison mixée aux dattes Medjool, amlou, lait, banane & miel",
      es:"Helado de vainilla casero con dátiles Medjool, amlou, leche, plátano y miel",
      de:"Hausgemachtes Vanilleeis mit Medjool-Datteln, Amlou, Milch, Banane & Honig",
      it:"Gelato alla vaniglia fatto in casa con datteri Medjool, amlou, latte, banana e miele",
      ru:"Домашнее ванильное мороженое с финиками меджул, амлу, молоком, бананом и мёдом",
      ar:"آيس كريم فانيلا محضّر في البيت مع تمر المجدول وأملو والحليب والموز والعسل" } },
    { n:"Rose Lemonade", p:55, d:{
      en:"Lemon juice, rose syrup, grenadine & sparkling water, garnished with a rose petal",
      fr:"Jus de citron, sirop de rose, grenadine & eau pétillante, garni d'un pétale de rose",
      es:"Zumo de limón, sirope de rosa, granadina y agua con gas, decorado con un pétalo de rosa",
      de:"Zitronensaft, Rosensirup, Grenadine & Sprudelwasser, garniert mit einem Rosenblatt",
      it:"Succo di limone, sciroppo di rosa, granatina e acqua frizzante, guarnito con un petalo di rosa",
      ru:"Лимонный сок, розовый сироп, гренадин и газированная вода, украшенный лепестком розы",
      ar:"عصير ليمون وشراب الورد ورمان ومياه فوارة، يُقدَّم ببتلة ورد" } },
    { n:"Vegan", p:60, d:{
      en:"Fresh pineapple, coconut milk and orange",
      fr:"Ananas frais, lait de coco et orange",
      es:"Piña fresca, leche de coco y naranja",
      de:"Frische Ananas, Kokosmilch und Orange",
      it:"Ananas fresco, latte di cocco e arancia",
      ru:"Свежий ананас, кокосовое молоко и апельсин",
      ar:"أناناس طازج وحليب جوز الهند وبرتقال" } },
    { n:"Virgin Mojito", p:60, d:{
      en:"Cane syrup, fresh mint, Sprite, lemon",
      fr:"Sirop de canne, menthe fraîche, Sprite, citron",
      es:"Sirope de caña, menta fresca, Sprite, limón",
      de:"Rohrzucker, frische Minze, Sprite, Zitrone",
      it:"Sciroppo di canna, menta fresca, Sprite, limone",
      ru:"Тростниковый сироп, свежая мята, Sprite, лимон",
      ar:"شراب القصب والنعناع الطازج وسبراي والليمون" } }
  ]},

/* ============ WATERS & SODAS ============ */
{ cat:'soda', titleKey:'menu.g.soda',
  icon:'<path d="M9 3h6M10 3v3l-2 3v10a2 2 0 002 2h4a2 2 0 002-2V9l-2-3V3M8 13h8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  items:[
    { n:"Eau minérale", e:{en:"/ Mineral water",es:"/ Agua mineral",de:"/ Mineralwasser",it:"/ Acqua minerale",ru:"/ Минеральная вода",ar:"/ ماء معدني"}, p:20 },
    { n:"Eau minérale grande", e:{en:"/ Mineral water large",es:"/ Agua mineral grande",de:"/ Mineralwasser groß",it:"/ Acqua minerale grande",ru:"/ Минеральная вода (большая)",ar:"/ ماء معدني كبير"}, p:30 },
    { n:"Eau gazeuse", e:{en:"/ Sparkling water",es:"/ Agua con gas",de:"/ Sprudelwasser",it:"/ Acqua frizzante",ru:"/ Газированная вода",ar:"/ ماء غازي"}, p:25 },
    { n:"Orangina", p:25 },
    { n:"Oulmes grande", e:{en:"/ Oulmes large",es:"/ Oulmes grande",de:"/ Oulmes groß",it:"/ Oulmes grande",ru:"/ Oulmes (большая)",ar:"/ أولميس كبير"}, p:35 },
    { n:"Coca Cola — Normal, Zero", p:20 },
    { n:"Schweppes Tonic, Citron", e:{en:"/ Tonic, Lemon",es:"/ Tónico, Limón",de:"/ Tonic, Zitrone",it:"/ Tonica, Limone",ru:"/ Тоник, Лимон",ar:"/ تونيك وليمون"}, p:20 },
    { n:"Bière sans alcool", e:{en:"/ Non-alcoholic beer",es:"/ Cerveza sin alcohol",de:"/ Alkoholfreies Bier",it:"/ Birra analcolica",ru:"/ Безалкогольное пиво",ar:"/ بيرة منزوعة الكحول"}, p:60 }
  ]},

/* ============ SALADS ============ */
{ cat:'salad', titleKey:'menu.g.salad',
  icon:'<path d="M3 12h18a9 9 0 01-18 0zM12 12c0-3 2-5 5-6M7 12c-.5-2 .5-4 2-5M12 4v3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  items:[
    { n:"Salade Shtatto", p:70, d:{
      en:"Chicken fillet, green & red salad, apple, cheese, raisins, walnuts, sesame, balsamic sauce",
      fr:"Filet de poulet, salade verte et rouge, pomme, fromage, raisins secs, noix, sésame, sauce balsamique",
      es:"Pechuga de pollo, ensalada verde y roja, manzana, queso, pasas, nueces, sésamo, salsa balsámica",
      de:"Hähnchenbrust, grüner & roter Salat, Apfel, Käse, Rosinen, Walnüsse, Sesam, Balsamicodressing",
      it:"Petto di pollo, insalata verde e rossa, mela, formaggio, uvetta, noci, sesamo, salsa balsamica",
      ru:"Куриное филе, зелёный и красный салат, яблоко, сыр, изюм, грецкие орехи, кунжут, бальзамик",
      ar:"صدر دجاج وسلطة خضراء وحمراء وتفاح وجبن وزبيب وجوز وسمسم وصلصة بلسميك" } },
    { n:"Salade Avocat", e:{en:"/ Avocado Salad",es:"/ Ensalada de aguacate",de:"/ Avocadosalat",it:"/ Insalata di avocado",ru:"/ Салат с авокадо",ar:"/ سلطة أفوكادو"}, p:70, d:{
      en:"Avocado, green salad, beetroot, turnip, pepper, cherry tomato, honey sauce",
      fr:"Avocat, salade verte, betterave, navet, poivron, tomate cerise, sauce au miel",
      es:"Aguacate, ensalada verde, remolacha, nabo, pimiento, tomate cherry, salsa de miel",
      de:"Avocado, grüner Salat, Rote Bete, Rübe, Paprika, Kirschtomate, Honigdressing",
      it:"Avocado, insalata verde, barbabietola, ravanello, peperone, pomodorino, salsa al miele",
      ru:"Авокадо, зелёный салат, свёкла, репа, перец, черри, соус с мёдом",
      ar:"أفوكادو وسلطة خضراء وشمندر ولفس وفلفل وطماطم كرزية وصلصة العسل" } },
    { n:"Salade Poulet Avocat", e:{en:"/ Chicken Avocado Salad",es:"/ Ensalada de pollo con aguacate",de:"/ Hähnchen-Avocadosalat",it:"/ Insalata di pollo e avocado",ru:"/ Куриный салат с авокадо",ar:"/ سلطة دجاج بالأفوكادو"}, p:70, d:{
      en:"Chicken fillet, avocado, green salad, lemon, cherry tomato, basil sauce",
      fr:"Filet de poulet, avocat, salade verte, citron, tomate cerise, sauce au basilic",
      es:"Pechuga de pollo, aguacate, ensalada verde, limón, tomate cherry, salsa de albahaca",
      de:"Hähnchenbrust, Avocado, grüner Salat, Zitrone, Kirschtomate, Basilikumdressing",
      it:"Petto di pollo, avocado, insalata verde, limone, pomodorino, salsa al basilico",
      ru:"Куриное филе, авокадо, зелёный салат, лимон, черри, соус с базиликом",
      ar:"صدر دجاج وأفوكادو وسلطة خضراء وليمون وطماطم كرزية وصلصة الريحان" } },
    { n:"Assortiment de Salades Marocaines", e:{en:"/ Moroccan Salad Assortment",es:"/ Selección de ensaladas marroquíes",de:"/ Marokkanischer Salatsortiment",it:"/ Selezione di insalate marocchine",ru:"/ Ассорти марокканских салатов",ar:"/ تشكيلة سلطات مغربية"}, p:70, d:{
      en:"Taktouka, honey pumpkin, zaalouk, grated carrot with cinnamon, grated cucumber with sesame",
      fr:"Taktouka, courge au miel, zaalouk, carotte râpée à la cannelle, concombre râpé au sésame",
      es:"Taktouka, calabaza con miel, zaalouk, zanahoria rallada con canela, pepino rallado con sésamo",
      de:"Taktouka, Honigkürbis, Zaalouk, geriebene Karotte mit Zimt, geriebene Gurke mit Sesam",
      it:"Taktouka, zucca al miele, zaalouk, carota grattugiata alla cannella, cetriolo grattugiato al sesamo",
      ru:"Тактука, тыква с мёдом, заалук, тёртая морковь с корицей, тёртый огурец с кунжутом",
      ar:"كتوكة ويقطين بالعسل وزعلوك وجزر مبشور بالقرفة وخيار مبشور بالسمسم" } },
    { n:"Salade d'Argane avec Falafel à la Betterave", e:{en:"/ Argan Salad with Beet Falafel",es:"/ Ensalada de argán con falafel de remolacha",de:"/ Argan-Salat mit Rote-Bete-Falafel",it:"/ Insalata di argan con falafel di barbabietola",ru:"/ Салат с арганой и фалафелем из свёклы",ar:"/ سلطة الأركان بفلافل الشمندر"}, p:80, d:{
      en:"White & red cabbage, almond, argan, carrot; falafel: beets, chickpeas, parsley",
      fr:"Chou blanc & rouge, amande, argane, carotte ; falafel : betterave, pois chiches, persil",
      es:"Col blanca y roja, almendra, argán, zanahoria; falafel: remolacha, garbanzos, perejil",
      de:"Weiß- & Rotkohl, Mandel, Argan, Karotte; Falafel: Rote Bete, Kichererbsen, Petersilie",
      it:"Cavolo bianco e rosso, mandorla, argan, carota; falafel: barbabietole, ceci, prezzemolo",
      ru:"Белая и красная капуста, миндаль, аргана, морковь; фалафель: свёкла, нут, петрушка",
      ar:"ملفوف أبيض وأحمر ولوز وأركان وجزر؛ فلافل: شمندر وحمص وبقدونس" } }
  ]},

/* ============ SANDWICHES ============ */
{ cat:'sandwich', titleKey:'menu.g.sandwich',
  icon:'<path d="M4 9c0-3 3.6-5 8-5s8 2 8 5H4zm0 0l1.5 8A2 2 0 007.5 19h9a2 2 0 002-2L20 9M4 13h16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  items:[
    { n:"Sandwich Kefta", p:70, d:{
      en:"Kefta salad, tomato, pickle",
      fr:"Salade kefta, tomate, cornichon",
      es:"Ensalada kefta, tomate, pepinillo",
      de:"Kefta-Salat, Tomate, eingelegte Gurke",
      it:"Insalata kefta, pomodoro, cetriolino",
      ru:"Салат с кефтой, помидор, солёный огурец",
      ar:"سلطة كفتة وطماطم ومخلل" } },
    { n:"Sandwich Poulet", e:{en:"/ Chicken Sandwich",es:"/ Sándwich de pollo",de:"/ Hähnchensandwich",it:"/ Panino di pollo",ru:"/ Куриный сэндвич",ar:"/ سندويتش دجاج"}, p:65, d:{
      en:"Chicken salad, tomato",
      fr:"Salade de poulet, tomate",
      es:"Ensalada de pollo, tomate",
      de:"Hähnchensalat, Tomate",
      it:"Insalata di pollo, pomodoro",
      ru:"Куриный салат, помидор",
      ar:"سلطة دجاج وطماطم" } },
    { n:"Sandwich Thon", e:{en:"/ Tuna Sandwich",es:"/ Sándwich de atún",de:"/ Thunfischsandwich",it:"/ Panino al tonno",ru:"/ Тунцовый сэндвич",ar:"/ سندويتش تونة"}, p:65, d:{
      en:"Tuna, salad, tomato, onion, olive",
      fr:"Thon, salade, tomate, oignon, olive",
      es:"Atún, ensalada, tomate, cebolla, aceituna",
      de:"Thunfisch, Salat, Tomate, Zwiebel, Olive",
      it:"Tonno, insalata, pomodoro, cipolla, oliva",
      ru:"Тунец, салат, помидор, лук, оливка",
      ar:"تونة وسلطة وطماطم وبصل وزيتون" } },
    { n:"Sandwich Végétarien", e:{en:"/ Vegetarian Sandwich",es:"/ Sándwich vegetariano",de:"/ Vegetarisches Sandwich",it:"/ Panino vegetariano",ru:"/ Вегетарианский сэндвич",ar:"/ سندويتش نباتي"}, p:70, d:{
      en:"Avocado, eggplant, tomato, butter",
      fr:"Avocat, aubergine, tomate, beurre",
      es:"Aguacate, berenjena, tomate, mantequilla",
      de:"Avocado, Aubergine, Tomate, Butter",
      it:"Avocado, melanzana, pomodoro, burro",
      ru:"Авокадо, баклажан, помидор, сливочное масло",
      ar:"أفوكادو وباذنجان وطماطم وزبدة" } }
  ]},

/* ============ BURGERS ============ */
{ cat:'burger', titleKey:'menu.g.burger',
  icon:'<path d="M4 10c0-3.3 3.6-6 8-6s8 2.7 8 6H4zm-0 2h16M4 16c0 1.5.9 2.8 2.3 3.4A9 9 0 0012 21a9 9 0 005.7-1.6C19.1 18.8 20 17.5 20 16H4z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  items:[
    { n:"Burger Végétarien", e:{en:"/ Vegetarian Burger",es:"/ Hamburguesa vegetariana",de:"/ Vegetarischer Burger",it:"/ Burger vegetariano",ru:"/ Вегетарианский бургер",ar:"/ برغر نباتي"}, p:90, d:{
      en:"Beetroot falafel, argan salad, guacamole, served with homemade potato chips",
      fr:"Falafel de betterave, salade à l'argane, guacamole, servi avec chips de pommes de terre maison",
      es:"Falafel de remolacha, ensalada de argán, guacamole, servido con patatas fritas caseras",
      de:"Rote-Bete-Falafel, Argan-Salat, Guacamole, serviert mit hausgemachten Kartoffelchips",
      it:"Falafel di barbabietola, insalata all'argan, guacamole, servito con patatine fatte in casa",
      ru:"Фалафель из свёклы, салат с арганой, гуакамоле, подаётся с домашними картофельными чипсами",
      ar:"فلافل الشمندر وسلطة الأركان وغواكامولي، يُقدَّم مع بطاطس مقرمشة محضّرة في البيت" } },
    { n:"Shtatto Burger", p:90, d:{
      en:"Kefta, eggplant, green salad, tomato, onion, cheese, egg, ketchup sauce",
      fr:"Kefta, aubergine, salade verte, tomate, oignon, fromage, œuf, sauce ketchup",
      es:"Kefta, berenjena, ensalada verde, tomate, cebolla, queso, huevo, salsa de tomate",
      de:"Kefta, Aubergine, grüner Salat, Tomate, Zwiebel, Käse, Ei, Ketchup",
      it:"Kefta, melanzana, insalata verde, pomodore, cipolla, formaggio, uovo, salsa ketchup",
      ru:"Кефта, баклажан, зелёный салат, помидор, лук, сыр, яйцо, кетчуп",
      ar:"كفتة وباذنجان وسلطة خضراء وطماطم وجبن وبيض وصلصة كاتشب" } },
    { n:"Club Sandwich Shtatto Poulet", p:80, d:{
      en:"Moroccan bread with chicken, onion, green olives",
      fr:"Pain marocain au poulet, oignon, olives vertes",
      es:"Pan marroquí con pollo, cebolla, aceitunas verdes",
      de:"Marokkanisches Brot mit Hähnchen, Zwiebel, grünen Oliven",
      it:"Pane marocchino con pollo, cipolla, olive verdi",
      ru:"Марокканский хлеб с курицей, луком и зелёными оливками",
      ar:"خبز مغربي بالدجاج والبصل والزيتون الأخضر" } },
    { n:"Club Sandwich Shtatto Kefta de bœuf", p:80, d:{
      en:"Moroccan bread with beef kefta, black olives, pear and onion",
      fr:"Pain marocain à la kefta de bœuf, olives noires, poire et oignon",
      es:"Pan marroquí con kefta de ternera, aceitunas negras, pera y cebolla",
      de:"Marokkanisches Brot mit Rinder-Kefta, schwarzen Oliven, Birne und Zwiebel",
      it:"Pane marocchino con kefta di manzo, olive nere, pera e cipolla",
      ru:"Марокканский хлеб с говяжьей кефтой, чёрными оливками, грушей и луком",
      ar:"خبز مغربي بالكفتة البقرية والزيتون الأسود والكمثرى والبصل" } }
  ]},

/* ============ OMELETTE ============ */
{ cat:'omelette', titleKey:'menu.g.omelette',
  icon:'<ellipse cx="12" cy="13" rx="8" ry="6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="13" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/>',
  items:[
    { n:"Omelette nature", p:35 },
    { n:"Omelette fromage", e:{en:"/ Cheese omelette",es:"/ Tortilla de queso",de:"/ Käse-Omelette",it:"/ Omelette al formaggio",ru:"/ Омлет с сыром",ar:"/ أومليت بالجبن"}, p:40 },
    { n:"Omelette kheliaa", e:{en:"/ Kheliaa omelette",es:"/ Tortilla de kheliaa",de:"/ Kheliaa-Omelette",it:"/ Omelette kheliaa",ru:"/ Омлет с хелиа",ar:"/ أومليت خليعة"}, p:40 }
  ]},

/* ============ NEMS ============ */
{ cat:'nems', titleKey:'menu.g.nems',
  icon:'<path d="M4 18l14-12 2 3L6 21l-2-3zM14 8l2 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  items:[
    { n:"Épinards et fromage", e:{en:"/ Spinach and cheese",es:"/ Espinacas y queso",de:"/ Spinat & Käse",it:"/ Spinaci e formaggio",ru:"/ Шпинат и сыр",ar:"/ سبانخ وجبن"}, p:80 },
    { n:"Poulet, épinards, fromage, champignons", e:{en:"/ Chicken, spinach, cheese, mushrooms",es:"/ Pollo, espinacas, queso y champiñones",de:"/ Hähnchen, Spinat, Käse & Pilze",it:"/ Pollo, spinaci, formaggio e funghi",ru:"/ Курица, шпинат, сыр и грибы",ar:"/ دجاج وسبانخ وجبن وفطر"}, p:90 }
  ]},

/* ============ PLATS ============ */
{ cat:'plat', titleKey:'menu.g.plat',
  icon:'<path d="M3 17h18M5 17a7 7 0 0114 0M12 6V4M10 6h4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  items:[
    { n:"Trio of drips", p:70, d:{
      en:"Hummus, guacamole & salsa, served with homemade chips",
      fr:"Houmous, guacamole & salsa, servi avec chips maison",
      es:"Hummus, guacamole y salsa, servido con patatas fritas caseras",
      de:"Hummus, Guacamole & Salsa, serviert mit hausgemachten Chips",
      it:"Hummus, guacamole e salsa, servito con chips fatte in casa",
      ru:"Хумус, гуакамоле и сальса, подаётся с домашними чипсами",
      ar:"حمص وغواكامولي وصلصة، يُقدَّم مع رقائق محضّرة في البيت" } },
    { n:"Rainbow nachos végétarien", e:{en:"/ Vegetarian Rainbow nachos",es:"/ Nachos vegetarianos",de:"/ Vegetarische Rainbow Nachos",it:"/ Nachos vegetariani",ru:"/ Вегетарианские начос",ar:"/ ناتشوز نباتي"}, p:90, d:{
      en:"Onion, tomatoes, red beans, cheese, olives, parsley, guacamole & salsa, served with corn chips",
      fr:"Oignon, tomates, haricots rouges, fromage, olives, persil, guacamole & salsa, servi avec nachos de maïs",
      es:"Cebolla, tomates, alubias rojas, queso, aceitunas, perejil, guacamole y salsa, servido con nachos de maíz",
      de:"Zwiebel, Tomaten, rote Bohnen, Käse, Oliven, Petersilie, Guacamole & Salsa, serviert mit Maischips",
      it:"Cipolla, pomodori, fagioli rossi, formaggio, olive, prezzemolo, guacamole e salsa, servito con nachos di mais",
      ru:"Лук, помидоры, красная фасоль, сыр, оливки, петрушка, гуакамоле и сальса, подаётся с кукурузными чипсами",
      ar:"بصل وطماطم وجوز أحمر وجبن وزيتون وبقدونس وغواكامولي وصلصة، يُقدَّم مع رقائق الذرة" } },
    { n:"Rainbow nachos kefta", p:110, d:{
      en:"Kefta, onion, tomatoes, red beans, cheese, olives, parsley, guacamole & salsa, served with corn chips",
      fr:"Kefta, oignon, tomates, haricots rouges, fromage, olives, persil, guacamole & salsa, servi avec nachos de maïs",
      es:"Kefta, cebolla, tomates, alubias rojas, queso, aceitunas, perejil, guacamole y salsa, servido con nachos de maíz",
      de:"Kefta, Zwiebel, Tomaten, rote Bohnen, Käse, Oliven, Petersilie, Guacamole & Salsa, serviert mit Maischips",
      it:"Kefta, cipolla, pomodori, fagioli rossi, formaggio, olive, prezzemolo, guacamole e salsa, servito con nachos di mais",
      ru:"Кефта, лук, помидоры, красная фасоль, сыр, оливки, петрушка, гуакамоле и сальса, подаётся с кукурузными чипсами",
      ar:"كفتة وبصل وطماطم وجوز أحمر وجبن وزيتون وبقدونس وغواكامولي وصلصة، يُقدَّم مع رقائق الذرة" } },
    { n:"Pastilla Poulet", e:{en:"/ Chicken Pastilla",es:"/ Pastilla de pollo",de:"/ Hähnchen-Pastilla",it:"/ Pastilla di pollo",ru:"/ Пастилья с курицей",ar:"/ بسطيلة بالدجاج"}, p:110, d:{
      en:"Chicken, almonds, onions, Moroccan spices, phyllo dough",
      fr:"Poulet, amandes, oignons, épices marocaines, pâte filo",
      es:"Pollo, almendras, cebollas, especias marroquíes, masa filo",
      de:"Hähnchen, Mandeln, Zwiebeln, marokkanische Gewürze, Filoteig",
      it:"Pollo, mandorle, cipolle, spezie marocchine, sfoglia fillo",
      ru:"Курица, миндаль, лук, марокканские специи, тесто фило",
      ar:"دجاج ولوز وبصل وبهارات مغربية وعجينة الفيلو" } },
    { n:"Courgettes Farcies à la Viande", e:{en:"/ Stuffed Zucchini with Ground Meat",es:"/ Calabacines rellenos con carne",de:"/ Gefüllte Zucchini mit Hackfleisch",it:"/ Zucchine ripiene di carne tritata",ru:"/ Кабачки, фаршированные мясом",ar:"/ كوسا محشوة باللحم"}, p:90, d:{
      en:"Rice, ground meat, onion",
      fr:"Riz, viande hachée, oignon",
      es:"Arroz, carne picada, cebolla",
      de:"Reis, Hackfleisch, Zwiebel",
      it:"Riso, carne macinata, cipolla",
      ru:"Рис, фарш, лук",
      ar:"أرز ولحم مفروم وبصل" } },
    { n:"Courgettes Farcies au Poulet", e:{en:"/ Stuffed Zucchini with Minced Chicken",es:"/ Calabacines rellenos con pollo",de:"/ Gefüllte Zucchini mit Hähnchen",it:"/ Zucchine ripiene di pollo",ru:"/ Кабачки, фаршированные курицей",ar:"/ كوسا محشوة بالدجاج"}, p:90, d:{
      en:"Rice, minced chicken, onion",
      fr:"Riz, poulet haché, oignon",
      es:"Arroz, pollo picado, cebolla",
      de:"Reis, gehacktes Hähnchen, Zwiebel",
      it:"Riso, pollo macinato, cipolla",
      ru:"Рис, куриный фарш, лук",
      ar:"أرز ودجاج مفروم وبصل" } },
    { n:"Seffa Medfouna au Poulet", e:{en:"/ Seffa Medfouna with Chicken",es:"/ Seffa Medfouna con pollo",de:"/ Seffa Medfouna mit Hähnchen",it:"/ Seffa Medfouna di pollo",ru:"/ Сеффа-медфуна с курицей",ar:"/ سفة مدفونة بالدجاج"}, p:110, d:{
      en:"Chicken, caramelized onions, candied apricots, Moroccan steamed vermicelli with butter",
      fr:"Poulet, oignons caramélisés, abricots confits, vermicelles marocains à la vapeur au beurre",
      es:"Pollo, cebollas caramelizadas, albaricoques confitados, fideos marroquíes al vapor con mantequilla",
      de:"Hähnchen, karamellisierte Zwiebeln, kandierte Aprikosen, marokkanische gedämpfte Nudeln mit Butter",
      it:"Pollo, cipolle caramellate, albicocche candite, vermicelli marocchini al vapore con burro",
      ru:"Курица, карамелизованный лук, кандированные абрикосы, марокканская паровая вермишель с маслом",
      ar:"دجاج وبصل مكرمل ومشمش مسكّر وشعرية مغربية بالبخار بالزبدة" } }
  ]},

/* ============ HARIRA ============ */
{ cat:'harira', titleKey:'menu.g.harira',
  icon:'<path d="M4 12h16l-2 7H6l-2-7zM6 12a6 6 0 0112 0M12 3v3M9 4.5l1 2M15 4.5l-1 2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  items:[
    { n:"Harira", e:{en:"/ Traditional Moroccan soup",es:"/ Sopa marroquí tradicional",de:"/ Traditionelle marokkanische Suppe",it:"/ Zuppa marocchina tradizionale",ru:"/ Традиционный марокканский суп",ar:"/ حريرة تقليدية"}, p:45, d:{
      en:"Tomato-based soup with chickpeas, lentils, fresh herbs and aromatic spices · gluten-free",
      fr:"Soupe à base de tomate, pois chiches, lentilles, herbes fraîches et épices aromatiques · sans gluten",
      es:"Sopa de tomate con garbanzos, lentejas, hierbas frescas y especias aromáticas · sin gluten",
      de:"Tomatensuppe mit Kichererbsen, Linsen, frischen Kräutern und aromatischen Gewürzen · glutenfrei",
      it:"Zuppa di pomodoro con ceci, lenticchie, erbe fresche e spezie aromatiche · senza glutine",
      ru:"Суп на основе томатов с нутом, чечевицей, свежей зеленью и ароматными специями · без глютена",
      ar:"شوربة الطماطم مع الحمص والعدس والأعشاب الطازجة والبهارات العطرية · خالية من الغلوتين" } }
  ]},

/* ============ TAGINE ============ */
{ cat:'tagine', titleKey:'menu.g.tagine',
  icon:'<path d="M5 19h14M6 19a6 6 0 0112 0M12 7V5M9.5 7c0-1.5-1-2-1-3.5C10 4 11 4.5 12 4.5s2-.5 3.5-1c0 1.5-1 2-1 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  items:[
    { n:"Tagine de légumes", e:{en:"/ Vegetarian tagine",es:"/ Tajín vegetariano",de:"/ Vegetarischer Tagine",it:"/ Tajine vegetariano",ru:"/ Овощной тажин",ar:"/ طاجين خضاري"}, p:80 },
    { n:"Tagine de bœuf & œufs", e:{en:"/ Beef & eggs",es:"/ Ternera y huevos",de:"/ Rindfleisch & Eier",it:"/ Manzo e uova",ru:"/ Говядина и яйца",ar:"/ لحم بقري بالبيض"}, p:80 },
    { n:"Tagine bérbère", e:{en:"/ Berber tagine",es:"/ Tajín bereber",de:"/ Berber-Tagine",it:"/ Tajine berbero",ru:"/ Берберский тажин",ar:"/ طاجين أمازيغي"}, p:80 },
    { n:"Tagine de poulet", e:{en:"/ Chicken tagine",es:"/ Tajín de pollo",de:"/ Hähnchen-Tagine",it:"/ Tajine di pollo",ru:"/ Куриный тажин",ar:"/ طاجين بالدجاج"}, p:90 },
    { n:"Tagine Poulet au cannelle", e:{en:"/ Chicken Tagine with Honey & Cinnamon",es:"/ Pollo con miel y canela",de:"/ Hähnchen mit Honig & Zimt",it:"/ Pollo al miele e cannella",ru:"/ Курица с мёдом и корицей",ar:"/ طاجين دجاج بالعسل والقرفة"}, p:90, d:{
      en:"Chicken, honey, cinnamon, orange and Moroccan spices",
      fr:"Poulet, miel, cannelle, orange et épices marocaines",
      es:"Pollo, miel, canela, naranja y especias marroquíes",
      de:"Hähnchen, Honig, Zimt, Orange und marokkanische Gewürze",
      it:"Pollo, miele, cannella, arancia e spezie marocchine",
      ru:"Курица, мёд, корица, апельсин и марокканские специи",
      ar:"دجاج وعسل وقرفة وبرتقال وبهارات مغربية" } },
    { n:"Tagine d'agneau", e:{en:"/ Lamb tagine",es:"/ Tajín de cordero",de:"/ Lamm-Tagine",it:"/ Tajine di agnello",ru:"/ Бараний тажин",ar:"/ طاجين لحم غنم"}, p:120 },
    { n:"Couscous", note:true, p:90, e:{
      en:"/ Every Friday", fr:"/ Chaque vendredi", es:"/ Cada viernes",
      de:"/ Jeden Freitag", it:"/ Ogni venerdì", ru:"/ Каждую пятницу", ar:"/ كل جمعة" } }
  ]},

/* ============ DESSERTS ============ */
{ cat:'dessert', titleKey:'menu.g.dessert',
  icon:'<path d="M5 12l2-6h10l2 6M4 12h16v3a5 5 0 01-5 5H9a5 5 0 01-5-5v-3zM12 6V3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  items:[
    { n:"Raïb", e:{en:"/ Moroccan yogurt",es:"/ Yogur marroquí",de:"/ Marokkanischer Joghurt",it:"/ Yogurt marocchino",ru:"/ Марокканский йогурт",ar:"/ لبن مغربي"}, p:30 },
    { n:"Orange à la cannelle", e:{en:"/ Cinnamon Orange",es:"/ Naranja con canela",de:"/ Orangen mit Zimt",it:"/ Arance alla cannella",ru:"/ Апельсин с корицей",ar:"/ برتقال بالقرفة"}, p:40 },
    { n:"Assiette de fruits", e:{en:"/ Fruit plate",es:"/ Plato de frutas",de:"/ Fruchtteller",it:"/ Piatto di frutta",ru:"/ Фруктовая тарелка",ar:"/ طبق فواكه"}, p:45 },
    { n:"Crêpe sucrée", e:{en:"/ Sweet crepe",es:"/ Crepe dulce",de:"/ Süße Crêpe",it:"/ Crêpe dolce",ru:"/ Сладкий креп",ar:"/ كريب حلو"}, p:40 },
    { n:"Crêpe Nutella", p:45 },
    { n:"Crêpe Nutella, Banane", p:50 },
    { n:"Tajine fruits de saison", e:{en:"/ Season fruit tagine",es:"/ Tajín de frutas de temporada",de:"/ Frucht-Tagine der Saison",it:"/ Tajine di frutta di stagione",ru:"/ Тажин из сезонных фруктов",ar:"/ طاجين فواكه موسمية"}, p:50 },
    { n:"Pâtisserie Marocaine", e:{en:"/ Moroccan Pastry",es:"/ Pastelería marroquí",de:"/ Marokkanisches Gebäck",it:"/ Pasticceria marocchina",ru:"/ Марокканская выпечка",ar:"/ حلويات مغربية"}, p:50 },
    { n:"Brownie", e:{en:"/ Brownies, ice cream & Amlou",es:"/ Brownies, helado y Amlou",de:"/ Brownies, Eis & Amlou",it:"/ Brownie, gelato e Amlou",ru:"/ Брауни, мороженое и амлу",ar:"/ براوني وآيس كريم وأملو"}, p:70 },
    { n:"Chbakia Ice Cream Safran", p:70 },
    { n:"Pastilla au Lait et Pistache", e:{en:"/ Milk and Pistachio Pastilla",es:"/ Pastilla de leche y pistacho",de:"/ Pastilla mit Milch & Pistazien",it:"/ Pastilla al latte e pistacchio",ru:"/ Пастилья с молоком и фисташкой",ar:"/ بسطيلة بالحليب والفستق"}, p:80 }
  ]}
];

/* Groups that get a little rising-steam animation in their title */
window.STEAM_CATS = ['tea', 'coffee', 'harira', 'tagine'];
