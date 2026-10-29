/* ============================================
   Sharon老师单词库（结构化数据库）
   ── 扩充方式：往 WORDS 追加词条，往 VIDEOS 追加视频记录即可
   ============================================ */

// 视频来源库
const VIDEOS = {
  "7681616605867986227": {
    id: "7681616605867986227",
    title: "如何像我一样强得可怕？",
    url: "https://www.douyin.com/video/7681616605867986227",
    date: "2026-03-27",
    summary: "同一个 run，搭配不同意思完全不同：run 是跑，run out of 是「用完耗尽」——学单词要学搭配，不能只背单词本身。"
  }
};

// 词条库
const WORDS = [
  {
    word: "run out of",
    pos: "短语动词",
    ipa: "/rʌn aʊt əv/",
    meaning: "用完，耗尽（某物没有了）",
    exampleEn: "Mom, we ran out of toilet paper!",
    exampleZh: "妈，我们的厕纸用完了！",
    note: "注意过去式 ran out of。run 是跑/运行，但 run out of 是固定搭配，表示「用完」。",
    videoId: "7681616605867986227"
  },
  {
    word: "toilet paper",
    pos: "名词",
    ipa: "/ˈtɔɪlət ˈpeɪpər/",
    meaning: "卫生纸，厕纸",
    exampleEn: "We need to buy more toilet paper.",
    exampleZh: "我们得再买点厕纸。",
    note: "不可数名词，常说 a roll of toilet paper（一卷厕纸）。",
    videoId: "7681616605867986227"
  }
];
