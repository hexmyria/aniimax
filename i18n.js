// Display-only localization. English strings and data IDs remain the source of truth used by
// the optimizer; Japanese is applied only to DOM text and accessible labels after rendering.

const LANGUAGE_KEY = 'aniimax-language';
const language = localStorage.getItem(LANGUAGE_KEY) || 'en';

const items = {
  wheat:'小麦',potato:'ジャガイモ',rice:'米',soybean:'大豆',rose:'バラ',cotton:'綿花',strawberry:'イチゴ',lavender:'ラベンダー',sugarcane:'サトウキビ',ginseng:'高麗人参',grape:'ブドウ',cranberry:'クランベリー',agave:'アガベ',willow_wood:'ヤナギ材',bamboo:'竹',lemon:'レモン',cherry_blossom:'桜',apple:'リンゴ',maple_syrup:'メープルシロップ',palm_bark:'ヤシの樹皮',chestnut:'栗',walnut:'クルミ',natural_rubber:'天然ゴム',coconut:'ココナッツ',cocoa:'カカオ',orange_flower:'オレンジの花',rock:'岩',clay:'粘土',shell:'貝殻',copper_ore:'銅鉱石',quartz_ore:'水晶鉱石',gem:'宝石',mineral_sand:'鉱砂',well_water:'井戸水',fresh_water:'真水',deep_rock_spring_water:'深層岩盤湧水',natural_mineral_spring_water:'天然鉱泉水',sea_salt:'海塩',pearl:'真珠',aromathyst:'アロマシスト',wool:'羊毛',petals:'花びら',star:'星',scales:'うろこ',wood_block:'木材ブロック',
  quick_wheat:'高速小麦',quick_potato:'高速ジャガイモ',quick_rice:'高速米',quick_strawberry:'高速イチゴ',quick_bamboo:'高速竹',quick_lemon:'高速レモン',quick_maple_syrup:'高速メープルシロップ',quick_coconut:'高速ココナッツ',quick_well_water:'高速井戸水',quick_fresh_water:'高速真水',quick_deep_rock_spring_water:'高速深層岩盤湧水',quick_natural_mineral_spring_water:'高速天然鉱泉水',quick_sea_salt:'高速海塩',quick_aromathyst:'高速アロマシスト',quick_wool:'高速羊毛',quick_scales:'高速うろこ',premium_wheat:'高級小麦',
  wheatmeal:'小麦粉',tofu:'豆腐',milled_rice:'精米',lavender_powder:'ラベンダーパウダー',rice_drink:'ライスドリンク',ginseng_powder:'高麗人参パウダー',refined_flour:'精製小麦粉',coconut_oil:'ココナッツオイル',cocoa_powder:'カカオパウダー',coconut_milk:'ココナッツミルク',wood_sculpture:'木彫り',bamboo_ware:'竹細工',river_washed_stones:'川磨き石',rose_freshener:'バラの芳香剤',pottery:'陶器',bouquet:'花束',shell_ornament:'貝殻飾り',lavender_sachet:'ラベンダーサシェ',wind_chime:'風鈴',star_wish_lantern:'星願いランタン',dream_catcher:'ドリームキャッチャー',rubber_duck:'アヒルのおもちゃ',pearl_necklace:'真珠のネックレス',woven_toy:'編みぐるみ',porcelain:'磁器',dye:'染料',gemstone_dust:'宝石の粉',flowers_in_a_bottle:'瓶詰めの花',doll:'人形',
  bread:'パン',roasted_soybeans:'煎り大豆',maple_candy_roasted_potatoes:'メープルキャンディ焼き芋',apple_tart:'アップルタルト',rose_shortbread:'ローズショートブレッド',lavender_cookies:'ラベンダークッキー',apple_candy:'リンゴ飴',grape_candy:'ブドウ飴',caramel_nut_chips:'キャラメルナッツチップ',maple_candy_star:'メープルキャンディスター',coconut_cookie:'ココナッツクッキー',flower_bread:'フラワーブレッド',berry_chocolate_coconut_pudding:'ベリーチョコココナッツプリン',potato_chips:'ポテトチップス',dried_lemon_slices:'乾燥レモンスライス',dried_cherry_blossom:'乾燥桜',dried_bean_curd:'干し豆腐',dried_apple_slices:'乾燥リンゴスライス',dried_strawberries:'乾燥イチゴ',nuts:'ナッツ',dried_ginseng:'乾燥高麗人参',dried_grapes:'干しブドウ',shredded_coconut:'ココナッツフレーク',dried_cranberries:'乾燥クランベリー',dried_flowers:'ドライフラワー',
  plain_rice_porridge:'白粥',rose_concentrate:'バラ濃縮液',rock_candy:'氷砂糖',strawberry_jam:'イチゴジャム',maple_candy_apple_jam:'メープルキャンディアップルジャム',chestnut_puree:'栗のピューレ',grape_jam:'ブドウジャム',ginseng_porridge:'高麗人参粥',maple_sugar_chunk:'メープルシュガーの塊',malt_sugar:'麦芽糖',cocoa_spread:'ココアスプレッド',cranberry_jam:'クランベリージャム',agave_syrup:'アガベシロップ',bamboo_joss_stick:'竹のお香',rose_incense:'バラのお香',cherry_incense:'桜のお香',lavender_incense:'ラベンダーのお香',lemon_incense:'レモンのお香',herbal_ginseng_aroma:'薬草高麗人参アロマ',soap:'石けん',orange_flower_incense:'オレンジの花のお香',mixed_perfume:'ブレンド香水',lotion:'ローション',
  wheat_tea:'小麦茶',toasted_rice_green_tea:'玄米茶',potato_kvass:'ジャガイモのクワス',strawberry_juice:'イチゴジュース',apple_juice:'リンゴジュース',sugarcane_juice:'サトウキビジュース',grape_juice:'ブドウジュース',ginseng_water:'高麗人参水',grape_lemon_drink:'ブドウレモンドリンク',walnut_milk:'クルミミルク',cranberry_juice:'クランベリージュース',coconut_cooler:'ココナッツクーラー',agave_drink:'アガベドリンク',hot_cocoa:'ホットココア',coconut_cocoa:'ココナッツココア',orange_flower_dew:'オレンジの花露',
  soy_sauce_fried_rice:'醤油チャーハン',creamy_potato_soup:'クリーミーポテトスープ',cherry_blossom_rice_ball:'桜おにぎり',tanghulu:'タンフル',soy_sauce_tofu:'醤油豆腐',sugar_roasted_chestnuts:'糖炒栗子',steamed_vermicelli_roll:'蒸し春雨巻き',ginseng_chestnut_cake:'高麗人参と栗のケーキ',walnut_cake:'クルミケーキ',jello:'ゼリー',strawberry_candy:'イチゴ飴',rich_grape_compote:'濃厚ブドウコンポート',strawberry_cream_puff:'イチゴシュークリーム',cranberry_chocolate:'クランベリーチョコ',soy_sauce:'醤油',salted_cherry_blossom:'桜の塩漬け',sweet_rice_drink:'甘酒',cider_vinegar:'リンゴ酢',rice_vinegar:'米酢',salted_lemon:'塩レモン',candied_strawberries:'イチゴの砂糖漬け',candied_orange_flower:'オレンジの花の砂糖漬け',
  cotton_thread:'木綿糸',woolen_yarn:'毛糸',cotton_fabric:'綿布',palm_rope:'ヤシ縄',wool_fabric:'毛織物',dyed_cotton_fabric:'染色綿布',growth_bud:'成長の芽',growth_flower:'成長の花',growth_fruit:'成長の実',aniipod:'アニポッド',aniipod_pro:'スーパーポッド',aniipod_mega:'ハイパーポッド',rough_lumber:'粗製材',standard_planks:'標準板材',laminated_beams:'集成梁',densified_timber_component:'高密度木材部品',coarse_sifted_ore:'粗選鉱石',sintered_ore_brick:'焼結鉱石レンガ',refined_ore:'精錬鉱石',microcrystalline_ore_plate:'微結晶鉱石プレート',
  premium_river_washed_stones:'高級川磨き石',premium_rose_freshener:'高級バラの芳香剤',advanced_wind_chime:'上級風鈴',advanced_gemstone_dust:'上級宝石の粉',premium_bread:'高級パン',premium_berry_chocolate_coconut_pudding:'高級ベリーチョコココナッツプリン',advanced_lemon_incense:'上級レモンのお香',premium_soap:'高級石けん',premium_mixed_perfume:'高級ブレンド香水',premium_potato_soup:'高級ポテトスープ',premium_jello:'高級ゼリー',premium_sweet_rice_wine:'高級甘酒',premium_salted_lemon:'高級塩レモン'
};

