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
  cotton_thread:'木綿糸',woolen_yarn:'毛糸',cotton_fabric:'綿布',palm_rope:'ヤシ縄',wool_fabric:'毛織物',dyed_cotton_fabric:'染色綿布',growth_bud:'成長の芽',growth_flower:'成長の花',growth_fruit:'成長の実',aniipod:'アニポッド',aniipod_pro:'アニポッド・プロ',aniipod_mega:'アニポッド・メガ',rough_lumber:'粗製材',standard_planks:'標準板材',laminated_beams:'集成梁',densified_timber_component:'高密度木材部品',coarse_sifted_ore:'粗選鉱石',sintered_ore_brick:'焼結鉱石レンガ',refined_ore:'精錬鉱石',microcrystalline_ore_plate:'微結晶鉱石プレート',
  premium_river_washed_stones:'高級川磨き石',premium_rose_freshener:'高級バラの芳香剤',advanced_wind_chime:'上級風鈴',advanced_gemstone_dust:'上級宝石の粉',premium_bread:'高級パン',premium_berry_chocolate_coconut_pudding:'高級ベリーチョコココナッツプリン',advanced_lemon_incense:'上級レモンのお香',premium_soap:'高級石けん',premium_mixed_perfume:'高級ブレンド香水',premium_potato_soup:'高級ポテトスープ',premium_jello:'高級ゼリー',premium_sweet_rice_wine:'高級甘酒',premium_salted_lemon:'高級塩レモン'
};

const names = {
  'Farmland':'農地','Woodland':'森林','Mine':'鉱山','Well':'井戸','Tidewhisper Sandcastle':'潮騒の砂城','Dewy House':'しずくの家','Nimbus Bed':'雲のベッド','Starfall Hammock':'星降るハンモック','Floral Windmill':'花の風車','Heat Furnace':'加熱炉','Cooling Unit':'冷却装置','Sunlamp':'太陽灯','Carousel Mill':'メリーゴーランド製粉機','Crafting Table':'作業台','Claw Game Cooker':'クレーンゲーム調理器','Jukebox Dryer':'ジュークボックス乾燥機','Simmering Pot':'煮込み鍋','Phonolfactory Table':'香律調合台','Bouncy Brew Keg':'弾む醸造樽','Blazing Stove':'灼熱コンロ','Pickling Jar':'漬物瓶','Joy Wheel Loom':'観覧車織機','Dance Pad Polisher':'ダンスパッド研磨機','Aniipod Maker':'アニポッド製造機','Woodworking Bench':'木工作業台','Chimney Kiln':'煙突窯',
  'Earth':'大地','Water':'水','Leisure':'くつろぎ','Wind':'風','Artisanship':'工芸','Fire':'炎','Dark':'闇','Perfumery':'調香','Lightning':'雷','Light':'光','Ice':'氷','Grass':'草木','Hauling':'運搬','Instinctive':'直感的','Energetic':'活動的','Nimble':'機敏','Practical':'堅実','Faithful':'誠実','Tenacious':'粘り強い','Playful':'遊び好き','Judicious':'思慮深い','Freeze':'極寒','Cool':'涼しい','Room temp':'常温','Warm':'暖かい','Scorching':'灼熱','Adequate':'適温',
  'Materials Processing':'素材加工','Aniimo Materials':'アニーモ素材','Materials':'素材','Environment':'環境設備','Ecological Module':'生態モジュール','Kitchen Module':'キッチンモジュール','Resource Detector':'資源探知機','Crafting Module':'クラフトモジュール'
};

