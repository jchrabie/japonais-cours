/* Banque commune de phrases pour les jeux de grammaire et de particules. */
(() => {
 "use strict";
 const phrases = [
  {
    "id": "PB1101",
    "fr": "Tanaka est professeur.",
    "romaji": "Tanaka-san wa sensei desu.",
    "kana": "たなかさんはせんせいです。",
    "kanji": "田中さんは先生です。",
    "course": 1,
    "wrongAnswers": [
      "Le professeur est gentil.",
      "Cette personne est un professeur.",
      "Goku est-il japonais ?"
    ]
  },
  {
    "id": "PB1102",
    "fr": "Yuki est étudiante.",
    "romaji": "Yuki-san wa gakusei desu.",
    "kana": "ゆきさんはがくせいです。",
    "kanji": "ゆきさんは学生です。",
    "course": 1,
    "wrongAnswers": [
      "Hachi est un chien.",
      "Le chat est mignon.",
      "Le chien est grand."
    ]
  },
  {
    "id": "PB1103",
    "fr": "Marc est français.",
    "romaji": "Māku-san wa Furansujin desu.",
    "kana": "まーくさんはふらんすじんです。",
    "kanji": "マークさんはフランス人です。",
    "course": 1,
    "wrongAnswers": [
      "La gare est calme.",
      "Mika est en forme.",
      "Yuki est étudiante."
    ]
  },
  {
    "id": "PB1104",
    "fr": "Sakura est japonaise.",
    "romaji": "Sakura-san wa Nihonjin desu.",
    "kana": "さくらさんはにほんじんです。",
    "kanji": "さくらさんは日本人です。",
    "course": 1,
    "wrongAnswers": [
      "Le sac bleu est à Sakura.",
      "Le sac de Sakura est pratique.",
      "Doraemon est un chat."
    ]
  },
  {
    "id": "PB1105",
    "fr": "Nezuko est une amie.",
    "romaji": "Nezuko-chan wa tomodachi desu.",
    "kana": "ねずこちゃんはともだちです。",
    "kanji": "ねずこちゃんは友達です。",
    "course": 1,
    "wrongAnswers": [
      "Le train est rapide.",
      "Yuki est étudiante.",
      "Sakura est japonaise."
    ]
  },
  {
    "id": "PB1106",
    "fr": "Doraemon est un chat.",
    "romaji": "Doraemon wa neko desu.",
    "kana": "ドラえもんはねこです。",
    "kanji": "ドラえもんは猫です。",
    "course": 1,
    "wrongAnswers": [
      "Le chat est mignon.",
      "Le chat n’est pas petit.",
      "Le chat est dans la chambre."
    ]
  },
  {
    "id": "PB1107",
    "fr": "Hachi est un chien.",
    "romaji": "Hachi wa inu desu.",
    "kana": "はちはいぬです。",
    "kanji": "ハチは犬です。",
    "course": 1,
    "wrongAnswers": [
      "Le chien est grand.",
      "Yuki est étudiante.",
      "Le chat est mignon."
    ]
  },
  {
    "id": "PB1108",
    "fr": "Cette école est grande.",
    "romaji": "Kono gakkou wa ookii desu.",
    "kana": "このがっこうはおおきいです。",
    "kanji": "この学校は大きいです。",
    "course": 1,
    "wrongAnswers": [
      "Cette école est-elle grande ?",
      "Cette gare est grande.",
      "Cette eau est froide."
    ]
  },
  {
    "id": "PB1109",
    "fr": "Ce livre est intéressant.",
    "romaji": "Kono hon wa omoshiroi desu.",
    "kana": "このほんはおもしろいです。",
    "kanji": "この本は面白いです。",
    "course": 1,
    "wrongAnswers": [
      "Le livre n’est pas ancien.",
      "Le livre est sur le bureau.",
      "Le livre d’Edward est ancien."
    ]
  },
  {
    "id": "PB1110",
    "fr": "Cette eau est froide.",
    "romaji": "Kono mizu wa tsumetai desu.",
    "kana": "このみずはつめたいです。",
    "kanji": "この水は冷たいです。",
    "course": 1,
    "wrongAnswers": [
      "Cette école est grande.",
      "Cette école est-elle grande ?",
      "Cette gare est grande."
    ]
  },
  {
    "id": "PB1111",
    "fr": "Le chat est mignon.",
    "romaji": "Neko wa kawaii desu.",
    "kana": "ねこはかわいいです。",
    "kanji": "猫はかわいいです。",
    "course": 1,
    "wrongAnswers": [
      "Doraemon est un chat.",
      "Le chat n’est pas petit.",
      "Le chat est dans la chambre."
    ]
  },
  {
    "id": "PB1112",
    "fr": "Le chien est grand.",
    "romaji": "Inu wa ookii desu.",
    "kana": "いぬはおおきいです。",
    "kanji": "犬は大きいです。",
    "course": 1,
    "wrongAnswers": [
      "Hachi est un chien.",
      "Yuki est étudiante.",
      "Le chat est mignon."
    ]
  },
  {
    "id": "PB1113",
    "fr": "Le train est rapide.",
    "romaji": "Densha wa hayai desu.",
    "kana": "でんしゃははやいです。",
    "kanji": "電車は速いです。",
    "course": 1,
    "wrongAnswers": [
      "Ce train est rapide.",
      "Nezuko est une amie.",
      "Yuki est étudiante."
    ]
  },
  {
    "id": "PB1114",
    "fr": "La gare est calme.",
    "romaji": "Eki wa shizuka desu.",
    "kana": "えきはしずかです。",
    "kanji": "駅は静かです。",
    "course": 1,
    "wrongAnswers": [
      "Où est la gare ?",
      "Cette gare est grande.",
      "L’hôtel de Gon est calme."
    ]
  },
  {
    "id": "PB1115",
    "fr": "Mika est en forme.",
    "romaji": "Mika-san wa genki desu.",
    "kana": "みかさんはげんきです。",
    "kanji": "みかさんは元気です。",
    "course": 1,
    "wrongAnswers": [
      "Marc est français.",
      "La gare est calme.",
      "Yuki est étudiante."
    ]
  },
  {
    "id": "PB1116",
    "fr": "Le professeur est gentil.",
    "romaji": "Sensei wa shinsetsu desu.",
    "kana": "せんせいはしんせつです。",
    "kanji": "先生は親切です。",
    "course": 1,
    "wrongAnswers": [
      "Tanaka est professeur.",
      "Cette personne est un professeur.",
      "Ce livre est intéressant."
    ]
  },
  {
    "id": "PB1117",
    "fr": "Le livre n’est pas ancien.",
    "romaji": "Hon wa furukunai desu.",
    "kana": "ほんはふるくないです。",
    "kanji": "本は古くないです。",
    "course": 1,
    "wrongAnswers": [
      "Le livre d’Edward est ancien.",
      "Ce livre est intéressant.",
      "Le chat n’est pas petit."
    ]
  },
  {
    "id": "PB1118",
    "fr": "Le chat n’est pas petit.",
    "romaji": "Neko wa chiisakunai desu.",
    "kana": "ねこはちいさくないです。",
    "kanji": "猫は小さくないです。",
    "course": 1,
    "wrongAnswers": [
      "Le livre n’est pas ancien.",
      "Doraemon est un chat.",
      "Le chat est mignon."
    ]
  },
  {
    "id": "PB1119",
    "fr": "Goku est-il japonais ?",
    "romaji": "Gokuu wa Nihonjin desu ka.",
    "kana": "ごくうはにほんじんですか。",
    "kanji": "悟空は日本人ですか。",
    "course": 1,
    "wrongAnswers": [
      "Tanaka est professeur.",
      "Sakura est japonaise.",
      "Doraemon est un chat."
    ]
  },
  {
    "id": "PB1120",
    "fr": "Cette école est-elle grande ?",
    "romaji": "Kono gakkou wa ookii desu ka.",
    "kana": "このがっこうはおおきいですか。",
    "kanji": "この学校は大きいですか。",
    "course": 1,
    "wrongAnswers": [
      "Cette école est grande.",
      "Cette gare est grande.",
      "Cette eau est froide."
    ]
  },
  {
    "id": "PB2201",
    "fr": "Tanaka aime les sushis.",
    "romaji": "Tanaka-san wa sushi ga suki desu.",
    "kana": "たなかさんはすしがすきです。",
    "kanji": "田中さんはすしが好きです。",
    "course": 2,
    "wrongAnswers": [
      "Doraemon aime les dorayaki.",
      "Yuki n’aime pas le lait.",
      "Aimes-tu les gâteaux ?"
    ]
  },
  {
    "id": "PB2202",
    "fr": "Mina adore le chocolat.",
    "romaji": "Mina-san wa chokoreeto ga daisuki desu.",
    "kana": "みなさんはチョコレートがだいすきです。",
    "kanji": "みなさんはチョコレートが大好きです。",
    "course": 2,
    "wrongAnswers": [
      "Goku adore la viande.",
      "Le chocolat est délicieux.",
      "Tanaka aime les sushis."
    ]
  },
  {
    "id": "PB2203",
    "fr": "Doraemon aime les dorayaki.",
    "romaji": "Doraemon wa dorayaki ga suki desu.",
    "kana": "ドラえもんはどらやきがすきです。",
    "kanji": "ドラえもんはどら焼きが好きです。",
    "course": 2,
    "wrongAnswers": [
      "Tanaka aime les sushis.",
      "Sasuke déteste les légumes.",
      "Nezuko n’aime pas le café."
    ]
  },
  {
    "id": "PB2204",
    "fr": "Nezuko n’aime pas le café.",
    "romaji": "Nezuko-chan wa kōhī ga suki ja arimasen.",
    "kana": "ねずこちゃんはコーヒーがすきじゃありません。",
    "kanji": "ねずこちゃんはコーヒーが好きじゃありません。",
    "course": 2,
    "wrongAnswers": [
      "Yuki n’aime pas le lait.",
      "Nezuko ne mange pas de viande.",
      "Doraemon aime les dorayaki."
    ]
  },
  {
    "id": "PB2205",
    "fr": "Sasuke déteste les légumes.",
    "romaji": "Sasuke wa yasai ga kirai desu.",
    "kana": "さすけはやさいがきらいです。",
    "kanji": "サスケは野菜が嫌いです。",
    "course": 2,
    "wrongAnswers": [
      "Les légumes ne sont pas mauvais.",
      "Doraemon aime les dorayaki.",
      "Sakura mange des légumes."
    ]
  },
  {
    "id": "PB2206",
    "fr": "Goku adore la viande.",
    "romaji": "Gokuu wa niku ga daisuki desu.",
    "kana": "ごくうはにくがだいすきです。",
    "kanji": "悟空は肉が大好きです。",
    "course": 2,
    "wrongAnswers": [
      "Goku mange de la viande.",
      "Mina adore le chocolat.",
      "Goku est-il japonais ?"
    ]
  },
  {
    "id": "PB2207",
    "fr": "Mika aime le poisson.",
    "romaji": "Mika-san wa sakana ga suki desu.",
    "kana": "みかさんはさかながすきです。",
    "kanji": "みかさんは魚が好きです。",
    "course": 2,
    "wrongAnswers": [
      "Tanaka aime les sushis.",
      "Yuki n’aime pas le lait.",
      "Mika boit du lait."
    ]
  },
  {
    "id": "PB2208",
    "fr": "Yuki n’aime pas le lait.",
    "romaji": "Yuki-san wa gyuunyuu ga suki ja arimasen.",
    "kana": "ゆきさんはぎゅうにゅうがすきじゃありません。",
    "kanji": "ゆきさんは牛乳が好きじゃありません。",
    "course": 2,
    "wrongAnswers": [
      "Nezuko n’aime pas le café.",
      "Tanaka aime les sushis.",
      "Doraemon aime les dorayaki."
    ]
  },
  {
    "id": "PB2209",
    "fr": "Je mange des sushis.",
    "romaji": "Watashi wa sushi o tabemasu.",
    "kana": "わたしはすしをたべます。",
    "kanji": "私はすしを食べます。",
    "course": 2,
    "wrongAnswers": [
      "Naruto mange des ramens.",
      "Sakura mange des légumes.",
      "Traduction proche mais incorrecte 1 : Je mange des sushis."
    ]
  },
  {
    "id": "PB2210",
    "fr": "Tanaka boit du café.",
    "romaji": "Tanaka-san wa kōhī o nomimasu.",
    "kana": "たなかさんはコーヒーをのみます。",
    "kanji": "田中さんはコーヒーを飲みます。",
    "course": 2,
    "wrongAnswers": [
      "Doraemon boit du thé.",
      "Mika boit du lait.",
      "Tanaka aime les sushis."
    ]
  },
  {
    "id": "PB2211",
    "fr": "Sakura mange des légumes.",
    "romaji": "Sakura-san wa yasai o tabemasu.",
    "kana": "さくらさんはやさいをたべます。",
    "kanji": "さくらさんは野菜を食べます。",
    "course": 2,
    "wrongAnswers": [
      "Naruto mange des ramens.",
      "Je mange des sushis.",
      "Sakura a des médicaments."
    ]
  },
  {
    "id": "PB2212",
    "fr": "Naruto mange des ramens.",
    "romaji": "Naruto wa raamen o tabemasu.",
    "kana": "なるとはラーメンをたべます。",
    "kanji": "ナルトはラーメンを食べます。",
    "course": 2,
    "wrongAnswers": [
      "Naruto a des ramens.",
      "Sakura mange des légumes.",
      "Je mange des sushis."
    ]
  },
  {
    "id": "PB2213",
    "fr": "Mika boit du lait.",
    "romaji": "Mika-san wa gyuunyuu o nomimasu.",
    "kana": "みかさんはぎゅうにゅうをのみます。",
    "kanji": "みかさんは牛乳を飲みます。",
    "course": 2,
    "wrongAnswers": [
      "Tanaka boit du café.",
      "Mika aime le poisson.",
      "Doraemon boit du thé."
    ]
  },
  {
    "id": "PB2214",
    "fr": "Luffy achète du poisson.",
    "romaji": "Rufi wa sakana o kaimasu.",
    "kana": "るふぃはさかなをかいます。",
    "kanji": "ルフィは魚を買います。",
    "course": 2,
    "wrongAnswers": [
      "Luffy achète un livre.",
      "Mika aime le poisson.",
      "J’achète deux pommes."
    ]
  },
  {
    "id": "PB2215",
    "fr": "Goku mange de la viande.",
    "romaji": "Gokuu wa niku o tabemasu.",
    "kana": "ごくうはにくをたべます。",
    "kanji": "悟空は肉を食べます。",
    "course": 2,
    "wrongAnswers": [
      "Goku adore la viande.",
      "Nezuko ne mange pas de viande.",
      "Naruto mange des ramens."
    ]
  },
  {
    "id": "PB2216",
    "fr": "Doraemon boit du thé.",
    "romaji": "Doraemon wa ocha o nomimasu.",
    "kana": "ドラえもんはおちゃをのみます。",
    "kanji": "ドラえもんはお茶を飲みます。",
    "course": 2,
    "wrongAnswers": [
      "Tanaka boit du café.",
      "Mika boit du lait.",
      "Doraemon aime les dorayaki."
    ]
  },
  {
    "id": "PB2217",
    "fr": "Le chocolat est délicieux.",
    "romaji": "Chokoreeto wa oishii desu.",
    "kana": "チョコレートはおいしいです。",
    "kanji": "チョコレートはおいしいです。",
    "course": 2,
    "wrongAnswers": [
      "Le repas de Luffy est délicieux.",
      "Mina adore le chocolat.",
      "Le curry est épicé."
    ]
  },
  {
    "id": "PB2218",
    "fr": "Le curry est épicé.",
    "romaji": "Karee wa karai desu.",
    "kana": "カレーはからいです。",
    "kanji": "カレーは辛いです。",
    "course": 2,
    "wrongAnswers": [
      "Le chocolat est délicieux.",
      "Yuki est étudiante.",
      "Hachi est un chien."
    ]
  },
  {
    "id": "PB2219",
    "fr": "Les légumes ne sont pas mauvais.",
    "romaji": "Yasai wa warukunai desu.",
    "kana": "やさいはわるくないです。",
    "kanji": "野菜は悪くないです。",
    "course": 2,
    "wrongAnswers": [
      "Sasuke déteste les légumes.",
      "Où sont les toilettes ?",
      "Doraemon aime les dorayaki."
    ]
  },
  {
    "id": "PB2220",
    "fr": "Aimes-tu les gâteaux ?",
    "romaji": "Keeki ga suki desu ka.",
    "kana": "ケーキがすきですか。",
    "kanji": "ケーキが好きですか。",
    "course": 2,
    "wrongAnswers": [
      "Tanaka aime les sushis.",
      "Doraemon aime les dorayaki.",
      "Sasuke déteste les légumes."
    ]
  },
  {
    "id": "PB3301",
    "fr": "Le manga de Naruto est intéressant.",
    "romaji": "Naruto no manga wa omoshiroi desu.",
    "kana": "なるとのまんがはおもしろいです。",
    "kanji": "ナルトの漫画は面白いです。",
    "course": 3,
    "wrongAnswers": [
      "Naruto lit le manga de Sakura.",
      "Le restaurant de Naruto est-il célèbre ?",
      "Le manga vert est à Gon."
    ]
  },
  {
    "id": "PB3302",
    "fr": "Le sabre de Sasuke est long.",
    "romaji": "Sasuke no katana wa nagai desu.",
    "kana": "さすけのかたなはながいです。",
    "kanji": "サスケの刀は長いです。",
    "course": 3,
    "wrongAnswers": [
      "Le sabre rouge est à Sasuke.",
      "Sasuke achète le sabre de Kakashi.",
      "Sasuke n’est pas à la maison."
    ]
  },
  {
    "id": "PB3303",
    "fr": "Le sac de Sakura est pratique.",
    "romaji": "Sakura no kaban wa benri desu.",
    "kana": "さくらのかばんはべんりです。",
    "kanji": "サクラのかばんは便利です。",
    "course": 3,
    "wrongAnswers": [
      "Le sac bleu est à Sakura.",
      "La clé est dans le sac.",
      "Sakura est japonaise."
    ]
  },
  {
    "id": "PB3304",
    "fr": "Le livre d’Edward est ancien.",
    "romaji": "Edowaado no hon wa furui desu.",
    "kana": "えどわーどのほんはふるいです。",
    "kanji": "エドワードの本は古いです。",
    "course": 3,
    "wrongAnswers": [
      "Le livre n’est pas ancien.",
      "La magie d’Edward est mystérieuse.",
      "Le vieux livre de Kakashi est lourd."
    ]
  },
  {
    "id": "PB3305",
    "fr": "Le repas de Luffy est délicieux.",
    "romaji": "Rufi no ryouri wa oishii desu.",
    "kana": "るふぃのりょうりはおいしいです。",
    "kanji": "ルフィの料理はおいしいです。",
    "course": 3,
    "wrongAnswers": [
      "Le voyage de Luffy est amusant.",
      "Luffy mange le repas de Sanji.",
      "Le chocolat est délicieux."
    ]
  },
  {
    "id": "PB3306",
    "fr": "L’hôtel de Gon est calme.",
    "romaji": "Gon no hoteru wa shizuka desu.",
    "kana": "ごんのホテルはしずかです。",
    "kanji": "ゴンのホテルは静かです。",
    "course": 3,
    "wrongAnswers": [
      "Le manga vert est à Gon.",
      "La gare est calme.",
      "Le sac bleu est à Sakura."
    ]
  },
  {
    "id": "PB3307",
    "fr": "Le pouvoir de Kakashi est important.",
    "romaji": "Kakashi no chikara wa taisetsu desu.",
    "kana": "かかしのちからはたいせつです。",
    "kanji": "カカシの力は大切です。",
    "course": 3,
    "wrongAnswers": [
      "Le vieux livre de Kakashi est lourd.",
      "Le manga de Naruto est intéressant.",
      "La magie d’Edward est mystérieuse."
    ]
  },
  {
    "id": "PB3308",
    "fr": "La magie d’Edward est mystérieuse.",
    "romaji": "Edowaado no mahou wa fushigi desu.",
    "kana": "えどわーどのまほうはふしぎです。",
    "kanji": "エドワードの魔法は不思議です。",
    "course": 3,
    "wrongAnswers": [
      "Le livre d’Edward est ancien.",
      "Le manga de Naruto est intéressant.",
      "Le repas de Luffy est délicieux."
    ]
  },
  {
    "id": "PB3309",
    "fr": "Naruto lit le manga de Sakura.",
    "romaji": "Naruto wa Sakura no manga o yomu.",
    "kana": "なるとはさくらのまんがをよむ。",
    "kanji": "ナルトはサクラの漫画を読む。",
    "course": 3,
    "wrongAnswers": [
      "Le manga de Naruto est intéressant.",
      "Le sac de Sakura est pratique.",
      "Gon regarde le film de Naruto."
    ]
  },
  {
    "id": "PB3310",
    "fr": "Sasuke achète le sabre de Kakashi.",
    "romaji": "Sasuke wa Kakashi no katana o kau.",
    "kana": "さすけはかかしのかたなをかう。",
    "kanji": "サスケはカカシの刀を買う。",
    "course": 3,
    "wrongAnswers": [
      "Le sabre de Sasuke est long.",
      "Le sabre rouge est à Sasuke.",
      "Sasuke a un sabre."
    ]
  },
  {
    "id": "PB3311",
    "fr": "Gon regarde le film de Naruto.",
    "romaji": "Gon wa Naruto no eiga o miru.",
    "kana": "ごんはなるとのえいがをみる。",
    "kanji": "ゴンはナルトの映画を見る。",
    "course": 3,
    "wrongAnswers": [
      "Doraemon regarde un film.",
      "Naruto lit le manga de Sakura.",
      "Le manga de Naruto est intéressant."
    ]
  },
  {
    "id": "PB3312",
    "fr": "Luffy mange le repas de Sanji.",
    "romaji": "Rufi wa Sanji no ryouri o taberu.",
    "kana": "るふぃはさんじのりょうりをたべる。",
    "kanji": "ルフィはサンジの料理を食べる。",
    "course": 3,
    "wrongAnswers": [
      "Le repas de Luffy est délicieux.",
      "Le voyage de Luffy est amusant.",
      "Nezuko ne mange pas de viande."
    ]
  },
  {
    "id": "PB3313",
    "fr": "Kakashi réserve l’hôtel de Konoha.",
    "romaji": "Kakashi wa Konoha no hoteru o yoyaku suru.",
    "kana": "かかしはこのはのホテルをよやくする。",
    "kanji": "カカシは木ノ葉のホテルを予約する。",
    "course": 3,
    "wrongAnswers": [
      "Sasuke achète le sabre de Kakashi.",
      "Le pouvoir de Kakashi est important.",
      "Le vieux livre de Kakashi est lourd."
    ]
  },
  {
    "id": "PB3314",
    "fr": "Le ninja de Konoha est fort.",
    "romaji": "Konoha no shinobi wa tsuyoi desu.",
    "kana": "このはのしのびはつよいです。",
    "kanji": "木ノ葉の忍びは強いです。",
    "course": 3,
    "wrongAnswers": [
      "Le sabre de Sasuke est long.",
      "Le sabre rouge est à Sasuke.",
      "Le livre d’Edward est ancien."
    ]
  },
  {
    "id": "PB3315",
    "fr": "Le sabre rouge est à Sasuke.",
    "romaji": "Akai katana wa Sasuke no desu.",
    "kana": "あかいかたなはさすけのです。",
    "kanji": "赤い刀はサスケのです。",
    "course": 3,
    "wrongAnswers": [
      "Le sabre de Sasuke est long.",
      "Sasuke achète le sabre de Kakashi.",
      "Sasuke n’est pas à la maison."
    ]
  },
  {
    "id": "PB3316",
    "fr": "Le sac bleu est à Sakura.",
    "romaji": "Aoi kaban wa Sakura no desu.",
    "kana": "あおいかばんはさくらのです。",
    "kanji": "青いかばんはサクラのです。",
    "course": 3,
    "wrongAnswers": [
      "Le sac de Sakura est pratique.",
      "La clé est dans le sac.",
      "Sakura est japonaise."
    ]
  },
  {
    "id": "PB3317",
    "fr": "Le manga vert est à Gon.",
    "romaji": "Midori no manga wa Gon no desu.",
    "kana": "みどりのまんがはごんのです。",
    "kanji": "緑の漫画はゴンのです。",
    "course": 3,
    "wrongAnswers": [
      "L’hôtel de Gon est calme.",
      "Le manga de Naruto est intéressant.",
      "Le sac bleu est à Sakura."
    ]
  },
  {
    "id": "PB3318",
    "fr": "Le vieux livre de Kakashi est lourd.",
    "romaji": "Kakashi no furui hon wa omoi desu.",
    "kana": "かかしのふるいほんはおもいです。",
    "kanji": "カカシの古い本は重いです。",
    "course": 3,
    "wrongAnswers": [
      "Le pouvoir de Kakashi est important.",
      "Le livre d’Edward est ancien.",
      "Le livre est sur le bureau."
    ]
  },
  {
    "id": "PB3319",
    "fr": "Le voyage de Luffy est amusant.",
    "romaji": "Rufi no ryokou wa tanoshii desu.",
    "kana": "るふぃのりょこうはたのしいです。",
    "kanji": "ルフィの旅行は楽しいです。",
    "course": 3,
    "wrongAnswers": [
      "Le repas de Luffy est délicieux.",
      "Le sac de Sakura est pratique.",
      "Luffy mange le repas de Sanji."
    ]
  },
  {
    "id": "PB3320",
    "fr": "Le restaurant de Naruto est-il célèbre ?",
    "romaji": "Naruto no resutoran wa yuumei desu ka.",
    "kana": "なるとのレストランはゆうめいですか。",
    "kanji": "ナルトのレストランは有名ですか。",
    "course": 3,
    "wrongAnswers": [
      "Le manga de Naruto est intéressant.",
      "Le restaurant est là-bas.",
      "Naruto est à l’école."
    ]
  },
  {
    "id": "PB401",
    "fr": "Naruto mange des ramens.",
    "romaji": "Naruto wa raamen o tabemasu.",
    "kana": "なるとはラーメンをたべます。",
    "kanji": "ナルトはラーメンを食べます。",
    "course": 4,
    "wrongAnswers": [
      "Naruto a des ramens.",
      "Sakura mange des légumes.",
      "Je mange des sushis."
    ]
  },
  {
    "id": "PB402",
    "fr": "Killua boit de l’eau.",
    "romaji": "Kirua wa mizu o nomimasu.",
    "kana": "キルアはみずをのみます。",
    "kanji": "キルアは水を飲みます。",
    "course": 4,
    "wrongAnswers": [
      "Konan ne boit pas d’alcool.",
      "Cette eau est froide.",
      "Doraemon boit du thé."
    ]
  },
  {
    "id": "PB403",
    "fr": "Konan ne boit pas d’alcool.",
    "romaji": "Konan wa osake o nomimasen.",
    "kana": "コナンはおさけをのみません。",
    "kanji": "コナンはお酒を飲みません。",
    "course": 4,
    "wrongAnswers": [
      "Nezuko ne mange pas de viande.",
      "Killua boit de l’eau.",
      "Le livre n’est pas ancien."
    ]
  },
  {
    "id": "PB404",
    "fr": "Sakura écrit une lettre.",
    "romaji": "Sakura wa tegami o kakimasu.",
    "kana": "さくらはてがみをかきます。",
    "kanji": "サクラは手紙を書きます。",
    "course": 4,
    "wrongAnswers": [
      "Sakura mange des légumes.",
      "Le sac bleu est à Sakura.",
      "Sakura a des médicaments."
    ]
  },
  {
    "id": "PB405",
    "fr": "Kakashi écoute de la musique.",
    "romaji": "Kakashi wa ongaku o kikimasu.",
    "kana": "カカシはおんがくをききます。",
    "kanji": "カカシは音楽を聞きます。",
    "course": 4,
    "wrongAnswers": [
      "Sasuke achète le sabre de Kakashi.",
      "Kakashi réserve l’hôtel de Konoha.",
      "Le pouvoir de Kakashi est important."
    ]
  },
  {
    "id": "PB406",
    "fr": "Luffy achète un livre.",
    "romaji": "Rufi wa hon o kaimasu.",
    "kana": "ルフィはほんをかいます。",
    "kanji": "ルフィは本を買います。",
    "course": 4,
    "wrongAnswers": [
      "Luffy achète du poisson.",
      "J’achète deux pommes.",
      "Ce livre est intéressant."
    ]
  },
  {
    "id": "PB407",
    "fr": "Je lis un manga.",
    "romaji": "Watashi wa manga o yomimasu.",
    "kana": "わたしはまんがをよみます。",
    "kanji": "私は漫画を読みます。",
    "course": 4,
    "wrongAnswers": [
      "Le manga vert est à Gon.",
      "Naruto lit le manga de Sakura.",
      "Le manga de Naruto est intéressant."
    ]
  },
  {
    "id": "PB408",
    "fr": "Tanaka parle japonais.",
    "romaji": "Tanaka-san wa nihongo o hanashimasu.",
    "kana": "たなかさんはにほんごをはなします。",
    "kanji": "田中さんは日本語を話します。",
    "course": 4,
    "wrongAnswers": [
      "Le professeur enseigne le japonais.",
      "Tanaka est professeur.",
      "Goku est-il japonais ?"
    ]
  },
  {
    "id": "PB409",
    "fr": "Yuki nage.",
    "romaji": "Yuki-san wa oyogimasu.",
    "kana": "ゆきさんはおよぎます。",
    "kanji": "ゆきさんは泳ぎます。",
    "course": 4,
    "wrongAnswers": [
      "Yuki est étudiante.",
      "Yuki n’aime pas le lait.",
      "Gon marche."
    ]
  },
  {
    "id": "PB410",
    "fr": "Gon marche.",
    "romaji": "Gon wa arukimasu.",
    "kana": "ゴンはあるきます。",
    "kanji": "ゴンは歩きます。",
    "course": 4,
    "wrongAnswers": [
      "Le manga vert est à Gon.",
      "L’hôtel de Gon est calme.",
      "Gon regarde le film de Naruto."
    ]
  },
  {
    "id": "PB411",
    "fr": "Nezuko ne mange pas de viande.",
    "romaji": "Nezuko-chan wa niku o tabemasen.",
    "kana": "ねずこちゃんはにくをたべません。",
    "kanji": "ねずこちゃんは肉を食べません。",
    "course": 4,
    "wrongAnswers": [
      "Nezuko n’aime pas le café.",
      "Goku mange de la viande.",
      "Konan ne boit pas d’alcool."
    ]
  },
  {
    "id": "PB412",
    "fr": "Doraemon regarde un film.",
    "romaji": "Doraemon wa eiga o mimasu.",
    "kana": "ドラえもんはえいがをみます。",
    "kanji": "ドラえもんは映画を見ます。",
    "course": 4,
    "wrongAnswers": [
      "Gon regarde le film de Naruto.",
      "Doraemon aime les dorayaki.",
      "Doraemon est un chat."
    ]
  },
  {
    "id": "PB413",
    "fr": "Je bois du thé.",
    "romaji": "Watashi wa ocha o nomimasu.",
    "kana": "わたしはおちゃをのみます。",
    "kanji": "私はお茶を飲みます。",
    "course": 4,
    "wrongAnswers": [
      "Doraemon boit du thé.",
      "Je lis un manga.",
      "Gon marche."
    ]
  },
  {
    "id": "PB414",
    "fr": "Sasuke va à l’école.",
    "romaji": "Sasuke wa gakkou e ikimasu.",
    "kana": "さすけはがっこうへいきます。",
    "kanji": "サスケは学校へ行きます。",
    "course": 4,
    "wrongAnswers": [
      "Naruto est à l’école.",
      "Sasuke a un sabre.",
      "Cette école est grande."
    ]
  },
  {
    "id": "PB415",
    "fr": "Mika rentre à la maison.",
    "romaji": "Mika-san wa uchi e kaerimasu.",
    "kana": "みかさんはうちへかえります。",
    "kanji": "みかさんは家へ帰ります。",
    "course": 4,
    "wrongAnswers": [
      "Mika aime le poisson.",
      "Sasuke n’est pas à la maison.",
      "Mika est en forme."
    ]
  },
  {
    "id": "PB416",
    "fr": "Le professeur enseigne le japonais.",
    "romaji": "Sensei wa nihongo o oshiemasu.",
    "kana": "せんせいはにほんごをおしえます。",
    "kanji": "先生は日本語を教えます。",
    "course": 4,
    "wrongAnswers": [
      "Tanaka parle japonais.",
      "Cette personne est un professeur.",
      "Le professeur est gentil."
    ]
  },
  {
    "id": "PB417",
    "fr": "Je me lève à sept heures.",
    "romaji": "Watashi wa shichi-ji ni okimasu.",
    "kana": "わたしはしちじにおきます。",
    "kanji": "私は七時に起きます。",
    "course": 4,
    "wrongAnswers": [
      "Il est sept heures.",
      "Il est sept heures et trente minutes.",
      "Le cours commence à neuf heures."
    ]
  },
  {
    "id": "PB418",
    "fr": "Le cours commence à neuf heures.",
    "romaji": "Jugyou wa ku-ji ni hajimarimasu.",
    "kana": "じゅぎょうはくじにはじまります。",
    "kanji": "授業は九時に始まります。",
    "course": 4,
    "wrongAnswers": [
      "Je me lève à sept heures.",
      "Il est sept heures et trente minutes.",
      "Il est sept heures."
    ]
  },
  {
    "id": "PB419",
    "fr": "Il y a trois livres.",
    "romaji": "Hon ga san-satsu arimasu.",
    "kana": "ほんがさんさつあります。",
    "kanji": "本が三冊あります。",
    "course": 4,
    "wrongAnswers": [
      "Sasuke va à l’école.",
      "Killua boit de l’eau.",
      "J’achète deux pommes."
    ]
  },
  {
    "id": "PB420",
    "fr": "J’achète deux pommes.",
    "romaji": "Ringo o futatsu kaimasu.",
    "kana": "りんごをふたつかいます。",
    "kanji": "りんごを二つ買います。",
    "course": 4,
    "wrongAnswers": [
      "Luffy achète un livre.",
      "Luffy achète du poisson.",
      "Sasuke achète le sabre de Kakashi."
    ]
  },
  {
    "id": "PB501",
    "fr": "Où est la gare ?",
    "romaji": "Eki wa doko desu ka.",
    "kana": "えきはどこですか。",
    "kanji": "駅はどこですか。",
    "course": 5,
    "wrongAnswers": [
      "Cette gare est grande.",
      "La gare est calme.",
      "Le bus est là-bas."
    ]
  },
  {
    "id": "PB502",
    "fr": "Où sont les toilettes ?",
    "romaji": "Toire wa doko desu ka.",
    "kana": "トイレはどこですか。",
    "kanji": "トイレはどこですか。",
    "course": 5,
    "wrongAnswers": [
      "Les légumes ne sont pas mauvais.",
      "Tanaka aime les sushis.",
      "Aimes-tu les gâteaux ?"
    ]
  },
  {
    "id": "PB503",
    "fr": "Où est le konbini ?",
    "romaji": "Konbini wa doko desu ka.",
    "kana": "コンビニはどこですか。",
    "kanji": "コンビニはどこですか。",
    "course": 5,
    "wrongAnswers": [
      "Quel livre est-ce ?",
      "Lequel est ton sac ?",
      "Ceci est mon billet."
    ]
  },
  {
    "id": "PB504",
    "fr": "Où se trouve l’hôtel ?",
    "romaji": "Hoteru wa doko ni arimasu ka.",
    "kana": "ホテルはどこにありますか。",
    "kanji": "ホテルはどこにありますか。",
    "course": 5,
    "wrongAnswers": [
      "L’hôtel de Gon est calme.",
      "Kakashi réserve l’hôtel de Konoha.",
      "Cette gare est grande."
    ]
  },
  {
    "id": "PB505",
    "fr": "Quel livre est-ce ?",
    "romaji": "Kore wa nan no hon desu ka.",
    "kana": "これはなんのほんですか。",
    "kanji": "これは何の本ですか。",
    "course": 5,
    "wrongAnswers": [
      "Ce livre est intéressant.",
      "Quel magasin est le tien ?",
      "Traduction proche mais incorrecte 1 : Quel livre est-ce ?"
    ]
  },
  {
    "id": "PB506",
    "fr": "Quel magasin est le tien ?",
    "romaji": "Anata no mise wa dono mise desu ka.",
    "kana": "あなたのみせはどのみせですか。",
    "kanji": "あなたのお店はどのお店ですか。",
    "course": 5,
    "wrongAnswers": [
      "Quel livre est-ce ?",
      "Le ballon est dans le magasin.",
      "Ce livre est intéressant."
    ]
  },
  {
    "id": "PB507",
    "fr": "Ce livre est intéressant.",
    "romaji": "Kono hon wa omoshiroi desu.",
    "kana": "このほんはおもしろいです。",
    "kanji": "この本は面白いです。",
    "course": 5,
    "wrongAnswers": [
      "Quel livre est-ce ?",
      "Le livre n’est pas ancien.",
      "Le livre est sur le bureau."
    ]
  },
  {
    "id": "PB508",
    "fr": "Cette personne est un professeur.",
    "romaji": "Sono hito wa sensei desu.",
    "kana": "そのひとはせんせいです。",
    "kanji": "その人は先生です。",
    "course": 5,
    "wrongAnswers": [
      "Cette gare est grande.",
      "Cette école est-elle grande ?",
      "Le professeur est gentil."
    ]
  },
  {
    "id": "PB509",
    "fr": "Cette gare est grande.",
    "romaji": "Ano eki wa ookii desu.",
    "kana": "あのえきはおおきいです。",
    "kanji": "あの駅は大きいです。",
    "course": 5,
    "wrongAnswers": [
      "Cette école est grande.",
      "Cette école est-elle grande ?",
      "Où est la gare ?"
    ]
  },
  {
    "id": "PB510",
    "fr": "Lequel est ton sac ?",
    "romaji": "Anata no kaban wa dore desu ka.",
    "kana": "あなたのかばんはどれですか。",
    "kanji": "あなたのかばんはどれですか。",
    "course": 5,
    "wrongAnswers": [
      "La clé est dans le sac.",
      "Le sac bleu est à Sakura.",
      "Le sac de Sakura est pratique."
    ]
  },
  {
    "id": "PB511",
    "fr": "Ceci est mon billet.",
    "romaji": "Kore wa watashi no kippu desu.",
    "kana": "これはわたしのきっぷです。",
    "kanji": "これは私の切符です。",
    "course": 5,
    "wrongAnswers": [
      "Lequel est ton sac ?",
      "Ce train est rapide.",
      "Où est le konbini ?"
    ]
  },
  {
    "id": "PB512",
    "fr": "Ce train est rapide.",
    "romaji": "Kono densha wa hayai desu.",
    "kana": "このでんしゃははやいです。",
    "kanji": "この電車は速いです。",
    "course": 5,
    "wrongAnswers": [
      "Le train est rapide.",
      "Lequel est ton sac ?",
      "Ceci est mon billet."
    ]
  },
  {
    "id": "PB513",
    "fr": "Combien coûte ce vêtement ?",
    "romaji": "Kono fuku wa ikura desu ka.",
    "kana": "このふくはいくらですか。",
    "kanji": "この服はいくらですか。",
    "course": 5,
    "wrongAnswers": [
      "En métro, combien de temps ?",
      "Combien de chaussures ?",
      "Combien de temps cela prend-il ?"
    ]
  },
  {
    "id": "PB514",
    "fr": "Combien de chaussures ?",
    "romaji": "Kutsu wa ikutsu desu ka.",
    "kana": "くつはいくつですか。",
    "kanji": "靴はいくつですか。",
    "course": 5,
    "wrongAnswers": [
      "Combien coûte ce vêtement ?",
      "En métro, combien de temps ?",
      "Combien de temps cela prend-il ?"
    ]
  },
  {
    "id": "PB515",
    "fr": "Combien de temps cela prend-il ?",
    "romaji": "Dore gurai kakarimasu ka.",
    "kana": "どれぐらいかかりますか。",
    "kanji": "どれぐらいかかりますか。",
    "course": 5,
    "wrongAnswers": [
      "En métro, combien de temps ?",
      "Combien coûte ce vêtement ?",
      "Combien de chaussures ?"
    ]
  },
  {
    "id": "PB516",
    "fr": "C’est à environ cinq minutes à pied.",
    "romaji": "Aruite gofun gurai desu.",
    "kana": "あるいてごふんぐらいです。",
    "kanji": "歩いて五分ぐらいです。",
    "course": 5,
    "wrongAnswers": [
      "Il est sept heures et trente minutes.",
      "Cette personne est un professeur.",
      "Quel magasin est le tien ?"
    ]
  },
  {
    "id": "PB517",
    "fr": "En métro, combien de temps ?",
    "romaji": "Chikatetsu de dore gurai desu ka.",
    "kana": "ちかてつでどれぐらいですか。",
    "kanji": "地下鉄でどれぐらいですか。",
    "course": 5,
    "wrongAnswers": [
      "Combien de temps cela prend-il ?",
      "Combien coûte ce vêtement ?",
      "Combien de chaussures ?"
    ]
  },
  {
    "id": "PB518",
    "fr": "Le restaurant est là-bas.",
    "romaji": "Resutoran wa asoko desu.",
    "kana": "レストランはあそこです。",
    "kanji": "レストランはあそこです。",
    "course": 5,
    "wrongAnswers": [
      "Le bus est là-bas.",
      "Le restaurant de Naruto est-il célèbre ?",
      "Ce livre est intéressant."
    ]
  },
  {
    "id": "PB519",
    "fr": "La pharmacie est ici.",
    "romaji": "Yakkyoku wa koko desu.",
    "kana": "やっきょくはここです。",
    "kanji": "薬局はここです。",
    "course": 5,
    "wrongAnswers": [
      "Cette gare est grande.",
      "Lequel est ton sac ?",
      "Ceci est mon billet."
    ]
  },
  {
    "id": "PB520",
    "fr": "Le bus est là-bas.",
    "romaji": "Basu wa soko desu.",
    "kana": "バスはそこです。",
    "kanji": "バスはそこです。",
    "course": 5,
    "wrongAnswers": [
      "Le restaurant est là-bas.",
      "Où est le konbini ?",
      "Quel livre est-ce ?"
    ]
  },
  {
    "id": "PB601",
    "fr": "Sasuke est dans la ville.",
    "romaji": "Sasuke wa machi ni iru.",
    "kana": "さすけはまちにいる。",
    "kanji": "サスケは町にいる。",
    "course": 6,
    "wrongAnswers": [
      "La clé est dans le sac.",
      "Le chat est dans la chambre.",
      "Sasuke n’est pas à la maison."
    ]
  },
  {
    "id": "PB602",
    "fr": "Naruto est à l’école.",
    "romaji": "Naruto wa gakkou ni imasu.",
    "kana": "なるとはがっこうにいます。",
    "kanji": "ナルトは学校にいます。",
    "course": 6,
    "wrongAnswers": [
      "Cette école est grande.",
      "Cette école est-elle grande ?",
      "Le manga de Naruto est intéressant."
    ]
  },
  {
    "id": "PB603",
    "fr": "Le chat est dans la chambre.",
    "romaji": "Neko wa heya ni imasu.",
    "kana": "ねこはへやにいます。",
    "kanji": "猫は部屋にいます。",
    "course": 6,
    "wrongAnswers": [
      "Le ballon n’est pas dans la chambre.",
      "Le ballon est dans le magasin.",
      "Sasuke est dans la ville."
    ]
  },
  {
    "id": "PB604",
    "fr": "Le ballon est dans le magasin.",
    "romaji": "Booru wa mise ni aru.",
    "kana": "ボールはみせにある。",
    "kanji": "ボールは店にある。",
    "course": 6,
    "wrongAnswers": [
      "Le ballon n’est pas dans la chambre.",
      "Le chat est dans la chambre.",
      "Sasuke est dans la ville."
    ]
  },
  {
    "id": "PB605",
    "fr": "Le livre est sur le bureau.",
    "romaji": "Hon wa tsukue ni arimasu.",
    "kana": "ほんはつくえにあります。",
    "kanji": "本は机にあります。",
    "course": 6,
    "wrongAnswers": [
      "Le livre n’est pas ancien.",
      "Ce livre est intéressant.",
      "Le livre d’Edward est ancien."
    ]
  },
  {
    "id": "PB606",
    "fr": "La clé est dans le sac.",
    "romaji": "Kagi wa kaban ni arimasu.",
    "kana": "かぎはかばんにあります。",
    "kanji": "鍵はかばんにあります。",
    "course": 6,
    "wrongAnswers": [
      "Sasuke est dans la ville.",
      "Le chat est dans la chambre.",
      "Le ballon est dans le magasin."
    ]
  },
  {
    "id": "PB607",
    "fr": "Sasuke a un sabre.",
    "romaji": "Sasuke wa katana ga aru.",
    "kana": "さすけはかたながある。",
    "kanji": "サスケは刀がある。",
    "course": 6,
    "wrongAnswers": [
      "Le sabre de Sasuke est long.",
      "Le sabre rouge est à Sasuke.",
      "Sasuke achète le sabre de Kakashi."
    ]
  },
  {
    "id": "PB608",
    "fr": "Naruto a des ramens.",
    "romaji": "Naruto wa raamen ga arimasu.",
    "kana": "なるとはラーメンがあります。",
    "kanji": "ナルトはラーメンがあります。",
    "course": 6,
    "wrongAnswers": [
      "Naruto mange des ramens.",
      "Naruto a des amis.",
      "Traduction proche mais incorrecte 1 : Naruto a des ramens."
    ]
  },
  {
    "id": "PB609",
    "fr": "J’ai de l’argent.",
    "romaji": "Watashi wa okane ga arimasu.",
    "kana": "わたしはおかねがあります。",
    "kanji": "私はお金があります。",
    "course": 6,
    "wrongAnswers": [
      "Naruto n’a pas d’argent.",
      "Sasuke a un sabre.",
      "Naruto a des amis."
    ]
  },
  {
    "id": "PB610",
    "fr": "Sakura a des médicaments.",
    "romaji": "Sakura wa kusuri ga arimasu.",
    "kana": "さくらはくすりがあります。",
    "kanji": "サクラは薬があります。",
    "course": 6,
    "wrongAnswers": [
      "Sakura mange des légumes.",
      "Naruto a des ramens.",
      "Naruto a des amis."
    ]
  },
  {
    "id": "PB611",
    "fr": "Naruto a des amis.",
    "romaji": "Naruto wa tomodachi ga iru.",
    "kana": "なるとはともだちがいる。",
    "kanji": "ナルトは友達がいる。",
    "course": 6,
    "wrongAnswers": [
      "Naruto a des ramens.",
      "Naruto mange des ramens.",
      "Traduction proche mais incorrecte 1 : Naruto a des amis."
    ]
  },
  {
    "id": "PB612",
    "fr": "Sakura a un chien.",
    "romaji": "Sakura wa inu ga imasu.",
    "kana": "さくらはいぬがいます。",
    "kanji": "サクラは犬がいます。",
    "course": 6,
    "wrongAnswers": [
      "Sakura a des médicaments.",
      "Hachi est un chien.",
      "Le chien est grand."
    ]
  },
  {
    "id": "PB613",
    "fr": "Je n’ai pas de chat.",
    "romaji": "Watashi wa neko ga imasen.",
    "kana": "わたしはねこがいません。",
    "kanji": "私は猫がいません。",
    "course": 6,
    "wrongAnswers": [
      "Le chat n’est pas petit.",
      "Naruto n’a pas d’argent.",
      "Le chat est dans la chambre."
    ]
  },
  {
    "id": "PB614",
    "fr": "Naruto n’a pas d’argent.",
    "romaji": "Naruto wa okane ga arimasen.",
    "kana": "なるとはおかねがありません。",
    "kanji": "ナルトはお金がありません。",
    "course": 6,
    "wrongAnswers": [
      "Naruto est à l’école.",
      "Naruto a des ramens.",
      "Je n’ai pas de chat."
    ]
  },
  {
    "id": "PB615",
    "fr": "Sasuke n’est pas à la maison.",
    "romaji": "Sasuke wa uchi ni imasen.",
    "kana": "さすけはうちにいません。",
    "kanji": "サスケは家にいません。",
    "course": 6,
    "wrongAnswers": [
      "Sasuke est dans la ville.",
      "Le ballon n’est pas dans la chambre.",
      "Le sabre de Sasuke est long."
    ]
  },
  {
    "id": "PB616",
    "fr": "Le ballon n’est pas dans la chambre.",
    "romaji": "Booru wa heya ni arimasen.",
    "kana": "ボールはへやにありません。",
    "kanji": "ボールは部屋にありません。",
    "course": 6,
    "wrongAnswers": [
      "Le ballon est dans le magasin.",
      "Le chat est dans la chambre.",
      "Sasuke n’est pas à la maison."
    ]
  },
  {
    "id": "PB617",
    "fr": "À Tokyo, il y a de grands bâtiments.",
    "romaji": "Toukyou ni ookii tatemono ga aru.",
    "kana": "とうきょうにおおきいたてものがある。",
    "kanji": "東京に大きい建物がある。",
    "course": 6,
    "wrongAnswers": [
      "Le ballon n’est pas dans la chambre.",
      "Il est sept heures et trente minutes.",
      "Le ballon est dans le magasin."
    ]
  },
  {
    "id": "PB618",
    "fr": "Il y a un konbini là-bas.",
    "romaji": "Asoko ni konbini ga arimasu.",
    "kana": "あそこにコンビニがあります。",
    "kanji": "あそこにコンビニがあります。",
    "course": 6,
    "wrongAnswers": [
      "Le restaurant est là-bas.",
      "Où est le konbini ?",
      "Le bus est là-bas."
    ]
  },
  {
    "id": "PB619",
    "fr": "Il est sept heures.",
    "romaji": "Shichi-ji desu.",
    "kana": "しちじです。",
    "kanji": "七時です。",
    "course": 6,
    "wrongAnswers": [
      "Il est sept heures et trente minutes.",
      "Je me lève à sept heures.",
      "Naruto est à l’école."
    ]
  },
  {
    "id": "PB620",
    "fr": "Il est sept heures et trente minutes.",
    "romaji": "Shichi-ji han desu.",
    "kana": "しちじはんです。",
    "kanji": "七時半です。",
    "course": 6,
    "wrongAnswers": [
      "Il est sept heures.",
      "C’est à environ cinq minutes à pied.",
      "Je me lève à sept heures."
    ]
  },
  {
    "id": "PB1121",
    "fr": "Tanaka n’est pas professeur.",
    "romaji": "Tanaka-san wa sensei ja arimasen.",
    "kana": "たなかさんはせんせいじゃありません。",
    "kanji": "田中さんは先生じゃありません。",
    "course": 1,
    "wrongAnswers": [
      "Tanaka est professeur.",
      "Tanaka n’est pas étudiant.",
      "Le professeur n’est pas japonais."
    ]
  },
  {
    "id": "PB1122",
    "fr": "Yuki n’est pas étudiante.",
    "romaji": "Yuki-san wa gakusei ja arimasen.",
    "kana": "ゆきさんはがくせいじゃありません。",
    "kanji": "ゆきさんは学生じゃありません。",
    "course": 1,
    "wrongAnswers": [
      "Yuki est étudiante.",
      "Yuki n’est pas professeur.",
      "L’étudiante n’est pas japonaise."
    ]
  },
  {
    "id": "PB1123",
    "fr": "Marc est-il français ?",
    "romaji": "Māku-san wa Furansujin desu ka.",
    "kana": "まーくさんはふらんすじんですか。",
    "kanji": "マークさんはフランス人ですか。",
    "course": 1,
    "wrongAnswers": [
      "Marc est français.",
      "Marc n’est pas français.",
      "Sakura est-elle française ?"
    ]
  },
  {
    "id": "PB1124",
    "fr": "Sakura n’est pas française.",
    "romaji": "Sakura-san wa Furansujin ja arimasen.",
    "kana": "さくらさんはふらんすじんじゃありません。",
    "kanji": "さくらさんはフランス人じゃありません。",
    "course": 1,
    "wrongAnswers": [
      "Sakura est française.",
      "Sakura est japonaise.",
      "Marc n’est pas français."
    ]
  },
  {
    "id": "PB1125",
    "fr": "Nezuko est-elle une amie ?",
    "romaji": "Nezuko-chan wa tomodachi desu ka.",
    "kana": "ねずこちゃんはともだちですか。",
    "kanji": "ねずこちゃんは友達ですか。",
    "course": 1,
    "wrongAnswers": [
      "Nezuko est une amie.",
      "Nezuko n’est pas une amie.",
      "Hachi est-il un chien ?"
    ]
  },
  {
    "id": "PB1126",
    "fr": "Doraemon n’est pas un chien.",
    "romaji": "Doraemon wa inu ja arimasen.",
    "kana": "ドラえもんはいぬじゃありません。",
    "kanji": "ドラえもんは犬じゃありません。",
    "course": 1,
    "wrongAnswers": [
      "Doraemon est un chien.",
      "Doraemon est un chat.",
      "Hachi n’est pas un chien."
    ]
  },
  {
    "id": "PB1127",
    "fr": "Hachi n’est pas un chat.",
    "romaji": "Hachi wa neko ja arimasen.",
    "kana": "はちはねこじゃありません。",
    "kanji": "ハチは猫じゃありません。",
    "course": 1,
    "wrongAnswers": [
      "Hachi est un chat.",
      "Hachi est un chien.",
      "Doraemon n’est pas un chat."
    ]
  },
  {
    "id": "PB1128",
    "fr": "Le professeur est-il gentil ?",
    "romaji": "Sensei wa shinsetsu desu ka.",
    "kana": "せんせいはしんせつですか。",
    "kanji": "先生は親切ですか。",
    "course": 1,
    "wrongAnswers": [
      "Le professeur est gentil.",
      "Le professeur n’est pas gentil.",
      "La gare est-elle calme ?"
    ]
  },
  {
    "id": "PB1129",
    "fr": "La gare n’est pas calme.",
    "romaji": "Eki wa shizuka ja arimasen.",
    "kana": "えきはしずかじゃありません。",
    "kanji": "駅は静かじゃありません。",
    "course": 1,
    "wrongAnswers": [
      "La gare est calme.",
      "L’école n’est pas grande.",
      "La gare est-elle calme ?"
    ]
  },
  {
    "id": "PB1130",
    "fr": "Mika n’est pas en forme.",
    "romaji": "Mika-san wa genki ja arimasen.",
    "kana": "みかさんはげんきじゃありません。",
    "kanji": "みかさんは元気じゃありません。",
    "course": 1,
    "wrongAnswers": [
      "Mika est en forme.",
      "Mika est-elle en forme ?",
      "Le professeur n’est pas gentil."
    ]
  },
  {
    "id": "PB1131",
    "fr": "Cette école n’est pas grande.",
    "romaji": "Kono gakkou wa ookikunai desu.",
    "kana": "このがっこうはおおきくないです。",
    "kanji": "この学校は大きくないです。",
    "course": 1,
    "wrongAnswers": [
      "Cette école est grande.",
      "Cette école est-elle grande ?",
      "Cette école n’est pas petite."
    ]
  },
  {
    "id": "PB1132",
    "fr": "Ce livre n’est pas intéressant.",
    "romaji": "Kono hon wa omoshirokunai desu.",
    "kana": "このほんはおもしろくないです。",
    "kanji": "この本は面白くないです。",
    "course": 1,
    "wrongAnswers": [
      "Ce livre est intéressant.",
      "Ce livre est-il intéressant ?",
      "Ce livre n’est pas ancien."
    ]
  },
  {
    "id": "PB1133",
    "fr": "Cette eau n’est pas froide.",
    "romaji": "Kono mizu wa tsumetakunai desu.",
    "kana": "このみずはつめたくないです。",
    "kanji": "この水は冷たくないです。",
    "course": 1,
    "wrongAnswers": [
      "Cette eau est froide.",
      "Cette eau est-elle froide ?",
      "Le livre n’est pas intéressant."
    ]
  },
  {
    "id": "PB1134",
    "fr": "Le chat n’est pas mignon.",
    "romaji": "Neko wa kawaikunai desu.",
    "kana": "ねこはかわいくないです。",
    "kanji": "猫はかわいくないです。",
    "course": 1,
    "wrongAnswers": [
      "Le chat est mignon.",
      "Le chien n’est pas mignon.",
      "Le chat n’est pas petit."
    ]
  },
  {
    "id": "PB1135",
    "fr": "Le chien n’est pas grand.",
    "romaji": "Inu wa ookikunai desu.",
    "kana": "いぬはおおきくないです。",
    "kanji": "犬は大きくないです。",
    "course": 1,
    "wrongAnswers": [
      "Le chien est grand.",
      "Le chat n’est pas grand.",
      "Le chien est-il grand ?"
    ]
  },
  {
    "id": "PB1136",
    "fr": "Le train n’est pas rapide.",
    "romaji": "Densha wa hayakunai desu.",
    "kana": "でんしゃははやくないです。",
    "kanji": "電車は速くないです。",
    "course": 1,
    "wrongAnswers": [
      "Le train est rapide.",
      "Le train est-il rapide ?",
      "La gare n’est pas calme."
    ]
  },
  {
    "id": "PB1137",
    "fr": "Cette école est-elle petite ?",
    "romaji": "Kono gakkou wa chiisai desu ka.",
    "kana": "このがっこうはちいさいですか。",
    "kanji": "この学校は小さいですか。",
    "course": 1,
    "wrongAnswers": [
      "Cette école est petite.",
      "Cette école n’est pas petite.",
      "Cette école est-elle grande ?"
    ]
  },
  {
    "id": "PB1138",
    "fr": "Le livre est-il ancien ?",
    "romaji": "Hon wa furui desu ka.",
    "kana": "ほんはふるいですか。",
    "kanji": "本は古いですか。",
    "course": 1,
    "wrongAnswers": [
      "Le livre est ancien.",
      "Le livre n’est pas ancien.",
      "Le livre est-il intéressant ?"
    ]
  },
  {
    "id": "PB1139",
    "fr": "Le chat est-il petit ?",
    "romaji": "Neko wa chiisai desu ka.",
    "kana": "ねこはちいさいですか。",
    "kanji": "猫は小さいですか。",
    "course": 1,
    "wrongAnswers": [
      "Le chat est petit.",
      "Le chat n’est pas petit.",
      "Le chien est-il grand ?"
    ]
  },
  {
    "id": "PB1140",
    "fr": "Le train est-il rapide ?",
    "romaji": "Densha wa hayai desu ka.",
    "kana": "でんしゃははやいですか。",
    "kanji": "電車は速いですか。",
    "course": 1,
    "wrongAnswers": [
      "Le train est rapide.",
      "Le train n’est pas rapide.",
      "La gare est-elle calme ?"
    ]
  },
  {
    "id": "PB1141",
    "fr": "Cette école est calme.",
    "romaji": "Kono gakkou wa shizuka desu.",
    "kana": "このがっこうはしずかです。",
    "kanji": "この学校は静かです。",
    "course": 1,
    "wrongAnswers": [
      "Cette école est grande.",
      "Cette école n’est pas calme.",
      "La gare est calme."
    ]
  },
  {
    "id": "PB1142",
    "fr": "Ce livre est ancien.",
    "romaji": "Kono hon wa furui desu.",
    "kana": "このほんはふるいです。",
    "kanji": "この本は古いです。",
    "course": 1,
    "wrongAnswers": [
      "Ce livre n’est pas ancien.",
      "Ce livre est intéressant.",
      "Ce livre est-il ancien ?"
    ]
  },
  {
    "id": "PB1143",
    "fr": "Cette eau est-elle froide ?",
    "romaji": "Kono mizu wa tsumetai desu ka.",
    "kana": "このみずはつめたいですか。",
    "kanji": "この水は冷たいですか。",
    "course": 1,
    "wrongAnswers": [
      "Cette eau est froide.",
      "Cette eau n’est pas froide.",
      "Cette eau est-elle grande ?"
    ]
  },
  {
    "id": "PB1144",
    "fr": "Le chat est-il mignon ?",
    "romaji": "Neko wa kawaii desu ka.",
    "kana": "ねこはかわいいですか。",
    "kanji": "猫はかわいいですか。",
    "course": 1,
    "wrongAnswers": [
      "Le chat est mignon.",
      "Le chat n’est pas mignon.",
      "Le chien est-il grand ?"
    ]
  },
  {
    "id": "PB1145",
    "fr": "Le chien est-il petit ?",
    "romaji": "Inu wa chiisai desu ka.",
    "kana": "いぬはちいさいですか。",
    "kanji": "犬は小さいですか。",
    "course": 1,
    "wrongAnswers": [
      "Le chien est petit.",
      "Le chien n’est pas petit.",
      "Le chat est-il petit ?"
    ]
  },
  {
    "id": "PB1146",
    "fr": "La gare est-elle grande ?",
    "romaji": "Eki wa ookii desu ka.",
    "kana": "えきはおおきいですか。",
    "kanji": "駅は大きいですか。",
    "course": 1,
    "wrongAnswers": [
      "La gare est grande.",
      "La gare n’est pas grande.",
      "Cette école est-elle grande ?"
    ]
  },
  {
    "id": "PB1147",
    "fr": "Mika est-elle en forme ?",
    "romaji": "Mika-san wa genki desu ka.",
    "kana": "みかさんはげんきですか。",
    "kanji": "みかさんは元気ですか。",
    "course": 1,
    "wrongAnswers": [
      "Mika est en forme.",
      "Mika n’est pas en forme.",
      "Le professeur est-il gentil ?"
    ]
  },
  {
    "id": "PB1148",
    "fr": "Le professeur n’est pas gentil.",
    "romaji": "Sensei wa shinsetsu ja arimasen.",
    "kana": "せんせいはしんせつじゃありません。",
    "kanji": "先生は親切じゃありません。",
    "course": 1,
    "wrongAnswers": [
      "Le professeur est gentil.",
      "Le professeur est-il gentil ?",
      "La gare n’est pas calme."
    ]
  },
  {
    "id": "PB1149",
    "fr": "La gare est-elle calme ?",
    "romaji": "Eki wa shizuka desu ka.",
    "kana": "えきはしずかですか。",
    "kanji": "駅は静かですか。",
    "course": 1,
    "wrongAnswers": [
      "La gare est calme.",
      "La gare n’est pas calme.",
      "L’école est-elle calme ?"
    ]
  },
  {
    "id": "PB1150",
    "fr": "Mika est en forme.",
    "romaji": "Mika-san wa genki desu.",
    "kana": "みかさんはげんきです。",
    "kanji": "みかさんは元気です。",
    "course": 1,
    "wrongAnswers": [
      "Mika n’est pas en forme.",
      "Mika est-elle en forme ?",
      "Yuki est étudiante."
    ]
  },
  {
    "id": "PB1201",
    "fr": "J’aime les chats.",
    "romaji": "Watashi wa neko ga suki desu.",
    "kana": "わたしはねこがすきです。",
    "kanji": "私は猫が好きです。",
    "course": 2,
    "wrongAnswers": [
      "Je déteste les chats.",
      "J’adore les chats.",
      "J’aime les chiens."
    ]
  },
  {
    "id": "PB1202",
    "fr": "Je n’aime pas les chiens.",
    "romaji": "Watashi wa inu ga suki ja arimasen.",
    "kana": "わたしはいぬがすきじゃありません。",
    "kanji": "私は犬が好きじゃありません。",
    "course": 2,
    "wrongAnswers": [
      "Je déteste les chiens.",
      "J’aime les chiens.",
      "Je n’aime pas les chats."
    ]
  },
  {
    "id": "PB1203",
    "fr": "J’adore les chiens.",
    "romaji": "Watashi wa inu ga daisuki desu.",
    "kana": "わたしはいぬがだいすきです。",
    "kanji": "私は犬が大好きです。",
    "course": 2,
    "wrongAnswers": [
      "Je n’aime pas les chiens.",
      "Je déteste les chiens.",
      "J’adore les chats."
    ]
  },
  {
    "id": "PB1204",
    "fr": "Je déteste les chats.",
    "romaji": "Watashi wa neko ga kirai desu.",
    "kana": "わたしはねこがきらいです。",
    "kanji": "私は猫が嫌いです。",
    "course": 2,
    "wrongAnswers": [
      "J’aime les chats.",
      "J’adore les chats.",
      "Je déteste les chiens."
    ]
  },
  {
    "id": "PB1205",
    "fr": "J’aime le sushi.",
    "romaji": "Watashi wa sushi ga suki desu.",
    "kana": "わたしはすしがすきです。",
    "kanji": "私は寿司が好きです。",
    "course": 2,
    "wrongAnswers": [
      "Je déteste le sushi.",
      "J’adore le sushi.",
      "J’aime le ramen."
    ]
  },
  {
    "id": "PB1206",
    "fr": "Je n’aime pas le café.",
    "romaji": "Watashi wa koohii ga suki ja arimasen.",
    "kana": "わたしはコーヒーがすきじゃありません。",
    "kanji": "私はコーヒーが好きじゃありません。",
    "course": 2,
    "wrongAnswers": [
      "J’aime le café.",
      "Je déteste le café.",
      "Je n’aime pas le thé."
    ]
  },
  {
    "id": "PB1207",
    "fr": "J’adore le thé.",
    "romaji": "Watashi wa ocha ga daisuki desu.",
    "kana": "わたしはおちゃがだいすきです。",
    "kanji": "私はお茶が大好きです。",
    "course": 2,
    "wrongAnswers": [
      "Je n’aime pas le thé.",
      "Je déteste le thé.",
      "J’adore le café."
    ]
  },
  {
    "id": "PB1208",
    "fr": "Je déteste le natto.",
    "romaji": "Watashi wa nattoo ga kirai desu.",
    "kana": "わたしはなっとうがきらいです。",
    "kanji": "私は納豆が嫌いです。",
    "course": 2,
    "wrongAnswers": [
      "J’aime le natto.",
      "J’adore le natto.",
      "Je déteste le sushi."
    ]
  },
  {
    "id": "PB1209",
    "fr": "Tanaka aime le sport.",
    "romaji": "Tanaka-san wa supootsu ga suki desu.",
    "kana": "たなかさんはスポーツがすきです。",
    "kanji": "田中さんはスポーツが好きです。",
    "course": 2,
    "wrongAnswers": [
      "Tanaka déteste le sport.",
      "Tanaka adore le sport.",
      "Yuki aime le sport."
    ]
  },
  {
    "id": "PB1210",
    "fr": "Yuki n’aime pas le poisson.",
    "romaji": "Yuki-san wa sakana ga suki ja arimasen.",
    "kana": "ゆきさんはさかながすきじゃありません。",
    "kanji": "ゆきさんは魚が好きじゃありません。",
    "course": 2,
    "wrongAnswers": [
      "Yuki aime le poisson.",
      "Yuki déteste le poisson.",
      "Yuki n’aime pas la viande."
    ]
  },
  {
    "id": "PB1211",
    "fr": "Sakura adore la musique.",
    "romaji": "Sakura-san wa ongaku ga daisuki desu.",
    "kana": "さくらさんはおんがくがだいすきです。",
    "kanji": "さくらさんは音楽が大好きです。",
    "course": 2,
    "wrongAnswers": [
      "Sakura n’aime pas la musique.",
      "Sakura déteste la musique.",
      "Sakura adore le sport."
    ]
  },
  {
    "id": "PB1212",
    "fr": "Nezuko déteste les légumes.",
    "romaji": "Nezuko-chan wa yasai ga kirai desu.",
    "kana": "ねずこちゃんはやさいがきらいです。",
    "kanji": "ねずこちゃんは野菜が嫌いです。",
    "course": 2,
    "wrongAnswers": [
      "Nezuko aime les légumes.",
      "Nezuko adore les légumes.",
      "Nezuko déteste les fruits."
    ]
  },
  {
    "id": "PB1213",
    "fr": "J’aime les livres.",
    "romaji": "Watashi wa hon ga suki desu.",
    "kana": "わたしはほんがすきです。",
    "kanji": "私は本が好きです。",
    "course": 2,
    "wrongAnswers": [
      "Je n’aime pas les livres.",
      "Je déteste les livres.",
      "J’aime les magazines."
    ]
  },
  {
    "id": "PB1214",
    "fr": "Je n’aime pas les films.",
    "romaji": "Watashi wa eiga ga suki ja arimasen.",
    "kana": "わたしはえいががすきじゃありません。",
    "kanji": "私は映画が好きじゃありません。",
    "course": 2,
    "wrongAnswers": [
      "J’aime les films.",
      "Je déteste les films.",
      "Je n’aime pas les livres."
    ]
  },
  {
    "id": "PB1215",
    "fr": "J’adore le baseball.",
    "romaji": "Watashi wa yakyuu ga daisuki desu.",
    "kana": "わたしはやきゅうがだいすきです。",
    "kanji": "私は野球が大好きです。",
    "course": 2,
    "wrongAnswers": [
      "Je n’aime pas le baseball.",
      "Je déteste le baseball.",
      "J’adore le football."
    ]
  },
  {
    "id": "PB1216",
    "fr": "Je déteste le natto.",
    "romaji": "Watashi wa nattoo ga kirai desu.",
    "kana": "わたしはなっとうがきらいです。",
    "kanji": "私は納豆が嫌いです。",
    "course": 2,
    "wrongAnswers": [
      "Je n’aime pas le natto.",
      "J’aime le natto.",
      "Je déteste le tofu."
    ]
  },
  {
    "id": "PB1217",
    "fr": "Le chat est mignon et j’aime les chats.",
    "romaji": "Neko wa kawaii desu. Watashi wa neko ga suki desu.",
    "kana": "ねこはかわいいです。わたしはねこがすきです。",
    "kanji": "猫はかわいいです。私は猫が好きです。",
    "course": 2,
    "wrongAnswers": [
      "Le chat est mignon mais je n’aime pas les chats.",
      "Le chien est mignon et j’aime les chats.",
      "Le chat est grand et j’aime les chats."
    ]
  },
  {
    "id": "PB1218",
    "fr": "Le chien est grand et j’aime les chiens.",
    "romaji": "Inu wa ookii desu. Watashi wa inu ga suki desu.",
    "kana": "いぬはおおきいです。わたしはいぬがすきです。",
    "kanji": "犬は大きいです。私は犬が好きです。",
    "course": 2,
    "wrongAnswers": [
      "Le chien est petit et j’aime les chiens.",
      "Le chien est grand et je déteste les chiens.",
      "Le chat est grand et j’aime les chiens."
    ]
  },
  {
    "id": "PB1219",
    "fr": "Le sushi est délicieux et j’aime le sushi.",
    "romaji": "Sushi wa oishii desu. Watashi wa sushi ga suki desu.",
    "kana": "すしはおいしいです。わたしはすしがすきです。",
    "kanji": "寿司はおいしいです。私は寿司が好きです。",
    "course": 2,
    "wrongAnswers": [
      "Le sushi est délicieux mais je n’aime pas le sushi.",
      "Le ramen est délicieux et j’aime le sushi.",
      "Le sushi est mauvais et j’aime le sushi."
    ]
  },
  {
    "id": "PB1220",
    "fr": "Le film est intéressant et j’aime les films.",
    "romaji": "Eiga wa omoshiroi desu. Watashi wa eiga ga suki desu.",
    "kana": "えいがはおもしろいです。わたしはえいががすきです。",
    "kanji": "映画は面白いです。私は映画が好きです。",
    "course": 2,
    "wrongAnswers": [
      "Le film est intéressant mais je n’aime pas les films.",
      "Le livre est intéressant et j’aime les films.",
      "Le film est ennuyeux et j’aime les films."
    ]
  },
  {
    "id": "PB1221",
    "fr": "Je n’aime vraiment pas le café.",
    "romaji": "Watashi wa koohii ga daikirai desu.",
    "kana": "わたしはコーヒーがだいきらいです。",
    "kanji": "私はコーヒーが大嫌いです。",
    "course": 2,
    "wrongAnswers": [
      "Je n’aime pas le café.",
      "J’adore le café.",
      "Je déteste le thé."
    ]
  },
  {
    "id": "PB1222",
    "fr": "J’adore les mangas.",
    "romaji": "Watashi wa manga ga daisuki desu.",
    "kana": "わたしはまんががだいすきです。",
    "kanji": "私は漫画が大好きです。",
    "course": 2,
    "wrongAnswers": [
      "Je déteste les mangas.",
      "J’aime les mangas.",
      "J’adore les films."
    ]
  },
  {
    "id": "PB1223",
    "fr": "Mika aime les fleurs.",
    "romaji": "Mika-san wa hana ga suki desu.",
    "kana": "みかさんははながすきです。",
    "kanji": "みかさんは花が好きです。",
    "course": 2,
    "wrongAnswers": [
      "Mika déteste les fleurs.",
      "Mika adore les fleurs.",
      "Yuki aime les fleurs."
    ]
  },
  {
    "id": "PB1224",
    "fr": "Tanaka n’aime pas le sport.",
    "romaji": "Tanaka-san wa supootsu ga suki ja arimasen.",
    "kana": "たなかさんはスポーツがすきじゃありません。",
    "kanji": "田中さんはスポーツが好きじゃありません。",
    "course": 2,
    "wrongAnswers": [
      "Tanaka aime le sport.",
      "Tanaka déteste le sport.",
      "Yuki n’aime pas le sport."
    ]
  },
  {
    "id": "PB1225",
    "fr": "Est-ce que tu aimes les chiens ?",
    "romaji": "Anata wa inu ga suki desu ka.",
    "kana": "あなたはいぬがすきですか。",
    "kanji": "あなたは犬が好きですか。",
    "course": 2,
    "wrongAnswers": [
      "Est-ce que tu détestes les chiens ?",
      "Est-ce que tu aimes les chats ?",
      "Tu aimes les chiens."
    ]
  },
  {
    "id": "PB1226",
    "fr": "Est-ce que Sakura aime la musique ?",
    "romaji": "Sakura-san wa ongaku ga suki desu ka.",
    "kana": "さくらさんはおんがくがすきですか。",
    "kanji": "さくらさんは音楽が好きですか。",
    "course": 2,
    "wrongAnswers": [
      "Sakura déteste-t-elle la musique ?",
      "Sakura aime-t-elle le sport ?",
      "Sakura aime la musique."
    ]
  },
  {
    "id": "PB1227",
    "fr": "Je n’aime vraiment pas les légumes.",
    "romaji": "Watashi wa yasai ga daikirai desu.",
    "kana": "わたしはやさいがだいきらいです。",
    "kanji": "私は野菜が大嫌いです。",
    "course": 2,
    "wrongAnswers": [
      "Je n’aime pas les légumes.",
      "J’adore les légumes.",
      "Je déteste les fruits."
    ]
  },
  {
    "id": "PB1228",
    "fr": "Yuki adore les chats.",
    "romaji": "Yuki-san wa neko ga daisuki desu.",
    "kana": "ゆきさんはねこがだいすきです。",
    "kanji": "ゆきさんは猫が大好きです。",
    "course": 2,
    "wrongAnswers": [
      "Yuki déteste les chats.",
      "Yuki aime les chats.",
      "Sakura adore les chats."
    ]
  },
  {
    "id": "PB1229",
    "fr": "Nezuko n’aime pas le poisson.",
    "romaji": "Nezuko-chan wa sakana ga suki ja arimasen.",
    "kana": "ねずこちゃんはさかながすきじゃありません。",
    "kanji": "ねずこちゃんは魚が好きじゃありません。",
    "course": 2,
    "wrongAnswers": [
      "Nezuko aime le poisson.",
      "Nezuko déteste le poisson.",
      "Nezuko n’aime pas la viande."
    ]
  },
  {
    "id": "PB1230",
    "fr": "J’aime les chiens, mais je déteste les chats.",
    "romaji": "Watashi wa inu ga suki desu. Neko ga kirai desu.",
    "kana": "わたしはいぬがすきです。ねこがきらいです。",
    "kanji": "私は犬が好きです。猫が嫌いです。",
    "course": 2,
    "wrongAnswers": [
      "J’aime les chats, mais je déteste les chiens.",
      "J’adore les chiens et les chats.",
      "Je n’aime pas les chiens et les chats."
    ]
  },
  {
    "id": "PB3321",
    "fr": "Le livre de Naruto est intéressant.",
    "romaji": "Naruto no hon wa omoshiroi desu.",
    "kana": "なるとのほんはおもしろいです。",
    "kanji": "ナルトの本は面白いです。",
    "course": 3,
    "wrongAnswers": [
      "Le livre de Sakura est intéressant.",
      "Le livre de Naruto est ancien.",
      "Le manga de Naruto est intéressant."
    ]
  },
  {
    "id": "PB3322",
    "fr": "Le chat de Sakura est mignon.",
    "romaji": "Sakura no neko wa kawaii desu.",
    "kana": "さくらのねこはかわいいです。",
    "kanji": "サクラの猫はかわいいです。",
    "course": 3,
    "wrongAnswers": [
      "Le chien de Sakura est mignon.",
      "Le chat de Naruto est mignon.",
      "Le chat de Sakura est grand."
    ]
  },
  {
    "id": "PB3323",
    "fr": "La voiture de Sasuke est rouge.",
    "romaji": "Sasuke no kuruma wa akai desu.",
    "kana": "さすけのくるまはあかいです。",
    "kanji": "サスケの車は赤いです。",
    "course": 3,
    "wrongAnswers": [
      "La voiture de Sasuke est bleue.",
      "La voiture de Naruto est rouge.",
      "Le vélo de Sasuke est rouge."
    ]
  },
  {
    "id": "PB3324",
    "fr": "Le chien de Naruto est grand.",
    "romaji": "Naruto no inu wa ookii desu.",
    "kana": "なるとのいぬはおおきいです。",
    "kanji": "ナルトの犬は大きいです。",
    "course": 3,
    "wrongAnswers": [
      "Le chat de Naruto est grand.",
      "Le chien de Sakura est grand.",
      "Le chien de Naruto est petit."
    ]
  },
  {
    "id": "PB3325",
    "fr": "La chambre de Sakura est propre.",
    "romaji": "Sakura no heya wa kirei desu.",
    "kana": "さくらのへやはきれいです。",
    "kanji": "サクラの部屋はきれいです。",
    "course": 3,
    "wrongAnswers": [
      "La chambre de Sakura est calme.",
      "La chambre de Naruto est propre.",
      "La maison de Sakura est propre."
    ]
  },
  {
    "id": "PB3326",
    "fr": "Le restaurant de Sasuke est célèbre.",
    "romaji": "Sasuke no resutoran wa yuumei desu.",
    "kana": "さすけのレストランはゆうめいです。",
    "kanji": "サスケのレストランは有名です。",
    "course": 3,
    "wrongAnswers": [
      "Le restaurant de Naruto est célèbre.",
      "Le restaurant de Sasuke est pratique.",
      "L’hôtel de Sasuke est célèbre."
    ]
  },
  {
    "id": "PB3327",
    "fr": "Le livre rouge est à Naruto.",
    "romaji": "Akai hon wa Naruto no desu.",
    "kana": "あかいほんはなるとのです。",
    "kanji": "赤い本はナルトのです。",
    "course": 3,
    "wrongAnswers": [
      "Le livre bleu est à Naruto.",
      "Le livre rouge est à Sakura.",
      "Le manga rouge est à Naruto."
    ]
  },
  {
    "id": "PB3328",
    "fr": "Le sac noir est à Sakura.",
    "romaji": "Kuroi kaban wa Sakura no desu.",
    "kana": "くろいかばんはさくらのです。",
    "kanji": "黒いかばんはサクラのです。",
    "course": 3,
    "wrongAnswers": [
      "Le sac rouge est à Sakura.",
      "Le sac noir est à Naruto.",
      "Le livre noir est à Sakura."
    ]
  },
  {
    "id": "PB3329",
    "fr": "Le vieux manga de Naruto est intéressant.",
    "romaji": "Naruto no furui manga wa omoshiroi desu.",
    "kana": "なるとのふるいまんがはおもしろいです。",
    "kanji": "ナルトの古い漫画は面白いです。",
    "course": 3,
    "wrongAnswers": [
      "Le vieux manga de Naruto est amusant.",
      "Le vieux livre de Naruto est intéressant.",
      "Le manga récent de Naruto est intéressant."
    ]
  },
  {
    "id": "PB3330",
    "fr": "Le grand chien de Sakura est mignon.",
    "romaji": "Sakura no ookii inu wa kawaii desu.",
    "kana": "さくらのおおきいいぬはかわいいです。",
    "kanji": "サクラの大きい犬はかわいいです。",
    "course": 3,
    "wrongAnswers": [
      "Le petit chien de Sakura est mignon.",
      "Le grand chat de Sakura est mignon.",
      "Le grand chien de Naruto est mignon."
    ]
  },
  {
    "id": "PB3331",
    "fr": "Naruto lit le livre de Sasuke.",
    "romaji": "Naruto wa Sasuke no hon o yomu.",
    "kana": "なるとはさすけのほんをよむ。",
    "kanji": "ナルトはサスケの本を読む。",
    "course": 3,
    "wrongAnswers": [
      "Sasuke lit le livre de Naruto.",
      "Naruto lit le manga de Sasuke.",
      "Naruto achète le livre de Sasuke."
    ]
  },
  {
    "id": "PB3332",
    "fr": "Sakura mange le repas de Naruto.",
    "romaji": "Sakura wa Naruto no ryouri o taberu.",
    "kana": "さくらはなるとのりょうりをたべる。",
    "kanji": "サクラはナルトの料理を食べる。",
    "course": 3,
    "wrongAnswers": [
      "Naruto mange le repas de Sakura.",
      "Sakura prépare le repas de Naruto.",
      "Sakura mange le repas de Sasuke."
    ]
  },
  {
    "id": "PB3333",
    "fr": "Sasuke achète le livre de Naruto.",
    "romaji": "Sasuke wa Naruto no hon o kau.",
    "kana": "さすけはなるとのほんをかう。",
    "kanji": "サスケはナルトの本を買う。",
    "course": 3,
    "wrongAnswers": [
      "Naruto achète le livre de Sasuke.",
      "Sasuke lit le livre de Naruto.",
      "Sasuke achète le manga de Naruto."
    ]
  },
  {
    "id": "PB3334",
    "fr": "Naruto regarde le film de Sakura.",
    "romaji": "Naruto wa Sakura no eiga o miru.",
    "kana": "なるとはさくらのえいがをみる。",
    "kanji": "ナルトはサクラの映画を見る。",
    "course": 3,
    "wrongAnswers": [
      "Sakura regarde le film de Naruto.",
      "Naruto regarde le manga de Sakura.",
      "Naruto regarde le film de Sasuke."
    ]
  },
  {
    "id": "PB3335",
    "fr": "Sakura prépare le repas de Sasuke.",
    "romaji": "Sakura wa Sasuke no ryouri o tsukuru.",
    "kana": "さくらはさすけのりょうりをつくる。",
    "kanji": "サクラはサスケの料理を作る。",
    "course": 3,
    "wrongAnswers": [
      "Sasuke prépare le repas de Sakura.",
      "Sakura mange le repas de Sasuke.",
      "Sakura prépare le repas de Naruto."
    ]
  },
  {
    "id": "PB3336",
    "fr": "Le manga de Naruto est-il intéressant ?",
    "romaji": "Naruto no manga wa omoshiroi desu ka.",
    "kana": "なるとのまんがはおもしろいですか。",
    "kanji": "ナルトの漫画は面白いですか。",
    "course": 3,
    "wrongAnswers": [
      "Le manga de Naruto est-il ancien ?",
      "Le livre de Naruto est-il intéressant ?",
      "Le manga de Sakura est-il intéressant ?"
    ]
  },
  {
    "id": "PB3337",
    "fr": "Le sac de Sakura n’est pas pratique.",
    "romaji": "Sakura no kaban wa benri ja arimasen.",
    "kana": "さくらのかばんはべんりじゃありません。",
    "kanji": "サクラのかばんは便利じゃありません。",
    "course": 3,
    "wrongAnswers": [
      "Le sac de Sakura est pratique.",
      "Le sac de Naruto n’est pas pratique.",
      "Le livre de Sakura n’est pas pratique."
    ]
  },
  {
    "id": "PB3338",
    "fr": "Le restaurant de Naruto n’est pas calme.",
    "romaji": "Naruto no resutoran wa shizuka ja arimasen.",
    "kana": "なるとのレストランはしずかじゃありません。",
    "kanji": "ナルトのレストランは静かじゃありません。",
    "course": 3,
    "wrongAnswers": [
      "Le restaurant de Naruto est calme.",
      "Le restaurant de Sasuke n’est pas calme.",
      "L’hôtel de Naruto n’est pas calme."
    ]
  },
  {
    "id": "PB3339",
    "fr": "Le vieux livre de Sakura est lourd.",
    "romaji": "Sakura no furui hon wa omoi desu.",
    "kana": "さくらのふるいほんはおもいです。",
    "kanji": "サクラの古い本は重いです。",
    "course": 3,
    "wrongAnswers": [
      "Le vieux livre de Sakura est léger.",
      "Le vieux manga de Sakura est lourd.",
      "Le vieux livre de Naruto est lourd."
    ]
  },
  {
    "id": "PB3340",
    "fr": "Le petit chat de Sasuke est mignon.",
    "romaji": "Sasuke no chiisai neko wa kawaii desu.",
    "kana": "さすけのちいさいねこはかわいいです。",
    "kanji": "サスケの小さい猫はかわいいです。",
    "course": 3,
    "wrongAnswers": [
      "Le grand chat de Sasuke est mignon.",
      "Le petit chien de Sasuke est mignon.",
      "Le petit chat de Naruto est mignon."
    ]
  },
  {
    "id": "PB3341",
    "fr": "Le voyage de Naruto est amusant.",
    "romaji": "Naruto no ryokou wa tanoshii desu.",
    "kana": "なるとのりょこうはたのしいです。",
    "kanji": "ナルトの旅行は楽しいです。",
    "course": 3,
    "wrongAnswers": [
      "Le voyage de Naruto est difficile.",
      "Le repas de Naruto est amusant.",
      "Le voyage de Sakura est amusant."
    ]
  },
  {
    "id": "PB3342",
    "fr": "Le sabre noir de Sasuke est long.",
    "romaji": "Sasuke no kuroi katana wa nagai desu.",
    "kana": "さすけのくろいかたなはながいです。",
    "kanji": "サスケの黒い刀は長いです。",
    "course": 3,
    "wrongAnswers": [
      "Le sabre rouge de Sasuke est long.",
      "Le sabre noir de Naruto est long.",
      "Le sabre noir de Sasuke est court."
    ]
  },
  {
    "id": "PB3343",
    "fr": "Le manga de Sakura est ancien.",
    "romaji": "Sakura no manga wa furui desu.",
    "kana": "さくらのまんがはふるいです。",
    "kanji": "サクラの漫画は古いです。",
    "course": 3,
    "wrongAnswers": [
      "Le manga de Sakura est nouveau.",
      "Le livre de Sakura est ancien.",
      "Le manga de Naruto est ancien."
    ]
  },
  {
    "id": "PB3344",
    "fr": "Le repas de Sasuke est délicieux.",
    "romaji": "Sasuke no ryouri wa oishii desu.",
    "kana": "さすけのりょうりはおいしいです。",
    "kanji": "サスケの料理はおいしいです。",
    "course": 3,
    "wrongAnswers": [
      "Le repas de Sasuke est mauvais.",
      "Le repas de Naruto est délicieux.",
      "Le restaurant de Sasuke est délicieux."
    ]
  },
  {
    "id": "PB3345",
    "fr": "La maison de Naruto est grande.",
    "romaji": "Naruto no uchi wa ookii desu.",
    "kana": "なるとのうちはおおきいです。",
    "kanji": "ナルトの家は大きいです。",
    "course": 3,
    "wrongAnswers": [
      "La maison de Naruto est petite.",
      "La chambre de Naruto est grande.",
      "La maison de Sakura est grande."
    ]
  },
  {
    "id": "PB3346",
    "fr": "Sasuke regarde le film de Naruto.",
    "romaji": "Sasuke wa Naruto no eiga o miru.",
    "kana": "さすけはなるとのえいがをみる。",
    "kanji": "サスケはナルトの映画を見る。",
    "course": 3,
    "wrongAnswers": [
      "Naruto regarde le film de Sasuke.",
      "Sasuke regarde le manga de Naruto.",
      "Sasuke achète le film de Naruto."
    ]
  },
  {
    "id": "PB3347",
    "fr": "Naruto achète le sac de Sakura.",
    "romaji": "Naruto wa Sakura no kaban o kau.",
    "kana": "なるとはさくらのかばんをかう。",
    "kanji": "ナルトはサクラのかばんを買う。",
    "course": 3,
    "wrongAnswers": [
      "Sakura achète le sac de Naruto.",
      "Naruto regarde le sac de Sakura.",
      "Naruto achète le livre de Sakura."
    ]
  },
  {
    "id": "PB3348",
    "fr": "Sakura lit le manga de Naruto.",
    "romaji": "Sakura wa Naruto no manga o yomu.",
    "kana": "さくらはなるとのまんがをよむ。",
    "kanji": "サクラはナルトの漫画を読む。",
    "course": 3,
    "wrongAnswers": [
      "Naruto lit le manga de Sakura.",
      "Sakura achète le manga de Naruto.",
      "Sakura lit le livre de Naruto."
    ]
  },
  {
    "id": "PB3349",
    "fr": "Le livre intéressant de Sasuke est ancien.",
    "romaji": "Sasuke no omoshiroi hon wa furui desu.",
    "kana": "さすけのおもしろいほんはふるいです。",
    "kanji": "サスケの面白い本は古いです。",
    "course": 3,
    "wrongAnswers": [
      "Le livre ancien de Sasuke est intéressant.",
      "Le manga intéressant de Sasuke est ancien.",
      "Le livre intéressant de Naruto est ancien."
    ]
  },
  {
    "id": "PB3350",
    "fr": "La voiture rouge de Sakura est nouvelle.",
    "romaji": "Sakura no akai kuruma wa atarashii desu.",
    "kana": "さくらのあかいくるまはあたらしいです。",
    "kanji": "サクラの赤い車は新しいです。",
    "course": 3,
    "wrongAnswers": [
      "La voiture bleue de Sakura est nouvelle.",
      "La voiture rouge de Naruto est nouvelle.",
      "La voiture rouge de Sakura est ancienne."
    ]
  },
  {
    "id": "PB4051",
    "fr": "Naruto mange des ramens.",
    "romaji": "Naruto wa raamen o tabemasu.",
    "kana": "なるとはらーめんをたべます。",
    "kanji": "ナルトはラーメンを食べます。",
    "course": 4,
    "wrongAnswers": [
      "Naruto ne mange pas de ramens.",
      "Naruto boit des ramens.",
      "Naruto mange du riz."
    ]
  },
  {
    "id": "PB4052",
    "fr": "Kirua boit de l'eau.",
    "romaji": "Kirua wa mizu o nomimasu.",
    "kana": "きるあはみずをのみます。",
    "kanji": "キルアは水を飲みます。",
    "course": 4,
    "wrongAnswers": [
      "Kirua ne boit pas d'eau.",
      "Kirua mange de l'eau.",
      "Kirua boit du thé."
    ]
  },
  {
    "id": "PB4053",
    "fr": "Sakura écrit une lettre.",
    "romaji": "Sakura wa tegami o kakimasu.",
    "kana": "さくらはてがみをかきます。",
    "kanji": "サクラは手紙を書きます。",
    "course": 4,
    "wrongAnswers": [
      "Sakura n'écrit pas de lettre.",
      "Sakura lit une lettre.",
      "Sakura écrit un livre."
    ]
  },
  {
    "id": "PB4054",
    "fr": "Conan parle japonais.",
    "romaji": "Konan wa nihongo o hanashimasu.",
    "kana": "こなんはにほんごをはなします。",
    "kanji": "コナンは日本語を話します。",
    "course": 4,
    "wrongAnswers": [
      "Conan ne parle pas japonais.",
      "Conan écoute le japonais.",
      "Conan parle anglais."
    ]
  },
  {
    "id": "PB4055",
    "fr": "Tanaka écoute de la musique.",
    "romaji": "Tanaka-san wa ongaku o kikimasu.",
    "kana": "たなかさんはおんがくをききます。",
    "kanji": "田中さんは音楽を聞きます。",
    "course": 4,
    "wrongAnswers": [
      "Tanaka n'écoute pas de musique.",
      "Tanaka parle de musique.",
      "Tanaka écoute la radio."
    ]
  },
  {
    "id": "PB4056",
    "fr": "Yuki nage.",
    "romaji": "Yuki-san wa oyogimasu.",
    "kana": "ゆきさんはおよぎます。",
    "kanji": "ゆきさんは泳ぎます。",
    "course": 4,
    "wrongAnswers": [
      "Yuki ne nage pas.",
      "Yuki marche.",
      "Yuki joue."
    ]
  },
  {
    "id": "PB4057",
    "fr": "Mika achète un livre.",
    "romaji": "Mika-san wa hon o kaimasu.",
    "kana": "みかさんはほんをかいます。",
    "kanji": "ミカさんは本を買います。",
    "course": 4,
    "wrongAnswers": [
      "Mika n'achète pas de livre.",
      "Mika vend un livre.",
      "Mika achète un journal."
    ]
  },
  {
    "id": "PB4058",
    "fr": "Ken attend.",
    "romaji": "Ken-san wa machimasu.",
    "kana": "けんさんはまちます。",
    "kanji": "ケンさんは待ちます。",
    "course": 4,
    "wrongAnswers": [
      "Ken n'attend pas.",
      "Ken part.",
      "Ken parle."
    ]
  },
  {
    "id": "PB4059",
    "fr": "Aki se lève à sept heures.",
    "romaji": "Aki-san wa shichi-ji ni okimasu.",
    "kana": "あきさんはしちじにおきます。",
    "kanji": "アキさんは七時に起きます。",
    "course": 4,
    "wrongAnswers": [
      "Aki se couche à sept heures.",
      "Aki se lève à huit heures.",
      "Aki ne se lève pas à sept heures."
    ]
  },
  {
    "id": "PB4060",
    "fr": "Hana dort à dix heures.",
    "romaji": "Hana-san wa juu-ji ni nemasu.",
    "kana": "はなさんはじゅうじにねます。",
    "kanji": "ハナさんは十時に寝ます。",
    "course": 4,
    "wrongAnswers": [
      "Hana se lève à dix heures.",
      "Hana dort à onze heures.",
      "Hana ne dort pas à dix heures."
    ]
  },
  {
    "id": "PB4061",
    "fr": "Riku regarde un film.",
    "romaji": "Riku wa eiga o mimasu.",
    "kana": "りくはえいがをみます。",
    "kanji": "リクは映画を見ます。",
    "course": 4,
    "wrongAnswers": [
      "Riku ne regarde pas de film.",
      "Riku écoute un film.",
      "Riku regarde un livre."
    ]
  },
  {
    "id": "PB4062",
    "fr": "Emi ne boit pas de café.",
    "romaji": "Emi-san wa koohii o nomimasen.",
    "kana": "えみさんはこーひーをのみません。",
    "kanji": "エミさんはコーヒーを飲みません。",
    "course": 4,
    "wrongAnswers": [
      "Emi boit du café.",
      "Emi ne mange pas de café.",
      "Emi ne boit pas de thé."
    ]
  },
  {
    "id": "PB4063",
    "fr": "Taro ne mange pas de poisson.",
    "romaji": "Tarou wa sakana o tabemasen.",
    "kana": "たろうはさかなをたべません。",
    "kanji": "太郎は魚を食べません。",
    "course": 4,
    "wrongAnswers": [
      "Taro mange du poisson.",
      "Taro ne boit pas de poisson.",
      "Taro ne mange pas de viande."
    ]
  },
  {
    "id": "PB4064",
    "fr": "Yumi ne parle pas.",
    "romaji": "Yumi-san wa hanashimasen.",
    "kana": "ゆみさんははなしません。",
    "kanji": "ゆみさんは話しません。",
    "course": 4,
    "wrongAnswers": [
      "Yumi parle.",
      "Yumi n'écoute pas.",
      "Yumi ne dort pas."
    ]
  },
  {
    "id": "PB4065",
    "fr": "Est-ce que Naruto vient ?",
    "romaji": "Naruto wa kimasu ka.",
    "kana": "なるとはきますか。",
    "kanji": "ナルトは来ますか。",
    "course": 4,
    "wrongAnswers": [
      "Naruto vient.",
      "Naruto ne vient pas.",
      "Est-ce que Naruto part ?"
    ]
  },
  {
    "id": "PB4066",
    "fr": "Est-ce que Sakura écrit ?",
    "romaji": "Sakura-san wa kakimasu ka.",
    "kana": "さくらさんはかきますか。",
    "kanji": "サクラさんは書きますか。",
    "course": 4,
    "wrongAnswers": [
      "Sakura écrit.",
      "Sakura n'écrit pas.",
      "Est-ce que Sakura lit ?"
    ]
  },
  {
    "id": "PB4067",
    "fr": "Est-ce que vous mangez ?",
    "romaji": "Tabemasu ka.",
    "kana": "たべますか。",
    "kanji": "食べますか。",
    "course": 4,
    "wrongAnswers": [
      "Je mange.",
      "Je ne mange pas.",
      "Est-ce que vous buvez ?"
    ]
  },
  {
    "id": "PB4068",
    "fr": "Je ne viens pas aujourd'hui.",
    "romaji": "Kyou wa kimasen.",
    "kana": "きょうはきません。",
    "kanji": "今日は来ません。",
    "course": 4,
    "wrongAnswers": [
      "Je viens aujourd'hui.",
      "Je ne viens pas demain.",
      "Je ne pars pas aujourd'hui."
    ]
  },
  {
    "id": "PB4069",
    "fr": "Je fais la cuisine.",
    "romaji": "Ryouri o shimasu.",
    "kana": "りょうりをします。",
    "kanji": "料理をします。",
    "course": 4,
    "wrongAnswers": [
      "Je ne fais pas la cuisine.",
      "Je mange la cuisine.",
      "Je fais du sport."
    ]
  },
  {
    "id": "PB4070",
    "fr": "Je ne fais pas de sport.",
    "romaji": "Supootsu o shimasen.",
    "kana": "すぽーつをしません。",
    "kanji": "スポーツをしません。",
    "course": 4,
    "wrongAnswers": [
      "Je fais du sport.",
      "Je ne regarde pas de sport.",
      "Je ne fais pas la cuisine."
    ]
  },
  {
    "id": "PB4071",
    "fr": "Il y a trois livres.",
    "romaji": "Hon ga san-satsu arimasu.",
    "kana": "ほんがさんさつあります。",
    "kanji": "本が三冊あります。",
    "course": 4,
    "wrongAnswers": [
      "Il y a deux livres.",
      "Il y a trois stylos.",
      "Il n'y a pas trois livres."
    ]
  },
  {
    "id": "PB4072",
    "fr": "J'achète cinq pommes.",
    "romaji": "Ringo o itsutsu kaimasu.",
    "kana": "りんごをいつつかいます。",
    "kanji": "りんごを五つ買います。",
    "course": 4,
    "wrongAnswers": [
      "J'achète quatre pommes.",
      "Je mange cinq pommes.",
      "Je n'achète pas cinq pommes."
    ]
  },
  {
    "id": "PB4073",
    "fr": "Il est huit heures.",
    "romaji": "Hachi-ji desu.",
    "kana": "はちじです。",
    "kanji": "八時です。",
    "course": 4,
    "wrongAnswers": [
      "Il est sept heures.",
      "Il est neuf heures.",
      "Il n'est pas huit heures."
    ]
  },
  {
    "id": "PB4074",
    "fr": "Il est trois heures et demie.",
    "romaji": "San-ji han desu.",
    "kana": "さんじはんです。",
    "kanji": "三時半です。",
    "course": 4,
    "wrongAnswers": [
      "Il est trois heures.",
      "Il est quatre heures et demie.",
      "Il est deux heures et demie."
    ]
  },
  {
    "id": "PB4075",
    "fr": "J'étudie pendant deux heures.",
    "romaji": "Ni-jikan benkyou shimasu.",
    "kana": "にじかんべんきょうします。",
    "kanji": "二時間勉強します。",
    "course": 4,
    "wrongAnswers": [
      "J'étudie pendant une heure.",
      "Je travaille pendant deux heures.",
      "Je n'étudie pas pendant deux heures."
    ]
  },
  {
    "id": "PB4076",
    "fr": "J'attends dix minutes.",
    "romaji": "Juppun machimasu.",
    "kana": "じゅっぷんまちます。",
    "kanji": "十分待ちます。",
    "course": 4,
    "wrongAnswers": [
      "J'attends cinq minutes.",
      "J'attends trente minutes.",
      "Je n'attends pas dix minutes."
    ]
  },
  {
    "id": "PB4077",
    "fr": "Je rentre à la maison.",
    "romaji": "Uchi ni kaerimasu.",
    "kana": "うちにかえります。",
    "kanji": "うちに帰ります。",
    "course": 4,
    "wrongAnswers": [
      "Je vais à la maison.",
      "Je ne rentre pas à la maison.",
      "Je reste à la maison."
    ]
  },
  {
    "id": "PB4078",
    "fr": "Je coupe le papier.",
    "romaji": "Kami o kirimasu.",
    "kana": "かみをきります。",
    "kanji": "紙を切ります。",
    "course": 4,
    "wrongAnswers": [
      "Je ne coupe pas le papier.",
      "Je plie le papier.",
      "Je coupe le tissu."
    ]
  },
  {
    "id": "PB4079",
    "fr": "Je prends un livre.",
    "romaji": "Hon o torimasu.",
    "kana": "ほんをとります。",
    "kanji": "本を取ります。",
    "course": 4,
    "wrongAnswers": [
      "Je rends un livre.",
      "Je prends un stylo.",
      "Je ne prends pas de livre."
    ]
  },
  {
    "id": "PB4080",
    "fr": "Nous faisons une réservation.",
    "romaji": "Yoyaku o shimasu.",
    "kana": "よやくをします。",
    "kanji": "予約をします。",
    "course": 4,
    "wrongAnswers": [
      "Nous annulons la réservation.",
      "Nous ne faisons pas de réservation.",
      "Nous faisons la cuisine."
    ]
  },
  {
    "id": "PB5051",
    "fr": "C'est quoi, ceci ?",
    "romaji": "Kore wa nan desu ka.",
    "kana": "これはなんですか。",
    "kanji": "これは何ですか。",
    "course": 5,
    "wrongAnswers": [
      "C'est où, ceci ?",
      "C'est combien, ceci ?",
      "Lequel est ceci ?"
    ]
  },
  {
    "id": "PB5052",
    "fr": "Qu'est-ce que tu manges ?",
    "romaji": "Nani o tabemasu ka.",
    "kana": "なにをたべますか。",
    "kanji": "何を食べますか。",
    "course": 5,
    "wrongAnswers": [
      "Qu'est-ce que tu bois ?",
      "Qu'est-ce que tu achètes ?",
      "Qui mange ?"
    ]
  },
  {
    "id": "PB5053",
    "fr": "Qu'est-ce que tu aimes ?",
    "romaji": "Nani ga suki desu ka.",
    "kana": "なにがすきですか。",
    "kanji": "何が好きですか。",
    "course": 5,
    "wrongAnswers": [
      "Qu'est-ce que tu détestes ?",
      "Qu'est-ce que tu manges ?",
      "Qui aime ceci ?"
    ]
  },
  {
    "id": "PB5054",
    "fr": "Quel livre ?",
    "romaji": "Nan no hon desu ka.",
    "kana": "なんのほんですか。",
    "kanji": "何の本ですか。",
    "course": 5,
    "wrongAnswers": [
      "Où est le livre ?",
      "Combien coûte le livre ?",
      "Quel est ce livre-ci ?"
    ]
  },
  {
    "id": "PB5055",
    "fr": "Où sont les toilettes ?",
    "romaji": "Toire wa doko desu ka.",
    "kana": "といれはどこですか。",
    "kanji": "トイレはどこですか。",
    "course": 5,
    "wrongAnswers": [
      "Où est la gare ?",
      "Que sont les toilettes ?",
      "Combien coûtent les toilettes ?"
    ]
  },
  {
    "id": "PB5056",
    "fr": "Où se trouve l'hôtel ?",
    "romaji": "Hoteru wa doko ni arimasu ka.",
    "kana": "ほてるはどこにありますか。",
    "kanji": "ホテルはどこにありますか。",
    "course": 5,
    "wrongAnswers": [
      "Où se trouve l'hôpital ?",
      "Qu'est-ce que l'hôtel ?",
      "Combien coûte l'hôtel ?"
    ]
  },
  {
    "id": "PB5057",
    "fr": "Où est la gare ?",
    "romaji": "Eki wa doko desu ka.",
    "kana": "えきはどこですか。",
    "kanji": "駅はどこですか。",
    "course": 5,
    "wrongAnswers": [
      "Où est l'entrée ?",
      "Où est l'arrêt de bus ?",
      "Qu'est-ce que la gare ?"
    ]
  },
  {
    "id": "PB5058",
    "fr": "Où cherchez-vous ?",
    "romaji": "Doko o sagashimasu ka.",
    "kana": "どこをさがしますか。",
    "kanji": "どこを探しますか。",
    "course": 5,
    "wrongAnswers": [
      "Que cherchez-vous ?",
      "Où allez-vous ?",
      "Qui cherchez-vous ?"
    ]
  },
  {
    "id": "PB5059",
    "fr": "C'est combien, ceci ?",
    "romaji": "Kore wa ikura desu ka.",
    "kana": "これはいくらですか。",
    "kanji": "これはいくらですか。",
    "course": 5,
    "wrongAnswers": [
      "C'est quoi, ceci ?",
      "Combien y en a-t-il ?",
      "Lequel est ceci ?"
    ]
  },
  {
    "id": "PB5060",
    "fr": "Combien de tickets achetez-vous ?",
    "romaji": "Kippu o ikutsu kaimasu ka.",
    "kana": "きっぷをいくつかいますか。",
    "kanji": "切符をいくつ買いますか。",
    "course": 5,
    "wrongAnswers": [
      "Combien coûtent les tickets ?",
      "Combien de tickets mangez-vous ?",
      "Quels tickets achetez-vous ?"
    ]
  },
  {
    "id": "PB5061",
    "fr": "Combien y en a-t-il ?",
    "romaji": "Ikutsu arimasu ka.",
    "kana": "いくつありますか。",
    "kanji": "いくつありますか。",
    "course": 5,
    "wrongAnswers": [
      "Combien ça coûte ?",
      "Où y en a-t-il ?",
      "Qu'est-ce qu'il y a ?"
    ]
  },
  {
    "id": "PB5062",
    "fr": "Combien coûte le ticket ?",
    "romaji": "Kippu wa ikura desu ka.",
    "kana": "きっぷはいくらですか。",
    "kanji": "切符はいくらですか。",
    "course": 5,
    "wrongAnswers": [
      "Combien de tickets y a-t-il ?",
      "Où est le ticket ?",
      "Quel ticket est-ce ?"
    ]
  },
  {
    "id": "PB5063",
    "fr": "Ça prend environ combien de temps ?",
    "romaji": "Dore gurai kakarimasu ka.",
    "kana": "どれぐらいかかりますか。",
    "kanji": "どれぐらいかかりますか。",
    "course": 5,
    "wrongAnswers": [
      "Ça coûte environ combien ?",
      "C'est à quelle heure ?",
      "Où cela prend-il du temps ?"
    ]
  },
  {
    "id": "PB5064",
    "fr": "C'est à environ cinq minutes à pied.",
    "romaji": "Aruite go-fun gurai desu.",
    "kana": "あるいてごふんぐらいです。",
    "kanji": "歩いて五分ぐらいです。",
    "course": 5,
    "wrongAnswers": [
      "C'est à environ dix minutes à pied.",
      "C'est à environ cinq minutes en train.",
      "C'est à environ cinq heures à pied."
    ]
  },
  {
    "id": "PB5065",
    "fr": "Le métro prend environ dix minutes.",
    "romaji": "Chikatetsu de juppun gurai kakarimasu.",
    "kana": "ちかてつでじゅっぷんぐらいかかります。",
    "kanji": "地下鉄で十分ぐらいかかります。",
    "course": 5,
    "wrongAnswers": [
      "Le train prend environ dix minutes.",
      "Le métro prend environ cinq minutes.",
      "Le métro coûte environ dix yens."
    ]
  },
  {
    "id": "PB5066",
    "fr": "Ce konbini est propre.",
    "romaji": "Kono konbini wa kirei desu.",
    "kana": "このこんびにはきれいです。",
    "kanji": "このコンビニはきれいです。",
    "course": 5,
    "wrongAnswers": [
      "Ce konbini est sale.",
      "Ce restaurant est propre.",
      "Ce konbini est loin."
    ]
  },
  {
    "id": "PB5067",
    "fr": "Ce livre-ci est intéressant.",
    "romaji": "Kono hon wa omoshiroi desu.",
    "kana": "このほんはおもしろいです。",
    "kanji": "この本は面白いです。",
    "course": 5,
    "wrongAnswers": [
      "Ce livre-là est intéressant.",
      "Ce livre-ci est ancien.",
      "Ce magazine-ci est intéressant."
    ]
  },
  {
    "id": "PB5068",
    "fr": "Ceci est de l'eau.",
    "romaji": "Kore wa mizu desu.",
    "kana": "これはみずです。",
    "kanji": "これは水です。",
    "course": 5,
    "wrongAnswers": [
      "Cela est de l'eau.",
      "Ceci est du thé.",
      "Ceci n'est pas de l'eau."
    ]
  },
  {
    "id": "PB5069",
    "fr": "Cela près de toi est un ticket.",
    "romaji": "Sore wa kippu desu.",
    "kana": "それはきっぷです。",
    "kanji": "それは切符です。",
    "course": 5,
    "wrongAnswers": [
      "Ceci est un ticket.",
      "Cela là-bas est un ticket.",
      "Cela près de toi est un livre."
    ]
  },
  {
    "id": "PB5070",
    "fr": "Qu'est-ce que c'est, là-bas ?",
    "romaji": "Are wa nan desu ka.",
    "kana": "あれはなんですか。",
    "kanji": "あれは何ですか。",
    "course": 5,
    "wrongAnswers": [
      "Qu'est-ce que c'est, ici ?",
      "Où est-ce, là-bas ?",
      "Combien ça coûte, là-bas ?"
    ]
  },
  {
    "id": "PB5071",
    "fr": "Où sommes-nous ici ?",
    "romaji": "Koko wa doko desu ka.",
    "kana": "ここはどこですか。",
    "kanji": "ここはどこですか。",
    "course": 5,
    "wrongAnswers": [
      "Où es-tu là-bas ?",
      "Qu'est-ce que cet endroit ?",
      "Où est la gare ?"
    ]
  },
  {
    "id": "PB5072",
    "fr": "Le konbini là-bas est propre.",
    "romaji": "Ano konbini wa kirei desu.",
    "kana": "あのこんびにはきれいです。",
    "kanji": "あのコンビニはきれいです。",
    "course": 5,
    "wrongAnswers": [
      "Le konbini ici est propre.",
      "Le konbini là-bas est sale.",
      "Le restaurant là-bas est propre."
    ]
  },
  {
    "id": "PB5073",
    "fr": "Quel magasin est-ce ?",
    "romaji": "Dono mise desu ka.",
    "kana": "どのみせですか。",
    "kanji": "どの店ですか。",
    "course": 5,
    "wrongAnswers": [
      "Où est le magasin ?",
      "Combien coûte le magasin ?",
      "Ce magasin est propre ?"
    ]
  },
  {
    "id": "PB5074",
    "fr": "Lequel est ton livre ?",
    "romaji": "Anata no hon wa dore desu ka.",
    "kana": "あなたのほんはどれですか。",
    "kanji": "あなたの本はどれですか。",
    "course": 5,
    "wrongAnswers": [
      "Où est ton livre ?",
      "Quel est ton livre ? (type)",
      "Combien coûte ton livre ?"
    ]
  },
  {
    "id": "PB5075",
    "fr": "Quel konbini est propre ?",
    "romaji": "Dono konbini ga kirei desu ka.",
    "kana": "どのこんびにがきれいですか。",
    "kanji": "どのコンビニがきれいですか。",
    "course": 5,
    "wrongAnswers": [
      "Où est le konbini propre ?",
      "Quel konbini est loin ?",
      "Ce konbini est-il propre ?"
    ]
  },
  {
    "id": "PB5076",
    "fr": "Il y a quelque chose ici.",
    "romaji": "Koko ni nanika arimasu.",
    "kana": "ここになにかあります。",
    "kanji": "ここに何かあります。",
    "course": 5,
    "wrongAnswers": [
      "Il n'y a rien ici.",
      "Il y a quelque chose là-bas.",
      "Quelque chose est propre ici."
    ]
  },
  {
    "id": "PB5077",
    "fr": "Je ne mange rien.",
    "romaji": "Nanimo tabemasen.",
    "kana": "なにもたべません。",
    "kanji": "何も食べません。",
    "course": 5,
    "wrongAnswers": [
      "Je mange quelque chose.",
      "Je ne bois rien.",
      "Je ne mange pas ceci."
    ]
  },
  {
    "id": "PB5078",
    "fr": "Je vais n'importe où.",
    "romaji": "Doko demo ikimasu.",
    "kana": "どこでもいきます。",
    "kanji": "どこでも行きます。",
    "course": 5,
    "wrongAnswers": [
      "Je ne vais nulle part.",
      "Je vais quelque part.",
      "Où vais-je ?"
    ]
  },
  {
    "id": "PB5079",
    "fr": "Ce ticket coûte combien ?",
    "romaji": "Sono kippu wa ikura desu ka.",
    "kana": "そのきっぷはいくらですか。",
    "kanji": "その切符はいくらですか。",
    "course": 5,
    "wrongAnswers": [
      "Ce ticket près de moi coûte combien ?",
      "Ce ticket-là-bas coûte combien ?",
      "Combien de tickets y a-t-il ?"
    ]
  },
  {
    "id": "PB5080",
    "fr": "Combien de temps jusqu'à la gare ?",
    "romaji": "Eki made dore gurai kakarimasu ka.",
    "kana": "えきまでどれぐらいかかりますか。",
    "kanji": "駅までどれぐらいかかりますか。",
    "course": 5,
    "wrongAnswers": [
      "Combien coûte la gare ?",
      "Où est la gare ?",
      "Combien de gares y a-t-il ?"
    ]
  },
  {
    "id": "PB621",
    "fr": "Il est neuf heures du matin.",
    "romaji": "Gozen ku-ji desu.",
    "kana": "ごぜん くじ です。",
    "kanji": "午前九時です。",
    "course": 6,
    "wrongAnswers": [
      "Il est neuf heures du soir.",
      "Il est sept heures du matin.",
      "Il est neuf heures et demie du matin."
    ]
  },
  {
    "id": "PB622",
    "fr": "Il est trois heures de l’après-midi.",
    "romaji": "Gogo san-ji desu.",
    "kana": "ごご さんじ です。",
    "kanji": "午後三時です。",
    "course": 6,
    "wrongAnswers": [
      "Il est trois heures du matin.",
      "Il est quatre heures de l’après-midi.",
      "Il est trois heures et demie de l’après-midi."
    ]
  },
  {
    "id": "PB623",
    "fr": "Il est cinq heures et demie.",
    "romaji": "Go-ji han desu.",
    "kana": "ごじ はん です。",
    "kanji": "五時半です。",
    "course": 6,
    "wrongAnswers": [
      "Il est cinq heures.",
      "Il est six heures et demie.",
      "Il est cinq heures et cinq minutes."
    ]
  },
  {
    "id": "PB624",
    "fr": "Il est six heures cinq.",
    "romaji": "Roku-ji go-fun desu.",
    "kana": "ろくじ ごふん です。",
    "kanji": "六時五分です。",
    "course": 6,
    "wrongAnswers": [
      "Il est six heures dix.",
      "Il est cinq heures six.",
      "Il est six heures et demie."
    ]
  },
  {
    "id": "PB625",
    "fr": "Quelle heure est-il maintenant ?",
    "romaji": "Ima nan-ji desu ka.",
    "kana": "いま なんじ ですか。",
    "kanji": "今何時ですか。",
    "course": 6,
    "wrongAnswers": [
      "Quelle heure sera-t-il plus tard ?",
      "À quelle heure est-ce que ça commence ?",
      "Combien de temps cela prend-il ?"
    ]
  },
  {
    "id": "PB626",
    "fr": "À quelle heure est-ce que ça commence ?",
    "romaji": "Nan-ji ni hajimarimasu ka.",
    "kana": "なんじに はじまりますか。",
    "kanji": "何時に始まりますか。",
    "course": 6,
    "wrongAnswers": [
      "À quelle heure est-ce que ça finit ?",
      "Quelle heure est-il maintenant ?",
      "Combien d’heures cela prend-il ?"
    ]
  },
  {
    "id": "PB627",
    "fr": "On se retrouve à quatre heures.",
    "romaji": "Yo-ji ni aimasu.",
    "kana": "よじに あいます。",
    "kanji": "四時に会います。",
    "course": 6,
    "wrongAnswers": [
      "On se retrouve à cinq heures.",
      "On se retrouve à quatre heures et demie.",
      "Il est quatre heures."
    ]
  },
  {
    "id": "PB628",
    "fr": "Je rentre à huit heures.",
    "romaji": "Hachi-ji ni kaerimasu.",
    "kana": "はちじに かえります。",
    "kanji": "八時に帰ります。",
    "course": 6,
    "wrongAnswers": [
      "Je rentre à sept heures.",
      "Je rentre à huit heures et demie.",
      "Il est huit heures."
    ]
  },
  {
    "id": "PB629",
    "fr": "Le train est à quelle heure ?",
    "romaji": "Densha wa nan-ji desu ka.",
    "kana": "でんしゃは なんじ ですか。",
    "kanji": "電車は何時ですか。",
    "course": 6,
    "wrongAnswers": [
      "Le train est où ?",
      "Le train est à neuf heures ?",
      "Combien de temps dure le train ?"
    ]
  },
  {
    "id": "PB630",
    "fr": "Combien d’heures cela prend-il ?",
    "romaji": "Nan-jikan kakarimasu ka.",
    "kana": "なんじかん かかりますか。",
    "kanji": "何時間かかりますか。",
    "course": 6,
    "wrongAnswers": [
      "Combien de minutes cela prend-il ?",
      "À quelle heure cela commence-t-il ?",
      "Combien d’heures y a-t-il ?"
    ]
  },
  {
    "id": "PB631",
    "fr": "Je me lève à huit heures.",
    "romaji": "Hachi-ji ni okimasu.",
    "kana": "はちじに おきます。",
    "kanji": "八時に起きます。",
    "course": 6,
    "wrongAnswers": [
      "Je me couche à huit heures.",
      "Je me lève à sept heures.",
      "Je me lève à huit heures et demie."
    ]
  },
  {
    "id": "PB632",
    "fr": "Je mange des ramens à neuf heures du matin.",
    "romaji": "Gozen ku-ji ni raamen o tabemasu.",
    "kana": "ごぜん くじに ラーメンを たべます。",
    "kanji": "午前九時にラーメンを食べます。",
    "course": 6,
    "wrongAnswers": [
      "Je mange des ramens à neuf heures du soir.",
      "Je bois de l’eau à neuf heures du matin.",
      "Je mange des ramens à dix heures du matin."
    ]
  },
  {
    "id": "PB633",
    "fr": "Je rentre plus tard.",
    "romaji": "Ato de kaerimasu.",
    "kana": "あとで かえります。",
    "kanji": "後で帰ります。",
    "course": 6,
    "wrongAnswers": [
      "Je rentre tout à l’heure (passé).",
      "Je rentre bientôt.",
      "Je rentre toujours."
    ]
  },
  {
    "id": "PB634",
    "fr": "Je suis parfois en retard.",
    "romaji": "Tokidoki chikoku desu.",
    "kana": "ときどき ちこく です。",
    "kanji": "時々遅刻です。",
    "course": 6,
    "wrongAnswers": [
      "Je suis toujours en retard.",
      "Je suis parfois à l’heure.",
      "Je suis souvent en avance."
    ]
  },
  {
    "id": "PB635",
    "fr": "Je suis toujours à l’heure.",
    "romaji": "Itsumo jikan doori desu.",
    "kana": "いつも じかんどおり です。",
    "kanji": "いつも時間どおりです。",
    "course": 6,
    "wrongAnswers": [
      "Je suis parfois à l’heure.",
      "Je suis toujours en retard.",
      "Je suis bientôt à l’heure."
    ]
  },
  {
    "id": "PB636",
    "fr": "Le réveil est dans la chambre.",
    "romaji": "Mezamashi wa heya ni arimasu.",
    "kana": "めざましは へやに あります。",
    "kanji": "目覚ましは部屋にあります。",
    "course": 6,
    "wrongAnswers": [
      "La montre est dans la chambre.",
      "Le réveil est dans le sac.",
      "Le réveil n’est pas dans la chambre."
    ]
  },
  {
    "id": "PB637",
    "fr": "La montre est dans le sac.",
    "romaji": "Tokei wa kaban ni arimasu.",
    "kana": "とけいは かばんに あります。",
    "kanji": "時計はかばんにあります。",
    "course": 6,
    "wrongAnswers": [
      "La clé est dans le sac.",
      "La montre est dans la chambre.",
      "La montre n’est pas dans le sac."
    ]
  },
  {
    "id": "PB638",
    "fr": "Le vélo est dans le parc.",
    "romaji": "Jitensha wa kouen ni arimasu.",
    "kana": "じてんしゃは こうえんに あります。",
    "kanji": "自転車は公園にあります。",
    "course": 6,
    "wrongAnswers": [
      "La voiture est dans le parc.",
      "Le vélo est dans le magasin.",
      "Le vélo n’est pas dans le parc."
    ]
  },
  {
    "id": "PB639",
    "fr": "Le chien n’est pas dans la chambre.",
    "romaji": "Inu wa heya ni imasen.",
    "kana": "いぬは へやに いません。",
    "kanji": "犬は部屋にいません。",
    "course": 6,
    "wrongAnswers": [
      "Le chien est dans la chambre.",
      "Le chat n’est pas dans la chambre.",
      "Le chien n’est pas dans la maison."
    ]
  },
  {
    "id": "PB640",
    "fr": "Il y a de l’eau dans le réfrigérateur.",
    "romaji": "Reizouko ni mizu ga arimasu.",
    "kana": "れいぞうこに みずが あります。",
    "kanji": "冷蔵庫に水があります。",
    "course": 6,
    "wrongAnswers": [
      "Il y a des médicaments dans le réfrigérateur.",
      "Il y a de l’eau dans le sac.",
      "Il n’y a pas d’eau dans le réfrigérateur."
    ]
  },
  {
    "id": "PB641",
    "fr": "Il y a un chat dans le parc.",
    "romaji": "Kouen ni neko ga imasu.",
    "kana": "こうえんに ねこが います。",
    "kanji": "公園に猫がいます。",
    "course": 6,
    "wrongAnswers": [
      "Il y a un chien dans le parc.",
      "Le chat est dans le parc.",
      "Il n’y a pas de chat dans le parc."
    ]
  },
  {
    "id": "PB642",
    "fr": "Il n’y a pas de livre sur le bureau.",
    "romaji": "Tsukue ni hon ga arimasen.",
    "kana": "つくえに ほんが ありません。",
    "kanji": "机に本がありません。",
    "course": 6,
    "wrongAnswers": [
      "Il y a un livre sur le bureau.",
      "Il n’y a pas de clé sur le bureau.",
      "Il n’y a pas de livre dans le sac."
    ]
  },
  {
    "id": "PB643",
    "fr": "Sakura a une petite sœur.",
    "romaji": "Sakura wa imouto ga imasu.",
    "kana": "さくらは いもうとが います。",
    "kanji": "さくらは妹がいます。",
    "course": 6,
    "wrongAnswers": [
      "Sakura a un grand frère.",
      "Sakura n’a pas de petite sœur.",
      "Sakura est avec sa petite sœur."
    ]
  },
  {
    "id": "PB644",
    "fr": "Naruto n’a pas d’argent.",
    "romaji": "Naruto wa okane ga arimasen.",
    "kana": "なるとは おかねが ありません。",
    "kanji": "ナルトはお金がありません。",
    "course": 6,
    "wrongAnswers": [
      "Naruto a de l’argent.",
      "Sasuke n’a pas d’argent.",
      "Naruto n’a pas de médicaments."
    ]
  },
  {
    "id": "PB645",
    "fr": "Kakashi a un téléphone portable.",
    "romaji": "Kakashi wa keitai ga arimasu.",
    "kana": "カカシは けいたいが あります。",
    "kanji": "カカシは携帯があります。",
    "course": 6,
    "wrongAnswers": [
      "Kakashi a un vélo.",
      "Kakashi n’a pas de téléphone portable.",
      "Naruto a un téléphone portable."
    ]
  },
  {
    "id": "PB646",
    "fr": "Il y a un train là-bas.",
    "romaji": "Asoko ni densha ga arimasu.",
    "kana": "あそこに でんしゃが あります。",
    "kanji": "あそこに電車があります。",
    "course": 6,
    "wrongAnswers": [
      "Il y a un train ici.",
      "Il y a un konbini là-bas.",
      "Il n’y a pas de train là-bas."
    ]
  },
  {
    "id": "PB647",
    "fr": "Il y a un chat dans la chambre.",
    "romaji": "Heya ni neko ga imasu.",
    "kana": "へやに ねこが います。",
    "kanji": "部屋に猫がいます。",
    "course": 6,
    "wrongAnswers": [
      "Le chat est dans la chambre.",
      "Il y a un chien dans la chambre.",
      "Il n’y a pas de chat dans la chambre."
    ]
  },
  {
    "id": "PB648",
    "fr": "Sasuke n’a pas d’amis.",
    "romaji": "Sasuke wa tomodachi ga imasen.",
    "kana": "さすけは ともだちが いません。",
    "kanji": "さすけは友達がいません。",
    "course": 6,
    "wrongAnswers": [
      "Sasuke a des amis.",
      "Naruto n’a pas d’amis.",
      "Sasuke n’a pas de petite sœur."
    ]
  },
  {
    "id": "PB649",
    "fr": "Il y a un magasin dans la ville.",
    "romaji": "Machi ni mise ga arimasu.",
    "kana": "まちに みせが あります。",
    "kanji": "町に店があります。",
    "course": 6,
    "wrongAnswers": [
      "Il y a une école dans la ville.",
      "Le magasin est dans la ville.",
      "Il n’y a pas de magasin dans la ville."
    ]
  },
  {
    "id": "PB650",
    "fr": "Il n’y a pas de personne dans le magasin.",
    "romaji": "Mise ni hito ga imasen.",
    "kana": "みせに ひとが いません。",
    "kanji": "店に人がいません。",
    "course": 6,
    "wrongAnswers": [
      "Il y a une personne dans le magasin.",
      "Il n’y a pas de chat dans le magasin.",
      "Il n’y a pas de personne dans la ville."
    ]
  },
  {
    "id": "PB7001",
    "fr": "Le livre est sur le bureau.",
    "romaji": "hon wa tsukue no ue ni arimasu.",
    "kana": "ほんは つくえの うえに あります。",
    "kanji": "本は机の上にあります。",
    "course": 7,
    "wrongAnswers": [
      "Le livre est sur la bureau.",
      "Le livre est à droite le bureau.",
      "Le livre est devant le bureau."
    ]
  },
  {
    "id": "PB7002",
    "fr": "Le chat est sous la chaise.",
    "romaji": "neko wa isu no shita ni imasu.",
    "kana": "ねこは いすの したに います。",
    "kanji": "猫は椅子の下にいます。",
    "course": 7,
    "wrongAnswers": [
      "Le chat est à droite la chaise.",
      "Le chat est devant la chaise.",
      "Le chat est derrière la chaise."
    ]
  },
  {
    "id": "PB7003",
    "fr": "Le konbini est à droite la gare.",
    "romaji": "konbini wa eki no migi ni arimasu.",
    "kana": "コンビニは えきの みぎに あります。",
    "kanji": "コンビニは駅の右にあります。",
    "course": 7,
    "wrongAnswers": [
      "Le konbini est à gauche la gare.",
      "Le konbini est devant la gare.",
      "Le konbini est derrière la gare."
    ]
  },
  {
    "id": "PB7004",
    "fr": "La banque est à gauche le konbini.",
    "romaji": "ginkou wa konbini no hidari ni arimasu.",
    "kana": "ぎんこうは コンビニの ひだりに あります。",
    "kanji": "銀行はコンビニの左にあります。",
    "course": 7,
    "wrongAnswers": [
      "La banque est à gauche la konbini.",
      "La banque est à droite le konbini.",
      "La banque est devant le konbini."
    ]
  },
  {
    "id": "PB7005",
    "fr": "Sasuke est derrière l'arbre.",
    "romaji": "Sasuke wa ki no ushiro ni imasu.",
    "kana": "さすけは きの うしろに います。",
    "kanji": "サスケは木の後ろにいます。",
    "course": 7,
    "wrongAnswers": [
      "Sasuke est à droite l'arbre.",
      "Sasuke est devant l'arbre.",
      "Sasuke est dans l'arbre."
    ]
  },
  {
    "id": "PB7006",
    "fr": "L'enfant est dans la chambre.",
    "romaji": "kodomo wa heya no naka ni imasu.",
    "kana": "こどもは へやの なかに います。",
    "kanji": "子供は部屋の中にいます。",
    "course": 7,
    "wrongAnswers": [
      "L'enfant est à droite la chambre.",
      "L'enfant est devant la chambre.",
      "L'enfant est derrière la chambre."
    ]
  },
  {
    "id": "PB7007",
    "fr": "Le supermarché est à gauche la gare.",
    "romaji": "suupaa wa eki no hidari ni arimasu.",
    "kana": "スーパーは えきの ひだりに あります。",
    "kanji": "スーパーは駅の左にあります。",
    "course": 7,
    "wrongAnswers": [
      "Le supermarché est à droite la gare.",
      "Le supermarché est devant la gare.",
      "Le supermarché est derrière la gare."
    ]
  },
  {
    "id": "PB7008",
    "fr": "La clé est dans le sac.",
    "romaji": "kagi wa kaban no naka ni arimasu.",
    "kana": "かぎは かばんの なかに あります。",
    "kanji": "鍵は鞄の中にあります。",
    "course": 7,
    "wrongAnswers": [
      "La clé est dans la sac.",
      "La clé est à droite le sac.",
      "La clé est devant le sac."
    ]
  },
  {
    "id": "PB7009",
    "fr": "La banque est devant la gare.",
    "romaji": "ginkou wa eki no mae ni arimasu.",
    "kana": "ぎんこうは えきの まえに あります。",
    "kanji": "銀行は駅の前にあります。",
    "course": 7,
    "wrongAnswers": [
      "La banque est à droite la gare.",
      "La banque est derrière la gare.",
      "La banque est dans la gare."
    ]
  },
  {
    "id": "PB7010",
    "fr": "Le chien est derrière la maison.",
    "romaji": "inu wa ie no ushiro ni imasu.",
    "kana": "いぬは いえの うしろに います。",
    "kanji": "犬は家の後ろにいます。",
    "course": 7,
    "wrongAnswers": [
      "Le chien est à droite la maison.",
      "Le chien est devant la maison.",
      "Le chien est dans la maison."
    ]
  },
  {
    "id": "PB7011",
    "fr": "L'argent est dans le sac.",
    "romaji": "okane wa kaban no naka ni arimasu.",
    "kana": "おかねは かばんの なかに あります。",
    "kanji": "お金は鞄の中にあります。",
    "course": 7,
    "wrongAnswers": [
      "L'argent est dans la sac.",
      "L'argent est à droite le sac.",
      "L'argent est devant le sac."
    ]
  },
  {
    "id": "PB7012",
    "fr": "Naruto est devant l'école.",
    "romaji": "Naruto wa gakkou no mae ni imasu.",
    "kana": "なるとは がっこうの まえに います。",
    "kanji": "ナルトは学校の前にいます。",
    "course": 7,
    "wrongAnswers": [
      "Naruto est à droite l'école.",
      "Naruto est derrière l'école.",
      "Naruto est dans l'école."
    ]
  },
  {
    "id": "PB7013",
    "fr": "La table est sur la chaise.",
    "romaji": "teeburu wa isu no ue ni arimasu.",
    "kana": "テーブルは いすの うえに あります。",
    "kanji": "テーブルは椅子の上にあります。",
    "course": 7,
    "wrongAnswers": [
      "La table est à droite la chaise.",
      "La table est devant la chaise.",
      "La table est derrière la chaise."
    ]
  },
  {
    "id": "PB7014",
    "fr": "Le livre est sous le lit.",
    "romaji": "hon wa beddo no shita ni arimasu.",
    "kana": "ほんは ベッドの したに あります。",
    "kanji": "本はベッドの下にあります。",
    "course": 7,
    "wrongAnswers": [
      "Le livre est sous la lit.",
      "Le livre est à droite le lit.",
      "Le livre est devant le lit."
    ]
  },
  {
    "id": "PB7015",
    "fr": "Sakura est à droite la gare.",
    "romaji": "Sakura wa eki no migi ni imasu.",
    "kana": "さくらは えきの みぎに います。",
    "kanji": "さくらは駅の右にいます。",
    "course": 7,
    "wrongAnswers": [
      "Sakura est à gauche la gare.",
      "Sakura est devant la gare.",
      "Sakura est derrière la gare."
    ]
  },
  {
    "id": "PB7016",
    "fr": "L'ami est dans la chambre.",
    "romaji": "tomodachi wa heya no naka ni imasu.",
    "kana": "ともだちは へやの なかに います。",
    "kanji": "友達は部屋の中にいます。",
    "course": 7,
    "wrongAnswers": [
      "L'ami est à droite la chambre.",
      "L'ami est devant la chambre.",
      "L'ami est derrière la chambre."
    ]
  },
  {
    "id": "PB7017",
    "fr": "La voiture est devant la maison.",
    "romaji": "kuruma wa ie no mae ni arimasu.",
    "kana": "くるまは いえの まえに あります。",
    "kanji": "車は家の前にあります。",
    "course": 7,
    "wrongAnswers": [
      "La voiture est à droite la maison.",
      "La voiture est derrière la maison.",
      "La voiture est dans la maison."
    ]
  },
  {
    "id": "PB7018",
    "fr": "Nezuko est à gauche l'arbre.",
    "romaji": "Nezuko wa ki no hidari ni imasu.",
    "kana": "ねずこは きの ひだりに います。",
    "kanji": "禰豆子は木の左にいます。",
    "course": 7,
    "wrongAnswers": [
      "Nezuko est à droite l'arbre.",
      "Nezuko est devant l'arbre.",
      "Nezuko est derrière l'arbre."
    ]
  },
  {
    "id": "PB7019",
    "fr": "L'horloge est sur le bureau.",
    "romaji": "tokei wa tsukue no ue ni arimasu.",
    "kana": "とけいは つくえの うえに あります。",
    "kanji": "時計は机の上にあります。",
    "course": 7,
    "wrongAnswers": [
      "L'horloge est sur la bureau.",
      "L'horloge est à droite le bureau.",
      "L'horloge est devant le bureau."
    ]
  },
  {
    "id": "PB7020",
    "fr": "Le chat est derrière le lit.",
    "romaji": "neko wa beddo no ushiro ni imasu.",
    "kana": "ねこは ベッドの うしろに います。",
    "kanji": "猫はベッドの後ろにいます。",
    "course": 7,
    "wrongAnswers": [
      "Le chat est derrière la lit.",
      "Le chat est à droite le lit.",
      "Le chat est devant le lit."
    ]
  },
  {
    "id": "PB7021",
    "fr": "Sasuke est dans la chambre.",
    "romaji": "Sasuke wa heya no naka ni imasu.",
    "kana": "さすけは へやの なかに います。",
    "kanji": "サスケは部屋の中にいます。",
    "course": 7,
    "wrongAnswers": [
      "Sasuke est à droite la chambre.",
      "Sasuke est devant la chambre.",
      "Sasuke est derrière la chambre."
    ]
  },
  {
    "id": "PB7022",
    "fr": "Le sac est sous le bureau.",
    "romaji": "kaban wa tsukue no shita ni arimasu.",
    "kana": "かばんは つくえの したに あります。",
    "kanji": "鞄は机の下にあります。",
    "course": 7,
    "wrongAnswers": [
      "Le sac est sous la bureau.",
      "Le sac est à droite le bureau.",
      "Le sac est devant le bureau."
    ]
  },
  {
    "id": "PB7023",
    "fr": "Le parc est à droite la gare.",
    "romaji": "kouen wa eki no migi ni arimasu.",
    "kana": "こうえんは えきの みぎに あります。",
    "kanji": "公園は駅の右にあります。",
    "course": 7,
    "wrongAnswers": [
      "Le parc est à gauche la gare.",
      "Le parc est devant la gare.",
      "Le parc est derrière la gare."
    ]
  },
  {
    "id": "PB7024",
    "fr": "Le professeur est devant l'école.",
    "romaji": "sensei wa gakkou no mae ni imasu.",
    "kana": "せんせいは がっこうの まえに います。",
    "kanji": "先生は学校の前にいます。",
    "course": 7,
    "wrongAnswers": [
      "Le professeur est à droite l'école.",
      "Le professeur est derrière l'école.",
      "Le professeur est dans l'école."
    ]
  },
  {
    "id": "PB7025",
    "fr": "Le vélo est derrière la maison.",
    "romaji": "jitensha wa ie no ushiro ni arimasu.",
    "kana": "じてんしゃは いえの うしろに あります。",
    "kanji": "自転車は家の後ろにあります。",
    "course": 7,
    "wrongAnswers": [
      "Le vélo est à droite la maison.",
      "Le vélo est devant la maison.",
      "Le vélo est dans la maison."
    ]
  },
  {
    "id": "PB7026",
    "fr": "Le livre est dans le sac.",
    "romaji": "hon wa kaban no naka ni arimasu.",
    "kana": "ほんは かばんの なかに あります。",
    "kanji": "本は鞄の中にあります。",
    "course": 7,
    "wrongAnswers": [
      "Le livre est dans la sac.",
      "Le livre est à droite le sac.",
      "Le livre est devant le sac."
    ]
  },
  {
    "id": "PB7027",
    "fr": "Le chien est devant le parc.",
    "romaji": "inu wa kouen no mae ni imasu.",
    "kana": "いぬは こうえんの まえに います。",
    "kanji": "犬は公園の前にいます。",
    "course": 7,
    "wrongAnswers": [
      "Le chien est devant la parc.",
      "Le chien est à droite le parc.",
      "Le chien est derrière le parc."
    ]
  },
  {
    "id": "PB7028",
    "fr": "La fleur est sur le bureau.",
    "romaji": "hana wa tsukue no ue ni arimasu.",
    "kana": "はなは つくえの うえに あります。",
    "kanji": "花は机の上にあります。",
    "course": 7,
    "wrongAnswers": [
      "La fleur est sur la bureau.",
      "La fleur est à droite le bureau.",
      "La fleur est devant le bureau."
    ]
  },
  {
    "id": "PB7029",
    "fr": "Naruto est derrière l'arbre.",
    "romaji": "Naruto wa ki no ushiro ni imasu.",
    "kana": "なるとは きの うしろに います。",
    "kanji": "ナルトは木の後ろにいます。",
    "course": 7,
    "wrongAnswers": [
      "Naruto est à droite l'arbre.",
      "Naruto est devant l'arbre.",
      "Naruto est dans l'arbre."
    ]
  },
  {
    "id": "PB7030",
    "fr": "Les chaussures est sous la chaise.",
    "romaji": "kutsu wa isu no shita ni arimasu.",
    "kana": "くつは いすの したに あります。",
    "kanji": "靴は椅子の下にあります。",
    "course": 7,
    "wrongAnswers": [
      "Les chaussures est à droite la chaise.",
      "Les chaussures est devant la chaise.",
      "Les chaussures est derrière la chaise."
    ]
  },
  {
    "id": "PB7031",
    "fr": "Sakura est dans la chambre.",
    "romaji": "Sakura wa heya no naka ni imasu.",
    "kana": "さくらは へやの なかに います。",
    "kanji": "さくらは部屋の中にいます。",
    "course": 7,
    "wrongAnswers": [
      "Sakura est à droite la chambre.",
      "Sakura est devant la chambre.",
      "Sakura est derrière la chambre."
    ]
  },
  {
    "id": "PB7032",
    "fr": "La gare est à gauche la banque.",
    "romaji": "eki wa ginkou no hidari ni arimasu.",
    "kana": "えきは ぎんこうの ひだりに あります。",
    "kanji": "駅は銀行の左にあります。",
    "course": 7,
    "wrongAnswers": [
      "La gare est à droite la banque.",
      "La gare est devant la banque.",
      "La gare est derrière la banque."
    ]
  },
  {
    "id": "PB7033",
    "fr": "La clé est sur la table.",
    "romaji": "kagi wa teeburu no ue ni arimasu.",
    "kana": "かぎは テーブルの うえに あります。",
    "kanji": "鍵はテーブルの上にあります。",
    "course": 7,
    "wrongAnswers": [
      "La clé est à droite la table.",
      "La clé est devant la table.",
      "La clé est derrière la table."
    ]
  },
  {
    "id": "PB7034",
    "fr": "L'enfant est devant la maison.",
    "romaji": "kodomo wa ie no mae ni imasu.",
    "kana": "こどもは いえの まえに います。",
    "kanji": "子供は家の前にいます。",
    "course": 7,
    "wrongAnswers": [
      "L'enfant est à droite la maison.",
      "L'enfant est derrière la maison.",
      "L'enfant est dans la maison."
    ]
  },
  {
    "id": "PB7035",
    "fr": "Le konbini est derrière la gare.",
    "romaji": "konbini wa eki no ushiro ni arimasu.",
    "kana": "コンビニは えきの うしろに あります。",
    "kanji": "コンビニは駅の後ろにあります。",
    "course": 7,
    "wrongAnswers": [
      "Le konbini est à droite la gare.",
      "Le konbini est devant la gare.",
      "Le konbini est dans la gare."
    ]
  },
  {
    "id": "PB7036",
    "fr": "Je vais à la gare.",
    "romaji": "Eki ni ikimasu.",
    "kana": "えきに いきます。",
    "kanji": "駅に行きます。",
    "course": 7,
    "wrongAnswers": [
      "Je rentre à la gare.",
      "Je viens à la gare.",
      "Je vais à l'école."
    ]
  },
  {
    "id": "PB7037",
    "fr": "Sakura va à l'école.",
    "romaji": "Sakura wa gakkou ni ikimasu.",
    "kana": "さくらは がっこうに いきます。",
    "kanji": "さくらは学校に行きます。",
    "course": 7,
    "wrongAnswers": [
      "Sakura rentre à l'école.",
      "Sakura vient à l'école.",
      "Naruto va à l'école."
    ]
  },
  {
    "id": "PB7038",
    "fr": "Kakashi rentre au village.",
    "romaji": "Kakashi wa mura ni kaerimasu.",
    "kana": "カカシは むらに かえります。",
    "kanji": "カカシは村に帰ります。",
    "course": 7,
    "wrongAnswers": [
      "Kakashi va au village.",
      "Kakashi vient du village.",
      "Sasuke rentre au village."
    ]
  },
  {
    "id": "PB7039",
    "fr": "Mon ami vient chez moi.",
    "romaji": "Tomodachi wa uchi ni kimasu.",
    "kana": "ともだちは うちに きます。",
    "kanji": "友達は家に来ます。",
    "course": 7,
    "wrongAnswers": [
      "Mon ami va chez moi.",
      "Mon ami rentre chez lui.",
      "Sakura vient chez moi."
    ]
  },
  {
    "id": "PB7040",
    "fr": "Naruto entre dans le magasin.",
    "romaji": "Naruto wa mise ni hairimasu.",
    "kana": "なるとは みせに はいります。",
    "kanji": "ナルトは店に入ります。",
    "course": 7,
    "wrongAnswers": [
      "Naruto sort du magasin.",
      "Naruto va au magasin.",
      "Sasuke entre dans le magasin."
    ]
  },
  {
    "id": "PB7041",
    "fr": "Je monte dans le train.",
    "romaji": "Densha ni norimasu.",
    "kana": "でんしゃに のります。",
    "kanji": "電車に乗ります。",
    "course": 7,
    "wrongAnswers": [
      "Je descends du train.",
      "Je vais au train.",
      "Je monte dans le bus."
    ]
  },
  {
    "id": "PB7042",
    "fr": "Je me lève à 7 heures.",
    "romaji": "Shichi-ji ni okimasu.",
    "kana": "しちじに おきます。",
    "kanji": "七時に起きます。",
    "course": 7,
    "wrongAnswers": [
      "Je me lève à 8 heures.",
      "Je me couche à 7 heures.",
      "Je pars à 7 heures."
    ]
  },
  {
    "id": "PB7043",
    "fr": "J'étudie à 8 heures.",
    "romaji": "Hachi-ji ni benkyou shimasu.",
    "kana": "はちじに べんきょうします。",
    "kanji": "八時に勉強します。",
    "course": 7,
    "wrongAnswers": [
      "J'étudie à 7 heures.",
      "Je travaille à 8 heures.",
      "J'étudie à 8 heures demain."
    ]
  },
  {
    "id": "PB7044",
    "fr": "Je vais à Tokyo.",
    "romaji": "Toukyou ni ikimasu.",
    "kana": "とうきょうに いきます。",
    "kanji": "東京に行きます。",
    "course": 7,
    "wrongAnswers": [
      "Je viens de Tokyo.",
      "Je rentre à Tokyo.",
      "Je vais à Kyoto."
    ]
  },
  {
    "id": "PB7045",
    "fr": "Sakura vient à la gare.",
    "romaji": "Sakura wa eki ni kimasu.",
    "kana": "さくらは えきに きます。",
    "kanji": "さくらは駅に来ます。",
    "course": 7,
    "wrongAnswers": [
      "Sakura va à la gare.",
      "Sakura rentre à la gare.",
      "Naruto vient à la gare."
    ]
  },
  {
    "id": "PB7046",
    "fr": "Je rentre à la maison.",
    "romaji": "Uchi ni kaerimasu.",
    "kana": "うちに かえります。",
    "kanji": "家に帰ります。",
    "course": 7,
    "wrongAnswers": [
      "Je vais à la maison.",
      "Je viens à la maison.",
      "Je rentre à l'école."
    ]
  },
  {
    "id": "PB7047",
    "fr": "Le professeur va à l'école mardi.",
    "romaji": "Kayoubi ni sensei wa gakkou ni ikimasu.",
    "kana": "かようびに せんせいは がっこうに いきます。",
    "kanji": "火曜日に先生は学校に行きます。",
    "course": 7,
    "wrongAnswers": [
      "Le professeur va à l'école jeudi.",
      "Le professeur vient à l'école mardi.",
      "L'élève va à l'école mardi."
    ]
  },
  {
    "id": "PB7048",
    "fr": "Je vais à la banque à 9 heures.",
    "romaji": "Ku-ji ni ginkou ni ikimasu.",
    "kana": "くじに ぎんこうに いきます。",
    "kanji": "九時に銀行に行きます。",
    "course": 7,
    "wrongAnswers": [
      "Je vais à la banque à 8 heures.",
      "Je rentre de la banque à 9 heures.",
      "Je vais à la gare à 9 heures."
    ]
  },
  {
    "id": "PB7049",
    "fr": "Aujourd'hui, je vais à l'école.",
    "romaji": "Kyou, gakkou ni ikimasu.",
    "kana": "きょう、がっこうに いきます。",
    "kanji": "今日、学校に行きます。",
    "course": 7,
    "wrongAnswers": [
      "Aujourd'hui, je viens à l'école.",
      "Demain, je vais à l'école.",
      "Tous les jours, je vais à l'école."
    ]
  },
  {
    "id": "PB7050",
    "fr": "Tous les jours, je vais à la gare.",
    "romaji": "Mainichi, eki ni ikimasu.",
    "kana": "まいにち、えきに いきます。",
    "kanji": "毎日、駅に行きます。",
    "course": 7,
    "wrongAnswers": [
      "Aujourd'hui, je vais à la gare.",
      "Tous les jours, je viens de la gare.",
      "Tous les jours, je vais à l'école."
    ]
  }
];
 window.JAPONAIS_PHRASE_BANK = Object.freeze(phrases.map(p => Object.freeze({...p,wrongAnswers:Object.freeze(p.wrongAnswers)})));
 window.JAPONAIS_PHRASE_BANK_STATS = Object.freeze({total:phrases.length,perCourse:Object.freeze(Object.fromEntries([1,2,3,4,5,6,7].map(c=>[c,phrases.filter(p=>p.course===c).length])))});
})();
