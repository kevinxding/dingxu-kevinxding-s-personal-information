const honors = [
  {
    title: "第18届节能减排国家级三等奖",
    level: "national",
    levelLabel: "国家级",
    type: "image",
    src: "assets/honors/energy-saving-18-national-third.png",
    description: "全国大学生节能减排相关竞赛材料，体现能源动力方向的工程实践积累。"
  },
  {
    title: "第17届节能减排国家级三等奖",
    level: "national",
    levelLabel: "国家级",
    type: "image",
    src: "assets/honors/energy-saving-17-national-third.jpg",
    description: "连续参与节能减排方向竞赛，用项目结果验证工程问题拆解能力。"
  },
  {
    title: "大学生创新创业训练计划国家级立项",
    level: "national",
    levelLabel: "国家级",
    type: "image",
    src: "assets/honors/national-innovation-project.png",
    description: "围绕项目制学习和科研训练，完成国家级创新训练项目立项。"
  },
  {
    title: "2025 挑战杯省级一等奖",
    level: "provincial",
    levelLabel: "省级",
    type: "pdf",
    src: "assets/honors/challenge-cup-2025-provincial-first.pdf",
    description: "挑战杯省级一等奖材料，展示项目表达、团队协作与创新实践结果。"
  },
  {
    title: "挑战杯省级二等奖",
    level: "provincial",
    levelLabel: "省级",
    type: "image",
    src: "assets/honors/challenge-cup-provincial-second.jpg",
    description: "挑战杯省级二等奖证书，体现持续参与创新竞赛的过程积累。"
  },
  {
    title: "iCAN 二等奖",
    level: "provincial",
    levelLabel: "省级",
    type: "pdf",
    src: "assets/honors/ican-provincial-second.pdf",
    description: "iCAN 相关竞赛二等奖材料，覆盖创意、工程实现与成果展示。"
  },
  {
    title: "国创赛三等奖",
    level: "provincial",
    levelLabel: "省级",
    type: "image",
    src: "assets/honors/innovation-competition-provincial-third.png",
    description: "国创赛三等奖材料，记录创新创业竞赛方向的阶段性成果。"
  },
  {
    title: "物联网创造力大赛省级二等奖",
    level: "provincial",
    levelLabel: "省级",
    type: "image",
    src: "assets/honors/iot-creativity-provincial-second.jpg",
    description: "物联网创造力大赛省级二等奖证书，补充能源工程之外的技术实践维度。"
  },
  {
    title: "UNESCO MOOC Certificate",
    level: "international",
    levelLabel: "国际",
    type: "pdf",
    src: "assets/honors/unesco-mooc-certificate.pdf",
    description: "联合国教科文组织 MOOC 证书，记录国际开放课程学习经历。"
  }
];

const honorGrid = document.querySelector("#honorGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const previewDialog = document.querySelector("#previewDialog");
const previewTitle = document.querySelector("#previewTitle");
const previewImage = document.querySelector("#previewImage");
const closePreview = document.querySelector("[data-close-preview]");

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
    const pdfMark = document.createElement("span");
    pdfMark.className = "pdf-mark";
    pdfMark.textContent = "PDF";
    media.append(pdfMark);
  }

  const body = document.createElement("div");
  body.className = "honor-body";
  body.innerHTML = `
    <div class="honor-meta">
      <span class="tag">${honor.levelLabel}</span>
      <span class="tag">${honor.type.toUpperCase()}</span>
    </div>
    <h3>${honor.title}</h3>
    <p>${honor.description}</p>
  `;

  if (honor.type === "image") {
    const button = document.createElement("button");
    button.className = "honor-link";
    button.type = "button";
    button.textContent = "预览证书";
    button.addEventListener("click", () => openPreview(honor));
    body.append(button);
  } else {
    const link = document.createElement("a");
    link.className = "honor-link";
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
  const visibleHonors = honors.filter((honor) => filter === "all" || honor.level === filter);
  honorGrid.replaceChildren(...visibleHonors.map(createHonorCard));
}

function openPreview(honor) {
  previewTitle.textContent = honor.title;
  previewImage.src = honor.src;
  previewImage.alt = honor.title;

  if (typeof previewDialog.showModal === "function") {
    previewDialog.showModal();
  } else {
    window.open(honor.src, "_blank", "noreferrer");
  }
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && previewDialog.open) {
    previewDialog.close();
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderHonors();
