/* ============================================
   老师名单（首页「老师频道」用）
   ── 扩充方式：往 TEACHERS 数组追加 {name, url, note}
   ── url 用抖音主页真实地址（user/sec_uid）
   ============================================ */

const TEACHERS = [
  {
    name: "Sharon老师",
    url: "https://www.douyin.com/user/MS4wLjABAAAAZH8LsD--JwEugHJ1EzdfNvEMnnouzO-9BMs9e-2Lx2Do0wRcugg-rnc--L2r6bQC",
    note: "英语口语 · 单词速记"
  },
  {
    name: "大英奇侠传",
    url: "https://www.douyin.com/user/MS4wLjABAAAA4NUbvgec0wXoInZcnJFdnRBdlcugIi-47TUFdThYuiodJAbBnMrNuDkL-15hNDa4",
    note: "情景剧演单词辨析"
  },
  {
    name: "五三英语木老舅",
    url: "https://www.douyin.com/user/MS4wLjABAAAALmTBhkyOkuZZu2JQO2bbfq0_3tJNeNOlAQYVeejdb8tjzLSxipVN-jvAc0nsyBhG",
    note: "课堂随拍 · 单词速记"
  },
  {
    name: "我是媛媛（在学英语）",
    url: "https://www.douyin.com/user/MS4wLjABAAAAFZlKqW2RfDLV6BozWcj9bGb4BkcHvPq6aNIIXrqoc8w",
    note: "自学英语 · 日常口语"
  },
  {
    name: "王哪写英语",
    url: "https://www.douyin.com/user/MS4wLjABAAAAcWp4MexoJ7NQd3txOpmSRXD7KnReaqEL4HSHk71hixzUkwenjEILv1VjRhe5ECDp",
    note: "单词速记 · 影视梗联想"
  },
  {
    name: "莉雅老师",
    url: "https://www.douyin.com/user/MS4wLjABAAAAfpT8i3U01qTLy1GLuFvHScudRFgPPIgk_C9ZgcVv3wM",
    note: "英语发音 · 音标纠音"
  },
  {
    name: "剧会背单词",
    url: "https://www.douyin.com/user/MS4wLjABAAAASvM33JVHDKPE6Xerk23YGBK37XH6ml98ptAUFFbZBSY",
    note: "热剧配音 · 单词洗脑循环"
  },
  {
    name: "大民不乐意学英语",
    url: "https://www.douyin.com/user/MS4wLjABAAAAywvoZQmac5miXC6sn9dBUFWvm3J1AiIc6R1WyfuRSbQ",
    note: "抽象情景剧 · 快乐英语"
  },
  {
    name: "大腿麻了",
    url: "https://www.douyin.com/user/MS4wLjABAAAAB_8FH_76IWlJg-sZQjn_EwA_L2bF2Pb3UpfeTItn7wA",
    note: "天津话课堂 · 搞笑学英语"
  },
  {
    name: "夏夏不温柔（学英语版）",
    url: "https://www.douyin.com/user/MS4wLjABAAAA4Dn8YWZeF4SGOIe7nBFWzpOdtiOSjkh2NIFBrAYJGaY",
    note: "自然拼读 · 词族速记"
  },
  {
    name: "曲艺老师教英语",
    url: "https://www.douyin.com/user/MS4wLjABAAAAxxvnl8PkFgBFxUhIwJHvKL3cDfBynDbpuBCQN8MIkN8",
    note: "词根词缀 · 神话记单词"
  },
  {
    name: "椰汁鱼（月更都费劲版",
    url: "https://www.douyin.com/user/MS4wLjABAAAAvW1iYrBo4P_u8dNxpHK-6u9tGAP0cxVZcNKXTdqfznmcpJ9py0q-0QnzINi1VwSb",
    note: "方言梗 · 英语趣配音"
  },
  {
    name: "MrYang 杨家成🔥",
    url: "https://www.douyin.com/user/MS4wLjABAAAAuyURLEHBlHsyEXQY3t8eqOLBNlvecSR180vBVEf9uMQ",
    note: "情景短剧 · 自然拼读"
  },
  {
    name: "此时",
    url: "https://www.douyin.com/user/MS4wLjABAAAABSCx653V_wrtkZZUY62bSw6aMY9KOblEVyMWLLb9O7s",
    note: "口语跟读 · 连读弱读"
  },
  {
    name: "豆苗妈妈（口语娃启蒙方法）",
    url: "https://www.douyin.com/user/MS4wLjABAAAAllQuYpIUsti4vPfRs6_ajIsHq_5DvnRdutH2JeTuwIs",
    note: "双语宝宝 · 英语启蒙"
  },
  {
    name: "张俊杰讲英语-好学好课",
    url: "https://www.douyin.com/user/MS4wLjABAAAApYU9i5tnkp_gcBdIl1-5j1HEee2mU8X4qTXWJQDgSOr9jy0uvl1R5Jy2Be5jDR7v",
    note: "讲本意 · 拒绝死背口诀"
  },
  {
    name: "英语可莉老师",
    url: "https://www.douyin.com/user/MS4wLjABAAAAsOarcy2suSsUYC1x9QEQpy5PXpktH-nBAXB-ngVoYmyu3zzEsB53Qh6f-IkYvHHe",
    note: "一分钟语法 · 生活英语"
  },
  {
    name: "飞凡满分英语",
    url: "https://www.douyin.com/user/MS4wLjABAAAARkJBHKXp_jmSRmOnoCV--WSCci2jo_CtKH9NitAJWrNOinJwcwTebFxhUvamT-Em",
    note: "词汇本意 · 趣味英语"
  },
  {
    name: "章章（英语学习中～）",
    url: "https://www.douyin.com/user/MS4wLjABAAAA65HDagViY50sY2OA-SI960CzkavbtCODKOVOSBssDDxZuw42UhFoJvERHRBejTDh",
    note: "口语交流 · 一词多义"
  },
  {
    name: "Mina 学英语",
    url: "https://www.douyin.com/user/MS4wLjABAAAANheSGV3nMOLAHnqFBATg0FybemipaiuDgFsDYJBKRxA",
    note: "对话练习 · 单复数辨析"
  },
  {
    name: "黑马王子",
    url: "https://www.douyin.com/user/MS4wLjABAAAAzUU3HooqdumZ7rx9zKz7gSgjD3vmbovB0IUOJIsREUyWiDTUz2yrOARrTaQOhcnh",
    note: "长期主义 · 学习路线规划"
  },
  {
    name: "史瑞杰谈英语",
    url: "https://www.douyin.com/user/MS4wLjABAAAA-Ui1c9V7a0JE7WCrgBP_a8SEv2A7wiU6qeDCC-Gb7duVJWMEuGTWdOcVRo78ir1m",
    note: "从句本意 · 拒绝死记硬背"
  },
  {
    name: "大天使英语 icey",
    url: "https://www.douyin.com/user/MS4wLjABAAAAupmIxGLW9W3GZZmVRXT4WX5LzvHvbCM1WGxBOq8JRwQ",
    note: "听力口语 · 正确发音"
  },
  {
    name: "English老儿",
    url: "https://www.douyin.com/user/MS4wLjABAAAAFjbhePkj3SQAPDzkLHYM-XRnnj5mHUx_LmXG0Yr2enEywdYbXVdigRTeTSuW04gV",
    note: "洗脑节奏 · 基础语法"
  },
  {
    name: "CoachShane",
    url: "https://www.douyin.com/user/MS4wLjABAAAAkplEit9LHbt69UbU2MkpIJfg8AGshI2Bt2bpKzIZOkO8vTQr0P6WNQhhHctm-ded",
    note: "美式口语 · 地道表达"
  },
  {
    name: "路西法",
    url: "https://www.douyin.com/user/MS4wLjABAAAANrJnizxv-nYuaShaY-6FlVxYBhpJJ1yTbs2HNAHjeMo",
    note: "口语连读 · 螺蛳粉岛教学"
  },
  {
    name: "soph1ee",
    url: "https://www.douyin.com/user/MS4wLjABAAAA0Tjw0CNfQWV-ydKrCZIg20gVcOCItyOoMFB123euylA",
    note: "影视配音 · 台词级口语"
  },
  {
    name: "耳东陈英语",
    url: "https://www.douyin.com/user/MS4wLjABAAAA-rClfxtQwdygNoAavQuqt-jjQpKqbFaIGox0f_5NWUS92a5axJuE4RXyB2DaBKKa",
    note: "一分钟口语 · 零基础"
  },
  {
    name: "瑞哥英语_RyanChen",
    url: "https://www.douyin.com/user/MS4wLjABAAAAk4t01LzQZQuWamv6xtB5qoqhO8a7Df3lhC6fZXIsewU",
    note: "全英文 Vlog · 美食文化"
  },
  {
    name: "跟大Mon学听力口语",
    url: "https://www.douyin.com/user/MS4wLjABAAAADNf8_RmsojPjQ6OyBDd7VzkwrdAcT55Apck3f6u_pTs",
    note: "精听拆解 · 连读弱读"
  },
  {
    name: "英语口语屋",
    url: "https://www.douyin.com/user/MS4wLjABAAAAuws5yz6u2gFxHSFSFh5Fz2POsFP28m9U5vVjSNnniDQ",
    note: "影视混剪 · 每日一词"
  },
  {
    name: "Bella口语笔记",
    url: "https://www.douyin.com/user/MS4wLjABAAAAcaU0DuvtsSuMUQU82Da64de5su98sEFnr-mPLKfK5qs",
    note: "万能句型 · 口语笔记"
  },
  {
    name: "BeijingwithCici",
    url: "https://www.douyin.com/user/MS4wLjABAAAAQQ-4gw6vn7J16RJuc8X1oxxfbW2TA6d8qpctuM-3UugfA34YedA6ApuNsxaExgbj",
    note: "英语导游 · 北京文旅"
  },
  {
    name: "九安打袋鼠",
    url: "https://www.douyin.com/user/MS4wLjABAAAAGcrs3L2kL7f_QQkxyc1kdfdMtBSoTZ08KagFuEKTS8mtaQjI-LpAYz2VOhEpV5hK",
    note: "老外口头禅 · 洋腔洋调"
  },
  {
    name: "Scott学口语",
    url: "https://www.douyin.com/user/MS4wLjABAAAA-6Kx9tJHfGgq4f6HcN0f1K_4AZTw0OPA3lmqz83nw_Y",
    note: "发音原理 · 美式读法"
  },
  {
    name: "煜英英语学堂",
    url: "https://www.douyin.com/user/MS4wLjABAAAA11Pui_mEi9Gq3ffZRRW4nLw9ZHTamX1QtLaHnDQUPekzyfYxkNgG988idCTroflo",
    note: "词根词缀 · 一串记单词"
  },
  {
    name: "安妮英语说",
    url: "https://www.douyin.com/user/MS4wLjABAAAA7eg798r_EcRZaLyL1ljx9_wJ81J0ebHdGlLJItrHJ6uPxVzvSTgzP3zPAqxiTdF-",
    note: "发音秘诀 · 连读跟练"
  },
  {
    name: "好哥成长记（英语版）",
    url: "https://www.douyin.com/user/MS4wLjABAAAArt3j1v8A1LKm-kMz4kmoPQz3dL06-3Zx4XGBBTNhBsU",
    note: "小学生博主 · 自然拼读词族"
  }
];
