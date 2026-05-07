const focusItems = [
  {
    title: "AI 7x24 自动化交易系统",
    summary:
      "把行情监控、策略信号、执行记录与复盘反馈串成自动化闭环，目标是减少手工盯盘和情绪化操作。",
  },
  {
    title: "氟安固能固态锂电池创新项目",
    summary:
      "围绕固态锂电池方向做项目化表达，将能源工程学习、材料创新叙事与竞赛材料沉淀到可展示成果中。",
  },
  {
    title: "Sui Move / Web3 智能合约学习",
    summary:
      "从 Move 语言、对象模型、链上资产与合约安全切入，建立可验证的 Web3 技术学习路径。",
  },
  {
    title: "Bitcoin 长期投资与自动定投研究",
    summary:
      "以长期主义、风险控制、周期数据和自动化执行为核心，做 BTC 定投研究记录，不构成投资建议。",
  },
];

const projects = [
  {
    name: "AI 7x24 自动化交易系统",
    value: "用自动化系统把行情观察、信号生成、执行提醒和复盘记录连接起来。",
    progress:
      "已形成 7x24 运行目标与模块拆分：行情输入、策略规则、通知链路、交易记录、复盘看板。下一步聚焦异常处理、风控阈值和可解释日志。",
    keywords: [
      "AI workflow",
      "automation",
      "trading log",
      "risk control",
      "signal pipeline",
    ],
    status: "Building",
  },
  {
    name: "氟安固能固态锂电池创新项目",
    value:
      "把能源与动力工程背景转化为可参赛、可汇报、可持续迭代的新能源创新项目。",
    progress:
      "项目定位聚焦固态锂电池安全性、能量密度和材料路线表达；正在整理项目叙事、竞赛材料、技术路线和应用场景。",
    keywords: [
      "solid-state battery",
      "energy engineering",
      "competition deck",
      "innovation project",
    ],
    status: "Competition",
  },
  {
    name: "Sui Move / Web3 学习路径",
    value: "从智能合约语言和链上对象模型切入，建立可验证的 Web3 工程学习轨迹。",
    progress:
      "当前重点是 Move 基础语法、Sui 对象模型、资源安全和简单合约案例；后续将沉淀为公开笔记和小型合约 demo。",
    keywords: [
      "Sui Move",
      "smart contract",
      "object model",
      "Web3",
      "security basics",
    ],
    status: "Learning",
  },
  {
    name: "Bitcoin 长期投资与自动定投研究",
    value: "用数据化和规则化方式研究 BTC 长期配置，而不是依赖短期情绪判断。",
    progress:
      "研究框架包括周期观察、定投频率、仓位纪律、回撤承受和执行自动化。公开展示只保留方法论，不展示敏感账户信息。",
    keywords: [
      "Bitcoin",
      "DCA",
      "long-term research",
      "portfolio discipline",
      "not financial advice",
    ],
    status: "Research",
  },
  {
    name: "个人品牌主页 kevinxding.com",
    value: "把项目、荣誉、学习路径和联系方式集中到一个可验证的公开入口。",
    progress:
      "已使用纯 HTML/CSS/JS 构建静态单页，适配 Cloudflare Pages/Workers；当前版本重构为项目作品集导向。",
    keywords: ["static site", "Cloudflare Pages", "portfolio", "public proof"],
    status: "Building",
  },
];

const honors = [
  {
    title: "第18届节能减排国家级三等奖",
    level: "national",
    levelLabel: "国家级",
    type: "image",
    src: "assets/honors/energy-saving-18-national-third.png",
    description: "节能减排方向国家级竞赛材料，支撑能源工程实践经历。",
  },
  {
    title: "第17届节能减排国家级三等奖",
    level: "national",
    levelLabel: "国家级",
    type: "image",
    src: "assets/honors/energy-saving-17-national-third.jpg",
    description: "连续参与节能减排竞赛，形成项目表达和工程实践积累。",
  },
  {
    title: "大学生创新创业训练计划国家级立项",
    level: "national",
    levelLabel: "国家级",
    type: "image",
    src: "assets/honors/national-innovation-project.png",
    description: "创新训练项目立项材料，体现项目化学习和科研训练基础。",
  },
  {
    title: "2025 挑战杯省级一等奖",
    level: "provincial",
    levelLabel: "省级",
    type: "pdf",
    src: "assets/honors/challenge-cup-2025-provincial-first.pdf",
    description: "挑战杯省级一等奖材料，展示创新项目表达与竞赛成果。",
  },
  {
    title: "挑战杯省级二等奖",
    level: "provincial",
    levelLabel: "省级",
    type: "image",
    src: "assets/honors/challenge-cup-provincial-second.jpg",
    description: "挑战杯省级二等奖证书，补充创新竞赛实践证据。",
  },
  {
    title: "iCAN 二等奖",
    level: "provincial",
    levelLabel: "省级",
    type: "pdf",
    src: "assets/honors/ican-provincial-second.pdf",
    description: "iCAN 竞赛材料，覆盖创意、工程实现与展示能力。",
  },
  {
    title: "国创赛三等奖",
    level: "provincial",
    levelLabel: "省级",
    type: "image",
    src: "assets/honors/innovation-competition-provincial-third.png",
    description: "国创赛三等奖材料，记录创新创业竞赛阶段成果。",
  },
  {
    title: "物联网创造力大赛省级二等奖",
    level: "provincial",
    levelLabel: "省级",
    type: "image",
    src: "assets/honors/iot-creativity-provincial-second.jpg",
    description: "物联网创造力大赛证书，补充跨技术方向实践。",
  },
  {
    title: "UNESCO MOOC Certificate",
    level: "international",
    levelLabel: "国际",
    type: "pdf",
    src: "assets/honors/unesco-mooc-certificate.pdf",
    description: "联合国教科文组织 MOOC 证书，记录国际开放课程学习经历。",
  },
];