const names = {
  'Farmland':'畑','Woodland':'林','Mine':'鉱山','Well':'井戸','Tidewhisper Sandcastle':'潮騒の砂城','Sandcastle':'砂城','Dewy House':'露の家','Nimbus Bed':'雲のベッド','Starfall Hammock':'星降るハンモック','Floral Windmill':'花の風車','Heat Furnace':'加熱炉','Cooling Unit':'冷却装置','Sunlamp':'太陽灯','Carousel Mill':'メリーゴーランド式ミル','Crafting Table':'作業台','Claw Game Cooker':'クレーンゲーム式コンロ','Jukebox Dryer':'メロディ乾燥機','Simmering Pot':'煮込み鍋','Phonolfactory Table':'蓄音機ふう調香台','Bouncy Brew Keg':'ポンポン醸造樽','Blazing Stove':'大火力かまど','Pickling Jar':'熟成漬け込み樽','Joy Wheel Loom':'観覧車ふう糸車','Dance Pad Polisher':'ダンスパワーマシン','Aniipod Maker':'アニポッドメーカー','Woodworking Bench':'木工台','Chimney Kiln':'煙突鍛造炉',
  'Earth':'土','Water':'水','Leisure':'遊び','Wind':'風','Artisanship':'クラフト','Fire':'火','Dark':'闇','Perfumery':'調香','Lightning':'雷','Light':'光','Ice':'氷','Grass':'草','Hauling':'運搬','Instinctive':'人見知り','Energetic':'人懐っこい','Nimble':'直感的','Practical':'現実的','Faithful':'心優しい','Tenacious':'冷酷','Playful':'自由気まま','Judicious':'従順','Freeze':'極寒','Cool':'涼しい','Room temp':'常温','Warm':'暖かい','Scorching':'灼熱','Adequate':'適温',
  'Materials Processing':'素材加工','Aniimo Materials':'アニモ素材','Materials':'素材','Environment':'環境設備','Ecological Module':'生態モジュール','Kitchen Module':'キッチンモジュール','Resource Detector':'資源探知機','Crafting Module':'クラフトモジュール'
};