const ui = {
  'facilities':'設備','math':'計算方法','help':'使い方','light':'ライト','dark':'ダーク','aniimo homeland production optimizer':'アニーモ・ホームランド生産最適化ツール',
  'Your Homeland':'あなたのホームランド','Clear saved values':'保存値を消去','Simple':'かんたん','Advanced':'詳細','Input mode':'入力モード','RV level':'RVレベル','Facilities and modules':'設備とモジュール','Facilities':'設備','Item Upgrade Modules':'アイテム強化モジュール','Strategy':'戦略','Level up':'レベルアップ','Priorities':'優先順位','Recipes':'レシピ','Special recipes':'特別レシピ','Recipes to skip':'除外するレシピ','Search recipes':'レシピを検索','Skip':'除外','Find the best plan':'最適プランを検索','Solving...':'計算中…',
  'Count':'数','Level':'レベル','Add level':'レベルを追加','Remove this level':'このレベルを削除','Fill from RV level':'RVレベルから入力','Fill':'入力','Modules':'モジュール','not yet':'未解放','on':'有効','skipped':'除外','On':'オン','Off':'オフ','Coins':'コイン','Aniimo EXP':'アニーモEXP','Aniipods':'アニポッド','Wood Blocks':'木材ブロック','Mineral Sand':'鉱砂',
  'Aniimo team':'アニーモチーム','Best':'最適','Minimum':'最低限','I have level 4':'レベル4を所持','Your rate':'生産速度','Your rates':'生産速度','Seeds to plant':'植える種','Profit by product':'製品別利益','What each facility should do':'各設備の稼働内容','Set a goal':'目標を設定','Goal':'目標','Target Coins':'目標コイン','Current Coins':'現在のコイン','Total time':'合計時間','Coins Produced':'生産コイン','Product breakdown':'製品内訳','Seeds needed':'必要な種','Item':'アイテム','Facility':'設備','Amount':'数量','Total Worth':'合計価値','Crop':'作物','Plots':'区画','Total Seeds':'種の合計',
  'Facility Recipes':'設備別レシピ','Loading recipe data...':'レシピデータを読み込み中…','How It Works':'仕組み','How to Use':'使い方','The model':'計算モデル','Time per batch':'1バッチの時間','Environment coverage':'環境設備の範囲','Time to reach a goal':'目標到達時間','The backup planner':'予備プランナー','Understanding the results':'結果の見方','How to read this':'表の見方','1. Tell it what you\'ve built':'1. 建設済みの設備を入力','2. Pick a strategy':'2. 方針を選択','3. Find the best plan':'3. 最適な計画を作成','4. Set a goal (optional)':'4. 目標を設定（任意）',
  'per second':'毎秒','per minute':'毎分','per hour':'毎時','per day':'毎日','Rate unit':'速度の単位','Priority':'優先順位','Inputs':'材料','Yield':'生産量','Time':'時間','Sell':'売却','Module':'モジュール','Aniimo':'アニーモ','coin':'コイン','coins':'コイン','workload':'作業量','special':'特別','unverified':'未確認','Ready now':'準備完了','Nothing in this plan needs an Aniimo.':'このプランではアニーモは不要です。','No Aniimo needed.':'アニーモ不要','Nothing profitable to produce with the current facilities.':'現在の設備では利益を生む生産がありません。','Finding the best plan...':'最適プランを検索中…','Not made by this plan':'このプランでは生産されません',
  'A few recipes, facility levels and counts haven\'t been confirmed in game yet; they\'re marked where they\'re used.':'一部のレシピ、設備レベル、設置数はゲーム内で未確認です。該当箇所にはその旨を表示しています。','Assumes you\'ve built and upgraded everything your RV level allows.':'選択したRVレベルで建設・強化できるものをすべて揃えているものとして計算します。','Set the count and level for each facility you have.':'所有する各設備の数とレベルを設定します。','Replaces every count and level below with what that RV level allows.':'以下の数とレベルを、そのRVレベルで利用できる内容に置き換えます。','Set the level for each upgrade module you have unlocked (0 = not unlocked).':'解放済みの各強化モジュールのレベルを設定します（0＝未解放）。','Gets everything your next RV level costs as soon as possible, then earns as many coins as that leaves room for.':'次のRVレベルに必要なものを最短で揃え、余力でコインを最大限稼ぎます。','These take a rare currency to unlock. Plans only use the ones you tick.':'解放には希少通貨が必要です。チェックしたレシピだけを計画に使用します。','Still working this setup out...':'この編成を計算中…','How the team is worked out':'チーム編成の算出方法','Net of seed costs.':'種代を差し引いた利益です。','Updates instantly from the plan above.':'上の計画をもとに即時更新されます。','One seed per planting, for every Farmland and Woodland crop in the plan.':'計画内の農地・森林作物は、作付け1回につき種を1個使用します。','Optimizer not ready. Please wait...':'最適化ツールを準備中です。しばらくお待ちください…','Failed to load recipe data. Please refresh the page.':'レシピデータを読み込めませんでした。ページを再読み込みしてください。','Coins, from what\'s left':'余力で得るコイン','No Dance Pad Polisher yet':'ダンスパッド研磨機がありません','No Aniipod Maker yet':'アニポッド製造機がありません'
};

const pretty = id => id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
const replacements = new Map([...Object.entries(ui), ...Object.entries(names), ...Object.entries(items).map(([id, ja]) => [pretty(id), ja])]);
const ordered = [...replacements.entries()].sort((a, b) => b[0].length - a[0].length);

function translateText(value) {
  if (!value || !/[A-Za-z]/.test(value)) return value;
  const leading = value.match(/^\s*/)[0];
  const trailing = value.match(/\s*$/)[0];
  let text = value.trim();
  const exact = replacements.get(text);
  if (exact) return leading + exact + trailing;
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
    .replace(/^Backup planner, trial (\d+)…?$/, '予備プランナー：試行$1…');
  return leading + text + trailing;
}

function translateElement(root) {
  if (root.nodeType === Node.TEXT_NODE) {
    if (!root.parentElement?.closest('script, style, .math-block')) root.nodeValue = translateText(root.nodeValue);
    return;
  }
  if (!(root instanceof Element) && root !== document) return;
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
  document.title = 'Aniimax - アニーモ生産最適化ツール';
  translateElement(document.body);
  new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(translateElement)))
    .observe(document.body, { childList: true, subtree: true });
}
