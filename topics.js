/* ============================================
   学习专题库（二级页面 learn.html 用）
   ── 三个分类：method 学习方法 / grammar 语法用法 / pronunciation 发音
   ── 扩充方式：往 TOPICS 数组追加一条
      { cat, title, brief, from:[视频ID], points:[...每条一段], tip }
   ============================================ */

const TOPICS = [
  /* ============ 学习方法 ============ */
  {
    cat: "method",
    title: "词根词缀法：背一串，顶一打",
    brief: "来自曲艺老师两期词源视频：抓住词根，一批单词一起拿下。",
    from: ["7496800012475583771", "7512377259924278579"],
    points: [
      "muse（缪斯女神，掌管艺术）→ music 音乐 → musical 音乐的 → musician 音乐家 → museum 博物馆（-um 是「地点」后缀）→ amuse 逗乐 → amusement 娱乐。记住一个女神，带走六个词。",
      "flor-（花，来自花神 Flora）→ flower 花 → floral 花的 → florist 花商 → flourish 像花一样绽放 = 繁荣。",
      "常用后缀速记：-al 多为形容词（「的」）、-ist 是「做某事的人」、-ian 是「人」、-um/-ium 常是「地点」、-ment 是名词后缀、-ish 是动词后缀（「使……」）。",
      "好处：忘了一个词时，可以顺着词根推回来；坏处几乎没有，适合初中以上系统使用。"
    ],
    tip: "先记词根的意思，再挂后缀——顺序别反。"
  },
  {
    cat: "method",
    title: "词族记忆法：认识一个结尾，一记记一批",
    brief: "来自夏夏不温柔的 -ple 视频：同族词打包背。",
    from: ["7694993605581064955"],
    points: [
      "认识「-ple」的读音，这一批就都会了：apple 苹果、people 人们、purple 紫色、couple 情侣、simple 简单、sample 样品、temple 寺庙、example 例子。",
      "和词根法是一回事：把拼写相近、读音相同的词归成一族，背一个等于复习八个。"
    ],
    tip: "在词库首页点单词下面的小标签，就能看它属于哪一族。"
  },
  {
    cat: "method",
    title: "场景联想法：把单词钉进画面里",
    brief: "来自大腿麻了、大民、王哪写、剧会的剧情类视频。",
    from: ["7219238687979097344", "7683466260394973691", "7499776860960902400", "7528763634509040959", "7664951600720620217"],
    points: [
      "crucial（极其重要）——校长要来听课，这节课就很 crucial。有情节、有画面、有笑点，比干背例句牢十倍。",
      "school（学校）——孩子在学校挨打，家长慌乱中才想起「学校是我四姑开的」。一个荒诞剧情记住一个词。",
      "retribution（报应）——配《甄嬛传》台词反复出现；curious / celebrate——热剧配音循环十几遍，想忘都难。",
      "核心：让单词跟「情绪+画面」绑定，而不是跟中文释义绑定。"
    ],
    tip: "看完视频闭上眼回想那个画面，再回忆单词，效果翻倍。"
  },
  {
    cat: "method",
    title: "拆字联想法：把生词拆成熟词",
    brief: "来自五三英语木老舅、媛媛、杨家成的视频。",
    from: ["7570641230193248435", "7461807110674812172", "7309824740489727270"],
    points: [
      "seesaw 跷跷板 = see（看见的过去式 saw）+ 字母 C；underdog 弱者 = under（下面）+ dog（被狗打趴下）；lipstick 口红 = lip（唇）+ stick（棍）。",
      "backflip 后空翻 = back（向后）+ flip（翻转）——长单词拆成两块，立刻不怕。",
      "拆出来的小词都是你认识的，生词就变成了「熟词拼图」。"
    ],
    tip: "自己遇到新单词也可以试拆：先找认识的「零件」。"
  },
  {
    cat: "method",
    title: "自然拼读：好用，但别迷信",
    brief: "来自莉雅老师和杨家成的两期视频，正反两面都讲了。",
    from: ["7683775454976675098", "7309824740489727270"],
    points: [
      "有用的一面：组合音像拼音一样拼词，ack + fla + ip 三步拼出 backflip，零基础也能开口。",
      "局限的一面：good 里的 oo 读 /ʊ/，不是 food/moon 里的 /uː/——英语拼写例外很多，一个字母多种读音、一个音多种拼法都存在。",
      "结论：拼读帮你「猜个八九不离十」，但最终发音要靠多听真人口音、多模仿。"
    ],
    tip: "拿不准的词，回到词库点「去抖音看这条讲解」，听原声最稳。"
  },

  /* ============ 语法用法 ============ */
  {
    cat: "grammar",
    title: "at / on / in 时间介词：点、一、范围",
    brief: "来自张俊杰老师：别背口诀，理解本意一套通吃。",
    from: ["7473739983698890021"],
    points: [
      "at 是「点」：at five o'clock、at noon（正午十二点这个点）、at night（天全黑的那一刹那）。跟「大于小于一天」没关系，它就是时间点。",
      "on 是「单位一」：一天、一天中的早晨/晚上——具体到某一天就用 on：on Friday、on Monday morning、on May 1st、on January 1st, 2024。",
      "in 是「范围」：in two hours、in a week（一周七天不是一天！）、in summer、in 2024。",
      "组合运用：in January（一月是范围）→ on January 1st（具体到某天）→ at 5 o'clock, January 1st, 2024（具体到时刻的点）。"
    ],
    tip: "点 → at；某一天 → on；范围 → in。想本意，不背口诀。"
  },
  {
    cat: "grammar",
    title: "指示代词与「一个/另一个」全家桶",
    brief: "来自英语可莉老师：一张嘴全捋清。",
    from: ["7475673515203628351"],
    points: [
      "this 这个（近·单）/ that 那个（远·单）/ these 这些（近·复）/ those 那些（远·复）——距离定 this/that，数量定单复。",
      "both 两个都 / either 任何一个。",
      "this one 这一个 / the other one 另一个（两者中剩下那个）/ another one 再来一个（随意再来一个）。",
      "another = an + other：三者以上再任取一个；the other 特指「剩下的那个」。"
    ],
    tip: "伸手比划：够得着 this/these，够不着 that/those。"
  },
  {
    cat: "grammar",
    title: "两个「打开」：turn on 和 open 的本意",
    brief: "来自飞凡满分英语：「带电用 turn on」是错的！",
    from: ["7503380715166256420"],
    points: [
      "turn on 的本意是「旋转着开」：早期电灯没有开关，拧一下就亮；老电视、老汽车也是拧着启动的——所以 turn on the light / the TV / the car。",
      "水龙头也是转着开的 → turn on the tap。它可没带电，「带电用 turn on」的口诀不成立。",
      "open 的本意是「移除障碍、新建通道」：开门、开窗、开书、开箱、开酒瓶。",
      "开灯如果用 open the light，老外会以为你要拆开灯壳修理它。"
    ],
    tip: "拧着开的 → turn on；翻开/张开的 → open。关闭同理：turn off / close。"
  },

  /* ============ 发音 ============ */
  {
    cat: "pronunciation",
    title: "good 的 oo 不是「乌」：/ʊ/ vs /uː/",
    brief: "来自莉雅老师：最容易读错的短音。",
    from: ["7683775454976675098"],
    points: [
      "/uː/（长音）：嘴唇圆且紧、要用肌肉——food、moon、school。",
      "/ʊ/（短音）：嘴放松——good、cook、look、book。",
      "关键：不是把 /uː/ 读短一点，而是嘴型变了，出来的是完全不同的音。",
      "school 里的 oo 是长音 /uː/，别跟 good 混。"
    ],
    tip: "对着镜子说 food → good，看嘴型从「紧张」变「放松」。"
  },
  {
    cat: "pronunciation",
    title: "sure 的地道发音与 for sure",
    brief: "来自莉雅老师：一个读错就变意思的词。",
    from: ["7477051412493421874"],
    points: [
      "sure 地道发音是 /ʃʊr/，读成「舒厄」意思听起来就变了。",
      "高频搭配 for sure（肯定、没问题），发音是连贯的 /fər ˈʃʊr/。"
    ],
    tip: "这个词短，跟着原视频读三遍就能定型。"
  },
  {
    cat: "pronunciation",
    title: "连读与弱读：口语像 native 的秘诀",
    brief: "来自「此时」的跟读视频：四组最容易练的口语提速。",
    from: ["7693424065784382819"],
    points: [
      "it 连读不说断：say it to me —— it 轻轻粘在前一个词后面带过去。",
      "got to → gotta：I gotta go, I gotta work.（书面别写 gotta，听力必须认识）",
      "important 重音在中间：im-POR-tant，前后音节轻快带过——重音错了母语者可能听不出你在说啥。",
      "for 弱读 /fər/：It's for you, it's for me. 不读成重重的「佛尔」。"
    ],
    tip: "跟读三遍定型：连读粘、弱读轻、重音打在正确的音节上。"
  },
  {
    cat: "pronunciation",
    title: "双语启蒙：动物幼崽的专有名词",
    brief: "来自豆苗妈妈：小狗为什么不是 little dog？",
    from: ["7537645748911361314"],
    points: [
      "little dog 指的是「体型小」，不是「年龄小」——幼崽有自己的专有词。",
      "dog → puppy 小狗；cat → kitten 小猫；chicken → chick 小鸡；duck → duckling 小鸭；rabbit → bunny 小兔。",
      "sheep → lamb 小羊；bear → cub 幼兽；pig → piglet 小猪；horse → pony 小马。",
      "这些 -y / -ling / -let 后缀的「小词」是英语里最高频的地道感来源之一。"
    ],
    tip: "成对输入：教 dog 就带上 puppy，地道又成体系。"
  }
];
