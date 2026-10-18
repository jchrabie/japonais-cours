/* Données partagées des glossaires et jeux. Les mots du cours 3 viennent de la fiche PDF et des deux supports vidéo associés. */

const adj = [
  {
    "id": "adj-001",
    "kanji": "上手",
    "kana": "じょうず",
    "romaji": "jouzu",
    "signification": [
      "doué",
      "habile"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-002",
    "kanji": "下手",
    "kana": "へた",
    "romaji": "heta",
    "signification": [
      "maladroit",
      "pas doué"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-003",
    "kanji": "便利",
    "kana": "べんり",
    "romaji": "benri",
    "signification": [
      "pratique"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-004",
    "kanji": "不便",
    "kana": "ふべん",
    "romaji": "fuben",
    "signification": [
      "peu pratique"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-005",
    "kanji": "変",
    "kana": "へん",
    "romaji": "hen",
    "signification": [
      "bizarre",
      "étrange"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-006",
    "kanji": "有名",
    "kana": "ゆうめい",
    "romaji": "yuumei",
    "signification": [
      "célèbre",
      "connu"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-007",
    "kanji": "大切",
    "kana": "たいせつ",
    "romaji": "taisetsu",
    "signification": [
      "important",
      "précieux"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-008",
    "kanji": "元気",
    "kana": "げんき",
    "romaji": "genki",
    "signification": [
      "en forme",
      "énergique"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-009",
    "kanji": "簡単",
    "kana": "かんたん",
    "romaji": "kantan",
    "signification": [
      "simple",
      "facile"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-010",
    "kanji": "大変",
    "kana": "たいへん",
    "romaji": "taihen",
    "signification": [
      "difficile",
      "pénible"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-011",
    "kanji": "静か",
    "kana": "しずか",
    "romaji": "shizuka",
    "signification": [
      "calme",
      "silencieux"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-012",
    "kanji": "にぎやか",
    "kana": "にぎやか",
    "romaji": "nigiyaka",
    "signification": [
      "animé"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-013",
    "kanji": "きれい",
    "kana": "きれい",
    "romaji": "kirei",
    "signification": [
      "beau",
      "propre"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-014",
    "kanji": "暇",
    "kana": "ひま",
    "romaji": "hima",
    "signification": [
      "libre",
      "disponible"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-015",
    "kanji": "好き",
    "kana": "すき",
    "romaji": "suki",
    "signification": [
      "aimer"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-016",
    "kanji": "嫌い",
    "kana": "きらい",
    "romaji": "kirai",
    "signification": [
      "détester"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-017",
    "kanji": "面白い",
    "kana": "おもしろい",
    "romaji": "omoshiroi",
    "signification": [
      "drôle",
      "intéressant"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-018",
    "kanji": "寒い",
    "kana": "さむい",
    "romaji": "samui",
    "signification": [
      "froid"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-019",
    "kanji": "暑い",
    "kana": "あつい",
    "romaji": "atsui",
    "signification": [
      "chaud"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-020",
    "kanji": "難しい",
    "kana": "むずかしい",
    "romaji": "muzukashii",
    "signification": [
      "difficile"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-021",
    "kanji": "弱い",
    "kana": "よわい",
    "romaji": "yowai",
    "signification": [
      "faible"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-022",
    "kanji": "強い",
    "kana": "つよい",
    "romaji": "tsuyoi",
    "signification": [
      "fort"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-023",
    "kanji": "うまい",
    "kana": "うまい",
    "romaji": "umai",
    "signification": [
      "bon",
      "savoureux"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-024",
    "kanji": "美味しい",
    "kana": "おいしい",
    "romaji": "oishii",
    "signification": [
      "délicieux"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-025",
    "kanji": "すごい",
    "kana": "すごい",
    "romaji": "sugoi",
    "signification": [
      "incroyable",
      "impressionnant"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-026",
    "kanji": "甘い",
    "kana": "あまい",
    "romaji": "amai",
    "signification": [
      "sucré",
      "doux"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-027",
    "kanji": "嬉しい",
    "kana": "うれしい",
    "romaji": "ureshii",
    "signification": [
      "heureux",
      "content"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-028",
    "kanji": "重い",
    "kana": "おもい",
    "romaji": "omoi",
    "signification": [
      "lourd"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-029",
    "kanji": "悲しい",
    "kana": "かなしい",
    "romaji": "kanashii",
    "signification": [
      "triste"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-030",
    "kanji": "汚い",
    "kana": "きたない",
    "romaji": "kitanai",
    "signification": [
      "sale"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-031",
    "kanji": "怖い",
    "kana": "こわい",
    "romaji": "kowai",
    "signification": [
      "effrayant"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-032",
    "kanji": "高い",
    "kana": "たかい",
    "romaji": "takai",
    "signification": [
      "haut",
      "cher"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-033",
    "kanji": "小さい",
    "kana": "ちいさい",
    "romaji": "chiisai",
    "signification": [
      "petit"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-034",
    "kanji": "大きい",
    "kana": "おおきい",
    "romaji": "ookii",
    "signification": [
      "grand"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-035",
    "kanji": "安い",
    "kana": "やすい",
    "romaji": "yasui",
    "signification": [
      "bon marché"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-036",
    "kanji": "新しい",
    "kana": "あたらしい",
    "romaji": "atarashii",
    "signification": [
      "nouveau"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-037",
    "kanji": "古い",
    "kana": "ふるい",
    "romaji": "furui",
    "signification": [
      "vieux"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-038",
    "kanji": "早い",
    "kana": "はやい",
    "romaji": "hayai",
    "signification": [
      "tôt",
      "rapide"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-039",
    "kanji": "遅い",
    "kana": "おそい",
    "romaji": "osoi",
    "signification": [
      "lent",
      "tard"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-040",
    "kanji": "悪い",
    "kana": "わるい",
    "romaji": "warui",
    "signification": [
      "mauvais"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-041",
    "kanji": "涼しい",
    "kana": "すずしい",
    "romaji": "suzushii",
    "signification": [
      "frais"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-042",
    "kanji": "暖かい",
    "kana": "あたたかい",
    "romaji": "atatakai",
    "signification": [
      "agréablement chaud"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-043",
    "kanji": "軽い",
    "kana": "かるい",
    "romaji": "karui",
    "signification": [
      "léger"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-044",
    "kanji": "優しい",
    "kana": "やさしい",
    "romaji": "yasashii",
    "signification": [
      "gentil",
      "facile selon le contexte"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-045",
    "kanji": "楽しい",
    "kana": "たのしい",
    "romaji": "tanoshii",
    "signification": [
      "amusant",
      "agréable"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-046",
    "kanji": "つまらない",
    "kana": "つまらない",
    "romaji": "tsumaranai",
    "signification": [
      "ennuyeux"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-047",
    "kanji": "忙しい",
    "kana": "いそがしい",
    "romaji": "isogashii",
    "signification": [
      "occupé"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-048",
    "kanji": "広い",
    "kana": "ひろい",
    "romaji": "hiroi",
    "signification": [
      "large",
      "spacieux"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-049",
    "kanji": "いい",
    "kana": "いい",
    "romaji": "ii",
    "signification": [
      "bon",
      "bien (négatif : よくない)"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い, irrégulier"
  },
  {
    "id": "adj-050",
    "kanji": "病気",
    "kana": "びょうき",
    "romaji": "byouki",
    "signification": [
      "malade"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-051",
    "kanji": "親切",
    "kana": "しんせつ",
    "romaji": "shinsetsu",
    "signification": [
      "gentil",
      "aimable"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-052",
    "kanji": "得意",
    "kana": "とくい",
    "romaji": "tokui",
    "signification": [
      "doué pour"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-053",
    "kanji": "だめ",
    "kana": "だめ",
    "romaji": "dame",
    "signification": [
      "pas bon",
      "interdit"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-054",
    "kanji": "楽",
    "kana": "らく",
    "romaji": "raku",
    "signification": [
      "facile",
      "confortable"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-055",
    "kanji": "いろいろ",
    "kana": "いろいろ",
    "romaji": "iroiro",
    "signification": [
      "varié",
      "divers"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-056",
    "kanji": "特別",
    "kana": "とくべつ",
    "romaji": "tokubetsu",
    "signification": [
      "spécial"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-057",
    "kanji": "普通",
    "kana": "ふつう",
    "romaji": "futsuu",
    "signification": [
      "normal",
      "ordinaire"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-058",
    "kanji": "真面目",
    "kana": "まじめ",
    "romaji": "majime",
    "signification": [
      "sérieux",
      "appliqué"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-059",
    "kanji": "複雑",
    "kana": "ふくざつ",
    "romaji": "fukuzatsu",
    "signification": [
      "complexe"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-060",
    "kanji": "丁寧",
    "kana": "ていねい",
    "romaji": "teinei",
    "signification": [
      "poli",
      "courtois"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-061",
    "kanji": "赤い",
    "kana": "あかい",
    "romaji": "akai",
    "signification": [
      "rouge"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-062",
    "kanji": "青い",
    "kana": "あおい",
    "romaji": "aoi",
    "signification": [
      "bleu"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-063",
    "kanji": "黄色い",
    "kana": "きいろい",
    "romaji": "kiiroi",
    "signification": [
      "jaune"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-064",
    "kanji": "茶色い",
    "kana": "ちゃいろい",
    "romaji": "chairoi",
    "signification": [
      "marron"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-065",
    "kanji": "黒い",
    "kana": "くろい",
    "romaji": "kuroi",
    "signification": [
      "noir"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-066",
    "kanji": "白い",
    "kana": "しろい",
    "romaji": "shiroi",
    "signification": [
      "blanc"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-067",
    "kanji": "かわいい",
    "kana": "かわいい",
    "romaji": "kawaii",
    "signification": [
      "mignon"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-068",
    "kanji": "大好き",
    "kana": "だいすき",
    "romaji": "daisuki",
    "signification": [
      "adorer"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-069",
    "kanji": "大嫌い",
    "kana": "だいきらい",
    "romaji": "daikirai",
    "signification": [
      "détester vraiment"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  },
  {
    "id": "adj-070",
    "kanji": "長い",
    "kana": "ながい",
    "romaji": "nagai",
    "signification": [
      "long"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-071",
    "kanji": "硬い",
    "kana": "かたい",
    "romaji": "katai",
    "signification": [
      "dur / coriace"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "い"
  },
  {
    "id": "adj-072",
    "kanji": "危険",
    "kana": "きけん",
    "romaji": "kiken",
    "signification": [
      "dangereux / dangereuse"
    ],
    "categorie": "adjectifs",
    "typeAdjectif": "な"
  }
];

const noms = [
  {
    "id": "noms-001",
    "kanji": "日本人",
    "kana": "にほんじん",
    "romaji": "nihonjin",
    "signification": [
      "personne japonaise"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-002",
    "kanji": "会社員",
    "kana": "かいしゃいん",
    "romaji": "kaishain",
    "signification": [
      "salarié"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-003",
    "kanji": "学生",
    "kana": "がくせい",
    "romaji": "gakusei",
    "signification": [
      "étudiant"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-004",
    "kanji": "先生",
    "kana": "せんせい",
    "romaji": "sensei",
    "signification": [
      "professeur"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-005",
    "kanji": "本",
    "kana": "ほん",
    "romaji": "hon",
    "signification": [
      "livre"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-006",
    "kanji": "問題",
    "kana": "もんだい",
    "romaji": "mondai",
    "signification": [
      "problème"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-007",
    "kanji": "休み",
    "kana": "やすみ",
    "romaji": "yasumi",
    "signification": [
      "repos",
      "congé"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-008",
    "kanji": "日本語",
    "kana": "にほんご",
    "romaji": "nihongo",
    "signification": [
      "langue japonaise"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-009",
    "kanji": "フランス人",
    "kana": "フランスじん",
    "romaji": "Furansujin",
    "signification": [
      "personne française"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-010",
    "kanji": "部屋",
    "kana": "へや",
    "romaji": "heya",
    "signification": [
      "chambre",
      "pièce"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-011",
    "kanji": "駅",
    "kana": "えき",
    "romaji": "eki",
    "signification": [
      "gare"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-012",
    "kanji": "町",
    "kana": "まち",
    "romaji": "machi",
    "signification": [
      "ville",
      "quartier"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-013",
    "kanji": "映画",
    "kana": "えいが",
    "romaji": "eiga",
    "signification": [
      "film"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-014",
    "kanji": "授業",
    "kana": "じゅぎょう",
    "romaji": "jugyou",
    "signification": [
      "cours"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-015",
    "kanji": "車",
    "kana": "くるま",
    "romaji": "kuruma",
    "signification": [
      "voiture"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-016",
    "kanji": "人",
    "kana": "ひと",
    "romaji": "hito",
    "signification": [
      "personne"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-017",
    "kanji": "寿司",
    "kana": "すし",
    "romaji": "sushi",
    "signification": [
      "sushis"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-018",
    "kanji": "ラーメン",
    "kana": "ラーメン",
    "romaji": "raamen",
    "signification": [
      "ramen"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-019",
    "kanji": "コーヒー",
    "kana": "コーヒー",
    "romaji": "koohii",
    "signification": [
      "café"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-020",
    "kanji": "音楽",
    "kana": "おんがく",
    "romaji": "ongaku",
    "signification": [
      "musique"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-021",
    "kanji": "スポーツ",
    "kana": "スポーツ",
    "romaji": "supootsu",
    "signification": [
      "sport"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-022",
    "kanji": "読書",
    "kana": "どくしょ",
    "romaji": "dokusho",
    "signification": [
      "lecture"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-023",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "ryokou",
    "signification": [
      "voyage"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-024",
    "kanji": "ゲーム",
    "kana": "ゲーム",
    "romaji": "geemu",
    "signification": [
      "jeu vidéo"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-025",
    "kanji": "猫",
    "kana": "ねこ",
    "romaji": "neko",
    "signification": [
      "chat"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-026",
    "kanji": "犬",
    "kana": "いぬ",
    "romaji": "inu",
    "signification": [
      "chien"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-027",
    "kanji": "雨",
    "kana": "あめ",
    "romaji": "ame",
    "signification": [
      "pluie"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-028",
    "kanji": "朝",
    "kana": "あさ",
    "romaji": "asa",
    "signification": [
      "matin"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-029",
    "kanji": "夜",
    "kana": "よる",
    "romaji": "yoru",
    "signification": [
      "nuit",
      "soir"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-030",
    "kanji": "仕事",
    "kana": "しごと",
    "romaji": "shigoto",
    "signification": [
      "travail"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-031",
    "kanji": "勉強",
    "kana": "べんきょう",
    "romaji": "benkyou",
    "signification": [
      "études"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-032",
    "kanji": "料理",
    "kana": "りょうり",
    "romaji": "ryouri",
    "signification": [
      "cuisine",
      "plat"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-033",
    "kanji": "お金",
    "kana": "おかね",
    "romaji": "okane",
    "signification": [
      "argent"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-034",
    "kanji": "自由",
    "kana": "じゆう",
    "romaji": "jiyuu",
    "signification": [
      "liberté"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-035",
    "kanji": "アニメ",
    "kana": "アニメ",
    "romaji": "anime",
    "signification": [
      "animé"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-036",
    "kanji": "うなぎ",
    "kana": "うなぎ",
    "romaji": "unagi",
    "signification": [
      "anguille"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-037",
    "kanji": "水",
    "kana": "みず",
    "romaji": "mizu",
    "signification": [
      "eau"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-038",
    "kanji": "肉",
    "kana": "にく",
    "romaji": "niku",
    "signification": [
      "viande"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-039",
    "kanji": "りんご",
    "kana": "りんご",
    "romaji": "ringo",
    "signification": [
      "pomme"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-040",
    "kanji": "おにぎり",
    "kana": "おにぎり",
    "romaji": "onigiri",
    "signification": [
      "boulette de riz"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-041",
    "kanji": "漫画",
    "kana": "まんが",
    "romaji": "manga",
    "signification": [
      "manga"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-042",
    "kanji": "何",
    "kana": "なに",
    "romaji": "nani",
    "signification": [
      "quoi"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-043",
    "kanji": "私",
    "kana": "わたし",
    "romaji": "watashi",
    "signification": [
      "je",
      "moi"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-044",
    "kanji": "僕",
    "kana": "ぼく",
    "romaji": "boku",
    "signification": [
      "je",
      "moi (masculin)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-045",
    "kanji": "兄",
    "kana": "あに",
    "romaji": "ani",
    "signification": [
      "grand frère"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-046",
    "kanji": "牛乳",
    "kana": "ぎゅうにゅう",
    "romaji": "gyuunyuu",
    "signification": [
      "lait"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-047",
    "kanji": "野菜",
    "kana": "やさい",
    "romaji": "yasai",
    "signification": [
      "légume(s)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-048",
    "kanji": "魚",
    "kana": "さかな",
    "romaji": "sakana",
    "signification": [
      "poisson"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-049",
    "kanji": "空",
    "kana": "そら",
    "romaji": "sora",
    "signification": [
      "ciel"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-050",
    "kanji": "鉛筆",
    "kana": "えんぴつ",
    "romaji": "enpitsu",
    "signification": [
      "crayon"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-051",
    "kanji": "ジュース",
    "kana": "ジュース",
    "romaji": "juusu",
    "signification": [
      "jus"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-052",
    "kanji": "壁",
    "kana": "かべ",
    "romaji": "kabe",
    "signification": [
      "mur"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-053",
    "kanji": "帽子",
    "kana": "ぼうし",
    "romaji": "boushi (bōshi)",
    "signification": [
      "chapeau"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-054",
    "kanji": "赤",
    "kana": "あか",
    "romaji": "aka",
    "signification": [
      "rouge (couleur)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-055",
    "kanji": "青",
    "kana": "あお",
    "romaji": "ao",
    "signification": [
      "bleu (couleur)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-056",
    "kanji": "黄色",
    "kana": "きいろ",
    "romaji": "kiiro",
    "signification": [
      "jaune (couleur)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-057",
    "kanji": "茶色",
    "kana": "ちゃいろ",
    "romaji": "chairo",
    "signification": [
      "marron (couleur)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-058",
    "kanji": "黒",
    "kana": "くろ",
    "romaji": "kuro",
    "signification": [
      "noir (couleur)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-059",
    "kanji": "白",
    "kana": "しろ",
    "romaji": "shiro",
    "signification": [
      "blanc (couleur)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-060",
    "kanji": "あなた",
    "kana": "あなた",
    "romaji": "anata",
    "signification": [
      "toi",
      "vous"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-061",
    "kanji": "彼",
    "kana": "かれ",
    "romaji": "kare",
    "signification": [
      "il",
      "lui"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-062",
    "kanji": "私たち",
    "kana": "わたしたち",
    "romaji": "watashitachi",
    "signification": [
      "nous"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-063",
    "kanji": "彼ら",
    "kana": "かれら",
    "romaji": "karera",
    "signification": [
      "ils",
      "eux"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-064",
    "kanji": "友達",
    "kana": "ともだち",
    "romaji": "tomodachi",
    "signification": [
      "ami",
      "ami(e)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-065",
    "kanji": "学校",
    "kana": "がっこう",
    "romaji": "gakkou",
    "signification": [
      "école"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-066",
    "kanji": "食べ物",
    "kana": "たべもの",
    "romaji": "tabemono",
    "signification": [
      "nourriture"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-067",
    "kanji": "電車",
    "kana": "でんしゃ",
    "romaji": "densha",
    "signification": [
      "train"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-068",
    "kanji": "今",
    "kana": "いま",
    "romaji": "ima",
    "signification": [
      "maintenant"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-069",
    "kanji": "今日",
    "kana": "きょう",
    "romaji": "kyou",
    "signification": [
      "aujourd’hui"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-070",
    "kanji": "明日",
    "kana": "あした",
    "romaji": "ashita",
    "signification": [
      "demain"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-071",
    "kanji": "パン",
    "kana": "パン",
    "romaji": "pan",
    "signification": [
      "pain"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-072",
    "kanji": "日本",
    "kana": "にほん",
    "romaji": "nihon",
    "signification": [
      "Japon"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-073",
    "kanji": "国",
    "kana": "くに",
    "romaji": "kuni",
    "signification": [
      "pays"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-074",
    "kanji": "海賊",
    "kana": "かいぞく",
    "romaji": "kaizoku",
    "signification": [
      "pirate"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-075",
    "kanji": "忍者",
    "kana": "にんじゃ",
    "romaji": "ninja",
    "signification": [
      "ninja"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-076",
    "kanji": "ビール",
    "kana": "ビール",
    "romaji": "biiru",
    "signification": [
      "bière"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-077",
    "kanji": "コーラ",
    "kana": "コーラ",
    "romaji": "koora",
    "signification": [
      "cola"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-078",
    "kanji": "刀",
    "kana": "かたな",
    "romaji": "katana",
    "signification": [
      "sabre",
      "épée"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-079",
    "kanji": "山",
    "kana": "やま",
    "romaji": "yama",
    "signification": [
      "montagne"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-080",
    "kanji": "髪",
    "kana": "かみ",
    "romaji": "kami",
    "signification": [
      "cheveux"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-081",
    "kanji": "ケーキ",
    "kana": "けーき",
    "romaji": "keeki",
    "signification": [
      "gâteau"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-082",
    "kanji": "飲み物",
    "kana": "のみもの",
    "romaji": "nomimono",
    "signification": [
      "boisson"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-083",
    "kanji": "店",
    "kana": "みせ",
    "romaji": "mise",
    "signification": [
      "magasin / boutique"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-084",
    "kanji": "ホテル",
    "kana": "ほてる",
    "romaji": "hoteru",
    "signification": [
      "hôtel"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-085",
    "kanji": "鬼",
    "kana": "おに",
    "romaji": "oni",
    "signification": [
      "démon"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-086",
    "kanji": "クナイ",
    "kana": "くない",
    "romaji": "kunai",
    "signification": [
      "kunai"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-087",
    "kanji": "写輪眼",
    "kana": "しゃりんがん",
    "romaji": "sharingan",
    "signification": [
      "Sharingan (œil fictif)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-088",
    "kanji": "伝説",
    "kana": "でんせつ",
    "romaji": "densetsu",
    "signification": [
      "légende"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-089",
    "kanji": "ヒーロー",
    "kana": "ひーろー",
    "romaji": "hiiroo",
    "signification": [
      "héros"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-090",
    "kanji": "木ノ葉",
    "kana": "このは",
    "romaji": "konoha",
    "signification": [
      "Konoha (village fictif)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-091",
    "kanji": "忍び",
    "kana": "しのび",
    "romaji": "shinobi",
    "signification": [
      "ninja"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-092",
    "kanji": "魔法",
    "kana": "まほう",
    "romaji": "mahou",
    "signification": [
      "magie"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-093",
    "kanji": "力",
    "kana": "ちから",
    "romaji": "chikara",
    "signification": [
      "force / puissance"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-094",
    "kanji": "夢",
    "kana": "ゆめ",
    "romaji": "yume",
    "signification": [
      "rêve"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-095",
    "kanji": "剣",
    "kana": "けん",
    "romaji": "ken",
    "signification": [
      "épée"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-096",
    "kanji": "プリンセス",
    "kana": "ぷりんせす",
    "romaji": "purinsesu",
    "signification": [
      "princesse"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-097",
    "kanji": "雄英高校",
    "kana": "ゆうえいこうこう",
    "romaji": "yuuei koukou",
    "signification": [
      "lycée Yuei (univers fictif)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-098",
    "kanji": "暁",
    "kana": "あかつき",
    "romaji": "akatsuki",
    "signification": [
      "Akatsuki (groupe fictif)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-099",
    "kanji": "メンバー",
    "kana": "めんばー",
    "romaji": "menbaa",
    "signification": [
      "membre"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-100",
    "kanji": "闇",
    "kana": "やみ",
    "romaji": "yami",
    "signification": [
      "ténèbres / obscurité"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-101",
    "kanji": "錬金術師",
    "kana": "れんきんじゅつし",
    "romaji": "renkinjutsushi",
    "signification": [
      "alchimiste"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-102",
    "kanji": "靴",
    "kana": "くつ",
    "romaji": "kutsu",
    "signification": [
      "chaussures"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-103",
    "kanji": "お父さん",
    "kana": "おとうさん",
    "romaji": "otousan",
    "signification": [
      "père (forme courante)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-104",
    "kanji": "ハッピー",
    "kana": "はっぴー",
    "romaji": "happii",
    "signification": [
      "Happy (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-105",
    "kanji": "鞄",
    "kana": "かばん",
    "romaji": "kaban",
    "signification": [
      "sac"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-106",
    "kanji": "緑",
    "kana": "みどり",
    "romaji": "midori",
    "signification": [
      "vert (couleur)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-107",
    "kanji": "オレンジ",
    "kana": "おれんじ",
    "romaji": "orenji",
    "signification": [
      "orange (couleur)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-108",
    "kanji": "ピンク",
    "kana": "ぴんく",
    "romaji": "pinku",
    "signification": [
      "rose (couleur)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-109",
    "kanji": "灰色",
    "kana": "はいいろ",
    "romaji": "haiiro",
    "signification": [
      "gris (couleur)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-110",
    "kanji": "グレー",
    "kana": "ぐれー",
    "romaji": "guree",
    "signification": [
      "gris (couleur)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-111",
    "kanji": "紫",
    "kana": "むらさき",
    "romaji": "murasaki",
    "signification": [
      "violet (couleur)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-112",
    "kanji": "麦わら",
    "kana": "むぎわら",
    "romaji": "mugiwara",
    "signification": [
      "paille / Chapeau de paille"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-113",
    "kanji": "一味",
    "kana": "いちみ",
    "romaji": "ichimi",
    "signification": [
      "groupe / équipage"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-114",
    "kanji": "ルフィ",
    "kana": "るふぃ",
    "romaji": "rufi",
    "signification": [
      "Luffy (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-115",
    "kanji": "ナルト",
    "kana": "なると",
    "romaji": "naruto",
    "signification": [
      "Naruto (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-116",
    "kanji": "サクラ",
    "kana": "さくら",
    "romaji": "sakura",
    "signification": [
      "Sakura (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-117",
    "kanji": "エドワード",
    "kana": "えどわーど",
    "romaji": "edowaado",
    "signification": [
      "Edward (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-118",
    "kanji": "たんじろう",
    "kana": "たんじろう",
    "romaji": "tanjirou",
    "signification": [
      "Tanjirō (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-119",
    "kanji": "ごくう",
    "kana": "ごくう",
    "romaji": "gokuu",
    "signification": [
      "Goku (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-120",
    "kanji": "ゾロ",
    "kana": "ぞろ",
    "romaji": "zoro",
    "signification": [
      "Zoro (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-121",
    "kanji": "ナミ",
    "kana": "なみ",
    "romaji": "nami",
    "signification": [
      "Nami (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-122",
    "kanji": "エレン",
    "kana": "えれん",
    "romaji": "eren",
    "signification": [
      "Eren (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-123",
    "kanji": "ヒナタ",
    "kana": "ひなた",
    "romaji": "hinata",
    "signification": [
      "Hinata (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-124",
    "kanji": "ゴン",
    "kana": "ごん",
    "romaji": "gon",
    "signification": [
      "Gon (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-125",
    "kanji": "キルア",
    "kana": "きるあ",
    "romaji": "kirua",
    "signification": [
      "Killua (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-126",
    "kanji": "サンジ",
    "kana": "さんじ",
    "romaji": "sanji",
    "signification": [
      "Sanji (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-127",
    "kanji": "ヒソカ",
    "kana": "ひそか",
    "romaji": "hisoka",
    "signification": [
      "Hisoka (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-128",
    "kanji": "カカシ",
    "kana": "かかし",
    "romaji": "kakashi",
    "signification": [
      "Kakashi (nom propre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-129",
    "kanji": "イーストブルー",
    "kana": "いーすとぶるー",
    "romaji": "iisuto buruu",
    "signification": [
      "East Blue (lieu fictif)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-130",
    "kanji": "月",
    "kana": "つき",
    "romaji": "tsuki",
    "signification": [
      "lune"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-131",
    "kanji": "携帯",
    "kana": "けいたい",
    "romaji": "keitai",
    "signification": [
      "téléphone portable"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-132",
    "kanji": "予約",
    "kana": "よやく",
    "romaji": "yoyaku",
    "signification": [
      "réservation"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-133",
    "kanji": "鋼",
    "kana": "はがね",
    "romaji": "hagane",
    "signification": [
      "acier"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-134",
    "kanji": "百",
    "kana": "ひゃく",
    "romaji": "hyaku",
    "signification": [
      "cent (unité numérique)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-135",
    "kanji": "千",
    "kana": "せん",
    "romaji": "sen",
    "signification": [
      "mille (unité numérique)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-136",
    "kanji": "万",
    "kana": "まん",
    "romaji": "man",
    "signification": [
      "dix mille (unité numérique)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-137",
    "kanji": "一",
    "kana": "いち",
    "romaji": "ichi",
    "signification": [
      "un (nombre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-138",
    "kanji": "二",
    "kana": "に",
    "romaji": "ni",
    "signification": [
      "deux (nombre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-139",
    "kanji": "三",
    "kana": "さん",
    "romaji": "san",
    "signification": [
      "trois (nombre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-140",
    "kanji": "四",
    "kana": "よん",
    "romaji": "yon",
    "signification": [
      "quatre (nombre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-141",
    "kanji": "五",
    "kana": "ご",
    "romaji": "go",
    "signification": [
      "cinq (nombre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-142",
    "kanji": "六",
    "kana": "ろく",
    "romaji": "roku",
    "signification": [
      "six (nombre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-143",
    "kanji": "七",
    "kana": "なな",
    "romaji": "nana",
    "signification": [
      "sept (nombre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-144",
    "kanji": "八",
    "kana": "はち",
    "romaji": "hachi",
    "signification": [
      "huit (nombre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-145",
    "kanji": "九",
    "kana": "きゅう",
    "romaji": "kyuu",
    "signification": [
      "neuf (nombre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-146",
    "kanji": "十",
    "kana": "じゅう",
    "romaji": "juu",
    "signification": [
      "dix (nombre)"
    ],
    "categorie": "noms"
  },
  {
    "id": "noms-147",
    "kanji": "ウソップ",
    "kana": "うそっぷ",
    "romaji": "usoppu",
    "signification": [
      "Usopp (nom propre)"
    ],
    "categorie": "noms"
  }
];

const verbes = [
  {
    "id": "verbes-001",
    "kanji": "食べる",
    "kana": "たべる",
    "romaji": "taberu",
    "signification": [
      "manger"
    ],
    "categorie": "verbes",
    "formePolie": "食べます (tabemasu)"
  },
  {
    "id": "verbes-002",
    "kanji": "飲む",
    "kana": "のむ",
    "romaji": "nomu",
    "signification": [
      "boire"
    ],
    "categorie": "verbes",
    "formePolie": "飲みます (nomimasu)"
  },
  {
    "id": "verbes-003",
    "kanji": "読む",
    "kana": "よむ",
    "romaji": "yomu",
    "signification": [
      "lire"
    ],
    "categorie": "verbes",
    "formePolie": "読みます (yomimasu)"
  },
  {
    "id": "verbes-004",
    "kanji": "見る",
    "kana": "みる",
    "romaji": "miru",
    "signification": [
      "voir",
      "regarder"
    ],
    "categorie": "verbes",
    "formePolie": "見ます (mimasu)"
  },
  {
    "id": "verbes-005",
    "kanji": "買う",
    "kana": "かう",
    "romaji": "kau",
    "signification": [
      "acheter"
    ],
    "categorie": "verbes",
    "formePolie": "買います (kaimasu)"
  },
  {
    "id": "verbes-006",
    "kanji": "勉強する",
    "kana": "べんきょうする",
    "romaji": "benkyou suru",
    "signification": [
      "étudier"
    ],
    "categorie": "verbes",
    "formePolie": "勉強します (benkyou shimasu)"
  },
  {
    "id": "verbes-007",
    "kanji": "戦う",
    "kana": "たたかう",
    "romaji": "tatakau",
    "signification": [
      "combattre",
      "se battre"
    ],
    "categorie": "verbes",
    "formePolie": "戦います (tatakaimasu)"
  },
  {
    "id": "verbes-008",
    "kanji": "行く",
    "kana": "いく",
    "romaji": "iku",
    "signification": [
      "aller"
    ],
    "categorie": "verbes",
    "formePolie": "行きます (ikimasu)"
  },
  {
    "id": "verbes-009",
    "kanji": "走る",
    "kana": "はしる",
    "romaji": "hashiru",
    "signification": [
      "courir"
    ],
    "categorie": "verbes",
    "formePolie": "走ります (hashirimasu)"
  },
  {
    "id": "verbes-010",
    "kanji": "寝る",
    "kana": "ねる",
    "romaji": "neru",
    "signification": [
      "dormir"
    ],
    "categorie": "verbes",
    "formePolie": "寝ます (nemasu)"
  },
  {
    "id": "verbes-011",
    "kanji": "切る",
    "kana": "きる",
    "romaji": "kiru",
    "signification": [
      "couper / trancher"
    ],
    "categorie": "verbes",
    "formePolie": "切ります (kirimasu)"
  },
  {
    "id": "verbes-012",
    "kanji": "する",
    "kana": "する",
    "romaji": "suru",
    "signification": [
      "faire"
    ],
    "categorie": "verbes",
    "formePolie": "します (shimasu)"
  },
  {
    "id": "verbes-013",
    "kanji": "予約する",
    "kana": "よやくする",
    "romaji": "yoyaku suru",
    "signification": [
      "réserver"
    ],
    "categorie": "verbes",
    "formePolie": "予約します (yoyaku shimasu)"
  },
  {
    "id": "verbes-014",
    "kanji": "料理する",
    "kana": "りょうりする",
    "romaji": "ryouri suru",
    "signification": [
      "cuisiner"
    ],
    "categorie": "verbes",
    "formePolie": "料理します (ryouri shimasu)"
  },
  {
    "id": "verbes-015",
    "kanji": "旅行する",
    "kana": "りょこうする",
    "romaji": "ryokou suru",
    "signification": [
      "voyager"
    ],
    "categorie": "verbes",
    "formePolie": "旅行します (ryokou shimasu)"
  }
];

window.JAPONAIS_VOCABULARY = { adj, noms, verbes };