// Runtime result text is assembled from solver data, so these fragments cannot be covered by
// static HTML translation alone. Keep the English values in app.js and translate only the
// rendered display strings here.
const dynamic = {
  'any level':'レベル不問','Coarse-Sifted Ore':'粗選鉱石','River-Washed Stones':'川磨き石','Premium River-Washed Stones':'高級川磨き石','Sugar-Roasted Chestnuts':'糖炒栗子',
  'Sowing crops':'作物の種まき','Reaping crops':'作物の収穫','Reclaiming crops':'作物の開墾','Collecting crops':'作物の採集','Watering crops':'作物への水やり','Logging crops':'作物の伐採',
  'Sowing farmland':'畑の種まき','Reaping farmland':'畑の収穫','Reclaiming farmland':'畑の開墾','Collecting farmland':'畑の採集','Watering farmland':'畑への水やり',
  'Sowing woodland':'林の種まき','Reaping woodland':'林の収穫','Reclaiming woodland':'林の開墾','Collecting woodland':'林の採集','Watering woodland':'林への水やり','Logging woodland':'林の伐採',
  'Sowing':'種まき','Reaping':'収穫','Reclaiming':'開墾','Collecting':'採集','Watering':'水やり','Logging':'伐採','crops':'作物','farmland':'畑','woodland':'林',
  'Carries produce to storage. How much work this is isn\'t known yet; add more if produce piles up.':'生産物を倉庫へ運びます。必要な作業量は未確認です。生産物が滞留する場合は人数を増やしてください。',
  'Hauling, any level · carries produce to storage; add more if produce piles up':'運搬、レベル不問・生産物を倉庫へ運搬。滞留する場合は人数を増やしてください',
  'Cooking, smelting and heat':'調理・精錬・暖房','Planting seeds and gathering':'種まき・採集','Brewing, fetching water and watering':'醸造・水くみ・水やり','Reclaiming land and mining':'開墾・採掘','Electricity':'電力加工','Cooling the homeland':'ホームの冷却','Processing with wind':'風力加工','Harvesting, cutting, pickling and drying':'収穫・伐採・漬け込み・乾燥','Lighting the homeland':'ホームの照明','Carrying produce to storage':'生産物を倉庫へ運搬','Handcrafted goods':'クラフト製品の作成','Making things while playing':'遊びながら生産','Perfumes and incense':'香水・お香',
  'Side by side, touching.':'隙間なく横に並べます。','Not made by this plan':'このプランでは生産されません','An unknown error occurred.':'不明なエラーが発生しました。',
  'On: the plan goes for this':'オン：この項目を生産対象にします','Off: the plan ignores this':'オフ：この項目を生産対象から外します','no Aniipod Maker yet':'アニポッドメーカーがありません',
  'Failed to load the optimizer. Please refresh the page.':'最適化ツールを読み込めませんでした。ページを再読み込みしてください。','Pick a recipe from the list.':'一覧からレシピを選択してください。','Stop skipping':'除外を解除','Plans will go for the most coins.':'コインが最大になる計画を表示します。','never':'達成不可','have it':'所持済み','Profit':'利益',
  'Can\'t make this? Skip it and plan again':'生産できない場合は除外して再計算','Not yet checked in game.':'ゲーム内未確認。',
  'Sells directly':'直接売却','For the level-up':'レベルアップ用','Nothing it can make helps this plan':'この計画に役立つ生産品がありません','No further profitable use found':'これ以上の有益な用途がありません','This goal would take an unreasonably long time to reach.':'この目標の達成には非常に長い時間がかかります。'
};

const ui = {
  'facilities':'設備','math':'計算方法','help':'使い方','light':'ライト','dark':'ダーク','aniimo homeland production optimizer':'アニモ・ホームランド生産最適化ツール',
  'Your Homeland':'あなたのホームランド','Clear saved values':'保存値を消去','Simple':'かんたん','Advanced':'詳細','Input mode':'入力モード','RV level':'RVレベル','Facilities and modules':'設備とモジュール','Facilities':'設備','Item Upgrade Modules':'アイテム強化モジュール','Strategy':'戦略','Level up':'レベルアップ','Priorities':'優先順位','Recipes':'レシピ','Special recipes':'特別レシピ','Recipes to skip':'除外するレシピ','Search recipes':'レシピを検索','Skip':'除外','Find the best plan':'最適プランを検索','Solving...':'計算中…',
  'Count':'数','Level':'レベル','Add level':'レベルを追加','Remove this level':'このレベルを削除','Fill from RV level':'RVレベルから入力','Fill':'入力','Modules':'モジュール','not yet':'未解放','on':'有効','skipped':'除外','On':'オン','Off':'オフ','Coins':'コイン','Aniimo EXP':'アニモEXP','Aniipods':'アニポッド','Wood Blocks':'木材ブロック','Mineral Sand':'鉱砂',
  'Aniimo team':'アニモチーム','Best':'最適','Minimum':'最低限','I have level 4':'レベル4を所持','Your rate':'生産速度','Your rates':'生産速度','Seeds to plant':'植える種','Profit by product':'製品別利益','What each facility should do':'各設備の稼働内容','Set a goal':'目標を設定','Goal':'目標','Target Coins':'目標コイン','Current Coins':'現在のコイン','Total time':'合計時間','Coins Produced':'生産コイン','Product breakdown':'製品内訳','Seeds needed':'必要な種','Item':'アイテム','Facility':'設備','Amount':'数量','Total Worth':'合計価値','Crop':'作物','Plots':'区画','Plantings/Plot':'1区画あたりの作付回数','Total Seeds':'種の合計','Profit/sec':'毎秒利益','Level-up':'レベルアップ','Level up to RV':'目標RVレベル','What you already have':'現在の所持数','Producing':'生産内容','Why':'理由','How many':'必要数','Busy on average':'平均稼働率','Where':'担当','Cost':'費用','Need':'必要','Have':'所持','Ready in':'準備まで','Surplus:':'余剰：','Total':'合計','Product':'生産品','Sold per hour':'1時間あたりの販売数','Profit per hour':'1時間あたりの利益','Share':'割合','not sold':'非売品','RV level-ups':'RVレベルアップ素材','Overlap':'重複範囲','Facility Recipes':'設備別レシピ','Loading recipe data...':'レシピデータを読み込み中…',
  'Facility Recipes':'設備別レシピ','Loading recipe data...':'レシピデータを読み込み中…','How It Works':'仕組み','How to Use':'使い方','The model':'計算モデル','Time per batch':'1バッチの時間','Environment coverage':'環境設備の範囲','Time to reach a goal':'目標到達時間','The backup planner':'予備プランナー','Understanding the results':'結果の見方','How to read this':'表の見方','1. Tell it what you\'ve built':'1. 建設済みの設備を入力','2. Pick a strategy':'2. 方針を選択','3. Find the best plan':'3. 最適な計画を作成','4. Set a goal (optional)':'4. 目標を設定（任意）',
  'per second':'毎秒','per minute':'毎分','per hour':'毎時','per day':'毎日','Rate unit':'速度の単位','Priority':'優先順位','Inputs':'材料','Yield':'生産量','Time':'時間','Sell':'売却','Module':'モジュール','Aniimo':'アニモ','coin':'コイン','coins':'コイン','workload':'作業量','special':'特別','unverified':'未確認','Ready now':'準備完了','Nothing in this plan needs an Aniimo.':'このプランではアニモは不要です。','No Aniimo needed.':'アニモ不要','Nothing profitable to produce with the current facilities.':'現在の設備では利益を生む生産がありません。','Finding the best plan...':'最適プランを検索中…','Not made by this plan':'このプランでは生産されません','You already have everything it costs. This plan is for the most coins.':'必要なものはすべて所持しています。コインを最大化する計画を表示します。','By then you\'ll also have:':'その時点で得られるもの：','Not yet checked in game':'ゲーム内未確認','Takes a rare currency to unlock':'解放には希少通貨が必要です',
  'A few recipes, facility levels and counts haven\'t been confirmed in game yet; they\'re marked where they\'re used.':'一部のレシピ、設備レベル、設置数はゲーム内でまだ確認されていません。該当する箇所には未確認であることを表示しています。','Assumes you\'ve built and upgraded everything your RV level allows.':'選択したRVレベルで建設・強化できるものをすべて揃えているものとして計算します。','Set the count and level for each facility you have.':'所有する各設備の数とレベルを設定します。','Replaces every count and level below with what that RV level allows.':'以下の数とレベルを、そのRVレベルで利用できる内容に置き換えます。','Set the level for each upgrade module you have unlocked (0 = not unlocked).':'解放済みの各強化モジュールのレベルを設定します（0＝未解放）。','Gets everything your next RV level costs as soon as possible, then earns as many coins as that leaves room for.':'次のRVレベルに必要なものを最短で揃え、残った余力でコインを最大限に生産します。','Switch on what you want and drag to rank it. The plan makes as much of the first as it can, then as much of the next as that allows, and so on. Whatever\'s left always goes to coins.':'作りたいものをオンにし、ドラッグして優先順位を決めてください。計画では、まず1番目を可能な限り生産し、その生産量を維持できる範囲で2番目以降も順に最大化します。残った余力は常にコイン生産に使われます。','Counts toward the level-up. Wood Blocks, Mineral Sand and lower tiers get processed up.':'入力した所持数はレベルアップ素材として計算されます。木材ブロック、鉱砂、下位素材は上位素材へ加工されます。','These take a rare currency to unlock. Plans only use the ones you tick.':'解放には希少通貨が必要です。チェックしたレシピだけが計画で使用されます。','Plans won\'t use these, e.g. recipes behind unlocks you don\'t have yet. You can also skip one straight from a plan with its ✕.':'まだ解放していないなど、作れないレシピを計画から除外できます。計画内の✕を押して、そのレシピを直接除外することもできます。','Every recipe in the game data, grouped by facility. This is a reference table, not tied to your owned facility counts or levels.':'ゲームデータ内のすべてのレシピを設備別に表示します。参照用の一覧であり、所有している設備の数やレベルには左右されません。','Still working this setup out...':'この編成を計算中…','How the team is worked out':'チーム編成の算出方法','Net of seed costs.':'種代を差し引いた利益です。','Updates instantly from the plan above.':'上の計画をもとに即時更新されます。','One seed per planting, for every Farmland and Woodland crop in the plan.':'計画に含まれる畑と林の作物は、作付け1回につき種を1個使用します。','Optimizer not ready. Please wait...':'最適化ツールを準備中です。しばらくお待ちください…','Failed to load recipe data. Please refresh the page.':'レシピデータを読み込めませんでした。ページを再読み込みしてください。','Coins, from what\'s left':'余力で得るコイン','No Dance Pad Polisher yet':'ダンスパワーマシンがありません','No Aniipod Maker yet':'Aniipod Makerがありません'
};

