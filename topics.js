/* ============================================
   学习专题库（二级页面 learn.html 用）
   ── 三个分类：method 学习方法 / grammar 语法用法 / pronunciation 发音
   ── 扩充方式：往 TOPICS 数组追加一条
      { cat, title, brief, from:[视频ID], points:[...每条一段], tip }
   ============================================ */

const TOPICS = [
  /* ============ 情境口语（旅游/场景） ============ */
  {
    cat: "travel",
    title: "英语导游词：用英语介绍北京",
    brief: "来自北京英语导游 Cici：文旅讲解的完整范本，介绍任何家乡城市都能套用。",
    from: ["7700168617112154475"],
    points: [
      "开场定调：I love Beijing —— 先给情绪，再给信息，观众才会跟下去。",
      "介绍类口语的万能骨架：①定位（这是哪里、有什么地位）②亮点细节（挑 2-3 个最有画面的）③个人推荐（我最喜欢的是……）。",
      "类比句式超好用：X is like the Y of China（X 就像中国的 Y）—— Inner Mongolia is like the Texas of China 同款（见瑞哥烧麦视频）。",
      "导游词的高频句型：make sure you...（一定要……）、you have to try...（你必须尝尝……）、it's famous for...（以……闻名）。"
    ],
    tip: "把自己家乡套进这个骨架，录一遍语音，就是最好的口语作业。"
  },

  /* ============ 写作 ============ */
  {
    cat: "writing",
    title: "作文高级开头：跟 I think 说再见",
    brief: "来自飞凡满分英语：阅卷老师看到 I think 就困。",
    from: ["7490090039070772514"],
    points: [
      "I think → as far as I am concerned（就我而言）/ from my point of view（在我看来）。",
      "更高一级：it goes without saying that（不言而喻）、it can be said with certainty that（可以肯定地说）。",
      "嫌长？记短版：to my mind、in my view、I would argue that。",
      "同样的观点，换了开头句，卷面档次立刻不同——而且字多还能凑字数。"
    ],
    tip: "准备 3 个开头句轮换使用，全卷只用一个也行，但别用 I think。"
  },

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
    from: ["7683775454976675098", "7309824740489727270", "7397295409426631962"],
    points: [
      "有用的一面：组合音像拼音一样拼词，ack + fla + ip 三步拼出 backflip；an 一个组合音带出 plan/pan/tan/can 一千多个同类词。",
      "组合音总共只有一百多个——学会这一百多个「零件」，大部分单词都能自己拼出来。",
      "局限的一面：good 里的 oo 读 /ʊ/，不是 food/moon 里的 /uː/——英语拼写例外很多，一个字母多种读音、一个音多种拼法都存在。",
      "结论：拼读帮你「猜个八九不离十」，但最终发音要靠多听真人口音、多模仿。"
    ],
    tip: "拿不准的词，回到词库点「去抖音看这条讲解」，听原声最稳。"
  },
  {
    cat: "method",
    title: "长期学习路线图：从 3000 词到雅思 7 分",
    brief: "来自黑马王子：一个可抄的四阶段计划。",
    from: ["7703210489707153898"],
    points: [
      "阶段①打底（约 3000 词）：学完新概念 1-3 册，每天练听、说、读、写——注意新概念只是打底，别指望它管到考试。",
      "阶段②进阶（约 5000 词）：新概念 + 《走遍美国》 + BBC 听力，持续练口语和阅读。",
      "阶段③雅思入门（7000-8000 词）：熟悉题型，做真题，练做题技巧。",
      "阶段④冲刺：全套真题模拟考试节奏，找老师批改作文。",
      "核心心态：学英语是长期 + 执行力的事，学新概念的同学距离考试还有很长的路，唯有坚持。"
    ],
    tip: "把大目标拆成「词数 + 材料」的阶段指标，每周可检查。"
  },
  {
    cat: "method",
    title: "精听拆解法：一个月听力突飞猛进",
    brief: "来自跟大Mon：把每一句拆到连读弱读，才算真的听过。",
    from: ["7699880057153637667"],
    points: [
      "选一段 1-2 分钟的影视/动画片段，逐句精听，不是泛听刷量。",
      "拆每句的三层：①词义（has got = has）②连读（getting up、all the way）③弱读（快读时 t 几乎消失）。",
      "自造词也别放过：RELAXINATOR 3000 = relax + 科技感后缀 -ator + 型号——懂构词法，生词也能猜。",
      "精听一个月 > 泛听一年：耳朵只认「你嘴里说得出的音」。"
    ],
    tip: "每天只精听 5 句，但每一句都要跟读到和原声一样快。"
  },

  /* ============ 语法用法 ============ */
  {
    cat: "grammar",
    title: "have vs there be：本身自带 vs 外来存在",
    brief: "来自飞凡满分英语：树上有鸟到底怎么说？",
    from: ["7687175403730898210"],
    points: [
      "口诀：本身自带用 have，外来存在 there be。",
      "have 的条件：东西是主语「本身拥有/包含/作为一部分」——I have a pen、the table has four legs、the tree has leaves（树叶是树的一部分）。",
      "there be 的条件：东西只是「存在于那里」，不是主语的一部分——there is a bird in the tree（鸟不是树长出来的）、there is a book on the desk。",
      "判断只需一问：这东西是这个主语「长出来/配置的」吗？是 → have；只是待在那儿 → there be。"
    ],
    tip: "树上有叶子 has leaves ✓（叶子是树的），树上有鸟 there is a bird ✓（鸟是外来的）。"
  },
  {
    cat: "grammar",
    title: "从句的本质：一场「自问自答」",
    brief: "来自史瑞杰谈英语：彻底理解 why 从句长那样。",
    from: ["7701604581146414378"],
    points: [
      "对话原型：That is the one.（就是那个）→ 对方心里疑问 Which one?（哪个？）→ 补答 Which I like.（我喜欢的那格）。",
      "把疑问句省掉、直接把回答贴到名词后面，就成了从句：That is the one which I like.",
      "生活版：Mom, did you see the phone? → Which phone? → The phone which I left on the table.（前句的 the phone + 后句的回答 = 完整从句）",
      "所以从句 = 主句在回答一个潜在疑问。以后看到从句，试着还原出「被省略的那个问题」，结构立刻清晰。"
    ],
    tip: "看到 which/that 从句，先问自己：它在回答谁的哪个疑问？"
  },
  {
    cat: "grammar",
    title: "一句话记八大时态：你妈揍你版",
    brief: "来自五三英语木老舅：最接地气的时态课。",
    from: ["7672324746943401242"],
    points: [
      "一般现在时：你妈天天揍你（习惯、常态）。",
      "一般过去时：昨天你妈揍了你 ／ 一般将来时：你妈一会要揍你。",
      "现在进行时：你妈正在揍你 ／ 过去进行时：昨晚9点你妈正在揍你。",
      "现在完成时：你妈已经揍完你了 ／ 过去完成时：上学前你妈就已经揍完你了。",
      "过去将来时：昨天你妈说要揍你。",
      "本质：时态 = 时间（何时）+ 状态（做没做完、进不进行）的组合，动作不变，时间轴一变时态就变。"
    ],
    tip: "自己拿一个动词（比如「吃饭」）照这八句各造一句，十分钟记住八大时态。"
  },
  {
    cat: "grammar",
    title: "be 动词变形：一首节奏歌记全",
    brief: "来自 English老儿：I am / You are / He is…",
    from: ["7574060932885441652"],
    points: [
      "现在时：I am / You are / It is / He is / She is / We are / They are。",
      "过去时：I was / You were / It was / He was / She was / We were / They were。",
      "规律：I 永远配 am/was；you 和复数配 are/were；第三人称单数配 is/was。",
      "跟「was wa was」的节奏念三遍，变形就是肌肉记忆。"
    ],
    tip: "口诀：我 am 你 are，is 跟着他她它；过去 was/were 换一茬。"
  },
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
    title: "连读入门：a lot of = a lotta",
    brief: "来自路西法：连读不是「说得快」，是有固定规律的。",
    from: ["7352824741117332776"],
    points: [
      "a lot of → a lotta：of 弱读，T 浊化成 D 的音（美音「闪音」）。",
      "同样的 T 浊化：water 听起来像 wader——这不是读错，是美音标准现象。",
      "going to → gonna：What are you gonna do? what are 还能进一步连成 whaddaya。",
      "Where are you from? 口语里 are 轻到几乎消失——正确性上 R 在，实际上听不见。",
      "out of → outta：get out of here 说快了就是 get outta here。"
    ],
    tip: "先单独练 lotta / gonna / outta 三个「熟脸」，听力立刻解锁一票句子。"
  },
  {
    cat: "pronunciation",
    title: "听力就是口语：发音学错就永远听不出",
    brief: "来自大天使英语 icey：then、any other、on earth 三连。",
    from: ["7438256381255339300"],
    points: [
      "核心：听力就是口语。单词发音学的是错的，你只能听懂错的英语。",
      "then 的 th 读 /ð/：舌尖轻轻碰一下上齿背，不是 /zen/ 也不是 /den/。",
      "舌头不灵巧？其实你在 any other 里早就发对这个音了——any other 连读自带同样的舌尖动作。",
      "把 person on earth 读对读熟，整句 I love my dog more than any other person on earth 自然就「听得清」了。"
    ],
    tip: "纠正一个错音 = 同时解锁听力和口语，性价比最高的一件事。"
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
  },
  {
    cat: "pronunciation",
    title: "t 的鼻腔爆破：mountain 为什么「听不见 t」",
    brief: "来自 Scott学口语：不是吞音，是气流改走鼻子。",
    from: ["7700234550450159481"],
    points: [
      "mountain / button / mitten / certain / curtain / written——都是 t+n 组合，读法相同。",
      "要领：舌头摆好 t 的位置，喉咙阻断一下，气流从鼻子出去，舌位不动最省力。",
      "常见错误是直接把 t 吞掉——口形和舌位必须做出来，只是不放气流。",
      "慢速说话时请用标准读法：清晰、正确、好听，省力读法只属于快语速。"
    ],
    tip: "拿 written 练：written ✓ / writen ✗——阻断感在，音就在。"
  },
  {
    cat: "pronunciation",
    title: "连读跟练：let us / it's gonna",
    brief: "来自安妮英语说的两条跟练：跟着念十遍，音调立刻像 native。",
    from: ["7702004251871390331", "7703108575652881786"],
    points: [
      "let us 读成一个音节 /ˈletəs/：Let us know. / Let us begin. / Let us try it again.",
      "going to 永远揉成 gonna：It's gonna be good / crazy / interesting.",
      "跟练方法：先慢速夸张地把两个词粘住，再加速到正常语速。",
      "听力里听不出 let us / gonna，多半不是生词问题，是嘴巴没做过这个动作。"
    ],
    tip: "嘴巴会说的音，耳朵才听得见——每天 1 分钟跟练胜过 1 小时干听。"
  },
  {
    cat: "method",
    title: "词根记词法：一个 port 换十一个词",
    brief: "来自煜英英语学堂：词根就是单词的「偏旁部首」。",
    from: ["7703364995695203705"],
    points: [
      "port = 搬运：airport 运人、seaport 运货、passport 通关的「证」。",
      "加前缀变方向：im-进→import 进口，ex-出→export 出口，trans-跨→transport 运输，de-离开→deport 驱逐出境。",
      "加身下/身后：sub 下撑住→support 支持；re 往回→report 报告（带回来的信息）。",
      "先记词根，再用「偏旁」推生词——遇到没背过的词也能猜个七八分。"
    ],
    tip: "以后每遇到一个新词先拆一遍：有没有认识的词根？拆过一次，终身难忘。"
  },
  {
    cat: "method",
    title: "自然拼读词族：会一个 ip，会一串词",
    brief: "来自好哥成长记（英语版）的小学生演示：换辅音，批量产词。",
    from: ["7703931222740986954"],
    points: [
      "韵脚 -ip 不变，换开头辅音就是新词：lip、tip、hip、zip、ship、chip、slip。",
      "词族背诵 = 声音记忆，不是字母记忆——嘴熟了，拼写自动跟着对。",
      "常用韵脚还有：-at（cat hat bat）、-og（dog log fog）、-ake（cake lake make）。",
      "适合零基础和小朋友：一次只学一个韵脚，一晚上拿下一串词。"
    ],
    tip: "每周挑一个词族，全家比赛谁说得多——玩着就把词背了。"
  },
  {
    cat: "method",
    title: "美剧精听法：三遍盲听 + 逐句拆解",
    brief: "来自跟大Mon学听力口语：坚持一个月，听力突飞猛进的完整流程。",
    from: ["7233705323196960057"],
    points: [
      "第一遍盲听抓大意，第二遍对着字幕听，第三遍逐句跟读——三遍缺一不可。",
      "重点拆「听力死穴」：gonna 揉音、go in 的 w 滑动、pick up some 连成一串。",
      "顺手收集高频搭配：take over 接管、word spread 消息传开、That went well.（反讽：进展真顺利）。",
      "一段 3 分钟的名场面拆干净，胜过泛听一整部剧。"
    ],
    tip: "每天一段，一个月后你会在某天突然发现：他们怎么说得这么慢？"
  }
];
