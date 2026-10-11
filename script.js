// ---- Theme toggle ----
(function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "dark"); // default dark to match reference
  document.documentElement.setAttribute("data-theme", theme);
})();

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

// ---- Align hero outline vertically with the h1 (h1 lives in a narrower
// centered column, so we measure and position the full-width track to match) ----
function alignHeroOutline() {
  const hero = document.getElementById("hero");
  const h1 = document.getElementById("heroName");
  const track = document.getElementById("heroOutlineTrack");
  if (!hero || !h1 || !track) return;
  const heroRect = hero.getBoundingClientRect();
  const h1Rect = h1.getBoundingClientRect();
  const centerY = h1Rect.top - heroRect.top + h1Rect.height / 2;
  track.style.top = centerY + "px";
  track.style.transform = "translateY(-50%)";
}
window.addEventListener("load", alignHeroOutline);
window.addEventListener("resize", alignHeroOutline);
document.fonts && document.fonts.ready.then(alignHeroOutline);
alignHeroOutline();

// ---- Scrolling outline text behind section headings — disabled site-wide,
// hero-only per current design direction. Kept as an opt-in helper. ----
function addHeadingOutlines() {
  return;
}

// ---- Projects data ----
const projects = [
  {
    title: "Automated Daily Ad Campaign Data Processing & Reporting System",
    description:
      "A daily ETL pipeline that extracts Facebook/Meta ad campaign data via API, transforms it into calculated performance metrics, and loads it into live reports. Saves 5–8 staff hours weekly and removes manual data entry error.",
    TechStack: [
      { name: "Make.com", icon: "assets/images/make-color.webp" },
      { name: "Monday.com", icon: "assets/images/monday.svg" },
      { name: "Google Sheets", icon: "assets/images/googlesheet.svg" },
      { name: "Meta API", icon: "assets/images/meta.webp" },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
      {
        name: "OpenAI",
        icon: "assets/images/openai.svg",
      },
    ],
    images: [
      "assets/projects/liberty.png",
      "assets/projects/Liberty1.png",
      "assets/projects/Liberty2.png",
    ],
  },
  {
    title: "Oas Volleyball Alliance Messenger Assistant",
    description:
      "Saved time and improved communication quality by automating replies, organizing conversations, and logging messages into structured records.",
    TechStack: [
      { name: "Make.com", icon: "assets/images/make-color.webp" },
      { name: "Messenger", icon: "assets/images/messenger.svg" },
      { name: "Telegram", icon: "assets/images/telegram.svg" },
      { name: "Meta API", icon: "assets/images/meta.webp" },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
      {
        name: "OpenAI",
        icon: "assets/images/openai.svg",
      },
    ],
    images: [
      "assets/projects/ova.png",
      "assets/projects/ova1.png",
      "assets/projects/ova2.png",
      "assets/projects/ova3.png",
      "assets/projects/ova4.png",
    ],
  },
  {
    title: "AI Calendar Assistant with Memory (GPT-4o-mini + Telegram)",
    description:
      "Fully automated AI calendar assistant that understands natural language text commands, creates/updates/deletes Google Calendar events via Telegram, maintains conversation memory, and operates 24/7 with zero manual input.",
    TechStack: [
      { name: "n8n", icon: "assets/images/n8n-color.webp" },
      { name: "Telegram", icon: "assets/images/telegram.svg" },
      { name: "Google Calendar", icon: "assets/images/google-calendar.svg" },
      {
        name: "OpenAI",
        icon: "assets/images/openai.svg",
      },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
    ],
    images: ["assets/projects/Calendar Agent.png"],
  },
  {
    title: "Automated Volleyball Lead Nurture System with Stripe Payments",
    description:
      "Fully automated 24/7 conversion funnel in Messenger that qualifies volleyball leads by experience, nurtures them over 30 days, handles objections via keywords, and processes Stripe payments, requiring zero human intervention.",
    TechStack: [
      { name: "Manychat", icon: "assets/images/Manychat.png" },
      { name: "Messenger", icon: "assets/images/messenger.svg" },
      { name: "Stripe", icon: "assets/images/Stripe.jpeg" },
      { name: "Meta API", icon: "assets/images/meta.webp" },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
      {
        name: "OpenAI",
        icon: "assets/images/openai.svg",
      },
    ],
    images: [
      "assets/projects/Manychat.png",
      "assets/projects/Manychat1.png",
      "assets/projects/Manychat2.png",
      "assets/projects/Manychat3.png",
      "assets/projects/Manychat4.png",
      "assets/projects/Manychat5.png",
      "assets/projects/Manychat6.png",
      "assets/projects/Manychat7.png",
    ],
  },
  {
    title: "Expense Tracking System with Telegram, OpenAI & Google Sheets",
    description:
      "Reduced manual expense tracking and errors by automating Telegram-based transaction logging with real-time confirmations.",
    TechStack: [
      { name: "Make.com", icon: "assets/images/make-color.webp" },
      { name: "Google Sheets", icon: "assets/images/googlesheet.svg" },
      { name: "Telegram", icon: "assets/images/telegram.svg" },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
      {
        name: "OpenAI",
        icon: "assets/images/openai.svg",
      },
    ],
    images: [
      "assets/projects/Expnse.png",
      "assets/projects/ExpenseT.png",
      "assets/projects/ExpenseTr.png",
    ],
  },
  {
    title:
      "AI-Powered Food Order Processing with Facebook Messenger, Telegram, Google Sheets & Calendar",
    description:
      "Transformed manual order processing into an automated system that handles customer inquiries, validates business hours and inventory, and maintains organized order records with instant staff notifications.",
    TechStack: [
      { name: "n8n", icon: "assets/images/n8n-color.webp" },
      { name: "Messenger", icon: "assets/images/messenger.svg" },
      { name: "Telegram", icon: "assets/images/telegram.svg" },
      { name: "Google Sheets", icon: "assets/images/googlesheet.svg" },
      { name: "Meta API", icon: "assets/images/meta.webp" },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
      {
        name: "OpenAI",
        icon: "assets/images/openai.svg",
      },
    ],
    images: [
      "assets/projects/Food.png",
      "assets/projects/Food I.png",
      "assets/projects/Food II.png",
      "assets/projects/Food III.png",
    ],
  },
  {
    title: "Automated End-of-Day (EOD) CRM Reporting System",
    description:
      "A data pipeline that merges GoHighLevel CRM activity, call logs, and lead records into a structured master log, then uses Gemini AI to classify outcomes and priority before generating a consistently formatted HTML report. Removed the need for manual end-of-day report compilation, with built-in duplicate-record handling and KPI tracking.",
    TechStack: [
      {
        name: "Google Apps Script",
        icon: "assets/images/Google_Apps_Script.svg",
      },
      { name: "Google Sheets", icon: "assets/images/googlesheet.svg" },
      {
        name: "Gemini AI",
        icon: "assets/images/gemini.svg",
      },
      { name: "GoHighLevel", icon: "assets/images/highlevel.png" },
    ],
    images: ["assets/projects/EOD-Report.png"],
  },
];

