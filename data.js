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
  },
  "7693424065784382819": {
    id: "7693424065784382819",
    title: "It's very impor嗯…一起读读看～",
    url: "https://www.douyin.com/video/7693424065784382819",
    date: "2026-10-06",
    author: "此时",
    summary: "口语提速四连：it 连读、got to 说成 gotta、important 重音在中间、for 弱读 /fər/——跟读几遍，口语立刻不像「机器人」。",
    script: [
      ["en", "Say it — say it to me.（it 轻轻连上去，不要读成两个断开的词）"],
      ["en", "I gotta go, I gotta work.（got to 口语里说成 gotta）"],
      ["en", "It's very important.（重音打在 -POR- 上：im-POR-tant）"],
      ["en", "It's for you, it's for me.（for 弱读成 /fər/，不读「佛尔」）"]
    ]
  },
  "7537645748911361314": {
    id: "7537645748911361314",
    title: "为什么小狗不是 little dog？",
    url: "https://www.douyin.com/video/7537645748911361314",
    date: "2025-08-12",
    author: "豆苗妈妈（口语娃启蒙方法）",
    summary: "little dog 指的是「体型小」，不是「幼崽」——动物幼崽有自己的专有词：puppy 小狗、kitten 小猫、chick 小鸡、duckling 小鸭、bunny 小兔、lamb 小羊、cub 幼兽、piglet 小猪、pony 小马。",
    script: [
      ["zh", "为什么小狗不能说 little dog 呢？"],
      ["en", "Actually, little dog refers to the body size, but not the age."],
      ["zh", "所以：dog 小狗是 puppy，cat 小猫是 kitten，"],
      ["zh", "chicken 小鸡是 chick，duck 小鸭是 duckling，rabbit 小兔是 bunny。"],
      ["zh", "sheep 小羊是 lamb，bear 幼熊是 cub，pig 小猪是 piglet，horse 小马是 pony。"],
      ["en", "Do you get it?"]
    ]
  },
  "7473739983698890021": {
    id: "7473739983698890021",
    title: "周五是 in Friday 还是 on Friday？",
    url: "https://www.douyin.com/video/7473739983698890021",
    date: "2025-02-22",
    author: "张俊杰讲英语-好学好课",
    summary: "别背「小于一天用 at」的口诀！理解本意：at 是「点」、on 是「单位一（具体到某一天）」、in 是「范围」——一套逻辑通吃年月日时刻。",
    script: [
      ["zh", "很多老师讲这题让你背口诀：小于一天用 at，等于一天用 on，大于一天用 in——这是大错特错的。"],
      ["zh", "at 的意思叫「点」，跟大小没有必然关系：at five o'clock、at noon（正午十二点这个点）、at night（天全黑的那一刹那）。"],
      ["zh", "on 由「一」演化而来，跟「单位一」相关：一天、一天的早晨、一天的晚上——Friday 是一天，所以 on Friday。"],
      ["zh", "in 表示「范围」：in two hours（两小时是范围）、in a week（一周七天不是一天）、in summer、in 2024。"],
      ["zh", "一月份是范围 → in January；具体到一月一号 → on January 1st；再加年份 → on January 1st, 2024；再具体到点 → at 5 o'clock, January 1st, 2024。"],
      ["zh", "at 是点、in 是范围、on 是单位一——理解了本意，随便怎么变你都会选。"]
    ]
  },
  "7475673515203628351": {
    id: "7475673515203628351",
    title: "秒懂指示代词",
    url: "https://www.douyin.com/video/7475673515203628351",
    date: "2025-02-26",
    author: "英语可莉老师",
    summary: "一张嘴全捋清：this 这个 / that 那个 / these 这些 / those 那些 / both 两个都 / either 任一个 / the other one 另一个 / another one 再来一个。",
    script: [
      ["en", "This — 这个。 That — 那个。 These — 这些。 Those — 那些。"],
      ["en", "Both — 两个。 Either — 任何一个。"],
      ["en", "This one — 这一个。 The other one — 另一个。 Another one — 再来一个。"]
    ]
  },
  "7503380715166256420": {
    id: "7503380715166256420",
    title: "英语里的两个「打开」",
    url: "https://www.douyin.com/video/7503380715166256420",
    date: "2025-05-12",
    author: "飞凡满分英语",
    summary: "「带电用 turn on、不带电用 open」是错的！本意：turn on = 旋转着开（早期电灯电视都是拧的，水龙头也是）；open = 移除障碍、打开通道（门、窗、酒瓶）。开灯说 open the light，老外以为你要拆灯修。",
    script: [
      ["zh", "谁告诉你们「带电的用 turn on、不带电的用 open」？那打开水龙头 turn on the tap——水龙头带电吗？"],
      ["zh", "turn 的本意是「旋转」。早期的电灯没有开关，你转一下它就开了——所以是 turn on the light。"],
      ["zh", "不光电器：任何「转着开」的东西都用 turn on。以前的电视是转着开的 → turn on the TV；老汽车也要拧着启动 → turn on the car；水龙头也是转着开的 → turn on the tap。"],
      ["zh", "那 open 呢？open 的含义是「移除障碍、新建通道」：开门、开窗、开酒瓶。"],
      ["zh", "开灯如果用 open，老外会觉得你要打开外壳、准备修理一下灯。"]
    ]
  },
  "7703174805227632634": {
    id: "7703174805227632634",
    title: "“fire”快给我整 fire 了",
    url: "https://www.douyin.com/video/7703174805227632634",
    date: "2026-11-01",
    author: "章章（英语学习中～）",
    summary: "fire 一词多义复习：fired 被炒鱿鱼、fired up 状态好/兴奋、under fire 被批评——同一个 fire，搭配一换意思全变。",
    script: [
      ["zh", "朋友们，fire 这个单词怎么这么多意思？我快疯了。"],
      ["en", "OK, so let me see if I understand. —— 好的，现在检测一下我是否明白。"],
      ["en", "Right. —— 对吧。"],
      ["en", "“I'm fired.” —— 我被炒鱿鱼了。"],
      ["en", "“I'm fired up” — it means I'm doing really well. 这意味着我做得很好。"],
      ["en", "It means you're excited. —— 这意味着你很兴奋。"],
      ["en", "“You are fired up.”"],
      ["en", "And “under fire” means people are criticizing you. —— 人们在批评你。"],
      ["en", "So what does “fire” actually mean? —— 那么 fire 到底是什么意思？"]
    ]
  },
  "7696914922513229750": {
    id: "7696914922513229750",
    title: "我喜欢狗怎么说？",
    url: "https://www.douyin.com/video/7696914922513229750",
    date: "2026-10-15",
    author: "Mina 学英语",
    summary: "I like dog 的意思是你喜欢吃狗肉！喜欢动物本身要用复数 I like dogs——名词单复数在英语里是「两种东西」。",
    script: [
      ["zh", "「我喜欢狗」怎么说？I like dog？不对！"],
      ["zh", "如果你说 I like dog，这个意思是你喜欢吃狗肉。"],
      ["zh", "如果喜欢吃羊肉，可以说 I like mutton；喜欢吃兔肉，可以说 I like rabbit。"],
      ["zh", "在英语里，喜欢的是动物本身，你应该用复数。"],
      ["zh", "那「我喜欢狗」怎么说？—— I like dogs. Great！"],
      ["zh", "那「我喜欢兔」怎么说？—— I like rabbits. Great！"]
    ]
  },
  "7703210489707153898": {
    id: "7703210489707153898",
    title: "学英语是一件长期并且有执行力的事",
    url: "https://www.douyin.com/video/7703210489707153898",
    date: "2026-11-01",
    author: "黑马王子",
    summary: "目标雅思 7 分的四阶段路线图：①打底 3000 词（新概念1-3）②进阶 5000 词（+走遍美国、BBC）③雅思入门 7000-8000 词（题型+真题）④冲刺（全套真题+模考+写作批改）。",
    script: [
      ["zh", "想学好英语很简单——它是一个需要长期、需要执行力的事儿。我的目标是雅思 7 分或 7.5 分，所以我让 AI 给我制定了一个学习计划，分四个阶段。"],
      ["zh", "第一阶段打底：词汇量 3000 词左右，学完新概念 1-3 册——注意，新概念仅仅是个打底阶段；每天练听力、口语、阅读、写作。"],
      ["zh", "第二阶段进阶：新概念 1-3 册加《走遍美国》，听 BBC 听力，每天练口语和阅读；词汇量积累到 5000 词左右。"],
      ["zh", "第三阶段雅思入门：词汇量 7000-8000 词，熟悉雅思题型，做雅思真题，提升做题技巧。"],
      ["zh", "第四阶段冲刺：做全套真题，模拟真实考试，让老师批改写作。"],
      ["zh", "现在学新概念的同学，说白了仅仅是在打底，距离考雅思还有很长的路要走——所以需要坚持，坚持下去，继续学习。"]
    ]
  },
  "7701604581146414378": {
    id: "7701604581146414378",
    title: "带你彻底理解什么叫做英语从句",
    url: "https://www.douyin.com/video/7701604581146414378",
    date: "2026-10-28",
    author: "史瑞杰谈英语",
    summary: "从句的本质是「自问自答」：That is the one.（哪个？Which one?）我喜欢的那格 → That is the one which I like。从句就是把别人的潜在疑问省略后、直接作出的回答。",
    script: [
      ["zh", "国内学英语靠死记硬背：一容易导致厌学，二本质上是闭门造车。我们来看怎么「有机地」理解从句。"],
      ["zh", "我说 That is the one——「就是那个」。别人是不是不知道我说的是哪个？他就会问：Which one——哪个？"],
      ["zh", "然后我进一步回答：Which I like——「我喜欢的那格」。完整对话就是：就是那个→哪个？→我喜欢的那格。"],
      ["zh", "这就是从句的来历和原理：把别人的疑问忽略了，直接自问自答。That is the one which I like. 明白没？"],
      ["zh", "再看一遍：Mom, did you see the phone?（你看到手机了吗）妈妈不知道是哪台，反问 Which phone?（哪台？）"],
      ["zh", "孩子回答：The phone which I left on the table——「我落在桌上的那台手机」。其实这里连 the phone 都不用重复，直接说 which I left on the table 就行。"],
      ["zh", "把孩子的前后句连起来：the phone + which I left on the table = 一个完整从句——跳过了妈妈的疑问，直接回答了妈妈的潜在疑问。"],
      ["zh", "所以从句本质上是主句在回答一个疑问。以后看到英语从句，你就知道它为什么是这样。"]
    ]
  },
  "7672324746943401242": {
    id: "7672324746943401242",
    title: "原来真不是我笨，换个方式教我醍醐灌顶",
    url: "https://www.douyin.com/video/7672324746943401242",
    date: "2026-08-10",
    author: "五三英语木老舅",
    summary: "一句话记八大时态：你妈天天揍你（一般现在）、昨天揍了你（过去）、一会要揍（将来）、正在揍（进行）、昨晚9点正揍（过去进行）、揍完了（完成）、上学前就揍完（过去完成）、昨天说要揍（过去将来）。",
    script: [
      ["zh", "你妈天天揍你——这就是一般现在时。"],
      ["zh", "昨天你妈揍了你——一般过去时。你妈一会要揍你——一般将来时。"],
      ["zh", "你妈正在揍你——现在进行时。昨晚9点你妈正在揍你——过去进行时。"],
      ["zh", "你妈已经揍完你了——现在完成时。上学前你妈就已经揍完你了——过去完成时。"],
      ["zh", "昨天你妈说要揍你——过去将来时。再学不会，回家挨揍去！"]
    ]
  },
  "7585498405812620587": {
    id: "7585498405812620587",
    title: "一节课学 20 单词太容易了",
    url: "https://www.douyin.com/video/7585498405812620587",
    date: "2025-12-19",
    author: "五三英语木老舅",
    summary: "谐音拆字连发七词：dog eat dog 自相残杀、single dog 单身狗、manage 男人上年纪要管理自己、greenhouse 温室、lucky money 压岁钱、ladylike 优雅、lovesick 相思病。",
    script: [
      ["zh", "dog 狗，eat 吃，dog 还是狗——dog eat dog，狗咬狗，自相残杀。"],
      ["zh", "single 单个的，dog 狗——single dog，单身狗。"],
      ["zh", "man 男人，age 年纪——manage：男人上了年纪就得管理好自己，所以 manage 是「管理」。"],
      ["zh", "green 绿色，house 房子——房子里种的全是绿色植物，greenhouse，「温室」。"],
      ["zh", "lucky 幸运的，money 钱——lucky money，压岁钱。"],
      ["zh", "lady 淑女，like 像——ladylike，像淑女一样，「优雅端庄的」。"],
      ["zh", "love 爱，sick 病——lovesick，因爱而得病，「相思病」。"]
    ]
  },
  "7438256381255339300": {
    id: "7438256381255339300",
    title: "英语说的像母语一样，原来是在这里学的！",
    url: "https://www.douyin.com/video/7438256381255339300",
    date: "2024-11-17",
    author: "大天使英语 icey",
    summary: "听力就是口语：单词发音学错了，你只能听懂错的英语。then 的 /ð/ 舌尖轻触，any other 连读带出鼻音，on earth 连读——把读对的词连起来，听力自然通。",
    script: [
      ["zh", "朋友们记住一个点：听力就是口语。如果你的单词学的是错的，那你只能听懂错的英语。"],
      ["zh", "这个词你学的是 /zen/？正确读音是 then——舌尖轻轻碰一下牙齿。"],
      ["zh", "then any other——有人说舌头不灵巧转不过来？其实你念 any other 的时候照样有这个音，你从小练了十几年，读对了词自然能连起来。"],
      ["zh", "on earth 也要连读：person on earth。"],
      ["en", "I love my dog more than any other person on earth."],
      ["zh", "再听这个句子——「我爱我的狗胜过世上任何人」。请学正确的英语。"]
    ]
  },
  "7574060932885441652": {
    id: "7574060932885441652",
    title: "be 动词变形洗脑歌",
    url: "https://www.douyin.com/video/7574060932885441652",
    date: "2025-11-18",
    author: "English老儿",
    summary: "I am / You are / He is… 现在时一套，I was / You were… 过去时一套，配上「was wa was」的节奏——用 Rap 的感觉把 be 动词变形刻进肌肉记忆。",
    script: [
      ["en", "I am. You are. It is. He is. She is. We are. They are."],
      ["en", "I was. You were. It was. He was. She was. We were. They were."],
      ["en", "Was wa was, was wa wa…（跟着节奏念三遍）"]
    ]
  },
  "7397295409426631962": {
    id: "7397295409426631962",
    title: "英语小白怎么开始学？",
    url: "https://www.douyin.com/video/7397295409426631962",
    date: "2024-07-30",
    author: "MrYang 杨家成🔥",
    summary: "小白第一步学「组合音」：an 读三遍，plan 直接拼出来；一个组合音能带出 plan/pan/tan/can 一千多个同类词，而组合音总共只有一百多个。",
    script: [
      ["zh", "这个单词怎么背？不会？你会读了吗？不会读你怎么背啊？——那教你一个方法，这是小白学英语的第一步：组合音。"],
      ["zh", "很简单，跟我读三遍：an、an、an。记住了？回到刚才那个不会读的单词，3、2、1——plan！"],
      ["zh", "如果这个组合音读 an，那这个单词就读 plan。简单吧？"],
      ["zh", "刚学了一个组合音，周边的单词你都能读出来：pan、tan、can、plan——都对啦！"],
      ["zh", "总结：每学一个组合音，都能背一千多个同类型单词，而这种组合音只有一百多个。"]
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
  },
  {
    word: "gotta",
    pos: "口语缩略",
    ipa: "/ˈɡɒtə/",
    meaning: "（= got to）必须，得",
    details: [
      {
        videoId: "7693424065784382819",
        exampleEn: "I gotta go, I gotta work.",
        exampleZh: "我得走了，我得干活了。",
        note: "got to 在快速口语里弱化成 gotta。书面语别写 gotta，但听力里必须认识。同类：wanna（want to）、gonna（going to）。"
      }
    ]
  },
  {
    word: "puppy",
    pos: "名词",
    ipa: "/ˈpʌpi/",
    meaning: "小狗，幼犬",
    details: [
      {
        videoId: "7537645748911361314",
        exampleEn: "The puppy is playing with the ball.",
        exampleZh: "小狗在玩球。",
        note: "little dog 指体型小，不是幼崽！幼崽有专有词：kitten 小猫、chick 小鸡、duckling 小鸭、bunny 小兔、lamb 小羊、cub 幼兽、piglet 小猪、pony 小马。"
      }
    ]
  },
  {
    word: "kitten",
    pos: "名词",
    ipa: "/ˈkɪtn/",
    meaning: "小猫，幼猫",
    details: [
      {
        videoId: "7537645748911361314",
        exampleEn: "Our kitten is three months old.",
        exampleZh: "我们家小猫三个月大。",
        note: "和 puppy（小狗）成对记。注意 tt 只发一个音 /ˈkɪtn/，中间的 e 不发音。"
      }
    ]
  },
  {
    word: "on",
    pos: "介词",
    ipa: "/ɒn/",
    meaning: "（时间）在具体某一天；（位置）在……上面",
    details: [
      {
        videoId: "7473739983698890021",
        exampleEn: "We have a test on Friday.",
        exampleZh: "我们周五有个测验。",
        note: "别背「等于一天用 on」的口诀——on 的本意是「单位一」：具体到某一天就用 on（on Friday、on Monday morning、on May 1st、on January 1st, 2024）。对比：at 是「点」，in 是「范围」。"
      }
    ]
  },
  {
    word: "this",
    pos: "指示代词",
    ipa: "/ðɪs/",
    meaning: "这，这个（近处单数）",
    details: [
      {
        videoId: "7475673515203628351",
        exampleEn: "This is my book.",
        exampleZh: "这是我的书。",
        note: "四兄弟：this 这个（近单）/ that 那个（远单）/ these 这些（近复）/ those 那些些（远复）。距离定 this/that，数量定单复。延伸：the other one 另一个、another one 再来一个。"
      }
    ]
  },
  {
    word: "another",
    pos: "代词 / 形容词",
    ipa: "/əˈnʌðər/",
    meaning: "再来一个；另一个（三者以上中任一）",
    details: [
      {
        videoId: "7475673515203628351",
        exampleEn: "Another one, please!",
        exampleZh: "请再来一个！",
        note: "an + other = 另外的一个。和 the other 区分：another 是「再随便来一个」，the other 是「两者中剩下的那个」。"
      }
    ]
  },
  {
    word: "turn on",
    pos: "短语动词",
    ipa: "/tɜːn ɒn/",
    meaning: "打开（转动开关类）；启动",
    details: [
      {
        videoId: "7503380715166256420",
        exampleEn: "Turn on the tap / the TV / the light.",
        exampleZh: "打开水龙头／电视／灯。",
        note: "不是「带电才能用」！turn 本意是「旋转」——早期电灯电视都是拧着开的，水龙头也是转着开的，所以都算 turn on。对应关闭是 turn off。"
      }
    ]
  },
  {
    word: "open",
    pos: "动词 / 形容词",
    ipa: "/ˈəʊpən/",
    meaning: "打开（移除障碍、张开）；营业的",
    details: [
      {
        videoId: "7503380715166256420",
        exampleEn: "Open the door / the window / the bottle.",
        exampleZh: "开门／开窗／开酒瓶。",
        note: "本意是「移除障碍、新建通道」——门、窗、书、盒子、酒瓶用 open。开灯别说 open the light，老外以为你要拆灯壳修理。"
      }
    ]
  },
  {
    word: "fire",
    pos: "名词 / 动词",
    ipa: "/ˈfaɪər/",
    meaning: "火；解雇；开火；（俚）超棒",
    details: [
      {
        videoId: "7703174805227632634",
        exampleEn: "I'm fired. / I'm fired up. / He's under fire.",
        exampleZh: "我被炒了。／我状态正猛。／他正被众人口诛笔伐。",
        note: "一词多义：get fired 被炒鱿鱼；fired up 兴奋、状态很好；under fire 被批评、受攻击；俚语 That cast is fire（这个阵容绝了）。搭配一换，意思全变。"
      }
    ]
  },
  {
    word: "mutton",
    pos: "名词",
    ipa: "/ˈmʌtn/",
    meaning: "羊肉",
    details: [
      {
        videoId: "7696914922513229750",
        exampleEn: "I like mutton.",
        exampleZh: "我喜欢吃羊肉。",
        note: "I like dog（单数）= 喜欢吃狗肉！喜欢动物本身要说复数 I like dogs。同理「吃肉」类词常是不可数：mutton 羊肉、pork 猪肉、beef 牛肉。"
      }
    ]
  },
  {
    word: "which",
    pos: "关系代词 / 疑问代词",
    ipa: "/wɪtʃ/",
    meaning: "哪个；（引导从句）那个、那些",
    details: [
      {
        videoId: "7701604581146414378",
        exampleEn: "That is the one which I like. = That is the one. + Which one? + Which I like.",
        exampleZh: "那就是我喜欢的那一个。",
        note: "从句的本质是「自问自答」：先说 That is the one，对方心里冒出 Which one?，你再补一句 which I like 回答它——两句拼起来就是从句。"
      }
    ]
  },
  {
    word: "dog eat dog",
    pos: "习语",
    ipa: "/dɒɡ iːt dɒɡ/",
    meaning: "狗咬狗；残酷竞争、弱肉强食",
    details: [
      {
        videoId: "7585498405812620587",
        exampleEn: "It's a dog-eat-dog world in this industry.",
        exampleZh: "这个行业就是弱肉强食。",
        note: "拆字：dog（狗）+ eat（吃）+ dog（狗）。形容词用法要加连字符：a dog-eat-dog world / competition。"
      }
    ]
  },
  {
    word: "greenhouse",
    pos: "名词",
    ipa: "/ˈɡriːnhaʊs/",
    meaning: "温室，暖房",
    details: [
      {
        videoId: "7585498405812620587",
        exampleEn: "We grow tomatoes in a greenhouse.",
        exampleZh: "我们在温室里种西红柿。",
        note: "green（绿色）+ house（房子）= 房子里种满绿色植物 → 温室。高频搭配 greenhouse effect（温室效应）、greenhouse gas（温室气体）。"
      }
    ]
  },
  {
    word: "lucky money",
    pos: "名词短语",
    ipa: "/ˈlʌki ˈmʌni/",
    meaning: "压岁钱",
    details: [
      {
        videoId: "7585498405812620587",
        exampleEn: "Kids get lucky money at Spring Festival.",
        exampleZh: "孩子们过年收压岁钱。",
        note: "lucky（幸运的）+ money（钱）= 带来好运的钱 → 压岁钱。也说 lucky money in red envelopes（红包里的压岁钱）。"
      }
    ]
  },
  {
    word: "ladylike",
    pos: "形容词",
    ipa: "/ˈleɪdilaɪk/",
    meaning: "优雅端庄的，淑女的",
    details: [
      {
        videoId: "7585498405812620587",
        exampleEn: "She spoke in a ladylike manner.",
        exampleZh: "她说话举止优雅。",
        note: "lady（淑女）+ like（像）= 像淑女一样 → 优雅端庄。同类构词：doglike（忠诚如犬）、childlike（天真如孩童）。"
      }
    ]
  },
  {
    word: "lovesick",
    pos: "形容词",
    ipa: "/ˈlʌvsɪk/",
    meaning: "害相思病的，为爱憔悴的",
    details: [
      {
        videoId: "7585498405812620587",
        exampleEn: "He is lovesick after she left.",
        exampleZh: "她走后他害了相思病。",
        note: "love（爱）+ sick（病）= 因爱而得病 → 相思病。同类构词：homesick（想家的）、seasick（晕船的）、carsick（晕车的）。"
      }
    ]
  },
  {
    word: "manage",
    pos: "动词",
    ipa: "/ˈmænɪdʒ/",
    meaning: "管理；设法做到",
    details: [
      {
        videoId: "7585498405812620587",
        exampleEn: "Manage your time well.",
        exampleZh: "管理好你的时间。",
        note: "拆字记忆：man（男人）+ age（年纪）——男人上了年纪就得管理好自己。另一个高频用法：manage to do sth（设法做成某事）。"
      }
    ]
  },
  {
    word: "on earth",
    pos: "短语",
    ipa: "/ɒn ɜːθ/",
    meaning: "（加强语气）究竟，到底；在世上",
    details: [
      {
        videoId: "7438256381255339300",
        exampleEn: "I love my dog more than any other person on earth.",
        exampleZh: "我爱我的狗胜过世上任何人。",
        note: "字面「在地球上」→ 引申「世上（没有人/东西）」；放进疑问词后变成加强语气：What on earth do you want?（你到底想要什么？）注意 earth 与 any other、person 的连读。"
      }
    ]
  },
  {
    word: "was",
    pos: "动词（be 过去式）",
    ipa: "/wɒz/",
    meaning: "is/am 的过去式（我/他/她/它曾……）",
    details: [
      {
        videoId: "7574060932885441652",
        exampleEn: "I was. You were. He was. She was. It was. We were. They were.",
        exampleZh: "be 动词过去时全家福：单数用 was（I/he/she/it），复数和 you 用 were。",
        note: "视频用「was wa was」节奏洗脑：现在时 I am / You are / He is，过去时 I was / You were / He was——跟着原视频念三遍就刻进脑子。"
      }
    ]
  }
];