// Long explanatory copy is translated separately from game terminology. These translations are
// written by agy; verified Japanese game names from `names` are used where they are available.
const longForm = {
  'Best puts the best Aniimo you said you have, level 4 or level 3, with the facility\'s personality on every job. Minimum uses the lowest ability level each recipe accepts, with no personality bonus: slower, but it\'s what you need at the very least. An Aniimo is fastest on recipes below its level: a level-4 one works a processor\'s level-1 recipe at 500% and a level-2 one at 400%, but a Well\'s level-1 recipe at 250%. The plan below follows whichever is picked.':'「最適」では、所持していると設定した中で最も優れたAniimo（レベル4またはレベル3）を、各設備と相性のよい性格で配置します。「最低限」では、性格ボーナスを使わず、各レシピを実行できる最低限の能力レベルを採用します。速度は落ちますが、少なくとも必要となる編成です。Aniimoは、自身のレベルを下回るレシピほど素早く処理できます。たとえばレベル4のAniimoは、加工設備のレベル1レシピを500%、レベル2レシピを400%の効率で処理します。一方、井戸のレベル1レシピでは250%です。下の計画には、ここで選択した設定が反映されます。',
  'Each Aniimo takes on as much as it can: any job needing its ability at or below its level, for as many hours as it has, so long as no two of those facilities want opposite personalities. Work that takes any level, like the Farmland and Woodland jobs, fills whatever time is left over. Facilities with a resident Aniimo (Sandcastle, Dewy House and the like) need one each, and so does each Heat Furnace (Fire), Cooling Unit (Ice) and Sunlamp (Light) in use. An Aniimo carries four personalities at once, one from each opposed pair, shown as letters over its portrait: Instinctive or Energetic (I/E), Nimble or Practical (N/S), Faithful or Tenacious (F/T), Playful or Judicious (P/J). So one can hold the bonus at up to four facilities, never at two wanting opposites, and only while it has hours to spare. The team below is the best combination that allows, and each Aniimo lists every personality it has to have. Whether an environment building\'s Aniimo level or personality matters isn\'t known yet. Each recipe\'s minimum ability level and the Farmland/Woodland jobs haven\'t been checked in game yet.':'各Aniimoには、その能力とレベルで担当できる仕事を、稼働可能な時間の範囲でできるだけ多く割り当てます。ただし、担当する設備同士で必要な性格が正反対になる組み合わせは避けます。畑や林のように任意レベルで担当できる仕事は、残った時間に割り当てられます。常駐Aniimoが必要な設備（Sandcastle、Dewy Houseなど）には1体ずつ必要です。また、使用中のHeat Furnace（火）、Cooling Unit（氷）、Sunlamp（光）にも、それぞれ1体が必要です。1体のAniimoは、対になった4組から1つずつ、合計4つの性格を持ちます。組み合わせは人見知りまたは人懐っこい（I/E）、直感的または現実的（N/S）、心優しいまたは冷酷（F/T）、自由気まままたは従順（P/J）です。そのため、稼働時間に余裕があり、正反対の性格を同時に求められない限り、1体で最大4つの設備のボーナスを維持できます。下のチームは、この条件で可能な最適な組み合わせです。各Aniimoには必要な性格をすべて表示します。環境設備でAniimoのレベルや性格が影響するかどうかは、まだ確認できていません。また、各レシピの最低能力レベルと、畑・林の仕事もゲーム内で未確認です。',
  'Each row is one product; a facility split between several products gets a row for each. Crops that need a growing environment are grouped by the Heat Furnace, Cooling Unit or Sunlamp setting that covers them, with its layout. Everything else is grouped like the facility list.':'各行は1種類の生産品を表します。1つの設備を複数の生産品に振り分ける場合は、生産品ごとに行を分けて表示します。栽培環境が必要な作物は、その環境を提供するHeat Furnace、Cooling Unit、Sunlampの設定と配置ごとにまとめます。それ以外は設備一覧と同じ区分でまとめます。',
  'In the Aniimo column, each circle is an ability in its game color with the Aniimo level inside; a ring means the plan counts on the facility\'s personality bonus. Hover a circle for details.':'Aniimo列の各円は能力を表し、ゲーム内と同じ色で、円内にAniimoのレベルを表示します。縁取りのある円は、その設備に対応する性格ボーナスを計画に含めていることを示します。円にカーソルを合わせると詳細を確認できます。',
  'Simple: pick your RV level, and the calculator assumes you\'ve built and upgraded everything that level allows. Advanced: set the count and level of every facility and upgrade module yourself. In Advanced, "Fill from RV level" sets everything to what an RV level allows, as a starting point.':'「かんたん」ではRVレベルを選ぶだけで、そのレベルで建設・強化できるものをすべて揃えているものとして計算します。「詳細」では、各設備と強化モジュールの数やレベルを個別に設定します。「詳細」の「RVレベルから入力」を使うと、指定したRVレベルで利用できる内容を初期値として一括入力できます。',
  'Under Recipes, special recipes (Rose Shortbread, Potato Kvass and a few others) take a rare currency to unlock, so plans leave them out until you tick the ones you have.':'「レシピ」にある特別レシピ（ローズショートブレッド、ジャガイモのクワスなど）は、解放に希少通貨が必要です。そのため、所持しているものにチェックを入れるまで、計画では使用されません。',
  'Also under Recipes, add anything you can\'t make yet, such as recipes behind unlocks you don\'t have. Plans won\'t use them. The ✕ next to a product in a plan skips it and plans again.':'同じく「レシピ」では、まだ解放していないなどの理由で作れないレシピを追加できます。追加したレシピは計画で使用されません。計画内の生産品の横にある✕を押して除外し、再計算することもできます。',
  'Click "Find the best plan" to see how long the level-up takes (or your best rate) and what each facility should make. Set it up once and leave it running. Everything you enter is saved in your browser; "Clear saved values" resets it.':'「最適プランを検索」を押すと、レベルアップまでの時間（または最大の生産速度）と、各設備で作るものが表示されます。一度設定したら、そのまま稼働させてください。入力内容はすべてブラウザに保存されます。「保存値を消去」を押すと初期状態に戻せます。',
  'Pick what you\'re aiming for, enter the target amount and what you have now, and the card says how long it takes and what else you\'ll have by then. It updates instantly as you type.':'目標とするものを選び、目標数と現在の所持数を入力すると、達成までの時間と、その時点で得られるほかの生産物が表示されます。入力中も結果は即座に更新されます。',
  'Every plan is one mixed-integer program covering every recipe and facility at once, solved with HiGHS. Each recipe your facility levels and modules unlock, \\(r\\), gets a rate \\(b_r\\) (batches per second) and a whole number of units \\(u_r\\) set to it: plots for a crop, machines for a processed item.':'各計画は、すべてのレシピと設備を一度に扱う1つの混合整数計画問題として構成され、HiGHSで求解されます。設備レベルとモジュールによって解放されている各レシピ \\(r\\) には、処理速度 \\(b_r\\)（1秒あたりのバッチ数）と、そのレシピに割り当てる整数の設備数 \\(u_r\\) が設定されます。作物の場合は区画数、加工品の場合は機械数を表します。',
  'where \\(s_i\\) is how much of item \\(i\\) is sold per second at price \\(p_i\\), and \\(c_r\\) is a crop\'s seed cost. Subject to:':'ここで、\\(s_i\\) はアイテム \\(i\\) の1秒あたりの販売数、\\(p_i\\) はその販売価格、\\(c_r\\) は作物レシピ \\(r\\) の種代です。以下の制約を満たす範囲で最大化します。',
  'HiGHS proves the plan is the best possible. On the rare setup where that takes longer than 30 seconds, it stops with the best plan so far and the results say how far from the best it could be. Every plan is then re-checked on its own before it\'s shown.':'HiGHSは、得られた計画が最適であることも証明します。まれに証明に30秒以上かかる設定では、その時点で得られている最良の計画を採用し、理論上の最適値との差が最大でどの程度あり得るかを結果に表示します。また、表示前に各計画を個別に再検証します。',
  'Crops and trees take their grow time, less the Aniimo\'s watering: a plot asks for water twice as it grows, at two thirds and at one third of its time left, and each watering takes an eighth of the crop\'s own time off. A 40-minute crop comes in at 30 and a 4-minute one at 3. A crop short of its environment grows slower but still loses the same minutes, so a Warm crop with no building takes 50 minutes and is watered down to 40; that part isn\'t checked in game yet.':'作物と木の所要時間は、基本の生育時間からAniimoの水やりによる短縮分を差し引いて計算します。区画には、生育時間が3分の2と3分の1残った時点で計2回の水やりが必要で、1回につきその作物本来の生育時間の8分の1が短縮されます。40分の作物は30分、4分の作物は3分で育ちます。必要な環境が不足している作物は生育が遅くなりますが、水やりで短縮される分数は変わりません。そのため、暖かい環境が必要な作物を環境設備なしで育てる場合、基本時間は50分に延び、水やり後は40分になります。この挙動はゲーム内でまだ確認されていません。',
  'Everything else has a workload, and how long it takes depends on the Aniimo\'s Efficiency \\(e\\), which the facility screen shows, and a base rate \\(r\\):':'それ以外の生産には作業量が設定されており、所要時間は設備画面に表示されるAniimoの効率 \\(e\\) と基本速度 \\(r\\) によって決まります。',
  'At a processor, \\(r\\) is one workload a second. At a gathering facility (Well, Mine, Sandcastle, Dewy House and the like) and at the Dance Pad Polisher and Aniipod Maker, it\'s higher on recipes needing a higher ability level: 1 a second at level 1, 1.25 at level 2 and 1.5 at level 3. A Growth Fruit, 5,400 workload, takes an hour at 100%.':'加工設備では、\\(r\\) は1秒あたり作業量1です。採集設備（井戸、鉱山、Sandcastle、Dewy Houseなど）、ダンスパワーマシン、Aniipod Makerでは、必要能力レベルが高いレシピほど基本速度が上がり、レベル1は毎秒1、レベル2は毎秒1.25、レベル3は毎秒1.5です。作業量5,400の成長の実は、効率100%なら1時間かかります。',
  'Efficiency \\(e\\) depends on the Aniimo\'s ability level compared with the level the recipe needs. At exactly the needed level it\'s 100%. At a processor, one level above the recipe\'s need is 300%, and each level after that adds 100% (400%, 500%). At a gathering facility, each level above adds half a workload a second, whatever the recipe needs, so against the recipe\'s own base rate that reads as +50% a level on a level-1 recipe, +40% on a level-2 one and +33% on a level-3 one. The Dance Pad Polisher and Aniipod Maker add 40% a level. The personality term counts only when the Aniimo has the facility\'s personality (+20%); the Polisher and Aniipod Maker have none. Ability levels stop at 4.':'効率 \\(e\\) は、Aniimoの能力レベルとレシピの必要レベルの差で決まります。必要レベルと同じ場合は100%です。加工設備では、必要レベルより1高いと300%になり、それ以降は1レベルごとに100%ずつ増えます（400%、500%）。採集設備では、レシピの必要レベルにかかわらず、1レベル上がるごとに1秒あたりの作業量が0.5増えます。レシピ本来の基本速度に対する増加率では、レベル1レシピが1レベルにつき+50%、レベル2が+40%、レベル3が+33%です。ダンスパワーマシンとAniipod Makerは1レベルにつき40%増えます。性格による項は、Aniimoが設備に対応する性格を持つ場合だけ適用され、速度が20%上がります。両設備には対応する性格がありません。能力レベルの上限は4です。',
  'Environments are steps of temperature: Freeze -2, Cool -1, no building 0, Warm +1, Scorching +2. A crop grows at 100% at its own, 80% one step away, 50% two steps and 20% beyond that. An uncovered plot is neutral, so a Cool or Warm crop still manages 80% and a Freeze or Scorching one 50%, which is why plans sometimes grow them with no building at all. Adequate is separate: those crops need a Sunlamp. Efficiency stretches the grow time, so a Rose at 80% takes 50m instead of 40m for the same 8 roses, before watering.':'栽培環境は温度の段階として扱います。極寒は-2、涼しいは-1、環境設備なしは0、暖かいは+1、灼熱は+2です。作物は適した温度では100%の速度で育ち、1段階ずれると80%、2段階ずれると50%、それ以上ずれると20%になります。設備のない区画は中立温度なので、涼しいまたは暖かい環境の作物は80%、極寒または灼熱の作物は50%で育ちます。そのため、計画によっては環境設備を使わずに栽培する場合があります。適温は別枠で、この環境を必要とする作物にはSunlampが必須です。効率低下は生育時間を引き延ばします。たとえばバラは、効率80%では同じ8個を収穫するのに40分ではなく50分かかります（水やりによる短縮前）。',
  'Each Heat Furnace, Cooling Unit and Sunlamp is 2×2 tiles and covers a 9×9 area centered on it. A plot counts as covered if any part of it is inside, and everything snaps to quarter tiles. Every useful way one building can cover a mix of Farmland, Woodland and the rest is worked out once by exact packing; the plan then picks a mode and one of those mixes for each building.':'Heat Furnace、Cooling Unit、Sunlampはいずれも2×2タイルで、中心から9×9の範囲を覆います。区画の一部でも範囲内に入っていれば、その区画は覆われていると見なされます。配置は4分の1タイル単位で揃います。1つの環境設備の範囲に畑、林、そのほかの設備を組み合わせて配置する有効な方法は、厳密なパッキング計算によって事前にすべて求められます。計画では、各環境設備についてモードと配置の組み合わせを選択します。',
  'Whole units. \\(b_r \\, t_r \\le u_r\\), with \\(u_r\\) a whole number and \\(t_r\\) the time per batch. A unit runs one recipe and is left running.':'設備数は整数です。\\(b_r \\, t_r \\le u_r\\) を満たし、\\(u_r\\) は整数、\\(t_r\\) は1バッチの所要時間です。1つの設備では1種類のレシピを継続して実行します。',
  'Item balance. Everything made covers what other recipes use plus what\'s sold. A quick variant makes the same item as the regular one.':'アイテムの収支を一致させます。生産量は、ほかのレシピで消費する量と販売する量の合計を満たす必要があります。高速版は通常版と同じアイテムを生産するものとして扱います。',
  'What you own. For every facility and level \\(L\\), the units on recipes needing level \\(L\\) or higher add up to at most what you own at that level. A higher-level plot can run a lower-level recipe.':'所有設備の範囲内で計算します。各設備のレベル \\(L\\) について、レベル \\(L\\) 以上を必要とするレシピに割り当てる設備数の合計は、そのレベルで所有している設備数を超えません。高レベルの区画では、低レベルのレシピも実行できます。',
  'Growing environments. A crop wanting Cool, Warm, Freeze or Scorching grows at full speed on a plot covered by a Heat Furnace or Cooling Unit set to that mode, and more slowly on an uncovered one (see below). An Adequate crop needs a Sunlamp and grows nowhere else.':'栽培環境を考慮します。涼しい、暖かい、極寒、灼熱を必要とする作物は、そのモードに設定したHeat FurnaceまたはCooling Unitの範囲内では通常速度で育ち、範囲外では速度が低下します。適温を必要とする作物はSunlampがなければ育ちません。',
  'Level up gets everything your next RV level costs as soon as possible: its coins plus Wood Blocks and Mineral Sand, or from RV 7 a Woodworking Bench item and a Chimney Kiln item. Under "What you already have", enter what you\'ve got; Wood Blocks, Mineral Sand and lower tiers count too, since the Bench and Kiln process them up. The plan still earns as many coins as it can on the way. In Advanced you can pick which RV level to plan for.':'「レベルアップ」では、次のRVレベルに必要なものを最短で揃えます。必要なコインに加え、RV 6までは木材ブロックと鉱砂、RV 7以降は木工台と煙突鍛造炉で作るアイテムが対象です。「現在の所持数」に現在の数を入力してください。下位素材も上位素材へ加工できるため所持分として計算されます。必要素材を揃えるまでの間も、可能な限り多くのコインを獲得します。「詳細」では目標RVレベルを選択できます。',
  'Priorities ranks what you want: coins, Aniimo EXP (Growth items from the Dance Pad Polisher), Aniipods (the best tier your Aniipod Maker can reach, since a better one catches better), Wood Blocks and Mineral Sand. Switch on the ones you want and drag them into order; the plan makes as much of the first as it can, then as much of the next as that allows, and whatever\'s left goes to coins. The rate card shows each one.':'「優先順位」では、コイン、アニモEXP（ダンスパワーマシンで作る成長アイテム）、アニポッド（Aniipod Makerで作れる最高ランク）、木材ブロック、鉱砂に優先順位を付けます。作りたいものをオンにし、ドラッグして順番を並べ替えてください。計画は1番目を可能な限り多く生産し、その条件を保ったまま2番目以降も順に最大化します。残った余力はコイン生産に使われます。各項目の生産速度は速度カードに表示されます。',
  'A level-up costs coins \\(C_0\\) plus the materials it asks for, \\(C_1\\) and \\(C_2\\) (raw Wood Blocks and Mineral Sand up to RV 6, a Woodworking Bench item and a Chimney Kiln item from RV 7), and you may already have some of each, \\(S_j\\). The plan finds the most level-ups per day, \\(\\lambda\\), it could keep up, where for coins and each item:':'レベルアップにはコイン \\(C_0\\) と、指定された2種類の素材 \\(C_1\\)、\\(C_2\\) が必要です。RV 6までは木材ブロックと鉱砂、RV 7以降は木工台と煙突鍛造炉で作るアイテムが対象です。それぞれをすでに \\(S_j\\) 個所持している場合もあります。計画では、コインと各素材について条件を満たしながら、1日あたりに継続して達成できるレベルアップ回数 \\(\\lambda\\) を最大化します。',
  'Each tier takes 8 of the tier below (4 for the last), so the Bench and Kiln switch between tiers rather than running one recipe like other processors.':'各段階への加工には1つ下の素材が8個必要です（最終段階のみ4個）。そのため木工台と煙突鍛造炉は、ほかの加工設備のように1種類のレシピだけを続けるのではなく、複数の加工段階を切り替えながら稼働します。',
  'The plan solves once per ticked priority, in your order. Each solve makes as much of its priority as it can while keeping at least what the earlier ones reached; a last solve then earns as many coins as all of those leave room for. Aniimo EXP and Aniipods count as their own currencies, so the same model handles them like coins.':'計画は、チェックされた優先項目を上から順に1回ずつ求解します。各回では、それより前の項目で達成した生産量を維持しながら、現在の優先項目の生産量を最大化します。最後に、それらすべてを維持したままコインを最大限生産する求解を行います。Aniimo EXPとAniipodは独立した通貨として数えるため、コインと同じモデルで扱えます。',
  'Each product starts adding up once its first batch clears its ingredient chain (its lead time), then keeps its steady rate:':'各生産品は、原料の加工経路をたどって最初のバッチが完成するまでの時間（リードタイム）が過ぎてから増え始め、その後は一定の速度で蓄積します。',
  'This only ever grows with \\(t\\), so the time to reach a target is found by binary search.':'この値は時間とともに減ることがないため、目標数に達する時刻は二分探索で求められます。',
  'If the exact planner can\'t run (rare; reloading the page usually fixes it), an older planner steps in. It solves the same problem as a continuous linear program, rounds to whole plots and one recipe per machine, then re-solves. Its plans are usually close to the best but not guaranteed, and the results say when it was used.':'厳密なプランナーを実行できない場合（まれに発生しますが、通常はページを再読み込みすると解消します）は、旧式の代替プランナーが使用されます。代替プランナーは同じ問題を連続線形計画問題として解き、区画数を整数に丸め、各機械に1種類のレシピを割り当てたうえで再求解します。多くの場合、最適解に近い計画が得られますが、最適である保証はありません。代替プランナーが使用された場合は結果に表示されます。'
};

