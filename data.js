/* ============================================
   单词一学会 · 数据库
   ── 扩充方式：
   1) 新视频 → 往 VIDEOS 加一条
   2) 新单词 → 往 WORDS 加一条；老单词学到新视频讲法 → 往该词的 details 数组追加一条
   ============================================ */

// 视频来源库（key = 视频ID）
const VIDEOS = {
  "7681616605867986227": {
    id: "7681616605867986227",
    title: "如何像我一样强得可怕？",
    url: "https://www.douyin.com/video/7681616605867986227",
    date: "2026-03-27",
    author: "Sharon老师",
    summary: "同一个 run，搭配不同意思完全不同：run 是跑，run out of 是「用完耗尽」——学单词要学搭配，不能只背单词本身。",
    script: [
      ["en", "If you only know \"run\" means to run,"],
      ["en", "how can you be as scary as I am?"],
      ["en", "\"Run\" in the training school — he means to run."],
      ["en", "\"Run\" in the solar power — he means to run."],
      ["en", "But — Mom, we ran out of the toilet paper!"],
      ["en", "Here, \"run\" means \"run out of\" — to use something up."]
    ]
  },
  "7684148229830675718": {
    id: "7684148229830675718",
    title: "要是我早知道英语可以这么学的话...",
    url: "https://www.douyin.com/video/7684148229830675718",
    date: "2026-07-30",
    author: "大英奇侠传",
    summary: "用情景剧讲清 damage / destroy / ruin 三个「破坏」的区别：damage 是部分损坏可修、destroy 是彻底毁灭、ruin 可以是心情感受被毁。",
    script: [
      ["en", "Damage, destroy, ruin — they all mean \"destroyed\". What's the difference between them?"],
      ["en", "Damage is damage. If you only destroy a part of it, you can repair it — that's damage."],
      ["en", "His bike was damaged."],
      ["en", "Destroy? Come on, show us."],
      ["en", "Destroy is destruction — completely destroyed, not repairable."],
      ["en", "The house was destroyed."],
      ["en", "This is my house! No, no, no, no — you little bastard, don't run!"],
      ["en", "Ruin is a ghost."],
      ["en", "It's not necessarily physical damage."],
      ["en", "It can also be a broken mood, a broken experience, and so on."],
      ["en", "They just ruined my mood."]
    ]
  },
  "7499776860960902400": {
    id: "7499776860960902400",
    title: "百因必有果，你的 retribution 就是我！",
    url: "https://www.douyin.com/video/7499776860960902400",
    date: "2026-07-11",
    author: "王哪写英语",
    summary: "借《甄嬛传》台词反复使用 retribution，靠剧情画面把「报应、惩罚」这个词刻进记忆——影视梗联想法。",
    script: [
      ["zh", "你就不怕 retribution？"],
      ["zh", "熹贵妃，你不怕遭 retribution？"],
      ["zh", "那自然是你的 retribution。"],
      ["zh", "若有 retribution，也不在皇上你——"],
      ["zh", "那是他的 retribution。"],
      ["zh", "焉知不是上天的 retribution？"]
    ]
  },
  "7461807110674812172": {
    id: "7461807110674812172",
    title: "嘿，让我在评论区里看到你渊博的知识",
    url: "https://www.douyin.com/video/7461807110674812172",
    date: "2026-09-04",
    author: "我是媛媛（在学英语）",
    summary: "用「C + saw = seesaw（跷跷板）」的拆字联想法记单词：see 的过去式 saw 和字母 C 拼在一起，就成了一个一眼难忘的新词。",
    script: [
      ["zh", "保证你一辈子都不会忘。"],
      ["zh", "这是 C，看见对吗？这是它的过去式 saw。"],
      ["zh", "这也是 saw，一样的。"],
      ["zh", "但是它还可以表示「句子」。"],
      ["zh", "那我把 C 和 saw 连起来——C + saw，就变成了 seesaw（跷跷板）。"],
      ["zh", "酷不酷？"]
    ]
  },
  "7570641230193248435": {
    id: "7570641230193248435",
    title: "不管什么样的方式，最终的目的都是能听懂能记住",
    url: "https://www.douyin.com/video/7570641230193248435",
    date: "2026-02-18",
    author: "五三英语木老舅",
    summary: "用中文谐音和拆字讲一串词：goose egg（鹅蛋→零分）、underdog（被狗打趴下→弱者）、freshman（新人→新生）、lipstick（嘴唇上的棍→口红）——所谓「邪修」就是靠联想硬记。",
    script: [
      ["zh", "goose，大鹅；egg，蛋。所以 goose egg，大鹅蛋，就是零分。"],
      ["zh", "dogs，一群狗；body，身体。你的身体狗都不如，说明你干活累的——你是打工人。"],
      ["zh", "dogs + body = 打工人。"],
      ["zh", "under，在下面；dog，狗。那 underdog——你都被狗打趴下了，你在狗下面。"],
      ["zh", "所以你纯纯弱者。underdog，弱者。"],
      ["zh", "fresh，新鲜的；man，人。那 freshman，小鲜肉吗？"],
      ["zh", "学校里面小鲜肉——不就是高一和大一新生吗？"],
      ["zh", "lip，嘴唇；stick，棍。lipstick，涂在嘴唇上的那根棍，所以叫口红。"],
      ["zh", "dog，狗；like，喜欢。狗喜欢你，是因为狗对你忠诚，所以 doglike，忠诚。"],
      ["zh", "可以吗？可以了。"]
    ]
  },
  "7477051412493421874": {
    id: "7477051412493421874",
    title: "很多人读错的一个英语单词！",
    url: "https://www.douyin.com/video/7477051412493421874",
    date: "2025-03-02",
    author: "莉雅老师",
    summary: "sure 这个词很多人读成「舒厄」，读错了意思听起来都不对。地道发音是 /ʃʊr/，常说的 for sure 也不是「佛修厄」——练好 /ʃʊr/ 这个音，口语立刻地道。",
    script: [
      ["zh", "这个单词好多人可能会发错。"],
      ["zh", "sure，或者读成「舒厄」——这样的话意思都变了。"],
      ["zh", "它地道的发音是：sure。"],
      ["zh", "比如说我们外国人常说的 for sure，"],
      ["zh", "它的发音不是「佛-舒厄」，是 for sure。"],
      ["zh", "for sure。你学会了吗？"]
    ]
  },
  "7683775454976675098": {
    id: "7683775454976675098",
    title: "只学自然拼读，你可能会读错 good｜/uː/ vs /ʊ/",
    url: "https://www.douyin.com/video/7683775454976675098",
    date: "2026-09-10",
    author: "莉雅老师",
    summary: "good 里的 oo 不是 /uː/！对比 food /uː/（嘴唇圆且紧）和 good /ʊ/（嘴放松），讲清自然拼读有用但解决不了所有发音问题——英语拼写规则例外太多，还是要多听多说。",
    script: [
      ["zh", "这是很多人一直读错的英文单词。"],
      ["zh", "很多人说的是「古德」，但其实这样的发音不对。"],
      ["zh", "你听：good。听出来这个区别了吧？"],
      ["zh", "good 里面的 oo，不是 /uː/ 的发音，而是更放松的一个声音。"],
      ["zh", "good, good。"],
      ["zh", "很多人看到 oo 这个字母组合，第一发音就是 /uː/：to, food, moon, school。"],
      ["zh", "但是你再看这些单词：good, cook, look, book。"],
      ["zh", "这也是为什么自然拼读很有用，但不能解决所有的发音问题。"],
      ["en", "Phonics can teach you the relationship between real sounds and their letters, their spelling."],
      ["en", "But English spelling isn't perfect. There are a lot of exceptions and things that don't fit the rules of phonics."],
      ["en", "One English letter might have many different ways of pronouncing it in different words, and one sound might be represented by many different letters or groups of letters."],
      ["zh", "我们先熟悉一下这两个声音。"],
      ["en", "We don't really need to focus too much on what the IPA symbol looks like, but we should focus on how the sounds feel as we're saying them."],
      ["en", "So when you say /uː/ as in food or moon or school, your lips should be pretty round and also pretty tense. You have to use some muscle to get this sound out."],
      ["en", "/uː/, food, food."],
      ["en", "But if you relax your mouth a little bit — then you get the sound that's in the word good."],
      ["en", "So let's listen again: food, good. Food, good."],
      ["en", "You're not just making the /uː/ shorter — you're changing the shape of your mouth, which produces a totally different sound."],
      ["zh", "所以你下次看到字母组合 oo，不要总觉得它的发音就是 /uː/。"],
      ["en", "Phonics can help you find those useful spelling patterns, but you still need to hear the words, practice saying them, and get used to the real authentic sounds."],
      ["zh", "那你还有什么样的英语发音总是分不清？或者有什么英文单词总是不知道怎么读？可以在评论区告诉我，我帮你把声音和单词读得更标准。"]
    ]
  },
  "7528763634509040959": {
    id: "7528763634509040959",
    title: "谁还不是个 curious 宝宝啊",
    url: "https://www.douyin.com/video/7528763634509040959",
    date: "2025-07-19",
    author: "剧会背单词",
    summary: "给《藏海传》片段配音，把 curious 反复塞进台词：「我真是 curious」「下官 curious 大人是如何做到」——一部剧刷十几遍，想忘都难，最后点出 curious = 好奇的。",
    script: [
      ["zh", "我真是 curious，你究竟是用了什么样的手段？"],
      ["zh", "这些年我一直 curious 一件事。"],
      ["zh", "下官 curious 大人是如何做到的。"],
      ["zh", "不过你让本王还是很 curious。"],
      ["zh", "看起来就是普通的一件东西，可是旁人过来，还 curious 本王为何在院中放一颗枯竹朽木。"],
      ["zh", "也没有亲眼见过，也是 curious 得很啊。"],
      ["zh", "不过在下一直很 curious，你那晚为何会去找喝醉酒的友人。"],
      ["zh", "你不 curious 了？"],
      ["zh", "朋友之间本来就不该有所隐瞒。我很 curious 啊。"],
      ["zh", "curious，好奇的。"]
    ]
  },
  "7664951600720620217": {
    id: "7664951600720620217",
    title: "10秒记住单词：celebrate 庆祝，庆贺",
    url: "https://www.douyin.com/video/7664951600720620217",
    date: "2026-07-21",
    author: "剧会背单词",
    summary: "把肖战剧集片段配音成 celebrate 专场：「所有人都在为我 celebrate」「晚上给你 celebrate 一下」——十几秒里重复六七遍，靠洗脑循环记住 celebrate = 庆祝、庆贺。",
    script: [
      ["zh", "今日所有人都在为我 celebrate。"],
      ["zh", "celebrate！你第一个大功报。"],
      ["zh", "晚上啊，给你 celebrate 一下。"],
      ["zh", "本座要好好 celebrate 一番。"],
      ["zh", "还是只想与父亲一人 celebrate？"],
      ["zh", "难道不该来 celebrate 吗？"]
    ]
  },
  "7683466260394973691": {
    id: "7683466260394973691",
    title: "孩子在我四姑开的学校上学",
    url: "https://www.douyin.com/video/7683466260394973691",
    date: "2026-09-09",
    author: "大民不乐意学英语",
    summary: "抽象情景剧：孩子在学校挨了打，家长慌乱中才想起「学校不是你四姑开的吗」，打电话喊四姑——结尾亮出词条 school /skuːl/ 学校，用剧情把 school 钉进脑子。",
    script: [
      ["zh", "媳妇儿，孩子在学校……"],
      ["zh", "哎呀妈，你慢点！"],
      ["zh", "孩子在学校让人给打了！"],
      ["zh", "啊？咋回事儿啊？"],
      ["zh", "你先别管咋回事儿，马上给你四姑打电话！"],
      ["zh", "给我四姑打电话干啥呀？学校不是你四姑开的嘛！"],
      ["zh", "你懵啦？"],
      ["zh", "啊对呀，学校是我四姑开的。你等一下。"],
      ["zh", "喂，四姑？你说。喂，四姑，四姑！四姑！学校——"],
      ["zh", "school /skuːl/ 学校。"]
    ]
  },
  "7219238687979097344": {
    id: "7219238687979097344",
    title: "又不让我好好讲课了",
    url: "https://www.douyin.com/video/7219238687979097344",
    date: "2023-04-07",
    author: "大腿麻了",
    summary: "天津话课堂小品：讲 crucial 这个词，「Crucial means extremely important」，例子是「下节课很重要——因为罗校长又要来听课了，谁都不许说天津话」，爆笑中记住 crucial = 极其重要的。",
    script: [
      ["zh", "老二教学跑得快……（开场学生打闹）"],
      ["zh", "来，看一下简单的单词。等会儿——这个词念：crucial。老师已经说了，这是个形容词，形容词记在黑板上了。"],
      ["en", "Crucial means extremely important."],
      ["en", "That's like so easy, right?"],
      ["zh", "所以它是非常……重要的意思。有多重要？"],
      ["zh", "老师现在赶紧举个例子，能保证让你们轻轻松松记住这个词。"],
      ["zh", "我说一声——下节课我来听课，别忘了。"],
      ["zh", "行了，这例子不讲了。所以这个单词："],
      ["en", "The next class is very crucial."],
      ["zh", "为啥？因为你们罗校长又要来听课了。所以下节课谁都不许说天津话——就一节课，让他听完赶紧走。行了，收拾收拾桌子，下课。"]
    ]
  },
  "7694993605581064955": {
    id: "7694993605581064955",
    title: "自然拼读记单词：认识 -ple，一记就记一批",
    url: "https://www.douyin.com/video/7694993605581064955",
    date: "2026-10-10",
    author: "夏夏不温柔（学英语版）",
    summary: "认识「-ple」这个结尾，一批单词一起拿下：apple 苹果、people 人们、purple 紫色的、couple 情侣、simple 简单的、sample 样品、temple 寺庙、example 例子——词族记忆法。",
    script: [
      ["zh", "自然拼读（记单词）——ple。"],
      ["zh", "如果你知道「ple」怎么读，那这一批单词你就都会了。"],
      ["zh", "apple 苹果、people 人们、purple 紫色的、couple 情侣。"],
      ["zh", "simple 简单的、sample 样品、temple 寺庙、example 例子。"]
    ]
  },
  "7496800012475583771": {
    id: "7496800012475583771",
    title: "缪斯女神 muse，一串记六个词",
    url: "https://www.douyin.com/video/7496800012475583771",
    date: "2025-04-24",
    author: "曲艺老师教英语",
    summary: "词根法：muse 是希腊神话掌管艺术的缪斯女神 → music 音乐 → musical 音乐的 → musician 音乐家 → museum 博物馆（-um 放东西的地方）→ amuse 逗乐 → amusement 娱乐。背一串顶一打。（视频后半是词汇书推广）",
    script: [
      ["zh", "muse 是谁啊？muse 是掌管希腊神话的缪斯女神，所以它引申出来的词根就是「艺术」。"],
      ["zh", "music = muse + ic（后缀），掌管艺术的本身就是音乐——所以是「音乐」。"],
      ["zh", "musical = music + al（形容词后缀，表示「的」）——「音乐的」。"],
      ["zh", "musician = music + ian（人的后缀）——研究/搞音乐的人，「音乐家」。"],
      ["zh", "museum = muse + um（地点后缀）——把艺术品全都放在的一个地点，「博物馆」。"],
      ["zh", "amuse = a-（使动前缀，表示「使得」）+ muse——通过艺术让你快乐，「逗乐、使娱乐」。"],
      ["zh", "amusement = amuse + ment（名词后缀）——「娱乐」。"],
      ["zh", "你会发现我背单词记得特别牢，因为我一背就背一串。（后面是词汇书推广）"]
    ]
  },
  "7512377259924278579": {
    id: "7512377259924278579",
    title: "听神话故事，记英语单词！花神 Flora！",
    url: "https://www.douyin.com/video/7512377259924278579",
    date: "2025-06-05",
    author: "曲艺老师教英语",
    summary: "词源法：Flora 是古罗马神话的花神，词根 flor- = 花 → flower 花 → floral 花的 → florist 花商 → flourish 像花一样绽放 = 繁荣，还有 sunflower 向日葵。一个神话带走一串词。",
    script: [
      ["zh", "Flora 是谁呢？是古罗马神话当中的花神。"],
      ["zh", "很多妈妈给女孩起名都叫 Flora，就是「花」，希望孩子像鲜花一样美丽。"],
      ["zh", "这个花神给我们带来很多单词。第一个是小学词汇：flower，「花」。"],
      ["zh", "flower/flor 加上形容词后缀 al（表示「的」）——floral，「花的、花卉的」。"],
      ["zh", "flor 加上人的后缀 ist——florist，经常经营花的那个人，「花商、花店店主」。"],
      ["zh", "flor 加上动词后缀 ish（使你像花一样绽放）——flourish，「繁荣、蓬勃发展」。"],
      ["zh", "还有一个词也来自「花」：像着太阳的那个花——sunflower，「向日葵」。"]
    ]
  },
  "7489421073344187657": {
    id: "7489421073344187657",
    title: "陕北话中的英文单词 第三弹",
    url: "https://www.douyin.com/video/7489421073344187657",
    date: "2025-04-04",
    author: "椰汁鱼（月更都费劲版",
    summary: "反差搞笑：陕北方言谐音居然暗合英文名——Daily 逮力（根本）、Hudson、Caleb、Louis、Vienna 喂爷哪（外公哪去了）。方言玩梗顺便记个 Vienna（维也纳）。",
    script: [
      ["en", "Actually, there's a lot of English names in 陕北话。（陕北话里藏着好多英文名）"],
      ["zh", "第一个 Daily 逮力（根本）——他根本（逮力）也不会弄这些。"],
      ["zh", "第二个 Hudson ——怕恨事你全湿透啦。"],
      ["zh", "第三个 Caleb ——叼的活不离手。"],
      ["zh", "第四个 Louis ——出门拿那么大个包，背着人不？"],
      ["zh", "第五个 Vienna 喂爷哪（外公哪去了）——你外公哪去了？"]
    ]
  },
  "7309824740489727270": {
    id: "7309824740489727270",
    title: "零基础就这样学英语！（自然拼读拼出 backflip）",
    url: "https://www.douyin.com/video/7309824740489727270",
    date: "2023-12-07",
    author: "MrYang 杨家成🔥",
    summary: "情景短剧：用「组合音」ack / fla / ip 三步拼出 backflip（后空翻）——自然拼读把长单词拆成小块，加上拼音里就会的 b，零基础也能拼出来。",
    script: [
      ["zh", "这个单字你会读吗？不会？那你肯定是零基础。来，我现在教你自然拼读，学员马上会。"],
      ["zh", "你每次都这么说啦，我在讲课呢。"],
      ["zh", "我先教你几个组合音——组合音是 26 个字母的升级版。第一个，跟着我读：ack。fla。ip。"],
      ["zh", "你这个跟音标有什么区别啊？这个肯定不一样啊——除了我们跟俄罗斯之外，全世界都在学自然拼读。记住没？再来一遍：ack、fla、ip。"],
      ["zh", "来，回到刚才那个单词，3、2、1——backflip！"],
      ["zh", "这个 b 没教哦？这个 b 还需要学吗？这个 b 在拼音里面，拼音怎么读？b！你看！"],
      ["zh", "开始拼读：1 是什么？b。1 跟 2 黏在一起怎么读？简单不？"],
      ["zh", "3 是什么？fla。4 呢？ip。3 跟 4 黏在一起怎么读？有没有简单？"],
      ["zh", "好像不是所有单词都能这么搞吧？这个是基础，不学的话你怎么背单词？"],
      ["zh", "这个单字怎么读？backflip，没错啦！厉害吧？在哪学呀？在我直播间，每天都有教。"]
    ]
  }
};

