/**
 * とちぎ移住サポートナビ 2026 栃木県25市町完全静的データセット
 * サーバーレス完全対応版（Vercel / Cloudflare Pages / ローカル両用）
 */
window.TOCHIGI_IJU_DATA = {
  "updated_at": "2026-10-22",
  "prefecture_grant_info": {
    "title": "栃木県・市町連携 地方創生移住支援金（2026年度最新）",
    "overview": "東京23区に在住または通勤していた方が栃木県内の対象市町に移住し、就業・起業・テレワーク等を行う場合に支給されます。",
    "amounts": {
      "household": "100万円（2人以上の世帯）",
      "single": "60万円（単身者）",
      "child_bonus": "18歳未満の子ども1人につき最大100万円加算"
    },
    "requirements": "東京23区に在住、または東京圏（埼玉・千葉・神奈川・東京の一部）から23区へ通算5年以上かつ直前1年以上通勤していたこと、WORKWORKとちぎ掲載求人への就業、テレワーク継続、または地域課題解決型起業等。",
    "official_portal": "https://www.tochigi-iju.jp/",
    "pref_support_page": "https://www.pref.tochigi.lg.jp/a03/iju_shien_jigyou.html"
  },
  "groups": [
    {
      "id": "urban_commute",
      "name": "都市利便・新幹線通勤グループ",
      "tagline": "都市機能×都内アクセス！快適なオンオフ両立ライフ",
      "description": "新幹線やJR宇都宮線、LRTなど充実した交通インフラと大型商業施設・高度医療が揃い、東京方面への通勤や利便性を重視する方におすすめのエリアです。",
      "icon": "🚅",
      "color": "from-blue-500 to-cyan-500"
    },
    {
      "id": "nature_resort",
      "name": "自然・リゾート・二拠点生活グループ",
      "tagline": "温泉・山・清流！四季折々の自然と癒やしの暮らし",
      "description": "日光・那須をはじめとする日本有数の観光・リゾート地。豊かな自然環境、名湯、カフェや別荘文化に囲まれ、テレワークや二拠点生活、スローライフを満喫できます。",
      "icon": "🌲",
      "color": "from-emerald-500 to-teal-500"
    },
    {
      "id": "history_culture",
      "name": "歴史・文化・クラフトグループ",
      "tagline": "歴史の街並みとものづくり！感性豊かなアート＆カルチャー",
      "description": "蔵の街や日本最古の学校、益子焼の陶芸、木工の街など、伝統と職人文化が息づく街。古民家リノベーションやクリエイティブな活動を志す方に最適です。",
      "icon": "🏺",
      "color": "from-amber-500 to-orange-500"
    },
    {
      "id": "family_care",
      "name": "子育て・ファミリー定住グループ",
      "tagline": "医療費無償・手厚い給付！子どもがのびのび育つ安心の街",
      "description": "高校生までの医療費助成や住宅取得奨励金、充実した教育施設や公園が整備されたエリア。共働き世帯や30代・40代の子育てファミリーが安心して暮らせます。",
      "icon": "🏡",
      "color": "from-pink-500 to-rose-500"
    },
    {
      "id": "slow_agriculture",
      "name": "のどかな里山・農業・スローライフグループ",
      "tagline": "清流と田園風景！農ある暮らしと温かな地域コミュニティ",
      "description": "那珂川の清流や広大な田園、サシバの舞う里山が広がる地域。家庭菜園や新規就農、地域の温もりある人と人の繋がりの中で穏やかな時間を過ごしたい方にぴったりです。",
      "icon": "🌾",
      "color": "from-lime-500 to-green-600"
    }
  ],
  "municipalities": [
    {
      "id": "utsunomiya",
      "name": "宇都宮市",
      "kana": "うつのみやし",
      "area": "県央",
      "group_id": "urban_commute",
      "sub_feature": "北関東最大の50万都市機能と、次世代路面電車LRTによる先進的な暮らしを希望なら",
      "catchphrase": "餃子の街から次世代都市へ！LRTと新幹線が拓くスマートライフ",
      "summary": "栃木県の県庁所在地。人口約51万人を擁し、大型商業施設・高度総合病院・教育機関が集中。2023年に開業した次世代型路面電車「芳賀・宇都宮LRT」により東西の回遊性が劇的に向上しました。新幹線で東京まで約50分と都内通勤も可能です。",
      "access": "東北新幹線（東京駅まで約50分）、JR宇都宮線・日光線・烏山線、東武宇都宮線、芳賀・宇都宮LRT、東北自動車道・北関東自動車道",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人（要件を満たす移住者）",
        "housing_support": "まちなか・LRT沿線等住宅取得支援（最大50万円〜100万円等の補助制度あり）",
        "child_care": "高校生相当（18歳到達年度末）までの子ども医療費助成（完全無償化）、一時預かり等の充実",
        "trial_living": "移住検討者向けオーダーメイド型現地案内・オンライン移住相談実施",
        "work_support": "起業支援補助金（最大100万円）、IT・ものづくり企業誘致施策多数"
      },
      "official_urls": {
        "migration_page": "https://www.city.utsunomiya.tochigi.jp/shisei/machizukuri/1006509/index.html",
        "city_home": "https://www.city.utsunomiya.tochigi.jp/"
      },
      "contact": "宇都宮市 総合政策部 人口未来課（TEL: 028-632-2115）",
      "tags": [
        "新幹線",
        "LRT",
        "大都市利便",
        "子育て医療無償",
        "商業施設充実",
        "テレワーク"
      ]
    },
    {
      "id": "oyama",
      "name": "小山市",
      "kana": "おやまし",
      "area": "県南",
      "group_id": "urban_commute",
      "sub_feature": "新幹線で東京駅まで最速約42分！都内通勤とゆとりのマイホームを両立したいなら",
      "catchphrase": "新幹線で都心直結！通勤も週末の自然も欲張れる県南のハブ都市",
      "summary": "栃木県第2の人口を誇る県南の交通拠点。東北新幹線・JR宇都宮線・水戸線・両毛線が交差。新幹線なら東京駅まで約42分で都内通勤が十分可能。新幹線通勤定期代補助や子育て世帯向け住宅取得支援が極めて手厚く、共働き移住者に絶大な人気を誇ります。",
      "access": "東北新幹線（東京駅まで最速約42分）、JR宇都宮線・両毛線・水戸線、国道4号・50号バイパス",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "commute_support": "新幹線通勤定期券購入費補助金（月額最大2万円、最長24〜36ヶ月補助）",
        "housing_support": "子育て世代・若者夫婦向けマイホーム取得補助金（市内建築で最大数十万円補助）",
        "child_care": "18歳までの子ども医療費助成、病児保育・認可保育園の充実",
        "trial_living": "小山市移住定住ワンストップ相談窓口、オンライン移住相談対応"
      },
      "official_urls": {
        "migration_page": "https://www.city.oyama.tochigi.jp/soshiki/7/242273.html",
        "city_home": "https://www.city.oyama.tochigi.jp/"
      },
      "contact": "小山市 市民生活部 シティプロモーション課（TEL: 0285-22-9278）",
      "tags": [
        "新幹線通勤補助",
        "東京40分圏",
        "JR4路線",
        "住宅補助",
        "子育て支援",
        "県南"
      ]
    },
    {
      "id": "shimotsuke",
      "name": "下野市",
      "kana": "しもつけし",
      "area": "県央",
      "group_id": "urban_commute",
      "sub_feature": "自治医大病院の圧倒的医療安心感と、閑静で上品な住宅街での暮らしを希望なら",
      "catchphrase": "名門医大が支える安心医療と、新幹線・都心直通の優れたアクセス",
      "summary": "小山市と宇都宮市の中間に位置し、JR宇都宮線3駅（小金井・自治医大・石橋）を有します。小金井駅は始発電車が多数発着し都内通勤も座ってラクラク。自治医科大学附属病院をはじめ高度医療機関が充実しており、子育て世代からシニアまで抜群の健康・医療安心度を誇ります。",
      "access": "JR宇都宮線（小金井駅・自治医大駅・石橋駅 / 湘南新宿ライン・上野東京ライン直通）、国道4号バイパス",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "若者・子育て世代定住促進住宅取得支援補助金",
        "child_care": "高校生相当までの子ども医療費完全無料化、全小学校区での放課後児童クラブ完備",
        "trial_living": "下野市移住定住サポート相談窓口（オンライン可）",
        "work_support": "地域起業支援・中小企業雇用奨励金制度"
      },
      "official_urls": {
        "migration_page": "https://www.city.shimotsuke.lg.jp/1173/info-0000003058-1.html",
        "city_home": "https://www.city.shimotsuke.lg.jp/"
      },
      "contact": "下野市 総合政策課 地方創生推進グループ（TEL: 0285-32-8886）",
      "tags": [
        "医療充実",
        "自治医大",
        "宇都宮線始発駅",
        "都内直通",
        "治安良好",
        "住宅街"
      ]
    },
    {
      "id": "nikko",
      "name": "日光市",
      "kana": "にっこうし",
      "area": "県北",
      "group_id": "nature_resort",
      "sub_feature": "世界遺産の荘厳な自然と名湯鬼怒川！本格的なリゾートワーケーションを希望なら",
      "catchphrase": "世界が憧れる四季の美と温泉。日常がリゾートになる悠々自適の地",
      "summary": "日光東照宮をはじめとする世界遺産、中禅寺湖、鬼怒川温泉など世界的景勝地を抱える街。都心から東武特急スペーシアで直通約1時間50分。豊かな大自然に囲まれながら、テレワーク施設やお試し移住ハウスが充実しており、二拠点居住やカフェ・観光起業を目指す移住者が増加しています。",
      "access": "東武日光線・鬼怒川線（特急スペーシアで浅草・新宿直通）、JR日光線、日光宇都宮道路",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "定住促進住宅取得支援金、空き家バンク改修等補助金（最大数十万円）",
        "trial_living": "日光市「日光暮らし体験ハウス」（長期滞在可能・家具家電Wi-Fi完備のお試し住宅）",
        "child_care": "18歳までの医療費無償化、日光市独自の保育料軽減策",
        "work_support": "サテライトオフィス開設補助、観光・地域特産起業支援制度"
      },
      "official_urls": {
        "migration_page": "https://www.city.nikko.lg.jp/teiju/index.html",
        "city_home": "https://www.city.nikko.lg.jp/"
      },
      "contact": "日光市 企画総務部 地域振興課 日光暮らし推進係（TEL: 0288-21-5147）",
      "tags": [
        "世界遺産",
        "温泉",
        "リゾート",
        "お試し住宅",
        "特急直通",
        "二拠点居住"
      ]
    },
    {
      "id": "nasu_town",
      "name": "那須町",
      "kana": "なすまち",
      "area": "県北",
      "group_id": "nature_resort",
      "sub_feature": "皇室の御用邸があるロイヤルリゾート！おしゃれな別荘地やカフェ文化を愛するなら",
      "catchphrase": "爽やかな風が抜ける那須高原。高原カフェと別荘文化に彩られた上質な日常",
      "summary": "那須連山の麓に広がる日本屈指の高原リゾート地。御用邸や温泉郷、牧場、アートギャラリー、おしゃれなベーカリー・カフェが点在。別荘地や古民家でのテレワーク、二拠点生活、ドッグラン付き住宅でのペット共生ライフに全国から注目を集めています。",
      "access": "東北新幹線那須塩原駅より車またはバス、東北自動車道（那須IC・那須高原スマートIC）",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "ふるさと定住奨励金、空き家バンク成約祝い金・リフォーム補助",
        "trial_living": "那須町お試し居住体験住宅（短期〜中期の移住トライアル施設）",
        "child_care": "高校生までの医療費助成、町独自の出産祝金・育児手当",
        "work_support": "ワーケーション誘致、那須高原での農産物直売・観光起業サポート"
      },
      "official_urls": {
        "migration_page": "https://www.town.nasu.lg.jp/0273/info-0000000780-1.html",
        "city_home": "https://www.town.nasu.lg.jp/"
      },
      "contact": "那須町 ふるさと定住課 定住推進係（TEL: 0287-72-6955）",
      "tags": [
        "那須高原",
        "ロイヤルリゾート",
        "別荘",
        "カフェ",
        "温泉",
        "ペット共生"
      ]
    },
    {
      "id": "nasushiobara",
      "name": "那須塩原市",
      "kana": "なすしおばらし",
      "area": "県北",
      "group_id": "nature_resort",
      "sub_feature": "新幹線停車駅の利便性と塩原・板室の美肌温泉！自然と都会の快適バランスなら",
      "catchphrase": "新幹線が停まるリゾートゲートウェイ。豊かな酪農と名湯が育む健やかな日々",
      "summary": "県北の中核都市であり、東北新幹線「那須塩原駅」を擁するため東京まで約70分。塩原温泉郷や板室温泉といった歴史ある湯治場を抱えつつ、市街地には大型スーパーや複合施設が集積。生乳生産量本州第1位の酪農王国でもあり、新鮮な乳製品や高原野菜が身近に楽しめます。",
      "access": "東北新幹線（那須塩原駅 / 東京まで約70分）、JR宇都宮線、東北自動車道（西那須野塩原IC・黒磯板室IC）",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "commute_support": "新幹線通勤定期券購入費補助制度（テレワーク・通勤支援）",
        "housing_support": "住まいづくり補助金（新築・購入最大数十万円補助）",
        "child_care": "こども医療費高校生まで完全無償、市内保育施設・児童館充実",
        "trial_living": "那須塩原市お試し移住体験住宅（駅近・リゾート近郊）"
      },
      "official_urls": {
        "migration_page": "https://www.city.nasushiobara.lg.jp/soshikikarasagasu/citypromotionka/ijuteiju/index.html",
        "city_home": "https://www.city.nasushiobara.lg.jp/"
      },
      "contact": "那須塩原市 シティプロモーション課（TEL: 0287-62-7128）",
      "tags": [
        "新幹線駅",
        "塩原温泉",
        "生乳本州1位",
        "二拠点居住",
        "新幹線補助",
        "自然共生"
      ]
    },
    {
      "id": "shioya",
      "name": "塩谷町",
      "kana": "しおやまち",
      "area": "県北",
      "group_id": "nature_resort",
      "sub_feature": "名水百選・尚仁沢湧水の極上名水と高原山の静かな森に抱かれたいなら",
      "catchphrase": "日本屈指の名水が湧き出る里。静寂と清流がもたらす究極のスローライフ",
      "summary": "環境庁「名水百選」で全国第1位にも選ばれた『尚仁沢（しょうじんざわ）湧水』を育む自然豊かな町。高原山の雄大な景色のもと、澄んだ空気と清らかな水で育つ高原野菜や米は絶品。都会の喧騒を完全に離れ、静寂のなかで創作活動や家庭菜園を営みたい方に最適です。",
      "access": "JR東北本線（矢板駅・氏家駅より車約20分）、東北自動車道（矢板ICより約15分）",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "塩谷町住宅取得支援事業（新築・購入奨励金）、空き家改修補助",
        "child_care": "18歳まで子ども医療費無償化、小中学校給食費補助",
        "trial_living": "移住相談窓口での個別案内対応",
        "work_support": "新規就農支援制度（給付金・農地あっせん）"
      },
      "official_urls": {
        "migration_page": "https://www.town.shioya.tochigi.jp/forms/menugrouptop/menugrouptop.aspx?menu_group_id=141",
        "city_home": "https://www.town.shioya.tochigi.jp/"
      },
      "contact": "塩谷町 企画調整課 企画調整係（TEL: 0287-45-2211）",
      "tags": [
        "名水百選",
        "尚仁沢湧水",
        "里山",
        "静寂",
        "家庭菜園",
        "高原山"
      ]
    },
    {
      "id": "mashiko",
      "name": "益子町",
      "kana": "ましこまち",
      "area": "県東",
      "group_id": "history_culture",
      "sub_feature": "全国の陶芸家が集う『益子焼の聖地』で、うつわ・カフェ・創作に没頭したいなら",
      "catchphrase": "土と炎と暮らす陶芸の里。感性を解き放つクリエイターが集う街",
      "summary": "言わずと知れた益子焼の産地。春と秋に開催される益子陶器市には全国から数十万人が訪れます。陶芸家や木工職人、オーガニック志向のシェフやカフェオーナーが多く移住しており、移住者を温かく受け入れるコミュニティ文化が根付いています。センスあふれる田舎暮らしが叶います。",
      "access": "真岡鐵道（益子駅）、北関東自動車道（桜川筑西IC・真岡IC）、宇都宮駅から東野バス直通",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "若者・子育て世代住宅取得補助金（最大数十万円）、空き家バンク改修補助",
        "trial_living": "益子町移住体験住宅「ましこぐらし体験住宅」（短期滞在・陶芸体験）",
        "child_care": "高校生までの医療費無償化、益子型放課後子どもプラン",
        "work_support": "陶芸家支援・起業サポートセンターによる創業支援"
      },
      "official_urls": {
        "migration_page": "https://www.town.mashiko.lg.jp/page/dir000009.html",
        "city_home": "https://www.town.mashiko.lg.jp/"
      },
      "contact": "益子町 観光商工課 / 移住サポートセンター（TEL: 0285-72-8845）",
      "tags": [
        "陶芸",
        "益子焼",
        "カフェ",
        "クリエイター",
        "移住体験住宅",
        "アート"
      ]
    },
    {
      "id": "tochigi_city",
      "name": "栃木市",
      "kana": "とちぎし",
      "area": "県南",
      "group_id": "history_culture",
      "sub_feature": "巴波川の鯉と黒塗りの土蔵群！小江戸情緒と東武特急による浅草直結アクセスなら",
      "catchphrase": "蔵の街の薫りと豊かな水辺。歴史が息づく小江戸で始める心地よい日々",
      "summary": "巴波川沿いに黒塗りの見世蔵や白壁の土蔵が立ち並ぶ「蔵の街」。江戸時代から宿場町・舟運の拠点として栄え、国の重要伝統的建造物群保存地区にも選定。東武特急で浅草まで約70分とアクセス良好。風情ある景観と都市機能が調和し、歴史散策や古民家カフェが身近にあります。",
      "access": "東武日光線（特急で浅草まで約70分）、JR両毛線、東北自動車道（栃木IC・佐野藤岡IC）",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "若者移住定住住宅取得支援金、空き家バンク利活用補助金（最大100万円）",
        "trial_living": "栃木市お試し移住体験住宅（歴史ある街並み近郊）",
        "child_care": "18歳までの医療費助成、市独自の子育て支援拠点施設",
        "work_support": "中心市街地まちなか出店起業補助金、古民家再生ビジネス支援"
      },
      "official_urls": {
        "migration_page": "https://www.city.tochigi.lg.jp/site/ijuteiju/",
        "city_home": "https://www.city.tochigi.lg.jp/"
      },
      "contact": "栃木市 地域活力づくり課 移住定住推進係（TEL: 0282-21-2473）",
      "tags": [
        "蔵の街",
        "小江戸",
        "東武特急",
        "古民家リノベ",
        "歴史文化",
        "都内直通"
      ]
    },
    {
      "id": "ashikaga",
      "name": "足利市",
      "kana": "あしかがし",
      "area": "県南",
      "group_id": "history_culture",
      "sub_feature": "日本最古の総合大学・足利学校とワイン文化！知性と美に満ちた文化都市なら",
      "catchphrase": "千年の歴史と四季の花々。足利学校とワイナリーが薫る文化薫る古都",
      "summary": "室町幕府を開いた足利氏発祥の地。日本最古の学校「足利学校」や鑁阿寺（国宝）など国宝・重要文化財が多数。あしかがフラワーパークの大藤やココ・ファーム・ワイナリーなど洗練された文化スポットが満載。東武特急りょうもう号で北千住・浅草直結と交通の便も秀逸です。",
      "access": "東武伊勢崎線（特急りょうもう号で浅草直結約75分）、JR両毛線、北関東自動車道（足利IC）",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "新婚・子育て世帯定住奨励金、空き家バンク改修補助金",
        "child_care": "高校生までの医療費無償化、多彩な子育てサロン",
        "trial_living": "足利市移住コンシェルジュによる相談・オンラインツアー",
        "work_support": "足利市創業支援補助金、伝統産業（繊維・染色）後継者支援"
      },
      "official_urls": {
        "migration_page": "https://www.city.ashikaga.tochigi.jp/site/ijuteiju/",
        "city_home": "https://www.city.ashikaga.tochigi.jp/"
      },
      "contact": "足利市 移住・定住相談窓口（企画政策課 TEL: 0284-20-2261）",
      "tags": [
        "足利学校",
        "フラワーパーク",
        "ワイナリー",
        "東武特急",
        "古都",
        "文化芸術"
      ]
    },
    {
      "id": "kanuma",
      "name": "鹿沼市",
      "kana": "かぬまし",
      "area": "県央",
      "group_id": "history_culture",
      "sub_feature": "江戸彫刻の技が光る『木工といちごの街』で、木の温もりと里山クラフトを楽しむなら",
      "catchphrase": "銘木と清流に彩られた木工といちごの都。伝統の技が暮らしを豊かにする",
      "summary": "日光東照宮の造営に携わった職人の技を受け継ぐ「鹿沼組子」など木工の伝統の街。ユネスコ無形文化遺産の『鹿沼秋まつり』の彫刻屋台は見事。宇都宮市に隣接し通勤至便ながら、西側には前日光の雄大な山々と清流が広がり、手打ち蕎麦やキャンプ、木工DIYを満喫できます。",
      "access": "東武日光線（新鹿沼駅 / 特急停車）、JR日光線（鹿沼駅）、東北自動車道（鹿沼IC）",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "鹿沼市若年者住宅取得支援補助金、かぬま材利活用住宅補助",
        "child_care": "子ども医療費助成（18歳まで）、充実した放課後児童クラブ",
        "trial_living": "鹿沼市移住体験プログラム、空き家バンク物件見学案内",
        "work_support": "鹿沼市新規就業・起業支援制度、林業・木工従事者支援"
      },
      "official_urls": {
        "migration_page": "https://www.city.kanuma.tochigi.jp/0284/info-0000004928-1.html",
        "city_home": "https://www.city.kanuma.tochigi.jp/"
      },
      "contact": "鹿沼市 地域創生課 定住促進係（TEL: 0289-63-2216）",
      "tags": [
        "木工",
        "鹿沼組子",
        "いちご",
        "東武特急",
        "宇都宮隣接",
        "DIY"
      ]
    },
    {
      "id": "motegi",
      "name": "茂木町",
      "kana": "もてぎまち",
      "area": "県東",
      "group_id": "history_culture",
      "sub_feature": "モビリティリゾートもてぎと里山！モータースポーツ＆アウトドアを極めたいなら",
      "catchphrase": "世界最高峰のモータースポーツと里山の静寂。ワクワクと癒やしが共存する町",
      "summary": "世界的なサーキット「モビリティリゾートもてぎ」を擁する町。モータースポーツやグランピング、アスレチック施設が充実。一方で清流・那珂川や里山の美しい棚田が広がり、鮎釣りやカヌー、星空観察などアウトドア派にはたまらない環境です。高校生まで医療費完全無料など定住施策も強力。",
      "access": "真岡鐵道（茂木駅）、北関東自動車道・常磐自動車道各ICより車約30〜40分",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "若者定住マイホーム取得補助金（最大数十万円）、空き家改修助成",
        "child_care": "18歳まで子ども医療費完全無料、出産祝金、小中学校給食費補助",
        "trial_living": "もてぎ暮らし体験住宅（Wi-Fi完備のお試し施設）",
        "work_support": "新規就農サポート（ゆず・いちご等）、地域おこし起業支援"
      },
      "official_urls": {
        "migration_page": "https://www.town.motegi.tochigi.jp/motegi/sp/teiju/index.html",
        "city_home": "https://www.town.motegi.tochigi.jp/"
      },
      "contact": "茂木町 もてぎ暮らしサポートセンター（企画課 TEL: 0285-63-5619）",
      "tags": [
        "モビリティリゾート",
        "サーキット",
        "アウトドア",
        "星空",
        "お試し住宅",
        "鮎"
      ]
    },
    {
      "id": "moka",
      "name": "真岡市",
      "kana": "もおかし",
      "area": "県東",
      "group_id": "family_care",
      "sub_feature": "日本一のいちごとSLが走る街！手厚い子育て給付とものづくり産業の雇用なら",
      "catchphrase": "いちご王国＆SLの街。手厚い子育て支援と活気ある産業が育む暮らし",
      "summary": "いちごの生産量日本一を誇り、週末には本物の蒸気機関車「SLもおか」が汽笛を響かせる魅力的な街。大規模な工業団地を抱え県東部最大の産業都市として雇用も豊富。全小中学校の給食費完全無償化や子ども医療費無償化など、全国トップクラスの手厚い子育て支援で若いファミリーが急増中。",
      "access": "真岡鐵道、JR宇都宮線石橋駅よりバス、北関東自動車道（真岡IC）",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "真岡市若者・子育て世帯定住促進住宅取得等補助金",
        "child_care": "高校生までの医療費完全無料、小中学校の学校給食費完全無償化、第2子以降保育料無償",
        "trial_living": "真岡市移住相談窓口、オンライン移住相談対応",
        "work_support": "工業団地就職マッチング、いちご就農研修支援（いちごスクール）"
      },
      "official_urls": {
        "migration_page": "https://www.city.moka.lg.jp/soshiki/sougouseisakuka/gyomu/ijuteiju/index.html",
        "city_home": "https://www.city.moka.lg.jp/"
      },
      "contact": "真岡市 総合政策課 地方創生係（TEL: 0285-83-8103）",
      "tags": [
        "給食費無償",
        "日本一のいちご",
        "SLもおか",
        "手厚い子育て",
        "雇用豊富",
        "工業都市"
      ]
    },
    {
      "id": "sakura",
      "name": "さくら市",
      "kana": "さくらし",
      "area": "県北",
      "group_id": "family_care",
      "sub_feature": "日本屈指の美肌温泉『喜連川温泉』と宇都宮ベッドタウンの絶妙なバランスなら",
      "catchphrase": "日本三大美肌の湯と桜の杜。宇都宮至近で安心の子育て環境",
      "summary": "宇都宮市のベッドタウンとして発展するさくら市。JR氏家駅からは宇都宮駅まで電車でわずか15分。東側には「日本三大美肌の湯」として名高い喜連川温泉が広がり、日常的に良質な温泉を楽しめます。自然豊かな公園や商業施設がバランスよく揃い、子育てファミリーの定住先として大人気です。",
      "access": "JR宇都宮線（氏家駅・蒲須坂駅 / 宇都宮まで約15分）、東北自動車道（矢板IC至近）",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "さくら市住宅取得祝金（若者・子育て世代対象加算あり）",
        "child_care": "18歳までの子ども医療費無料、子育て支援センター・ファミリーサポート完備",
        "trial_living": "移住相談窓口でのきめ細かな生活情報提供",
        "work_support": "創業支援等事業計画認定による起業支援補助"
      },
      "official_urls": {
        "migration_page": "https://www.city.tochigi-sakura.lg.jp/soshiki/5/iju.html",
        "city_home": "https://www.city.tochigi-sakura.lg.jp/"
      },
      "contact": "さくら市 総合政策課 総合政策係（TEL: 028-681-1113）",
      "tags": [
        "美肌の湯",
        "喜連川温泉",
        "宇都宮15分",
        "子育て支援",
        "桜の名所",
        "ベッドタウン"
      ]
    },
    {
      "id": "mibu",
      "name": "壬生町",
      "kana": "みぶまち",
      "area": "県央",
      "group_id": "family_care",
      "sub_feature": "『おもちゃのまち』の遊び心と獨協医大の高度医療！高速直結の便利さを求めるなら",
      "catchphrase": "おもちゃと高度医療のハイブリッドタウン。北関東道直結の抜群の機動性",
      "summary": "玩具工場が集積した歴史から名付けられた「おもちゃのまち」駅や広大なわんぱく公園を有するファミリーに優しい町。町内にはドクターヘリを備えた獨協医科大学病院があり、万一の医療体制も万全。北関東道壬生IC・PA（道の駅併設）があり、東西南北へのドライブアクセスも抜群です。",
      "access": "東武宇都宮線（おもちゃのまち駅・壬生駅）、北関東自動車道（壬生IC）",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "壬生町定住促進マイホーム取得等補助金",
        "child_care": "高校生までの医療費完全無償、出産祝金支給、町立わんぱく公園や図書館の充実",
        "trial_living": "壬生町移住定住オンライン相談窓口",
        "work_support": "創業支援利子補給制度、商業活性化支援"
      },
      "official_urls": {
        "migration_page": "https://www.town.mibu.tochigi.jp/soshiki/sougou/gyomu/ijuteiju/",
        "city_home": "https://www.town.mibu.tochigi.jp/"
      },
      "contact": "壬生町 総合政策課 地方創生係（TEL: 0282-81-1813）",
      "tags": [
        "獨協医大",
        "おもちゃのまち",
        "北関東道直結",
        "わんぱく公園",
        "医療安心",
        "子育て"
      ]
    },
    {
      "id": "nogi",
      "name": "野木町",
      "kana": "のぎまち",
      "area": "県南",
      "group_id": "family_care",
      "sub_feature": "栃木県最南端で東京へ直通通勤！コンパクトシティで手軽にマイホームを持つなら",
      "catchphrase": "ひまわり咲く首都圏通勤の南の玄関口。緑と利便が調和したコンパクトタウン",
      "summary": "栃木県の最南端に位置し、茨城県や埼玉県に隣接。JR野木駅から上野東京ライン・湘南新宿ラインで上野・新宿・東京方面へ乗り換えなしで一直線。町全体が平坦でコンパクトにまとまっており、自転車で生活必需品が揃います。毎年夏には30万本のひまわりフェスティバルが開催されます。",
      "access": "JR宇都宮線（野木駅 / 上野東京ライン・湘南新宿ライン直通）、国道4号バイパス",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "野木町新婚・子育て世帯向け新築住宅取得等補助金",
        "child_care": "高校生相当までの医療費無料、町立保育園・認定こども園待機児童ゼロ",
        "trial_living": "野木町移住相談窓口での地域生活案内",
        "work_support": "町内中小企業融資制度・創業補助金"
      },
      "official_urls": {
        "migration_page": "https://www.town.nogi.lg.jp/page/dir000008.html",
        "city_home": "https://www.town.nogi.lg.jp/"
      },
      "contact": "野木町 未来開発課 移住定住係（TEL: 0280-57-4138）",
      "tags": [
        "県最南端",
        "都内直通通勤",
        "コンパクトシティ",
        "ひまわり",
        "待機児童ゼロ",
        "平坦"
      ]
    },
    {
      "id": "kaminokawa",
      "name": "上三川町",
      "kana": "かみのかわまち",
      "area": "県央",
      "group_id": "family_care",
      "sub_feature": "北関東最大級の商業エリア『インターパーク』隣接と充実の行政財政なら",
      "catchphrase": "巨大モール至近のスマートな暮らし。ものづくり産業が支える安定の街",
      "summary": "日産自動車栃木工場を抱えるものづくりの町。宇都宮市に隣接し、大型商業集積地「インターパーク宇都宮南」が町域すぐそば。シネコンや大型百貨店、スーパー、インテリア店が日常圏にあり、買い物環境は県内随一。財政基盤が安定しており、手厚い行政サービスが受けられます。",
      "access": "JR宇都宮線石橋駅近郊、北関東自動車道（宇都宮上三川IC）、国道4号バイパス",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "上三川町若者・子育て世代住宅取得祝金",
        "child_care": "18歳までの子ども医療費無料、子育てサロン・乳幼児健診の充実",
        "trial_living": "上三川町移住相談窓口",
        "work_support": "自動車関連・先端製造業就労サポート、創業支援利子補給"
      },
      "official_urls": {
        "migration_page": "https://www.town.kaminokawa.lg.jp/0038/info-0000001552-1.html",
        "city_home": "https://www.town.kaminokawa.lg.jp/"
      },
      "contact": "上三川町 企画課 総合政策係（TEL: 0285-56-9114）",
      "tags": [
        "インターパーク至近",
        "日産自動車",
        "買い物至便",
        "財政健全",
        "子育て医療無償",
        "県央"
      ]
    },
    {
      "id": "sano",
      "name": "佐野市",
      "kana": "さのし",
      "area": "県南",
      "group_id": "history_culture",
      "sub_feature": "佐野らーめん・厄除け大師・アウトレット！食文化と買い物・都内高速通勤なら",
      "catchphrase": "佐野らーめんとプレミアム・アウトレットの街。都心から車で70分の美食タウン",
      "summary": "青竹手打ちの「佐野らーめん」や佐野厄よけ大師、佐野プレミアム・アウトレットで名高い活気ある街。東北自動車道佐野藤岡IC・北関東道佐野田沼ICを擁し、高速バスも頻発。東京・池袋・羽田空港直行バスもあり、グルメとショッピング、優れた道路網が魅力です。",
      "access": "東武佐野線、JR両毛線、東北自動車道（佐野藤岡IC）、北関東自動車道（佐野田沼IC）、高速バス直行便",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "佐野市移住者等住宅取得支援奨励金、空き家バンクリフォーム補助金",
        "child_care": "高校生までの医療費助成、市独自の放課後子ども教室",
        "trial_living": "佐野市移住体験住宅（まちなか・中山間地の暮らしを体験）",
        "work_support": "佐野市起業チャレンジ応援補助金、らーめん店開業支援"
      },
      "official_urls": {
        "migration_page": "https://www.city.sano.lg.jp/soshiki/sougouseisaku/seisakusuishin/iju/index.html",
        "city_home": "https://www.city.sano.lg.jp/"
      },
      "contact": "佐野市 総合政策課 移住定住推進担当（TEL: 0283-20-3011）",
      "tags": [
        "佐野らーめん",
        "アウトレット",
        "高速バス直行",
        "お試し住宅",
        "厄除け大師",
        "食文化"
      ]
    },
    {
      "id": "ohtawara",
      "name": "大田原市",
      "kana": "おおたわらし",
      "area": "県北",
      "group_id": "slow_agriculture",
      "sub_feature": "県北随一の学術・医療機能と広大な那須野が原の田園景観を両立したいなら",
      "catchphrase": "那須野が原の広大な田園と文教の拠点。安心の医療・教育が息づく北の拠点",
      "summary": "那須野が原扇状地の中核都市。国際医療福祉大学とその附属病院を擁し、高度な医療と文教機能が充実。広大な水田地帯が広がり、鮎の遡上する那珂川が流れる美しい田園景観が広がります。豊かな自然の中でのびのび暮らしつつ、医療や教育の安心も妥協したくない方におすすめです。",
      "access": "JR宇都宮線（野崎駅）、東北新幹線那須塩原駅より車約15分、東北自動車道（西那須野塩原IC・矢板IC）",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "定住促進新築住宅取得奨励金、空き家活用リフォーム助成",
        "child_care": "子ども医療費高校生まで無料、大学連携の地域医療・育児プログラム",
        "trial_living": "大田原市移住相談窓口、農家民宿での農業体験",
        "work_support": "就農・営農支援給付金、地域産業起業補助金"
      },
      "official_urls": {
        "migration_page": "https://www.city.ohtawara.tochigi.jp/docs/2013082700346/",
        "city_home": "https://www.city.ohtawara.tochigi.jp/"
      },
      "contact": "大田原市 政策推進課 政策推進係（TEL: 0287-23-8700）",
      "tags": [
        "国際医療福祉大",
        "医療充実",
        "那須野が原",
        "広大な田園",
        "文教都市",
        "県北拠点"
      ]
    },
    {
      "id": "yaita",
      "name": "矢板市",
      "kana": "やいたし",
      "area": "県北",
      "group_id": "slow_agriculture",
      "sub_feature": "名峰・高原山麓のりんご園と森林セラピー！アウトドアとマイペース農業なら",
      "catchphrase": "高原山の清らかな風とりんごの香り。森と温泉が寄り添うやすらぎの街",
      "summary": "日光国立公園の一角、高原山の南麓に位置する自然豊かな街。樹上完熟の「矢板りんご」が名産で、果樹園やキャンプ場が点在。JR宇都宮線が通り宇都宮まで約30分とアクセスも良好。森林セラピー基地に認定された豊かな自然の中で、林業・農業・アウトドアを満喫できます。",
      "access": "JR宇都宮線（矢板駅・片岡駅 / 宇都宮まで約30分）、東北自動車道（矢板IC）",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "矢板市移住定住応援補助金（住宅取得・改修支援）、空き家バンク補助",
        "child_care": "18歳までの医療費無償化、病児・病後児保育体制完備",
        "trial_living": "矢板市お試し移住体験住宅「やいた暮らし体験住宅」",
        "work_support": "就農支援、林業担い手育成給付金、サテライトオフィス開設補助"
      },
      "official_urls": {
        "migration_page": "https://www.city.yaita.tochigi.jp/soshiki/sougouseisaku/iju-teiju.html",
        "city_home": "https://www.city.yaita.tochigi.jp/"
      },
      "contact": "矢板市 総合政策課 移住定住推進担当（TEL: 0287-43-3413）",
      "tags": [
        "矢板りんご",
        "高原山",
        "森林セラピー",
        "お試し住宅",
        "キャンプ",
        "宇都宮30分"
      ]
    },
    {
      "id": "nasukarasuyama",
      "name": "那須烏山市",
      "kana": "なすからすやましろ",
      "area": "県北",
      "group_id": "slow_agriculture",
      "sub_feature": "ユネスコ無形文化遺産『山あげ祭』と那珂川の鮎！温かな人情と伝統の里なら",
      "catchphrase": "450年の伝統絵巻・山あげ祭と清流那珂川。人情あふれる歴史と自然の里",
      "summary": "450年以上の歴史を誇る野外歌舞伎「山あげ祭」（ユネスコ無形文化遺産）で知られる街。街の中央を流れる那珂川は天然鮎の宝庫。里山に囲まれた美しい景観と、烏山和紙などの伝統工芸が息づきます。JR烏山線（蓄電池駆動電車ACCUM）が走り、素朴で温かい人々のコミュニティが移住者を歓迎します。",
      "access": "JR烏山線（烏山駅 / 宝積寺経由で宇都宮線直通）、東北自動車道矢板ICより車約35分",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "那須烏山市定住促進新築住宅取得奨励金、空き家改修等補助金",
        "child_care": "高校生までの医療費完全無料、出産・子育て応援給付金",
        "trial_living": "那須烏山市お試し移住体験事業（体験宿泊補助等）",
        "work_support": "烏山和紙後継者育成支援、新規就農里親制度"
      },
      "official_urls": {
        "migration_page": "https://www.city.nasukarasuyama.lg.jp/page/dir000008.html",
        "city_home": "https://www.city.nasukarasuyama.lg.jp/"
      },
      "contact": "那須烏山市 まちづくり課 定住推進グループ（TEL: 0287-83-1151）",
      "tags": [
        "山あげ祭",
        "ユネスコ無形遺産",
        "那珂川の鮎",
        "烏山和紙",
        "JR烏山線",
        "人情里山"
      ]
    },
    {
      "id": "takanezawa",
      "name": "高根沢町",
      "kana": "たかねざわまち",
      "area": "県北",
      "group_id": "slow_agriculture",
      "sub_feature": "世界的建築・宝積寺駅とグランピング温泉！田園とクリエイティブな農業なら",
      "catchphrase": "隈研吾建築の駅舎から広がる田園。先進の食と癒やしが息づく元気な町",
      "summary": "世界的建築家・隈研吾氏デザインの美しい木組み駅舎「宝積寺駅」がシンボル。JR宇都宮駅まで電車でわずか12分と抜群の近さ。「道の駅たかねざわ 元気あっぷむら」には天然温泉やグランピング施設が揃い週末は大賑わい。皇室の御料牧場も所在し、高品位な米や農産物が自慢です。",
      "access": "JR宇都宮線・烏山線（宝積寺駅 / 宇都宮まで約12分）、東北自動車道宇都宮ICより車約25分",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "高根沢町子育て世帯定住奨励金、空き家バンク改修補助",
        "child_care": "高校生までの医療費無償化、町内小中学校でのICT・食育教育推進",
        "trial_living": "高根沢町移住相談窓口での個別対応",
        "work_support": "起業・創業支援補助金、元気あっぷむら連携アグリビジネス支援"
      },
      "official_urls": {
        "migration_page": "https://www.town.takanezawa.tochigi.jp/soshiki/kikaku/gyomu/ijuteiju/",
        "city_home": "https://www.town.takanezawa.tochigi.jp/"
      },
      "contact": "高根沢町 企画課 総合政策係（TEL: 028-675-8980）",
      "tags": [
        "宝積寺駅",
        "隈研吾デザイン",
        "元気あっぷむら",
        "宇都宮12分",
        "御料牧場",
        "グランピング"
      ]
    },
    {
      "id": "ichikai",
      "name": "市貝町",
      "kana": "いちかいまち",
      "area": "県東",
      "group_id": "slow_agriculture",
      "sub_feature": "猛禽類サシバが舞う日本一の里山！オーガニック農業と芝ざくらの絶景なら",
      "catchphrase": "サシバが舞う命あふれる里山。人と自然が優しく共生する循環型タウン",
      "summary": "絶滅危惧種の猛禽類「サシバ」の繁殖密度が日本一の町として知られ、農薬を抑えた環境保全型農業・有機農業が盛ん。春には「市貝町芝ざくら公園」に見事な花の絨毯が広がります。田園回帰や本物のオーガニックライフ、子どもに自然体験を存分にさせたいファミリーに選ばれています。",
      "access": "真岡鐵道（市塙駅）、宇都宮市中心部まで車約35分、北関東道真岡ICより車約25分",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "市貝町定住促進住宅取得奨励金、空き家改修支援補助",
        "child_care": "18歳まで子ども医療費無料、町独自の出産祝金、有機米給食の導入",
        "trial_living": "市貝町移住体験相談窓口、農家体験プログラム",
        "work_support": "有機農業就農支援、サシバの里ブランド商品開発サポート"
      },
      "official_urls": {
        "migration_page": "https://www.town.ichikai.tochigi.jp/forms/menugrouptop/menugrouptop.aspx?menu_group_id=121",
        "city_home": "https://www.town.ichikai.tochigi.jp/"
      },
      "contact": "市貝町 企画財政課 企画調整係（TEL: 0285-68-1112）",
      "tags": [
        "サシバの里",
        "有機農業",
        "芝ざくら",
        "オーガニック",
        "自然共生",
        "有機米給食"
      ]
    },
    {
      "id": "haga",
      "name": "芳賀町",
      "kana": "はがまち",
      "area": "県東",
      "group_id": "slow_agriculture",
      "sub_feature": "LRT延伸で宇都宮駅直結！田園風景と次世代ハイテク交通が融合する未来型田舎なら",
      "catchphrase": "LRTが走る未来の田園都市。次世代スマートモビリティと緑豊かな暮らし",
      "summary": "2023年に開業した次世代型路面電車「芳賀・宇都宮LRT」の東側終着エリア。芳賀工業団地など最先端の製造・研究拠点を抱えながら、のどかな田園と梨畑が広がります。LRTに乗れば渋滞知らずで宇都宮駅へ快適アクセス。田舎のゆとりと最先端の交通インフラが同居する唯一無二の町です。",
      "access": "芳賀・宇都宮LRT各駅（芳賀工業団地管理センター前駅・かしの森公園前駅・芳賀・高根沢工業団地駅）、宇都宮駅直結",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "芳賀町若者・子育て定住応援奨励金（LRT沿線建築等優遇あり）",
        "child_care": "高校生までの医療費完全無料化、芳賀温泉ロマンの湯町民優遇",
        "trial_living": "芳賀町移住相談窓口、LRT沿線まちあるき案内",
        "work_support": "先端企業誘致・就業サポート、梨農家新規就農支援"
      },
      "official_urls": {
        "migration_page": "https://www.town.haga.tochigi.jp/soshiki/kikaku/gyomu/ijuteiju/",
        "city_home": "https://www.town.haga.tochigi.jp/"
      },
      "contact": "芳賀町 企画課 みらい創生係（TEL: 028-677-6011）",
      "tags": [
        "LRT終点駅",
        "次世代モビリティ",
        "梨の産地",
        "最先端工業団地",
        "渋滞なし通勤",
        "田園都市"
      ]
    },
    {
      "id": "nakagawa",
      "name": "那珂川町",
      "kana": "なかがわまち",
      "area": "県北",
      "group_id": "slow_agriculture",
      "sub_feature": "PH9を超える美肌の馬頭温泉郷と広重美術館！アートと温泉湯治のスローライフなら",
      "catchphrase": "名湯・馬頭温泉と清流の恵み。アートと温もりが心を満たす山里",
      "summary": "那珂川の清流と八溝山系の緑に囲まれた癒やしの町。pH9を超えるアルカリ性単純温泉「馬頭温泉郷」は“美肌の湯”として知られ、夕焼けの那珂川を望む絶景露天風呂が魅力。隈研吾氏設計の「那珂川町馬頭広重美術館」などアートの薫りも高く、温泉湯治や創作活動に最適です。",
      "access": "東北新幹線那須塩原駅より車約40分、JR烏山線烏山駅より町営バス、東北道矢板ICより車約40分",
      "support_programs": {
        "relocation_grant": "最大100万円（単身60万円）＋子育て加算最大100万円/人",
        "housing_support": "若者・子育て世代定住奨励金、空き家バンクリフォーム補助金",
        "child_care": "子ども医療費高校生まで無料、町営保育所完全給食",
        "trial_living": "「なかがわぐらし」体験滞在サポート、温泉付き宿泊助成相談",
        "work_support": "温泉観光振興起業支援、特産ホンモロコ・温泉トラフグ養殖連携事業"
      },
      "official_urls": {
        "migration_page": "https://www.town.tochigi-nakagawa.lg.jp/forms/menugrouptop/menugrouptop.aspx?menu_group_id=132",
        "city_home": "https://www.town.tochigi-nakagawa.lg.jp/"
      },
      "contact": "那珂川町 企画財政課 なかがわぐらし推進係（TEL: 0287-92-1114）",
      "tags": [
        "馬頭温泉郷",
        "美肌の湯",
        "広重美術館",
        "隈研吾設計",
        "天然鮎",
        "温泉トラフグ"
      ]
    }
  ],
  "diagnosis_questions": [
    {
      "id": "q1",
      "question": "Q1. 移住後の『お仕事・通勤スタイル』はどのように想定されていますか？",
      "subtext": "日々の働き方や都内への行き来の頻度に近いものを1つお選びください。",
      "options": [
        {
          "label": "東京方面へ新幹線や電車で通勤・定期的に通いたい",
          "value": "commute",
          "target_groups": [
            "urban_commute",
            "family_care"
          ]
        },
        {
          "label": "完全テレワーク、または県内・周辺で就職・転職したい",
          "value": "telework",
          "target_groups": [
            "urban_commute",
            "nature_resort",
            "family_care"
          ]
        },
        {
          "label": "農業・カフェ・陶芸・アートなど、地域で新しい仕事に挑戦したい",
          "value": "creative",
          "target_groups": [
            "history_culture",
            "slow_agriculture"
          ]
        },
        {
          "label": "定年後のセカンドライフ、またはのんびりスローライフを送りたい",
          "value": "slowlife",
          "target_groups": [
            "nature_resort",
            "slow_agriculture",
            "history_culture"
          ]
        }
      ]
    },
    {
      "id": "q2",
      "question": "Q2. 暮らしの環境で『最も重視したいポイント』は何ですか？",
      "subtext": "あなたの理想の生活環境に一番近いものを1つお選びください。",
      "options": [
        {
          "label": "大型商業施設、高度な総合病院、交通インフラなどの「都市の利便性」",
          "value": "urban",
          "target_groups": [
            "urban_commute"
          ]
        },
        {
          "label": "名湯温泉、雄大な山並み、避暑地や別荘地などの「豊かな自然とリゾート感」",
          "value": "nature",
          "target_groups": [
            "nature_resort"
          ]
        },
        {
          "label": "歴史ある街並み、益子焼の陶芸、木工やアートなどの「伝統・文化・創作」",
          "value": "culture",
          "target_groups": [
            "history_culture"
          ]
        },
        {
          "label": "高校生まで医療費無料、給食費無償、大きな公園など「子育て環境の手厚さ」",
          "value": "family",
          "target_groups": [
            "family_care"
          ]
        },
        {
          "label": "静寂に包まれた里山、清流での釣り、家庭菜園など「農ある暮らしと温かな人情」",
          "value": "agri",
          "target_groups": [
            "slow_agriculture"
          ]
        }
      ]
    },
    {
      "id": "q3",
      "question": "Q3. 理想とする『住まい・ロケーションのイメージ』はどれですか？",
      "subtext": "住んでみたいお家や周辺のロケーションを選んでください。",
      "options": [
        {
          "label": "駅や商業施設に近く、車がなくても動きやすい便利な戸建て・分譲地",
          "value": "station_near",
          "target_groups": [
            "urban_commute",
            "family_care"
          ]
        },
        {
          "label": "緑に囲まれた高原の別荘、ログハウス、温泉付き住宅、ドッグラン付きの家",
          "value": "resort_house",
          "target_groups": [
            "nature_resort"
          ]
        },
        {
          "label": "蔵や古民家をDIYリノベーションした趣のある家、陶房・アトリエ付きの住まい",
          "value": "renovate",
          "target_groups": [
            "history_culture"
          ]
        },
        {
          "label": "子育てしやすい落ち着いた住宅街、学校や小児科が近く広い庭がある家",
          "value": "suburb_family",
          "target_groups": [
            "family_care",
            "urban_commute"
          ]
        },
        {
          "label": "広い畑が付いた農家住宅や平屋、山と川に囲まれたポツンとマイペースな住まい",
          "value": "farm_house",
          "target_groups": [
            "slow_agriculture"
          ]
        }
      ]
    },
    {
      "id": "q4",
      "question": "Q4. 今回の移住を計画されている『ご家族構成・年代』はどれですか？",
      "subtext": "支援制度のシミュレーション（子育て加算や単身・世帯向け等）の参考にします。",
      "options": [
        {
          "label": "子育て世帯（未就学児〜小中高生のお子様がいる世帯）",
          "value": "family_kids",
          "target_groups": [
            "family_care",
            "urban_commute"
          ]
        },
        {
          "label": "30代〜40代の単身・独身（ワーケーションや本格移住）",
          "value": "single_3040",
          "target_groups": [
            "urban_commute",
            "nature_resort",
            "history_culture"
          ]
        },
        {
          "label": "夫婦・パートナー（共働きや二人暮らし）",
          "value": "couple",
          "target_groups": [
            "nature_resort",
            "urban_commute",
            "history_culture"
          ]
        },
        {
          "label": "50代〜60代のセカンドライフ・定年後シニア移住",
          "value": "senior_5060",
          "target_groups": [
            "nature_resort",
            "slow_agriculture",
            "history_culture"
          ]
        }
      ]
    }
  ]
};
