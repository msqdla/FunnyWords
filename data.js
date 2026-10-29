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
    summary: "同一个 run，搭配不同意思完全不同：run 是跑，run out of 是「用完耗尽」——学单词要学搭配，不能只背单词本身。"
  },
  "7684148229830675718": {
    id: "7684148229830675718",
    title: "要是我早知道英语可以这么学的话...",
    url: "https://www.douyin.com/video/7684148229830675718",
    date: "2026-07-30",
    author: "大英奇侠传",
    summary: "用情景剧讲清 damage / destroy / ruin 三个「破坏」的区别：damage 是部分损坏可修、destroy 是彻底毁灭、ruin 可以是心情感受被毁。"
  },
  "7499776860960902400": {
    id: "7499776860960902400",
    title: "百因必有果，你的 retribution 就是我！",
    url: "https://www.douyin.com/video/7499776860960902400",
    date: "2026-07-11",
    author: "王哪写英语",
    summary: "借《甄嬛传》台词反复使用 retribution，靠剧情画面把「报应、惩罚」这个词刻进记忆——影视梗联想法。"
  },
  "7461807110674812172": {
    id: "7461807110674812172",
    title: "嘿，让我在评论区里看到你渊博的知识",
    url: "https://www.douyin.com/video/7461807110674812172",
    date: "2026-09-04",
    author: "我是媛媛（在学英语）",
    summary: "用「C + saw = seesaw（跷跷板）」的拆字联想法记单词：see 的过去式 saw 和字母 C 拼在一起，就成了一个一眼难忘的新词。"
  },
  "7570641230193248435": {
    id: "7570641230193248435",
    title: "不管什么样的方式，最终的目的都是能听懂能记住",
    url: "https://www.douyin.com/video/7570641230193248435",
    date: "2026-02-18",
    author: "五三英语木老舅",
    summary: "用中文谐音和拆字讲一串词：goose egg（鹅蛋→零分）、underdog（被狗打趴下→弱者）、freshman（新人→新生）、lipstick（嘴唇上的棍→口红）——所谓「邪修」就是靠联想硬记。"
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
  }
];