const timeline = [
  {
    time: "Energy Foundation",
    title: "能源与动力工程学习",
    detail: "建立热工、能源系统、工程问题分析与项目表达的基础。",
  },
  {
    time: "Competition Track",
    title: "节能减排 / 挑战杯 / 大创 / 竞赛实践",
    detail: "通过国家级、省级竞赛和创新训练项目，把学习结果沉淀成可展示材料。",
  },
  {
    time: "Automation Track",
    title: "AI 自动化交易系统构建",
    detail: "把 AI 工作流、监控、通知、日志和复盘连接成可迭代系统。",
  },
  {
    time: "Web3 Track",
    title: "Sui Move / Web3 学习",
    detail: "围绕 Move 智能合约、对象模型和链上资产建立技术学习路径。",
  },
  {
    time: "Public Proof",
    title: "个人网站上线",
    detail: "用 kevinxding.com 承载项目、荣誉、联系方式和持续更新的公开证据。",
  },
];

const focusGrid = document.querySelector("#focusGrid");
const projectGrid = document.querySelector("#projectGrid");
const honorGrid = document.querySelector("#honorGrid");
const timelineList = document.querySelector("#timelineList");
const filterButtons = document.querySelectorAll(".filter-button");
const previewDialog = document.querySelector("#previewDialog");
const previewTitle = document.querySelector("#previewTitle");
const previewImage = document.querySelector("#previewImage");
const closePreview = document.querySelector("[data-close-preview]");

function createTag(text, className = "keyword") {
  const tag = document.createElement("span");
  tag.className = className;
  tag.textContent = text;
  return tag;
}

function renderFocus() {
  const cards = focusItems.map((item, index) => {
    const card = document.createElement("article");
    card.className = "focus-card";

    const number = document.createElement("span");
    number.className = "focus-index";
    number.textContent = `0${index + 1}`;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const summary = document.createElement("p");
    summary.textContent = item.summary;

    card.append(number, title, summary);
    return card;
  });

  focusGrid.replaceChildren(...cards);
}

function renderProjects() {
  const cards = projects.map((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const top = document.createElement("div");
    top.className = "project-top";

    const title = document.createElement("h3");
    title.textContent = project.name;

    const status = document.createElement("span");
    status.className = `status ${project.status.toLowerCase()}`;
    status.textContent = project.status;

    top.append(title, status);

    const content = document.createElement("div");

    const value = document.createElement("p");
    value.className = "project-value";
    value.textContent = project.value;

    const progress = document.createElement("p");
    progress.className = "project-progress";
    progress.textContent = project.progress;

    content.append(value, progress);

    const keywords = document.createElement("div");
    keywords.className = "keyword-list";
    keywords.append(...project.keywords.map((keyword) => createTag(keyword)));

    card.append(top, content, keywords);
    return card;
  });

  projectGrid.replaceChildren(...cards);
}

function createHonorCard(honor) {
  const article = document.createElement("article");
  article.className = "honor-card";
  article.dataset.level = honor.level;

  const media = document.createElement("div");
  media.className = "honor-media";

  if (honor.type === "image") {
    const image = document.createElement("img");
    image.src = honor.src;
    image.alt = honor.title;
    image.loading = "lazy";
    media.append(image);
  } else {
    const pdf = document.createElement("span");
    pdf.className = "pdf-badge";
    pdf.textContent = "PDF";
    media.append(pdf);
  }

  const body = document.createElement("div");
  body.className = "honor-body";

  const meta = document.createElement("div");
  meta.className = "honor-meta";
  meta.append(
    createTag(honor.levelLabel, "tag"),
    createTag(honor.type.toUpperCase(), "tag"),
  );

  const title = document.createElement("h3");
  title.textContent = honor.title;

  const description = document.createElement("p");
  description.textContent = honor.description;

  body.append(meta, title, description);

  if (honor.type === "image") {
    const button = document.createElement("button");
    button.className = "honor-action";
    button.type = "button";
    button.textContent = "预览证书";
    button.addEventListener("click", () => openPreview(honor));
    body.append(button);
  } else {
    const link = document.createElement("a");
    link.className = "honor-action";
    link.href = honor.src;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "打开 PDF";
    body.append(link);
  }

  article.append(media, body);
  return article;
}

function renderHonors(filter = "all") {
  const visible = honors.filter(
    (honor) => filter === "all" || honor.level === filter,
  );
  honorGrid.replaceChildren(...visible.map(createHonorCard));
}

function renderTimeline() {
  const items = timeline.map((item) => {
    const row = document.createElement("article");
    row.className = "timeline-item";

    const time = document.createElement("div");
    time.className = "timeline-time";
    time.textContent = item.time;

    const body = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = item.title;

    const detail = document.createElement("p");
    detail.textContent = item.detail;

    body.append(title, detail);
    row.append(time, body);
    return row;
  });

  timelineList.replaceChildren(...items);
}

function openPreview(honor) {
  previewTitle.textContent = honor.title;
  previewImage.src = honor.src;
  previewImage.alt = honor.title;

  if (typeof previewDialog.showModal === "function") {
    previewDialog.showModal();
    return;
  }

  window.open(honor.src, "_blank", "noreferrer");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderHonors(button.dataset.filter);
  });
});

closePreview.addEventListener("click", () => {
  previewDialog.close();
});

previewDialog.addEventListener("click", (event) => {
  if (event.target === previewDialog) {
    previewDialog.close();
  }
});

renderFocus();
renderProjects();
renderHonors();
renderTimeline();