let currentSlideIndex = 0;

// ---- Mobile menu ----
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

// ---- Smooth scroll ----
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    document.getElementById("navMenu").classList.remove("active");
  });
});

// ---- Navbar active state + back-to-top on scroll ----
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) current = section.getAttribute("id");
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current)
      link.classList.add("active");
  });

  const backToTop = document.getElementById("backToTop");
  if (backToTop) backToTop.classList.toggle("visible", scrollY > 600);
});

// ---- Reveal animation ----
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
document
  .querySelectorAll(".reveal")
  .forEach((section) => observer.observe(section));

// ---- Modal functions ----
function openModal(index) {
  const modal = document.getElementById("projectModal");
  const project = projects[index];

  document.getElementById("modalTitle").textContent = project.title;

  const techContainer = document.getElementById("modalClient");
  techContainer.innerHTML = "";

  if (project.TechStack && project.TechStack.length > 0) {
    const title = document.createElement("h4");
    title.textContent = "Tech Stack:";
    title.className = "tech-stack-title";
    techContainer.appendChild(title);

    const stackWrapper = document.createElement("div");
    stackWrapper.className = "tech-stack";

    project.TechStack.forEach((tech) => {
      const item = document.createElement("div");
      item.className = "tech-item";

      const img = document.createElement("img");
      img.src = tech.icon || "";
      img.alt = tech.name;
      img.title = tech.name;
      img.className = "tech-icon";

      const label = document.createElement("span");
      label.textContent = tech.name;
      label.className = "tech-label";

      item.appendChild(img);
      item.appendChild(label);
      stackWrapper.appendChild(item);
    });

    techContainer.appendChild(stackWrapper);
  }

  document.getElementById("modalDescription").textContent = project.description;

  const slideshowInner = document.getElementById("slideshowInner");
  const slideshowContainer = document.getElementById("modalSlideshow");
  slideshowInner.innerHTML = "";

  if (project.images && project.images.length > 0) {
    slideshowContainer.style.display = "block";
    currentSlideIndex = 0;
    project.images.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${project.title} screenshot ${i + 1}`;
      img.className = "slideshow-image" + (i === 0 ? " active" : "");
      slideshowInner.appendChild(img);
    });
  } else {
    slideshowContainer.style.display = "none";
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function changeSlide(direction) {
  const images = document.querySelectorAll(".slideshow-image");
  if (images.length === 0) return;
  images[currentSlideIndex].classList.remove("active");
  currentSlideIndex =
    (currentSlideIndex + direction + images.length) % images.length;
  images[currentSlideIndex].classList.add("active");
}

function closeModal() {
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

document.getElementById("projectModal").addEventListener("click", (e) => {
  if (e.target.id === "projectModal") closeModal();
});

function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  event.target.reset();
}

window.addEventListener("load", () => {
  document.getElementById("hero").classList.add("visible");
});

// ---- Online certifications ----
// To add a new box: add another { provider, certs } object below.
// To add a photo to a box: add another { title, date, image } to its certs list.
const certifications = [
  {
    provider: "Zapier Academy",
    certs: [
      {
        title: "Jumpstart",
        date: "Oct 1, 2026",
        image: "assets/images/certs/zapier-jumpstart.jpg",
      },
      {
        title: "Building Basic Zaps",
        date: "Oct 1, 2026",
        image: "assets/images/certs/zapier-basic-zaps.jpg",
      },
      {
        title: "Building Intermediate Zaps",
        date: "Oct 1, 2026",
        image: "assets/images/certs/zapier-intermediate-zaps.jpg",
      },
      {
        title: "What is Zapier MCP?",
        date: "Oct 1, 2026",
        image: "assets/images/certs/zapier-mcp.jpg",
      },
    ],
  },
  {
    provider: "n8n Academy",
    certs: [
      {
        title: "n8n Quickstart",
        date: "Sep 10, 2026",
        image: "assets/images/certs/n8n-quickstart.jpg",
      },
      {
        title: "Essentials: Your First Workflows",
        date: "Sep 28, 2026",
        image: "assets/images/certs/n8n-essentials.jpg",
      },
    ],
  },
];

function renderCertifications() {
  const wrap = document.getElementById("certBoxes");
  if (!wrap) return;

  certifications.forEach((group) => {
    const multi = group.certs.length > 1;
    const box = document.createElement("div");
    box.className = "cert-box";

    const slides = group.certs
      .map(
        (c) =>
          `<a class="cert-slide" href="${c.image}" target="_blank" rel="noopener">
            <img src="${c.image}" alt="${group.provider} certificate: ${c.title}" loading="lazy" />
          </a>`,
      )
      .join("");

    box.innerHTML = `
      <h3 class="cert-provider-name">${group.provider}</h3>
      <div class="cert-viewport">
        <div class="cert-track">${slides}</div>
        ${
          multi
            ? `<button class="cert-btn prev" aria-label="Previous certificate">❮</button>
               <button class="cert-btn next" aria-label="Next certificate">❯</button>`
            : ""
        }
      </div>
      <div class="cert-caption">
        <div>
          <h4 class="cert-title"></h4>
          <span class="cert-date"></span>
        </div>
        <span class="cert-count"></span>
      </div>`;

    const track = box.querySelector(".cert-track");
    const titleEl = box.querySelector(".cert-title");
    const dateEl = box.querySelector(".cert-date");
    const countEl = box.querySelector(".cert-count");
    let index = 0;

    function show(i) {
      const total = group.certs.length;
      index = (i + total) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
      titleEl.textContent = group.certs[index].title;
      dateEl.textContent = group.certs[index].date;
      countEl.textContent = multi ? `${index + 1} / ${total}` : "";
    }

    if (multi) {
      box
        .querySelector(".prev")
        .addEventListener("click", () => show(index - 1));
      box
        .querySelector(".next")
        .addEventListener("click", () => show(index + 1));

      // Swipe support on touch devices
      const viewport = box.querySelector(".cert-viewport");
      let startX = null;
      viewport.addEventListener(
        "touchstart",
        (e) => (startX = e.touches[0].clientX),
        { passive: true },
      );
      viewport.addEventListener("touchend", (e) => {
        if (startX === null) return;
        const diff = e.changedTouches[0].clientX - startX;
        if (Math.abs(diff) > 40) show(index + (diff < 0 ? 1 : -1));
        startX = null;
      });
    }

    show(0);
    wrap.appendChild(box);
  });
}
renderCertifications();