const pretty = id => id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
const replacements = new Map([...Object.entries(longForm), ...Object.entries(ui), ...Object.entries(dynamic), ...Object.entries(names), ...Object.entries(items).map(([id, ja]) => [pretty(id), ja])]);
const ordered = [...replacements.entries()].sort((a, b) => b[0].length - a[0].length);
const localizeKnownNames = value => {
  let result = value;
  [...Object.entries(names), ['Aniimo', 'アニモ'], ['Aniipods', 'アニポッド'], ['Aniipod', 'アニポッド']]
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([en, ja]) => { result = result.replaceAll(en, ja); });
  return result;
};

function translateText(value) {
  if (!value || !/[A-Za-z]/.test(value)) return value;
  const leading = value.match(/^\s*/)[0];
  const trailing = value.match(/\s*$/)[0];
  let text = value.trim();
  const exact = replacements.get(text);
  if (exact) return leading + localizeKnownNames(exact) + trailing;
  for (const [en, ja] of ordered) {
    if (en.length < 4) continue;
    const escaped = en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    text = text.replace(new RegExp(`(?<![A-Za-z])${escaped}(?![A-Za-z])`, 'g'), ja);
  }
  text = text
    .replace(/^(\d+) facilities and 4 modules at RV (\d+)$/, 'RV $2：設備$1種・モジュール4種')
    .replace(/^(\d+) facilities$/, '設備$1種')
    .replace(/^(\d+) on$/, '$1件有効')
    .replace(/^(\d+) skipped$/, '$1件除外')
    .replace(/^Target (.+)$/, '$1の目標')
    .replace(/^Current (.+)$/, '現在の$1')
    .replace(/^(.+) produced$/, '$1の生産量')
    .replace(/^in (.+)$/, '$1後')
    .replace(/^Backup planner, trial (\d+)…?$/, '予備プランナー：試行$1…')
    .replace(/^In a row, (\d+) tiles? between them\.$/, '横一列に、間を$1タイル空けます。')
    .replace(/^Corner to corner, the second sits (\d+) tiles? along and (\d+) tiles? up from the first\.$/, '角を基準に、2つ目を1つ目から横$1タイル・上$2タイルに配置します。')
    .replace(/^That\'s (\d+) Aniimo\.$/, '合計$1体のアニモが必要です。')
    .replace(/^That\'s (\d+) Aniimo; an RV level (\d+) homeland holds (\d+)\.$/, '合計$1体です。RVレベル$2のホームには$3体まで配置できます。')
    .replace(/^That\'s (\d+) Aniimo, more than the (\d+) an RV level (\d+) homeland holds\.$/, '合計$1体で、RVレベル$3の配置上限$2体を超えています。')
    .replace(/^(\d+) Aniimo · your homeland holds (\d+)( \(too many; see the list\))?$/, (_, need, cap, over) => `${need}体のアニモ・配置上限${cap}体${over ? '（上限超過・一覧を確認）' : ''}`)
    .replace(/^(\d+) Aniimo$/, '$1体のアニモ')
    .replace(/^(.+) \(\+20% speed\)$/, '$1（速度+20%）')
    .replace(/^Move (.+) up$/, '$1を上へ移動')
    .replace(/^Move (.+) down$/, '$1を下へ移動')
    .replace(/^Stop skipping (.+)$/, '$1の除外を解除')
    .replace(/^Skip (.+) and plan again$/, '$1を除外して再計算')
    .replace(/^RV (\d+) level-up$/, 'RV $1レベルアップ')
    .replace(/^RV (\d+) costs$/, 'RV $1の必要素材')
    .replace(/^Best plan found in the time allowed; the best possible is at most ([\d.]+)% higher\.$/, '制限時間内で見つかった最良の計画です。理論上の最良値は最大$1%高い可能性があります。')
    .replace(/^(\d+) recipes? in this plan (?:hasn\'t|haven\'t) been checked in game yet \(tagged below\)\. If any of those numbers are off, so is this plan\.$/, 'この計画にはゲーム内未確認のレシピが$1件あります（下に表示）。数値が異なる場合、計画結果も変わります。')
    .replace(/^Skipping (.+)\.$/, '除外中：$1。')
    .replace(/^Plan calculation failed: (.+)$/, '計画の計算に失敗しました：$1')
    .replace(/^The exact planner couldn\'t run(?: \((.+)\))?, so this plan comes from the backup planner and may not be the very best\. Reloading the page usually fixes this\.$/, (_, reason) => `厳密プランナーを実行できなかったため${reason ? `（${reason}）` : ''}、予備プランナーの計画を表示しています。最適解とは限りません。通常はページを再読み込みすると解消します。`)
    .replace(/^Used for ([^;]+); the rest sells directly$/, '$1に使用し、残りは直接売却')
    .replace(/^Used for ([^;]+); the rest goes to the level-up$/, '$1に使用し、残りはレベルアップ用')
    .replace(/^Used for ([^;]+)/, '$1に使用')
    .replace(/; takes turns with ([^;]+)/, '（$1と交互に生産）')
    .replace(/; grown without ([^;]+) at ([\d.]+)% speed$/, '（$1なし・速度$2%で栽培）')
    .replace(/畑 and 林/g, '畑と林')
    .replace(/Aniimo/g, 'アニモ')
    .replace(/Aniipods?/g, 'アニポッド');
  return leading + text + trailing;
}

function translateElement(root) {
  if (root.nodeType === Node.TEXT_NODE) {
    if (!root.parentElement?.closest('script, style, .math-block')) root.nodeValue = translateText(root.nodeValue);
    return;
  }
  if (!(root instanceof Element) && root !== document) return;
  // Paragraphs and list items can be split into several text nodes by emphasis and links.
  // Match their complete visible text before walking individual nodes so long-form translations
  // are not skipped merely because the English contains inline markup.
  root.querySelectorAll?.('p, li').forEach(el => {
    const complete = el.textContent.trim();
    const translated = replacements.get(complete);
    if (translated) el.textContent = localizeKnownNames(translated);
  });
  if (root instanceof Element) {
    for (const attr of ['title', 'placeholder', 'aria-label', 'data-tooltip', 'data-label']) {
      if (root.hasAttribute(attr)) root.setAttribute(attr, translateText(root.getAttribute(attr)));
    }
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) translateElement(walker.currentNode);
  root.querySelectorAll?.('[title],[placeholder],[aria-label],[data-tooltip],[data-label]').forEach(el => {
    for (const attr of ['title', 'placeholder', 'aria-label', 'data-tooltip', 'data-label']) {
      if (el.hasAttribute(attr)) el.setAttribute(attr, translateText(el.getAttribute(attr)));
    }
  });
}

function configureToggle() {
  const button = document.getElementById('languageToggle');
  if (!button) return;
  button.textContent = language === 'ja' ? 'English' : '日本語';
  button.setAttribute('aria-label', language === 'ja' ? 'Switch to English' : '日本語に切り替え');
  button.addEventListener('click', () => {
    localStorage.setItem(LANGUAGE_KEY, language === 'ja' ? 'en' : 'ja');
    window.location.reload();
  });
}

configureToggle();
if (language === 'ja') {
  document.documentElement.lang = 'ja';
  document.title = 'Aniimax - アニモ生産最適化ツール';
  translateElement(document.body);
  new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(translateElement)))
    .observe(document.body, { childList: true, subtree: true });
}