// 词条库（一个单词可对应多个视频讲解）
const WORDS = [
  {
    word: "run out of",
    pos: "短语动词",
    ipa: "/rʌn aʊt əv/",
    meaning: "用完，耗尽（某物没有了）",
    details: [
      {
        videoId: "7681616605867986227",
        exampleEn: "Mom, we ran out of toilet paper!",
        exampleZh: "妈，我们的厕纸用完了！",
        note: "注意过去式 ran out of。run 是跑/运行，但 run out of 是固定搭配，表示「用完」。"
      }
    ]
  },
  {
    word: "toilet paper",
    pos: "名词",
    ipa: "/ˈtɔɪlət ˈpeɪpər/",
    meaning: "卫生纸，厕纸",
    details: [
      {
        videoId: "7681616605867986227",
        exampleEn: "We need to buy more toilet paper.",
        exampleZh: "我们得再买点厕纸。",
        note: "不可数名词，常说 a roll of toilet paper（一卷厕纸）。"
      }
    ]
  },
  {
    word: "paper",
    pos: "名词",
    ipa: "/ˈpeɪpər/",
    meaning: "纸；纸张；（toilet paper 里的 paper 就是「纸」）",
    details: [
      {
        videoId: "7681616605867986227",
        exampleEn: "We ran out of toilet paper.",
        exampleZh: "我们的厕纸用完了。",
        note: "paper 是「纸」的总称，不可数。toilet paper 是 toilet（厕所）+ paper（纸）= 厕纸；同理还有 tissue paper（纸巾）、newspaper（报纸，注意连写）。"
      }
    ]
  },
  {
    word: "damage",
    pos: "动词 / 名词",
    ipa: "/ˈdæmɪdʒ/",
    meaning: "损坏，损伤（部分损坏，通常可修复）",
    details: [
      {
        videoId: "7684148229830675718",
        exampleEn: "His bike was damaged.",
        exampleZh: "他的自行车被弄坏了（还能修）。",
        note: "强调「部分受损、能修好」。如果是毁掉一部分，用 damage 最准确。"
      }
    ]
  },
  {
    word: "destroy",
    pos: "动词",
    ipa: "/dɪˈstrɔɪ/",
    meaning: "摧毁，毁灭（彻底破坏，无法修复）",
    details: [
      {
        videoId: "7684148229830675718",
        exampleEn: "The house was destroyed.",
        exampleZh: "房子被彻底摧毁了（无法修复）。",
        note: "程度最重：彻底毁掉、救不回来。名词形式是 destruction（毁灭）。"
      }
    ]
  },
  {
    word: "ruin",
    pos: "动词 / 名词",
    ipa: "/ˈruːɪn/",
    meaning: "毁掉；破坏（可指事物，也可指心情、气氛、体验）",
    details: [
      {
        videoId: "7684148229830675718",
        exampleEn: "They just ruined my mood.",
        exampleZh: "他们刚刚把我的心情全毁了。",
        note: "既可以指实物被毁，也常用来指抽象的「心情/计划/气氛被搞砸」——这是它和 damage、destroy 最大的不同。"
      }
    ]
  },
  {
    word: "retribution",
    pos: "名词",
    ipa: "/ˌretrɪˈbjuːʃn/",
    meaning: "报应，惩罚（尤指因果报应、天谴）",
    details: [
      {
        videoId: "7499776860960902400",
        exampleEn: "That is his retribution.",
        exampleZh: "那是他的报应。",
        note: "正式用词，多指「做了坏事之后应得的惩罚」，比 punishment 更有「老天爷给的报应」色彩。记忆点：re-tribut-ion，词根 tribu 有「给予」的意思——把该还的还回去。"
      }
    ]
  },
  {
    word: "seesaw",
    pos: "名词 / 动词",
    ipa: "/ˈsiːsɔː/",
    meaning: "跷跷板；（价格、情绪等）上下起伏、来回摇摆",
    details: [
      {
        videoId: "7461807110674812172",
        exampleEn: "The children are playing on the seesaw.",
        exampleZh: "孩子们在玩跷跷板。",
        note: "拆字记忆：see（看见）的过去式 saw + 字母 C → C + saw = seesaw。跷跷板一上一下，所以动词也有「来回摇摆、反复无常」的意思，如 prices seesawed（价格上上下下）。"
      }
    ]
  },
  {
    word: "goose egg",
    pos: "名词短语",
    ipa: "/ɡuːs eɡ/",
    meaning: "零分，鸭蛋（比分零）",
    details: [
      {
        videoId: "7570641230193248435",
        exampleEn: "He got a goose egg on the test.",
        exampleZh: "他考试得了个零蛋。",
        note: "goose（大鹅）+ egg（蛋）= 鹅蛋，形状像个“0”，所以引申为「零分」。中文说“考了个鸭蛋”，英文说“拿了个鹅蛋”。"
      }
    ]
  },
  {
    word: "underdog",
    pos: "名词",
    ipa: "/ˈʌndərdɔːɡ/",
    meaning: "处于劣势的人（队）；弱者，不被看好的一方",
    details: [
      {
        videoId: "7570641230193248435",
        exampleEn: "Everyone loves an underdog.",
        exampleZh: "大家都喜欢支持弱者／黑马。",
        note: "拆字：under（在下面）+ dog（狗）= 被狗打趴下、在狗底下 → 弱者。常见搭配 root for the underdog（为弱者加油）。"
      }
    ]
  },
  {
    word: "freshman",
    pos: "名词",
    ipa: "/ˈfreʃmən/",
    meaning: "（大学或高中）一年级新生",
    details: [
      {
        videoId: "7570641230193248435",
        exampleEn: "She is a freshman at Peking University.",
        exampleZh: "她是北京大学的大一新生。",
        note: "拆字：fresh（新鲜的）+ man（人）= 新来的人 → 新生。美式英语里大一到大四分别叫 freshman / sophomore / junior / senior。"
      }
    ]
  },
  {
    word: "lipstick",
    pos: "名词",
    ipa: "/ˈlɪpstɪk/",
    meaning: "口红",
    details: [
      {
        videoId: "7570641230193248435",
        exampleEn: "She put on some lipstick before going out.",
        exampleZh: "她出门前涂了点口红。",
        note: "拆字：lip（嘴唇）+ stick（棍）= 涂在嘴唇上的那根棍 → 口红。同类构词还有 chopstick（筷子）、candlestick（烛台）。"
      }
    ]
  },
  {
    word: "doglike",
    pos: "形容词",
    ipa: "/ˈdɔːɡlaɪk/",
    meaning: "像狗一样的；忠诚的，死心塌地的",
    details: [
      {
        videoId: "7570641230193248435",
        exampleEn: "He is doglike in his loyalty.",
        exampleZh: "他忠诚得像条狗一样（死心塌地）。",
        note: "拆字：dog（狗）+ like（像）= 像狗一样忠诚。视频里用 dog + like 助记；注意标准拼写是连写的 doglike，不是分开的 dog like。"
      }
    ]
  },
  {
    word: "sure",
    pos: "形容词 / 副词",
    ipa: "/ʃʊr/",
    meaning: "确定的，肯定的；当然",
    details: [
      {
        videoId: "7477051412493421874",
        exampleEn: "For sure!",
        exampleZh: "当然！肯定的！",
        note: "很多人读成「舒厄」，读错音意思听起来都变了。地道发音是 /ʃʊr/。高频搭配 for sure（肯定、没问题）。"
      }
    ]
  },
  {
    word: "good",
    pos: "形容词",
    ipa: "/ɡʊd/",
    meaning: "好的",
    details: [
      {
        videoId: "7683775454976675098",
        exampleEn: "good, cook, look, book",
        exampleZh: "这一组词里的 oo 都读短音 /ʊ/，不是长音 /uː/",
        note: "good 里的 oo 读 /ʊ/（嘴放松），不是 food/moon 里的 /uː/（嘴唇圆且紧）——不是单纯把音缩短，而是嘴型变了。别只靠自然拼读猜发音，要多听多模仿。"
      }
    ]
  },
  {
    word: "phonics",
    pos: "名词",
    ipa: "/ˈfɒnɪks/",
    meaning: "自然拼读（看字母组合猜发音的英语学习方法）",
    details: [
      {
        videoId: "7683775454976675098",
        exampleEn: "Phonics can teach you the relationship between sounds and their letters.",
        exampleZh: "自然拼读能教你声音和字母之间的对应关系。",
        note: "实用但不是万能：英语拼写例外很多（如 good 的 oo），一个字母多种读音、一个音多种拼法都存在，所以拼读之外还要多听真人口音。"
      },
      {
        videoId: "7309824740489727270",
        exampleEn: "ack + fla + ip → backflip",
        exampleZh: "组合音是 26 个字母的升级版，拼读像拼拼音一样简单。",
        note: "杨家成情景剧演示：把长单词拆成组合音（ack、fla、ip），三步拼出 backflip（后空翻）。"
      }
    ]
  },
  {
    word: "curious",
    pos: "形容词",
    ipa: "/ˈkjʊriəs/",
    meaning: "好奇的；奇怪的",
    details: [
      {
        videoId: "7528763634509040959",
        exampleEn: "I'm really curious about how you did that.",
        exampleZh: "我真是好奇你到底是怎么做到的。",
        note: "常用搭配 be curious about（对……好奇）。视频用《藏海传》配音把 curious 反复说了十几遍——同一部剧反复刷，单词自然刻进记忆。"
      }
    ]
  },
  {
    word: "celebrate",
    pos: "动词",
    ipa: "/ˈselɪbreɪt/",
    meaning: "庆祝，庆贺",
    details: [
      {
        videoId: "7664951600720620217",
        exampleEn: "Everyone is here to celebrate for me!",
        exampleZh: "今天所有人都在为我庆祝！",
        note: "10 秒洗脑循环：剧集配音里 celebrate 重复六七遍。名词形式 celebration（庆典），形容词 celebratory（庆祝的）。"
      }
    ]
  },
  {
    word: "school",
    pos: "名词",
    ipa: "/skuːl/",
    meaning: "学校",
    details: [
      {
        videoId: "7683466260394973691",
        exampleEn: "The school was opened by my aunt.",
        exampleZh: "这学校是我四姑开的。",
        note: "情景剧结尾亮出的词条。注意 school 里 oo 读长音 /uː/（对比 good 的 /ʊ/），音标 [skuːl]——别读成「斯古欧」。"
      }
    ]
  },
  {
    word: "crucial",
    pos: "形容词",
    ipa: "/ˈkruːʃl/",
    meaning: "极其重要的，关键性的",
    details: [
      {
        videoId: "7219238687979097344",
        exampleEn: "The next class is very crucial.",
        exampleZh: "下节课非常关键（校长要来听课）。",
        note: "比 important 程度更重，常用搭配 crucial for / to sth（对……至关重要）。视频里的例子很形象：校长来听课，这节课就 crucial 了。"
      }
    ]
  },
  {
    word: "couple",
    pos: "名词",
    ipa: "/ˈkʌpl/",
    meaning: "情侣；一对（夫妇）；两个，几个",
    details: [
      {
        videoId: "7694993605581064955",
        exampleEn: "They are a lovely couple.",
        exampleZh: "他们是一对可爱的情侣。",
        note: "-ple 词族一员：apple、people、purple、couple、simple、sample、temple、example。a couple of 表示「两三个、几个」。"
      }
    ]
  },
  {
    word: "temple",
    pos: "名词",
    ipa: "/ˈtempl/",
    meaning: "寺庙，庙宇；太阳穴",
    details: [
      {
        videoId: "7694993605581064955",
        exampleEn: "We visited an old temple.",
        exampleZh: "我们参观了一座古寺庙。",
        note: "-ple 词族：和 apple、people、purple、couple、simple、sample、example 一起记，认识 -ple 的读音就一批全拿下。"
      }
    ]
  },
  {
    word: "example",
    pos: "名词",
    ipa: "/ɪɡˈzɑːmpl/",
    meaning: "例子，实例；榜样",
    details: [
      {
        videoId: "7694993605581064955",
        exampleEn: "Can you give me an example?",
        exampleZh: "你能给我举个例子吗？",
        note: "高频搭配 for example（例如）。-ple 词族压轴词：apple 苹果 → people 人们 → purple 紫色 → couple 情侣 → simple 简单 → sample 样品 → temple 寺庙 → example 例子。"
      }
    ]
  },
  {
    word: "museum",
    pos: "名词",
    ipa: "/mjuˈziːəm/",
    meaning: "博物馆",
    details: [
      {
        videoId: "7496800012475583771",
        exampleEn: "We went to the museum last weekend.",
        exampleZh: "我们上周末去了博物馆。",
        note: "词根记忆：muse（缪斯女神，掌管艺术）+ -um（地点后缀）= 放艺术品的地方 → 博物馆。同族词：music、musical、musician、amuse。"
      }
    ]
  },
  {
    word: "amuse",
    pos: "动词",
    ipa: "/əˈmjuːz/",
    meaning: "逗乐，使娱乐",
    details: [
      {
        videoId: "7496800012475583771",
        exampleEn: "The story amused the children.",
        exampleZh: "这个故事把孩子们逗乐了。",
        note: "a-（使动前缀）+ muse（缪斯，艺术）= 用艺术让你快乐 → 逗乐。名词 amusement（娱乐，消遣）；形容词 amusing（好笑的，有趣的）。"
      }
    ]
  },
  {
    word: "floral",
    pos: "形容词",
    ipa: "/ˈflɔːrəl/",
    meaning: "花的，花卉的；印着花的",
    details: [
      {
        videoId: "7512377259924278579",
        exampleEn: "She wore a floral dress.",
        exampleZh: "她穿了一条碎花裙子。",
        note: "词根 flor- = 花（来自花神 Flora）。flor + -al（形容词后缀「的」）= 花的。同族：flower、florist、flourish。"
      }
    ]
  },
  {
    word: "florist",
    pos: "名词",
    ipa: "/ˈflɒrɪst/",
    meaning: "花商；花店店主",
    details: [
      {
        videoId: "7512377259924278579",
        exampleEn: "I bought roses from the florist.",
        exampleZh: "我在花店买了玫瑰。",
        note: "flor（花）+ -ist（做某事的人）= 经营花的人 → 花商。同缀词：artist（艺术家）、scientist（科学家）。"
      }
    ]
  },
  {
    word: "flourish",
    pos: "动词",
    ipa: "/ˈflʌrɪʃ/",
    meaning: "繁荣，蓬勃发展；茁壮成长",
    details: [
      {
        videoId: "7512377259924278579",
        exampleEn: "The business is flourishing.",
        exampleZh: "生意蒸蒸日上。",
        note: "flor（花）+ -ish（动词后缀）= 像鲜花一样绽放 → 繁荣、兴旺。神话记忆：花神 Flora 的祝福下，万物 flourish。"
      }
    ]
  },
  {
    word: "Vienna",
    pos: "名词（专有名词）",
    ipa: "/viˈenə/",
    meaning: "维也纳（奥地利首都，音乐之都）",
    details: [
      {
        videoId: "7489421073344187657",
        exampleEn: "Vienna is famous for its music.",
        exampleZh: "维也纳以音乐闻名。",
        note: "陕北话「喂爷哪（外公哪去了）」的谐音就是 Vienna——方言玩梗记地名。维也纳金色大厅新年音乐会就在这座城市。"
      }
    ]
  },
  {
    word: "backflip",
    pos: "名词",
    ipa: "/ˈbækflɪp/",
    meaning: "后空翻",
    details: [
      {
        videoId: "7309824740489727270",
        exampleEn: "He did a backflip on the mat.",
        exampleZh: "他在垫子上翻了个后空翻。",
        note: "拆字：back（向后）+ flip（翻转）= 后空翻。杨家成用自然拼读组合音 ack + fla + ip 三步把它拼出来——长单词拆成小块就不怕。"
      }
    ]
  },
  {
    word: "flip",
    pos: "动词 / 名词",
    ipa: "/flɪp/",
    meaning: "翻转，快速翻动；（空）翻",
    details: [
      {
        videoId: "7309824740489727270",
        exampleEn: "Flip the pancake over.",
        exampleZh: "把煎饼翻个面。",
        note: "backflip 的核心词。常见搭配 flip a coin（抛硬币决定）、flip through（快速翻阅）。手机翻盖手机叫 flip phone。"
      }
    ]
  }
];
